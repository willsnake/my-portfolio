import { defineConfig } from "astro/config";
import path from "path";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import { VitePWA } from "vite-plugin-pwa";
import { manifest, seoConfig } from "./src/utils/seoConfig";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), sitemap(), compress()],
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        manifest,
        workbox: {
          globDirectory: "dist",
          globPatterns: [
            "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
          ],
          // Don't fallback on document based (e.g. `/some-page`) requests
          // This removes an errant console.log message from showing up.
          navigateFallback: null,
        },
      }),
    ],
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@icons": path.resolve("./src/assets/svgs/icons"),
        "@imgs": path.resolve("./src/assets/imgs"),
        "@pages": path.resolve("./src/pages"),
        "@styles": path.resolve("./src/styles"),
        "@svgs": path.resolve("./src/assets/svgs"),
        "@utils": path.resolve("./src/utils"),
      },
    },
  },
  // site: "https://willsnake.github.io/",
  site: seoConfig.baseURL,
});
