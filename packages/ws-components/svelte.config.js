import sveltePreprocess from 'svelte-preprocess'
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    typescript: true,
    sourceMap: true,
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    },
    scss: {
      // We can use a path relative to the root because
      // svelte-preprocess automatically adds it to `includePaths`
      // if none is defined.
      prependData: `@import 'src/tailwind.scss';`
    },
  })
}
