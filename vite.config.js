import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/HealthCare_Dashboard/',  // <-- add this line, replace with your repo name
  plugins: [
    react(),
    tailwindcss(),
  ],
})
