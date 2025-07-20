/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF7E0',
        'primary-blue': '#283E84',
        'accent-blue': '#4A72A8',
        'laurel-green': '#98B089',
        'warm-gold': '#F9B223',
        'text-dark': '#1F1F1F',
        'primary-black': '#1F1F1F',
        'accent-black': '#2D2D2D',
        'dark-gray': '#404040',
        'text-light': '#FFFFFF',
        'text-gray': '#B0B0B0',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};