import { useTranslations } from 'next-intl'

export default function ProcessSection() {
    const t = useTranslations('domainHostingPage.process')

    const steps = [
        { step: 1, titleKey: "s1Title", descKey: "s1Desc" },
        { step: 2, titleKey: "s2Title", descKey: "s2Desc" },
        { step: 3, titleKey: "s3Title", descKey: "s3Desc" },
        { step: 4, titleKey: "s4Title", descKey: "s4Desc" },
        { step: 5, titleKey: "s5Title", descKey: "s5Desc" },
        { step: 6, titleKey: "s6Title", descKey: "s6Desc" }
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Bar */}
                <div className="mb-12" data-aos="fade-down">
                    <div className="bg-primary text-white text-center py-4 rounded-lg">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            {t('title')}
                        </h2>
                    </div>
                </div>

                {/* Vertical Timeline */}
                <div className="space-y-8">
                    {steps.map((item, index) => (
                        <div
                            key={item.step}
                            className="relative flex items-start gap-6"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Connecting Line (except for last) */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-primary/30 -mb-8"></div>
                            )}

                            {/* Circle */}
                            <div className="relative z-10 shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-2xl">
                                    {item.step}
                                </span>
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                                <h3 className="font-bold text-xl text-gray-900 mb-2">
                                    {t('stepLabel')} {item.step}: {t(item.titleKey)}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {t(item.descKey)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
