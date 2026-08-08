import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Two static pages — home at /, the launch invitation at /launch.
// A multi-page build means no client-side router and no host rewrite rules:
// each page is a real HTML file that any static host serves as-is.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        launch: resolve(__dirname, 'launch/index.html'),
      },
    },
  },
  server: { port: 5173, open: true },
})
