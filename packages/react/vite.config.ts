import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  server: {
    port: 8881
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },

  plugins: [
    UnoCSS(),
    react(),
    AutoImport({
      include: [/\.[tj]sx?$/],
      imports: ['react'],
      dts: resolve(resolve(__dirname, 'types'), 'auto-imports.d.ts')
    })
  ]
})
