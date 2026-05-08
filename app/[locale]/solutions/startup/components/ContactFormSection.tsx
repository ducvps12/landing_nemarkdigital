'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        field: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Vui lòng nhập họ và tên'
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Vui lòng nhập số điện thoại'
        } else if (!/^[0-9]{10,11}$/.test(formData.phone)) {
            newErrors.phone = 'Số điện thoại không hợp lệ'
        }

        if (!formData.field.trim()) {
            newErrors.field = 'Vui lòng nhập lĩnh vực hoạt động'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)

        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setSubmitSuccess(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', phone: '', field: '' })
            setSubmitSuccess(false)
        }, 3000)
    }

    return (
        <section className="py-10 lg:py-14 bg-gradient-to-b from-white to-accent/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Image */}
                    <div className="order-2 lg:order-1" data-aos="fade-right">
                        <div className="relative">
                            {/* Background decoration */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-xl"></div>

                            {/* Main image */}
                            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80"
                                    alt="Free Consultation"
                                    width={600}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg animate-float hidden lg:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                        <span className="material-icons text-white text-lg">check</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-black font-['Montserrat']">Miễn phí</div>
                                        <div className="text-xs text-black/70 font-['Montserrat']">100% không phí</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                        <span className="material-icons text-white text-lg">schedule</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-black font-['Montserrat']">Phản hồi nhanh</div>
                                        <div className="text-xs text-black/70 font-['Montserrat']">Trong 15 phút</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="order-1 lg:order-2" data-aos="fade-left">
                        <div className="bg-accent rounded-3xl p-8 lg:p-10 shadow-xl">
                            {/* Form Header */}
                            <div className="text-center mb-8">
                                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                                    TƯ VẤN GIẢI PHÁP MIỄN PHÍ
                                </h2>
                                <p className="text-primary/80 text-sm">
                                    Điền thông tin, chúng tôi sẽ liên hệ ngay!
                                </p>
                            </div>

                            {/* Success Message */}
                            {submitSuccess && (
                                <div className="mb-6 p-4 bg-primary-light border border-primary rounded-xl flex items-center gap-3">
                                    <span className="material-icons text-primary text-2xl">check_circle</span>
                                    <div>
                                        <p className="font-semibold text-primary">Gửi thành công!</p>
                                        <p className="text-sm text-primary">Chúng tôi sẽ liên hệ bạn trong 15 phút.</p>
                                    </div>
                                </div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="startup-name" className="block text-sm font-semibold text-primary mb-2">
                                        Họ và tên <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 material-icons-outlined text-primary/50 text-xl">person</span>
                                        <input
                                            type="text"
                                            id="startup-name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full pl-12 pr-4 py-4 bg-white border-2 ${errors.name ? 'border-red-400' : 'border-transparent'} rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-black placeholder-black/40 font-['Montserrat']`}
                                            placeholder="Nhập họ và tên của bạn"
                                            suppressHydrationWarning
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                                            <span className="material-icons text-sm">error</span>
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label htmlFor="startup-phone" className="block text-sm font-semibold text-primary mb-2">
                                        Số điện thoại <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 material-icons-outlined text-primary/50 text-xl">phone</span>
                                        <input
                                            type="tel"
                                            id="startup-phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`w-full pl-12 pr-4 py-4 bg-white border-2 ${errors.phone ? 'border-red-400' : 'border-transparent'} rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-black placeholder-black/40 font-['Montserrat']`}
                                            placeholder="0123 456 789"
                                            suppressHydrationWarning
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                                            <span className="material-icons text-sm">error</span>
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                {/* Field of Business */}
                                <div>
                                    <label htmlFor="startup-field" className="block text-sm font-semibold text-primary mb-2">
                                        Lĩnh vực hoạt động của bạn <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-4 material-icons-outlined text-primary/50 text-xl">business</span>
                                        <textarea
                                            id="startup-field"
                                            name="field"
                                            value={formData.field}
                                            onChange={handleChange}
                                            rows={3}
                                            className={`w-full pl-12 pr-4 py-4 bg-white border-2 ${errors.field ? 'border-red-400' : 'border-transparent'} rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none text-black placeholder-black/40 font-['Montserrat']`}
                                            placeholder="VD: Thương mại điện tử, Fintech, Edtech..."
                                            suppressHydrationWarning
                                        />
                                    </div>
                                    {errors.field && (
                                        <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                                            <span className="material-icons text-sm">error</span>
                                            {errors.field}
                                        </p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase tracking-wider"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="material-icons animate-spin text-xl">refresh</span>
                                            Đang gửi...
                                        </>
                                    ) : (
                                        <>
                                            <span className="material-icons-outlined text-xl">send</span>
                                            ĐĂNG KÝ NGAY
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Privacy note */}
                            <p className="text-center text-xs text-primary/70 mt-4">
                                <span className="material-icons text-xs align-middle">lock</span>
                                {' '}Thông tin của bạn được bảo mật tuyệt đối
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
