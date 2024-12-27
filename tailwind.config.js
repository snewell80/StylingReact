/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./Index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        title:['"Pacifico"', 'cursive']
      }
    },
  },
  plugins: [],
}
