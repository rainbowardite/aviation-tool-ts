import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  build: {
      outDir: 'docs',
      emptyOutDir: true, // Clears the folder before building
    },
  plugins: [
    tailwindcss(),
  ],
})
