'use client'

import Image from 'next/image'

interface HeroSectionProps {
    onOpenContactModal: () => void
}

export default function HeroSection({ onOpenContactModal }: HeroSectionProps) {
    return (
        <section
            data-hero
            className="relative overflow-hidden min-h-[85vh] flex items-center pt-20"
            style={{ background: 'linear-gradient(135deg, #4988C4 0%, #4988C4 50%, #BDE8F5 100%)' }}
        >
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5"></div>
                <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>

                {/* Animated dots pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute top-40 right-40 w-2 h-2 bg-white rounded-full animate-pulse delay-100"></div>
                    <div className="absolute bottom-40 left-40 w-2 h-2 bg-white rounded-full animate-pulse delay-200"></div>
                    <div className="absolute top-60 right-60 w-3 h-3 bg-white rounded-full animate-pulse delay-300"></div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col gap-6" data-aos="fade-right">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                            <span className="text-white/90 text-sm font-medium">Giải pháp cho Startup</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                            Giải Pháp Công Nghệ Dành Cho{' '}
                            <span className="text-accent block mt-2">Startup Tăng Tốc</span>
                        </h1>

                        {/* Animated line */}
                        <div className="flex items-center gap-2">
                            <div className="h-0.5 w-16 bg-accent"></div>
                            <span className="text-white/70 text-sm italic">
                                Đồng hành từ MVP đến mở rộng sản phẩm
                            </span>
                            <div className="h-0.5 flex-1 bg-white/20 max-w-[100px]"></div>
                        </div>

                        {/* Description */}
                        <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                            Nemark cung cấp hệ sinh thái công nghệ trọn gói giúp Startup{' '}
                            <span className="font-semibold text-accent">ra mắt nhanh, chi phí thấp</span>{' '}
                            và sẵn sàng mở rộng quy mô theo tốc độ tăng trưởng.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mt-2">
                            <button
                                onClick={onOpenContactModal}
                                className="group px-8 py-4 bg-accent hover:bg-accent-dark text-primary font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wider text-sm flex items-center justify-center gap-2"
                            >
                                <span className="material-icons-outlined text-xl">rocket_launch</span>
                                Tư Vấn Cho Startup
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                            <button
                                onClick={onOpenContactModal}
                                className="px-8 py-4 bg-transparent border-2 border-white/50 hover:border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 uppercase tracking-wider text-sm flex items-center justify-center gap-2"
                            >
                                <span className="material-icons-outlined text-xl">edit_note</span>
                                Đăng Ký Ngay
                            </button>
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl"></div>

                            {/* Image container */}
                            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                                <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]">
                                    <Image
                                        src="/banner/startup-hero-clean.png"
                                        alt="Startup Solutions"
                                        fill
                                        className="object-cover rounded-2xl"
                                        priority
                                    />

                                    {/* Floating badges */}
                                    <div className="absolute -top-4 -right-4 bg-accent text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-float">
                                        MVP Ready
                                    </div>
                                    <div className="absolute -bottom-4 -left-4 bg-white text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                                        Scale Fast
                                    </div>
                                </div>
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
        </section>
    )
}
