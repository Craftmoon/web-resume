/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Nunito Sans",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        primary: "#007FFF",
        secondary: "#EFEFEF",
        black: {
          1: "#000000",
          2: "#252525",
          3: "#333333",
        },
      },
    },
  },
  plugins: [],
};
