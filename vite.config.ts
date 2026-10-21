// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages build: static prerender under /HealthyBites/. Lovable builds are unaffected.
const isGhPages = process.env.GITHUB_PAGES === "true";
const base = "/HealthyBites/";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGhPages
      ? {
          router: { basepath: base },
          prerender: { enabled: true, crawlLinks: true, autoSubfolderIndex: true },
          pages: [{ path: "/" }, { path: "/recipes/healthy-low-carb-vegetarian" }],
        }
      : {}),
  },
  ...(isGhPages ? { nitro: false, vite: { base } } : {}),
});
