// @ts-nocheck
/* eslint-disable */
import React from 'react'; // 👈 QUAN TRỌNG: Phải có dòng này web mới sống lại được!

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-auto border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- PHẦN TRÊN --- */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Cột trái */}
          <div className="md:w-1/2 space-y-3">
            <h2 className="text-xl font-extrabold text-gray-900">WeChoice 2025 Tracker</h2>
            <p className="text-gray-900 text-sm leading-relaxed font-bold">
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

          {/* Cột phải */}
          <div className="md:w-1/3 space-y-3">
            <h3 className="font-extrabold text-gray-900">Thông tin</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-medium">
              Dữ liệu được cập nhật trực tiếp từ hệ thống định kỳ mỗi <strong className="text-black">10 giây</strong>.
              <br />
              Đồng thời ghi nhận lại mỗi <strong className="text-black">10 phút</strong> để phân tích và dự đoán.
            </p>
          </div>
        </div>

        {/* Gạch ngang */}
        <div className="h-px bg-gray-300 w-full mb-8"></div>

        {/* --- PHẦN DƯỚI --- */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
          <div className="text-sm text-gray-900 font-bold space-y-1">
            <p>Copyright © by WeChoice Awards 2025 & công ty cổ phần VC CORP.</p>
            <p>
              Phát triển độc lập bởi người hâm mộ Nghệ Sĩ LYHAN. Tiếp tục dựa trên source code của <span className="font-extrabold text-black">@_thetreee_</span>
            </p>
          </div>
          <div className="text-2xl text-gray-900" style={{ fontFamily: '"Dancing Script", cursive' }}>
            Thank you dancer!
          </div>
        </div>
      </div>
    </footer>
  );
}
