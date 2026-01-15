import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 mt-auto w-full border-t border-gray-200 shadow-lg">
      <div className="w-full px-4 md:px-8 py-8">
        
        {/* Phần nội dung trên */}
        <div className="grid grid-cols-1 xl:grid-cols-5 auto-cols-min gap-y-6 max-w-5xl mx-auto">
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
              {/* SỬA LỖI: Thêm whitespace-nowrap để "10 giây" không bị ngắt dòng */}
              Dữ liệu được cập nhật trực tiếp từ hệ thống định kỳ mỗi{" "}
              <b className="whitespace-nowrap">10 giây</b>.
              <br />
              Đồng thời ghi nhận lại mỗi <b className="whitespace-nowrap">10 phút</b> để phân tích và dự đoán.
            </p>
          </div>
        </div>

        {/* Phần dưới */}
        <div className="border-t border-gray-400 mt-8 pt-4 mb-2">
          <div className="flex flex-col md:flex-row justify-between items-end max-w-5xl mx-auto">
            
            {/* Bên trái: Copyright */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-800 text-sm font-bold">
                Copyright © by WeChoice Awards & công ty cổ phần VC CORP.
              </p>
              <p className="text-gray-800 text-sm mt-0.5 font-medium">
                Phát triển độc lập bởi người hâm mộ Nghệ Sĩ LYHAN. Tiếp tục dựa trên source code của Nguyễn Đình Kiên -
              <h3 className="text-gray-800 text-sm font-extrabold hover:underline">
              <a href="https://www.threads.com/@_thetreee_" target="_blank" rel="noreferrer"> @_thetreee_</a>
              </h3>
              </p>
            </div>

            {/* Bên phải: Chữ "Thank you dancers!" */}
            <div 
              // SỬA: Đổi text-5xl thành text-4xl cho nhỏ lại
              className="text-black text-4xl leading-none pb-1"
              // Giữ nguyên font Dancing Script đẹp
              style={{ fontFamily: '"Dancing Script", cursive', fontWeight: 700 }}
            >
              Thank you dancers!
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
