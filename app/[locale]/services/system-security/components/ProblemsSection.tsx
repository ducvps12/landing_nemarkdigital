'use client'

import Image from 'next/image'

export default function ProblemsSection() {
    const problems = [
        'Bị hacker tấn công & chiếm quyền',
        'Dữ liệu nhạy cảm bị rò rỉ',
        'Hệ thống chưa có Firewall chuyên dụng',
        'Không kiểm soát quyền truy cập',
        'Thiếu chính sách bảo mật nội bộ',
        'Website bị chèn mã độc & Malware'
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
                    Hậu quả khi <span className="text-primary-dark">thiếu cấu hình</span> & <span className="text-primary-dark">bảo mật hệ thống</span>
                </h2>
                <div className="w-24 h-1.5 bg-primary-dark mx-auto rounded-full"></div>
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
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                        >
                            <div className="relative px-6 py-3 border-2 border-primary rounded-[50px] bg-white shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-default">
                                <span className="text-primary font-medium text-sm lg:text-base whitespace-nowrap">
                                    {problem}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20" data-aos="fade-down" data-aos-delay="400">
                    <Image
                        src="/images/muiten.webp"
                        alt="Arrow pointing down"
                        width={200}
                        height={150}
                        className="w-40 lg:w-48 h-auto translate-y-16"
                    />
                </div>
            </div>

            {/* Solution */}
            <div className="px-6 lg:px-10 pb-6 pt-4">
                <div className="bg-primary relative rounded-2xl overflow-hidden max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        {/* Left - Icon */}
                        <div className="relative flex justify-center lg:justify-center lg:pl-8 py-8" data-aos="fade-right">
                            <div className="relative">
                                <div className="w-[280px] h-[250px] flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-28 h-28 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div className="flex gap-3 justify-center">
                                            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center">
                                                <span className="text-xl">🔒</span>
                                            </div>
                                            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center">
                                                <span className="text-xl">🔥</span>
                                            </div>
                                            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center">
                                                <span className="text-xl">🛡️</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Text */}
                        <div className="flex flex-col gap-2 px-6 py-6 lg:py-8 lg:pr-10" data-aos="fade-left">
                            <p className="text-white/80 text-sm lg:text-base italic">
                                Tất cả sẽ được khắc phục với giải pháp
                            </p>
                            <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight uppercase tracking-wide">
                                Cấu Hình & Bảo Mật Hệ Thống,{' '}
                                <span className="text-accent-light">
                                    An Toàn & Chuyên Nghiệp Tại Nemark
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
