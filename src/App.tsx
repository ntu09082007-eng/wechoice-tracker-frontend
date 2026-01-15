import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RealtimePage from "./pages/RealtimePage";
import StatsPage from "./pages/StatsPage";
import PredictionPage from "./pages/PredictionPage";
import AboutPage from "./pages/AboutPage";
// 👇 1. IMPORT TRANG CHART MỚI TẠO Ở ĐÂY
import ChartPage from "./pages/ChartPage"; 

import Header from "./components/Header";
import Footer from "./components/Footer";
import EmptyPage from "./pages/EmptyPage";

export default function App() {
  return (
    <Router>
      {/* Layout chính giữ nguyên style của bạn */}
      <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow w-full mb-[20px] min-h-[calc(100vh-80px)]">
          <div className="w-full px-4 md:px-6 py-8">
            <Routes>
              {/* Trang chủ mặc định chuyển hướng về realtime */}
              <Route index element={<Navigate to="/realtime" replace />} />
              <Route path="/realtime" element={<RealtimePage />} />
              
              {/* 👇 2. ĐỔI THÀNH /history ĐỂ KHỚP VỚI MENU "THỐNG KÊ" */}
              <Route path="/history" element={<StatsPage />} />
              
              {/* 👇 3. THÊM ROUTE MỚI CHO MENU "BIỂU ĐỒ" */}
              <Route path="/chart" element={<ChartPage />} />

              <Route path="/prediction" element={<PredictionPage />} />
              <Route path="/about" element={<AboutPage />} />
              
              {/* Trang 404 */}
              <Route path="*" element={<EmptyPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
