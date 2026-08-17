/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#0A1E2E',
        'navy-mid': '#113A52',
        teal: '#1C5A6E',
        gold: '#C9A24A',
        'gold-light': '#E4C878',
        cream: '#F4EFE3',
        ink: '#0A1E2E',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
