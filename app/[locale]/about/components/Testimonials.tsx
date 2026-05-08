'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

const colorClasses: { [key: string]: { bg: string; text: string; border: string } } = {
    blue: { bg: 'from-primary-light/30 to-primary-light/50', text: 'text-primary', border: 'border-primary/30' },
    purple: { bg: 'from-purple-100 to-purple-200', text: 'text-purple-400', border: 'border-purple-500/30' },
    orange: { bg: 'from-orange-100 to-orange-200', text: 'text-orange-400', border: 'border-orange-500/30' },
    pink: { bg: 'from-pink-100 to-pink-200', text: 'text-pink-400', border: 'border-pink-500/30' }
}

export default function Testimonials() {
    const [openIndex, setOpenIndex] = useState(0)
    const t = useTranslations('aboutPage.testimonials')

    const testimonials = [
        { nameKey: 't1Name', roleKey: 't1Role', initials: 'VT', industryKey: 't1Industry', quoteKey: 't1Quote', color: 'blue' },
        { nameKey: 't2Name', roleKey: 't2Role', initials: 'PT', industryKey: 't2Industry', quoteKey: 't2Quote', color: 'purple' },
        { nameKey: 't3Name', roleKey: 't3Role', initials: 'HN', industryKey: 't3Industry', quoteKey: 't3Quote', color: 'orange' },
        { nameKey: 't4Name', roleKey: 't4Role', initials: 'KA', industryKey: 't4Industry', quoteKey: 't4Quote', color: 'pink' }
    ]

    return (
        <section id="partners" className="py-20 lg:py-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div className="flex flex-col justify-center h-full space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-[3px] bg-primary" />
                                <p className="text-primary text-base md:text-lg font-bold tracking-widest uppercase">
                                    {t('sectionLabel')}
                                </p>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight tracking-tight text-text-main">
                                {t('title1')} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                                    {t('title2')}
                                </span>
                            </h2>
                            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
                                {t('subtitle')}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 w-full">
                            {testimonials.map((item, index) => {
                                const colors = colorClasses[item.color]
                                const isOpen = openIndex === index

                                return (
                                    <div
                                        key={index}
                                        className={`group bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'ring-2 ring-primary/50 border-primary shadow-md' : 'hover:border-primary/50 shadow-sm'}`}
                                    >
                                        <button
                                            className="flex items-center justify-between p-5 w-full cursor-pointer select-none bg-transparent text-left"
                                            onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center ${colors.text} font-bold text-lg shrink-0`}>
                                                    {item.initials}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className={`text-base font-bold ${isOpen ? 'text-primary' : 'text-text-main'} transition-colors`}>
                                                        {t(item.nameKey)}
                                                    </span>
                                                    <span className="text-sm text-text-secondary">
                                                        {t(item.roleKey)}
                                                    </span>
                                                </div>
                                            </div>
                                            <span className={`material-icons-outlined text-slate-600 ${isOpen ? 'text-primary rotate-180' : ''} transition-transform duration-300`}>
                                                expand_more
                                            </span>
                                        </button>

                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60' : 'max-h-0'}`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="px-5 pb-6 pt-0 border-t border-slate-200">
                                                <div className="mt-4 flex flex-wrap gap-2 mb-3">
                                                    <span className={`inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium ${colors.text} ring-1 ring-inset ${colors.border}`}>
                                                        {t(item.industryKey)}
                                                    </span>
                                                </div>
                                                <blockquote className={`text-text-secondary text-base italic leading-relaxed pl-4 border-l-2 ${colors.border}`}>
                                                    {t(item.quoteKey)}
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="h-full relative group">
                        <div className="lg:sticky lg:top-24 w-full">
                            <div className="relative w-full aspect-square lg:h-[600px] lg:aspect-auto rounded-2xl overflow-hidden bg-white">
                                <img src="/download (2).png" alt={t('trustedPartner')} className="w-full bg-white h-full object-cover" />
                                <div className="absolute bottom-0 left-0 w-full p-8">
                                    <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-lg">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="flex -space-x-3">
                                                <img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB49ZwHKsDf2ZeZaa28OaQ8kHO4bdWQ2-55c4SJjLGr6NkZxTvOBW1rBpY7Aoa9CCapdsrExcpQaztnNPeAlcu41ic5pzB8agF7d6oegx-v0dJsnty0HoYvMQiPF-5fLNKTA-zfYERryO7aMM1m1t5-MILsGiqz4KrycdftO6qke_7CxN-I7BtYS4MsVaewvBiD2dJkFyWO6pzam6LjdHJ4IFOM8DSN0diUNAlP0u7b9fQx5UvCfqSN2QNVX3v2klA_Xbhm3zOfBW0" />
                                                <img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZdhT6CiyCcQ4Pj72QLsmFVvRF2f6mRkncYkkHDGk00v7s_KDj2slghdQdDQ0TdzMIdzY8yzdkdq9m9QwWkgbcsdAsb1Q0DtXPQZ0JgkQK9XzDwqSJkuPRGi3-XsUGw4Rjf5yaIYEsbdBovaaMHX7zydDsI4KMQSQY65QhkweFtQEV34-QMwR_MHBF0MzXLsVQmdtHgb3J6TuEdg1g7EAwOs6FYNeHGyJFpkanyKFDFwzUJ6ulM2Bm63F7tizcaCG0js8_2X-PI9k" />
                                                <img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU9AfBidEnCAuD96dIz36x1MbbOceSLcIew3MnjQ6-QOs7RPti-bDa7fT29s_PUvLh-PRZ2S5rC6Z4IN1OJZM1sRO-1EGuWt3I_EHcp3WzQKaitzGGFAJ8YkcGl7tCU-kGfIHZevXEDq5Fa-y2zvrOuY1DaMoKVkIROym0sSeKSLzxohE0vRV0h8o5yV7BSa32ilNT86xu8cUnrRHZmArRFCmcZRbuMbdbhF1lVOSVPsiw4cIDytiwfwsDz4REHKlA3Fd98-G63D4" />
                                                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-xs font-bold text-white">+150</div>
                                            </div>
                                        </div>
                                        <p className="text-text-main font-medium text-lg mb-1">{t('trustedPartner')}</p>
                                        <p className="text-text-secondary text-sm">{t('partnerCount')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
