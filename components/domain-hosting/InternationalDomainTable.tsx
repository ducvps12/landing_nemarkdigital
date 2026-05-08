import { useTranslations } from 'next-intl'

export default function InternationalDomainTable() {
    const t = useTranslations('domainHostingPage.intlDomain')

    const intlDomains = [
        { tld: ".com", registration: "249,000đ", renewal: "319,000đ", transfer: "239,000đ" },
        { tld: ".net", registration: "169,000đ", renewal: "339,000đ", transfer: "276,000đ" },
        { tld: ".org", registration: "229,000đ", renewal: "349,000đ", transfer: "307,000đ" },
        { tld: ".info", registration: "110,000đ", renewal: "459,000đ", transfer: "404,000đ" },
        { tld: ".biz", registration: "320,000đ", renewal: "340,000đ", transfer: "310,000đ" },
        { tld: ".asia", registration: "350,000đ", renewal: "370,000đ", transfer: "340,000đ" },
        { tld: ".vip", registration: "350,000đ", renewal: "370,000đ", transfer: "330,000đ" }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Bar */}
                <div className="mb-8" data-aos="fade-up">
                    <div className="text-primary text-center py-4 rounded-lg">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            {t('title')}
                        </h2>
                    </div>
                </div>

                {/* Pricing Table */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200" data-aos="fade-left" data-aos-delay="100">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="px-6 py-4 text-left font-bold">{t('thCategory')}</th>
                                    <th className="px-6 py-4 text-left font-bold">{t('thTld')}</th>
                                    <th className="px-6 py-4 text-center font-bold">{t('thRegistration')}</th>
                                    <th className="px-6 py-4 text-center font-bold">{t('thRenewal')}</th>
                                    <th className="px-6 py-4 text-center font-bold">{t('thTransfer')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {intlDomains.map((domain, index) => (
                                    <tr
                                        key={index}
                                        className={`border-t border-gray-200 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                            }`}
                                    >
                                        <td className="px-6 py-4 font-bold text-gray-900">
                                            {index === 0 && t('categoryLabel')}
                                        </td>
                                        <td className="px-6 py-4 text-gray-700 font-medium">
                                            {domain.tld}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-primary font-bold text-lg">
                                                {domain.registration}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-primary font-bold text-lg">
                                                {domain.renewal}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-primary font-bold text-lg">
                                                {domain.transfer}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Important Note */}
                <div className="mt-8 bg-blue-50 border-l-4 border-primary p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                    <p className="text-gray-800 leading-relaxed">
                        <strong className="text-primary">{t('importantNote')}</strong> {t('importantText')}{' '}
                        <strong className="text-primary">0914659183</strong> {t('importantCta')}
                    </p>
                </div>

                {/* Note */}
                <div className="mt-6 text-center text-gray-600 text-sm" data-aos="fade-up" data-aos-delay="300">
                    <p>{t('note')}</p>
                </div>
            </div>
        </section>
    );
}
