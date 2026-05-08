'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

interface Testimonial {
    name: string
    position: string
    company: string
    avatar: string
    rating: number
    content: string
}

export default function Feedback() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const isAnimatingRef = useRef(false)

    const testimonials: Testimonial[] = [
        {
            name: 'Nguyễn Văn An',
            position: 'CEO',
            company: 'Tech Startup ABC',
            avatar: 'https://ui-avatars.com/api/?name=Nguyen+Van+An&background=0ea5e9&color=fff&size=256',
            rating: 5,
            content: 'Nemark đã giúp chúng tôi xây dựng hệ thống quản lý nội bộ hoàn chỉnh. Đội ngũ chuyên nghiệp, tận tâm và luôn sẵn sàng hỗ trợ 24/7. Dự án được bàn giao đúng tiến độ với chất lượng vượt mong đợi.',
        },
        {
            name: 'Trần Thị Bình',
            position: 'Giám đốc Marketing',
            company: 'Fashion Brand XYZ',
            avatar: 'https://ui-avatars.com/api/?name=Tran+Thi+Binh&background=7c3aed&color=fff&size=256',
            rating: 5,
            content: 'Website thương mại điện tử do Nemark thiết kế đã giúp doanh thu của chúng tôi tăng 300% trong 6 tháng. Giao diện đẹp, tốc độ nhanh và tối ưu SEO rất tốt. Đặc biệt ấn tượng với dịch vụ hậu mãi.',
        },
        {
            name: 'Lê Hoàng Nam',
            position: 'Founder',
            company: 'EdTech Solutions',
            avatar: 'https://ui-avatars.com/api/?name=Le+Hoang+Nam&background=f59e0b&color=fff&size=256',
            rating: 5,
            content: 'Chúng tôi đã hợp tác với nhiều đối tác nhưng Nemark là người hiểu rõ nhất về nhu cầu startup. Họ không chỉ code mà còn tư vấn chiến lược sản phẩm rất sát sao. Highly recommended!',
        },
        {
            name: 'Phạm Minh Quân',
            position: 'Trưởng phòng IT',
            company: 'Manufacturing Corp',
            avatar: 'https://ui-avatars.com/api/?name=Pham+Minh+Quan&background=10b981&color=fff&size=256',
            rating: 5,
            content: 'Hệ thống ERP do Nemark triển khai đã số hóa hoàn toàn quy trình sản xuất của chúng tôi. Giảm 60% thời gian xử lý đơn hàng và tăng hiệu quả quản lý. Đầu tư rất xứng đáng!',
        },
    ]

    // Auto-play functionality - stable interval, no dependency on activeIndex
    useEffect(() => {
        const timer = setInterval(() => {
            if (!isAnimatingRef.current) {
                isAnimatingRef.current = true
                setIsAnimating(true)
                setTimeout(() => {
                    setActiveIndex((prev) => (prev + 1) % 4)
                    setIsAnimating(false)
                    isAnimatingRef.current = false
                }, 300)
            }
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    const nextTestimonial = () => {
        if (!isAnimating) {
            setIsAnimating(true)
            setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % testimonials.length)
                setIsAnimating(false)
            }, 300)
        }
    }

    const prevTestimonial = () => {
        if (!isAnimating) {
            setIsAnimating(true)
            setTimeout(() => {
                setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                setIsAnimating(false)
            }, 300)
        }
    }

    const goToTestimonial = (index: number) => {
        if (!isAnimating && index !== activeIndex) {
            setIsAnimating(true)
            setTimeout(() => {
                setActiveIndex(index)
                setIsAnimating(false)
            }, 300)
        }
    }

    const currentTestimonial = testimonials[activeIndex]

    return (
        <section suppressHydrationWarning className="relative py-24 bg-linear-to-br from-slate-50 via-white to-blue-50 overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Enhanced Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-block mb-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-slate-200">
                            <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                                Khách hàng nói gì
                            </span>
                        </span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
                        Phản hồi từ đối tác
                    </h3>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Hơn <span className="font-bold text-slate-900">16,000+</span> khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi
                    </p>
                </div>

                {/* Two Column Layout: Testimonial + Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                    {/* Left: Premium Testimonial Cards */}
                    <div className="relative order-2 lg:order-1 flex flex-col gap-6" data-aos="fade-right" data-aos-delay="100">

                        {/* Feedback Text Card */}
                        <div className="relative group flex-1">
                            <div
                                className={`relative h-full bg-linear-to-br from-primary-dark to-primary rounded-3xl shadow-2xl p-8 md:p-10 transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                    }`}
                            >

                                {/* Star Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                        <span key={i} className="material-icons text-2xl text-yellow-300">
                                            star
                                        </span>
                                    ))}
                                </div>

                                {/* Feedback Text - Left Aligned */}
                                <p className="text-lg md:text-xl text-white leading-relaxed text-left">
                                    {currentTestimonial.content}
                                </p>

                                {/* Decorative gradient overlay */}
                                <div className="absolute -top-2 -left-2 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                                <div className="absolute -bottom-2 -right-2 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                            </div>
                        </div>

                        {/* Customer Info Card */}
                        <div className="relative group">
                            <div
                                className={`relative bg-white rounded-2xl shadow-xl border border-slate-200 p-6 transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                    }`}
                            >
                                {/* Avatar + Info - Horizontal Layout */}
                                <div className="flex items-center gap-4 mb-6">
                                    {/* Avatar */}
                                    <div className="relative shrink-0">
                                        <div className="absolute inset-0 bg-blue-200 rounded-full blur-lg opacity-50" />
                                        <div className="relative w-20 h-20 rounded-full bg-white p-1 shadow-lg transform transition-transform duration-300 hover:scale-110">
                                            <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                                                <Image
                                                    src={currentTestimonial.avatar}
                                                    alt={currentTestimonial.name}
                                                    fill
                                                    sizes="80px"
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        {/* Verified Badge */}
                                        <div className="absolute -bottom-0.5 -right-0.5 bg-linear-to-br from-green-400 to-green-600 rounded-full p-1.5 shadow-lg border-2 border-white">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Customer Info */}
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900">
                                            {currentTestimonial.name}
                                        </h4>
                                        <p className="text-sm font-semibold text-primary">
                                            {currentTestimonial.position}
                                        </p>
                                        <p className="text-sm text-slate-600 font-medium">
                                            {currentTestimonial.company}
                                        </p>
                                    </div>
                                </div>

                                {/* Navigation Controls */}
                                <div className="space-y-4 border-t border-slate-200 pt-6">
                                    {/* Navigation Arrows */}
                                    <div className="flex gap-3 justify-center md:justify-start">
                                        <button
                                            onClick={prevTestimonial}
                                            className="group relative w-12 h-12 rounded-full bg-slate-100 hover:bg-primary text-slate-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 active:scale-95"
                                            aria-label="Previous testimonial"
                                        >
                                            <span className="material-icons text-xl transition-transform duration-300 group-hover:-translate-x-1">chevron_left</span>
                                        </button>
                                        <button
                                            onClick={nextTestimonial}
                                            className="group relative w-12 h-12 rounded-full bg-slate-100 hover:bg-primary text-slate-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 active:scale-95"
                                            aria-label="Next testimonial"
                                        >
                                            <span className="material-icons text-xl transition-transform duration-300 group-hover:translate-x-1">chevron_right</span>
                                        </button>
                                    </div>

                                    {/* Dots Indicator */}
                                    <div className="flex gap-2 justify-center md:justify-start">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToTestimonial(index)}
                                                className={`relative transition-all duration-300 rounded-full ${index === activeIndex
                                                    ? 'w-10 h-2.5 bg-primary shadow-lg'
                                                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 hover:scale-125'
                                                    }`}
                                                aria-label={`Go to testimonial ${index + 1}`}
                                            >
                                                {index === activeIndex && (
                                                    <span className="absolute inset-0 rounded-full bg-primary blur-sm opacity-50" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right: Decorative Image */}
                    <div className="relative order-1 lg:order-2 h-full" data-aos="fade-left" data-aos-delay="200">
                        <div className="relative group h-full">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-slate-100 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

                            {/* Image Container - Full Height */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px] lg:min-h-full">
                                <Image
                                    src="/feedback/partner-meeting.png"
                                    alt="Customer Feedback Illustration"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
