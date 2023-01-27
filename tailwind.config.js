/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
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
      },
    },
  },
  plugins: [],
  important: true,
};
