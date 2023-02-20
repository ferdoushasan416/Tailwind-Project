/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          "primary": "#01051e",
          "secondary": "#ff7d3d",
          "orange": {
            DEFAULT: "#E39929"
          },
          "gray": {
            DEFAULT: "#F3F5F8"
          },
          "black": {
            DEFAULT: "#2E2F33",
            "dark": "#283842"
          },
          "btn": {
            "primary": "#00aeef",
            "secondary": "#e79800"
          },
          "lead": "#777",
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
