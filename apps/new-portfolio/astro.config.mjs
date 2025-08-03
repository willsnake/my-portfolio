// @ts-check

import { resolve } from 'node:path';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://production.willsnake.dev',
  integrations: [mdx(), sitemap(), preact()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': resolve('./src/components'),
        '@icons': resolve('./src/assets/svgs/icons'),
        '@imgs': resolve('./src/assets/imgs'),
        '@pages': resolve('./src/pages'),
        '@styles': resolve('./src/styles'),
        '@layouts': resolve('./src/layouts'),
        '@svgs': resolve('./src/assets/svgs'),
        '@utils': resolve('./src/utils'),
        '@customTypes': resolve('./types.ts'),
      },
    },
    ssr: {
      noExternal: ['css-variants', 'radash'],
    },
  },
});
