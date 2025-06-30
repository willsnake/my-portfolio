/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      gridRowStart: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        'black-blue': '#111111',
        'dark-blue': '#254F85',
        blue: '#1076F9',
        'dark-gray': '#333333',
        gray: '#666666',
        'light-gray': '#999999',
        'lightest-gray': '#EAEAEA',
        'dark-white': '#FAFAFA',
      },
      boxShadow: {
        'card-blog': '0px 5px 14px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
