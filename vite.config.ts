import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Dòng này sẽ ép trình duyệt hiểu React, sửa lỗi màn hình trắng
    jsxInject: "import React from 'react'", 
  },
})
