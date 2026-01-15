import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import History from '../components/History'; // Import component History

export default function StatsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Thống kê lịch sử bình chọn
        </h1>
        {/* Chỉ hiển thị Bảng lịch sử, đã xóa phần Charts */}
        <div className="space-y-8">
          <History />
        </div>
      </main>
      <Footer />
    </div>
  );
}
