import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites at https://<user>.github.io/<repo>/
// Set VITE_BASE_PATH=/your-repo-name/ when building for GitHub Pages.
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react()],
})
