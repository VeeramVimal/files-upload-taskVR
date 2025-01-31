/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // darkMode: ['class', '[data-mode="dark"]'],
  darkMode: 'class', // enable dark mode
  theme: {
    extend: {
      height:{
        '500':'500px',
        '450' : '450px',
        '550' : '550px',
        ...defaultTheme.height
      },
      colors:{
        primary: '#3761EE',
        textcolor: '#22314F',
        bordercolor: '#DADFF8',
        ...defaultTheme.colors
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '8rem'
        },
      },
    },
  },
  plugins: [],
}

