'use client'

import { useTranslations } from 'next-intl'

interface Service {
    title: string
    icon: string
    features: string[]
    link: string
}

export default function Services() {
    const t = useTranslations('services')

    const serviceKeys = ['websiteDesign', 'websiteSolutions', 'infrastructure', 'maintenance', 'appDesign', 'seoMarketing', 'crm', 'customApp']
    const serviceIcons = ['web', 'settings', 'dns', 'build', 'smartphone', 'trending_up', 'badge', 'code']
    const serviceLinks = [
        '/dich-vu/thiet-ke-website',
        '/services/website-operation',
        '/services/domain-hosting',
        '/services/website-maintenance',
        '/services/app-design',
        '/services/seo',
        '/services/api-integration',
        '/services/app-design'
    ]

    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
            <div className="w-[80%] mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                        {t('subtitle')}
                    </h2>
                    <h3 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">
                        {t('title')}
                    </h3>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>

                {/* Services Grid with Gaps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {serviceKeys.map((key, index) => {
                        const features = t.raw(`items.${key}.features`) as string[]
                        return (
                            <div
                                key={index}
                                className="relative group bg-gradient-to-b from-primary-dark to-primary rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                            >
                                {/* Icon and Title - Same Row */}
                                <div className="flex items-center gap-4 mb-6">
                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="material-icons-outlined text-white text-3xl">
                                            {serviceIcons[index]}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base font-bold text-white leading-tight">
                                        {t(`items.${key}.title`)}
                                    </h3>
                                </div>

                                {/* Features List */}
                                <ul className="space-y-3 flex-grow">
                                    {features.map((feature: string, idx: number) => (
                                        <li
                                            key={idx}
                                            className="text-white/90 text-sm flex items-start gap-2"
                                        >
                                            <span className="text-white mt-1">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Link - Fixed at Bottom */}
                                <div className="text-center mt-6 pt-6 border-t border-white/20">
                                    <a
                                        href={serviceLinks[index]}
                                        className="inline-flex items-center text-white font-bold text-sm hover:gap-2 transition-all group-hover:underline"
                                    >
                                        {t('detail')}
                                        <span className="ml-1 group-hover:translate-x-1 transition-transform">›</span>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
