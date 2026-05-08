'use client'

export default function ValuesSection() {
    const values = [
        {
            number: '1.',
            title: 'Tốc độ triển khai',
            description: 'Quy trình tinh gọn giúp rút ngắn tối đa thời gian từ ý tưởng đến ra mắt thị trường (Go live), giúp Startup chớp lấy cơ hội kinh doanh nhanh nhất.'
        },
        {
            number: '2.',
            title: 'Tối ưu hóa dòng tiền',
            description: 'Cung cấp giải pháp "vừa đủ" theo từng giai đoạn phát triển. Giúp tiết kiệm ngân sách vận hành ban đầu để tập trung nguồn lực vào bán hàng.'
        },
        {
            number: '3.',
            title: 'Hạ tầng mở rộng linh hoạt',
            description: 'Hạ tầng công nghệ được thiết kế linh hoạt, sẵn sàng nâng cấp và mở rộng (Scale up) ngay lập tức khi doanh nghiệp tăng trưởng nóng.'
        },
        {
            number: '4.',
            title: 'Tối ưu tỷ lệ chuyển đổi',
            description: 'Xây dựng Website và hệ thống Marketing tập trung vào trải nghiệm người dùng, biến lưu lượng truy cập thành đơn hàng và doanh thu thực.'
        },
        {
            number: '5.',
            title: 'Điểm tựa kỹ thuật tin cậy',
            description: 'Nemark đóng vai trò như bộ phận IT chuyên trách. Chúng tôi cam kết đồng hành và xử lý mọi vấn đề kỹ thuật 24/7 để Founder yên tâm quản trị.'
        }
    ]

    return (
        <section className="py-10 lg:py-14 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 bg-primary-light px-4 py-2 rounded-full mb-4">
                        <span className="material-icons-outlined text-primary">diamond</span>
                        <span className="text-primary font-semibold text-sm">Giá trị cốt lõi</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-['Montserrat']">
                        Giá Trị <span className="text-primary">Nemark</span> Mang Lại
                    </h2>
                    <p className="text-black/80 max-w-2xl mx-auto font-['Montserrat']">
                        5 giá trị cốt lõi giúp Startup tăng tốc và phát triển bền vững
                    </p>
                </div>

                {/* Values Grid - 3 columns on first row, 2 columns on second row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30"
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                        >
                            {/* Large Number */}
                            <div className="mb-3">
                                <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-primary to-primary-light bg-clip-text text-transparent">
                                    {value.number}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-base lg:text-lg font-bold text-primary leading-tight mb-3">
                                {value.title}
                            </h3>

                            {/* Description */}
                            <p className="text-black/80 text-xs lg:text-sm leading-relaxed font-['Montserrat']">
                                {value.description}
                            </p>

                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
