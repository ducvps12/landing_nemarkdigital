'use client'

import Image from 'next/image'

interface HeroSectionProps {
    onOpenContactModal: () => void
}

export default function HeroSection({ onOpenContactModal }: HeroSectionProps) {
    return (
        <section className="relative min-h-screen flex items-center pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/seo/hero.png"
                    alt="SEO Background"
                    fill
                    priority
                    quality={95}
                    className="object-cover"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                <div className="max-w-2xl">
                    {/* Left Content */}
                    <div className="text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Dịch vụ SEO TỔNG THỂ<br />
                            <span className="text-primary">NEMARK</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white mb-4 font-medium">
                            Giải pháp tăng trưởng bền vững<br />
                            cho doanh nghiệp trong kỷ nguyên AI
                        </p>

                        <p className="text-lg md:text-xl text-gray-200 mb-8">
                            Lên top Google, dễ xuất trong AI Overviews
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={onOpenContactModal}
                                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                TƯ VẤN SEO MIỄN PHÍ
                            </button>
                            <button
                                onClick={() => {
                                    const pricingSection = document.getElementById('pricing-section')
                                    if (pricingSection) {
                                        pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                    }
                                }}
                                className="px-8 py-4 bg-white text-primary border-2 border-white rounded-lg font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Báo giá chi tiết
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
