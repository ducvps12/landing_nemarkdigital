'use client'

import Image from 'next/image'
import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

export default function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const benefits = [
        'Tích hợp thanh toán online nhanh chóng, an toàn',
        'Kết nối API với hệ thống bên thứ ba, đồng bộ dữ liệu real-time',
        'Quản lý khách hàng tập trung qua CRM',
        'Tự động hóa quy trình bán hàng & chăm sóc khách hàng',
        'Sẵn sàng mở rộng hệ thống khi doanh nghiệp tăng trưởng'
    ]

    return (
        <section data-hero className="relative bg-primary overflow-hidden min-h-[66vh] flex items-center pt-20">
            {/* Background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light"></div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col gap-6" data-aos="fade-right">
                        {/* Main Heading */}
                        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight uppercase">
                            Dịch Vụ Tích Hợp Thanh Toán – API – CRM Cho Website & Hệ Thống Doanh Nghiệp
                        </h1>

                        {/* Subtitle */}
                        <div className="space-y-2">
                            <p className="text-yellow-300 text-lg md:text-xl font-bold uppercase tracking-wide">
                                Tự động hóa thông minh – Quản lý tập trung – Bán hàng hiệu quả hơn
                            </p>
                            <p className="text-white/80 text-base md:text-lg">
                                Tối ưu vận hành – Đồng bộ dữ liệu – Mở rộng hệ thống linh hoạt
                            </p>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-3">
                            <p className="text-white font-semibold">NEMARK giúp doanh nghiệp bạn:</p>
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="text-yellow-300 mt-1 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="text-white/90 text-sm md:text-base">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group px-8 py-4 bg-accent hover:bg-accent-dark text-primary font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wider text-sm flex items-center justify-center gap-2"
                            >
                                Nhận Tư Vấn Ngay
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className="flex justify-center lg:justify-end" data-aos="fade-left">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-xl"></div>
                            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Image
                                    src="/images/nemark-api-hero.png"
                                    alt="Tích hợp thanh toán API CRM"
                                    width={450}
                                    height={450}
                                    className="w-full max-w-[400px] h-auto object-contain drop-shadow-2xl"
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
