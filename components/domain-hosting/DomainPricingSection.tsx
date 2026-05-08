'use client'
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl'

export default function DomainPricingSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const t = useTranslations('domainHostingPage.domain')

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollPosition = 0;
        const scroll = () => {
            scrollPosition += 1;
            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }
            scrollContainer.scrollLeft = scrollPosition;
        };

        const intervalId = setInterval(scroll, 30);
        return () => clearInterval(intervalId);
    }, []);

    const domains = ['.vn', '.com', '.net', '.org', '.info', '.biz', '.asia', '.vip', '.edu.vn', '.com.vn', '.net.vn'];
    const doubleDomains = [...domains, ...domains]; // Duplicate for seamless loop

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Bar */}
                <div className="mb-8" data-aos="fade-up">
                    <div className=" text-primary text-center py-4 rounded-lg">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            {t('title')}
                        </h2>
                    </div>
                </div>

                {/* Scrolling Domain Names */}
                <div className="mb-8 overflow-hidden" data-aos="fade-left" data-aos-delay="100">
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-hidden whitespace-nowrap"
                        style={{ scrollBehavior: 'auto' }}
                    >
                        {doubleDomains.map((domain, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center justify-center bg-primary/10 text-primary font-bold px-6 py-3 rounded-full border-2 border-primary shrink-0"
                            >
                                {domain}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Domain Pricing Table */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200" data-aos="fade-up" data-aos-delay="200">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-6 py-4 text-left font-bold text-gray-900">{t('thName')}</th>
                                <th className="px-6 py-4 text-center font-bold text-gray-900">{t('thPrice')}</th>
                                <th className="px-6 py-4 text-center font-bold text-gray-900">{t('thNote')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-gray-200 hover:bg-gray-50">
                                <td className="px-6 py-4 font-bold text-primary text-lg">.vn</td>
                                <td className="px-6 py-4 text-center text-gray-700">
                                    <span className="text-red-600 font-bold">{t('vnSeeDetails')}</span>
                                </td>
                                <td className="px-6 py-4 text-center text-sm text-gray-600">
                                    {t('vnMultiType')}
                                </td>
                            </tr>
                            <tr className="border-t border-gray-200 hover:bg-gray-50">
                                <td className="px-6 py-4 font-bold text-primary text-lg">.com</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="text-2xl font-bold text-primary">350,000 VNĐ</span>
                                </td>
                                <td className="px-6 py-4 text-center text-sm text-gray-600">
                                    {t('comMostPopular')}
                                </td>
                            </tr>
                            <tr className="border-t border-gray-200 hover:bg-gray-50">
                                <td className="px-6 py-4 font-bold text-primary text-lg">.net</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="text-2xl font-bold text-primary">400,000 VNĐ</span>
                                </td>
                                <td className="px-6 py-4 text-center text-sm text-gray-600">
                                    {t('netNetwork')}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Note */}
                <div className="mt-6 text-center text-gray-600 text-sm" data-aos="fade-up" data-aos-delay="300">
                    <p>{t('priceNote')}</p>
                </div>
            </div>
        </section>
    );
}
