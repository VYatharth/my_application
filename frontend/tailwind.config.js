/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3758f9',
        'body-color': '#637381'
      },
      boxShadow: {
        '2': '0px 5px 12px 0px rgba(0, 0, 0, 0.40)',
      }
    },
  },
  plugins: [],
}

