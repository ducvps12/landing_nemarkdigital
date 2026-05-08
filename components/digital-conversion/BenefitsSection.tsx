export default function BenefitsSection() {
    const benefits = [
        {
            number: "1",
            title: "Tối ưu vận hành",
            description: "Tự động hóa quy trình, giảm chi phí và thời gian xử lý công việc."
        },
        {
            number: "2",
            title: "Nâng cao trải nghiệm khách hàng",
            description: "Phục vụ nhanh hơn, cá nhân hóa tốt hơn trên các nền tảng số."
        },
        {
            number: "3",
            title: "Quản lý dữ liệu hiệu quả",
            description: "Dữ liệu tập trung, hỗ trợ phân tích và ra quyết định chính xác."
        },
        {
            number: "4",
            title: "Tăng năng lực cạnh tranh",
            description: "Sẵn sàng mở rộng, thích ứng nhanh với thị trường và xu hướng mới."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-12 text-center" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
                        Lợi ích chuyển đổi số
                    </h2>
                </div>

                {/* Benefits Grid - Text Only */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Number */}
                            <div className="text-4xl font-bold text-primary mb-3">
                                {benefit.number}.
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
