// @ts-nocheck
/* eslint-disable */
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-auto border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- PHẦN TRÊN: Đã chỉnh lại bố cục --- */}
        {/* Thay vì đẩy xa 2 bên, dùng justify-center và gap lớn để cân vào giữa */}
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-32 mb-8">
          
          {/* Cột trái */}
          <div className="md:w-auto max-w-md space-y-3">
            <h2 className="text-xl font-extrabold text-gray-900">WeChoice 2025 Tracker</h2>
            <p className="text-gray-900 text-sm leading-relaxed font-normal">
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
          <div className="md:w-auto max-w-md space-y-3">
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

        {/* --- PHẦN DƯỚI: Đã chỉnh lại khoảng cách --- */}
        {/* Dùng justify-center và gap rất lớn (gap-40) để tạo sự cân đối giữa 2 khối */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-40 text-center md:text-left">
          
          {/* Copyright & Credits */}
          <div className="text-sm text-gray-900 space-y-1">
            <p className="font-bold">Copyright © by WeChoice Awards 2025 & công ty cổ phần VC CORP.</p>
            <p className="font-normal">
              Phát triển độc lập bởi người hâm mộ Nghệ Sĩ LYHAN.
              <br/>
              {/* Đã thêm dấu cách (&nbsp;) trước thẻ a để không bị dính chữ */}
              Tiếp tục dựa trên source code của&nbsp;
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

          {/* Chữ ký: To hơn (text-4xl) và được đẩy về vị trí cân đối nhờ gap-40 ở trên */}
          <div className="font-cursive text-4xl text-gray-900" style={{ fontFamily: '"Dancing Script", cursive' }}>
            Thank you dancers!
          </div>
        </div>
      </div>
    </footer>
  );
}
