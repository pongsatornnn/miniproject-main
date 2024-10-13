/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ["Protest Strike Static"],
        songFont: ["PT Sans Static"],
        thaiFont: ["Anuphan"]
      }
    },
  },
  plugins: [],
}

