'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Solutions() {
    const t = useTranslations('solutions')

    const services = [
        {
            titleKey: 'items.webDev.title',
            descKey: 'items.webDev.description',
            url: '/dich-vu/thiet-ke-website',
            image: '/solutions/web-development.png',
            icon: 'code',
        },
        {
            titleKey: 'items.appDesign.title',
            descKey: 'items.appDesign.description',
            url: '/services/app-design',
            image: '/solutions/app-development.png',
            icon: 'phone_iphone',
        },
        {
            titleKey: 'items.uxui.title',
            descKey: 'items.uxui.description',
            url: '/services/app-design',
            image: '/solutions/ux-ui-workspace.png',
            icon: 'palette',
        },
        {
            titleKey: 'items.chatbot.title',
            descKey: 'items.chatbot.description',
            url: '/services/api-integration',
            image: '/solutions/tech-solutions.png',
            icon: 'smart_toy',
        },
        {
            titleKey: 'items.security.title',
            descKey: 'items.security.description',
            url: '/services/update-optimization',
            image: '/solutions/website-mockup.png',
            icon: 'shield',
        },
        {
            titleKey: 'items.operation.title',
            descKey: 'items.operation.description',
            url: '/services/website-operation',
            image: '/solutions/team-operation.png',
            icon: 'settings_suggest',
        },
    ]

    return (
        <section className="py-20 bg-slate-50">
            <div className="w-[85%] max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                        {t('subtitle')}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-base">
                        {t('description')}
                    </p>
                </div>

                {/* Cards Grid: 3 columns x 2 rows */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.url}
                            className="group relative h-72 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/25"
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                        >
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={t(service.titleKey)}
                                fill
                                quality={90}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-slate-900/10 group-hover:from-primary-dark/90 group-hover:via-primary-dark/50 transition-all duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-7 flex flex-col justify-end z-10">
                                {/* Icon Badge */}
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors duration-500">
                                    <span className="material-icons-outlined text-white text-2xl">
                                        {service.icon}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                                    {t(service.titleKey)}
                                </h3>
                                <p className="text-white/85 text-sm leading-relaxed max-h-0 opacity-0 overflow-hidden group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    {t(service.descKey)}
                                </p>

                                {/* CTA */}
                                <div className="flex items-center text-xs font-semibold text-white/70 mt-3 group-hover:text-white transition-colors duration-500">
                                    <span>{t('learnMore')}</span>
                                    <span className="material-icons-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform duration-300">
                                        arrow_forward
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
