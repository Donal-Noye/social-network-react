/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#393646',
        'brown': '#4F4557',
      },
      fontFamily: {
        'poppins': 'Poppins'
      }
    },
  },
  plugins: [],
}