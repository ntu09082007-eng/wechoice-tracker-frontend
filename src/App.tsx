import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";

// Import các trang
import RealtimePage from "./pages/RealtimePage";
import StatsPage from "./pages/StatsPage";
import PredictionPage from "./pages/PredictionPage";
import AboutPage from "./pages/AboutPage";
import ChartPage from "./pages/ChartPage";
import EmptyPage from "./pages/EmptyPage";

// Import Header/Footer
import Header from "./components/Header";
import Footer from './components/Footer';

// 👇 LAYOUT NÀY SẼ TỰ ĐỘNG THÊM HEADER/FOOTER CHO CÁC TRANG CÒN THIẾU
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow w-full mb-[20px] min-h-[calc(100vh-80px)]">
        <div className="w-full px-4 md:px-6 py-8">
          <Outlet /> {/* Đây là nơi nội dung trang web hiện ra */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        {/* --- NHÓM 1: CÁC TRANG CẦN BÙ HEADER/FOOTER (Dùng MainLayout) --- */}
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to="/realtime" replace />} />
          <Route path="/realtime" element={<RealtimePage />} />
          <Route path="/prediction" element={<PredictionPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<EmptyPage />} />
        </Route>

        {/* --- NHÓM 2: CÁC TRANG ĐÃ CÓ SẴN HEADER (Để riêng ra cho khỏi bị nhân đôi) --- */}
        <Route path="/history" element={<StatsPage />} />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </Router>
  );
}
