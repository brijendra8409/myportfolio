/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'primary':'#1A1B41'
      },
      fontFamily: {
        'display' : ['Poppins', 'sans-serif'],
        'body' : ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

