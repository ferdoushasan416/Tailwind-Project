/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          "primary": "#01051e",
          "orange": "#E39929",
          "gray": "#F3F5F8",
          "black": "#2E2F33",
          "black-dark": "#283842",
          "secondary": "#ff7d3d",
          "btn-color": "#00aeef",
          "btn-2": "#e79800",
          "p-color": "#777",
      }
    },
   container: {
     center: true,
     padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
   }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
