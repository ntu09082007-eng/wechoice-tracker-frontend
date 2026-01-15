import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 mt-auto w-full border-t border-gray-200 shadow-lg">
      <div className="w-full px-8 md:px-16 lg:px-24 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-5 auto-cols-min gap-y-6 max-w-6xl mx-auto">
          {/* Phần 1: Giữ nguyên nội dung trên */}
          <div className="xl:col-span-3">
            <h3 className="text-2xl font-extrabold mb-1 text-black">
              WeChoice 2025 Tracker
            </h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Hệ thống theo dõi và phân tích bình chọn cho giải thưởng WeChoice Awards 2025.
            </p>
            <h3 className="text-gray-800 text-sm font-extrabold hover:underline">
              <a href="https://wechoice.vn/" target="_blank" rel="noreferrer">Truy cập trang web giải thưởng</a>
            </h3>
          </div>

          <div className="xl:col-span-2">
            <h3 className="text-black text-xl font-bold mb-1">Thông tin</h3>
            <p className="text-sm leading-relaxed">
              Dữ liệu được cập nhật trực tiếp từ hệ thống định kỳ mỗi{" "}
              <b>10 giây</b>.
              <br />
              Đồng thời ghi nhận lại mỗi <b>10 phút</b> để phân tích và dự đoán.
            </p>
          </div>
        </div>

        {/* Phần 2: Footer Bottom - Sửa giống ảnh mẫu 100% */}
        <div className="border-t border-gray-400 mt-8 pt-4 mb-2">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
            
            {/* Bên trái: Thông tin bản quyền */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-800 text-sm font-medium">
                Copyright © 2025 by ONLYHAN - All for LYHAN.
              </p>
              <p className="text-gray-800 text-sm mt-0.5">
                Phát triển độc lập bởi người hâm mộ nghệ sĩ LYHAN.
              </p>
            </div>

            {/* Bên phải: Chữ nghệ thuật dùng font Great Vibes */}
            {/* style={{ fontFamily: '"Great Vibes", cursive' }} để ép dùng font vừa tải */}
            <div 
              className="text-black text-4xl" 
              style={{ fontFamily: '"Great Vibes", cursive', fontWeight: 400 }}
            >
              Cảm ơn vì đã đến
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
