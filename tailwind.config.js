/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pokemon': {
          primary: '#0075BE',
          dark: '#0A285F',
          secondary: '#FFCC00',
          secondarydark: '#D5A100'
        },
      },
    },
  },
  plugins: [],
}
