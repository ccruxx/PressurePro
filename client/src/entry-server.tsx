import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import { Router } from "wouter";
import App from "./App";

/**
 * Server entry used only by scripts/prerender.mjs at build time. It exists so
 * that crawlers which do not run JavaScript - Facebook, LinkedIn, Slack, and
 * most link unfurlers - receive the correct <title>, description, canonical,
 * Open Graph tags and JSON-LD for the URL they actually requested.
 *
 * Without it every route ships the homepage's <head>, because the SPA writes
 * its head tags from React after the page loads.
 *
 * The browser still boots with createRoot, not hydrateRoot, so the prerendered
 * markup is replaced rather than hydrated. That keeps a hydration mismatch from
 * ever becoming a runtime error, at the cost of one extra render.
 */
export function render(url: string): { html: string; head: string } {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <Router ssrPath={url}>
        <App />
      </Router>
    </HelmetProvider>,
  );

  const { helmet } = helmetContext;
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join("\n    ")
    : "";

  return { html, head };
}
