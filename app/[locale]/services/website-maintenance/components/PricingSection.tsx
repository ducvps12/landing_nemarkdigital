'use client'

import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

export default function PricingSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const packages = [
        {
            name: 'Gói cơ bản',
            price: '1.499.000',
            currency: 'VNĐ',
            period: '/tháng',
            subtitle: 'Duy trì ổn định – phù hợp website nhỏ, không có IT',
            icon: '',
            features: [
                'Kiểm tra host, nhắc gia hạn tên miền & SSL',
                'Kiểm tra & fix lỗi cơ bản định kỳ',
                'Backup dữ liệu định kỳ',
                'Theo dõi uptime website',
                'Cập nhật plugin/theme an toàn',
                'Cài đặt Webmaster Tools, Analytics, Sitemaps',
                'Nội dung & Tin tức: 10 bài viết cơ bản',
                'Quản trị Dịch vụ/Sản phẩm: 5 bài cơ bản',
                'Báo cáo: 1 tuần/lần'
            ],
            popular: false,
            cardBg: 'bg-primary-light/30',
            buttonStyle: 'bg-primary-dark hover:bg-primary-darker text-white'
        },
        {
            name: 'Gói nâng cao',
            price: '2.499.000',
            currency: 'VNĐ',
            period: '/tháng',
            subtitle: 'Vận hành + tối ưu kỹ thuật – phù hợp website kinh doanh',
            icon: '',
            features: [
                'Toàn bộ quyền lợi GÓI CƠ BẢN',
                'Kiểm tra bảo mật định kỳ',
                'Dọn dẹp database – tối ưu tốc độ',
                'Tối ưu link, thẻ meta, xử lý lỗi 404',
                'Nội dung & Tin tức: 10 bài viết nâng cao',
                'Quản trị Dịch vụ/Sản phẩm: 5 bài chuẩn SEO',
                'Điều hướng link 301',
                'Báo cáo: 2 tuần/lần'
            ],
            popular: true,
            cardBg: 'bg-primary-light/30',
            buttonStyle: 'bg-primary-dark hover:bg-primary-darker text-white'
        },
        {
            name: 'Gói doanh nghiệp',
            price: '3.499.000',
            currency: 'VNĐ',
            period: '/tháng',
            subtitle: 'Tối ưu toàn diện – ưu tiên xử lý sự cố – vận hành như hệ thống',
            icon: '',
            features: [
                'Toàn bộ quyền lợi GÓI CHUYÊN NGHIỆP',
                'Full backup dữ liệu hàng tháng',
                'Fix lỗi hiển thị & chức năng nâng cao',
                'Tối ưu toàn diện SEO kỹ thuật',
                'Nội dung & Tin tức: 15 bài viết nâng cao',
                'Quản trị Sản phẩm/Dịch vụ: 15 bài nâng cao + 5 bài chuẩn SEO',
                'Hỗ trợ setup Google & Facebook Ads',
                'Hỗ trợ kỹ thuật ưu tiên 24/7',
                'Báo cáo: 1 tuần/lần'
            ],
            popular: false,
            cardBg: 'bg-primary-light/30',
            buttonStyle: 'bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white'
        }
    ]

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-primary-dark text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight uppercase">
                        Bảng Giá Dịch Vụ Bảo Trì
                    </h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto mt-3 rounded-full"></div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${pkg.cardBg} border border-primary/20`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-primary-dark text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md z-10">
                                    Phổ biến nhất
                                </div>
                            )}

                            {/* Header */}
                            <div className={`p-6 lg:p-8 text-center ${pkg.popular ? 'pt-14' : ''}`}>


                                {/* Name */}
                                <h3 className="text-xl pt-5 lg:text-2xl font-extrabold text-primary-dark mb-4">
                                    {pkg.name}
                                </h3>

                                {/* Price */}
                                <div className="mb-3">
                                    <span className="text-gray-500 text-sm">&gt; </span>
                                    <span className="text-3xl lg:text-4xl font-black text-primary-dark">
                                        {pkg.price}
                                    </span>
                                    <span className="text-base ml-1 text-gray-600">
                                        {pkg.currency}
                                    </span>
                                </div>

                                {/* Blue underline */}
                                <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>

                                {/* Subtitle */}
                                <p className="text-sm italic text-gray-600">
                                    ({pkg.subtitle})
                                </p>
                            </div>

                            {/* Features */}
                            <div className="px-6 lg:px-8 pb-4 flex-1">
                                <div className="space-y-3">
                                    {pkg.features.map((feature, fIndex) => (
                                        <div key={fIndex} className="flex items-start gap-3 text-sm text-gray-700">
                                            <span className="text-red-500 mt-0.5 shrink-0">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            <span className={feature.includes('GÓI') ? 'font-semibold text-primary-dark' : ''}>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="p-6 lg:p-8 pt-4">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg ${pkg.buttonStyle}`}
                                >
                                    Đăng ký ngay
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note */}
                <p className="text-center text-sm text-gray-500 mt-8 italic">
                    * Phí thêm: 1.000.000 – 2.000.000 VNĐ / tháng (Không bao gồm vận hành đặc biệt)
                </p>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
