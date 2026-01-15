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

  // 1. Xử lý dữ liệu đầu vào
  useEffect(() => {
    if (!apiPayload || !Array.isArray(apiPayload.data)) return;

    const allNames = new Set();
    apiPayload.data.forEach(entry => {
      if (Array.isArray(entry.candidates)) {
        entry.candidates.forEach(c => allNames.add(c.name));
      }
    });
    const namesArray = Array.from(allNames);

    if (selectedCandidates.length === 0 && namesArray.length > 0) {
      setSelectedCandidates(namesArray);
    }

    const formattedData = apiPayload.data.map((entry) => {
      const point = {
        name: new Date(entry.recordedAt).toLocaleString("vi-VN", {
            month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"
        }),
        timestamp: new Date(entry.recordedAt).getTime(),
      };
      
      if (Array.isArray(entry.candidates)) {
        entry.candidates.forEach((c) => {
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

    if (left > right) {
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

  // --- RETURN GIAO DIỆN ---
  return (
    // 👇 1. KHUNG BAO NGOÀI (Giống Lịch sử bình chọn)
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      
      {/* 👇 2. HEADER ĐEN */}
      <div className="bg-gray-900 p-4 md:p-5">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center">
          Biểu đồ thống kê
        </h2>
      </div>

      {/* 👇 3. PHẦN THÂN TRẮNG CHỨA BIỂU ĐỒ & NÚT */}
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
                              
                              {/* NÚT CHỌN TẤT CẢ (Style Xám/Trắng bạn thích) */}
                              <button 
                                  onClick={handleSelectAll} 
                                  className="px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 
                                             bg-white text-gray-600 border border-gray-200
                                             hover:bg-gray-400 hover:text-white 
                                             active:bg-gray-600 active:text-white"
                              >
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
                                            className="h-4 w-4 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                      </div>
                                      <span 
                                          className="text-xs font-bold truncate flex-1" 
                                          style={{ color: COLORS[index % COLORS.length] }}
                                      >
                                          {name}
                                      </span>
                                  </label>
                              ))}
                          </div>
                      </div>
                  )}
              </div>
              
              {/* NÚT RESET ZOOM */}
              <button
                  onClick={resetZoom}
                  className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm font-bold transition-colors disabled:opacity-50"
                  disabled={!zoomLeft && !zoomRight}
              >
                  Đặt lại thu phóng
              </button>
          </div>
        </div>

        {/* --- KHU VỰC BIỂU ĐỒ --- */}
        <div className="h-[450px] w-full bg-white select-none">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={visibleData}
              onMouseDown={(e) => setRefAreaLeft(e?.activeLabel)}
              onMouseMove={(e) => refAreaLeft && setRefAreaRight(e?.activeLabel)}
              onMouseUp={zoom}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 11, fill: "#9ca3af" }} 
                  tickLine={false}
                  axisLine={false}
                  minTickGap={30}
                  dy={10}
              />
              <YAxis 
                  tick={{ fontSize: 11, fill: "#9ca3af" }} 
                  tickLine={false}
                  axisLine={false}
                  dx={-10}
                  tickFormatter={(val) => {
                      if (val >= 1000000) return (val / 1000000).toFixed(1) + 'M';
                      if (val >= 1000) return (val / 1000).toFixed(0) + 'k';
                      return val;
                  }}
              />
              <Tooltip 
                  contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
                  itemStyle={{ fontSize: "12px", fontWeight: 600, padding: 0 }}
                  labelStyle={{ color: "#111827", fontWeight: "bold", marginBottom: "8px", fontSize: "13px" }}
              />
              <Legend wrapperStyle={{ paddingTop: "20px", fontSize: "12px" }} iconType="circle" />
              
              {candidateNames.map((name, index) => {
                  if (!selectedCandidates.includes(name)) return null;

                  const dataKey = chartType === "total" ? name : `${name}_speed`;
                  return (
                      <Line
                          key={name}
                          type="monotone"
                          dataKey={dataKey}
                          name={name}
                          stroke={COLORS[index % COLORS.length]}
                          strokeWidth={2}
                          dot={false}
                          activeDot={{ r: 5, strokeWidth: 0 }}
                          animationDuration={500}
                      />
                  );
              })}

              {refAreaLeft && refAreaRight ? (
                <ReferenceArea x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} fill="#8884d8" fillOpacity={0.1} />
              ) : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {showFilter && (
          <div className="fixed inset-0 z-40" onClick={() => setShowFilter(false)}></div>
        )}
      </div>
    </div>
  );
}
