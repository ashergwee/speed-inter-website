/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'deepest-blue': '#001d3d',
      'deep-blue': '#00b4d8',
      'lightest-blue':'#edf2fb',
      'light-blue':'#90e0ef'

    },
    screens:{
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
    },
    extend: {},
  },
  plugins: [],
}
