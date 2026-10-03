import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    host: '0.0.0.0',
    allowedHosts: ['.airoapp.ai']
  },

  preview: {
    host: '0.0.0.0',
    allowedHosts: [
      'xaaj.in',
      'www.xaaj.in',
      '.airoapp.ai'
    ]
  }
})