import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Charts from '../components/Charts'; // Import component Biểu đồ

export default function ChartPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Biểu đồ thống kê
        </h1>

        {/* Khu vực hiển thị biểu đồ */}
        <div className="bg-white p-4 rounded-xl shadow-lg">
           <Charts />
        </div>
      </main>

      <Footer />
    </div>
  );
}
