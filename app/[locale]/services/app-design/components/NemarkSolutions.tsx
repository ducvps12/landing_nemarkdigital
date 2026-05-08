'use client'

export default function NemarkSolutions() {
    const features = [
        'Đội ngũ UI/UX, lập trình & kỹ sư công nghệ giàu kinh nghiệm, luôn cập nhật xu hướng mới',
        'Am hiểu đa lĩnh vực: thương mại điện tử, bán lẻ, quản lý doanh nghiệp',
        'Tư vấn & phát triển app sát nhu cầu thực tế, hiện đại, dễ sử dụng',
        'Cung cấp dịch vụ phát triển ứng dụng mobile theo yêu cầu, trọn gói trình',
        'Triển khai app đa nền tảng iOS & Android, tối ưu thâm mỹ và hiệu năng'
    ]

    return (
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Phone Mockup */}
                    <div className="relative" data-aos="fade-right">
                        <div className="relative flex justify-center items-center">
                            {/* Floating Icons */}
                            <div className="absolute top-8 -left-8 animate-float hidden md:block" style={{ animationDelay: '0s' }}>
                                <div className="bg-primary text-white rounded-2xl p-3 shadow-2xl backdrop-blur-sm border-2 border-white/30 flex items-center gap-2">
                                    <span className="material-icons-outlined text-2xl">palette</span>
                                    <span className="font-bold text-lg">UI</span>
                                </div>
                            </div>

                            <div className="absolute top-20 -right-8 animate-float hidden md:block" style={{ animationDelay: '0.2s' }}>
                                <div className="bg-orange-500 text-white rounded-2xl p-3 shadow-2xl backdrop-blur-sm border-2 border-white/30 flex items-center gap-2">
                                    <span className="material-icons-outlined text-2xl">brush</span>
                                    <span className="font-bold text-lg">UX</span>
                                </div>
                            </div>

                            <div className="absolute top-1/3 -left-12 animate-float hidden md:block" style={{ animationDelay: '0.4s' }}>
                                <div className="bg-red-500 text-white rounded-2xl p-3 shadow-2xl backdrop-blur-sm border-2 border-white/30">
                                    <span className="material-icons-outlined text-2xl">play_circle</span>
                                </div>
                            </div>

                            <div className="absolute top-1/2 -right-10 animate-float hidden md:block" style={{ animationDelay: '0.6s' }}>
                                <div className="bg-cyan-500 text-white rounded-2xl p-3 shadow-2xl backdrop-blur-sm border-2 border-white/30">
                                    <span className="material-icons-outlined text-2xl">link</span>
                                </div>
                            </div>

                            <div className="absolute bottom-32 -left-4 animate-float hidden md:block" style={{ animationDelay: '0.8s' }}>
                                <div className="bg-green-500 text-white rounded-2xl p-3 shadow-2xl backdrop-blur-sm border-2 border-white/30">
                                    <span className="material-icons-outlined text-2xl">code</span>
                                </div>
                            </div>

                            <div className="absolute bottom-24 -right-12 animate-float hidden md:block" style={{ animationDelay: '1s' }}>
                                <div className="bg-purple-500 text-white rounded-2xl p-3 shadow-2xl backdrop-blur-sm border-2 border-white/30">
                                    <span className="material-icons-outlined text-2xl">touch_app</span>
                                </div>
                            </div>

                            <div className="absolute bottom-40 right-2 animate-float hidden md:block" style={{ animationDelay: '1.2s' }}>
                                <div className="bg-pink-500 text-white rounded-2xl p-3 shadow-2xl backdrop-blur-sm border-2 border-white/30">
                                    <span className="material-icons-outlined text-2xl">smartphone</span>
                                </div>
                            </div>

                            {/* Single larger phone mockup */}
                            <div className="relative z-10">
                                <img
                                    src="/images/app-mockup.png"
                                    alt="Nemark Mini App - UI/UX Design"
                                    className="w-[320px] md:w-[400px] lg:w-[480px] h-auto drop-shadow-2xl rounded-[2rem]"
                                />
                            </div>
                        </div>

                        {/* Decorative gradient */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-gradient-to-t from-primary/10 to-transparent blur-2xl" />
                    </div>

                    {/* Right Content */}
                    <div data-aos="fade-left">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 mb-6">
                            <span className="material-icons-outlined text-lg">verified</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-slate-800 mb-4 leading-tight">
                            Giải pháp
                            <span className="block text-primary">Mua hàng trên Mini App</span>
                        </h2>

                        <p className="text-base text-black mb-6 leading-relaxed">
                            Giao diện hiện đại, tối ưu trải nghiệm người dùng, tăng tỷ lệ chuyển đổi và doanh thu cho doanh nghiệp.
                        </p>

                        {/* Feature List */}
                        <ul className="space-y-3 mb-8">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="material-icons-outlined text-primary text-xl mt-0.5">check_circle</span>
                                    <span className="text-black">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}
