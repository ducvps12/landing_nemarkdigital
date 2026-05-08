'use client'

import { useTranslations } from 'next-intl'

export default function BenefitsSection() {
    const t = useTranslations('vpsSetupPage.benefits')

    const benefits = [
        { icon: 'speed', titleKey: 'b1Title', descKey: 'b1Desc', gradient: 'from-emerald-500 to-teal-500' },
        { icon: 'security', titleKey: 'b2Title', descKey: 'b2Desc', gradient: 'from-blue-500 to-indigo-500' },
        { icon: 'sports_esports', titleKey: 'b3Title', descKey: 'b3Desc', gradient: 'from-purple-500 to-pink-500' },
        { icon: 'cloud_upload', titleKey: 'b4Title', descKey: 'b4Desc', gradient: 'from-orange-500 to-red-500' },
        { icon: 'insights', titleKey: 'b5Title', descKey: 'b5Desc', gradient: 'from-cyan-500 to-blue-500' },
        { icon: 'engineering', titleKey: 'b6Title', descKey: 'b6Desc', gradient: 'from-amber-500 to-yellow-500' },
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t('sectionLabel')}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">{t('title')}</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-1 bg-white"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <span className="material-icons-outlined text-white text-2xl">{benefit.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t(benefit.titleKey)}</h3>
                            <p className="text-gray-500 leading-relaxed">{t(benefit.descKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
