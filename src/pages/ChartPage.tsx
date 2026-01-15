import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Charts from '../components/Charts'; // Import component Charts từ thư mục components

export default function ChartPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Biểu đồ xu hướng
        </h1>
        {/* Chỉ hiển thị Biểu đồ */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
           <Charts />
        </div>
      </main>
      <Footer />
    </div>
  );
}
