export default function BenefitsSection() {
    const benefits = [
        {
            title: "Tăng tốc độ & trải nghiệm",
            description: "Tối ưu tốc độ tải trang, giao diện mượt trên mọi thiết bị, giảm tỷ lệ thoát",
            gradient: "from-[#4988C4] to-[#1C4D8D]",
            icon: (
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Tăng thứ hạng Google",
            description: "Chuẩn hóa cấu trúc website, URL chuẩn SEO, giúp website bền vững",
            gradient: "from-[#1C4D8D] to-[#2563EB]",
            icon: (
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            title: "SEO Content & Entity",
            description: "Định vị rõ lĩnh vực, tăng độ tin cậy, thu hút traffic tự nhiên",
            gradient: "from-[#2563EB] to-[#4988C4]",
            icon: (
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            title: "Nghiên cứu & Chiến lược SEO",
            description: "Phân tích đối thủ, nghiên cứu thị trường, xây dựng lộ trình hiệu quả",
            gradient: "from-[#4988C4] to-[#6366F1]",
            icon: (
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )
        },
        {
            title: "Tối ưu chuyển đổi",
            description: "Cải thiện UI/UX, tối ưu CTA và form, tăng tỷ lệ chuyển đổi",
            gradient: "from-[#1C4D8D] to-[#4988C4]",
            icon: (
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        }
    ]

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                    Lợi ích Nâng cấp & tối ưu website toàn diện
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Những giá trị thiết thực mà doanh nghiệp của bạn nhận được
                </p>

                <div className="space-y-8">
                    {/* Top Row - 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {benefits.slice(0, 3).map((benefit, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all group h-64 bg-gradient-to-br ${benefit.gradient}`}
                            >
                                {/* Decorative Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/20 -translate-y-10 translate-x-10" />
                                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/15 translate-y-8 -translate-x-8" />
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col items-center justify-center text-center p-6 z-10">
                                    <div className="mb-4 p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="font-bold text-2xl text-white leading-tight mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-white/80 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row - 2 Cards Centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {benefits.slice(3, 5).map((benefit, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all group h-64 bg-gradient-to-br ${benefit.gradient}`}
                            >
                                {/* Decorative Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/20 -translate-y-10 translate-x-10" />
                                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/15 translate-y-8 -translate-x-8" />
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col items-center justify-center text-center p-6 z-10">
                                    <div className="mb-4 p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="font-bold text-2xl text-white leading-tight mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-white/80 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
