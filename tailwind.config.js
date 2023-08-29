/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'lato': ['Fira Code', 'Lato', 'Oswald'],
    },
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

