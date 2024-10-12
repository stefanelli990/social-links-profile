/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',      
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        slate: {
          300: '#D5E1EF',
          500: '#68778D',
          900: '#1F314F'
        },
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 4.77%) 0px 0px 25px'
      },
    },
  },
  plugins: [],
}