import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ce.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `custom-elements.${format}.js`
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-') // 允許自定義元素
        }
      }
    })
  ],
})
