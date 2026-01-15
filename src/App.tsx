import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RealtimePage from './pages/RealtimePage';
import StatsPage from './pages/StatsPage';
import PredictionPage from './pages/PredictionPage';
import AboutPage from './pages/AboutPage';
import EmptyPage from './pages/EmptyPage';
import ChartPage from './pages/ChartPage'; // Giữ lại trang Chart mới

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Chỉ định tuyến thôi, KHÔNG bọc Header/Footer ở đây nữa */}
        <Route path="/" element={<Navigate to="/realtime" replace />} />
        <Route path="/realtime" element={<RealtimePage />} />
        
        {/* Các trang chức năng */}
        <Route path="/history" element={<StatsPage />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="/prediction" element={<PredictionPage />} />
        <Route path="/about" element={<AboutPage />} />
        
        {/* Trang lỗi 404 */}
        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
