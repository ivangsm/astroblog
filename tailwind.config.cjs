const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.lime,
      },
      fontFamily: {
        sans: ["'Quicksand'", ...defaultTheme.fontFamily.sans],
        mono: ['courier', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-textshadow')],
  darkMode: 'class',
}
