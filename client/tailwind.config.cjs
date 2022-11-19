/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        commissioner: ["commissioner", "sans-serif"],
      },
      boxShadow: {
        card: "0px 8px 24px rgba(133, 138, 181, 0.12)",
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
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [],
};
