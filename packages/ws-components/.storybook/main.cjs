const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const preprocess = require('svelte-preprocess');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: "@storybook/svelte",
  core: {
    builder: "@storybook/builder-vite"
  },
  async viteFinal(config, {configType}) {
    config.resolve.dedupe = ["@storybook/client-api"]
    return config
  },
  svelteOptions: {
    preprocess: preprocess({
      typescript: true,
      postcss: {
        plugins: [tailwindcss(), autoprefixer()]
      },
      sourceMap: true,
      scss: {
        prependData: `@import '../src/tailwind.scss';`
      }
    }),
  },
  staticDirs: ['../assets'],
}