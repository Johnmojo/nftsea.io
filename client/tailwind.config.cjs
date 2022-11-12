/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        commissioner: ["commissioner", "sans-serif"],
      },
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    colors: {
      white: "#FFFFFF",
      "purple-100": "#EAECFF",
      "purple-500": "#BCC3FF",
      "purple-700": "#858AB5",
      "purple-800": "#676B8C",
      "purple-900": "#4F526B",
      "grey-50": "#EBEBEB",
      "grey-100": "#C0C0C0",
      "grey-300": "#767676",
      "grey-500": "#333333",
      "grey-900": "#151515",
    },
  },
  plugins: [],
};
