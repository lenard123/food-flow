const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        black: '#1C2434',
        primary: {
          ...colors.blue,
          DEFAULT: colors.blue[500],
        },
      }
    },
  },
  plugins: [],
}

