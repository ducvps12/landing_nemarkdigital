'use client'

import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'
import CTAWithForm from '@/components/common/cta/CTAWithForm'
import { useState, useEffect } from 'react'
import AOS from 'aos'

interface HighlightItem {
    icon: string
    title: string
    description: string
}

interface ProcessStep {
    title: string
    description: string
}

interface PolicyLayoutProps {
    title: string
    subtitle: string
    icon: string
    lastUpdated: string
    highlights?: HighlightItem[]
    processSteps?: ProcessStep[]
    children: React.ReactNode
}

export default function PolicyLayout({ title, subtitle, icon, lastUpdated, highlights, processSteps, children }: PolicyLayoutProps) {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' })
        document.documentElement.classList.remove('dark')
    }, [])

    return (
        <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            <main className="flex flex-col">
                {/* ===== HERO BANNER ===== */}
                <section className="relative bg-primary overflow-hidden min-h-[50vh] flex items-center">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark"></div>

                    {/* Decorative blurred circles */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>

                    {/* Floating decorative shapes */}
                    <div className="absolute top-16 right-[15%] w-20 h-20 border-2 border-white/10 rounded-2xl rotate-12 animate-pulse"></div>
                    <div className="absolute bottom-20 left-[10%] w-16 h-16 border-2 border-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-[30%] right-[8%] w-12 h-12 bg-white/5 rounded-lg rotate-45"></div>

                    <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Left Content */}
                            <div className="flex flex-col gap-6" data-aos="fade-right">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
                                    <span className="material-icons-outlined text-yellow-300 text-lg">verified</span>
                                    <span className="text-white/90 text-sm font-medium">Cập nhật: {lastUpdated}</span>
                                </div>

                                <h1 className="text-white text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight tracking-tight">
                                    {title}
                                </h1>

                                <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-xl">
                                    {subtitle}
                                </p>

                                {/* Quick stats */}
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5">
                                        <span className="material-icons-outlined text-green-300 text-xl">schedule</span>
                                        <span className="text-white text-sm font-medium">Phản hồi nhanh</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5">
                                        <span className="material-icons-outlined text-yellow-300 text-xl">shield</span>
                                        <span className="text-white text-sm font-medium">Minh bạch 100%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right - 3D-style Icon */}
                            <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
                                <div className="relative">
                                    {/* Outer glow */}
                                    <div className="absolute inset-0 bg-white/10 rounded-[2rem] blur-2xl scale-110"></div>

                                    {/* Icon container */}
                                    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-[2rem] border border-white/20 shadow-2xl flex items-center justify-center">
                                        {/* Inner icon circle */}
                                        <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-white/15 rounded-[1.5rem] flex items-center justify-center shadow-inner">
                                            <span className="material-icons-outlined text-white" style={{ fontSize: '4.5rem' }}>{icon}</span>
                                        </div>

                                        {/* Orbiting dots */}
                                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg">
                                            <span className="material-icons text-primary text-base">star</span>
                                        </div>
                                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full shadow-lg"></div>
                                        <div className="absolute top-4 -left-4 w-5 h-5 bg-cyan-300 rounded-full shadow-lg opacity-70"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom wave */}
                    <div className="absolute bottom-0 left-0 right-0">
                        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                            <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white" />
                        </svg>
                    </div>
                </section>

                {/* ===== HIGHLIGHTS SECTION ===== */}
                {highlights && highlights.length > 0 && (
                    <section className="py-16 md:py-20 bg-white">
                        <div className="max-w-6xl mx-auto px-6 lg:px-8">
                            <div className="text-center mb-12" data-aos="fade-up">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                                    Điểm Nổi Bật
                                </h2>
                                <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                            </div>

                            <div className={`grid grid-cols-1 md:grid-cols-${Math.min(highlights.length, 3)} gap-6`}>
                                {highlights.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-white border-2 border-primary/20 hover:bg-primary hover:border-primary shadow-sm hover:shadow-2xl transition-all duration-300 cursor-default"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                            <span className="material-icons-outlined text-3xl">{item.icon}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors duration-300 text-center">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 group-hover:text-white/80 transition-colors duration-300 text-center leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ===== MAIN CONTENT ===== */}
                <section className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50/50">
                    <div className="max-w-5xl mx-auto px-4 md:px-8">
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-10 lg:p-12">
                            <div className="prose prose-lg max-w-none
                                prose-headings:text-slate-900 prose-headings:font-heading prose-headings:font-bold
                                prose-h2:text-xl prose-h2:md:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-200 prose-h2:flex prose-h2:items-center prose-h2:gap-3
                                prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-primary-dark
                                prose-p:text-slate-700 prose-p:leading-relaxed
                                prose-li:text-slate-700
                                prose-strong:text-slate-900
                                prose-table:border-collapse prose-table:w-full prose-table:rounded-xl prose-table:overflow-hidden
                                prose-th:bg-primary prose-th:text-white prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:text-sm prose-th:font-semibold
                                prose-td:border prose-td:border-slate-200 prose-td:px-4 prose-td:py-3 prose-td:text-sm
                                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                            ">
                                {children}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== PROCESS STEPS SECTION ===== */}
                {processSteps && processSteps.length > 0 && (
                    <section className="py-16 md:py-20 bg-gradient-to-b from-primary-light/20 to-white overflow-hidden">
                        <div className="max-w-6xl mx-auto px-4 lg:px-8">
                            <div className="text-center mb-14" data-aos="fade-up">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide">
                                    <span className="text-primary">Quy Trình </span>
                                    <span className="text-slate-800">Thực Hiện</span>
                                </h2>
                                <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4"></div>
                            </div>

                            {/* Desktop Timeline */}
                            <div className="hidden lg:block relative" data-aos="fade-up" data-aos-delay="100">
                                {/* Timeline line */}
                                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-primary-light rounded-full"></div>

                                <div className="space-y-8">
                                    {processSteps.map((step, index) => (
                                        <div key={index} className="relative pl-20 group" data-aos="fade-right" data-aos-delay={index * 80}>
                                            {/* Dot on timeline */}
                                            <div className="absolute left-[22px] top-6 w-5 h-5 bg-white border-4 border-primary rounded-full z-10 shadow-md group-hover:scale-125 transition-transform"></div>

                                            {/* Card */}
                                            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                                <div className="flex items-center gap-4 mb-2">
                                                    <span className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white rounded-xl font-bold text-sm shadow-sm">
                                                        {index + 1}
                                                    </span>
                                                    <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                                                </div>
                                                <p className="text-slate-600 text-sm leading-relaxed pl-14">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Timeline */}
                            <div className="lg:hidden space-y-5">
                                {processSteps.map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 60}
                                    >
                                        <div className="flex-shrink-0 w-11 h-11 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-base shadow-lg">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1 bg-white rounded-xl shadow-md p-4 border border-slate-100">
                                            <h4 className="font-bold text-slate-900 text-base mb-1">{step.title}</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ===== COMPANY INFO ===== */}
                <section className="py-12 bg-slate-50">
                    <div className="max-w-6xl mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                            {/* Company Info Card */}
                            <div className="lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 shadow-md border border-slate-200" data-aos="fade-right">
                                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <span className="material-icons-outlined text-primary">business</span>
                                    </div>
                                    Thông tin doanh nghiệp
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm text-slate-700">
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <span className="material-icons-outlined text-primary text-lg mt-0.5">apartment</span>
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Công ty</p>
                                                <p className="font-semibold text-slate-800">CÔNG TY TNHH TRUYỀN THÔNG GIẢI PHÁP SỐ NEMARK</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="material-icons-outlined text-primary text-lg mt-0.5">badge</span>
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">MST</p>
                                                <p className="font-medium">0111278699</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="material-icons-outlined text-primary text-lg mt-0.5">location_on</span>
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Địa chỉ</p>
                                                <p>Số nhà 19, Đường 452, Thôn Linh Sơn, Xã Hạ Bằng, Thành phố Hà Nội</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <span className="material-icons-outlined text-primary text-lg mt-0.5">phone</span>
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Hotline</p>
                                                <p className="font-semibold text-primary">0914 659 183</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="material-icons-outlined text-primary text-lg mt-0.5">email</span>
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Email</p>
                                                <p>support@nemarkdigital.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="material-icons-outlined text-primary text-lg mt-0.5">language</span>
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Website</p>
                                                <a href="https://nemarkdigital.com" className="text-primary hover:underline font-medium">nemarkdigital.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Card */}
                            <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200" data-aos="fade-left">
                                <div className="p-4 bg-primary text-white flex items-center gap-2">
                                    <span className="material-icons-outlined text-lg">map</span>
                                    <h4 className="font-bold text-sm uppercase tracking-wide">Địa chỉ văn phòng</h4>
                                </div>
                                <div className="h-[260px]">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6!2d105.7!3d21.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAwJzAwLjAiTiAxMDXCsDQyJzAwLjAiRQ!5e0!3m2!1svi!2svn!4v1"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Nemark Office Location"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== CTA WITH FORM ===== */}
                <CTAWithForm
                    title="Bạn Cần Hỗ Trợ Thêm?"
                    subtitle="Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết"
                />
            </main>

            <Footer />
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    )
}
