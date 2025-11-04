/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#e9edff',
          200: '#cfd9ff',
          300: '#a9baff',
          400: '#7b92ff',
          500: '#586bff',
          600: '#3f4bdb',
          700: '#303ab0',
          800: '#29328e',
          900: '#252c75'
        }
      }
    },
  },
  plugins: [],
}
