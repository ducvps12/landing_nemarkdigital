'use client'

import Image from 'next/image'

export default function SolutionsFitSection() {
    const solutions = [
        {
            icon: 'language',
            title: 'Website / Landing Page MVP',
            description: 'Thiết kế và phát triển nhanh chóng'
        },
        {
            icon: 'phone_android',
            title: 'App cơ bản theo yêu cầu',
            description: 'Ứng dụng di động tùy chỉnh'
        },
        {
            icon: 'cloud',
            title: 'Hạ tầng linh hoạt (VPS, Cloud)',
            description: 'Mở rộng dễ dàng theo nhu cầu'
        },
        {
            icon: 'email',
            title: 'Email doanh nghiệp & Branding',
            description: 'Xây dựng thương hiệu chuyên nghiệp'
        },
        {
            icon: 'trending_up',
            title: 'Marketing tăng trưởng (SEO/Ads)',
            description: 'Tối ưu chi phí, tối đa hiệu quả'
        }
    ]

    return (
        <section className="py-10 lg:py-14 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                        <span className="material-icons-outlined text-primary">build_circle</span>
                        <span className="text-primary font-semibold text-sm">Giải pháp trọn gói</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-['Montserrat']">
                        Giải Pháp <span className="text-primary">Cốt Lõi</span>
                    </h2>
                    <p className="text-black/80 max-w-2xl mx-auto font-['Montserrat']">
                        Hệ sinh thái công nghệ toàn diện dành riêng cho Startup
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Image */}
                    <div className="order-2 lg:order-1" data-aos="fade-right">
                        <div className="relative">
                            {/* Background decoration */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl"></div>

                            {/* Main image */}
                            <div className="relative bg-white rounded-3xl p-4 shadow-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                                    alt="Core Solutions"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto rounded-2xl object-cover"
                                />

                                {/* Stats overlay */}
                                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                                    <div className="flex items-center justify-between">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-primary">2-4</div>
                                            <div className="text-xs text-black/70 font-['Montserrat']">Tuần triển khai</div>
                                        </div>
                                        <div className="w-px h-10 bg-gray-200"></div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-secondary">24/7</div>
                                            <div className="text-xs text-black/70 font-['Montserrat']">Hỗ trợ kỹ thuật</div>
                                        </div>
                                        <div className="w-px h-10 bg-gray-200"></div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-accent-dark">∞</div>
                                            <div className="text-xs text-black/70 font-['Montserrat']">Khả năng scale</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Solutions List */}
                    <div className="order-1 lg:order-2" data-aos="fade-left">
                        <div className="space-y-4">
                            {solutions.map((solution, index) => (
                                <div
                                    key={index}
                                    className="group flex items-start gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/30"
                                    data-aos="fade-left"
                                    data-aos-delay={index * 80}
                                >
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                                        <span className="material-icons-outlined text-2xl text-primary group-hover:text-white transition-colors">
                                            {solution.icon}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-black group-hover:text-primary transition-colors font-['Montserrat']">
                                            {solution.title}
                                        </h3>
                                        <p className="text-sm text-black/80 mt-1 font-['Montserrat']">
                                            {solution.description}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all">
                                        <span className="material-icons text-primary text-lg">arrow_forward</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
