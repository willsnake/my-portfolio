import type { Preview } from '@storybook/preact-vite';
import '@ws-portfolio/styling/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#333' },
        light: { name: 'Light', value: '#F7F9F2' },
        grey: { name: 'Grey', value: '#CCC' },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'grey' },
  },
};

export default preview;
