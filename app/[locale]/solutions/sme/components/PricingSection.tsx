'use client'

interface PricingSectionProps {
    onOpenContactModal: () => void
}

export default function PricingSection({ onOpenContactModal }: PricingSectionProps) {
    const packages = [
        {
            name: 'Gói Tiết kiệm',
            icon: '💰',
            description: 'Dành cho doanh nghiệp mới khởi nghiệp, cần website cơ bản và công cụ marketing thiết yếu.',
            features: [
                'Website Landing Page chuẩn SEO',
                'Hosting & Domain 1 năm',
                'Email doanh nghiệp (5 tài khoản)',
                'Hướng dẫn quản trị cơ bản',
                'Hỗ trợ kỹ thuật 30 ngày'
            ],
            popular: false,
            buttonStyle: 'bg-primary hover:bg-primary-dark text-white'
        },
        {
            name: 'Gói Tiêu chuẩn',
            icon: '⭐',
            description: 'Giải pháp toàn diện cho SME muốn phát triển bền vững với đầy đủ công cụ Marketing.',
            features: [
                'Website đa trang chuẩn SEO',
                'Hosting Premium & Domain 1 năm',
                'Email doanh nghiệp (10 tài khoản)',
                'Chiến lược SEO cơ bản',
                'Tích hợp Analytics & Tracking',
                'Đào tạo quản trị nâng cao',
                'Hỗ trợ kỹ thuật 90 ngày'
            ],
            popular: true,
            buttonStyle: 'bg-primary hover:bg-primary-dark text-white'
        },
        {
            name: 'Gói Mở rộng',
            icon: '🚀',
            description: 'Dành cho doanh nghiệp muốn scale nhanh với hệ sinh thái Marketing hoàn chỉnh.',
            features: [
                'Website E-commerce / Hệ thống CRM',
                'VPS hiệu năng cao & Domain Premium',
                'Email doanh nghiệp (Unlimited)',
                'Chiến lược Marketing 360°',
                'Quảng cáo Google/Facebook Ads',
                'Tích hợp API & Automation',
                'Đào tạo team nội bộ',
                'Đồng hành & bảo trì trọn đời'
            ],
            popular: false,
            buttonStyle: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary'
        }
    ]

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary-light/20 to-cyan-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4" data-aos="fade-up">
                    <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight uppercase mb-2">
                        NEMARK Đồng hành cùng SME xây dựng và phát triển bền vững
                    </h2>
                </div>

                {/* Subheader */}
                <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-gray-800 text-lg md:text-xl font-bold">
                        Gói giải pháp đề xuất
                    </h3>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-3"></div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-white border-3 ${pkg.popular
                                ? 'border-4 border-[#FF6B35] scale-105'
                                : 'border-3 border-[#4A90E2]'
                                }`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute top-0 right-0 bg-[#E65100] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-bl-xl">
                                    Phổ biến nhất
                                </div>
                            )}

                            {/* Header */}
                            <div className={`p-6 lg:p-8 text-center ${pkg.popular ? 'bg-primary text-white' : ''}`}>
                                <span className="text-4xl">{pkg.icon}</span>
                                <h3 className={`text-xl font-bold mt-3 ${pkg.popular ? 'text-white' : 'text-gray-800'}`}>
                                    {pkg.name}
                                </h3>
                                <p className={`text-sm mt-2 ${pkg.popular ? 'text-white/80' : 'text-gray-500'}`}>
                                    {pkg.description}
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-100"></div>

                            {/* Features */}
                            <div className="p-6 lg:p-8 flex-1">
                                <ul className="space-y-3">
                                    {pkg.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-700">
                                            <span className="text-primary mt-0.5 flex-shrink-0">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Button */}
                            <div className="p-6 lg:p-8 pt-0">
                                <button 
                                    onClick={onOpenContactModal}
                                    className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full font-bold text-base transition-all duration-300 ${pkg.buttonStyle}`}
                                >
                                    Liên hệ tư vấn
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
