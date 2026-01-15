import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import các component con
import Header from '../components/Header';
import Footer from '../components/Footer';
import History from '../components/History';
import CategorySelector from '../components/CategorySelector'; // Import cái nút chọn hạng mục

export default function StatsPage() {
  // State quản lý hạng mục đang chọn (Mặc định là 1)
  const [selectedCategory, setSelectedCategory] = useState(1);
  
  // State chứa dữ liệu tải về từ API
  const [apiPayload, setApiPayload] = useState(null);
  const [loading, setLoading] = useState(false);

  // Hàm gọi API lấy lịch sử bình chọn
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Gọi API theo hạng mục đã chọn
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/votes/history/${selectedCategory}`
        );
        setApiPayload(response.data);
      } catch (error) {
        console.error("Lỗi khi tải lịch sử:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]); // Chạy lại mỗi khi đổi hạng mục

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Thống kê số liệu bình chọn
        </h1>

        {/* Khu vực chọn hạng mục (Dropdown) */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-2xl">
            <CategorySelector 
              selectedCategory={selectedCategory} 
              onSelect={setSelectedCategory} 
            />
          </div>
        </div>

        {/* Khu vực hiển thị Bảng Lịch Sử */}
        {loading ? (
          <div className="text-center py-12 text-gray-500 text-lg">
            Đang tải dữ liệu lịch sử...
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm">
             {/* Truyền dữ liệu apiPayload xuống cho History hiển thị */}
             <History apiPayload={apiPayload} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
