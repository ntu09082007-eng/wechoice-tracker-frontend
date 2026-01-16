// @ts-nocheck
/* eslint-disable */
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-auto border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* YÊU CẦU 1: Mở rộng wrapper lên max-w-7xl để có nhiều không gian hơn, tránh rớt chữ */}
        <div className="max-w-7xl mx-auto">

          {/* --- PHẦN TRÊN --- */}
          {/* Dùng justify-between để đẩy 2 khối ra xa nhau trong không gian rộng hơn */}
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            
            {/* Cột trái: Đã bỏ giới hạn max-w-md để chữ không bị ép xuống dòng */}
            <div className="space-y-3 text-center md:text-left flex-1">
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

            {/* Cột phải: Đã bỏ giới hạn max-w-md */}
            <div className="space-y-3 text-center md:text-right flex-1">
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

          {/* --- PHẦN DƯỚI --- */}
          {/* YÊU CẦU 2: Dùng justify-center và gap lớn để kéo 2 khối vào giữa, cân đối khoảng trống 2 bên */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-32 text-center md:text-left">
            
            {/* Copyright & Credits */}
            <div className="text-sm text-gray-900 space-y-1">
              <p className="font-bold">Copyright © by WeChoice Awards 2025 & công ty cổ phần VC CORP.</p>
              <p className="font-normal">
                Phát triển độc lập bởi người hâm mộ Nghệ Sĩ LYHAN.
                <br/>
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

            {/* YÊU CẦU 3: Thêm font-bold để làm dày chữ ký */}
            <div className="font-cursive font-bold text-4xl text-gray-900" style={{ fontFamily: '"Dancing Script", cursive', fontWeight: 700 }}>
              Thank you dancer!
            </div>
          </div>

        </div> {/* Kết thúc Wrapper */}
      </div>
    </footer>
  );
}
