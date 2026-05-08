'use client'

export default function BenefitsSection() {
    const benefits = [
        'Bảo vệ dữ liệu khách hàng & doanh nghiệp',
        'Ngăn chặn tấn công mạng & xâm nhập',
        'Tuân thủ tiêu chuẩn an ninh thông tin',
        'Giảm thiểu rủi ro & thiệt hại tài chính'
    ]

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
                        Lợi ích <span className="text-primary">sau khi triển khai</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Benefits List */}
                    <div data-aos="fade-right">
                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 bg-gradient-to-r from-primary-light/20 to-white p-4 rounded-xl border border-primary/20 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-800 font-medium text-lg">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="flex justify-center" data-aos="fade-left">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary-light/30 to-cyan-100 rounded-2xl blur-xl opacity-50"></div>
                            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                                <div className="w-[300px] h-[300px] flex items-center justify-center">
                                    <div className="text-center space-y-6">
                                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-4xl font-extrabold text-primary">100%</p>
                                            <p className="text-gray-500 text-sm mt-1">Bảo mật toàn diện</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-primary-light/20 rounded-lg p-3 text-center">
                                                <p className="text-xl font-bold text-primary">🔒</p>
                                                <p className="text-xs text-gray-500">Firewall</p>
                                            </div>
                                            <div className="bg-primary-light/20 rounded-lg p-3 text-center">
                                                <p className="text-xl font-bold text-primary">🛡️</p>
                                                <p className="text-xs text-gray-500">Anti-DDoS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
