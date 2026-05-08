'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'

const leaders = [
    {
        name: 'Mai Tiến Đức',
        role: 'CEO & Founder',
        image: '/images/ceo-tienduc.png',
        isCeo: true,
        bio: 'Đam mê công nghệ từ khi còn ngồi trên ghế nhà trường, anh Đức đã xây dựng NEMARK từ con số 0 với tầm nhìn kiến tạo giải pháp số cho doanh nghiệp Việt.',
        skills: ['Product Strategy', 'Team Leadership', 'Business Development', 'Full-stack Architecture'],
        social: { linkedin: '#', github: '#', email: 'duc@nemarkdigital.com' }
    },
    {
        name: 'Trần Trung Kiên',
        role: 'Team Lead | Fullstack Developer',
        image: '/images/team-kien.png',
        isCeo: false,
        bio: 'Chuyên gia fullstack với kinh nghiệm phong phú trong xây dựng hệ thống web hiệu suất cao và có khả năng mở rộng.',
        skills: ['React/Next.js', 'Node.js', 'TypeScript', 'Database Design'],
        social: { linkedin: '#', github: '#' }
    },
    {
        name: 'Đào Huy Toàn',
        role: 'Fullstack Developer',
        image: '/images/team-toan.png',
        isCeo: false,
        bio: 'Lập trình viên tài năng với khả năng đa nhiệm, luôn tìm kiếm giải pháp tối ưu cho mọi bài toán kỹ thuật.',
        skills: ['PHP/Laravel', 'Vue.js', 'MySQL', 'REST API'],
        social: { linkedin: '#', github: '#' }
    },
    {
        name: 'Nguyễn Quang Huy',
        role: 'Game Developer',
        image: '/images/team-huy.png',
        isCeo: false,
        bio: 'Chuyên gia phát triển game với đam mê tạo ra những trải nghiệm tương tác hấp dẫn.',
        skills: ['Java', 'Socket Programming', 'Game Architecture', 'MySQL'],
        social: { linkedin: '#', github: '#' }
    },
    {
        name: 'Nguyễn Vy Anh',
        role: 'Business Analyst / Software Tester',
        image: '/images/team-vyanh.png',
        isCeo: false,
        bio: 'Cầu nối giữa khách hàng và đội ngũ phát triển, đảm bảo mọi sản phẩm đều đáp ứng đúng nhu cầu.',
        skills: ['Business Analysis', 'QA/Testing', 'Agile/Scrum', 'Documentation'],
        social: { linkedin: '#' }
    }
]

const milestones = [
    { year: '11/2025', title: 'Thành lập NEMARK', desc: 'Khởi đầu với đội ngũ 3 thành viên đầy đam mê' },
    { year: '12/2025', title: 'Dự án đầu tiên', desc: 'Hoàn thành 10+ website cho khách hàng đầu tiên' },
    { year: '01/2026', title: 'Mở rộng đội ngũ', desc: 'Đội ngũ phát triển lên 5+ thành viên chính thức' },
    { year: '03/2026', title: '200+ dự án', desc: 'Cột mốc 200+ dự án thành công, 150+ khách hàng hài lòng' },
]

const stats = [
    { value: '200+', label: 'Dự án hoàn thành', icon: 'rocket_launch' },
    { value: '150+', label: 'Khách hàng', icon: 'groups' },
    { value: '98%', label: 'Hài lòng', icon: 'thumb_up' },
    { value: '24/7', label: 'Hỗ trợ', icon: 'support_agent' },
]

export default function ExpertsPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const t = useTranslations('aboutPage.leadership')
    const ceo = leaders.find(l => l.isCeo)!
    const team = leaders.filter(l => !l.isCeo)

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            {/* Hero Section */}
            <section className="relative w-full pt-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)' }}>
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
                    <span className="inline-block py-1.5 px-5 rounded-full bg-white/10 text-white/80 border border-white/20 text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
                        Đội ngũ
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mb-6">
                        Đội Ngũ{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                            Chuyên Gia
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Những con người tài năng, tận tâm và đầy sáng tạo — kiến tạo giải pháp số cho doanh nghiệp Việt
                    </p>
                </div>
                {/* Wave divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16">
                        <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-icons text-blue-600 text-2xl">{stat.icon}</span>
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CEO Spotlight */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            {/* CEO Image */}
                            <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 p-8 md:p-12 flex items-center justify-center min-h-[400px]">
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full" />
                                    <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/20 rounded-full" />
                                </div>
                                <div className="relative">
                                    <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl mx-auto">
                                        <img alt={ceo.name} className="w-full h-full object-cover" src={ceo.image} />
                                    </div>
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs font-bold px-5 py-2 rounded-full shadow-lg">
                                        CEO & Founder
                                    </div>
                                </div>
                            </div>
                            {/* CEO Info */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{ceo.name}</h2>
                                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-6">{ceo.role}</p>
                                <blockquote className="relative mb-6">
                                    <span className="material-icons-outlined absolute -top-2 -left-2 text-3xl text-blue-200 select-none">format_quote</span>
                                    <p className="text-lg text-slate-600 italic leading-relaxed pl-6 border-l-3 border-blue-200">
                                        {t('ceoQuote')}
                                    </p>
                                </blockquote>
                                <p className="text-slate-500 leading-relaxed mb-6">{ceo.bio}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {ceo.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white text-slate-500 transition-all">
                                        <span className="material-icons text-lg">link</span>
                                    </a>
                                    <a href={`mailto:${ceo.social.email}`} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white text-slate-500 transition-all">
                                        <span className="material-icons text-lg">email</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('title')}</h2>
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-4" />
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t('subtitle')}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, i) => (
                            <div key={i} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                                <div className="relative w-32 h-32 mx-auto mb-5">
                                    <div className="w-full h-full rounded-full overflow-hidden border-3 border-slate-200 group-hover:border-blue-400 transition-colors duration-300">
                                        <img alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={member.image} />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 text-center group-hover:text-blue-600 transition-colors mb-1">{member.name}</h3>
                                <p className="text-xs text-blue-600 font-medium text-center mb-3">{member.role}</p>
                                <p className="text-sm text-slate-500 text-center leading-relaxed mb-4">{member.bio}</p>
                                <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                                    {member.skills.slice(0, 3).map((skill, j) => (
                                        <span key={j} className="px-2 py-0.5 bg-slate-50 text-slate-500 text-[10px] font-medium rounded-full border border-slate-100">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white text-slate-400 transition-all text-sm">
                                        <span className="material-icons text-sm">link</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Hành Trình Phát Triển</h2>
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                    </div>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200" />
                        {milestones.map((item, i) => (
                            <div key={i} className={`relative flex items-start mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Dot */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10" />
                                {/* Content */}
                                <div className={`ml-16 md:ml-0 ${i % 2 === 0 ? 'md:w-1/2 md:pr-12' : 'md:w-1/2 md:pl-12'} ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-3">{item.year}</span>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)' }}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px]" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Gia Nhập Đội Ngũ Nemark</h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                        Bạn là người tài năng, đam mê công nghệ và muốn tạo ra sản phẩm có giá trị? Hãy cùng chúng tôi kiến tạo tương lai số!
                    </p>
                    <Link
                        href="/careers"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                    >
                        <span className="material-icons">work</span>
                        Xem vị trí tuyển dụng
                    </Link>
                </div>
            </section>

            <Footer />
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </div>
    )
}
