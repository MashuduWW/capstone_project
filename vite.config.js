import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'static/dist',
    rollupOptions: {
      input: {
        // Make sure this points to your CSS file
        main: 'static/input.css'
      },
      output: {
        assetFileNames: 'css/tailwind.css'
      },
    },
  },
})