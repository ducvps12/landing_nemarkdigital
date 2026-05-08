'use client'

export default function ServicesSection() {
    const managementServices = [
        'Giám sát hệ thống 24/7 (Monitoring)',
        'Quản lý Server & Cloud Infrastructure',
        'Sao lưu & Khôi phục dữ liệu (Backup & DR)',
        'Quản lý mạng nội bộ & VPN'
    ]

    const operationServices = [
        'Tối ưu hiệu suất Server & Database',
        'Cập nhật & Vá lỗi hệ thống (Patching)',
        'Quản trị tài khoản & Phân quyền',
        'Hỗ trợ kỹ thuật & Xử lý sự cố nhanh'
    ]

    return (
        <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
                        DỊCH VỤ <span className="text-primary">QUẢN LÝ</span> & <span className="text-primary">VẬN HÀNH</span> HẠ TẦNG TẠI NEMARK
                    </h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Management Services */}
                    <div
                        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                        data-aos="flip-left"
                        data-aos-duration="800"
                    >
                        <div className="bg-gradient-to-r from-primary to-primary px-6 py-4 relative overflow-hidden">
                            {/* Shimmer on header */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            <h3 className="text-xl font-bold text-white flex items-center gap-3 relative">
                                <span className="text-2xl group-hover:animate-bounce">🖥️</span>
                                Dịch vụ quản lý hạ tầng
                            </h3>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-4">
                                {managementServices.map((service, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                                        data-aos="fade-right"
                                        data-aos-delay={index * 100 + 200}
                                    >
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

                    {/* Operation Services */}
                    <div
                        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                        data-aos="flip-right"
                        data-aos-duration="800"
                    >
                        <div className="bg-gradient-to-r from-primary to-primary px-6 py-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            <h3 className="text-xl font-bold text-white flex items-center gap-3 relative">
                                <span className="text-2xl group-hover:animate-spin">⚙️</span>
                                Dịch vụ vận hành & hỗ trợ
                            </h3>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-4">
                                {operationServices.map((service, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                                        data-aos="fade-left"
                                        data-aos-delay={index * 100 + 200}
                                    >
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

                {/* Decoration Bar - Animated gradient */}
                <div className="mt-12 h-2 rounded-full max-w-4xl mx-auto overflow-hidden bg-gray-200" data-aos="zoom-in" data-aos-delay="300">
                    <div className="h-full bg-gradient-to-r from-primary via-primary-dark to-primary rounded-full animate-gradient-slide"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient-slide {
                    0% { background-position: 0% 50%; width: 0%; }
                    50% { width: 100%; }
                    100% { background-position: 200% 50%; width: 100%; }
                }
                .animate-gradient-slide {
                    animation: gradient-slide 2s ease-out forwards;
                    background-size: 200% auto;
                }
            `}</style>
        </section>
    )
}
