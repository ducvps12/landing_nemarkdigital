'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'
import Image from 'next/image'

export default function CareersPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const tHero = useTranslations('careersPage.hero')
    const tBen = useTranslations('careersPage.benefits')
    const tPos = useTranslations('careersPage.positions')

    const benefitIcons = ['workspace_premium', 'health_and_safety', 'schedule', 'school', 'celebration', 'trending_up']
    const jobKeys = ['job1', 'job2', 'job3'] as const

    return (
        <div className="min-h-screen bg-white text-black">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            <main className="flex flex-col items-center w-full">
                {/* Hero Section */}
                <div className="w-full relative overflow-hidden min-h-[60vh] flex items-center pt-20">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/careers/hero.png"
                            alt="Careers at Nemark"
                            fill
                            className="object-cover"
                            style={{ objectPosition: 'right 30%' }}
                            priority
                        />
                        {/* Gradient overlay: dark on the left for text readability, fading to transparent on the right */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/60 to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 w-full">
                        <div className="max-w-2xl" data-aos="fade-right">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                                {tHero('title')}
                            </h1>
                            <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
                                {tHero('subtitle')}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#positions"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-all shadow-lg hover:-translate-y-0.5"
                                >
                                    <span className="material-icons-outlined text-[20px]">work</span>
                                    <span>{tHero('viewPositions')}</span>
                                </a>
                                <a
                                    href="#culture"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all hover:-translate-y-0.5"
                                >
                                    <span className="material-icons-outlined text-[20px]">groups</span>
                                    <span>{tHero('companyCulture')}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Join Us */}
                <section id="culture" className="w-full py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                                {tBen('sectionLabel')}
                            </h2>
                            <h3 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">
                                {tBen('title')}
                            </h3>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                {tBen('subtitle')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefitIcons.map((icon, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                        <span className="material-icons-outlined text-4xl text-primary">
                                            {icon}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">
                                        {tBen(`b${index + 1}Title`)}
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        {tBen(`b${index + 1}Desc`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Job Positions */}
                <section id="positions" className="w-full py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                                {tPos('sectionLabel')}
                            </h2>
                            <h3 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">
                                {tPos('title')}
                            </h3>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                {tPos('subtitle')}
                            </p>
                        </div>

                        <div className="space-y-6">
                            {jobKeys.map((jobKey, index) => (
                                <div
                                    key={jobKey}
                                    className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                                                    {tPos(`${jobKey}.department`)}
                                                </span>
                                                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full flex items-center gap-1">
                                                    <span className="material-icons-outlined text-sm">location_on</span>
                                                    {tPos(`${jobKey}.location`)}
                                                </span>
                                                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                                                    {tPos(`${jobKey}.type`)}
                                                </span>
                                            </div>

                                            <h4 className="text-2xl font-bold text-slate-900 mb-3">
                                                {tPos(`${jobKey}.title`)}
                                            </h4>

                                            <p className="text-slate-600 mb-6 leading-relaxed">
                                                {tPos(`${jobKey}.description`)}
                                            </p>

                                            {/* Requirements */}
                                            <div className="mb-6">
                                                <h5 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                                    <span className="material-icons-outlined text-primary">checklist</span>
                                                    {tPos('requirementsLabel')}
                                                </h5>
                                                <ul className="space-y-2">
                                                    {[1, 2, 3, 4, 5].map((i) => (
                                                        <li key={i} className="flex items-start gap-2 text-slate-600">
                                                            <span className="material-icons-outlined text-sm text-primary mt-0.5">check_circle</span>
                                                            <span>{tPos(`${jobKey}.req${i}`)}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Benefits */}
                                            <div>
                                                <h5 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                                    <span className="material-icons-outlined text-primary">card_giftcard</span>
                                                    {tPos('benefitsLabel')}
                                                </h5>
                                                <ul className="space-y-2">
                                                    {[1, 2, 3, 4, 5].map((i) => (
                                                        <li key={i} className="flex items-start gap-2 text-slate-600">
                                                            <span className="material-icons-outlined text-sm text-green-500 mt-0.5">star</span>
                                                            <span>{tPos(`${jobKey}.ben${i}`)}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Right: Salary & Apply */}
                                        <div className="lg:w-64 flex-shrink-0">
                                            <div className="bg-gradient-to-br from-primary-dark to-primary rounded-xl p-6 text-white text-center mb-4">
                                                <div className="text-sm opacity-90 mb-2">{tPos('salaryLabel')}</div>
                                                <div className="text-2xl font-bold">{tPos(`${jobKey}.salary`)}</div>
                                                <div className="text-sm opacity-90 mt-1">{tPos('perMonth')}</div>
                                            </div>
                                            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                                                <span className="material-icons-outlined">send</span>
                                                <span>{tPos('applyNow')}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


            </main>

            <Footer />

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    )
}
