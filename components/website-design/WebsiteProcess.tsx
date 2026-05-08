'use client'

export default function WebsiteProcess() {
    const steps = [
        {
            step: 1,
            title: "Tiếp nhận & Tư vấn giải pháp",
            description: "Lắng nghe nhu cầu, phân tích yêu cầu và đề xuất giải pháp website phù hợp nhất"
        },
        {
            step: 2,
            title: "Ký hợp đồng & Lên ý tưởng",
            description: "Xác nhận phạm vi dự án, ký kết hợp đồng và phát triển ý tưởng thiết kế"
        },
        {
            step: 3,
            title: "Thiết kế giao diện (UI/UX)",
            description: "Thiết kế giao diện độc đáo, tối ưu trải nghiệm người dùng chuẩn UX/UI"
        },
        {
            step: 4,
            title: "Lập trình & Tối ưu Mobile",
            description: "Phát triển website với code chuẩn, responsive hoàn hảo trên mọi thiết bị"
        },
        {
            step: 5,
            title: "Cấu hình SEO & Nhập liệu",
            description: "Tối ưu SEO on-page, cấu hình kỹ thuật và nhập nội dung ban đầu"
        },
        {
            step: 6,
            title: "Kiểm tra & nghiệm thu website",
            description: "Test toàn diện, sửa lỗi, đào tạo sử dụng và bàn giao website hoàn chỉnh"
        }
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-dark uppercase mb-4">
                        QUY TRÌNH THIẾT KẾ WEBSITE
                    </h2>
                    <p className="text-lg text-gray-600">
                        Quy trình 6 bước chuyên nghiệp & minh bạch tại NEMARK
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative">
                    {/* Vertical Line - Left side */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-secondary"></div>

                    {/* Steps */}
                    <div className="space-y-8">
                        {steps.map((item) => (
                            <div
                                key={item.step}
                                className="relative flex items-start gap-6"
                                data-aos="fade-up"
                                data-aos-delay={item.step * 100}
                            >
                                {/* Circle on Timeline */}
                                <div className="relative z-10 shrink-0 w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                                </div>

                                {/* Content Card - Full Width */}
                                <div className="flex-1">
                                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary group hover:-translate-y-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.description}
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
