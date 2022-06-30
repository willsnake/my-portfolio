import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: [
        sveltePreprocess({
          typescript: true,
          scss: true,
          sourceMap: true
        })]
    })
  ],
  build: {
    outDir: 'dist',
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
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
