export default {
  build: {
    outDir: 'static/dist',
    rollupOptions: {
      input: 'static/main.js',
      output: {
        entryFileNames: 'assets/main.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
}
