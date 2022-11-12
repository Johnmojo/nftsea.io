/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      gray: "#F5F6F8",
      darkGray: "#e1e1e1",
      black: "#3F3F3F",
      red: "#fd3636",
      blue: "#366ffd",
      green: "#36fd82",
    },
  },
  plugins: [],
};
