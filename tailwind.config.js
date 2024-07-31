/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage:{
        'home1': "url('./images/home-1.jpg')",

      }
    },
  },
  plugins: [],
}

