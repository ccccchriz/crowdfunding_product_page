/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-cyan": "hsl(176, 50%, 47%)",
      "primary-dark-cyan": "hsl(176, 72%, 28%)",
      "neutral-dark-gray": "hsl(0, 0%, 48%)",
      "neutral-light-gray": "hsl(0, 0%, 97%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
    },
    fontFamily: {
      primary: ["Commissioner", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
