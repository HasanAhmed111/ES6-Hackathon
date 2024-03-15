/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_color:'#d00000',
        secondary_color:'#c1121f',
        bg_color:'#ffddd2',
      }
    },
  },
  plugins: [],
}