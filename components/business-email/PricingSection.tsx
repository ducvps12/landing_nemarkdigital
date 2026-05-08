'use client'

import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

export default function PricingSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const plans = [
        {
            name: 'Basic',
            price: '59.000đ',
            period: '/tháng',
            description: 'Phù hợp cho doanh nghiệp nhỏ',
            features: [
                '5 Email Accounts',
                '5 GB Dung lượng/User',
                'Hỗ trợ 24/7',
                'Chống Spam cơ bản',
            ],
            highlighted: false,
            badge: null,
        },
        {
            name: 'Standard',
            price: '119.000đ',
            period: '/tháng',
            description: 'Lựa chọn phổ biến nhất',
            features: [
                '20 Email Accounts',
                '30 GB Dung lượng/User',
                'Miễn phí SSL',
                'Backup hàng ngày',
                'Chống Spam nâng cao',
                'Hỗ trợ ưu tiên',
            ],
            highlighted: true,
            badge: 'Phổ biến nhất',
        },
        {
            name: 'Pro',
            price: '179.000đ',
            period: '/tháng',
            description: 'Cho doanh nghiệp quy mô lớn',
            features: [
                '50 Email Accounts',
                '100 GB Dung lượng/User',
                'Ưu tiên xử lý sự cố',
                'Tích hợp API',
                'Custom domain aliases',
                'Admin dashboard',
                'Báo cáo chi tiết',
            ],
            highlighted: false,
            badge: null,
        },
    ];

    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Bảng giá dịch vụ
                    </h2>
                    <p className="text-slate-600">Phù hợp với mọi quy mô từ Startup đến Doanh nghiệp lớn</p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${plan.highlighted
                                ? 'bg-white border-2 border-primary shadow-2xl shadow-primary/20 scale-105 z-10'
                                : 'bg-white border-2 border-slate-200 hover:border-primary hover:shadow-xl'
                                }`}
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-bl-xl rounded-tr-3xl">
                                    {plan.badge}
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2 text-slate-900">
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-red-600">
                                        {plan.price}
                                    </span>
                                    <span className="text-slate-500">
                                        {plan.period}
                                    </span>
                                </div>
                                <p className="text-sm mt-2 text-slate-500">
                                    {plan.description}
                                </p>
                            </div>

                            {/* Features List */}
                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-3">
                                        <span className="material-icons-outlined text-xl text-green-500">
                                            check_circle
                                        </span>
                                        <span className="text-slate-700">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 bg-red-600 text-white hover:bg-red-700"
                            >
                                Đăng ký ngay
                            </button>
                        </div>
                    ))}
                </div>

                {/* Additional Note */}
                <div className="text-center mt-12" data-aos="fade-up">
                    <p className="text-slate-500 text-sm">
                        💡 Cần gói Enterprise với nhiều tính năng hơn?
                        <button className="text-primary font-semibold ml-1 hover:underline">
                            Liên hệ tư vấn
                        </button>
                    </p>
                </div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}

