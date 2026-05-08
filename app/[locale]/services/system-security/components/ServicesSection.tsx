'use client'

export default function ServicesSection() {
    const configServices = [
        'Cấu hình Firewall & WAF chuyên dụng',
        'Hardening Server & Hệ điều hành',
        'Cấu hình SSL/TLS & HTTPS toàn bộ',
        'Thiết lập VPN & Mạng nội bộ an toàn'
    ]

    const securityServices = [
        'Quét & Loại bỏ Malware, Virus',
        'Phân quyền truy cập & Kiểm soát user',
        'Giám sát an ninh mạng (SIEM)',
        'Đào tạo nhân sự về bảo mật CNTT'
    ]

    return (
        <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
                        DỊCH VỤ <span className="text-primary">CẤU HÌNH</span> & <span className="text-primary">BẢO MẬT</span> HỆ THỐNG TẠI NEMARK
                    </h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Config Services */}
                    <div
                        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                        data-aos="fade-right"
                    >
                        <div className="bg-gradient-to-r from-primary to-primary px-6 py-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <span className="text-2xl">⚙️</span>
                                Dịch vụ cấu hình hệ thống
                            </h3>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-4">
                                {configServices.map((service, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-primary mt-1 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Security Services */}
                    <div
                        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                        data-aos="fade-left"
                    >
                        <div className="bg-gradient-to-r from-primary to-primary px-6 py-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <span className="text-2xl">🛡️</span>
                                Dịch vụ bảo mật & giám sát
                            </h3>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-4">
                                {securityServices.map((service, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-primary mt-1 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Decoration Bar */}
                <div className="mt-12 h-2 bg-primary rounded-full max-w-4xl mx-auto"></div>
            </div>
        </section>
    )
}
