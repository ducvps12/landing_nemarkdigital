'use client'

export default function BenefitsSection() {
    const benefits = [
        {
            icon: 'engineering',
            title: 'Tư vấn thực chiến',
            description: 'Đề xuất giải pháp sát sườn với mô hình kinh doanh, tối ưu chi phí và hiệu quả.'
        },
        {
            icon: 'code',
            title: 'Bàn giao 100% Source Code',
            description: 'Khách hàng làm chủ hoàn toàn mã nguồn và dữ liệu, không bị ràng buộc kỹ thuật.'
        },
        {
            icon: 'touch_app',
            title: 'UX/UI tối ưu chuyển đổi',
            description: 'Giao diện hiện đại, luồng thao tác thông minh giúp giữ chân khách hàng lâu hơn.'
        },
        {
            icon: 'price_check',
            title: 'Chi phí minh bạch',
            description: 'Báo giá trọn gói một lần duy nhất, cam kết không phát sinh chi phí ẩn.'
        },
        {
            icon: 'verified_user',
            title: 'Bảo hành trọn đời',
            description: 'Hỗ trợ kỹ thuật 24/7, khắc phục sự cố ngay lập tức để hệ thống luôn ổn định.'
        }
    ]

    return (
        <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-slate-800 mb-2">
                        Lợi ích khi lựa chọn Nemark
                    </h2>
                    <p className="text-lg text-primary font-medium">
                        là đơn vị triển khai thiết kế APP
                    </p>
                </div>

                {/* 5 Column Benefits with Icons */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8" data-aos="fade-up" data-aos-delay="100">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group"
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                        >
                            {/* Icon Container - No frame */}
                            <div className="mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <span className="material-icons text-primary" style={{ fontSize: '80px' }}>
                                    {benefit.icon}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-bold text-slate-800 text-sm mb-2 leading-tight">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-xs text-black leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
