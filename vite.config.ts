import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VueHooksPlusResolver } from '@vue-hooks-plus/resolvers'
import autoprefixer from 'autoprefixer' // 静态导入 Autoprefixer
import postcssPxToViewport from 'postcss-px-to-viewport-8-plugin' // 静态导入 postcss-px-to-viewport-8-plugin

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    host: true,
    open: true
  },
  plugins: [
    AutoImport({
      //解决报错，会生成一个auto-import文件，不要删掉。
      dts: 'src/auto-import.d.ts',
      imports: ['vue'],
      resolvers: [VueHooksPlusResolver()]
    }),
    vue(),
    vueDevTools(),
    UnoCSS()
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        postcssPxToViewport({
          viewportWidth: 1920,
          viewportHeight: 1080,
          unitPrecision: 5,
          viewportUnit: 'rem'
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
