'use client'

import Image from 'next/image'

export default function BenefitsSection() {
    const benefits = [
        'Đột phá doanh thu & Tỷ lệ chuyển đổi',
        'Cải thiện thứ hạng SEO & Giá thầu Ads',
        'Nâng tầm uy tín thương hiệu',
        'Bảo vệ tài sản & Vận hành liên tục'
    ]

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
                        Lợi ích <span className="text-primary">sau khi triển khai</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Benefits List */}
                    <div data-aos="fade-right">
                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 bg-gradient-to-r from-primary-light/20 to-white p-4 rounded-xl border border-primary/20 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-800 font-medium text-lg">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center" data-aos="fade-left">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary-light/30 to-cyan-100 rounded-2xl blur-xl opacity-50"></div>
                            <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                                <Image
                                    src="/images/nemark-growth-benefits.png"
                                    alt="Lợi ích sau khi triển khai"
                                    width={400}
                                    height={400}
                                    className="w-full max-w-[350px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
