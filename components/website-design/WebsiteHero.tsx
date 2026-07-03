'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function WebsiteHero() {
    return (
        <section
            data-hero
            className="relative min-h-[70vh] overflow-hidden bg-primary-darker pt-20"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4988C4_1px,transparent_1px)] [background-size:20px_20px]" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-darker via-primary-darker to-primary-dark z-10" />

            {/* Content Container - Two Columns */}
            <div className="relative z-20 min-h-[70vh] flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left - Text Content */}
                        <div className="order-2 lg:order-1" data-aos="fade-right">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-2">
                                THIẾT KẾ WEBSITE CHUẨN UX/UI
                            </h1>
                            <h2 className="text-xl md:text-2xl font-bold text-accent mb-6">
                                TỐI ƯU CHUYỂN ĐỔI - NÂNG TẦM THƯƠNG HIỆU
                            </h2>

                            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-lg">
                                Không chỉ là "bộ mặt" của doanh nghiệp trên môi trường số, website còn là công cụ kinh doanh, vận hành tự động, giúp tiếp cận khách hàng tiềm năng và đột phá doanh thu bền vững.
                            </p>

                            <Link
                                href="#pricing"
                                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white transition-all hover:bg-primary-dark shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
                            >
                                Tham khảo dịch vụ
                                <span className="material-icons ml-2">arrow_forward</span>
                            </Link>
                        </div>

                        {/* Right - Image */}
                        <div className="order-1 lg:order-2 relative" data-aos="fade-left">
                            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                                <Image
                                    src="/banner/bannerwebsite.png"
                                    alt="Website Design UI/UX"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-contain object-center"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
