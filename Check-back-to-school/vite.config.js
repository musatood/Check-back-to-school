import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    babel: {
      plugins: ['babel-plugin-macros']
    }
  })],
  base: '/Check-back-to-school/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['@babel/standalone']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})