'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

interface AppItem {
    name: string
    category: string
    image: string
    description: string
    features: string[]
    highlights: { label: string; value: string }[]
}

export default function TopAppsShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(true)
    const [selectedApp, setSelectedApp] = useState<AppItem | null>(null)

    const apps: AppItem[] = [
        {
            name: 'App Đặt Đồ Ăn',
            category: 'Nhà hàng - Cafe F&B',
            image: '/apps/app-food-delivery.png',
            description: 'Ứng dụng đặt đồ ăn trực tuyến với giao diện trực quan, tích hợp thanh toán đa kênh và hệ thống quản lý đơn hàng real-time cho nhà hàng, quán cafe.',
            features: ['Đặt món & thanh toán online', 'Theo dõi đơn hàng real-time', 'Quản lý menu & khuyến mãi', 'Tích hợp giao hàng & đánh giá'],
            highlights: [{ label: 'Thời gian', value: '4-6 tuần' }, { label: 'Nền tảng', value: 'iOS & Android' }, { label: 'Tích hợp', value: 'Momo, VNPay' }]
        },
        {
            name: 'App Sức Khỏe',
            category: 'Y tế & Sức khỏe',
            image: '/apps/app-health-wellness.png',
            description: 'Ứng dụng chăm sóc sức khỏe toàn diện hỗ trợ đặt lịch khám, theo dõi chỉ số sức khỏe, tư vấn trực tuyến và quản lý hồ sơ bệnh án điện tử.',
            features: ['Đặt lịch khám online', 'Theo dõi chỉ số sức khỏe', 'Tư vấn bác sĩ trực tuyến', 'Hồ sơ bệnh án điện tử'],
            highlights: [{ label: 'Thời gian', value: '6-8 tuần' }, { label: 'Nền tảng', value: 'iOS & Android' }, { label: 'Bảo mật', value: 'HIPAA' }]
        },
        {
            name: 'App Ngân Hàng',
            category: 'Tài chính & Ngân hàng',
            image: '/apps/app-banking-finance.png',
            description: 'Ứng dụng ngân hàng số với bảo mật cao, tích hợp chuyển khoản, quản lý tài chính cá nhân, thanh toán hóa đơn và đầu tư thông minh.',
            features: ['Chuyển khoản & thanh toán', 'Quản lý tài chính cá nhân', 'Xác thực sinh trắc học', 'Thông báo giao dịch tức thì'],
            highlights: [{ label: 'Thời gian', value: '8-12 tuần' }, { label: 'Nền tảng', value: 'iOS & Android' }, { label: 'Bảo mật', value: 'PCI-DSS' }]
        },
        {
            name: 'App Đặt Xe',
            category: 'Đặt xe & Giao hàng',
            image: '/apps/app-ride-hailing.png',
            description: 'Ứng dụng gọi xe và giao hàng nhanh với hệ thống GPS tracking, tính giá tự động, đánh giá tài xế và quản lý đội xe thông minh.',
            features: ['GPS tracking real-time', 'Tính giá tự động', 'Đánh giá & xếp hạng', 'Quản lý đội xe'],
            highlights: [{ label: 'Thời gian', value: '6-10 tuần' }, { label: 'Nền tảng', value: 'iOS & Android' }, { label: 'Tích hợp', value: 'Google Maps' }]
        },
        {
            name: 'App Mua Sắm',
            category: 'Thương mại điện tử',
            image: '/apps/app-ecommerce.png',
            description: 'Ứng dụng thương mại điện tử đầy đủ tính năng với giỏ hàng thông minh, thanh toán đa kênh, quản lý kho hàng và chương trình khuyến mãi.',
            features: ['Giỏ hàng & wishlist', 'Thanh toán đa kênh', 'Tìm kiếm & lọc sản phẩm', 'Push notification khuyến mãi'],
            highlights: [{ label: 'Thời gian', value: '4-8 tuần' }, { label: 'Nền tảng', value: 'iOS & Android' }, { label: 'Tích hợp', value: 'COD, Ví điện tử' }]
        },
        {
            name: 'App Du Lịch',
            category: 'Du lịch & Khách sạn',
            image: '/apps/app-travel-booking.png',
            description: 'Ứng dụng đặt tour và khách sạn với giao diện bắt mắt, review từ khách hàng, lịch trình du lịch cá nhân hóa và thanh toán an toàn.',
            features: ['Đặt tour & khách sạn', 'Review & đánh giá', 'Lịch trình cá nhân hóa', 'Bản đồ & hướng dẫn'],
            highlights: [{ label: 'Thời gian', value: '5-8 tuần' }, { label: 'Nền tảng', value: 'iOS & Android' }, { label: 'Tích hợp', value: 'Booking API' }]
        }
    ]

    const itemsPerView = 5
    const totalSlides = apps.length

    // Create infinite loop by duplicating ALL items on both sides
    const extendedApps = [...apps, ...apps, ...apps]

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => prev + 1)
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => prev - 1)
    }, [])

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(totalSlides + index)
    }, [totalSlides])

    // Handle infinite loop reset
    useEffect(() => {
        if (currentIndex >= totalSlides * 2) {
            setTimeout(() => {
                setIsTransitioning(false)
                setCurrentIndex(totalSlides)
            }, 500)
            setTimeout(() => {
                setIsTransitioning(true)
            }, 550)
        } else if (currentIndex < 0) {
            setTimeout(() => {
                setIsTransitioning(false)
                setCurrentIndex(totalSlides - 1)
            }, 500)
            setTimeout(() => {
                setIsTransitioning(true)
            }, 550)
        }
    }, [currentIndex, totalSlides])

    // Initialize at middle set
    useEffect(() => {
        setCurrentIndex(totalSlides)
    }, [totalSlides])

    // Auto-play carousel (pause when modal is open)
    useEffect(() => {
        if (selectedApp) return
        const interval = setInterval(() => {
            nextSlide()
        }, 3000)
        return () => clearInterval(interval)
    }, [nextSlide, selectedApp])

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedApp(null)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedApp) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [selectedApp])

    // Calculate active dot index
    const activeDotIndex = ((currentIndex % totalSlides) + totalSlides) % totalSlides

    // Find the actual app from extended array (map back to original)
    const getOriginalApp = (index: number): AppItem => {
        return apps[index % apps.length]
    }

    return (
        <>
            <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-2">
                            <span className="text-primary">TOP MẪU APP</span>{' '}
                            <span className="text-black">CHUYÊN NGHIỆP</span>
                        </h2>
                    </div>

                    {/* Apps Carousel Container */}
                    <div className="relative mb-12" data-aos="fade-up" data-aos-delay="100">
                        {/* Left Arrow */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-black hover:bg-slate-50 hover:text-primary transition-all -ml-6"
                            aria-label="Previous slide"
                        >
                            <span className="material-icons">chevron_left</span>
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-black hover:bg-slate-50 hover:text-primary transition-all -mr-6"
                            aria-label="Next slide"
                        >
                            <span className="material-icons">chevron_right</span>
                        </button>

                        {/* Carousel Wrapper */}
                        <div className="overflow-hidden px-4">
                            <div
                                className="flex"
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                                    transition: isTransitioning ? 'transform 500ms ease-out' : 'none'
                                }}
                            >
                                {extendedApps.map((app, index) => (
                                    <div
                                        key={`${app.name}-${index}`}
                                        className="flex-shrink-0 px-2"
                                        style={{ width: `${100 / itemsPerView}%` }}
                                    >
                                        <div
                                            className="flex flex-col items-center cursor-pointer group"
                                            onClick={() => setSelectedApp(getOriginalApp(index))}
                                        >
                                            {/* Phone Mockup */}
                                            <div className="relative mb-4 transform group-hover:scale-105 transition-all duration-300">
                                                <img
                                                    src={app.image}
                                                    alt={app.name}
                                                    className="w-full h-auto rounded-[2rem]"
                                                />
                                                {/* Hover overlay */}
                                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-[2rem] transition-all duration-300 flex items-center justify-center">
                                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-1.5">
                                                        <span className="material-icons-outlined text-primary text-sm">visibility</span>
                                                        <span className="text-xs font-semibold text-primary">Xem chi tiết</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* App Info */}
                                            <div className="text-center">
                                                <h3 className="text-base font-bold text-primary mb-1 group-hover:underline">
                                                    {app.name}
                                                </h3>
                                                <p className="text-sm text-black">
                                                    {app.category}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center items-center gap-2 mt-8">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2 rounded-full transition-all ${index === activeDotIndex
                                        ? 'w-8 bg-primary'
                                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all"
                        >
                            <span>Top 1000 mẫu app tiêu biểu</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Detail Modal */}
            {selectedApp && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                    onClick={() => setSelectedApp(null)}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn" />

                    {/* Modal Content */}
                    <div
                        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedApp(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-100 hover:bg-red-50 flex items-center justify-center text-slate-500 hover:text-red-500 transition-all"
                            aria-label="Đóng"
                        >
                            <span className="material-icons">close</span>
                        </button>

                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Left - Image */}
                            <div className="bg-gradient-to-br from-primary/5 to-cyan-50 p-8 flex items-center justify-center rounded-l-2xl">
                                <img
                                    src={selectedApp.image}
                                    alt={selectedApp.name}
                                    className="w-full max-w-[280px] h-auto rounded-[2rem] shadow-xl"
                                />
                            </div>

                            {/* Right - Details */}
                            <div className="p-8">
                                {/* Category Badge */}
                                <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                                    <span className="material-icons-outlined text-sm">category</span>
                                    {selectedApp.category}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-heading font-bold text-slate-800 mb-3">
                                    {selectedApp.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                    {selectedApp.description}
                                </p>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                                        <span className="material-icons-outlined text-primary text-lg">checklist</span>
                                        Tính năng nổi bật
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedApp.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                <span className="material-icons text-green-500 text-base mt-0.5 flex-shrink-0">check_circle</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Highlights */}
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    {selectedApp.highlights.map((h, i) => (
                                        <div key={i} className="bg-slate-50 rounded-xl p-3 text-center">
                                            <p className="text-xs text-slate-500 mb-1">{h.label}</p>
                                            <p className="text-sm font-bold text-primary">{h.value}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="flex gap-3">
                                    <Link
                                        href="#contact"
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all text-sm shadow-lg shadow-primary/25"
                                        onClick={() => setSelectedApp(null)}
                                    >
                                        <span className="material-icons-outlined text-lg">phone_in_talk</span>
                                        Tư vấn ngay
                                    </Link>
                                    <button
                                        onClick={() => setSelectedApp(null)}
                                        className="px-5 py-3 border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition-all text-sm"
                                    >
                                        Đóng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.95) translateY(10px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out forwards;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out forwards;
                }
            `}</style>
        </>
    )
}
