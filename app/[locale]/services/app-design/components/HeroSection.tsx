'use client'

import { useState, useEffect, useRef, TouchEvent, MouseEvent } from 'react'
import Link from 'next/link'

interface HeroSectionProps {
    onOpenContactModal: () => void
}

// Testimonial data - More testimonials
const testimonials = [
    {
        id: 1,
        name: 'Chị Vy',
        role: 'Chủ cửa hàng trang sức',
        avatar: '/images/avatars/avatar-chi-vy.png',
        content: '🌿✨ Nemark thiết kế app mobile vừa tinh tế vừa dễ dùng, đúng chất thương hiệu trang sức cao cấp. Hỗ trợ nhanh, đáp ứng đúng nhu cầu của chúng tôi.⭐',
        rating: 5
    },
    {
        id: 2,
        name: 'Anh Giang',
        role: 'Chủ shop thời trang nam',
        avatar: '/images/avatars/avatar-anh-giang.png',
        content: '🌿✨ Thiết kế app của Nemark rất hiện đại, chuẩn phong cách thời trang. Giao diện mượt, dễ thao tác, đúng nhu cầu kinh doanh của tôi.⭐',
        rating: 5
    },
    {
        id: 3,
        name: 'Chị Hương',
        role: 'Giám đốc công ty F&B',
        avatar: '/images/avatars/avatar-chi-huong.png',
        content: '🌿✨ App đặt hàng do Nemark thiết kế giúp tăng 40% đơn online. Khách hàng feedback rất tích cực về trải nghiệm đặt món.⭐',
        rating: 5
    },
    {
        id: 4,
        name: 'Anh Tuấn',
        role: 'CEO Startup Fintech',
        avatar: '/images/avatars/avatar-anh-tuan.png',
        content: '🚀 Đội ngũ Nemark rất chuyên nghiệp, hiểu rõ yêu cầu về bảo mật và tích hợp thanh toán. App ví điện tử của chúng tôi hoạt động ổn định 24/7.⭐',
        rating: 5
    },
    {
        id: 5,
        name: 'Chị Linh',
        role: 'Founder Thương mại điện tử',
        avatar: '/images/avatars/avatar-chi-linh.png',
        content: '💎 Từ ý tưởng đến sản phẩm chỉ 3 tuần. Nemark giúp tôi có app bán hàng đẹp, load nhanh và đồng bộ hoàn hảo với website.⭐',
        rating: 5
    },
    {
        id: 6,
        name: 'Anh Minh',
        role: 'Quản lý chuỗi Gym',
        avatar: '/images/avatars/avatar-anh-minh.png',
        content: '💪 App quản lý hội viên và đặt lịch tập hoạt động mượt mà. Hội viên đánh giá cao tính năng tracking và notification nhắc tập.⭐',
        rating: 5
    },
    {
        id: 7,
        name: 'Chị Mai',
        role: 'Owner Spa & Beauty',
        avatar: '/images/avatars/avatar-chi-mai.png',
        content: '✨ Giao diện sang trọng đúng chất spa cao cấp. Tính năng đặt lịch online giúp giảm 60% cuộc gọi đặt hẹn. Rất hài lòng!⭐',
        rating: 5
    },
    {
        id: 8,
        name: 'Anh Đức',
        role: 'Giám đốc Logistics',
        avatar: '/images/avatars/avatar-anh-duc.png',
        content: '📦 App tracking đơn hàng real-time giúp khách hàng theo dõi dễ dàng. Tích hợp GPS và notification push rất chính xác.⭐',
        rating: 5
    }
]

const floatingIcons = [
    { icon: 'palette', text: 'UI', position: 'top-12 -left-8', color: 'bg-primary', delay: '0s' },
    { icon: 'brush', text: 'UX', position: 'top-24 right-8', color: 'bg-orange-500', delay: '0.2s' },
    { icon: 'play_circle', text: '', position: 'top-1/3 -left-12', color: 'bg-red-500', delay: '0.4s' },
    { icon: 'link', text: '', position: 'top-1/2 -right-8', color: 'bg-cyan-500', delay: '0.6s' },
    { icon: 'code', text: '', position: 'bottom-32 left-4', color: 'bg-green-500', delay: '0.8s' },
    { icon: 'touch_app', text: '', position: 'bottom-24 -right-12', color: 'bg-purple-500', delay: '1s' },
    { icon: 'smartphone', text: '', position: 'bottom-40 right-0', color: 'bg-pink-500', delay: '1.2s' },
]

export default function HeroSection({ onOpenContactModal }: HeroSectionProps) {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [translateX, setTranslateX] = useState(0)
    const sliderRef = useRef<HTMLDivElement>(null)

    // Auto-slide testimonials
    useEffect(() => {
        if (isDragging) return

        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [isDragging])

    // Handle touch/mouse start
    const handleDragStart = (clientX: number) => {
        setIsDragging(true)
        setStartX(clientX)
        setTranslateX(0)
    }

    // Handle touch/mouse move
    const handleDragMove = (clientX: number) => {
        if (!isDragging) return
        const diff = clientX - startX
        setTranslateX(diff)
    }

    // Handle touch/mouse end
    const handleDragEnd = () => {
        if (!isDragging) return
        setIsDragging(false)

        const threshold = 50 // minimum distance to trigger slide change

        if (translateX > threshold) {
            // Swiped right - go to previous
            setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        } else if (translateX < -threshold) {
            // Swiped left - go to next
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }

        setTranslateX(0)
    }

    // Touch handlers
    const handleTouchStart = (e: TouchEvent) => handleDragStart(e.touches[0].clientX)
    const handleTouchMove = (e: TouchEvent) => handleDragMove(e.touches[0].clientX)
    const handleTouchEnd = () => handleDragEnd()

    // Mouse handlers
    const handleMouseDown = (e: MouseEvent) => handleDragStart(e.clientX)
    const handleMouseMove = (e: MouseEvent) => handleDragMove(e.clientX)
    const handleMouseUp = () => handleDragEnd()
    const handleMouseLeave = () => {
        if (isDragging) handleDragEnd()
    }

    const goToSlide = (index: number) => {
        setCurrentTestimonial(index)
    }

    const nextSlide = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="relative h-screen pt-20 overflow-hidden" data-hero>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/2324562/pexels-photo-2324562.jpeg')`
                }}
            />

            {/* Gradient Overlay - Left to Right */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/70 via-slate-800/50 to-slate-800/20" />

            {/* Additional dark overlay for better text readability */}
            <div className="absolute inset-0 bg-slate-800/15" />

            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

            {/* Gradient Orbs for depth */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left" data-aos="fade-right">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 mb-6">
                            <span className="material-icons-outlined text-lg">smartphone</span>
                            <span>Mobile App Development</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                            DỊCH VỤ THIẾT KẾ
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                                App - Trọn gói & Đa nền tảng
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                            Giải pháp thiết kế ứng dụng di động chuyên nghiệp, tối ưu trải nghiệm người dùng và tích hợp đầy đủ tính năng cho doanh nghiệp của bạn.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={onOpenContactModal}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/30"
                            >
                                <span className="material-icons-outlined">phone_in_talk</span>
                                <span>Tư vấn ngay</span>
                            </button>
                            <Link
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all"
                            >
                                <span className="material-icons-outlined">visibility</span>
                                <span>Tham khảo mẫu</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right - Phone Mockup with Testimonial Slider */}
                    <div className="relative flex justify-center items-center" data-aos="fade-left">
                        {/* Floating Icons - Behind testimonial */}
                        {floatingIcons.map((item, index) => (
                            <div
                                key={index}
                                className={`absolute z-10 ${item.position} animate-float hidden md:block`}
                                style={{ animationDelay: item.delay }}
                            >
                                <div className={`${item.color} text-white rounded-2xl p-3 shadow-2xl backdrop-blur-sm border-2 border-white/30 flex items-center gap-2`}>
                                    <span className="material-icons-outlined text-2xl">{item.icon}</span>
                                    {item.text && <span className="font-bold text-lg">{item.text}</span>}
                                </div>
                            </div>
                        ))}

                        {/* Central Phone Mockup - With floating animation */}
                        <div className="relative z-20 animate-phone-float">
                            <img
                                src="/images/app-mockup.png"
                                alt="Nemark App Mockup"
                                className="w-[280px] md:w-[320px] lg:w-[380px] h-auto drop-shadow-2xl rounded-[2.5rem]"
                            />
                        </div>

                        {/* Testimonial Slider Card - Compact & Smooth */}
                        <div
                            ref={sliderRef}
                            className="absolute -left-4 lg:-left-12 bottom-8 lg:bottom-16 z-30 w-[260px] md:w-[300px] select-none"
                        >
                            {/* Swipe instruction - Hidden */}
                            {/* <div className="flex items-center justify-center gap-1.5 mb-2 text-white/50 text-[10px]">
                                <span className="material-icons-outlined text-xs">swipe</span>
                                <span>Vuốt để xem thêm đánh giá</span>
                            </div> */}

                            {/* Slider Container */}
                            <div
                                className="relative overflow-hidden cursor-grab active:cursor-grabbing"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div
                                    className="flex transition-transform ease-out"
                                    style={{
                                        transform: `translateX(calc(-${currentTestimonial * 100}% + ${translateX}px))`,
                                        transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                                    }}
                                >
                                    {testimonials.map((testimonial) => (
                                        <div
                                            key={testimonial.id}
                                            className="w-full flex-shrink-0 px-0.5"
                                        >
                                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3.5 shadow-xl border border-primary/15 transition-shadow duration-300 hover:shadow-2xl">
                                                {/* User Info */}
                                                <div className="flex items-center gap-2.5 mb-2">
                                                    <img
                                                        src={testimonial.avatar}
                                                        alt={testimonial.name}
                                                        className="w-10 h-10 rounded-full object-cover border-2 border-primary/60 shadow-md"
                                                        draggable={false}
                                                    />
                                                    <div>
                                                        <h4 className="font-semibold text-slate-800 text-sm leading-tight">{testimonial.name}</h4>
                                                        <p className="text-xs text-primary/80 font-medium">{testimonial.role}</p>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <p className="text-xs text-black leading-relaxed mb-2.5 line-clamp-3">
                                                    {testimonial.content}
                                                </p>

                                                {/* Star Rating */}
                                                <div className="flex gap-0.5">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <span key={i} className="text-amber-400 text-sm">★</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Arrows - Hidden */}
                            {/* <div className="flex items-center justify-between mt-3">
                                <button
                                    onClick={prevSlide}
                                    className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-all duration-200"
                                >
                                    <span className="material-icons-outlined text-lg">chevron_left</span>
                                </button>

                                <div className="flex gap-1 overflow-x-auto max-w-[140px] py-1 px-1">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`h-1.5 rounded-full transition-all duration-300 flex-shrink-0 ${index === currentTestimonial
                                                ? 'w-4 bg-primary'
                                                : 'w-1.5 bg-white/30 hover:bg-white/50'
                                                }`}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextSlide}
                                    className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-all duration-200"
                                >
                                    <span className="material-icons-outlined text-lg">chevron_right</span>
                                </button>
                            </div> */}

                            {/* Counter - Hidden */}
                            {/* <div className="text-center mt-1.5 text-white/50 text-[10px] font-medium">
                                {currentTestimonial + 1} / {testimonials.length}
                            </div> */}
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 w-[400px] h-[400px] border border-primary/20 rounded-full animate-spin-slow" />
                        <div className="absolute -z-10 w-[500px] h-[500px] border border-cyan-500/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                    </div>
                </div>
            </div>

            {/* Custom Animation Styles */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes phone-float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    25% { transform: translateY(-15px) rotate(1deg); }
                    50% { transform: translateY(-5px) rotate(0deg); }
                    75% { transform: translateY(-20px) rotate(-1deg); }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-phone-float {
                    animation: phone-float 6s ease-in-out infinite;
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </section>
    )
}
