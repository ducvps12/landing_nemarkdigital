'use client'

import Image from 'next/image'
import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

export default function CommitmentSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const commitments = [
        "Thiết kế web chuẩn UX/UI, chuyển đổi tối đa",
        "Bàn giao đầy đủ mã nguồn – quyền sở hữu 100%",
        "Hỗ trợ cập nhật, mở rộng và nâng cấp khi có nhu cầu",
        "Tư vấn chiến lược triển khai Digital Marketing tổng thể sau khi bàn giao"
    ]

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-linear-to-r from-blue-600 to-blue-500 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left Content */}
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            {/* Title with underline */}
                            <div className="mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    NEMARK CAM KẾT
                                </h2>
                                <div className="w-20 h-1 bg-yellow-400"></div>
                            </div>

                            {/* Commitments list */}
                            <div className="space-y-4 mb-8">
                                {commitments.map((commitment, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        {/* Yellow checkmark circle */}
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mt-0.5">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-white text-base md:text-lg leading-relaxed">
                                            {commitment}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                                >
                                    TƯ VẤN NGAY
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative flex items-end justify-center p-8 lg:p-12">
                            {/* White rounded box */}
                            <div className="bg-white rounded-3xl p-6 shadow-xl relative overflow-hidden max-w-md w-full">
                                {/* Decorative circles */}
                                <div className="absolute top-8 left-8 w-16 h-16 border-4 border-blue-500 rounded-full"></div>
                                <div className="absolute top-12 right-12 w-3 h-3 bg-blue-400 rounded-full"></div>
                                <div className="absolute bottom-12 left-12 w-2 h-2 bg-yellow-400 rounded-full"></div>

                                {/* Presenter Image */}
                                <div className="relative z-10">
                                    <Image
                                        src="/images/seo/presenter.png"
                                        alt="Consultant"
                                        width={400}
                                        height={500}
                                        className="w-full h-auto object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
