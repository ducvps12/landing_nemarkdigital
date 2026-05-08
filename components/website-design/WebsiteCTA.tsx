'use client'

import { useState } from 'react';

export default function WebsiteCTA() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        business: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Stats */}
                    <div data-aos="fade-right">
                        <h2 className="text-4xl font-bold text-primary-dark mb-8">NEMARK</h2>

                        <div className="flex gap-12">
                            <div>
                                <p className="text-5xl font-bold text-primary">6</p>
                                <p className="text-gray-600">Năm</p>
                                <p className="text-sm text-gray-500">Trong lĩnh vực thiết kế website</p>
                            </div>
                            <div>
                                <p className="text-5xl font-bold text-primary">100+</p>
                                <p className="text-gray-600">dự án đã hoàn thành</p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-left">
                        <h3 className="text-xl font-bold text-primary-dark text-center mb-6">
                            NHẬN TƯ VẤN & BÁO GIÁ WEBSITE PHÙ HỢP NHẤT CHO DOANH NGHIỆP BẠN
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Họ và tên"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    placeholder="Số điện thoại"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Lĩnh vực kinh doanh (sản phẩm/dịch vụ)"
                                    value={formData.business}
                                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition-colors"
                            >
                                TƯ VẤN NGAY
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
