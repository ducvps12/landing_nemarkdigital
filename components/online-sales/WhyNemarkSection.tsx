'use client'

import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

export default function WhyNemarkSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const reasons = [
        {
            icon: "psychology",
            title: "Kết hợp hoàn hảo giữa Công nghệ & Marketing",
            description: "Khác với các đơn vị lập trình thuần túy, đội ngũ Nemark am hiểu sâu sắc về Marketing Online và hành vi người dùng. Mỗi nút bấm, mỗi giao diện chúng tôi tạo ra không chỉ đẹp, mà còn có nhiệm vụ dẫn dắt khách hàng \"chốt đơn\" nhanh nhất."
        },
        {
            icon: "tune",
            title: "Cá nhân hóa theo mô hình doanh nghiệp",
            description: "Chúng tôi hiểu rằng một Spa cần tính năng khác hoàn toàn một Siêu thị bán lẻ. Nemark cung cấp giải pháp được \"may đo\" riêng cho từng đặc thù ngành hàng, đảm bảo hệ thống vận hành trơn tru đúng theo quy trình quản lý của bạn."
        },
        {
            icon: "speed",
            title: "Nền tảng công nghệ vững chắc - Chuẩn SEO",
            description: "Sản phẩm của Nemark được tối ưu hóa tốc độ tải trang và cấu trúc chuẩn SEO ngay từ đầu. Điều này giúp doanh nghiệp tiết kiệm hàng trăm triệu đồng chi phí quảng cáo nhờ việc Website dễ dàng thăng hạng trên tìm kiếm Google."
        },
        {
            icon: "handshake",
            title: "Đối Tác Đồng Hành & Hỗ Trợ Trọn Đời",
            description: "Nemark không chỉ cung cấp một sản phẩm công nghệ, chúng tôi cung cấp sự an tâm. Chúng tôi cam kết bảo hành, bảo trì định kỳ và luôn sẵn sàng hỗ trợ kỹ thuật 24/7 để đảm bảo hệ thống kinh doanh của bạn vận hành thông suốt, không gián đoạn."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-12 text-center" data-aos="fade-down">
                    <div className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg mb-6 ">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Vì sao chọn Nemark đồng hành cùng bạn!
                        </h2>
                    </div>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-primary"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <div className="flex items-start gap-6">
                                {/* Icon */}
                                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                                    <span className="material-icons-outlined text-primary text-4xl">
                                        {reason.icon}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {reason.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-primary hover:bg-primary-dark text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        Nhận tư vấn miễn phí
                    </button>
                </div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
