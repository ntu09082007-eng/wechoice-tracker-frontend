// @ts-nocheck
/* eslint-disable */
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-auto border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- PHẦN TRÊN --- */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Cột trái: Tên & Mô tả */}
          <div className="md:w-1/2 space-y-3">
            {/* Header: Size XL, Siêu đậm */}
            <h2 className="text-xl font-extrabold text-gray-900">WeChoice 2025 Tracker</h2>
            
            {/* Body: Size SM, Bỏ in đậm (Mảnh như link) */}
            <p className="text-gray-600 text-sm leading-relaxed font-normal">
              Hệ thống theo dõi và phân tích bình chọn cho giải thưởng WeChoice Awards 2025.
              <br />
              <a 
                href="https://wechoice.vn" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:underline hover:text-gray-600 transition-colors"
              >
                Truy cập trang web giải thưởng
              </a>
            </p>
          </div>

          {/* Cột phải: Thông tin */}
          <div className="md:w-1/3 space-y-3">
            {/* Header: Chỉnh to bằng bên trái (text-xl font-extrabold) */}
            <h3 className="text-xl font-extrabold text-gray-900">Thông tin</h3>
            
            {/* Body: Chỉnh to bằng bên trái (text-sm) & cùng màu */}
            <p className="text-gray-900 text-sm leading-relaxed font-normal">
              Dữ liệu được cập nhật trực tiếp từ hệ thống định kỳ mỗi <strong className="text-black">10 giây</strong>.
              <br />
              Đồng thời ghi nhận lại mỗi <strong className="text-black">10 phút</strong> để phân tích và dự đoán.
            </p>
          </div>
        </div>

        {/* Đường gạch ngang */}
        <div className="h-px bg-gray-300 w-full mb-8"></div>

        {/* --- PHẦN DƯỚI --- */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
          
          {/* Copyright & Credits */}
          <div className="text-sm text-gray-800 space-y-1">
            {/* Copyright: Giữ nguyên in đậm */}
            <p className="font-bold">Copyright © by WeChoice Awards 2025 & công ty cổ phần VC CORP.</p>
            
            {/* Credits: Bỏ in đậm (font-normal) */}
            <p className="font-normal">
              Phát triển độc lập bởi người hâm mộ Nghệ Sĩ LYHAN.
              <br/>Tiếp tục dựa trên source code của
              <a 
                href="https://www.threads.com/@_thetreee_" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:underline hover:text-gray-600 transition-colors"
              >
                @_thetreee_
              </a>
            </p>
          </div>

          {/* Chữ ký: To hơn (text-3xl) và dịch qua trái (md:mr-16) cho cân đối */}
          <div className="font-cursive text-3xl text-gray-900 md:mr-16" style={{ fontFamily: '"Dancing Script", cursive' }}>
            Thank you dancers!
          </div>
        </div>
      </div>
    </footer>
  );
}
