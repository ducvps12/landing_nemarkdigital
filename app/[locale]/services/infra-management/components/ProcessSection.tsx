'use client'

export default function ProcessSection() {
    const steps = [
        {
            number: 1,
            title: 'Khảo sát & Đánh giá hạ tầng',
            position: 'top'
        },
        {
            number: 2,
            title: 'Lập kế hoạch & Thiết kế giải pháp',
            position: 'bottom'
        },
        {
            number: 3,
            title: 'Triển khai & Cấu hình hệ thống',
            position: 'top'
        },
        {
            number: 4,
            title: 'Giám sát & Vận hành liên tục',
            position: 'bottom'
        },
        {
            number: 5,
            title: 'Tối ưu & Nâng cấp định kỳ',
            position: 'top'
        },
        {
            number: 6,
            title: 'Báo cáo & Đánh giá hiệu quả',
            position: 'bottom'
        }
    ]

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary-light/20 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide">
                        <span className="text-primary">Quy Trình </span>
                        <span className="text-accent">Triển Khai</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Desktop */}
                    <div className="hidden lg:block">
                        {/* Animated progress line */}
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary via-primary-dark to-primary rounded-full animate-timeline-fill"></div>
                        </div>

                        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all z-20">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all z-20">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="flex justify-between items-center relative px-8">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center relative"
                                    style={{ width: `${100 / steps.length}%` }}
                                    data-aos={step.position === 'top' ? 'fade-down' : 'fade-up'}
                                    data-aos-delay={index * 150}
                                >
                                    {step.position === 'top' && (
                                        <div className="mb-8 w-full max-w-[180px]">
                                            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-default">
                                                <h4 className="text-accent font-bold text-sm mb-2 group-hover:text-primary transition-colors duration-300">
                                                    Bước {step.number}
                                                </h4>
                                                <p className="text-gray-700 text-sm leading-relaxed">
                                                    {step.title}
                                                </p>
                                            </div>
                                            <div className="w-0.5 h-6 bg-gray-300 mx-auto animate-line-grow"></div>
                                        </div>
                                    )}

                                    {/* Animated dot */}
                                    <div className="relative z-10">
                                        <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping-slow"></div>
                                        <div className="w-4 h-4 bg-white border-4 border-primary rounded-full shadow-md relative"></div>
                                    </div>

                                    {step.position === 'bottom' && (
                                        <div className="mt-8 w-full max-w-[180px]">
                                            <div className="w-0.5 h-6 bg-gray-300 mx-auto animate-line-grow"></div>
                                            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:translate-y-2 group cursor-default">
                                                <h4 className="text-accent font-bold text-sm mb-2 group-hover:text-primary transition-colors duration-300">
                                                    Bước {step.number}
                                                </h4>
                                                <p className="text-gray-700 text-sm leading-relaxed">
                                                    {step.title}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {step.position === 'top' && <div className="mt-8 h-24"></div>}
                                    {step.position === 'bottom' && <div className="mb-8 h-24" style={{ order: -1 }}></div>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="lg:hidden space-y-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 group"
                                data-aos="fade-up"
                                data-aos-delay={index * 80}
                            >
                                <div className="relative flex-shrink-0">
                                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping-slow"></div>
                                    <div className="relative w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                                        {step.number}
                                    </div>
                                </div>
                                <div className="flex-1 bg-white rounded-xl shadow-md p-4 border border-gray-100 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                                    <h4 className="text-accent font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                                        Bước {step.number}
                                    </h4>
                                    <p className="text-gray-700 text-sm">
                                        {step.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes timeline-fill {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
                .animate-timeline-fill {
                    animation: timeline-fill 2s ease-out forwards;
                    animation-delay: 0.5s;
                    width: 0%;
                }
                @keyframes ping-slow {
                    0% { transform: scale(1); opacity: 0.5; }
                    75%, 100% { transform: scale(2); opacity: 0; }
                }
                .animate-ping-slow {
                    animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                @keyframes line-grow {
                    0% { height: 0; }
                    100% { height: 1.5rem; }
                }
                .animate-line-grow {
                    animation: line-grow 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    )
}
