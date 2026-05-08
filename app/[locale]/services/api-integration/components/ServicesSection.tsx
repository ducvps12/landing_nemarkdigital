'use client'

interface ServicesSectionProps {
    onOpenContactModal: () => void
}

export default function ServicesSection({ onOpenContactModal }: ServicesSectionProps) {
    const services = [
        {
            title: 'Tích hợp thanh toán',
            icon: '💳',
            features: [
                'Ví điện tử',
                'Chuyển khoản',
                'Thanh toán online nội địa & quốc tế'
            ]
        },
        {
            title: 'Tích hợp API',
            icon: '🔗',
            features: [
                'Kết nối hệ thống bên thứ 3',
                'Đồng bộ dữ liệu',
                'Tự động hóa quy trình'
            ]
        },
        {
            title: 'Tích hợp CRM',
            icon: '👥',
            features: [
                'Quản lý khách hàng',
                'Lưu trữ & phân loại data',
                'Theo dõi hành trình khách hàng'
            ]
        }
    ]

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
                        Dịch vụ <span className="text-primary">Tích hợp Thanh toán – API – CRM</span> tại Nemark
                    </h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/30 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-primary to-primary-light px-6 py-4 text-center">
                                <span className="text-4xl">{service.icon}</span>
                                <h3 className="text-xl font-bold text-white mt-2">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Features */}
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <span className="text-primary mt-1 flex-shrink-0">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Detail Link */}
                                <div className="mt-6 text-center">
                                    <button 
                                        onClick={onOpenContactModal}
                                        className="text-primary font-semibold hover:underline transition-all"
                                    >
                                        Chi tiết →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
