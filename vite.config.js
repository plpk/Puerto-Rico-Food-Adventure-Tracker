import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Puerto-Rico-Food-Adventure-Tracker/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})