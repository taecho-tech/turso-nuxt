/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      extend: {
        colors: {
            'turso': '#4ff8d2',
            'turso-dark': 'rgb(63 167 147)',
            'turso-bg': '#1B252D',
            'taecho': '#F37322',
        }
      },
    },
    plugins: [],
  }