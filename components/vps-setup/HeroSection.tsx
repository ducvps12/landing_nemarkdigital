'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

interface HeroSectionProps {
    onOpenContactModal: () => void
}

export default function HeroSection({ onOpenContactModal }: HeroSectionProps) {
    const t = useTranslations('vpsSetupPage.hero')

    return (
        <section className="relative py-32 min-h-[70vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/banner/vps-setup-hero-v2.png"
                    alt="VPS Setup Banner"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Gradient Overlay - fade from left to right */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl" data-aos="fade-right">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-white border border-emerald-400/30 text-sm font-medium mb-6">
                        {t('badge')}
                    </span>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight uppercase">
                        {t('title1')}{t('titleHighlight')}
                    </h1>

                    <p className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                        {t('title2')}
                    </p>

                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        {t('subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#pricing"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-dark transition-all shadow-lg hover:scale-105"
                        >
                            {t('viewPricing')}
                        </a>
                        <button
                            onClick={onOpenContactModal}
                            className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-300 text-base font-medium rounded-lg text-white hover:bg-white/10 transition-all hover:border-white"
                        >
                            {t('consultNow')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
