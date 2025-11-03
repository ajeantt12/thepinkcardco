/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px'
      },
      rotate: {
        'y-12': '12deg'
      }
    }
  },
  plugins: []
}
