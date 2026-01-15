import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl pb-20">
      {/* Tiêu đề chính */}
      <h1 className="text-3xl md:text-4xl font-black text-center mb-8 text-gray-900">
        Về WeChoice 2025 Tracker
      </h1>

      <div className="space-y-6">
        {/* Khối 1: Giới thiệu */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Giới thiệu</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            WeChoice 2025 Tracker là công cụ theo dõi và phân tích kết quả bình chọn của WeChoice Awards 2025 theo thời gian thực. 
            Đồng thời cung cấp các tính năng thống kê, dự đoán và cập nhật trực tiếp giúp bạn nắm bắt một cách trực quan về xu hướng bình chọn.
          </p>
          <p className="font-medium text-gray-900">
            Truy cập trang web giải thưởng: <a href="https://wechoice.vn" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">wechoice.vn</a>
          </p>
        </div>

        {/* Khối 2: Cách thức hoạt động */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Cách thức hoạt động</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hệ thống lấy dữ liệu thông qua API của hệ thống bình chọn, sau đó xử lý và hiển thị dưới dạng bảng xếp hạng, biểu đồ và phân tích dự đoán.
            Dữ liệu được cập nhật liên tục để đảm bảo tính chính xác và kịp thời.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Dữ liệu thời gian thực được cập nhật trực tiếp mỗi <strong className="text-gray-900">10 giây</strong>.</li>
            <li>Dữ liệu thống kê và dự đoán được ghi nhận mỗi <strong className="text-gray-900">10 phút</strong>. Từ đó tổng hợp lại để đưa ra các phân tích và dự đoán.</li>
          </ul>
        </div>

        {/* Khối 3: Mã nguồn */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Mã nguồn của dự án</h2>
          <p className="text-gray-600 leading-relaxed">
            Dự án này được phát triển với mục đích phi lợi nhuận dành cho cộng đồng. 
            Mọi đóng góp và ý kiến phản hồi đều được hoan nghênh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
