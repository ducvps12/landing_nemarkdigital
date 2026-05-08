'use client'

import Image from 'next/image'

export default function ProblemsSection() {
    const problems = [
        'Thiếu website chuyên nghiệp',
        'Chi phí marketing cao, khó đo lường',
        'Vận hành thủ công, thiếu hệ thống'
    ]

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
                        Vấn đề <span className="text-primary-dark">SME thường gặp</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-primary-dark mx-auto rounded-full"></div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <div className="flex justify-center" data-aos="fade-right">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl blur-xl opacity-50"></div>
                            <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                                <Image
                                    src="/images/nemark-integration-problems.png"
                                    alt="Vấn đề SME"
                                    width={400}
                                    height={400}
                                    className="w-full max-w-[350px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right - Problems List */}
                    <div data-aos="fade-left">
                        <div className="space-y-6">
                            {problems.map((problem, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 bg-gradient-to-r from-red-50 to-white p-5 rounded-xl border border-red-100 hover:shadow-md transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <span className="text-primary-dark font-semibold text-lg">{problem}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
