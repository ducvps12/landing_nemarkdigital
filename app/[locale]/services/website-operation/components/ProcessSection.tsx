'use client'

export default function ProcessSection() {
    const steps = [
        {
            number: 1,
            title: 'Audit & Phân tích hiện trạng',
            position: 'top'
        },
        {
            number: 2,
            title: 'Sao lưu dữ liệu an toàn',
            position: 'bottom'
        },
        {
            number: 3,
            title: 'Dọn dẹp & Tối ưu cốt lõi',
            position: 'top'
        },
        {
            number: 4,
            title: 'Cấu hình Tăng tốc chuyên sâu',
            position: 'bottom'
        },
        {
            number: 5,
            title: 'Thiết lập "Lá chắn" Bảo mật',
            position: 'top'
        },
        {
            number: 6,
            title: 'Kiểm thử & Bàn giao',
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

                {/* Timeline Container */}
                <div className="relative" data-aos="fade-up" data-aos-delay="100">
                    {/* Desktop Timeline */}
                    <div className="hidden lg:block">
                        {/* Timeline Line */}
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gray-200 rounded-full">
                            <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-primary via-primary to-primary rounded-full"></div>
                        </div>

                        {/* Navigation Arrows */}
                        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all z-20">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all z-20">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Steps */}
                        <div className="flex justify-between items-center relative px-8">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center relative"
                                    style={{ width: `${100 / steps.length}%` }}
                                >
                                    {/* Top Card */}
                                    {step.position === 'top' && (
                                        <div className="mb-8 w-full max-w-[180px]">
                                            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                                <h4 className="text-accent font-bold text-sm mb-2">
                                                    Bước {step.number}
                                                </h4>
                                                <p className="text-gray-700 text-sm leading-relaxed">
                                                    {step.title}
                                                </p>
                                            </div>
                                            <div className="w-0.5 h-6 bg-gray-300 mx-auto"></div>
                                        </div>
                                    )}

                                    {/* Dot on timeline */}
                                    <div className="w-4 h-4 bg-white border-4 border-primary rounded-full z-10 shadow-md"></div>

                                    {/* Bottom Card */}
                                    {step.position === 'bottom' && (
                                        <div className="mt-8 w-full max-w-[180px]">
                                            <div className="w-0.5 h-6 bg-gray-300 mx-auto"></div>
                                            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:translate-y-1">
                                                <h4 className="text-accent font-bold text-sm mb-2">
                                                    Bước {step.number}
                                                </h4>
                                                <p className="text-gray-700 text-sm leading-relaxed">
                                                    {step.title}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Placeholder for alignment */}
                                    {step.position === 'top' && <div className="mt-8 h-24"></div>}
                                    {step.position === 'bottom' && <div className="mb-8 h-24" style={{ order: -1 }}></div>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Timeline */}
                    <div className="lg:hidden space-y-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                    {step.number}
                                </div>
                                <div className="flex-1 bg-white rounded-xl shadow-md p-4 border border-gray-100">
                                    <h4 className="text-accent font-bold text-sm mb-1">
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
        </section>
    )
}
