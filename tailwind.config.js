/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      colors: {
        grafit: '#494949',
        gray: ' #939393',
        lightgray: '#7B7B7B',
        orange: '#FE5B00',
      },
    },
    screens: {
      s: '320px',
      m: '440px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
  },

  plugins: [],
};
