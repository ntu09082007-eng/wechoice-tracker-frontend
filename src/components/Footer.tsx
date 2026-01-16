// @ts-nocheck
/* eslint-disable */
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-auto border-t border-gray-200">
      <div className="container mx-auto px-4">
        
        {/* --- WRAPPER CHÍNH --- */}
        {/* SỬA 1: Giảm padding xuống (md:px-8) để mở rộng không gian, KHẮC PHỤC RỚT CHỮ */}
        <div className="max-w-7xl mx-auto md:px-8">

          {/* --- PHẦN TRÊN (Thông tin chính) --- */}
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            {/* Cột trái */}
            <div className="space-y-3 text-left">
              <h2 className="text-xl font-extrabold text-gray-900">WeChoice 2025 Tracker</h2>
              {/* whitespace-nowrap trên màn hình lớn để ép không xuống dòng nếu cần thiết */}
              <p className="text-gray-900 text-sm leading-relaxed font-normal md:whitespace-nowrap">
                Hệ thống theo dõi và phân tích bình chọn cho giải thưởng WeChoice Awards 2025.
                <br />
                <a 
                  href="https://wechoice.vn" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:underline hover:text-gray-700 transition-colors"
                >
                  Truy cập trang web giải thưởng
                </a>
              </p>
            </div>

            {/* Cột phải */}
            <div className="space-y-3 text-left">
              <h3 className="text-xl font-extrabold text-gray-900">Thông tin</h3>
              <p className="text-gray-900 text-sm leading-relaxed font-normal">
                Dữ liệu được cập nhật trực tiếp từ hệ thống định kỳ mỗi <strong className="font-bold">10 giây</strong>.
                <br />
                Đồng thời ghi nhận lại mỗi <strong className="font-bold">10 phút</strong> để phân tích và dự đoán.
              </p>
            </div>
          </div>

          {/* Đường gạch ngang */}
          <div className="h-px bg-gray-300 w-full mb-8"></div>

          {/* --- PHẦN DƯỚI (Copyright & Chữ ký) --- */}
          {/* SỬA 2: Dùng GRID 2 cột để căn chỉnh chữ ký vào "giữa khoảng trống bên phải" */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            
            {/* Cột 1 (Trái): Copyright - Căn trái thẳng hàng với trên */}
            <div className="text-sm text-gray-900 space-y-1 text-center md:text-left">
              <p className="font-bold">Copyright © by WeChoice Awards 2025 & công ty cổ phần VC CORP.</p>
              <p className="font-normal">
                Phát triển độc lập bởi người hâm mộ Nghệ Sĩ LYHAN.
                <br/>
                Được tiếp tục dựa trên source code của&nbsp;
                <a 
                  href="https://www.threads.com/@_thetreee_" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:underline hover:text-gray-700 transition-colors"
                >
                  @_thetreee_
                </a>
              </p>
            </div>

            {/* Cột 2 (Phải): Chữ ký - CĂN GIỮA (Center) trong cột này */}
            {/* Điều này giúp chữ ký nằm chính xác ở giữa phần không gian bên phải */}
            <div className="flex justify-center md:justify-center">
              <div className="font-cursive font-bold text-4xl md:text-5xl text-gray-900" style={{ fontFamily: '"Dancing Script", cursive', fontWeight: 700 }}>
                Thank you dancers!
              </div>
            </div>

          </div>

        </div> 
      </div>
    </footer>
  );
}
