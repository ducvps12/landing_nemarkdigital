'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Introduction2() {
    const t = useTranslations('intro2')

    // Row 1: 2-1-1 layout (3 cards)
    const row1Cards = [
        {
            image: '/introduct2/team-trust.png',
            title: t('row1.card1.title'),
            description: t('row1.card1.description'),
            colSpan: 2,
            height: 'h-80',
        },
        {
            image: '/introduct2/support-247.png',
            title: t('row1.card2.title'),
            description: t('row1.card2.description'),
            colSpan: 1,
            height: 'h-80',
        },
        {
            image: '/introduct2/security.png',
            title: t('row1.card3.title'),
            description: t('row1.card3.description'),
            colSpan: 1,
            height: 'h-80',
        },
    ]

    // Row 2: 1-1-1-1 layout (4 cards)
    const row2Cards = [
        {
            image: '/introduct2/multi-device.png',
            title: t('row2.card1.title'),
            description: t('row2.card1.description'),
        },
        {
            image: '/introduct2/hero-team.png',
            title: t('row2.card2.title'),
            description: t('row2.card2.description'),
        },
        {
            image: '/introduct2/customize.png',
            title: t('row2.card3.title'),
            description: t('row2.card3.description'),
        },
        {
            image: '/introduct2/team-flexible.png',
            title: t('row2.card4.title'),
            description: t('row2.card4.description'),
        },
    ]

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="w-[85%] max-w-7xl mx-auto">
                {/* Row 1: 2-1-1 layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-5" data-aos="fade-up">
                    {row1Cards.map((card, index) => (
                        <div
                            key={index}
                            className={`group relative ${card.height} rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 ${card.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                        >
                            {/* Background Image */}
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                quality={90}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/10 group-hover:from-primary-dark/90 group-hover:via-primary-dark/50 transition-all duration-500" />

                            {/* Content */}
                            <div className="relative h-full p-7 md:p-9 flex flex-col justify-end z-10">
                                <h4 className="text-xl md:text-2xl font-extrabold text-white mb-3 drop-shadow-lg leading-tight">
                                    {card.title}
                                </h4>
                                <p className="text-white/90 text-sm leading-relaxed max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Row 2: 1-1-1-1 layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-aos="fade-up">
                    {row2Cards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                        >
                            {/* Background Image */}
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                quality={90}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/10 group-hover:from-primary-dark/90 group-hover:via-primary-dark/50 transition-all duration-500" />

                            {/* Content */}
                            <div className="relative h-full p-6 flex flex-col justify-end z-10">
                                <h4 className="text-lg font-extrabold text-white mb-2 drop-shadow-lg">
                                    {card.title}
                                </h4>
                                <p className="text-white/90 text-xs leading-relaxed max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
