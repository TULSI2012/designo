/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'peach': '#E7816B',
        'light-peach': '#FFAD9B',
        'black': '#1D1C1E',
        'dark-grey': '#333136',
        'light-grey': '#F1F3F5'
      },
      fontFamily: {
        'jost' : ['Jost', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
