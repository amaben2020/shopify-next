/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: ['./src/**/*.{html,js}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
};
