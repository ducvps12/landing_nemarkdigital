'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function WhyUsSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const reasons = [
        {
            title: 'Kinh nghiệm thực chiến',
            description: 'Hơn 5 năm hoạt động trong lĩnh vực tích hợp hệ thống, chúng tôi hiểu rõ cách tận dụng thanh toán, API và CRM để tạo lợi thế cạnh tranh.'
        },
        {
            title: 'Giải pháp toàn diện',
            description: 'NEMARK không chỉ tập trung vào kỹ thuật, mà còn phân tích nhu cầu thực tế của doanh nghiệp để đưa ra giải pháp tích hợp phù hợp, tránh dư thừa – tối ưu chi phí – dễ mở rộng.'
        },
        {
            title: 'Cam kết kết quả',
            description: 'NEMARK không chỉ triển khai mà còn hỗ trợ vận hành, tối ưu và nâng cấp hệ thống theo sự phát triển của doanh nghiệp.'
        }
    ]

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary-light/20 to-cyan-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-primary uppercase tracking-wide">
                        Tại sao chọn NEMARK để Tích hợp Thanh toán – API – CRM cho bạn?
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <div className="flex justify-center" data-aos="fade-right">
                        <div className="relative">
                            <Image
                                src="/images/nemark-why-choose-us.png"
                                alt="Tại sao chọn Nemark"
                                width={400}
                                height={450}
                                className="w-full max-w-[350px] h-auto object-contain drop-shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Right - Accordion List */}
                    <div className="space-y-4" data-aos="fade-left">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                            >
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        {/* Blue bullet */}
                                        <div className="flex-shrink-0">
                                            <div className="w-3 h-3 bg-primary rounded-sm rotate-45"></div>
                                        </div>
                                        <h3 className="text-primary font-bold text-base md:text-lg">
                                            {reason.title}
                                        </h3>
                                    </div>

                                    {/* Arrow Icon */}
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                {/* Accordion Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-4 pb-4 pl-10">
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
