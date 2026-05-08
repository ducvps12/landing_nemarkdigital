export default function SolutionsSection() {
    const solutions = [
        {
            number: "01",
            title: "Số hóa nền tảng doanh nghiệp",
            description: "Xây dựng Website, Web App và hệ thống số làm nền tảng vận hành."
        },
        {
            number: "02",
            title: "Tối ưu quy trình vận hành",
            description: "Tự động hóa quy trình, giảm thủ công, tăng hiệu suất làm việc."
        },
        {
            number: "03",
            title: "Quản lý dữ liệu tập trung",
            description: "Kết nối và quản lý dữ liệu khách hàng, vận hành, kinh doanh."
        },
        {
            number: "04",
            title: "Nâng cao trải nghiệm khách hàng",
            description: "Cá nhân hóa trải nghiệm, tăng tương tác trên các kênh số."
        },
        {
            number: "05",
            title: "Chiến lược chuyển đổi số",
            description: "Tư vấn lộ trình phù hợp theo từng giai đoạn phát triển."
        },
        {
            number: "06",
            title: "Đồng hành & tối ưu dài hạn",
            description: "Bảo trì, nâng cấp và cải tiến hệ thống liên tục."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-12 text-center" data-aos="fade-down">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
                        Giải pháp Nemark
                    </h2>
                </div>

                {/* Solutions Grid - 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                            style={{ borderRadius: '24px 8px 24px 8px' }}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Header: Number + Title */}
                            <div className="flex items-center gap-4 mb-4">
                                {/* Number with yellow border */}
                                <div className="w-12 h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                                    <span className="text-xl font-bold text-primary">{solution.number}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-900 flex-1">
                                    {solution.title}
                                </h3>
                            </div>

                            {/* Underline */}
                            <div className="w-full h-0.5 bg-gray-200 mb-4"></div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {solution.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

