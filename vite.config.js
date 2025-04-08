import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        gallery: path.resolve(__dirname, 'gallery.html'),
        food: path.resolve(__dirname, 'food.html'),
        place: path.resolve(__dirname, 'place.html'),
      }
    }
  }
})
