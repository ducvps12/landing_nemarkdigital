'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function CTASection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        website: ''
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

    return (
        <section className="py-16 md:py-20 bg-primary-light relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
                {/* Main Heading */}
                <h2
                    className="text-center text-xl md:text-2xl lg:text-3xl font-extrabold text-primary-dark uppercase tracking-wide mb-8"
                    data-aos="fade-up"
                >
                    Hãy Để Nemark Giúp Website Của Bạn Nhanh Hơn - An Toàn Hơn - Mạnh Mẽ Hơn
                </h2>

                {/* Form Card */}
                <div
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    {/* Form Side */}
                    <div>
                        {/* Form Header */}
                        <div className="bg-gradient-to-r from-primary to-primary px-6 py-4 text-center">
                            <p className="text-white font-semibold text-sm md:text-base uppercase tracking-wider">
                                Liên Hệ Ngay Để Được Tư Vấn Miễn Phí Và Nhận Báo Giá Chi Tiết Cho Website Của Bạn
                            </p>
                        </div>

                        {/* Form Body */}
                        <form onSubmit={handleSubmit} className="p-6 lg:p-8">
                            <div className="space-y-4 mb-6">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Họ và tên"
                                    className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 placeholder-gray-400"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Số điện thoại"
                                    className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 placeholder-gray-400"
                                    required
                                />
                                <input
                                    type="url"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    placeholder="Website của bạn"
                                    className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 placeholder-gray-400"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-base uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Gửi Yêu Cầu Tư Vấn Ngay
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>

                            <p className="text-center text-gray-500 text-xs mt-4">
                                Nemark cam kết bảo mật thông tin khách hàng
                            </p>
                        </form>
                    </div>

                    {/* Image Side */}
                    <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-primary-light/20 to-white p-8">
                        <Image
                            src="/images/nemark-consultation.png"
                            alt="Tư vấn website"
                            width={400}
                            height={400}
                            className="w-full max-w-[350px] h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Tagline */}
                <p
                    className="text-center text-primary-dark text-sm mt-8 font-medium"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    NEMARK – Kiến tạo giải pháp Website toàn diện & Tăng trưởng bền vững
                </p>
            </div>
        </section>
    )
}
