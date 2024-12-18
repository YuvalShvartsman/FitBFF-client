/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      light: "#ffffff",
      dark: "#131f24", 
      blue: {
        100: "#090088",
        200: "#02006c",
        300: "#010057",
        400: "#010048",
        500: "#03002e",
      },
      gold: {
        100: "#ffd700",
        200: "#ffc300",
        300: "#ffb100",
        400: "#ffa000",
        500: "#ff8f00",
      },
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      segoe: ["Segoe Ui"],
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "rounded": "6px",
      },
    },
  },
  plugins: [],
};
