/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors : {
        'primary-blue' : '#1B9AAA',
        'primary-orange' : '#D29C49'
      }
    },
  },
  plugins: [],
}

