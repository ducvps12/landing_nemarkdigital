'use client'

import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

export default function CTASection() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <section className="py-16 md:py-20 bg-primary-light relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large circles */}
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/10 rounded-full blur-3xl"></div>

                {/* Small decorative circles */}
                <div className="absolute top-20 right-[20%] w-4 h-4 bg-accent/40 rounded-full"></div>
                <div className="absolute top-32 right-[15%] w-2 h-2 bg-white/30 rounded-full"></div>
                <div className="absolute bottom-20 left-[20%] w-4 h-4 bg-accent/40 rounded-full"></div>
                <div className="absolute bottom-32 left-[15%] w-2 h-2 bg-white/30 rounded-full"></div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-darker/50 to-transparent"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10">
                {/* Main Heading */}
                <h2
                    className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary uppercase tracking-wide mb-2"
                    data-aos="fade-up"
                >
                    HÃY ĐỂ NEMARK GIÚP WEBSITE CỦA BẠN
                </h2>
                <h3
                    className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-accent uppercase tracking-wide mb-10"
                    data-aos="fade-up"
                    data-aos-delay="50"
                >
                    VẬN HÀNH ỔN ĐỊNH MỖI NGÀY
                </h3>

                {/* CTA Button */}
                <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-base uppercase tracking-wider px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        ĐĂNG KÝ TƯ VẤN MIỄN PHÍ
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>

                {/* Tagline */}
                <p
                    className="text-center text-white/90 text-sm mt-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Nemark – giải pháp bảo trì website toàn diện cho sự phát triển của bạn
                </p>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
