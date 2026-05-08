'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import ContactModal from '@/components/common/modal/ContactModal'

export default function HostingPricingSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const t = useTranslations('domainHostingPage.hosting')

    const hostingPlans = [
        {
            nameKey: "p1",
            price: "27,000đ",
            storage: "2GB SSD",
            cpu: "1 Core / 512MB",
            domain: "1 Domain",
            mysql: "2 MySQL"
        },
        {
            nameKey: "p2",
            price: "33,750đ",
            storage: "3GB SSD",
            cpu: "1 Core / 1GB",
            domain: "2 Domain",
            mysql: "4 MySQL"
        },
        {
            nameKey: "p3",
            price: "52,500đ",
            storage: "4GB SSD",
            cpu: "1 Core / 1GB",
            domain: "2 Domain",
            mysql: "4 MySQL"
        },
        {
            nameKey: "p4",
            price: "66,750đ",
            storage: "6GB SSD",
            cpu: "1.5 Core / 1.2GB",
            domain: "3 Domain",
            mysql: "6 MySQL"
        },
        {
            nameKey: "p5",
            price: "89,250đ",
            storage: "8GB SSD",
            cpu: "2 Core / 1.5GB",
            domain: "4 Domain",
            mysql: "8 MySQL"
        },
        {
            nameKey: "p6",
            price: "133,750đ",
            storage: "10GB SSD",
            cpu: "2 Core / 2GB",
            domain: "6 Domain",
            mysql: "12 MySQL"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Bar */}
                <div className="mb-12" data-aos="fade-up">
                    <div className="bg-primary text-white text-center py-4 rounded-lg">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            {t('title')}
                        </h2>
                    </div>
                </div>

                {/* Hosting Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hostingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            {/* Plan Name */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center pb-3 border-b-2 border-primary">
                                {t(`plans.${plan.nameKey}`)}
                            </h3>

                            {/* Price */}
                            <div className="text-center mb-6">
                                <p className="text-2xl md:text-3xl font-bold text-primary">
                                    {plan.price} / {t('perMonth')}
                                </p>
                            </div>

                            {/* Specs */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700 text-sm">{t('storageLabel')} <strong>{plan.storage}</strong></span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700 text-sm">{t('cpuLabel')} <strong>{plan.cpu}</strong></span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700 text-sm">{t('domainLabel')} <strong>{plan.domain} / {plan.mysql}</strong></span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full mt-6 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                            >
                                {t('cta')}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
