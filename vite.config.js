// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/], // CommonJS 모듈의 변환을 허용할 경로
      defaultIsModuleExports: true, // CommonJS 모듈을 default export로 변환
    },
  },
  optimizeDeps: {
    include: ["vue3-leaflet", "leaflet"], // 이 설정은 유지
    exclude: ["object-assign"], // 문제를 일으키는 모듈을 번들링에서 제외
  }
});