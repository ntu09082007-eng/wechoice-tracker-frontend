import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-auto border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- PHẦN TRÊN --- */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Cột trái: Tên & Mô tả */}
          <div className="md:w-1/2 space-y-3">
            <h2 className="text-xl font-bold text-gray-900">WeChoice 2025 Tracker</h2>
            
            {/* 👇 SỬA DÒNG 1: Màu xám (text-gray-600) + Font thường (font-normal) */}
            <p className="text-gray-600 text-sm leading-relaxed font-normal">
              Hệ thống theo dõi và phân tích bình chọn cho giải thưởng WeChoice Awards 2025.
              <br />
              <a 
                href="https://wechoice.vn" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:underline hover:text-gray-800 transition-colors"
              >
                Truy cập trang web giải thưởng
              </a>
            </p>
          </div>

          {/* Cột phải: Thông tin */}
          <div className="md:w-1/3 space-y-3">
            <h3 className="font-bold text-gray-900">Thông tin</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Dữ liệu được cập nhật trực tiếp từ hệ thống định kỳ mỗi <strong className="text-gray-700">10 giây</strong>.
              <br />
              Đồng thời ghi nhận lại mỗi <strong className="text-gray-700">10 phút</strong> để phân tích và dự đoán.
            </p>
          </div>
        </div>

        {/* Đường gạch ngang */}
        <div className="h-px bg-gray-300 w-full mb-8"></div>

        {/* --- PHẦN DƯỚI --- */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
          
          {/* 👇 SỬA DÒNG 2: Copyright & Credits - Màu xám (text-gray-500) + Font thường */}
          <div className="text-sm text-gray-500 font-normal space-y-1">
            <p>Copyright © by WeChoice Awards 2025 & công ty cổ phần VC CORP.</p>
            <p>
              Phát triển độc lập bởi người hâm mộ Nghệ Sĩ LYHAN.
              <br/> Dựa trên source code của <span className="font-medium text-gray-700">@_thetreee_</span>
            </p>
          </div>

          {/* Chữ ký (Giữ nguyên font viết tay) */}
          <div className="font-cursive text-2xl text-gray-900" style={{ fontFamily: '"Dancing Script", cursive' }}>
            Thank you dancer!
          </div>
        </div>
      </div>
    </footer>
  );
}
