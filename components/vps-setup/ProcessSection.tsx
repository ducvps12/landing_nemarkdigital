'use client'

import { useTranslations } from 'next-intl'

export default function ProcessSection() {
    const t = useTranslations('vpsSetupPage.process')

    const steps = [
        { number: '01', icon: 'assignment', titleKey: 's1Title', descKey: 's1Desc' },
        { number: '02', icon: 'tune', titleKey: 's2Title', descKey: 's2Desc' },
        { number: '03', icon: 'build_circle', titleKey: 's3Title', descKey: 's3Desc' },
        { number: '04', icon: 'volunteer_activism', titleKey: 's4Title', descKey: 's4Desc' },
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t('sectionLabel')}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">{t('title')}</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-emerald-200 via-teal-400 to-emerald-200" />
                    {steps.map((step, index) => (
                        <div key={index} className="relative text-center group" data-aos="fade-up" data-aos-delay={index * 150}>
                            <div className="relative mx-auto w-32 h-32 mb-6">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-100 rounded-full group-hover:from-emerald-100 group-hover:to-teal-200 transition-all duration-300" />
                                <div className="absolute inset-3 bg-white rounded-full shadow-lg flex flex-col items-center justify-center group-hover:shadow-xl transition-all duration-300">
                                    <span className="material-icons-outlined text-emerald-600 text-3xl group-hover:scale-110 transition-transform">{step.icon}</span>
                                </div>
                                <div className="absolute -top-1 -right-1 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-sm">{step.number}</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{t(step.titleKey)}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{t(step.descKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
