import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Uncomment and update base if using GitHub Pages project site (username.github.io/repo-name/)
  // base: '/fairyastronaut/',
})
