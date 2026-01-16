// @ts-nocheck
/* eslint-disable */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  // Hàm kiểm tra trạng thái Active
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { name: 'Kết quả', path: '/' },
    { name: 'Thống kê', path: '/stats' },
    { name: 'Biểu đồ', path: '/charts' },
    { name: 'Dự đoán', path: '/prediction' },
    { name: 'Giới thiệu & Hướng dẫn', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Tên thương hiệu màu xanh dương đậm */}
          <div className="text-xl font-extrabold text-blue-700 hidden md:block">
             WeChoice 2025 Tracker
          </div>

          {/* Thanh điều hướng */}
          <nav className="flex items-center gap-1 md:gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar justify-center md:justify-end">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 md:px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                  isActive(item.path)
                    ? 'bg-slate-400 text-white shadow-sm' // Nền xám chữ trắng như cũ
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900' // Chữ xám nền trong suốt
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
