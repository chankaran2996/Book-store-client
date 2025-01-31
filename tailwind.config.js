/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary':'#FFCE1A',
        'secondary':'#0D0842',
        'Blackbg':'#F3F3F3',
        'Favorite':'#FF5841'
      },
      fontFamily:{
        'primary':["Montserrat", "serif"]
      },
    },
  },
  plugins: [],
}