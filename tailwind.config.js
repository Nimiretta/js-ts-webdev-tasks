/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,ts}"],
  safelist: [
    {
      pattern: /grid-rows-\d+/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /grid-cols-\d+/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      'text-primary': '#00000099',
      'tile-bg-gray': '#F0EEED',
      'bg-gray': '#F0F0F0',
      'btn-bg-gray': '#F2F0F1',
      'border-gray': '#0000001A',
      'discount-gray': '#999999',
      'discount-text-red': '#FF3333',
      'discount-bg-red': '#FF33331A',
      'rating-star': '#FFC633',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
