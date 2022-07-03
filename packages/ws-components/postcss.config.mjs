import tailwindPlugin from "tailwindcss"
import autoprefixer from "autoprefixer"
import postCssImport from "postcss-import"
import postCssNesting from "postcss-nesting"
import tailwindcss from './tailwind.config.mjs'

export default {
  plugins: [
    postCssImport,
    postCssNesting,
    tailwindPlugin(tailwindcss),
    autoprefixer
  ]
}
