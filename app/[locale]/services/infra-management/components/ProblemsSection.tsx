'use client'

import Image from 'next/image'

export default function ProblemsSection() {
    const problems = [
        'Server sập bất ngờ, mất dữ liệu',
        'Hiệu suất hệ thống giảm dần',
        'Không có giám sát & cảnh báo sớm',
        'Chi phí vận hành IT phình to',
        'Thiếu nhân sự IT chuyên trách',
        'Rủi ro bảo mật không kiểm soát'
    ]

    const bubblePositions = [
        { top: '5%', left: '5%', rotate: '-3deg' },
        { top: '0%', left: '35%', rotate: '2deg' },
        { top: '8%', right: '5%', rotate: '-2deg' },
        { top: '45%', left: '8%', rotate: '3deg' },
        { top: '50%', left: '38%', rotate: '-1deg' },
        { top: '42%', right: '8%', rotate: '2deg' },
    ]

    return (
        <section className="bg-white overflow-hidden">
            {/* Header */}
            <div className="text-center pt-12 pb-4 px-6" data-aos="fade-up">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
                    Hậu quả khi <span className="text-primary-dark">không quản lý</span> & <span className="text-primary-dark">vận hành hạ tầng</span>
                </h2>
                <div className="w-24 h-1.5 bg-primary-dark mx-auto rounded-full animate-pulse-width"></div>
            </div>

            {/* Problems Bubbles */}
            <div className="relative py-6 px-6 lg:px-10">
                <div className="max-w-6xl mx-auto relative h-[180px] lg:h-[200px]">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="absolute inline-block"
                            style={{
                                top: bubblePositions[index]?.top,
                                left: bubblePositions[index]?.left,
                                right: bubblePositions[index]?.right,
                                transform: `rotate(${bubblePositions[index]?.rotate})`,
                            }}
                            data-aos="zoom-in"
                            data-aos-delay={index * 120}
                        >
                            <div className="relative px-6 py-3 border-2 border-primary rounded-[50px] bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-default group">
                                {/* Glow on hover */}
                                <div className="absolute inset-0 rounded-[50px] bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative text-primary font-medium text-sm lg:text-base whitespace-nowrap">
                                    {problem}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Arrow with bounce */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20" data-aos="fade-down" data-aos-delay="600">
                    <div className="animate-bounce-slow">
                        <Image
                            src="/images/muiten.webp"
                            alt="Arrow pointing down"
                            width={200}
                            height={150}
                            className="w-40 lg:w-48 h-auto translate-y-16"
                        />
                    </div>
                </div>
            </div>

            {/* Solution */}
            <div className="px-6 lg:px-10 pb-6 pt-4">
                <div className="bg-primary relative rounded-2xl overflow-hidden max-w-6xl mx-auto group" data-aos="zoom-in-up" data-aos-delay="200">
                    {/* Animated gradient shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center relative">
                        {/* Left - Icon */}
                        <div className="relative flex justify-center lg:justify-center lg:pl-8 py-8" data-aos="fade-right" data-aos-delay="400">
                            <div className="relative">
                                <div className="w-[280px] h-[250px] flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-28 h-28 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float-gentle group-hover:bg-white/30 transition-colors duration-500">
                                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                            </svg>
                                        </div>
                                        <div className="flex gap-3 justify-center">
                                            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center hover:bg-white/25 transition-all duration-300 hover:scale-110 animate-float-gentle" style={{ animationDelay: '0s' }}>
                                                <span className="text-xl">🔧</span>
                                            </div>
                                            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center hover:bg-white/25 transition-all duration-300 hover:scale-110 animate-float-gentle" style={{ animationDelay: '0.3s' }}>
                                                <span className="text-xl">📊</span>
                                            </div>
                                            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center hover:bg-white/25 transition-all duration-300 hover:scale-110 animate-float-gentle" style={{ animationDelay: '0.6s' }}>
                                                <span className="text-xl">☁️</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Text */}
                        <div className="flex flex-col gap-2 px-6 py-6 lg:py-8 lg:pr-10" data-aos="fade-left" data-aos-delay="500">
                            <p className="text-white/80 text-sm lg:text-base italic">
                                Tất cả sẽ được khắc phục với giải pháp
                            </p>
                            <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight uppercase tracking-wide">
                                Quản Lý & Vận Hành Hạ Tầng CNTT,{' '}
                                <span className="text-accent-light">
                                    Chuyên Nghiệp & Hiệu Quả Tại Nemark
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scoped animations */}
            <style jsx>{`
                @keyframes pulse-width {
                    0%, 100% { width: 6rem; opacity: 1; }
                    50% { width: 8rem; opacity: 0.7; }
                }
                .animate-pulse-width {
                    animation: pulse-width 2s ease-in-out infinite;
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 3s ease-in-out infinite;
                }
                @keyframes float-gentle {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-6px); }
                }
                .animate-float-gentle {
                    animation: float-gentle 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}
