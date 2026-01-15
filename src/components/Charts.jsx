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

// Bảng màu hiển thị
const COLORS = [
  "#e63946", "#457b9d", "#1d3557", "#2a9d8f", "#e9c46a", 
  "#f4a261", "#e76f51", "#8338ec", "#fb5607", "#3a86ff"
];

// Sử dụng 'any' cho props để tránh lỗi kiểm tra kiểu dữ liệu nghiêm ngặt
export default function Charts({ apiPayload }: { apiPayload: any }) {
  // Khai báo state với kiểu any[] để tránh lỗi
  const [data, setData] = useState<any[]>([]);
  const [chartType, setChartType] = useState<"total" | "speed">("total");
  
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  // Zoom state
  const [zoomLeft, setZoomLeft] = useState<string | null>(null);
  const [zoomRight, setZoomRight] = useState<string | null>(null);
  const [refAreaLeft, setRefAreaLeft] = useState<string | null>(null);
  const [refAreaRight, setRefAreaRight] = useState<string | null>(null);

  // 1. Xử lý dữ liệu đầu vào
  useEffect(() => {
    if (!apiPayload || !Array.isArray(apiPayload.data)) return;

    const allNames = new Set<string>();
    apiPayload.data.forEach((entry: any) => {
      if (Array.isArray(entry.candidates)) {
        entry.candidates.forEach((c: any) => allNames.add(c.name));
      }
    });
    const namesArray = Array.from(allNames);

    if (selectedCandidates.length === 0 && namesArray.length > 0) {
      setSelectedCandidates(namesArray);
    }

    const formattedData = apiPayload.data.map((entry: any) => {
      const point: any = {
        name: new Date(entry.recordedAt).toLocaleString("vi-VN", {
            month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"
        }),
        timestamp: new Date(entry.recordedAt).getTime(),
      };
      
      if (Array.isArray(entry.candidates)) {
        entry.candidates.forEach((c: any) => {
          point[c.name] = c.totalVotes;
          point[`${c.name}_speed`] = c.growthRate || 0; 
        });
      }

      return point;
    }).reverse();

    setData(formattedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiPayload]);

  const candidateNames = useMemo(() => {
    if (!data || data.length === 0) return [];
    return Object.keys(data[0]).filter(
      k => k !== "name" && k !== "timestamp" && !k.includes("_speed")
    );
  }, [data]);

  // Logic Zoom
  const zoom = () => {
    let left = refAreaLeft;
    let right = refAreaRight;

    if (left === right || right === "") {
      setRefAreaLeft(null);
      setRefAreaRight(null);
      return;
    }

    if (left && right && left > right) {
        const temp = left;
        left = right;
        right = temp;
    }

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

  const toggleCandidate = (name: string) => {
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

  // --- RETURN GIAO DIỆN ---
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      
      {/* HEADER ĐEN */}
      <div className="bg-gray-900 p-4 md:p-5">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center">
          Biểu đồ thống kê
        </h2>
      </div>

      {/* PHẦN THÂN */}
      <div className="p-4 md:p-6 w-full">
        
        {/* --- THANH ĐIỀU KHIỂN --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          
          {/* Nhóm nút Trái: Tổng phiếu / Tốc độ */}
          <div className="flex gap-2 w-full md:w-auto">
            <button
              onClick={() => setChartType("total")}
              className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                chartType === "total"
                  ? "bg-[#1a1b26] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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

          {/* Nhóm nút Phải: Tuỳ chọn + Zoom */}
          <div className="flex gap-2 w-full md:w-auto relative">
              
              {/* NÚT TUỲ CHỌN ỨNG VIÊN */}
              <div className="relative">
                  <button
                      onClick={() => setShowFilter(!showFilter)}
                      className="h-full px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 shadow-sm"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                      </svg>
                      Tuỳ chọn ứng viên
                  </button>

                  {/* POPUP MENU */}
                  {showFilter && (
                      <div className="absolute right-0 top-full mt-2 w-72 bg-white border border-gray-100 rounded-xl shadow-2xl z-50 p-4">
                          <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-50">
                              <span className="font-bold text-gray-800 text-xs uppercase tracking-wider">Hiển thị</span>
                              
                              <button
