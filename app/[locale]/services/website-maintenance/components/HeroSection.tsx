'use client'

import Image from 'next/image'
import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

export default function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <section className="relative bg-primary overflow-hidden min-h-[66vh] flex items-center ">
            {/* Background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary"></div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col gap-8" data-aos="fade-right">
                        {/* Main Heading */}
                        <div className="flex flex-col gap-6">
                            <h1 className="text-white text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight tracking-tight">
                                Dịch vụ bảo trì & vận hành website chuyên nghiệp
                            </h1>

                            {/* Description with gradient keywords */}
                            <p className="text-white/90 text-base md:text-lg leading-relaxed">
                                Cung cấp dịch vụ booking báo chí trọn gói từ A – Z, giúp cá nhân & doanh nghiệp{' '}
                                <span className="font-bold text-yellow-300">
                                    TĂNG UY TÍN
                                </span>
                                ,{' '}
                                <span className="font-bold text-green-300">
                                    TẠO DỰNG NIỀM TIN
                                </span>
                                {' '}....................{' '}
                                <span className="font-bold text-orange-300">
                                    ĐỘ NHẬN DIỆN THƯƠNG HIỆU
                                </span>.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group relative bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/25 active:scale-[0.98] uppercase tracking-wider"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    TƯ VẤN MIỄN PHÍ
                                    <svg
                                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                                    >
                                        {i}K+
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-white/80">
                                <span className="font-semibold text-white">500+</span> doanh nghiệp tin tưởng
                            </p>
                        </div>
                    </div>

                    {/* Right Image - Model */}
                    <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
                        <div className="relative">
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-light/50 to-transparent rounded-full blur-2xl scale-90"></div>

                            {/* Model Image */}
                            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                                <Image
                                    src="/images/nemark-maintenance-hero.png"
                                    alt="Chuyên gia tư vấn bảo trì website"
                                    width={600}
                                    height={700}
                                    className="w-full h-auto object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white" />
                </svg>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
