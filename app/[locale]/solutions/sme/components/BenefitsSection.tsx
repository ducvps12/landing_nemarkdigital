'use client'

export default function BenefitsSection() {
    const benefits = [
        {
            number: '01',
            title: 'HỆ SINH THÁI ĐỒNG BỘ "ALL-IN-ONE"',
            description: 'Cung cấp giải pháp trọn gói từ Hạ tầng – Website – Marketing. Việc tích hợp 3-trong-1 giúp dữ liệu thông suốt, quản lý tập trung và loại bỏ hoàn toàn xung đột kỹ thuật giữa các nền tảng rời rạc.'
        },
        {
            number: '02',
            title: 'GIẢI PHÁP "MAY ĐO" TỐI ƯU CHI PHÍ',
            description: 'Tư vấn chiến lược bám sát ngân sách và quy mô thực tế của từng SME. Chúng tôi giúp doanh nghiệp tiết kiệm tới 30% chi phí vận hành so với tự dựng team In-house, loại bỏ mọi khoản lãng phí không cần thiết.'
        },
        {
            number: '03',
            title: 'TẬP TRUNG TĂNG TRƯỞNG DOANH THU',
            description: 'Lấy hiệu quả làm thước đo. Mọi sản phẩm đều được tối ưu hóa trải nghiệm người dùng (UX/UI) và tỷ lệ chuyển đổi (CRO), mục tiêu cuối cùng là biến lượt truy cập thành đơn hàng và lợi nhuận thực.'
        },
        {
            number: '04',
            title: 'ĐỘI NGŨ CHUYÊN GIA THỰC CHIẾN',
            description: 'Sở hữu 6+ năm kinh nghiệm triển khai thành công 100+ dự án. Nemark mang đến tư duy chiến lược sắc bén và ám hiểu thị trường, giúp doanh nghiệp định hướng đúng đắn ngay từ những bước đi đầu tiên.'
        },
        {
            number: '05',
            title: 'ĐỒNG HÀNH & BẢO TRÌ TRỌN ĐỜI',
            description: 'Nemark đóng vai trò như "phòng kỹ thuật thuê ngoài" của bạn. Chúng tôi cam kết bảo hành vĩnh viễn, hỗ trợ xử lý sự cố 24/7, đảm bảo hệ thống kinh doanh của doanh nghiệp luôn vận hành ổn định.'
        }
    ]

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                        Lợi ích khi triển khai cùng Nemark
                    </h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Number */}
                            <div className="text-5xl font-black text-[#F59E0B] mb-4">
                                {benefit.number}.
                            </div>

                            {/* Title */}
                            <h3 className="text-primary font-bold text-sm uppercase tracking-wide mb-4 leading-snug">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-xs leading-loose">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
