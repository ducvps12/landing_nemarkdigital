'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function RegistrationSection() {
    const [formData, setFormData] = useState({
        proxyType: '',
        phone: '',
        email: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div data-aos="zoom-in">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 mb-4">
                        Đăng Ký Tư Vấn Giải Pháp Proxy
                    </h2>
                    <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Bạn cần IP sạch để mua tài khoản (Facebook, eBay, Etsy..), chạy quảng cáo hay cào dữ liệu? Nemark cung cấp hệ thống Proxy (IPV4/IPV6) tốc độ cao, đa dạng quốc gia (VN, US, EU...) giá rẻ, linh hoạt và Private 100%.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                        {/* Left Image */}
                        <div className="hidden lg:block h-full relative min-h-[400px]" data-aos="fade-right">
                            <Image
                                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                                alt="Proxy Service Consultation"
                                fill
                                className="object-cover rounded-2xl shadow-xl"
                            />
                        </div>

                        {/* Right Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12" data-aos="fade-left">
                            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 text-center">
                                Hệ thống liên hệ:
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="proxyType" className="block text-sm font-medium text-gray-700 mb-2">
                                        Loại Proxy quan tâm (IPV4, IPV6 hay Dân cư/Datacenter?):
                                    </label>
                                    <input
                                        type="text"
                                        id="proxyType"
                                        name="proxyType"
                                        value={formData.proxyType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="VD: Proxy Dân cư Việt Nam (IPV4)"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Số điện thoại (Zalo):
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Nhập số điện thoại"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email nhận túc list IP máy:
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Nhập email của bạn"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <span className="material-icons">send</span>
                                    <span>Gửi yêu cầu tư vấn</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
