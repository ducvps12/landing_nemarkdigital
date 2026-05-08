'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'

const cooperationTypes = [
    {
        icon: 'devices',
        title: 'Đối tác Công nghệ',
        desc: 'Hợp tác phát triển sản phẩm, chia sẻ công nghệ và cùng xây dựng giải pháp cho khách hàng.',
        color: 'from-blue-500 to-indigo-600',
    },
    {
        icon: 'storefront',
        title: 'Đại lý / Reseller',
        desc: 'Trở thành đại lý phân phối dịch vụ Nemark với hoa hồng hấp dẫn và hỗ trợ toàn diện.',
        color: 'from-green-500 to-emerald-600',
    },
    {
        icon: 'code',
        title: 'Freelancer / Outsource',
        desc: 'Nhận dự án outsource hoặc hợp tác freelance với đội ngũ Nemark trên các dự án lớn.',
        color: 'from-purple-500 to-violet-600',
    },
    {
        icon: 'campaign',
        title: 'Affiliate / Marketing',
        desc: 'Giới thiệu khách hàng, nhận hoa hồng theo doanh số. Chương trình affiliate hấp dẫn.',
        color: 'from-orange-500 to-amber-600',
    },
]

const faqs = [
    {
        q: 'Nemark hỗ trợ những hình thức hợp tác nào?',
        a: 'Nemark mở rộng hợp tác với đối tác công nghệ, đại lý/reseller, freelancer/outsource, và chương trình affiliate marketing. Liên hệ để tìm hình thức phù hợp nhất.',
    },
    {
        q: 'Thời gian phản hồi sau khi gửi yêu cầu?',
        a: 'Chúng tôi cam kết phản hồi trong vòng 15 phút trong giờ hành chính (8h-22h). Ngoài giờ, yêu cầu sẽ được xử lý vào sáng hôm sau.',
    },
    {
        q: 'Có yêu cầu về quy mô tối thiểu cho dự án không?',
        a: 'Không, Nemark phục vụ từ cá nhân, startup nhỏ đến doanh nghiệp lớn. Mỗi dự án đều được đối xử nghiêm túc và chuyên nghiệp.',
    },
    {
        q: 'Chính sách bảo mật thông tin đối tác?',
        a: 'Tất cả thông tin đối tác được bảo mật tuyệt đối theo NDA. Chúng tôi tuân thủ quy định bảo mật dữ liệu và không chia sẻ thông tin với bên thứ ba.',
    },
    {
        q: 'Hoa hồng cho đối tác reseller/affiliate?',
        a: 'Chương trình hoa hồng từ 10-20% giá trị hợp đồng, thanh toán hàng tháng. Liên hệ để nhận bảng chi tiết chính sách hoa hồng.',
    },
]

const contactInfo = [
    { icon: 'location_on', label: 'Địa chỉ', value: 'Số nhà 19, Đường 452, Linh Sơn, Hạ Bằng, Hà Nội' },
    { icon: 'phone', label: 'Hotline', value: '0914 659 183', href: 'tel:0914659183' },
    { icon: 'email', label: 'Email', value: 'support@nemarkdigital.com', href: 'mailto:support@nemarkdigital.com' },
    { icon: 'chat', label: 'Zalo', value: 'Nemark Digital', href: 'https://zalo.me/3516553225829314754' },
    { icon: 'facebook', label: 'Facebook', value: 'Nemark Digital Hub', href: 'https://www.facebook.com/NemarkDigitalHub/' },
]

export default function ContactPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const [openFaq, setOpenFaq] = useState(0)
    const t = useTranslations('cta')
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', cooperationType: '', budget: '', message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.cooperationType,
                    message: `[Liên hệ hợp tác]\nLoại hợp tác: ${formData.cooperationType}\nNgân sách: ${formData.budget}\n\n${formData.message}`
                })
            })
            if (res.ok) {
                setSubmitStatus('success')
                setFormData({ name: '', email: '', phone: '', cooperationType: '', budget: '', message: '' })
            } else {
                setSubmitStatus('error')
            }
        } catch {
            setSubmitStatus('error')
        }
        setIsSubmitting(false)
        setTimeout(() => setSubmitStatus('idle'), 5000)
    }

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            {/* Hero Section */}
            <section className="relative w-full pt-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #065f46 50%, #0f172a 100%)' }}>
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-[150px]" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
                    <span className="inline-block py-1.5 px-5 rounded-full bg-white/10 text-white/80 border border-white/20 text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
                        Hợp tác
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mb-6">
                        Liên Hệ{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                            Hợp Tác
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Cùng Nemark kiến tạo giá trị — liên hệ ngay để bắt đầu hành trình hợp tác
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16">
                        <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Cooperation Types */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Hình Thức Hợp Tác</h2>
                        <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full mb-4" />
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Đa dạng hình thức hợp tác phù hợp với mọi quy mô và nhu cầu</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cooperationTypes.map((type, i) => (
                            <div key={i} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 text-center">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                                    <span className="material-icons text-white text-3xl">{type.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{type.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-emerald-50/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Form - 3 cols */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">Gửi yêu cầu hợp tác</h2>
                                <p className="text-sm text-slate-500 mb-6">Chúng tôi sẽ phản hồi trong vòng <strong className="text-emerald-600">15 phút</strong></p>

                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
                                        <span className="material-icons text-emerald-600">check_circle</span>
                                        <span className="text-sm text-emerald-700 font-medium">{t('successMessage')}</span>
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                                        <span className="material-icons text-red-600">error</span>
                                        <span className="text-sm text-red-700 font-medium">{t('errorMessage')}</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Họ và tên *</label>
                                            <input
                                                type="text" required value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                                placeholder="Nhập họ và tên"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
                                            <input
                                                type="email" required value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                                placeholder="email@company.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Số điện thoại *</label>
                                            <input
                                                type="tel" required value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                                placeholder="09xxxxxxxx"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Hình thức hợp tác</label>
                                            <select
                                                value={formData.cooperationType}
                                                onChange={e => setFormData({ ...formData, cooperationType: e.target.value })}
                                                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white"
                                            >
                                                <option value="">Chọn hình thức</option>
                                                <option value="tech-partner">Đối tác Công nghệ</option>
                                                <option value="reseller">Đại lý / Reseller</option>
                                                <option value="freelancer">Freelancer / Outsource</option>
                                                <option value="affiliate">Affiliate / Marketing</option>
                                                <option value="other">Khác</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Ngân sách dự kiến</label>
                                        <select
                                            value={formData.budget}
                                            onChange={e => setFormData({ ...formData, budget: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white"
                                        >
                                            <option value="">Chọn ngân sách</option>
                                            <option value="<5m">Dưới 5 triệu</option>
                                            <option value="5-15m">5 - 15 triệu</option>
                                            <option value="15-50m">15 - 50 triệu</option>
                                            <option value="50-100m">50 - 100 triệu</option>
                                            <option value=">100m">Trên 100 triệu</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nội dung chi tiết</label>
                                        <textarea
                                            rows={4} value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                                            placeholder="Mô tả về nhu cầu hợp tác của bạn..."
                                        />
                                    </div>
                                    <button
                                        type="submit" disabled={isSubmitting}
                                        className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        {isSubmitting ? (
                                            <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Đang gửi...</>
                                        ) : (
                                            <><span className="material-icons text-lg">send</span> Gửi yêu cầu hợp tác</>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info - 2 cols */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Contact cards */}
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                                    <span className="material-icons text-emerald-600">contact_support</span>
                                    Thông tin liên hệ
                                </h3>
                                <div className="space-y-4">
                                    {contactInfo.map((info, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                                                <span className="material-icons text-emerald-600 text-lg">{info.icon}</span>
                                            </div>
                                            <div>
                                                <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{info.label}</div>
                                                {info.href ? (
                                                    <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm font-medium text-slate-900 hover:text-emerald-600 transition-colors">
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <div className="text-sm font-medium text-slate-900">{info.value}</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Map */}
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="material-icons text-emerald-600">map</span>
                                    Văn phòng
                                </h3>
                                <div className="bg-slate-100 rounded-xl h-48 overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25048.989333694055!2d105.52704413167457!3d21.050502661612956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad884f216eb3%3A0xb4ee365c7b7e1ed6!2sNemark%20Digital%20Solution%20Media%20LMT!5e0!3m2!1svi!2s!4v1767928442584!5m2!1svi!2s"
                                        width="100%" height="100%" style={{ border: 0 }}
                                        allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>

                            {/* Working hours */}
                            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 text-white">
                                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                                    <span className="material-icons">schedule</span>
                                    Giờ làm việc
                                </h3>
                                <div className="space-y-2 text-sm text-white/90">
                                    <div className="flex justify-between">
                                        <span>Thứ 2 - Thứ 6</span>
                                        <span className="font-medium">8:00 - 22:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Thứ 7 - Chủ nhật</span>
                                        <span className="font-medium">9:00 - 18:00</span>
                                    </div>
                                    <div className="flex justify-between border-t border-white/20 pt-2 mt-2">
                                        <span>Hỗ trợ khẩn cấp</span>
                                        <span className="font-bold text-emerald-200">24/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Câu Hỏi Thường Gặp</h2>
                        <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full" />
                    </div>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-emerald-300 transition-colors">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    className="flex items-center justify-between w-full p-5 text-left cursor-pointer"
                                >
                                    <span className={`font-semibold text-sm ${openFaq === i ? 'text-emerald-600' : 'text-slate-800'} transition-colors`}>{faq.q}</span>
                                    <span className={`material-icons text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-emerald-600' : ''}`}>expand_more</span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40' : 'max-h-0'}`}>
                                    <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </div>
    )
}
