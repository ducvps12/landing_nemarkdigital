'use client';

import { useState } from 'react';

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: '',
        domain: '',
        phone: '',
        email: '',
        userCount: 'Dưới 10',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <section className="relative py-20">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-slate-800"></div>
            
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Form Card */}
                <div 
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
                    data-aos="fade-up"
                >
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                            Đăng ký Tư Vấn & Báo Giá
                        </h2>
                        <p className="text-slate-600">
                            Email Doanh Nghiệp Theo Tên Miền - Đội ngũ chuyên gia sẽ liên hệ lại trong vòng 30 phút
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Họ tên */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                                    Họ và Tên <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nguyễn Văn A"
                                    className="h-12 px-4 rounded-xl border-2 border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    required
                                />
                            </div>

                            {/* Tên miền */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="domain" className="text-sm font-semibold text-slate-700">
                                    Tên miền Website <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="domain"
                                    name="domain"
                                    value={formData.domain}
                                    onChange={handleChange}
                                    placeholder="example.com"
                                    className="h-12 px-4 rounded-xl border-2 border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    required
                                />
                            </div>

                            {/* Số điện thoại */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                                    Số điện thoại <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="0901 234 567"
                                    className="h-12 px-4 rounded-xl border-2 border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                                    Email hiện tại <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="contact@gmail.com"
                                    className="h-12 px-4 rounded-xl border-2 border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Số lượng User */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="userCount" className="text-sm font-semibold text-slate-700">
                                Số lượng nhân viên cần sử dụng <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="userCount"
                                name="userCount"
                                value={formData.userCount}
                                onChange={handleChange}
                                className="h-12 px-4 rounded-xl border-2 border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                                required
                            >
                                <option value="Dưới 10">Dưới 10 người</option>
                                <option value="10 - 50">10 - 50 người</option>
                                <option value="50 - 200">50 - 200 người</option>
                                <option value="Trên 200">Trên 200 người</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full h-14 bg-primary hover:bg-primary-dark text-white text-lg font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                        >
                            <span className="material-icons-outlined">send</span>
                            ĐĂNG KÝ NGAY
                        </button>

                        {/* Privacy Note */}
                        <p className="text-center text-sm text-slate-500">
                            Bằng việc đăng ký, bạn đồng ý với{' '}
                            <a href="#" className="text-primary hover:underline">Điều khoản sử dụng</a>
                            {' '}và{' '}
                            <a href="#" className="text-primary hover:underline">Chính sách bảo mật</a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

