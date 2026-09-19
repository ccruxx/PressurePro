// Single source of truth for the site's public routes.
//
// Both the sitemap generator and the prerenderer read this, so a new city or
// stone page can never end up in one and missing from the other.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const SITE_URL = "https://dfwpristinepowerwashing.com";

// Derived from the page files rather than hand-maintained: this list had
// previously drifted to 15 of 31 city pages.
const cityPagesDir = path.join(__dirname, "../client/src/pages/service-areas");
const cities = fs
  .readdirSync(cityPagesDir)
  .filter((f) => f.endsWith(".tsx") && f !== "index.tsx")
  .map((f) => f.replace(/\.tsx$/, ""))
  .sort();

const services = [
  "pressure-washing",
  "house-washing",
  "roof-cleaning",
  "driveway-concrete-cleaning",
  "delicate-stone-cleaning",
  "commercial-pressure-washing",
  "window-cleaning",
];

const stoneTypes = [
  "limestone",
  "austin-stone",
  "flagstone",
  "pennsylvania-stone",
  "lueders-stone",
];

/** Routes that belong in the sitemap, with their crawl hints. */
export const SITEMAP_ROUTES = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "about", priority: "0.8", changefreq: "monthly" },
  { path: "services", priority: "0.9", changefreq: "weekly" },
  { path: "service-areas", priority: "0.9", changefreq: "weekly" },
  { path: "gallery", priority: "0.7", changefreq: "monthly" },

  ...stoneTypes.map((slug) => ({
    path: `services/delicate-stone-cleaning/${slug}`,
    priority: "0.8",
    changefreq: "monthly",
  })),

  ...services.map((slug) => ({
    path: `services/${slug}`,
    priority: "0.8",
    changefreq: "monthly",
  })),

  ...cities.map((slug) => ({
    path: `service-areas/${slug}`,
    priority: "0.7",
    changefreq: "monthly",
  })),
];

/**
 * Every route to prerender. This is the sitemap plus /quote-preview, which is
 * a real page people can be sent straight to but is deliberately kept out of
 * the sitemap.
 */
export const PRERENDER_ROUTES = [
  ...SITEMAP_ROUTES.map((r) => `/${r.path}`.replace(/\/$/, "") || "/"),
  "/quote-preview",
];
