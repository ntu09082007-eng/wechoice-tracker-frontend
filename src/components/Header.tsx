import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Danh sách các link menu
  const navLinks = [
    { to: "/realtime", label: "Kết quả" },
    { to: "/history", label: "Thống kê" },
    { to: "/chart", label: "Biểu đồ" },
    { to: "/prediction", label: "Dự đoán" },
    { to: "/about", label: "Giới thiệu & Hướng dẫn" },
  ];

  // Hiệu ứng shadow khi cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-[80px] flex items-center justify-between">
        {/* === LOGO & TIÊU ĐỀ (Phần đã sửa) === */}
        <Link to="/" className="flex items-center group">
          {/* 1. HÌNH ẢNH LOGO MỚI (Ví dụ là icon SVG) */}
          {/* Bạn có thể thay thế toàn bộ thẻ svg này bằng thẻ img của bạn:
              <img src="/path/to/your/logo.png" alt="Logo" className="w-10 h-10 mr-3" /> 
          */}
          <svg 
            className="w-10 h-10 mr-3 text-gray-900 group-hover:text-black transition-colors" 
            viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 7H13V13H15V7H17V17H15V15H13V17H11V15H9V17H7V7H9V13H11V7Z" />
          </svg>

          {/* 2. CHỮ "WeChoice 2025 Tracker" ĐÃ SỬA */}
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-black transition-colors tracking-normal inline-block transform scale-x-110 origin-left">
            WeChoice 2025 Tracker
          </h1>
        </Link>


        {/* --- DESKTOP MENU --- */}
        <nav className="hidden xl:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              // CHỈ CÒN HOVER (Xám/Trắng), KHÔNG CÒN ACTIVE ĐEN
              className="px-5 py-2.5 rounded-full font-bold transition-all duration-200
                         bg-white text-gray-600
                         hover:bg-gray-400 hover:text-white
                         hover:shadow-md"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg border-t border-gray-100 p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 rounded-lg font-semibold text-center transition-colors
                         text-gray-600 bg-white hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
