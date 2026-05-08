'use client'

export default function WebsiteBenefits() {
    const benefits = [
        {
            title: "Nâng tầm vị thế thương hiệu",
            description: "Kiến tạo diện mạo chuyên nghiệp, xây dựng niềm tin vững chắc và ấn tượng khác biệt trong tâm trí khách hàng."
        },
        {
            title: "Mở rộng thị trường không giới hạn",
            description: "Phá bỏ rào cản địa lý và thời gian, đưa sản phẩm/dịch vụ tiếp cận khách hàng tiềm năng mọi lúc, mọi nơi."
        },
        {
            title: "Tối ưu trải nghiệm khách hàng",
            description: "Giao diện tinh tế, tốc độ mượt mà giúp giữ chân người dùng lâu hơn và tăng khả năng tương tác trực tiếp."
        },
        {
            title: "Nền tảng chuẩn SEO & Công nghệ",
            description: "Cấu trúc tối ưu giúp website dễ dàng đứng top tìm kiếm Google, tương thích hoàn hảo trên mọi thiết bị di động."
        },
        {
            title: "Đột phá tỷ lệ chuyển đổi doanh số",
            description: "Biến website thành \"nhân viên bán hàng\" xuất sắc nhất, thúc đẩy hành vi mua hàng và gia tăng lợi nhuận bền vững."
        }
    ];

    const cardClasses = "group bg-white rounded-2xl p-6 border-2 border-primary/30 shadow-sm hover:bg-primary hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer";

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark leading-tight">
                        Bạn sẽ có được những điều tuyệt vời gì sau khi sở hữu<br />
                        <span className="text-primary">Thiết Kế Website Chuyên Nghiệp?</span>
                    </h2>
                </div>

                {/* 5 Cards - 3 on top, 2 on bottom */}
                <div className="space-y-6">
                    {/* Row 1 - 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {benefits.slice(0, 3).map((benefit, index) => (
                            <div
                                key={index}
                                className={cardClasses}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <h3 className="font-bold text-primary-dark mb-3 group-hover:text-white transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 - 2 cards centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {benefits.slice(3, 5).map((benefit, index) => (
                            <div
                                key={index}
                                className={cardClasses}
                                data-aos="fade-up"
                                data-aos-delay={(index + 3) * 100}
                            >
                                <h3 className="font-bold text-primary-dark mb-3 group-hover:text-white transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
