/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9c7fd3",
        secondary: "#a690c5",
        higlight1: "#9e5ef8",
        higlight2: "#6a558a",
        question: '#c1b2dd',
        completeText: '#3a2353',
        hoverButton: '#9d5af5',
        bgButton: '#6cb7f5',
      },
      fontFamily: {
        RobotoCondensed: ['Roboto Condensed', 'sans-serif'],
        RobotoNormal: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
