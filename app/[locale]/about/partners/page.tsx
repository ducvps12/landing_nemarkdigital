'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'

const industries = [
    { icon: 'local_hospital', name: 'Thẩm mỹ & Y tế', color: 'from-pink-500 to-rose-600' },
    { icon: 'restaurant', name: 'F&B / Nhà hàng', color: 'from-orange-500 to-amber-600' },
    { icon: 'checkroom', name: 'Thời trang', color: 'from-purple-500 to-violet-600' },
    { icon: 'rocket_launch', name: 'Startup & Tech', color: 'from-blue-500 to-indigo-600' },
    { icon: 'shopping_cart', name: 'Thương mại điện tử', color: 'from-green-500 to-emerald-600' },
    { icon: 'school', name: 'Giáo dục', color: 'from-cyan-500 to-sky-600' },
    { icon: 'apartment', name: 'Bất động sản', color: 'from-slate-500 to-gray-600' },
    { icon: 'factory', name: 'Sản xuất', color: 'from-amber-500 to-yellow-600' },
]

const caseStudies = [
    {
        title: 'AuraVibe Medical Center',
        industry: 'Thẩm mỹ & Clinic',
        result: 'Tăng 150% đặt lịch online',
        desc: 'Xây dựng hệ thống quản lý khách hàng và đặt lịch trực tuyến chuyên nghiệp.',
        metrics: [
            { label: 'Đặt lịch online', value: '+150%' },
            { label: 'Thời gian xử lý', value: '-40%' },
            { label: 'Hài lòng KH', value: '98%' },
        ]
    },
    {
        title: 'GreenPioneer Solutions',
        industry: 'Startup',
        result: 'MVP hoàn thiện trong 3 tuần',
        desc: 'Phát triển sản phẩm MVP nhanh chóng, phù hợp tốc độ startup.',
        metrics: [
            { label: 'Time-to-market', value: '3 tuần' },
            { label: 'Tiết kiệm chi phí', value: '60%' },
            { label: 'Người dùng mới', value: '5K+' },
        ]
    },
    {
        title: 'UrbanDeli F&B',
        industry: 'F&B / Bán lẻ',
        result: 'Tăng 30% doanh thu online',
        desc: 'Triển khai hệ thống đặt hàng đa kênh với khả năng chịu tải cao.',
        metrics: [
            { label: 'Doanh thu online', value: '+30%' },
            { label: 'Đơn hàng/tháng', value: '5K+' },
            { label: 'Tốc độ tải', value: '<2s' },
        ]
    },
    {
        title: 'VelvetNode Fashion',
        industry: 'Thời trang',
        result: 'Trải nghiệm mua sắm premium',
        desc: 'Website thương hiệu thời trang high-end với giao diện sang trọng.',
        metrics: [
            { label: 'Conversions', value: '+200%' },
            { label: 'Bounce rate', value: '-35%' },
            { label: 'Avg. session', value: '4.5m' },
        ]
    },
]

const testimonials = [
    { name: 'Ông Lâm Vĩnh Thụy', role: 'CEO AuraVibe Medical Center', industry: 'Thẩm mỹ & Clinic', initials: 'VT', quote: 'Dịch vụ tuyệt vời, đội ngũ hỗ trợ nhiệt tình. Nemark đã giúp chúng tôi xây dựng hệ thống quản lý khách hàng chuyên nghiệp.', color: 'blue' },
    { name: 'Bà Mai Phương Thảo', role: 'Founder - GreenPioneer Solutions', industry: 'Startup', initials: 'PT', quote: 'Quy trình agile phù hợp tốc độ startup. Sản phẩm hoàn thiện đúng tiến độ với chất lượng code rất cao.', color: 'purple' },
    { name: 'Ông Trần Hoàng Nam', role: 'Trưởng phòng TMĐT - UrbanDeli', industry: 'F&B', initials: 'HN', quote: 'Hệ thống đặt hàng đa kênh vận hành mượt mà, chịu tải tốt trong giờ cao điểm. Doanh thu tăng 30%.', color: 'orange' },
    { name: 'Bà Lê Khánh An', role: 'Brand Manager - VelvetNode Fashion', industry: 'Thời trang', initials: 'KA', quote: 'Giao diện website thể hiện đúng tinh thần thương hiệu: tinh tế và sang trọng.', color: 'pink' },
    { name: 'Nguyễn Văn An', role: 'CEO - Tech Startup ABC', industry: 'Tech', initials: 'VA', quote: 'Nemark đã giúp chúng tôi xây dựng hệ thống quản lý nội bộ hoàn chỉnh. Đội ngũ chuyên nghiệp, tận tâm.', color: 'green' },
    { name: 'Trần Thị Bình', role: 'Giám đốc Marketing - Fashion Brand XYZ', industry: 'Thời trang', initials: 'TB', quote: 'Website thương mại điện tử giúp doanh thu tăng 300% trong 6 tháng. Giao diện đẹp, tốc độ nhanh.', color: 'cyan' },
]

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'from-blue-100 to-blue-200', text: 'text-blue-600', border: 'border-blue-200' },
    purple: { bg: 'from-purple-100 to-purple-200', text: 'text-purple-600', border: 'border-purple-200' },
    orange: { bg: 'from-orange-100 to-orange-200', text: 'text-orange-600', border: 'border-orange-200' },
    pink: { bg: 'from-pink-100 to-pink-200', text: 'text-pink-600', border: 'border-pink-200' },
    green: { bg: 'from-green-100 to-green-200', text: 'text-green-600', border: 'border-green-200' },
    cyan: { bg: 'from-cyan-100 to-cyan-200', text: 'text-cyan-600', border: 'border-cyan-200' },
}

export default function PartnersPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            {/* Hero Section */}
            <section className="relative w-full pt-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #312e81 50%, #0f172a 100%)' }}>
                <div className="absolute inset-0">
                    <div className="absolute top-10 right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
                    <span className="inline-block py-1.5 px-5 rounded-full bg-white/10 text-white/80 border border-white/20 text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
                        Đối tác
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mb-6">
                        Đối Tác &{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                            Khách Hàng
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Hơn 200+ doanh nghiệp đã tin tưởng và đồng hành cùng Nemark trong hành trình chuyển đổi số
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16">
                        <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '200+', label: 'Đối tác', icon: 'handshake' },
                            { value: '16,000+', label: 'Khách hàng', icon: 'groups' },
                            { value: '98%', label: 'Hài lòng', icon: 'sentiment_very_satisfied' },
                            { value: '5+', label: 'Năm kinh nghiệm', icon: 'workspace_premium' },
                        ].map((s, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-14 h-14 bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <span className="material-icons text-indigo-600 text-2xl">{s.icon}</span>
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{s.value}</div>
                                <div className="text-sm text-slate-500 font-medium">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-indigo-50/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ngành Nghề Phục Vụ</h2>
                        <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full mb-4" />
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Nemark tự hào đồng hành cùng doanh nghiệp thuộc đa dạng lĩnh vực</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {industries.map((ind, i) => (
                            <div key={i} className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 text-center cursor-pointer">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ind.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                    <span className="material-icons text-white text-2xl">{ind.icon}</span>
                                </div>
                                <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{ind.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Kết Quả Nổi Bật</h2>
                        <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full mb-4" />
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Những con số minh chứng cho giá trị thực mà Nemark mang lại</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {caseStudies.map((cs, i) => (
                            <div key={i} className="group bg-white rounded-2xl border border-slate-200 p-6 md:p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1">{cs.title}</h3>
                                        <span className="inline-block text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">{cs.industry}</span>
                                    </div>
                                    <span className="material-icons text-slate-300 group-hover:text-indigo-400 transition-colors text-3xl">trending_up</span>
                                </div>
                                <p className="text-sm text-slate-500 mb-5">{cs.desc}</p>
                                <div className="grid grid-cols-3 gap-3">
                                    {cs.metrics.map((m, j) => (
                                        <div key={j} className="bg-slate-50 rounded-xl p-3 text-center group-hover:bg-indigo-50 transition-colors">
                                            <div className="text-xl font-bold text-slate-900">{m.value}</div>
                                            <div className="text-[10px] text-slate-500 font-medium mt-0.5">{m.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-indigo-50/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Khách Hàng Nói Gì</h2>
                        <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full mb-4" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => {
                            const c = colorMap[t.color] || colorMap.blue
                            return (
                                <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${c.bg} flex items-center justify-center ${c.text} font-bold text-sm shrink-0`}>
                                            {t.initials}
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm text-slate-900">{t.name}</div>
                                            <div className="text-xs text-slate-500">{t.role}</div>
                                        </div>
                                    </div>
                                    <span className={`inline-block text-[10px] font-medium ${c.text} bg-opacity-10 px-2 py-0.5 rounded-full ${c.border} border mb-3`}>{t.industry}</span>
                                    <p className="text-sm text-slate-600 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                                    <div className="flex gap-0.5 mt-4">
                                        {[...Array(5)].map((_, j) => (
                                            <span key={j} className="material-icons text-amber-400 text-sm">star</span>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)' }}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px]" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Trở Thành Đối Tác Của Nemark</h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                        Hãy để Nemark đồng hành cùng bạn trong hành trình chuyển đổi số. Liên hệ ngay để được tư vấn miễn phí!
                    </p>
                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-bold rounded-full hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
                    >
                        <span className="material-icons">chat</span>
                        Liên hệ hợp tác ngay
                    </button>
                </div>
            </section>

            <Footer />
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </div>
    )
}
