'use client'

import { useState } from 'react'

interface CircleStatProps {
    percentage: number
    title: string
    description: string
    color: string
    delay?: string
}

function CircleStat({ percentage, title, description, color, delay = '0s' }: CircleStatProps) {
    const [isHovered, setIsHovered] = useState(false)

    // Multi-layer circle radii
    const outerRadius = 54
    const middleRadius = 48
    const innerRadius = 42

    const outerCircumference = 2 * Math.PI * outerRadius
    const middleCircumference = 2 * Math.PI * middleRadius
    const innerCircumference = 2 * Math.PI * innerRadius

    const outerOffset = outerCircumference - (percentage / 100) * outerCircumference
    const middleOffset = middleCircumference - (percentage / 100) * middleCircumference
    const innerOffset = innerCircumference - (percentage / 100) * innerCircumference

    // Generate lighter and darker shades
    const colorLight = color + '40' // 25% opacity
    const colorMedium = color + '80' // 50% opacity

    return (
        <div
            className="flex flex-col items-center gap-4 cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            data-aos="zoom-in"
        >
            <div
                className={`relative w-40 h-40 md:w-48 md:h-48 transition-transform duration-500 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}
                style={{
                    filter: `drop-shadow(0 8px 24px ${colorLight}) drop-shadow(0 4px 12px ${colorMedium})`
                }}
            >
                {/* Outer Glow Ring - Layer 1 (Background) */}
                <div
                    className="absolute inset-0 rounded-full opacity-30 blur-md transition-opacity duration-300"
                    style={{
                        background: `conic-gradient(from 0deg, ${color}, ${colorLight}, transparent)`,
                        opacity: isHovered ? 0.5 : 0.3
                    }}
                />

                {/* SVG Multi-Layer Circles */}
                <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 120 120">
                    <defs>
                        {/* Gradient for main progress */}
                        <linearGradient id={`gradient-${percentage}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={color} />
                            <stop offset="50%" stopColor={color} stopOpacity="0.8" />
                            <stop offset="100%" stopColor={color} stopOpacity="0.6" />
                        </linearGradient>

                        {/* Glow filter */}
                        <filter id={`glow-${percentage}`} x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Layer 1: Outer Background Track */}
                    <circle
                        cx="60"
                        cy="60"
                        r={outerRadius}
                        stroke="#e2e8f0"
                        strokeWidth="4"
                        fill="none"
                        opacity="0.5"
                    />

                    {/* Layer 1: Outer Progress Ring (Faint glow) */}
                    <circle
                        cx="60"
                        cy="60"
                        r={outerRadius}
                        stroke={colorLight}
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={outerCircumference}
                        strokeDashoffset={outerOffset}
                        className="animate-circle"
                        style={{ animationDelay: delay }}
                        filter={`url(#glow-${percentage})`}
                    />

                    {/* Layer 2: Middle Background Track */}
                    <circle
                        cx="60"
                        cy="60"
                        r={middleRadius}
                        stroke="#f1f5f9"
                        strokeWidth="6"
                        fill="none"
                    />

                    {/* Layer 2: Middle Progress Ring (Medium) */}
                    <circle
                        cx="60"
                        cy="60"
                        r={middleRadius}
                        stroke={colorMedium}
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={middleCircumference}
                        strokeDashoffset={middleOffset}
                        className="animate-circle"
                        style={{ animationDelay: `calc(${delay} + 0.1s)` }}
                    />

                    {/* Layer 3: Inner Background Track */}
                    <circle
                        cx="60"
                        cy="60"
                        r={innerRadius}
                        stroke="#f8fafc"
                        strokeWidth="8"
                        fill="white"
                    />

                    {/* Layer 3: Inner Progress Ring (Main - Solid) */}
                    <circle
                        cx="60"
                        cy="60"
                        r={innerRadius}
                        stroke={`url(#gradient-${percentage})`}
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={innerCircumference}
                        strokeDashoffset={innerOffset}
                        className="animate-circle"
                        style={{ animationDelay: `calc(${delay} + 0.2s)` }}
                        filter={`url(#glow-${percentage})`}
                    />
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
                    <div className={`text-center transition-all duration-300 ${isHovered ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
                        <span
                            className="text-3xl md:text-4xl font-bold"
                            style={{ color: color }}
                        >
                            {percentage}%
                        </span>
                    </div>

                    {/* Hover Content */}
                    <div className={`absolute inset-0 flex items-center justify-center p-6 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                        <p className="text-[10px] md:text-xs text-black text-center leading-tight font-medium">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Title below circle */}
            <p className="text-xs md:text-sm text-black text-center max-w-[180px] leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                {title}
            </p>
        </div>
    )
}

export default function DifficultiesSection() {
    const circleStats = [
        {
            percentage: 20,
            title: 'Doanh nghiệp gặp khó khăn trong việc tiếp cận và sử dụng sản phẩm mềm quản lý.',
            description: 'Chỉ 20% doanh nghiệp có công cụ quản lý khách hàng hiệu quả.',
            color: '#0ea5e9'
        },
        {
            percentage: 50,
            title: 'Doanh nghiệp đã có phần mềm nhưng lại không sử dụng hết tính năng.',
            description: '50% không tận dụng được hết công năng của phần mềm đã mua.',
            color: '#f59e0b'
        },
        {
            percentage: 65,
            title: 'Doanh nghiệp muốn nâng cấp phần mềm nhưng gặp khó khăn về tương hợp.',
            description: '65% gặp vấn đề khi nâng cấp hệ thống cũ lên mới.',
            color: '#14b8a6'
        },
        {
            percentage: 80,
            title: 'Doanh nghiệp cảm thấy hài lòng với sản phẩm phần mềm quản lý.',
            description: '80% khách hàng sẵn sàng giới thiệu sản phẩm cho người khác.',
            color: '#ec4899'
        }
    ]

    return (
        <section className="py-16 lg:py-24 bg-[#FDF8F3] relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-slate-800 mb-6">
                        NHỮNG KHÓ KHĂN VÀ THỰC TRẠNG
                    </h2>

                    <p className="text-sm md:text-base text-black max-w-5xl mx-auto leading-relaxed italic">
                        "Trong kỷ nguyên Mobile-first, khi hành vi người dùng đã chuyển dịch mạnh mẽ sang thiết bị di động, việc doanh nghiệp chỉ đứng lại ở Website, Sàn TMĐT hay Mạng xã hội là chưa đủ. Các kênh này đều phổ biến nhưng lại thiếu tính chủ động trong việc chăm sóc và giữ chân khách hàng (Customer Retention). Sự phụ thuộc vào thuật toán và chi phí quảng cáo ngày càng cao đang trở thành "nút thắt" kìm hãm đà tăng trưởng bền vững của doanh nghiệp."
                    </p>
                </div>

                {/* Circle Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 justify-items-center">
                    {circleStats.map((stat, index) => (
                        <CircleStat
                            key={index}
                            percentage={stat.percentage}
                            title={stat.title}
                            description={stat.description}
                            color={stat.color}
                            delay={`${index * 0.2}s`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes circleProgress {
                    from {
                        stroke-dashoffset: ${2 * Math.PI * 54};
                    }
                }
                .animate-circle {
                    animation: circleProgress 1.5s ease-out forwards;
                }
            `}</style>
        </section>
    )
}
