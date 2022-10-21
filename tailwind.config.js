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
    borderRadius:{
      "curved":"50% 100%",
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl':'1.5rem',
    },
    extend: {},
  },
  plugins: [],
}
