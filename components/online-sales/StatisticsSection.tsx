export default function StatisticsSection() {
    const stats = [
        {
            value: "93%",
            label: "hành vi mua hàng bắt đầu online"
        },
        {
            value: "100%",
            label: "Rủi ro khi phụ thuộc 100% vào Sàn"
        },
        {
            value: "75%",
            label: "Đánh giá uy tín qua Website"
        },
        {
            value: "53%",
            label: "Rời bỏ ngay nếu Web tải chậm >3s"
        },
        {
            value: "80%",
            label: "Khách hàng cũ bị bỏ qua"
        }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Statistics Cards - 2 rows layout */}
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
                    {/* First Row - 2 cards */}
                    {stats.slice(0, 2).map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white border-2 border-primary/30 rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:border-primary transition-all duration-300 col-span-1 lg:col-span-3"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                                {stat.value}
                            </div>
                            <p className="text-sm md:text-base font-medium text-gray-700">
                                {stat.label}
                            </p>
                        </div>
                    ))}

                    {/* Second Row - 3 cards */}
                    {stats.slice(2).map((stat, index) => (
                        <div
                            key={index + 2}
                            className="bg-white border-2 border-primary/30 rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:border-primary transition-all duration-300 col-span-1 lg:col-span-2"
                            data-aos="fade-up"
                            data-aos-delay={(index + 2) * 100}
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                                {stat.value}
                            </div>
                            <p className="text-sm md:text-base font-medium text-gray-700">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
