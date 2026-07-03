'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

export default function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <section data-hero className="relative overflow-hidden min-h-[66vh] flex items-center pt-20">
            {/* Cloud background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/cloud-bg.png')" }}
            ></div>

            {/* Blue overlay */}
            <div className="absolute inset-0 bg-primary/15"></div>

            {/* Animated floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-primary/30 rounded-full animate-float-particle" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-[25%] left-[70%] w-3 h-3 bg-primary/20 rounded-full animate-float-particle" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-[60%] left-[20%] w-2 h-2 bg-primary/25 rounded-full animate-float-particle" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-[45%] left-[85%] w-2.5 h-2.5 bg-primary/20 rounded-full animate-float-particle" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-[70%] left-[55%] w-1.5 h-1.5 bg-primary/30 rounded-full animate-float-particle" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-[35%] left-[40%] w-2 h-2 bg-primary/15 rounded-full animate-float-particle" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Decorative cloud shapes - now animated floating */}
            <svg className="absolute top-10 left-5 w-40 h-24 opacity-40 animate-cloud-drift" viewBox="0 0 200 120" fill="white">
                <path d="M170 90c16.6 0 30-13.4 30-30s-13.4-30-30-30c-2 0-4 .2-5.9.6C158.5 12.5 140.4 0 120 0c-26.5 0-48 21.5-48 48 0 1.4.1 2.7.2 4C49.5 54.5 32 73.5 32 96c0 13.3 10.7 24 24 24h114c16.6 0 30-13.4 30-30z" />
            </svg>

            <svg className="absolute top-20 right-10 w-56 h-32 opacity-30 animate-cloud-drift-reverse" viewBox="0 0 200 120" fill="white">
                <path d="M170 90c16.6 0 30-13.4 30-30s-13.4-30-30-30c-2 0-4 .2-5.9.6C158.5 12.5 140.4 0 120 0c-26.5 0-48 21.5-48 48 0 1.4.1 2.7.2 4C49.5 54.5 32 73.5 32 96c0 13.3 10.7 24 24 24h114c16.6 0 30-13.4 30-30z" />
            </svg>

            <svg className="absolute bottom-20 left-1/4 w-48 h-28 opacity-25 animate-cloud-drift" style={{ animationDelay: '3s' }} viewBox="0 0 200 120" fill="white">
                <path d="M170 90c16.6 0 30-13.4 30-30s-13.4-30-30-30c-2 0-4 .2-5.9.6C158.5 12.5 140.4 0 120 0c-26.5 0-48 21.5-48 48 0 1.4.1 2.7.2 4C49.5 54.5 32 73.5 32 96c0 13.3 10.7 24 24 24h114c16.6 0 30-13.4 30-30z" />
            </svg>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6" data-aos="fade-right" data-aos-duration="1000">
                        <span className="text-primary text-sm font-semibold uppercase tracking-wider" data-aos="fade-right" data-aos-delay="100">Dịch vụ chuyên nghiệp</span>

                        <div className="flex flex-col gap-5">
                            <h1 className="text-primary text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight tracking-tight uppercase" data-aos="fade-right" data-aos-delay="200">
                                Quản Lý & Vận Hành
                            </h1>
                            <h2 className="text-primary-dark text-2xl md:text-3xl lg:text-[2rem] font-bold leading-tight" data-aos="fade-right" data-aos-delay="300">
                                Hạ Tầng CNTT Toàn Diện
                            </h2>

                            <p className="text-gray-700 text-base leading-relaxed max-w-lg" data-aos="fade-up" data-aos-delay="400">
                                Hạ tầng CNTT của bạn đang gặp sự cố liên tục, hiệu suất kém?
                                Đừng để hệ thống trở thành rào cản kinh doanh. Chúng tôi <span className="text-primary font-semibold">quản lý & vận hành</span> hạ tầng của bạn:
                                Giám sát 24/7, xử lý sự cố nhanh chóng và tối ưu hiệu suất.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="500">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group relative px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm flex items-center justify-center gap-2 overflow-hidden"
                            >
                                <span className="relative z-10">Nhận tư vấn miễn phí</span>
                                <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            </button>
                            <Link
                                href="#services"
                                className="px-8 py-4 bg-white border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-sm text-center hover:scale-105 hover:shadow-lg"
                            >
                                Xem báo giá
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex items-center gap-6 pt-2" data-aos="fade-up" data-aos-delay="600">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center text-primary text-xs">👤</div>
                                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center text-primary text-xs">👤</div>
                                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center text-primary text-xs">👤</div>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    <span className="font-bold text-primary">200+</span> Doanh nghiệp tin tưởng
                                </p>
                            </div>
                            <div className="text-gray-700 text-sm">
                                <span className="font-bold text-primary">99.9%</span> Uptime cam kết
                            </div>
                        </div>
                    </div>

                    {/* Right - Icon Illustration */}
                    <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="300">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-xl"></div>
                            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div className="w-[350px] h-[350px] flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                        {/* Animated orbit rings */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-primary/15 rounded-full animate-spin-slow"></div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-primary/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>

                                        {/* Pulsing ring behind central icon */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-primary/10 rounded-2xl animate-pulse"></div>

                                        {/* Central server icon */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-2xl animate-float-gentle">
                                            <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                            </svg>
                                        </div>
                                        {/* Orbiting elements with float animation */}
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center border border-primary/20 animate-float-gentle" style={{ animationDelay: '0s' }}>
                                            <span className="text-2xl">☁️</span>
                                        </div>
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center border border-primary/20 animate-float-gentle" style={{ animationDelay: '0.5s' }}>
                                            <span className="text-2xl">📊</span>
                                        </div>
                                        <div className="absolute top-1/2 left-4 -translate-y-1/2 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center border border-primary/20 animate-float-gentle" style={{ animationDelay: '1s' }}>
                                            <span className="text-2xl">🔧</span>
                                        </div>
                                        <div className="absolute top-1/2 right-4 -translate-y-1/2 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center border border-primary/20 animate-float-gentle" style={{ animationDelay: '1.5s' }}>
                                            <span className="text-2xl">⚡</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white" />
                </svg>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Scoped animations */}
            <style jsx>{`
                @keyframes float-particle {
                    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
                    25% { transform: translateY(-20px) translateX(10px); opacity: 0.7; }
                    50% { transform: translateY(-10px) translateX(-5px); opacity: 0.5; }
                    75% { transform: translateY(-30px) translateX(15px); opacity: 0.8; }
                }
                .animate-float-particle {
                    animation: float-particle 6s ease-in-out infinite;
                }
                @keyframes cloud-drift {
                    0%, 100% { transform: translateX(0px) translateY(0px); }
                    50% { transform: translateX(30px) translateY(-8px); }
                }
                .animate-cloud-drift {
                    animation: cloud-drift 12s ease-in-out infinite;
                }
                @keyframes cloud-drift-reverse {
                    0%, 100% { transform: translateX(0px) translateY(0px); }
                    50% { transform: translateX(-25px) translateY(-6px); }
                }
                .animate-cloud-drift-reverse {
                    animation: cloud-drift-reverse 15s ease-in-out infinite;
                }
                @keyframes spin-slow {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 30s linear infinite;
                }
                @keyframes float-gentle {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                .animate-float-gentle {
                    animation: float-gentle 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}
