import { URL, fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const chunksMap = ['element-plus', 'lodash-es', 'axios', 'vue-router', 'vuedraggable']

// const HOST = 'https://vas-emp-deb.ycb51.cn' // 联调环境
const HOST = 'https://vas-emp.ycb51.cn' // 测试环境

export default defineConfig(({ mode }) => {
  return {
    base: '/ybtadmin/',
    build: {
      target: 'esnext',
      reportCompressedSize: false,
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            const chunks = chunksMap.find(item => id.includes(item))
            if (chunks) {
              return chunks
            }
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    },
    esbuild:
      mode === 'development'
        ? {}
        : {
            drop: ['console', 'debugger']
          },
    server: {
      port: 9000,
      proxy: {
        '/api': {
          target: HOST,
          changeOrigin: true
        },
        '/assets': {
          target: HOST,
          changeOrigin: true
        }
      }
    },
    plugins: [
      vue(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        imports: ['vue', 'vue-router'],
        eslintrc: {
          enabled: false, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        dts: path.resolve(path.resolve(__dirname, 'types'), 'auto-imports.d.ts')
      }),
      Components({
        dirs: ['src/components'],
        resolvers: [
          ElementPlusResolver({
            importStyle: false // 已全局引入样式
          })
        ],
        dts: path.resolve(path.resolve(__dirname, 'types'), 'components.d.ts')
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
        customDomId: '__svg__icons__dom__'
      }),
      Unocss()
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/variables.scss" as *;`
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
