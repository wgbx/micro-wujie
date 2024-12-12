import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'

export default {
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8010
  }
}
