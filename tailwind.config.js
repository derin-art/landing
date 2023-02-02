/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      xs: "340px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        lora: ["var(--lora-font)", "serif"],
        Arsenal: ["var(--Arsenal-font)", "serif"],
        loraI: ["var(--loraI-font)", "serif"],
        poppins: ["var(--poppins-font)", "serif"],
        Inter: ["inter", "sans"],
        Marcel: ["Marcel", "serif"],
        Neue: ["Neue", "sans"],
      },
      colors: {
        orangeHigh: "#ff5d3b",
        orangeLow: "#ff8526",
        blueLow: "#3027de",
        blueHigh: "#7b8cff",
        venomLime: "#4cf7029e",
        ultraGray: "#242424",
        ultraBlack: "#1a1a1a",
      },
    },
  },
  plugins: [],
  important: true,
};
