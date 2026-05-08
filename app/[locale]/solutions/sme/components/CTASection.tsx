'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function CTASection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        business: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
    }

    const benefits = [
        {
            title: 'Tối ưu chi phí',
            description: 'Thiết kế giải pháp vừa đủ dùng, không dư thừa tính năng'
        },
        {
            title: 'Triển khai nhanh – dễ sử dụng',
            description: 'Hệ thống đơn giản, dễ vận hành'
        },
        {
            title: 'Đồng hành & hỗ trợ liên tục',
            description: 'Được tư vấn trong suốt quá trình sử dụng'
        }
    ]

    const process = [
        {
            step: '01',
            title: 'Tư vấn & Phân tích',
            description: 'Lắng nghe nhu cầu, phân tích hiện trạng doanh nghiệp',
            icon: '💬'
        },
        {
            step: '02',
            title: 'Đề xuất giải pháp',
            description: 'Tư vấn package phù hợp với ngân sách và mục tiêu',
            icon: '📋'
        },
        {
            step: '03',
            title: 'Triển khai',
            description: 'Thiết kế, phát triển và tích hợp hệ thống',
            icon: '⚙️'
        },
        {
            step: '04',
            title: 'Bàn giao & Đào tạo',
            description: 'Hướng dẫn sử dụng, đào tạo team vận hành',
            icon: '🎓'
        },
        {
            step: '05',
            title: 'Hỗ trợ dài hạn',
            description: 'Đồng hành, bảo trì và nâng cấp liên tục',
            icon: '🤝'
        }
    ]

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-[#FFF9E6] to-[#FFFBF0]">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-3" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#4A90E2] uppercase tracking-wide mb-2">
                        Quy Trình
                    </h2>
                    <div className="w-16 h-1 bg-[#4A90E2] mx-auto"></div>
                </div>

                {/* Subheader */}
                <div className="text-center mb-10" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">
                        Giải pháp phù hợp ngân sách – Tối ưu vận hành cho SME
                    </h3>
                </div>

                {/* Process Steps */}
                <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                        {process.map((item, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                            >
                                {/* Step Number */}
                                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#4A90E2] to-[#357ABD] text-white rounded-full flex items-center justify-center font-black text-sm shadow-md">
                                    {item.step}
                                </div>

                                {/* Icon */}
                                <div className="text-4xl mb-3 text-center">{item.icon}</div>

                                {/* Title */}
                                <h4 className="text-[#4A90E2] font-bold text-sm mb-2 text-center leading-tight">
                                    {item.title}
                                </h4>

                                {/* Description */}
                                <p className="text-gray-600 text-xs text-center leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Image & Benefits */}
                    <div data-aos="fade-right">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Image */}
                            <div className="shrink-0">
                                <Image
                                    src="/images/nemark-why-choose-us.png"
                                    alt="SME Solution"
                                    width={280}
                                    height={350}
                                    className="w-56 md:w-64 h-auto object-contain"
                                />
                            </div>

                            {/* Benefits */}
                            <div className="space-y-6 flex-1">
                                {benefits.map((benefit, index) => (
                                    <div key={index}>
                                        <h4 className="text-[#4A90E2] font-bold text-xl mb-2">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-gray-700 text-base leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right - Form with enhanced styling */}
                    <div
                        className="relative"
                        data-aos="fade-left"
                    >
                        {/* Glow effect background */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#4A90E2]/20 to-[#357ABD]/20 rounded-3xl blur-xl"></div>

                        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#4A90E2]/30">
                            {/* Form Header */}
                            <div className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] px-6 py-5 text-center">
                                <p className="text-white font-bold text-lg uppercase tracking-wider">
                                    Đăng Ký Tư Vấn Miễn Phí
                                </p>
                            </div>

                            {/* Form Body */}
                            <form onSubmit={handleSubmit} className="p-8 lg:p-10 bg-gradient-to-b from-white to-gray-50">
                                <div className="space-y-5 mb-8">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Họ và tên"
                                        className="w-full px-5 py-4 bg-white rounded-lg border-2 border-gray-200 focus:border-[#4A90E2] focus:ring-2 focus:ring-[#4A90E2]/20 outline-none transition-all text-gray-700 placeholder-gray-400 text-base shadow-sm"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Số điện thoại"
                                        className="w-full px-5 py-4 bg-white rounded-lg border-2 border-gray-200 focus:border-[#4A90E2] focus:ring-2 focus:ring-[#4A90E2]/20 outline-none transition-all text-gray-700 placeholder-gray-400 text-base shadow-sm"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="business"
                                        value={formData.business}
                                        onChange={handleChange}
                                        placeholder="Lĩnh vực hoạt động của bạn"
                                        className="w-full px-5 py-4 bg-white rounded-lg border-2 border-gray-200 focus:border-[#4A90E2] focus:ring-2 focus:ring-[#4A90E2]/20 outline-none transition-all text-gray-700 placeholder-gray-400 text-base shadow-sm"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#4A90E2] to-[#357ABD] hover:from-[#357ABD] hover:to-[#2868a8] text-white font-bold text-lg uppercase tracking-wider px-8 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                >
                                    Đăng Ký Tư Vấn Miễn Phí
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
