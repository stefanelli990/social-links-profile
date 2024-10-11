/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 4.77%) 0px 0px 25px'
      },
    },
  },
  plugins: [],
}