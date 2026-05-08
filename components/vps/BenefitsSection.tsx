export default function BenefitsSection() {
    const benefits = [
        {
            number: 1,
            title: "Lượng truy cập tăng cao",
            description: "Website có lượng truy cập lớn cần tài nguyên mạnh mẽ và ổn định"
        },
        {
            number: 2,
            title: "Cần tốc độ & hiệu suất ổn định",
            description: "Yêu cầu tốc độ tải trang nhanh và hiệu suất cao liên tục"
        },
        {
            number: 3,
            title: "Cần quyền quản trị & cấu hình riêng",
            description: "Muốn tự do cài đặt và cấu hình server theo nhu cầu riêng"
        },
        {
            number: 4,
            title: "Cần bảo mật & khả năng mở rộng",
            description: "Đảm bảo an toàn dữ liệu và dễ dàng nâng cấp khi cần"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title with green background bar */}
                <div className="mb-12">
                    <div className="bg-primary text-white text-center py-4 rounded-lg">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Khi nào cần VPS?
                        </h2>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.number}
                            className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300"
                        >
                            {/* Number Badge */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                    {benefit.number}
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 leading-tight pt-2">
                                    {benefit.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
