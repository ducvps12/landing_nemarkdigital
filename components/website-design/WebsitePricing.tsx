'use client'

import Link from 'next/link'
import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

export default function WebsitePricing() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const packages = [
        {
            name: 'BASIC',
            originalPrice: '3.000.000 VNĐ',
            salePrice: '1.500.000 VNĐ',
            subtitle: '(Dành cho khách cần website đơn giản – nhanh – đủ dùng)',
            icon: '🚀',
            iconBg: 'bg-primary',
            features: [
                'Bàn giao trong 2–3 ngày',
                'Sử dụng giao diện mẫu đẹp, chỉnh sửa theo thương hiệu',
                'Backup dữ liệu hàng tuần',
                'Băng thông không giới hạn',
                'Hỗ trợ kỹ thuật 24/7',
                'Hướng dẫn quản trị website',
                'Hướng dẫn đăng bài viết / sản phẩm',
                'Công cụ tối ưu SEO cơ bản',
                'Bảo hành trọn đời',
                'Tặng tên miền quốc tế .com / .net (1 năm)',
                'Tặng hosting SSD 1GB',
                'Tặng box chat hỗ trợ trực tuyến'
            ],
            bgColor: 'bg-white',
            borderColor: 'border-primary',
            buttonColor: 'bg-primary hover:bg-primary-dark text-white',
            highlight: false
        },
        {
            name: 'PRO',
            originalPrice: '10.000.000 VNĐ',
            salePrice: '5.000.000 VNĐ',
            subtitle: '(Dành cho doanh nghiệp muốn website đẹp – chuẩn SEO – dễ mở rộng)',
            badge: 'PHỔ BIẾN NHẤT',
            icon: '👑',
            iconBg: 'bg-primary',
            features: [
                'Bàn giao 5–7 ngày',
                'Thiết kế website theo nhu cầu – chỉnh sửa theo brand',
                'Giao diện pro, tối ưu trải nghiệm người dùng',
                'Tích hợp Form liên hệ – Form báo giá',
                'Tối ưu tốc độ & SEO Onpage',
                'Tương thích mọi thiết bị (Mobile – Tablet – PC)',
                'Backup dữ liệu hàng tuần',
                'Hỗ trợ 24/7',
                'Công cụ SEO nâng cao + tối ưu hình ảnh',
                'Hướng dẫn quản trị chi tiết',
                'Giảm 10% khi làm website tiếp theo',
                'Tặng tên miền quốc tế .com / .net',
                'Tặng hosting SSD 2GB'
            ],
            bgColor: 'bg-white',
            borderColor: 'border-primary',
            buttonColor: 'bg-primary hover:bg-primary-dark text-white',
            highlight: true
        },
        {
            name: 'PREMIUM',
            originalPrice: '15.000.000 VNĐ',
            salePrice: '12.000.000 VNĐ',
            subtitle: '(Dành cho doanh nghiệp cần website cao cấp – chuẩn UI/UX – tối ưu chuyển đổi)',
            icon: '💎',
            iconBg: 'bg-white',
            features: [
                'Bàn giao trong 10–15 ngày',
                'Thiết kế UI/UX riêng trên Figma (không dùng template)',
                'Xây website theo ngành: dịch vụ – bán hàng – công ty – bất động sản…',
                'Tối ưu SEO Technical (heading, schema, tốc độ 85–95)',
                'Backup dữ liệu hàng tuần',
                'Băng thông không giới hạn',
                'Hỗ trợ 24/7 + đội kỹ thuật ưu tiên',
                'Hướng dẫn quản trị chi tiết',
                'Công cụ tối ưu chuyển đổi (CTA, form, popup, tracking)',
                'Bảo hành trọn đời',
                'Tặng hosting 3–5GB (giá trị 3.000.000–3.500.000/năm)',
                'Tặng 1 tên miền quốc tế .com / .net',
                'Tặng box chat chuyên nghiệp'
            ],
            bgColor: 'bg-primary-dark',
            borderColor: 'border-primary-dark',
            textColor: 'text-white',
            buttonColor: 'bg-white hover:bg-slate-100 text-primary-dark',
            highlight: false
        }
    ]

    return (
        <section className="py-16 lg:py-24 relative overflow-hidden" id="pricing">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light/30 via-blue-50 to-primary-light/20"></div>

            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4988C4_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>

            {/* Decorative shapes */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/30 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-16 bg-primary"></div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-dark">
                            BẢNG GIÁ THIẾT KẾ WEBSITE
                        </h2>
                        <div className="h-px w-16 bg-primary"></div>
                    </div>
                    <p className="text-xl md:text-2xl text-accent font-semibold italic">
                        Hoàn Tiền Nếu Bạn Không Hài Lòng
                    </p>
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
                                        {/* Original Price - Strikethrough */}
                                        <p className={`text-base line-through ${pkg.textColor ? 'text-white/60' : 'text-gray-400'}`}>
                                            {pkg.originalPrice}
                                        </p>
                                        {/* Sale Price - Highlighted */}
                                        <p className={`text-2xl font-bold ${pkg.textColor ? 'text-amber-400' : 'text-red-500'}`}>
                                            {pkg.salePrice}
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
