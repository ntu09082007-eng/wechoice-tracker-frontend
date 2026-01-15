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

// --- ĐỊNH NGHĨA KIỂU DỮ LIỆU (TYPESCRIPT) ---
interface Candidate {
  name: string;
  totalVotes: number;
  growthRate?: number;
}

interface DataEntry {
  recordedAt: string;
  candidates: Candidate[];
}

interface ApiPayload {
  data: DataEntry[];
}

interface ChartPoint {
  name: string;
  timestamp: number;
  [key: string]: string | number; // Cho phép truy cập động các key khác
}

// Bảng màu hiển thị
const COLORS = [
  "#e63946", "#457b9d", "#1d3557", "#2a9d8f", "#e9c46a", 
  "#f4a261", "#e76f51", "#8338ec", "#fb5607", "#3a86ff"
];

export default function Charts({ apiPayload }: { apiPayload: ApiPayload | null }) {
  // State có định nghĩa kiểu rõ ràng để tránh lỗi build
  const [data, setData] = useState<ChartPoint[]>([]);
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
    if (!apiPayload || !
