'use client'

import { useState } from 'react'
import Link from 'next/link'
import ContactModal from '@/components/common/modal/ContactModal'

interface HeroSectionProps {
    onOpenContactModal: () => void
}

export default function HeroSection({ onOpenContactModal }: HeroSectionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <section data-hero className="relative overflow-hidden min-h-[80vh] lg:min-h-[85vh] flex items-center pt-20" style={{ background: 'linear-gradient(180deg, #BDE8F5 0%, #d4eff9 50%, #e8f6fc 100%)' }}>
            {/* Decorative curved lines - darker blue */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-100 120 Q 300 40, 600 180 T 1200 120 T 1600 220" stroke="#1C4D8D" strokeWidth="2" fill="none" opacity="0.4" />
                    <path d="M-100 180 Q 400 80, 700 240 T 1300 180 T 1700 280" stroke="#4988C4" strokeWidth="1.5" fill="none" opacity="0.35" />
                    <path d="M-100 240 Q 350 140, 650 300 T 1250 240 T 1650 340" stroke="#1C4D8D" strokeWidth="2" fill="none" opacity="0.3" />
                    <path d="M-100 300 Q 450 200, 750 360 T 1350 300 T 1750 400" stroke="#4988C4" strokeWidth="1.5" fill="none" opacity="0.25" />
                    <path d="M-50 80 Q 200 20, 500 100 T 1000 60 T 1500 120" stroke="#1C4D8D" strokeWidth="1" fill="none" opacity="0.2" />
                </svg>

                {/* Decorative circles */}
                <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full blur-3xl" style={{ background: 'rgba(73,136,196,0.1)' }}></div>
                <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full blur-2xl" style={{ background: 'rgba(28,77,141,0.08)' }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 w-full z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col gap-6 text-center lg:text-left">
                        {/* Subtitle */}
                        <p className="font-semibold text-lg tracking-wide" style={{ color: '#4988C4' }}>
                            DỊCH VỤ CHUYÊN NGHIỆP
                        </p>

                        {/* Main Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                            <span className="whitespace-nowrap" style={{ color: '#4988C4' }}>NÂNG CẤP & TỐI ƯU</span>
                            <br />
                            <span className="text-2xl md:text-3xl lg:text-4xl" style={{ color: '#1C4D8D' }}>WEBSITE TOÀN DIỆN</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#334155' }}>
                            Website cũ kỹ, vận hành chậm chạp làm mất khách hàng?
                            Đừng để đối thủ vượt mặt. Chúng tôi <strong style={{ color: '#4988C4' }}>"tái sinh"</strong> website của bạn:
                            Làm mới giao diện, tăng tốc độ tải và tối ưu tỷ lệ chuyển đổi.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group px-8 py-4 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm flex items-center justify-center gap-2"
                                style={{ background: '#4988C4', color: 'white' }}
                            >
                                Nhận tư vấn miễn phí
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                            <Link
                                href="#pricing"
                                className="px-8 py-4 bg-white font-bold rounded-full transition-all duration-300 text-sm hover:scale-105 text-center"
                                style={{ border: '2px solid #4988C4', color: '#4988C4' }}
                            >
                                Xem báo giá
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap items-center gap-6 pt-2 justify-center lg:justify-start">
                            <div className="flex -space-x-2">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs relative z-30" style={{ background: '#4988C4', color: 'white' }}>👤</div>
                                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs relative z-20" style={{ background: '#4988C4', color: 'white' }}>👤</div>
                                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs relative z-10" style={{ background: '#4988C4', color: 'white' }}>👤</div>
                            </div>
                            <div className="text-sm" style={{ color: '#475569' }}>
                                <span className="font-bold text-2xl" style={{ color: '#4988C4' }}>500+</span> Website đã nâng cấp
                            </div>
                            <div className="text-sm" style={{ color: '#475569' }}>
                                <span className="font-bold text-2xl" style={{ color: '#4988C4' }}>98%</span> Khách hàng hài lòng
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-2xl blur-xl" style={{ background: 'rgba(73,136,196,0.15)' }}></div>
                            <div className="relative rounded-2xl p-6 border shadow-xl bg-white" style={{ borderColor: 'rgba(73,136,196,0.2)' }}>
                                {/* Website Mockup Illustration */}
                                <div className="w-full max-w-[400px]">
                                    {/* Browser Bar */}
                                    <div className="flex items-center gap-2 pb-3 border-b" style={{ borderColor: 'rgba(73,136,196,0.15)' }}>
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="flex-1 h-6 rounded-full bg-gray-100 flex items-center px-3">
                                            <span className="text-[10px] text-gray-400">nemarkdigital.com</span>
                                        </div>
                                    </div>

                                    {/* Dashboard Content */}
                                    <div className="pt-4 space-y-4">
                                        {/* Stats Row */}
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="rounded-lg p-3 text-center" style={{ background: 'rgba(73,136,196,0.08)' }}>
                                                <p className="text-xs text-gray-500">Tốc độ</p>
                                                <p className="text-lg font-bold" style={{ color: '#4988C4' }}>98</p>
                                            </div>
                                            <div className="rounded-lg p-3 text-center" style={{ background: 'rgba(34,197,94,0.08)' }}>
                                                <p className="text-xs text-gray-500">SEO</p>
                                                <p className="text-lg font-bold text-green-600">95</p>
                                            </div>
                                            <div className="rounded-lg p-3 text-center" style={{ background: 'rgba(245,158,11,0.08)' }}>
                                                <p className="text-xs text-gray-500">UX</p>
                                                <p className="text-lg font-bold text-amber-600">92</p>
                                            </div>
                                        </div>

                                        {/* Chart Bars */}
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs text-gray-500 w-16">Trước</span>
                                                <div className="flex-1 h-5 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className="h-full rounded-full bg-gray-400" style={{ width: '35%' }}></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs text-gray-500 w-16">Sau</span>
                                                <div className="flex-1 h-5 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className="h-full rounded-full" style={{ width: '92%', background: 'linear-gradient(90deg, #4988C4, #1C4D8D)' }}></div>
                                                </div>
                                            </div>
                                        </div>

                                         {/* Nemark Logo Badge */}
                                         <div className="flex items-center justify-end gap-2 pt-2 pr-4">
                                             <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: '#4988C4' }}>
                                                 <span className="text-white text-xs font-bold">N</span>
                                             </div>
                                             <span className="text-sm font-semibold" style={{ color: '#1C4D8D' }}>Nemark Digital</span>
                                         </div>
                                    </div>
                                </div>

                                 {/* Floating stats card */}
                                 <div className="absolute -bottom-2 -left-10 md:-left-12 rounded-xl p-4 shadow-lg bg-white border" style={{ borderColor: 'rgba(73,136,196,0.15)' }}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(73,136,196,0.1)' }}>
                                            <svg className="w-5 h-5" style={{ color: '#4988C4' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Tốc độ tải</p>
                                            <p className="text-lg font-bold" style={{ color: '#4988C4' }}>3x nhanh hơn</p>
                                        </div>
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

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
