import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',  //你要跨域访问的网址
                changeOrigin: true,   // 允许跨域
                rewrite: (path) => path.replace(/^\/api/, '') // 重写路径把路径变成空字符
            }
        }
    }
})
