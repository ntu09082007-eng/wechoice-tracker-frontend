// @ts-nocheck
/* eslint-disable */
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-auto border-t border-gray-200">
      <div className="container mx-auto px-4">
        
        {/* --- WRAPPER CHÍNH --- */}
        {/* 1. max-w-7xl: Giữ độ rộng tối đa để không bị rớt chữ */}
        {/* 2. md:px-12 lg:px-24: Đẩy nội dung từ 2 bên vào trong "1 tí" như bạn muốn */}
        <div className="max-w-7xl mx-auto md:px-12 lg:px-24">

          {/* --- PHẦN TRÊN --- */}
          {/* justify-between: Đẩy 2 cột sang 2 phía */}
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            
            {/* Cột trái: Căn lề trái (Mặc định) */}
            <div className="space-y-3 text-left">
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

            {/* Cột phải: Đã sửa thành CĂN LỀ TRÁI (text-left) */}
            {/* Dù căn lề trái, nhưng nhờ justify-between nên cả khối này vẫn nằm bên phải màn hình */}
            <div className="space-y-3 text-left">
              <h3 className="text-xl font-extrabold text-gray-900">Thông tin</h3>
              <p className="text-gray-900 text-sm leading-relaxed font-normal">
                Dữ liệu được cập nhật trực tiếp từ hệ thống định kỳ mỗi <strong className="font-bold">10 giây</strong>.
                <br />
                Đồng thời ghi nhận lại mỗi <strong className="font-bold">10 phút</strong> để phân tích và dự đoán.
              </p>
            </div>
          </div>

          {/* Đường gạch ngang (Giữ nguyên) */}
          <div className="h-px bg-gray-300 w-full mb-8"></div>

          {/* --- PHẦN DƯỚI --- */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            
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

            {/* Chữ ký: Giữ nguyên độ đậm và size */}
            <div className="font-cursive font-bold text-4xl md:text-5xl text-gray-900" style={{ fontFamily: '"Dancing Script", cursive', fontWeight: 700 }}>
              Thank you dancer!
            </div>
          </div>

        </div> 
      </div>
    </footer>
  );
}
