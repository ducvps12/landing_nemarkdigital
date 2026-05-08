'use client'

import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

export default function PricingSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const packages = [
        {
            name: 'Gói Tích hợp thanh toán',
            icon: '💳',
            features: [
                'Tích hợp cổng thanh toán nội địa',
                'Tích hợp ví điện tử (MoMo, ZaloPay, VNPay...)',
                'Thanh toán quốc tế (Visa, Mastercard, PayPal)',
                'Webhook thông báo real-time',
                'Bảo mật SSL & mã hóa dữ liệu',
                'Hỗ trợ kỹ thuật 30 ngày'
            ],
            popular: false,
            buttonStyle: 'bg-primary hover:bg-primary-dark text-white'
        },
        {
            name: 'Gói Tích hợp API',
            icon: '🔗',
            features: [
                'Phân tích nghiệp vụ & thiết kế luồng',
                'Kết nối API bên thứ 3',
                'Đồng bộ dữ liệu 2 chiều',
                'Tự động hóa quy trình',
                'Xử lý lỗi & retry mechanism',
                'Tài liệu API chi tiết',
                'Hỗ trợ kỹ thuật 60 ngày'
            ],
            popular: true,
            buttonStyle: 'bg-primary hover:bg-primary-dark text-white'
        },
        {
            name: 'Gói Tích hợp CRM',
            icon: '👥',
            features: [
                'Thiết lập hệ thống CRM',
                'Import & phân loại data khách hàng',
                'Tự động gán tag & scoring',
                'Theo dõi hành trình khách hàng',
                'Tích hợp email marketing',
                'Dashboard báo cáo',
                'Đào tạo sử dụng',
                'Hỗ trợ kỹ thuật 90 ngày'
            ],
            popular: false,
            buttonStyle: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary'
        }
    ]

    return (
        <section className="py-16 md:py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight mb-2 uppercase">
                        Bảng giá dịch vụ
                    </h2>
                    <div className="w-24 h-1.5 bg-white mx-auto rounded-full"></div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white ${pkg.popular
                                ? 'border-2 border-primary'
                                : 'border-2 border-gray-200 hover:border-primary'
                                }`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-bl-xl">
                                    Phổ biến nhất
                                </div>
                            )}

                            {/* Header */}
                            <div className={`p-6 lg:p-8 text-center ${pkg.popular ? 'bg-primary text-white' : ''}`}>
                                <span className="text-4xl">{pkg.icon}</span>
                                <h3 className={`text-xl font-bold mt-3 ${pkg.popular ? 'text-white' : 'text-gray-800'}`}>
                                    {pkg.name}
                                </h3>
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
                                    onClick={() => setIsModalOpen(true)}
                                    className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full font-bold text-base transition-all duration-300 ${pkg.buttonStyle}`}
                                >
                                    Liên hệ báo giá
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
