'use client'

import { Check, HelpCircle } from 'lucide-react'

export default function Pricing() {
    const plans = [
        {
            name: 'GÓI BASIC',
            price: '2.200.000',
            originalPrice: '3.990.000',
            badge: 'Tối ưu chi phí',
            popular: false,
            delivery: '1 - 3 ngày',
            features: [
                'Giao diện mẫu có sẵn (tùy chỉnh nhẹ)',
                'Tương thích Mobile & Tablet',
                'Tối ưu chuẩn SEO Onpage cơ bản',
                'Tặng tên miền quốc tế .com 1 năm',
                'Tặng Hosting tốc độ cao 2GB 1 năm',
                'Bảo hành kỹ thuật 12 tháng'
            ]
        },
        {
            name: 'GÓI BUSINESS',
            price: '10.999.000',
            originalPrice: '11.990.000',
            badge: 'Phổ biến nhất',
            popular: true,
            delivery: '5 - 7 ngày',
            features: [
                'Thiết kế giao diện độc quyền chuẩn UX/UI',
                'Không giới hạn tính năng tùy chỉnh',
                'Tối ưu tốc độ load trang (Lighthouse > 90)',
                'Tối ưu cấu trúc SEO Google nâng cao',
                'Tặng tên miền quốc tế .com 1 năm',
                'Tặng Hosting SSD chuyên dụng 4GB 1 năm',
                'Hỗ trợ tích hợp cổng thanh toán trực tuyến',
                'Bảo hành kỹ thuật trọn đời'
            ]
        },
        {
            name: 'GÓI VIP',
            price: '20.999.000',
            originalPrice: '25.000.000',
            badge: 'Giải pháp doanh nghiệp',
            popular: false,
            delivery: '10 - 15 ngày',
            features: [
                'Tất cả tính năng của gói BUSINESS',
                'Tích hợp Chatbot AI tư vấn thông minh',
                'Hệ thống quản lý dữ liệu CRM / ERP',
                'Tối ưu chuyển đổi chuyên sâu (A/B testing)',
                'Tặng VPS Cloud cấu hình cao 1 năm',
                'Miễn phí SSL bảo mật cao cấp (HTTPS)',
                'Hỗ trợ kỹ thuật ưu tiên 24/7/365',
                'Bảo hành & bảo trì trọn đời'
            ]
        }
    ]

    return (
        <section id="bang-gia" className="py-24 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-4">
                        <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                            Bảng giá dịch vụ
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                        Chi Phí Thiết Kế Website Hợp Lý
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
                        Lựa chọn gói dịch vụ phù hợp nhất với nhu cầu kinh doanh của bạn. Không phát sinh chi phí ẩn.
                    </p>
                </div>

                {/* Grid Plans */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between relative shadow-lg shadow-slate-100/50 hover:shadow-2xl ${plan.popular ? 'border-primary ring-2 ring-primary/10 scale-102 lg:-translate-y-4' : 'border-slate-100'}`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                                    {plan.badge}
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="p-8 sm:p-10 pb-0">
                                <span className={`text-xs font-extrabold uppercase tracking-widest ${plan.popular ? 'text-primary' : 'text-slate-400'}`}>
                                    {plan.name}
                                </span>
                                
                                <div className="flex items-baseline gap-2 mt-4">
                                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                                        {plan.price}
                                    </span>
                                    <span className="text-slate-500 font-bold text-lg">VNĐ</span>
                                </div>

                                <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                                    <span className="line-through">{plan.originalPrice} VNĐ</span>
                                    <span className="text-rose-500 font-bold bg-rose-50 px-2 py-0.5 rounded">Giảm giá</span>
                                </div>

                                <p className="text-slate-500 text-xs mt-4 flex items-center gap-1.5">
                                    <span>Thời gian hoàn thiện:</span>
                                    <strong className="text-slate-700 font-semibold">{plan.delivery}</strong>
                                </p>
                            </div>

                            {/* Features list */}
                            <div className="p-8 sm:p-10 pt-8 flex-grow">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3 text-slate-600 text-xs sm:text-sm">
                                            <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                                                <Check className="w-3.5 h-3.5" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Action button */}
                            <div className="p-8 sm:p-10 pt-0">
                                <a
                                    href="#cta"
                                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base text-center transition-all duration-300 ${plan.popular ? 'bg-primary hover:opacity-95 text-white shadow-lg shadow-primary/20' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                                >
                                    Đăng ký tư vấn
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
