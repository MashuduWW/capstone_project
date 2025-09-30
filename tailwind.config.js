/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./templates/**/*.html",
    "./static/**/*.js",
    // Add other template directories if needed
    "./capstone_project/templates/**/*.html",
    "./**/*.html" // This might be too broad, but catches everything
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}