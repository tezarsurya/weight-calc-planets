module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Roboto Serif', 'serif']
    },
    extend: {
      backgroundImage: {
        'main-bg': "url('/img/twinkling-stars-gif-6.gif')"
      }
    },
  },
  plugins: [],
}
