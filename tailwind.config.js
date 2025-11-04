/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FAF0D7',
        secondary: '#FFD9C0',
        accent: '#8CC0DE',
        success: '#CCEEBC',
      },
      fontFamily: {
        sans: ['"Sofia Sans Extra Condensed"', 'sans-serif'],
      },
      fontWeight: {
        extralight: '200',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
}
