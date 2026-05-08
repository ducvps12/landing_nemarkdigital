'use client'

import Image from 'next/image'

export default function ProblemsSection() {
    const problems = [
        'Website lỗi sau thời gian sử dụng',
        'Nguy cơ bảo mật',
        'Hệ thống thiếu giám sát định kỳ',
        'Thiếu quy trình vận hành rõ ràng',
        'Phát sinh lỗi cập nhật',
        'Không có đội kỹ thuật xử lý nhanh'
    ]

    // Positions for bubbles - scattered layout like in the reference
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
                            <div className="relative px-6 py-3 border-2 border-red-500 rounded-[50px] bg-white shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-default">
                                <span className="text-red-600 font-medium text-sm lg:text-base whitespace-nowrap">
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0">

                        {/* Left - Model Image */}
                        <div className="relative flex justify-center lg:justify-center lg:pl-6" data-aos="fade-right">
                            <div className="relative">
                                {/* Background frame effect */}
                                <div className="absolute inset-2 lg:inset-4 bg-white/20 rounded-xl -z-10"></div>

                                {/* Model Image */}
                                <div className="relative p-2 lg:p-4">
                                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-primary-dark/20 p-2">
                                        <Image
                                            src="/images/nemark-security-risk.png"
                                            alt="Chuyên gia tư vấn bảo trì website"
                                            width={350}
                                            height={400}
                                            className="w-full max-w-[280px] lg:max-w-[320px] h-auto object-contain drop-shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Solution Text */}
                        <div className="flex flex-col gap-4 px-4 py-6 lg:py-8 lg:pl-0 lg:pr-8 items-center text-center lg:items-start lg:text-left" data-aos="fade-left">
                            <h2 className="text-white text-2xl lg:text-3xl font-bold">
                                Tất cả sẽ được khắc phục với giải pháp
                            </h2>

                            {/* Dashed line */}
                            <div className="w-56 border-t-2 border-dashed border-white/70"></div>

                            {/* Features list */}
                            <ul className="text-yellow-300 text-lg lg:text-xl space-y-3 font-bold mt-1">
                                <li>Kiểm tra & sửa lỗi định kỳ</li>
                                <li>Sao lưu dữ liệu</li>
                                <li>Cập nhật hệ thống</li>
                                <li>Hỗ trợ kỹ thuật theo yêu cầu</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

