// @ts-nocheck
/* eslint-disable */
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-auto border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* WRAPPER: max-w-7xl để rộng rãi, không bị rớt chữ */}
        <div className="max-w-7xl mx-auto">

          {/* --- PHẦN TRÊN --- */}
          {/* justify-between: Đẩy 2 cục ra sát lề trái và phải */}
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            
            {/* Cột trái */}
            <div className="space-y-3 text-center md:text-left">
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
            <div className="space-y-3 text-center md:text-right">
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
          {/* justify-between: Đẩy cục Copyright sang trái (thẳng hàng trên), cục Chữ ký sang phải */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            
            {/* Copyright & Credits: Nằm sát lề trái */}
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

            {/* Chữ ký: Nằm sát lề phải, IN ĐẬM và TO */}
            <div className="font-cursive font-bold text-4xl md:text-5xl text-gray-900 md:pr-4" style={{ fontFamily: '"Dancing Script", cursive', fontWeight: 700 }}>
              Thank you dancer!
            </div>
          </div>

        </div> 
      </div>
    </footer>
  );
}
