/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Scan all HTML templates in your app
    "./workzone/templates/**/*.html",
    // If you have multiple apps, add them too
    // "./**/templates/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}