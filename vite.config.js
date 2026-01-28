import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CampusPulse/',  // 👈 IMPORTANT: your repo name EXACTLY
})