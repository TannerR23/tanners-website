import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/tanners-website/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        receivedEmail: 'receivedEmail.html'
      }
    }
  }
})
