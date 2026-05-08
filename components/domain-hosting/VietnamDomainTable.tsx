import { useTranslations } from 'next-intl'

export default function VietnamDomainTable() {
    const t = useTranslations('domainHostingPage.vnDomain')

    const vnDomains = [
        {
            tld: ".vn",
            registration: "550,000đ",
            renewal: "450,000đ",
            transfer: "450,000đ"
        },
        {
            tld: ".com.vn | .net.vn | .biz.vn",
            registration: "450,000đ",
            renewal: "350,000đ",
            transfer: "350,000đ"
        },
        {
            tld: ".edu.vn | .info.vn | .pro.vn | .org.vn | .gov.vn",
            registration: "270,000đ",
            renewal: "250,000đ",
            transfer: "250,000đ"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
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
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200" data-aos="fade-right" data-aos-delay="100">
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
                                {vnDomains.map((domain, index) => (
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

                {/* Note */}
                <div className="mt-6 text-center text-gray-600 text-sm" data-aos="fade-up" data-aos-delay="200">
                    <p>{t('note')}</p>
                </div>
            </div>
        </section>
    );
}
