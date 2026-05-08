'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

export default function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <section className="relative overflow-hidden min-h-[66vh] flex items-center">
            {/* Cloud background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/cloud-bg.png')" }}
            ></div>

            {/* Blue overlay to enhance color */}
            <div className="absolute inset-0 bg-primary/15"></div>

            {/* Decorative cloud shapes */}
            <svg className="absolute top-10 left-5 w-40 h-24 opacity-40" viewBox="0 0 200 120" fill="white">
                <path d="M170 90c16.6 0 30-13.4 30-30s-13.4-30-30-30c-2 0-4 .2-5.9.6C158.5 12.5 140.4 0 120 0c-26.5 0-48 21.5-48 48 0 1.4.1 2.7.2 4C49.5 54.5 32 73.5 32 96c0 13.3 10.7 24 24 24h114c16.6 0 30-13.4 30-30z" />
            </svg>

            <svg className="absolute top-20 right-10 w-56 h-32 opacity-30" viewBox="0 0 200 120" fill="white">
                <path d="M170 90c16.6 0 30-13.4 30-30s-13.4-30-30-30c-2 0-4 .2-5.9.6C158.5 12.5 140.4 0 120 0c-26.5 0-48 21.5-48 48 0 1.4.1 2.7.2 4C49.5 54.5 32 73.5 32 96c0 13.3 10.7 24 24 24h114c16.6 0 30-13.4 30-30z" />
            </svg>

            <svg className="absolute bottom-20 left-1/4 w-48 h-28 opacity-25" viewBox="0 0 200 120" fill="white">
                <path d="M170 90c16.6 0 30-13.4 30-30s-13.4-30-30-30c-2 0-4 .2-5.9.6C158.5 12.5 140.4 0 120 0c-26.5 0-48 21.5-48 48 0 1.4.1 2.7.2 4C49.5 54.5 32 73.5 32 96c0 13.3 10.7 24 24 24h114c16.6 0 30-13.4 30-30z" />
            </svg>

            <svg className="absolute bottom-10 right-1/4 w-36 h-20 opacity-35" viewBox="0 0 200 120" fill="white">
                <path d="M170 90c16.6 0 30-13.4 30-30s-13.4-30-30-30c-2 0-4 .2-5.9.6C158.5 12.5 140.4 0 120 0c-26.5 0-48 21.5-48 48 0 1.4.1 2.7.2 4C49.5 54.5 32 73.5 32 96c0 13.3 10.7 24 24 24h114c16.6 0 30-13.4 30-30z" />
            </svg>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col gap-6" data-aos="fade-right">
                        {/* Subtitle */}
                        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Dịch vụ chuyên nghiệp</span>

                        {/* Main Heading */}
                        <div className="flex flex-col gap-5">
                            <h1 className="text-primary text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight tracking-tight uppercase">
                                Tăng tốc & Tối ưu
                            </h1>
                            <h2 className="text-primary-dark text-2xl md:text-3xl lg:text-[2rem] font-bold leading-tight">
                                Website toàn diện
                            </h2>

                            <p className="text-gray-700 text-base leading-relaxed max-w-lg">
                                Website cũ kỹ, vận hành chậm chạp làm mất khách hàng?
                                Đừng để đối thủ vượt mặt. Chúng tôi <span className="text-primary font-semibold">"tái sinh"</span> website của bạn:
                                Làm mới giao diện, tăng tốc độ tải và tối ưu tỷ lệ chuyển đổi.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group relative px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm flex items-center justify-center gap-2"
                            >
                                Nhận tư vấn miễn phí
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                            <Link
                                href="#services"
                                className="px-8 py-4 bg-white border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-sm text-center"
                            >
                                Xem báo giá
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex items-center gap-6 pt-2">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center text-primary text-xs">👤</div>
                                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center text-primary text-xs">👤</div>
                                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center text-primary text-xs">👤</div>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    <span className="font-bold text-primary">500+</span> Website đã nâng cấp
                                </p>
                            </div>
                            <div className="text-gray-700 text-sm">
                                <span className="font-bold text-primary">98%</span> Khách hàng hài lòng
                            </div>
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className="flex justify-center lg:justify-end" data-aos="fade-left">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-xl"></div>
                            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                                <Image
                                    src="/images/nemark-speed-optimization.png"
                                    alt="Tăng tốc và bảo mật website"
                                    width={450}
                                    height={450}
                                    className="w-full max-w-[380px] h-auto object-contain drop-shadow-2xl"
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
