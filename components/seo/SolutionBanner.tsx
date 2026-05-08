import Image from 'next/image';

export default function SolutionBanner() {
    return (
        <section className="relative py-16 overflow-hidden bg-linear-to-br from-blue-600 via-blue-500 to-indigo-600">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-300/10 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Top header tab */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-3 rounded-full shadow-lg font-semibold text-sm md:text-base">
                            Giúp website của bạn ON TOP đầu ngành
                        </div>
                        {/* Arrow pointing down */}
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-0 h-0 border-l-15 border-l-transparent border-r-15 border-r-transparent border-t-15 border-t-yellow-400"></div>
                    </div>
                </div>

                {/* Main content card with overlapping layout */}
                <div className="relative">
                    {/* White background card */}
                    <div className="bg-white rounded-[40px] shadow-2xl overflow-visible relative pt-12 pb-32 px-8">
                        {/* Floating icons - Left side */}
                        <div className="absolute left-8 top-1/4 hidden lg:block z-20">
                            <div className="space-y-8">
                                {/* SEO Icon */}
                                <div className="animate-float" style={{ animationDelay: '0s' }}>
                                    <div className="bg-yellow-50 p-4 rounded-2xl shadow-lg transform hover:scale-110 transition-transform">
                                        <Image
                                            src="/images/seo/seo-icon.png"
                                            alt="SEO"
                                            width={80}
                                            height={80}
                                            className="w-16 h-16"
                                        />
                                    </div>
                                </div>
                                {/* Number 4.1 decoration */}
                                <div className="animate-float" style={{ animationDelay: '0.5s' }}>
                                    <div className="text-6xl font-bold text-blue-200/50">
                                        4.1
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating icons - Top left */}
                        <div className="absolute left-1/4 top-8 hidden lg:block z-20">
                            <div className="animate-float" style={{ animationDelay: '0.3s' }}>
                                <div className="bg-blue-50 p-3 rounded-xl shadow-md">
                                    <Image
                                        src="/images/seo/analytics-icon.png"
                                        alt="Analytics"
                                        width={100}
                                        height={100}
                                        className="w-20 h-20"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Floating icons - Right side */}
                        <div className="absolute right-8 top-1/4 hidden lg:block z-20">
                            <div className="animate-float" style={{ animationDelay: '0.2s' }}>
                                <div className="bg-yellow-50 p-4 rounded-2xl shadow-lg transform hover:scale-110 transition-transform">
                                    <Image
                                        src="/images/seo/target-icon.png"
                                        alt="Target"
                                        width={120}
                                        height={120}
                                        className="w-24 h-24"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Spacer for layout */}
                        <div className="h-48"></div>
                    </div>

                    {/* Center presenter image - positioned to overlap */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10">
                        <Image
                            src="/images/seo/presenter.png"
                            alt="SEO Expert"
                            width={400}
                            height={500}
                            className="w-64 md:w-80 lg:w-96 h-auto object-contain"
                            priority
                        />
                    </div>

                    {/* Bottom description - positioned above the image */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-30 w-full px-4">
                        <div className="bg-white rounded-full shadow-xl px-6 py-4 max-w-4xl mx-auto border-2 border-blue-100">
                            <p className="text-sm md:text-base text-gray-700 text-center leading-relaxed font-medium">
                                Từ phân tích thị trường, nghiên cứu hành vi tìm kiếm cho đến tối ưu kỹ thuật & sản xuất nội dung chất lượng –
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}
