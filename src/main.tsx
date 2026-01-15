import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// --- ĐOẠN CODE SỬA LỖI ---
// Ép React vào biến toàn cục. Dù Vite có quên import thì dòng này sẽ cứu bạn.
if (typeof window !== 'undefined') {
  (window as any).React = React;
}
// -------------------------

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
