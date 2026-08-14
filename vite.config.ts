import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: 'https://rainbowardite.github.io/aviation-tool-ts/',
  build: {
      outDir: 'docs',
      emptyOutDir: true,
    },
  plugins: [
    tailwindcss(),
  ],
})
