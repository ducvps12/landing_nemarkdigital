'use client'

export default function WhyCustomApp() {
    const reasons = [
        {
            number: '1',
            title: 'Tối ưu trải nghiệm người dùng (UX/UI) theo nghiệp vụ',
            description: 'Tùy chỉnh mọi tính năng và giao diện bám sát quy trình vận hành đặc thù. Mọi yếu tố được "may đo" giúp loại bỏ thao tác dư thừa.'
        },
        {
            number: '2',
            title: 'Bảo mật tối đa & Sở hữu dữ liệu độc quyền',
            description: 'Giữ 100% quyền sở hữu Source Code và Dữ liệu. Tích hợp các lớp bảo mật chuyên biệt, loại bỏ rủi ro phụ thuộc bên thứ ba.'
        },
        {
            number: '3',
            title: 'Tích hợp linh hoạt vào hệ sinh thái quản trị',
            description: 'Kết nối với CRM, ERP, API thanh toán. Dữ liệu đồng bộ hóa nhanh chóng, chính xác với khả năng tùy biến API linh hoạt.'
        },
        {
            number: '4',
            title: 'Dễ dàng nâng cấp & Mở rộng quy mô',
            description: 'Phát triển thêm Module, mở rộng user, hỗ trợ đa ngôn ngữ khi doanh nghiệp mở rộng thị trường quốc tế.'
        }
    ]

    return (
        <section className="py-16 lg:py-24 bg-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-6">
                        Vì sao doanh nghiệp nên chọn thiết kế app theo yêu cầu?
                    </h2>

                    <div className="bg-slate-100 border-l-4 border-primary rounded-lg p-6 max-w-6xl mx-auto">
                        <p className="text-sm md:text-base text-black leading-relaxed italic">
                            "Khác với các nền tảng có sẵn, App thiết kế riêng là giải pháp 'may đo' hoàn hảo, bám sát tuyệt đối vào quy trình vận hành đặc thù của doanh nghiệp. Đây là bước đi chiến lược giúp doanh nghiệp làm chủ công nghệ, độc quyền dữ liệu khách hàng và kiến tạo trải nghiệm người dùng khác biệt – nền tảng cốt lõi cho sự tăng trưởng bền vững trong dài hạn."
                        </p>
                    </div>
                </div>

                {/* 4 Column Grid - Shield Shape */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-10" data-aos="fade-up">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="relative"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Number Badge - Fully visible outside card */}
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-30">
                                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full shadow-lg">
                                    <span className="text-white font-bold text-2xl">{reason.number}</span>
                                </div>
                            </div>

                            {/* Shield Card */}
                            <div
                                className="relative pt-12 pb-12 px-6 bg-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                                style={{
                                    minHeight: '300px',
                                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 5%, 100% 70%, 95% 80%, 50% 100%, 5% 80%, 0% 70%, 0% 5%)',
                                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.05)'
                                }}
                            >
                                {/* SVG Shield Border Outline */}
                                <svg
                                    className="absolute inset-0 w-full h-full pointer-events-none"
                                    style={{ zIndex: 1 }}
                                    preserveAspectRatio="none"
                                    viewBox="0 0 100 100"
                                >
                                    {/* Glossy shine effect - gradient overlay */}
                                    <defs>
                                        <linearGradient id={`shineGradient${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.4 }} />
                                            <stop offset="50%" style={{ stopColor: 'white', stopOpacity: 0.1 }} />
                                            <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
                                        </linearGradient>
                                    </defs>

                                    {/* Shine overlay */}
                                    <polygon
                                        points="10,0 90,0 100,5 100,40 50,50 0,40 0,5"
                                        fill={`url(#shineGradient${index})`}
                                    />

                                    {/* Border outlines */}
                                    <polygon
                                        points="10,0 90,0 100,5 100,70 95,80 50,100 5,80 0,70 0,5"
                                        fill="none"
                                        stroke="rgb(148 163 184)"
                                        strokeWidth="3"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                    <polygon
                                        points="10,0 90,0 100,5 100,70 95,80 50,100 5,80 0,70 0,5"
                                        fill="none"
                                        stroke="rgb(226 232 240)"
                                        strokeWidth="3"
                                        strokeDasharray="none"
                                        vectorEffect="non-scaling-stroke"
                                        style={{ opacity: 0.7 }}
                                    />
                                </svg>

                                {/* Card Content */}
                                <div className="text-center relative z-10 pt-2">
                                    <h3 className="text-sm font-bold text-white mb-3 leading-tight px-3 py-2 bg-gradient-to-r from-primary to-primary-dark rounded-lg mx-2 shadow-md">
                                        {reason.title}
                                    </h3>
                                    <p className="text-black text-xs leading-relaxed px-2">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
