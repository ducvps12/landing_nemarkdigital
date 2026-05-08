'use client'

import { useTranslations } from 'next-intl'

interface PricingSectionProps {
    onOpenContactModal: () => void
}

export default function PricingSection({ onOpenContactModal }: PricingSectionProps) {
    const t = useTranslations('vpsSetupPage.pricing')

    const plans = [
        {
            nameKey: 'basicName', icon: '🛠️', tagKey: 'basicTag', descKey: 'basicDesc',
            featureKeys: ['basicF1', 'basicF2', 'basicF3', 'basicF4', 'basicF5', 'basicF6'],
            gradient: 'from-slate-600 to-slate-700', popular: false,
        },
        {
            nameKey: 'proName', icon: '🚀', tagKey: 'proTag', descKey: 'proDesc',
            featureKeys: ['proF1', 'proF2', 'proF3', 'proF4', 'proF5', 'proF6', 'proF7', 'proF8'],
            gradient: 'from-emerald-500 to-teal-600', popular: true,
        },
        {
            nameKey: 'gameName', icon: '🎮', tagKey: 'gameTag', descKey: 'gameDesc',
            featureKeys: ['gameF1', 'gameF2', 'gameF3', 'gameF4', 'gameF5', 'gameF6', 'gameF7', 'gameF8'],
            gradient: 'from-purple-500 to-indigo-600', popular: false,
        },
    ]

    return (
        <section id="pricing" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t('sectionLabel')}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">{t('title')}</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${plan.popular ? 'shadow-xl ring-2 ring-emerald-500/20' : 'shadow-lg border border-gray-100'}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0">
                                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                                        {t('popular')}
                                    </div>
                                </div>
                            )}

                            <div className={`bg-gradient-to-br ${plan.gradient} p-8 text-white`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-4xl">{plan.icon}</span>
                                    <div>
                                        <h3 className="text-2xl font-bold">{t(plan.nameKey)}</h3>
                                        <p className="text-white/70 text-sm">{t(plan.tagKey)}</p>
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold">{t('contactPrice')}</span>
                                </div>
                                <p className="text-white/80 text-sm mt-2">{t(plan.descKey)}</p>
                            </div>

                            <div className="p-8">
                                <ul className="space-y-4">
                                    {plan.featureKeys.map((fKey, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <span className="material-icons-outlined text-emerald-500 text-lg mt-0.5">check_circle</span>
                                            <span className="text-gray-600 text-sm">{t(fKey)}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={onOpenContactModal}
                                    className={`w-full mt-8 py-3.5 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] ${plan.popular
                                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                >
                                    {t('cta')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100" data-aos="fade-up">
                    <div className="flex items-start gap-4">
                        <span className="text-3xl">🎮</span>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">{t('gameNoteTitle')}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{t('gameNoteDesc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
