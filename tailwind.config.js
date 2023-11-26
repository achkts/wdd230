/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'header': 'auto 50px 80px',

      }

    },
  },
  plugins: [],
}

