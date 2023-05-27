/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#FFCC21",
        400: "#FF963C",
        500: "#EA6C00",
      },
      secondary: "#8FE9D0",
      light: colors.white,
      dark: {
        DEFAULT: "#2E2E2E",
        500: "#414141",
      },
      grey: "#777777",
    },
    extend: {},
  },
  plugins: [],
};
