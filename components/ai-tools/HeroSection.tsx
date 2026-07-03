'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

interface HeroSectionProps {
    onOpenContactModal: () => void
}

export default function HeroSection({ onOpenContactModal }: HeroSectionProps) {
    const t = useTranslations('aiToolsPage.hero')

    return (
        <section
            className="relative pt-36 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center min-h-[85vh]"
            style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0f172a 50%, #1e293b 100%)' }}
        >
            {/* Decorative background gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-7 max-w-2xl" data-aos="fade-right">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-white border border-blue-400/30 text-sm font-medium mb-6">
                            {t('badge')}
                        </span>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight uppercase">
                            {t('title1')}{t('titleHighlight')}
                        </h1>

                        <p className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
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

                    {/* Right Image */}
                    <div className="lg:col-span-5 w-full flex justify-center lg:justify-end animate-fade-in animate-float-delay" data-aos="fade-left">
                        <div className="relative w-full max-w-md md:max-w-lg aspect-square">
                            {/* Glow effect behind the image card */}
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2rem] blur opacity-25" />
                            
                            {/* Image container */}
                            <div className="relative w-full h-full bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl">
                                <Image
                                    src="/banner/ai-tools-hero-clean.png"
                                    alt="AI Tools Banner"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -top-3 -right-3 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-xs md:text-sm shadow-lg animate-float">
                                GPT-5.5 & Gemini
                            </div>
                            <div className="absolute -bottom-3 -left-3 bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-xs md:text-sm shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                                AI Integration
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animation Styles */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}
