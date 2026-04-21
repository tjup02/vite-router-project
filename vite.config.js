import { fileURLToPath, URL } from 'node:url'

// vite.config.js 是 Node 環境執行的設定檔，
// import.meta.env 是 Vite 在「前端建置後」才注入的變數，
// 所以在 config 階段需要用 loadEnv() 來手動讀取 .env。
import { loadEnv } from 'vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  return {
    // 利用環境變數，當推到github時，設定根目錄為/vite-router-project/
    base: env.VITE_BASE || '/',
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
