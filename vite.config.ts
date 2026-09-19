import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async () => ({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  // The build-time prerender (scripts/prerender.mjs) imports the SSR bundle
  // directly with node. Several dependencies here - react-helmet-async among
  // them - still ship CommonJS, which a bare `import` of an ESM bundle cannot
  // destructure, so the SSR build bundles everything rather than externalising.
  ssr: {
    noExternal: true,
  },
  server: {
    allowedHosts: [".replit.dev"], // 👈 Fix for Replit preview error
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
}));
