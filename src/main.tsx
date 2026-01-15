import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// 1. Ép React vào biến toàn cục (Thuốc giải)
if (typeof window !== 'undefined') {
  (window as any).React = React;
}

// 2. Dùng import() động để BẮT BUỘC App phải chạy sau khi đã có thuốc
// Cách này khắc chế hoàn toàn lỗi "React is not defined"
import('./App').then(({ default: App }) => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
