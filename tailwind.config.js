/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#b2b2b2',
        customLightGray: '#f7f7f7',
        customDarkGray: '#3c4147',
        customBlue: '#598ecb',
        customBlack: '#33373c',
        customDarkGreen: '#3b7d2f',
      }
    },
  },
  plugins: [],
}

