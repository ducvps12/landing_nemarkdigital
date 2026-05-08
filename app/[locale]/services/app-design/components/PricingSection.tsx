'use client'

import Link from 'next/link'
import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

export default function PricingSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const packages = [
        {
            name: 'BASIC',
            price: '> 25.000.000 VNĐ',
            subtitle: '(Dành cho khách cần App giới thiệu dịch vụ, Catalogue sản phẩm)',
            icon: '🚀',
            iconBg: 'bg-primary',
            features: [
                'Bàn giao trong ~4 tuần',
                'Triển khai trên 1 nền tảng: iOS hoặc Android',
                'Thiết kế UI/UX dựa trên thư viện mẫu chuẩn',
                'Giới hạn tối đa 05 màn hình chức năng',
                'Tính năng đăng nhập / đăng ký cơ bản',
                'App dùng dữ liệu tĩnh / Offline',
                'Tối ưu mã nguồn nhẹ, khởi động nhanh',
                'Bảo trì kỹ thuật 01 tháng sau bàn giao',
                'Hỗ trợ nạp nội dung lần đầu'
            ],
            bgColor: 'bg-white',
            borderColor: 'border-primary',
            buttonColor: 'bg-primary hover:bg-primary-dark text-white',
            highlight: false
        },
        {
            name: 'PRO',
            price: '> 50.000.000 VNĐ',
            subtitle: '(Dành cho doanh nghiệp bán hàng, booking, membership)',
            badge: 'PHỔ BIẾN NHẤT',
            icon: '👑',
            iconBg: 'bg-primary',
            features: [
                'Bàn giao trong 6 – 8 tuần',
                'Triển khai Đa nền tảng: cả iOS & Android',
                'Thiết kế UI/UX Custom riêng theo yêu cầu',
                'Có trang quản trị (CMS): Quản lý sản phẩm, đơn hàng',
                'Tích hợp API: Thanh toán, đăng nhập MXH',
                'Hệ thống thông báo đẩy (Push Notification)',
                'Phân quyền người dùng (Khách, VIP, CTV)',
                'Bảo trì chuyên sâu 03 tháng',
                'Tích hợp báo cáo hiệu quả hoạt động'
            ],
            bgColor: 'bg-white',
            borderColor: 'border-primary',
            buttonColor: 'bg-primary hover:bg-primary-dark text-white',
            highlight: true
        },
        {
            name: 'PREMIUM',
            price: '> 85.000.000 VNĐ',
            subtitle: '(Dành cho Sàn TMĐT, Chuỗi lớn cần hệ thống vận hành tự động)',
            icon: '💎',
            iconBg: 'bg-white',
            features: [
                'Bàn giao trong 10 – 14 tuần',
                'Full UI/UX Custom: Nghiên cứu User Journey',
                'Hệ thống quản lý: Kho hàng, đơn hàng, doanh thu tự động',
                'Tích hợp nâng cao: Mã giảm giá, Tích điểm, Ví điện tử',
                'Cá nhân hóa: Thông báo theo hành vi khách',
                'Super Dashboard: Báo cáo thời gian thực',
                'Bảo mật 2FA, SSL & Tối ưu chịu tải lớn',
                'Bảo trì 06 tháng + Hỗ trợ 2h (24/7)',
                'Tích hợp phân tích hành vi (Heatmap)'
            ],
            bgColor: 'bg-primary-dark',
            borderColor: 'border-primary-dark',
            textColor: 'text-white',
            buttonColor: 'bg-white hover:bg-slate-100 text-primary-dark',
            highlight: false
        }
    ]

    return (
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden" id="pricing">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-16 bg-primary"></div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-dark">
                            BẢNG GIÁ THIẾT KẾ APP
                        </h2>
                        <div className="h-px w-16 bg-primary"></div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl transition-all duration-300 ${pkg.bgColor} border-2 ${pkg.borderColor} ${pkg.highlight ? 'shadow-2xl md:scale-105 md:-mt-4 md:mb-4' : 'shadow-lg hover:shadow-xl'
                                }`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Popular Badge */}
                            {pkg.badge && (
                                <div className="absolute -top-0 -right-0">
                                    <div className="relative">
                                        {/* Ribbon shape */}
                                        <div className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-tl-2xl rounded-br-2xl shadow-lg">
                                            {pkg.badge}
                                        </div>
                                        {/* Small triangle shadow effect */}
                                        <div className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-t-primary-dark border-r-[20px] border-r-transparent -ml-5"></div>
                                    </div>
                                </div>
                            )}

                            <div className="p-8">
                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <div className={`w-16 h-16 ${pkg.iconBg} rounded-full flex items-center justify-center text-3xl shadow-lg`}>
                                        {pkg.icon}
                                    </div>
                                </div>

                                {/* Name & Price */}
                                <div className="text-center mb-6">
                                    <h3 className={`text-2xl font-bold mb-3 ${pkg.textColor || 'text-slate-800'}`}>
                                        {pkg.name}
                                    </h3>
                                    <div className="mb-3">
                                        <p className={`text-xl font-bold ${pkg.textColor || 'text-slate-800'}`}>
                                            {pkg.price}
                                        </p>
                                        <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
                                    </div>
                                    <p className={`text-sm italic ${pkg.textColor ? 'text-primary-light' : 'text-black'}`}>
                                        {pkg.subtitle}
                                    </p>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${pkg.highlight ? 'bg-red-500' : pkg.name === 'PREMIUM' ? 'bg-amber-400' : 'bg-red-500'
                                                }`}>
                                                <span className="material-icons text-white" style={{ fontSize: '14px' }}>check</span>
                                            </span>
                                            <span className={`text-sm leading-relaxed ${pkg.textColor || 'text-black'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className={`flex items-center justify-center gap-2 w-full py-3.5 text-center font-bold rounded-lg transition-all shadow-md hover:shadow-lg ${pkg.buttonColor}`}
                                >
                                    <span>Đăng kí ngay</span>
                                    <span className="material-icons text-lg">arrow_circle_right</span>
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
