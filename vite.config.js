import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CampusePulse/',  // 👈 IMPORTANT: your repo name EXACTLY
})