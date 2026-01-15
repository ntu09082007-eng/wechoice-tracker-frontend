import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Dòng này ép buộc Vite dùng chế độ 'classic' để tương thích với code hiện tại
  plugins: [react({ jsxRuntime: 'classic' })], 
  esbuild: {
    // Dòng này tiêm React vào mọi file .tsx khi build
    jsxInject: `import React from 'react'`, 
  },
})
