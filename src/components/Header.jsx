// @ts-nocheck
/* eslint-disable */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  // Hàm kiểm tra xem đường dẫn hiện tại có khớp với menu không để hightlight
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Class cho nút trạng thái thường (Chưa chọn)
  const baseClass = "px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 whitespace-nowrap";
  const inactiveClass = "text-gray-600 hover:bg-gray-100 hover:text-gray-900";
  
  // Class cho nút trạng thái ĐANG CHỌN (Gradient xanh tím + Chữ trắng)
  const activeClass = "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md hover:brightness-110";

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
        {/* Logo hoặc Tên trang web (Optional) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 hidden md:block">
             WeChoice 2025 Tracker
          </div>

          {/* Thanh Menu Chính */}
          <nav className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar justify-center md:justify-end">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${baseClass} ${isActive(item.path) ? activeClass : inactiveClass}`}
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
