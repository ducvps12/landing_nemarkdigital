'use client'

import Image from 'next/image'

export default function ProblemsSection() {
    const problems = [
        'Tỷ lệ thoát trang tăng vọt',
        '"Đốt" ngân sách quảng cáo vô ích',
        'Bị Google "trừng phạt" & Tụt hạng SEO',
        'Rủi ro mất trắng dữ liệu khách hàng',
        'Đánh mất niềm tin thương hiệu',
        'Doanh thu sụt giảm không phanh'
    ]

    // Positions for bubbles - scattered layout
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
                    Tác hại của website <span className="text-primary-dark">chậm</span> & <span className="text-primary-dark">không bảo mật</span>
                </h2>
                <div className="w-24 h-1.5 bg-primary-dark mx-auto rounded-full"></div>
            </div>

            {/* Top Section - Problems Bubbles */}
            <div className="relative py-6 px-6 lg:px-10">
                {/* Bubbles Container */}
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

                {/* Arrow pointing down - overlapping both sections */}
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

            {/* Bottom Section - Solution with blue background */}
            <div className="px-6 lg:px-10 pb-6 pt-4">
                <div className="bg-primary relative rounded-2xl overflow-hidden max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

                        {/* Left - Model Image */}
                        <div className="relative flex justify-center lg:justify-center lg:pl-8" data-aos="fade-right">
                            <div className="relative">
                                {/* Background frame effect */}
                                <div className="absolute inset-2 lg:inset-4 bg-white/20 rounded-xl -z-10"></div>

                                {/* Model Image */}
                                <div className="relative p-2 lg:p-4">
                                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-primary-dark/20 p-2">
                                        <Image
                                            src="/images/nemark-website-problems.png"
                                            alt="Chuyên gia tư vấn tăng tốc & bảo mật website"
                                            width={350}
                                            height={400}
                                            className="w-full max-w-[280px] lg:max-w-[320px] h-auto object-contain drop-shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Solution Text */}
                        <div className="flex flex-col gap-2 px-6 py-6 lg:py-8 lg:pr-10" data-aos="fade-left">
                            <p className="text-white/80 text-sm lg:text-base italic">
                                Tất cả sẽ được khắc phục với giải pháp
                            </p>
                            <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight uppercase tracking-wide">
                                Tăng Tốc & Bảo Mật Website Toàn Diện,{' '}
                                <span className="text-accent-light">
                                    An Toàn & Hiệu Quả Tại Nemark
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
