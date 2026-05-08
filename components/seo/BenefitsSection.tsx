export default function BenefitsSection() {
    const benefits = [
        {
            number: 1,
            text: "Nâng cao thứ hạng từ khóa",
            bgImage: "/seo/benefit-1.png"
        },
        {
            number: 2,
            text: "Tăng lưu lượng truy cập",
            bgImage: "/seo/benefit-2.png"
        },
        {
            number: 3,
            text: "Tăng tỷ lệ chuyển đổi",
            bgImage: "/seo/benefit-3.png"
        },
        {
            number: 4,
            text: "Xây dựng uy tín thương hiệu",
            bgImage: "/seo/benefit-4.png"
        },
        {
            number: 5,
            text: "Tiết kiệm chi phí Marketing dài hạn",
            bgImage: "/seo/benefit-5.png"
        }
    ]

    // Split into odd and even
    const oddBenefits = benefits.filter((_, index) => index % 2 === 0); // 1, 3, 5
    const evenBenefits = benefits.filter((_, index) => index % 2 !== 0); // 2, 4

    return (
        <section className="py-16 bg-gradient-to-r from-lime-400 to-green-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                    BẠN NHẬN ĐƯỢC GÌ SAU KHI TRIỂN KHAI SEO
                </h2>

                <div className="relative max-w-5xl mx-auto">
                    {/* First row - Odd numbers (1, 3, 5) */}
                    <div className="grid grid-cols-3 gap-8 mb-8">
                        {oddBenefits.map((benefit) => (
                            <div
                                key={benefit.number}
                                className="group relative rounded-xl overflow-hidden h-64 cursor-pointer transition-all duration-300 hover:shadow-2xl"
                                style={{
                                    backgroundImage: `url(${benefit.bgImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                {/* Default overlay - semi-transparent */}
                                <div className="absolute inset-0 bg-white/40 group-hover:bg-black/70 transition-all duration-300"></div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                                    <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {benefit.number}
                                    </div>
                                    <p className="font-semibold text-gray-900 group-hover:text-white leading-relaxed text-sm transition-colors duration-300">
                                        {benefit.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second row - Even numbers (2, 4) - offset */}
                    <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {evenBenefits.map((benefit) => (
                            <div
                                key={benefit.number}
                                className="group relative rounded-xl overflow-hidden h-64 cursor-pointer transition-all duration-300 hover:shadow-2xl"
                                style={{
                                    backgroundImage: `url(${benefit.bgImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                {/* Default overlay - semi-transparent */}
                                <div className="absolute inset-0 bg-white/40 group-hover:bg-black/70 transition-all duration-300"></div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                                    <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {benefit.number}
                                    </div>
                                    <p className="font-semibold text-gray-900 group-hover:text-white leading-relaxed text-sm transition-colors duration-300">
                                        {benefit.text}
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
