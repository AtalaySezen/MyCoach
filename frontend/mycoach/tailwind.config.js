/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('./assets/images/background/test.jpg')",
        'register': "url('./assets/images/background/home-bg (1).jpg')"
      }
    },
  },
  plugins: [],
}