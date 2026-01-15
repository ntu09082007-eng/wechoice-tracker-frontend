import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/realtime", label: "Kết quả" },
    { to: "/stats", label: "Thống kê" },
    { to: "/prediction", label: "Dự đoán" },
    { to: "/about", label: "Giới thiệu & Hướng dẫn" },
  ];

  return (
    <header className="bg-white shadow-lg w-full border-b border-gray-200">
      <div className="w-full px-8 md:px-16 lg:px-24 py-5">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            <Link
              to="/realtime"
              className="hover:opacity-90 transition-opacity duration-200 font-bold text-gray-900"
            >
              <span>WeChoice 2025 Tracker</span>
            </Link>
          </h1>

          {/* Desktop Navigation */}
          {/* ... Các đoạn code import giữ nguyên ... */}

{/* Tìm đến đoạn Menu Navigation và sửa lại như sau: */}
<nav className="hidden md:flex space-x-2">
  <Link to="/" className="px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100 font-medium">
    Kết quả
  </Link>
  
  {/* 1. Trang Thống kê (Chỉ chứa bảng lịch sử) */}
  <Link to="/history" className="px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100 font-medium">
    Thống kê
  </Link>

  {/* 2. Trang Biểu đồ (MỚI THÊM VÀO) */}
  <Link to="/chart" className="px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100 font-medium">
    Biểu đồ
  </Link>

  <Link to="/prediction" className="px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100 font-medium">
    Dự đoán
  </Link>
  <Link to="/about" className="px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100 font-medium">
    Giới thiệu & Hướng dẫn
  </Link>
</nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden bg-gray-100 text-gray-900 p-2 hover:bg-gray-200 rounded-lg transition-colors shadow-md"
            aria-label="Toggle menu"
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
          <nav className="xl:hidden mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center ${
                  location.pathname === link.to
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
