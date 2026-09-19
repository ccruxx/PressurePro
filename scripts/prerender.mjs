// Build-time prerender.
//
// The site is a client-rendered SPA, so every route used to ship the
// homepage's <head>. Google runs JavaScript and saw the right thing, but link
// unfurlers (Facebook, LinkedIn, Slack, iMessage) do not, so every shared URL
// previewed as the homepage.
//
// This renders each public route to a static index.html after the client
// build. Vercel serves a matching static file before it applies the SPA
// rewrite, so /services/house-washing/index.html wins over the catch-all.
//
// Run as: vite build && vite build --ssr && node scripts/prerender.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { PRERENDER_ROUTES } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CLIENT_OUT = path.join(ROOT, "dist/public");
const SSR_ENTRY = path.join(ROOT, "dist/ssr/entry-server.js");

const template = fs.readFileSync(path.join(CLIENT_OUT, "index.html"), "utf8");
const { render } = await import(pathToFileURL(SSR_ENTRY).href);

// The built index.html already carries the SPA's own head tags. Helmet emits
// the route-specific versions of title / description / canonical / og:* /
// twitter:* / JSON-LD, so the baked-in ones are stripped before injection or
// crawlers see two of each and pick whichever they like.
const MANAGED = /<title>[\s\S]*?<\/title>|<meta\s+(?:name|property)="(?:description|keywords|author|robots|og:[^"]+|twitter:[^"]+)"[^>]*>|<link\s+rel="canonical"[^>]*>/gi;

let ok = 0;
const failures = [];

for (const route of PRERENDER_ROUTES) {
  try {
    const { html, head } = render(route);
    if (!head.includes("<title")) throw new Error("helmet produced no <title>");

    let page = template.replace(MANAGED, "");
    page = page.replace("</head>", `  ${head}\n  </head>`);
    page = page.replace(
      /(<div id="root">)(<\/div>)/,
      (_m, open, close) => `${open}${html}${close}`,
    );
    if (!page.includes('id="root"')) throw new Error("no #root in template");

    const outDir =
      route === "/" ? CLIENT_OUT : path.join(CLIENT_OUT, route.replace(/^\//, ""));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), page);
    ok++;
  } catch (err) {
    failures.push(`${route}: ${err.message}`);
  }
}

console.log(`✓ Prerendered ${ok}/${PRERENDER_ROUTES.length} routes`);
if (failures.length) {
  console.error(`✗ ${failures.length} route(s) failed:`);
  failures.forEach((f) => console.error("   " + f));
  process.exit(1);
}
