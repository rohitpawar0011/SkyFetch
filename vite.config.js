import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Binds the server to all network interfaces
    port: 5175,        // The port you're using (or any available port)
  }
})
