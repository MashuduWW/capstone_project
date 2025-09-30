export default {
  build: {
    outDir: 'static/dist',
    rollupOptions: {
      input: 'static/input.css',  // Process your CSS file
      output: {
        assetFileNames: 'css/tailwind.css'  // Output to clean path
      },
    },
  },
}