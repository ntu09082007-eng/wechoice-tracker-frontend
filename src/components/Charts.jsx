import React, { useState, useEffect, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";

// Bảng màu cũ của bạn
const COLORS = [
  "#e63946", "#457b9d", "#1d3557", "#2a9d8f", "#e9c46a", 
  "#f4a261", "#e76f51", "#8338ec", "#fb5607", "#3a86ff"
];

export default function Charts({ apiPayload }) {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState("total");
  
  // State lọc ứng viên
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  // Zoom state
  const [zoomLeft, setZoomLeft] = useState(null);
  const [zoomRight, setZoomRight] = useState(null);
  const [refAreaLeft, setRefAreaLeft] = useState(null);
  const [refAreaRight, setRefAreaRight] = useState(null);

  // 1. Xử lý dữ liệu
  useEffect(() => {
    if (!apiPayload?.data) return;

    // Lấy list tên
    const allNames = new Set();
    apiPayload.data.forEach(entry => {
      if (entry.candidates) {
        entry.candidates.forEach(c => allNames.add(c.name));
      }
    });
    const namesArray = Array.from(allNames);

    if (selectedCandidates.length === 0) {
      setSelectedCandidates(namesArray);
    }

    // Format data cho Recharts
    const formattedData = apiPayload.data.map((entry) => {
      const point = {
        name: new Date(entry.recordedAt).toLocaleString("vi-VN", {
            month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"
        }),
        timestamp: new Date(entry.recordedAt).getTime(),
      };
      
      entry.candidates.forEach((c) => {
        point[c.name] = c.totalVotes;
        point[`${c.name}_speed`] = c.growthRate || 0; 
      });

      return point;
    }).reverse();

    setData(formattedData);
  }, [apiPayload]);

  const candidateNames = useMemo(() => {
    if (!data || data.length === 0) return [];
    return Object.keys(data[0]).filter(
      k => k !== "name" && k !== "timestamp" && !k.includes("_speed")
    );
  }, [data]);

  // Zoom Logic
  const zoom = () => {
    let left = refAreaLeft;
    let right = refAreaRight;
    if (left === right || right === "") {
      setRefAreaLeft(null);
      setRefAreaRight(null);
      return;
    }
    if (left > right) [left, right] = [right, left];
    setZoomLeft(left);
    setZoomRight(right);
    setRefAreaLeft(null);
    setRefAreaRight(null);
  };

  const resetZoom = () => {
    setZoomLeft(null);
    setZoomRight(null);
  };

  const visibleData = useMemo(() => {
    if (!zoomLeft || !zoomRight) return data;
    return data.filter(
      (d) => d.name.localeCompare(zoomLeft) >= 0 && d.name.localeCompare(zoomRight) <= 0
    );
  }, [data, zoomLeft, zoomRight]);

  // Handle Filter
  const toggleCandidate = (name) => {
    if (selectedCandidates.includes(name)) {
      if (selectedCandidates.length > 1) {
          setSelectedCandidates(prev => prev.filter(c => c !== name));
      }
    } else {
      setSelectedCandidates(prev => [...prev, name]);
    }
  };

  const handleSelectAll = () => {
     if (selectedCandidates.length === candidateNames.length) {
         setSelectedCandidates([]); 
     } else {
         setSelectedCandidates(candidateNames);
     }
  }

  return (
    <div className="w-full">
      
      {/* --- THANH ĐIỀU KHIỂN (STYLE CŨ) --- */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        
        {/* Nhóm nút Trái: Tổng phiếu / Tốc độ (Tách rời như cũ) */}
        <div className="flex gap-2 w-full md:w-auto">
          <button
            onClick={() => setChartType("total")}
            className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
              chartType === "total"
                ? "bg-[#1a1b26] text-white shadow-lg" // Active: Đen đậm
                : "bg-gray-100 text-gray-600 hover:bg-gray-200" // Inactive: Xám nhạt
            }`}
          >
            Tổng phiếu
          </button>
          <button
            onClick={() => setChartType("speed")}
            className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
              chartType === "speed"
                ? "bg-[#1a1b26] text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Tốc độ
          </button>
        </div>

        {/* Nhóm nút Phải: Lọc + Zoom */}
        <div className="flex gap-2 w-full md:w-auto relative">
            
            {/* NÚT LỌC (Style xám đơn giản giống nút Zoom) */}
            <div className="relative">
                <button
                    onClick={() => setShowFilter(!showFilter)}
                    className="h-full px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 shadow-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    Tuỳ chọn
                </button>

                {/* POPUP MENU */}
                {showFilter && (
                    <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-2xl z-50 p-4 animate-in fade-in zoom-in duration-200">
                        <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-50">
                            <span className="font-bold text-gray-800 text-xs uppercase tracking-wider">Hiển thị</span>
                            <button onClick={handleSelectAll} className="text-xs text-blue-600 hover:underline font-bold">
                                {selectedCandidates.length === candidateNames.length ? "Bỏ chọn" : "Chọn tất cả"}
                            </button>
                        </div>
                        <div className="space-y-1 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
                            {candidateNames.map((name, index) => (
                                <label key={name} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors select-none">
                                    <div className="relative flex items-center">
                                      <input 
                                          type="checkbox" 
                                          checked={selectedCandidates.includes(name)}
                                          onChange={() => toggleCandidate(name)}
                                          className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm checked:border-blue-500 checked:bg-blue-500 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-0"
                                      />
                                      <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" xmlns="
