'use client'

import { useTranslations } from 'next-intl'

export default function CultureBanner() {
    const t = useTranslations('aboutPage.culture')

    return (
        <section className="w-full relative group overflow-hidden">
            <div className="absolute inset-0 bg-slate-900 z-0">
                <img
                    alt="Large corporate team collaborating in a modern office environment"
                    className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEclkTau-1q1zPKHuX4taZTVkrUlTjJ4_QzximgZmrmaRo4HZVcGh6jRU54LduOEBvx-PZwuw059qCtkcr8hFY8EXHC4II_issYSbbR6yToLQyeNi0kTaX9jDUQRqvM3T4593XmlTUlfhD2_zfsGRHGU10N2F9KX90CJBKgXQFBDq3b3OvwdCk6zUBHhXpmOwtT5QLjYUabpYvNJlMm-BPAB8w8B-Olf69h3VpVktCmEr2oLTAf22cQlMZysHpBTXcqCHGToWYlPw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center" data-aos="fade-up">
                <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
                    {t('badge')}
                </span>

                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight drop-shadow-md">
                    {t('title')}
                </h2>

                <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                    {t('subtitle')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                        <span>{t('joinTeam')}</span>
                        <span className="material-icons-outlined text-lg">arrow_forward</span>
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg backdrop-blur-md border border-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                        <span>{t('learnMore')}</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
