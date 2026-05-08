'use client'

import { useState } from 'react'

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
        <section className="py-16 md:py-20 bg-accent">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Contact Info */}
                    <div data-aos="fade-right">
                        <h3 className="text-primary text-xl font-bold mb-4">
                            Liên hệ ngay
                        </h3>
                        <p className="text-gray-800 mb-8">
                            Để nhận báo giá chi tiết và tư vấn miễn phí!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-primary mt-1">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="font-semibold text-gray-800">Địa chỉ:</p>
                                    <p className="text-gray-700">Hà Nội, Việt Nam</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-primary mt-1">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="font-semibold text-gray-800">Email:</p>
                                    <p className="text-gray-700">contact@nemarkdigital.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-primary mt-1">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="font-semibold text-gray-800">Hotline:</p>
                                    <p className="text-gray-700">0123 456 789</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                        data-aos="fade-left"
                    >
                        {/* Form Header */}
                        <div className="bg-primary px-6 py-4 text-center">
                            <p className="text-white font-semibold text-base uppercase tracking-wider">
                                Tư Vấn Miễn Phí
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
                                Đăng Ký Ngay
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
