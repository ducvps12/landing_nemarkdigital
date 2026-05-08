'use client'

import { useTranslations } from 'next-intl'

export default function Introduction() {
    const t = useTranslations('aboutPage.introduction')

    return (
        <section className="relative py-16 lg:py-20 bg-primary-light/20 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-10" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary leading-tight tracking-tight">
                        {t('title1')}
                        <br />
                        {t('title2')}
                    </h2>
                </div>
                <div className="space-y-6 text-base md:text-lg leading-relaxed text-text-main" data-aos="fade-up" data-aos-delay="100">
                    <p dangerouslySetInnerHTML={{ __html: t.raw('p1') }} />
                    <p dangerouslySetInnerHTML={{ __html: t.raw('p2') }} />
                    <p dangerouslySetInnerHTML={{ __html: t.raw('p3') }} />
                </div>
            </div>
        </section>
    )
}
