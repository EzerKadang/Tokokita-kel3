/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway"],
        roboto: ["Roboto"],
      },
      colors: {
        primary: "#00aa5b",
        primarybg: "#fef6f5",
        secondarybg: "#FFEEE8",
      },
    },
  },
  plugins: [],
};
