// @ts-nocheck
/* eslint-disable */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  // Kiểm tra trang hiện tại để set trạng thái Active
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
          
          {/* Tên thương hiệu */}
          <div className="text-xl font-extrabold text-blue-700 hidden md:block">
             WeChoice 2025 Tracker
          </div>

          {/* Thanh Menu */}
          <nav className="flex items-center gap-1 md:gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar justify-center md:justify-end">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={active ? { backgroundColor: '#1D1E2C' } : {}}
                  className={`px-3 md:px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                    active
                      ? 'text-white shadow-md' // Đang ở tab nào: Chữ trắng, nền xanh đen (set qua style)
                      : 'text-gray-500 bg-transparent hover:bg-gray-200 hover:text-white' // Bình thường: Chữ xám, nền trong. Hover: Nền xám nhạt, chữ trắng.
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
