'use client'

import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

export default function CommitmentSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const commitments = [
        {
            icon: 'verified',
            text: 'Cam kết chất lượng dịch vụ đạt chuẩn quốc tế'
        },
        {
            icon: 'visibility',
            text: 'Minh bạch trong mọi báo cáo và chi phí triển khai'
        },
        {
            icon: 'trending_up',
            text: 'Tối ưu hóa tỷ lệ chuyển đổi và ROI cho doanh nghiệp'
        }
    ]

    return (
        <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
                {/* Header */}
                <div data-aos="fade-up">
                    <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
                        NEMARK CAM KẾT
                    </h2>
                    <h3 className="text-text-main text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
                        Đồng Hành Cùng Sự Phát Triển Của Bạn
                    </h3>
                </div>

                {/* Commitment Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {commitments.map((commitment, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-white border-2 border-primary/30 hover:bg-primary hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="size-14 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-icons text-2xl">{commitment.icon}</span>
                            </div>
                            <p className="text-text-main group-hover:text-white font-semibold text-center transition-colors duration-300">{commitment.text}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex min-w-[220px] items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary-dark transition-all shadow-lg shadow-primary/30"
                    data-aos="fade-up"
                >
                    Nhận tư vấn ngay
                </button>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
