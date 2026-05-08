'use client'

import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

export default function PricingSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const pricingTiers = [
        {
            name: "Gói Cơ Bản",
            subtitle: "(Dành cho DN muốn dẫn đầu ngành - Tối ưu toàn diện doanh thu)",
            features: [
                "✓ Nghiên cứu Insight & Tư khóa ngành",
                "✓ Tư vấn kịch bản hàng cơ bản",
                "✓ Biên tập 15 bài chuẩn SEO/tháng",
                "✓ Nội dung đa ngôn ngữ",
                "✓ Tối ưu SEO Onpage (H1-H3, Meta Title)",
                "✓ Internal Link cơ bản",
                "✓ Vận hành kỹ thuật mỗi ngày",
                "✓ Dựng tài & tối ưu ~ 50 sản phẩm",
                "✓ Entity định hình từ Social",
                "✓ Đi 20 Backlink chất lượng",
                "✓ Hỗ trợ setup 01 chiến dịch Google Ads",
                "✓ Báo cáo tuần/tháng qua Email"
            ]
        },
        {
            name: "Gói Chuyên Nghiệp",
            subtitle: "(Dành cho DN muốn dẫn đầu ngành - Tối ưu toàn diện doanh thu)",
            featured: true,
            features: [
                "✓ Nghiên cứu kế hoạch SEO chi tiết",
                "✓ Phân tích đối thủ chuyên sâu (Top 10)",
                "✓ Biên tập 25 bài chuẩn SEO/tháng",
                "✓ Nội dung giàu tính chuyên môn (100%)",
                "✓ Tối ưu Onpage & SEO hình ảnh (Plugin)",
                "✓ Internal Link chuyên sâu",
                "✓ Vận hành website kỹ thuật 24/7",
                "✓ Dựng tài & tối ưu ~ 100 sản phẩm",
                "✓ Entity định hành từ 50 Social",
                "✓ Đi 40 Backlink chất lượng cao",
                "✓ Hỗ trợ tối ưu 08 chiến dịch Google Ads",
                "✓ Tích hợp Chat Online trực tiếp trên Web"
            ]
        },
        {
            name: "Gói Doanh Nghiệp",
            subtitle: "(Dành cho DN muốn dẫn đầu ngành - Tối ưu toàn diện doanh thu)",
            features: [
                "✓ Chiến lược phủ toàn ngành dài hạn",
                "✓ Biên tập 35 bài chuyên gia/tháng",
                "✓ Nội dung đạt chuẩn EAT, dày chuyên sâu (*)",
                "✓ Technical SEO (Schema, Core Web Vitals)",
                "✓ Tối ưu tốc độ tải trang cực đủ (Xanh)",
                "✓ Quản trị nội dung & kỹ thuật toàn diện",
                "✓ Dựng tài & tối ưu ~ 200 sản phẩm",
                "✓ Phủ sóng thương hiệu 100 Social",
                "✓ 60 Backlink (Guest Post/Báo uy tín)",
                "✓ Quản lý đa kênh 12 chiến dịch Google Ads",
                "✓ Xác minh & SEO 05 Google Map"
            ]
        }
    ]

    return (
        <section id="pricing-section" className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Bảng giá dịch vụ SEO
                </h2>
                <p className="text-center text-gray-700 mb-12 text-lg font-medium">
                    Dành cho DN muốn dẫn đầu ngành - Tối ưu toàn diện doanh thu
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingTiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 overflow-hidden ${tier.featured
                                ? 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-4 border-primary shadow-2xl transform scale-105'
                                : 'bg-white border-2 border-gray-200 shadow-lg'
                                } hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                        >
                            {/* HOT Badge - Top Right Corner */}
                            {tier.featured && (
                                <div className="absolute -top-1 -right-1 bg-gradient-to-br from-red-500 to-red-600 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl shadow-lg">
                                    <span className="flex items-center gap-1">
                                        HOT
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className={`text-2xl font-bold mb-2 ${tier.featured ? 'text-primary' : 'text-gray-900'}`}>
                                    {tier.name}
                                </h3>
                                {tier.featured && (
                                    <span className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-3 shadow-md">
                                        PHỔ BIẾN NHẤT
                                    </span>
                                )}
                            </div>

                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="text-sm text-gray-700 leading-relaxed flex items-start gap-2"
                                    >
                                        <span className={`flex-shrink-0 font-bold ${tier.featured ? 'text-purple-600' : 'text-primary'}`}>✓</span>
                                        <span>{feature.replace('✓ ', '')}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${tier.featured
                                    ? 'bg-gradient-to-r from-primary to-purple-600 text-white hover:from-purple-600 hover:to-primary shadow-lg hover:shadow-xl hover:scale-105'
                                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-primary hover:to-purple-600 hover:text-white shadow-md hover:shadow-lg hover:scale-105'
                                    }`}
                            >
                                Liên hệ báo giá
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
