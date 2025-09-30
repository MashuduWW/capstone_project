/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/welcome.html",    // Your exact template file
    "./templates/**/*.html",       // Any other templates
    "./static/**/*.js",            // JS files
    "./static/**/*.html"           // HTML in static (for test files)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}