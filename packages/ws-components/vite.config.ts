import { resolve } from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import postcss from './postcss.config.mjs'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: [
        sveltePreprocess({
          typescript: true,
          sourceMap: true,
          postcss: {
            plugins: [tailwindcss(), autoprefixer()],
          },
          scss: {
            // We can use a path relative to the root because
            // svelte-preprocess automatically adds it to `includePaths`
            // if none is defined.
            prependData: `@import 'src/tailwind.scss';`
          },
        })]
    }),
    splitVendorChunkPlugin(),
  ],
  css: {
    postcss
  },
  build: {
    outDir: 'dist',
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src'),
      name: 'WsComponents',
      fileName: (format) => `ws-components.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['svelte'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          svelte: 'Svelte'
        }
      }
    }
  },
})
