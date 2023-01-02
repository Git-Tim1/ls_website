/* @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-white': '#FDFDFD',
        'magenta': '#E5007D',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '7/8': '7 / 8',
        '3/4': '3 / 4',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
      },
    },
    screens: {
      '4xs': '350px',
      '3xs': '420px',
      'xxs': '475px',
      'xs': '550px',
      'm-l': '900px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
