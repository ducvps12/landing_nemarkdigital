export default function WhyChooseSection() {
    const reasons = [
        {
            number: "1",
            title: "Tối ưu chi phí",
            description: "Tiết kiệm tối đa ngân sách Marketing và quản lý dữ liệu nhờ hạ tầng máy chủ chất lượng cao, ổn định lâu dài."
        },
        {
            number: "2",
            title: "Hiệu suất vượt trội",
            description: "Tốc độ tải trang nhanh và phản hồi mượt mà giúp giữ chân khách hàng trải nghiệm lâu hơn trên Website/App."
        },
        {
            number: "3",
            title: "Mở rộng kinh doanh",
            description: "Hệ thống dễ dàng kết nối với Mạng xã hội và Sàn TMĐT, giúp tiếp cận khách hàng tiềm năng đa kênh."
        },
        {
            number: "4",
            title: "Quản trị bằng số liệu",
            description: "Chiến lược dựa trên báo cáo chỉ số thực tế (Traffic, ROI, Đơn hàng), đảm bảo hiệu quả đầu tư minh bạch."
        }
    ];

    return (
        <section className="py-6 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-12 text-center" data-aos="fade-down">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
                        VÌ SAO NÊN CHỌN CHÚNG TÔI?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Nếu bạn đang tìm kiếm một đối tác chiến lược không chỉ giỏi công nghệ mà còn am hiểu sâu sắc về kinh doanh thực chiến, Nemark chính là câu trả lời.
                    </p>
                </div>

                {/* Reasons Grid - 4 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 border-2 border-primary hover:bg-primary/10 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Number */}
                            <div className="text-4xl font-bold text-primary mb-3">
                                {reason.number}.
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                {reason.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

