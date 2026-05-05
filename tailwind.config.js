/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        axo: {
          black: "#000000",
          dark: "#474747",
          muted: "#8F9491",
          orange: "#FC6625",
          white: "#FFFFFF",
        },
        biz: {
          darkest: "#13293D",
          dark: "#006494",
          mid: "#247BA0",
          light: "#1B98E0",
          pale: "#E8F1F2",
        },
        health: {
          darkest: "#296B56",
          dark: "#44957C",
          mid: "#79BBA3",
          light: "#BBDAC3",
          pale: "#D1E1D4",
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        sparo: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
