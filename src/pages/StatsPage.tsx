import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import History from '../components/History';
import CategorySelector from '../components/CategorySelector';

export default function StatsPage() {
  // State lưu hạng mục đang chọn (mặc định là 1)
  const [selectedCategory, setSelectedCategory] = useState(1);
  // State lưu dữ liệu tải về từ API
  const [apiPayload, setApiPayload] = useState(null);

  // Gọi API mỗi khi đổi hạng mục
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/votes/history/${selectedCategory}`
        );
        setApiPayload(response.data);
      } catch (error) {
        console.error("Lỗi tải dữ liệu:", error);
      }
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Thống kê lịch sử bình chọn
        </h1>

        {/* Nút chọn hạng mục */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-2xl">
            <CategorySelector 
              selectedCategory={selectedCategory} 
              onSelect={setSelectedCategory} 
            />
          </div>
        </div>

        {/* Bảng lịch sử (Truyền apiPayload vào đây thì nó mới hiện) */}
        {apiPayload ? (
           <History apiPayload={apiPayload} />
        ) : (
           <div className="text-center py-10">Đang tải dữ liệu...</div>
        )}
      </main>

      <Footer />
    </div>
  );
}
