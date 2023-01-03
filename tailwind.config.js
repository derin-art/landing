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
      },
    },
  },
  plugins: [],
};
