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
      red: "#ff5e57",
      yellow: "#ffdd59",
      blue: "#4bcffa",
      green: "#0be881",
      "text-color": "26342e",
      "primary-bg": "#ffffff",
      stone: colors.stone
    }
  },
  plugins: [],
}
