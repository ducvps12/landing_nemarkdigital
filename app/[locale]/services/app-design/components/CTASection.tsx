'use client'

import { useState } from 'react'

export default function CTASection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        description: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))

        setSubmitted(true)
        setIsSubmitting(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="py-16 lg:py-24 bg-primary relative overflow-hidden" id="contact">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Form Card */}
                    <div data-aos="fade-right">
                        {!submitted ? (
                            <div className="bg-amber-400 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                                {/* Decorative illustration */}
                                <div className="absolute -right-10 -top-10 w-32 h-32 opacity-20">
                                    <svg viewBox="0 0 100 100" fill="currentColor" className="text-amber-600">
                                        <circle cx="50" cy="50" r="40" />
                                    </svg>
                                </div>

                                {/* Form Header */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                                        ĐĂNG KÝ TƯ VẤN
                                    </h3>
                                    <p className="text-amber-800 font-medium">
                                        NHẬN NGAY GIÁ SIÊU ƯU ĐÃI
                                    </p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Họ tên"
                                            className="w-full px-4 py-3 rounded-lg bg-white border border-amber-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Email"
                                            className="w-full px-4 py-3 rounded-lg bg-white border border-amber-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="Số điện thoại"
                                            className="w-full px-4 py-3 rounded-lg bg-white border border-amber-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            placeholder="Mô tả ngắn gọn"
                                            className="w-full px-4 py-3 rounded-lg bg-white border border-amber-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="material-icons-outlined animate-spin">sync</span>
                                                <span>Đang gửi...</span>
                                            </>
                                        ) : (
                                            <span>ĐĂNG KÝ NGAY</span>
                                        )}
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="bg-amber-400 rounded-2xl p-12 shadow-2xl text-center">
                                <div className="w-20 h-20 mx-auto bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                                    <span className="material-icons-outlined text-4xl text-white">check</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                    Đăng ký thành công!
                                </h3>
                                <p className="text-amber-800">
                                    Cảm ơn bạn đã quan tâm. Chuyên viên của chúng tôi sẽ liên hệ
                                    trong vòng 15 phút làm việc.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Right - Phone Mockup Image */}
                    <div className="flex justify-center items-center" data-aos="fade-left">
                        <div className="relative">
                            {/* Phone mockup */}
                            <img
                                src="/images/app-mockup.png"
                                alt="App Ưu đãi"
                                className="w-[300px] md:w-[400px] lg:w-[450px] h-auto drop-shadow-2xl rounded-[2.5rem]"
                            />

                            {/* Decorative elements */}
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-2xl">💰</span>
                            </div>
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-xl text-white font-bold">%</span>
                            </div>
                            <div className="absolute bottom-1/4 -right-8 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-xl">🎁</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
