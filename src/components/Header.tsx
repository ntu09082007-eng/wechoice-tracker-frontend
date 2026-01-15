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
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          <Link to="/" className="text-gray-900 hover:text-black transition-colors">
            WeChoice 2025 Tracker
          </Link>
        </h1>

        {/* --- DESKTOP MENU --- */}
        <nav className="hidden xl:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              // BỎ logic kiểm tra isActive, áp dụng style cố định cho mọi trạng thái
              className="px-5 py-2.5 rounded-full font-bold transition-all duration-200
                         bg-white text-gray-600                                   /* 1. Mặc định: Trắng, Chữ xám */
                         hover:bg-gray-400 hover:text-white                       /* 2. Hover: Nền xám, Chữ trắng */
                         active:bg-black active:text-white                        /* 3. Click: Nền đen, Chữ trắng */
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
                         text-gray-600 bg-white
                         active:bg-black active:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
