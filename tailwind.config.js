const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"'],
        serif: ['"Roboto Serif"'],
        mono: ['"Roboto Mono"']
      },
      colors: {
        gray: colors.neutral,
      }
    },
  },
  plugins: [],
}
