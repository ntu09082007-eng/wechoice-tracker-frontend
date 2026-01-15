import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// --- ĐOẠN NÀY LÀ QUAN TRỌNG NHẤT ---
// Ép React vào biến toàn cục để sửa lỗi "React is not defined" bất chấp cấu hình
if (typeof window !== 'undefined') {
  (window as any).React = React;
}
// -----------------------------------

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
