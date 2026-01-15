import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Dòng này cực quan trọng: Ép buộc sử dụng Runtime mới của React 19
      // Nó sẽ tự động tiêm React vào mọi nơi, bạn không cần import tay nữa.
      jsxRuntime: 'automatic', 
    })
  ],
})
