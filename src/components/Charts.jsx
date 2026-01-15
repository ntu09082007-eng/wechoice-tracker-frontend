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

// Hàm tạo màu ngẫu nhiên cho các line (hoặc bạn có thể hardcode bảng màu)
const COLORS = [
  "#e63946", "#457b9d", "#1d3557", "#2a9d8f", "#e9c46a", 
  "#f4a261", "#e76f51", "#8338ec", "#fb5607", "#3a86ff"
];

export default function Charts({ apiPayload }) {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState("total"); // 'total' hoặc 'speed'
  
  // State quản lý danh sách ứng viên ĐƯỢC CHỌN để hiển thị
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  // State quản lý việc hiện/ẩn popup chọn ứng viên
  const [showFilter, setShowFilter] = useState(false);

  // Zoom state
  const [zoomLeft, setZoomLeft] = useState(null);
  const [zoomRight, setZoomRight] = useState(null);
  const [refAreaLeft, setRefAreaLeft] = useState(null);
  const [refAreaRight, setRefAreaRight] = useState(null);

  // 1. Xử lý dữ liệu từ API
  useEffect(() => {
    if (!apiPayload?.data) return;

    // Lấy danh sách tên tất cả ứng viên có trong dữ liệu
    const allNames = new Set();
    apiPayload.data.forEach(entry => {
      if (entry.candidates) {
        entry.candidates.forEach(c => allNames.add(c.name));
      }
    });
    const namesArray = Array.from(allNames);

    // Mặc định ban đầu: Chọn tất cả ứng viên
    if (selectedCandidates.length === 0) {
      setSelectedCandidates(namesArray);
    }

    // Chuyển đổi dữ liệu API sang dạng Recharts hiểu được
    const formattedData = apiPayload.data.map((entry) => {
      const point = {
        name: new Date(entry.recordedAt).toLocaleString("vi-VN", {
            month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"
        }),
        timestamp: new Date(entry.recordedAt).getTime(),
      };
      
      // Chỉ số phiếu tổng
      entry.candidates.forEach((c) => {
        point[c.name] = c.totalVotes;
      });

      // Tốc độ (Giả định api có growthRate, hoặc bạn phải tự tính diff)
      entry.candidates.forEach((c) => {
        point[`${c.name}_speed`] = c.growthRate || 0; 
      });

      return point;
    }).reverse(); // Đảo ngược nếu dữ liệu api trả về từ mới nhất -> cũ nhất

    setData(formattedData);
  }, [apiPayload]);

  // Lấy danh sách tên ứng viên (để render checkbox và Lines)
  const candidateNames = useMemo(() => {
    if (!data || data.length === 0) return [];
    // Lấy keys từ point đầu tiên, loại bỏ 'name', 'timestamp' và '_speed'
    const keys = Object.keys(data[0]).filter(
      k => k !== "name" && k !== "timestamp" && !k.includes("_speed")
    );
    return keys;
  }, [data]);


  // Hàm xử lý Zoom
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

  // Lọc data hiển thị theo Zoom
  const visibleData = useMemo(() => {
    if (!zoomLeft || !zoomRight) return data;
    return data.filter(
      (d) => d.name.localeCompare(zoomLeft) >= 0 && d.name.localeCompare(zoomRight) <= 0
    );
  }, [data, zoomLeft, zoomRight]);

  // Handle Toggle Checkbox
  const toggleCandidate = (name) => {
    if (selectedCandidates.includes(name)) {
      // Nếu đang chọn thì bỏ chọn (ẩn đi)
      // Giữ lại ít nhất 1 người để không lỗi chart
      if (selectedCandidates.length > 1) {
          setSelectedCandidates(prev => prev.filter(c => c !== name));
      }
    } else {
      // Nếu chưa chọn thì thêm vào
      setSelectedCandidates(prev => [...prev, name]);
    }
  };

  const handleSelectAll = () => {
     if (selectedCandidates.length === candidateNames.length) {
         // Nếu đang chọn hết -> Bỏ chọn hết (hoặc giữ 1)
         // Ở đây mình set rỗng để user tự tick lại từ đầu
         setSelectedCandidates([]); 
     } else {
         // Chọn tất cả
         setSelectedCandidates(candidateNames);
     }
  }


  return (
    <div className="w-full">
      {/* --- THANH ĐIỀU KHIỂN --- */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        
        {/* Nút chuyển tab (Tổng phiếu / Tốc độ) */}
        <div className="flex bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setChartType("total")}
            className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
              chartType === "total"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Tổng phiếu
          </button>
          <button
            onClick={() => setChartType("speed")}
            className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
              chartType === "speed"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Tốc độ
          </button>
        </div>

        {/* Nút chức năng bên phải */}
        <div className="flex items-center gap-3 relative">
            
            {/* 1. NÚT TUỲ CHỌN ỨNG VIÊN (MỚI) */}
            <div className="relative">
                <button
                    onClick={() => setShowFilter(!showFilter)}
                    className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    Tuỳ chọn ứng viên
                </button>

                {/* POPUP MENU CHỌN ỨNG VIÊN */}
                {showFilter && (
                    <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 p-4 animate-in fade-in zoom-in duration-200">
                        <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-100">
                            <span className="font-bold text-gray-800 text-sm">Hiển thị ứng viên</span>
                            <button onClick={handleSelectAll} className="text-xs text-blue-600 hover:underline font-medium">
                                {selectedCandidates.length === candidateNames.length ? "Bỏ tất cả" : "Chọn tất cả"}
                            </button>
                        </div>
                        <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                            {candidateNames.map((name, index) => (
                                <label key={name} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-1.5 rounded-md transition-colors">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedCandidates.includes(name)}
                                        onChange={() => toggleCandidate(name)}
                                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                    />
                                    <span 
                                        className="text-sm text-gray-700 truncate font-medium" 
                                        style={{ color: COLORS[index % COLORS.length] }} // Dùng màu tương ứng với line
                                    >
                                        {name}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
            {/* 2. NÚT RESET ZOOM (CŨ) - Giờ nằm bên phải nút tuỳ chọn */}
            <button
                onClick={resetZoom}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
                disabled={!zoomLeft && !zoomRight}
            >
                Đặt lại thu phóng
            </button>
        </div>
      </div>

      {/* --- KHU VỰC BIỂU ĐỒ --- */}
      <div className="bg-white border border-gray-100 rounded-xl p-2 md:p-4 h-[400px] select-none">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={visibleData}
            onMouseDown={(e) => setRefAreaLeft(e?.activeLabel)}
            onMouseMove={(e) => refAreaLeft && setRefAreaRight(e?.activeLabel)}
            onMouseUp={zoom}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
                dataKey="name" 
                tick={{ fontSize: 11, fill: "#6b7280" }} 
                tickLine={false}
                axisLine={false}
                minTickGap={30}
            />
            <YAxis 
                tick={{ fontSize: 11, fill: "#6b7280" }} 
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) => {
                    if (val >= 1000000) return (val / 1000000).toFixed(1) + 'M';
                    if (val >= 1000) return (val / 1000).toFixed(0) + 'k';
                    return val;
                }}
            />
            <Tooltip 
                contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                itemStyle={{ fontSize: "13px", fontWeight: 500 }}
                labelStyle={{ color: "#374151", fontWeight: "bold", marginBottom: "5px" }}
            />
            <Legend wrapperStyle={{ paddingTop: "10px" }} />
            
            {/* Render các đường Line dựa trên danh sách đã chọn (selectedCandidates) */}
            {candidateNames.map((name, index) => {
                // Nếu tên không nằm trong danh sách được chọn -> Không render (return null)
                if (!selectedCandidates.includes(name)) return null;

                const dataKey = chartType === "total" ? name : `${name}_speed`;
                
                return (
                    <Line
                        key={name}
                        type="monotone"
                        dataKey={dataKey}
                        name={name} // Tên hiển thị trong Legend/Tooltip
                        stroke={COLORS[index % COLORS.length]}
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 6, strokeWidth: 0 }}
                        animationDuration={500}
                    />
                );
            })}

            {/* Vùng chọn Zoom */}
            {refAreaLeft && refAreaRight ? (
              <ReferenceArea x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} fill="#8884d8" fillOpacity={0.1} />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Overlay để đóng popup khi click ra ngoài */}
      {showFilter && (
        <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowFilter(false)}
        ></div>
      )}
    </div>
  );
}
