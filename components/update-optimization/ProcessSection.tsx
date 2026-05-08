export default function ProcessSection() {
    const steps = [
        {
            step: 1,
            title: "Audit & Phân tích hiện trạng",
            description: "Đánh giá toàn diện website hiện tại, phân tích điểm mạnh và điểm yếu"
        },
        {
            step: 2,
            title: "Tư vấn giải pháp & Lên ý tưởng",
            description: "Đề xuất giải pháp tối ưu và lên kế hoạch triển khai chi tiết"
        },
        {
            step: 3,
            title: "Tái thiết kế Giao diện",
            description: "Thiết kế lại giao diện hiện đại, tối ưu trải nghiệm người dùng"
        },
        {
            step: 4,
            title: "Nâng cấp Kỹ thuật & Tốc độ",
            description: "Tối ưu code, nâng cấp công nghệ, cải thiện tốc độ tải trang"
        },
        {
            step: 5,
            title: "Tối ưu Nội dung & Chuyển đổi",
            description: "Cải thiện nội dung, tối ưu CTA và tỷ lệ chuyển đổi"
        },
        {
            step: 6,
            title: "Kiểm thử & Bàn giao",
            description: "Kiểm tra toàn diện, đào tạo và bàn giao website hoàn chỉnh"
        }
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                    QUY TRÌNH
                </h2>
                <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                    Quy trình 6 bước chuyên nghiệp để nâng cấp và tối ưu website của bạn
                </p>

                {/* Vertical Timeline */}
                <div className="relative">
                    {/* Vertical Line - Left side */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-secondary"></div>

                    {/* Steps */}
                    <div className="space-y-8">
                        {steps.map((item) => (
                            <div key={item.step} className="relative flex items-start gap-6">
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
