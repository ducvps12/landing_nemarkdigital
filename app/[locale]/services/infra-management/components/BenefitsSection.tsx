'use client'

export default function BenefitsSection() {
    const benefits = [
        'Giảm thiểu downtime & Đảm bảo SLA 99.9%',
        'Tiết kiệm chi phí thuê nhân sự IT nội bộ',
        'Tăng hiệu suất hệ thống & Tốc độ xử lý',
        'Chủ động phòng ngừa rủi ro & Sự cố'
    ]

    return (
        <section className="py-16 md:py-20 bg-white overflow-hidden">
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
                    <div>
                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 bg-gradient-to-r from-primary-light/20 to-white p-4 rounded-xl border border-primary/20 hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 group"
                                    data-aos="fade-right"
                                    data-aos-delay={index * 150}
                                >
                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                                        <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-800 font-medium text-lg group-hover:text-primary transition-colors duration-300">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="200">
                        <div className="relative">
                            {/* Animated pulse rings */}
                            <div className="absolute -inset-8 rounded-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-cyan-100 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                                <div className="absolute inset-[-4px] border border-primary/10 rounded-2xl animate-ping-slow"></div>
                            </div>

                            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                                <div className="w-[300px] h-[300px] flex items-center justify-center">
                                    <div className="text-center space-y-6">
                                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div data-aos="zoom-in" data-aos-delay="500">
                                            <p className="text-4xl font-extrabold text-primary">99.9%</p>
                                            <p className="text-gray-500 text-sm mt-1">Cam kết Uptime</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-primary-light/20 rounded-lg p-3 text-center hover:bg-primary-light/30 transition-colors duration-300" data-aos="zoom-in" data-aos-delay="600">
                                                <p className="text-xl font-bold text-primary">24/7</p>
                                                <p className="text-xs text-gray-500">Giám sát</p>
                                            </div>
                                            <div className="bg-primary-light/20 rounded-lg p-3 text-center hover:bg-primary-light/30 transition-colors duration-300" data-aos="zoom-in" data-aos-delay="700">
                                                <p className="text-xl font-bold text-primary">15 phút</p>
                                                <p className="text-xs text-gray-500">Phản hồi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes ping-slow {
                    0% { transform: scale(1); opacity: 0.5; }
                    75%, 100% { transform: scale(1.05); opacity: 0; }
                }
                .animate-ping-slow {
                    animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
            `}</style>
        </section>
    )
}
