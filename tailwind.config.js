/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16A085",
        white: "#ECF0F1",
        black: "#2C3E50",
      },
    },
  },
  plugins: [],
};
