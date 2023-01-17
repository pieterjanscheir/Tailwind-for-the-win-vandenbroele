/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '510px': '510px',
      },
      colors: {
        'babyBlue': '#CCEFFF',
        'babyBlueLight': '#E5FFF7'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
