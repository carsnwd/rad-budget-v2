/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#f8f8f2",
      "text-color": "26342e",
      "primary-bg": "#ffffff",
      stone: colors.stone
    }
  },
  plugins: [],
}
