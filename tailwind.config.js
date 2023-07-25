/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#218c74",
        white: "#f7f1e3",
        black: "#2C3E50",
      },
      animation: {
        blink: "blink-caret 1s infinite",
      },
      keyframes: {
        "blink-caret": {
          "0%, 50%": { borderRightColor: "transparent" },
          "100%": { borderRightColor: "#f7f1e3" },
        },
      },
    },
  },
  plugins: [],
};
