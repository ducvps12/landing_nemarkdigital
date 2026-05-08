'use client'

import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

interface PricingSectionProps {
    onOpenContactModal?: () => void
}

export default function PricingSection({ onOpenContactModal }: PricingSectionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const pricingTiers = [
        {
            name: "Gói cơ bản",
            price: "1.499.000",
            description: "(Duy trì ổn định – phù hợp website nhỏ, không có IT)",
            icon: "",
            features: [
                "Kiểm tra host, nhắc gia hạn tên miền & SSL",
                "Kiểm tra & fix lỗi cơ bản định kỳ",
                "Backup dữ liệu định kỳ",
                "Theo dõi uptime website",
                "Cập nhật plugin/theme an toàn",
                "Cài đặt Webmaster Tools, Analytics, Sitemaps",
                "Nội dung & Tin tức: 10 bài viết cơ bản",
                "Quản trị Dịch vụ/Sản phẩm: 5 bài cơ bản",
                "Báo cáo: 1 tuần/lần"
            ]
        },
        {
            name: "Gói nâng cao",
            price: "2.499.000",
            description: "(Vận hành + tối ưu kỹ thuật – phù hợp website kinh doanh)",
            icon: "",
            featured: true,
            features: [
                "Toàn bộ quyền lợi GÓI CƠ BẢN",
                "Kiểm tra bảo mật định kỳ",
                "Dọn dẹp database – tối ưu tốc độ",
                "Tối ưu link, thẻ meta, xử lý lỗi 404",
                "Nội dung & Tin tức: 10 bài viết nâng cao",
                "Quản trị Dịch vụ/Sản phẩm: 5 bài chuẩn SEO",
                "Điều hướng link 301",
                "Báo cáo: 2 tuần/lần"
            ]
        },
        {
            name: "Gói doanh nghiệp",
            price: "3.499.000",
            description: "(Tối ưu toàn diện – ưu tiên xử lý sự cố – vận hành như hệ thống)",
            icon: "",
            features: [
                "Toàn bộ quyền lợi GÓI CHUYÊN NGHIỆP",
                "Full backup dữ liệu hàng tháng",
                "Fix lỗi hiển thị & chức năng nâng cao",
                "Tối ưu toàn diện SEO kỹ thuật",
                "Nội dung & Tin tức: 15 bài viết nâng cao",
                "Quản trị Sản phẩm/Dịch vụ: 15 bài nâng cao + 5 bài chuẩn SEO",
                "Hỗ trợ setup Google & Facebook Ads",
                "Hỗ trợ kỹ thuật ưu tiên 24/7",
                "Báo cáo: 1 tuần/lần"
            ]
        }
    ]

    return (
        <section id="pricing" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase" style={{ color: '#1C4D8D' }}>
                    BẢNG GIÁ DỊCH VỤ BẢO TRÌ
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pricingTiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl p-6 relative flex flex-col h-full ${tier.featured
                                ? 'border-2 shadow-2xl'
                                : 'border border-gray-200 shadow-lg'
                                } hover:shadow-2xl transition-all`}
                            style={tier.featured ? { borderColor: '#4988C4' } : {}}
                        >
                            {/* Featured badge */}
                            {tier.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="inline-block text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg" style={{ background: '#4988C4' }}>
                                        PHỔ BIẾN NHẤT
                                    </span>
                                </div>
                            )}

                            {/* Icon */}
                            <div className="text-center mt-4 mb-4">
                                <span className="text-4xl">{tier.icon}</span>
                            </div>

                            {/* Name */}
                            <div className="text-center mb-2">
                                <h3 className="text-xl font-bold" style={{ color: '#4988C4' }}>
                                    {tier.name}
                                </h3>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-2">
                                <span className="text-3xl md:text-4xl font-bold" style={{ color: '#1C4D8D' }}>
                                    {tier.price}
                                </span>
                                <span className="text-gray-600 text-sm ml-1">VND</span>
                            </div>

                            {/* Description */}
                            <p className="text-center text-gray-500 text-sm mb-6 italic">
                                {tier.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8 flex-grow">
                                {tier.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="text-sm text-gray-700 leading-relaxed flex items-start gap-2"
                                    >
                                        <span style={{ color: '#4988C4' }} className="flex-shrink-0 mt-0.5">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 mt-auto ${tier.featured
                                    ? 'text-white hover:opacity-90 shadow-lg'
                                    : 'text-white hover:opacity-90'
                                    }`}
                                style={{ background: '#4988C4' }}
                            >
                                Đăng ký ngay
                                <span>→</span>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Footer note */}
                <p className="text-center text-gray-500 text-sm mt-8">
                    * Phí thêm: 1.000.000 – 2.000.000 VND / tháng (Không bao gồm vận hành đặc biệt)
                </p>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
