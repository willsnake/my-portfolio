import { defineConfig } from "astro/config";
import path from "path";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  vite: {
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@pages": path.resolve("./src/pages"),
      },
    },
  },
  site: "https://willsnake.github.io",
  base: "/my-portfolio"
});
