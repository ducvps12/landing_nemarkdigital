'use client'

export default function WebsiteWhyNeeded() {
    const benefits = [
        {
            title: "Trải nghiệm người dùng (UX/UI) là tiên quyết",
            description: "Giao diện không chỉ cần \"đẹp\" mà phải trực quan và mượt mà, giữ chân khách hàng ngay trong 3 giây đầu tiên."
        },
        {
            title: "Tốc độ & Mobile-First",
            description: "Bắt buộc phải tải nhanh (dưới 2s) và hoạt động hoàn hảo trên thiết bị di động – nơi chiếm hơn 70% hành vi mua sắm hiện nay."
        },
        {
            title: "Tối ưu tỷ lệ chuyển đổi",
            description: "Chuyển dịch từ dạng \"trang tin tức\" sang \"trang bán hàng\", được thiết kế có chủ đích để dẫn dắt người xem hành động (Mua hàng/Liên hệ) ngay lập tức."
        },
        {
            title: "Nền tảng Dữ liệu (Data-Driven)",
            description: "Tích hợp sẵn các công cụ đo lường chuyên sâu để thấu hiểu hành vi khách hàng thực tế, thay vì vận hành theo cảm tính."
        },
        {
            title: "Chuẩn SEO & Tự động hóa",
            description: "Cấu trúc code chuẩn SEO Google ngay từ gốc và sẵn sàng tích hợp các công cụ Marketing tự động để giảm tải chi phí nhân sự."
        }
    ];

    return (
        <section className="py-16 bg-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark uppercase mb-4 leading-tight">
                        VÌ SAO MỖI DOANH NGHIỆP NÊN CÓ MỘT <span className="text-accent">WEBSITE</span> CHUYÊN NGHIỆP VÀ CHỈN CHU?
                    </h2>
                    <p className="text-lg text-gray-700">
                        Theo <span className="font-bold text-primary-dark">GOOGLE</span>,
                        hơn <span className="font-bold text-accent">90% NGƯỜI DÙNG</span> đánh giá
                        mức độ <span className="font-bold text-accent">UY TÍN</span> của doanh nghiệp dựa trên website.
                    </p>
                </div>

                {/* 5 Cards - 3 on top, 2 on bottom */}
                <div className="space-y-6">
                    {/* Row 1 - 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {benefits.slice(0, 3).map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary hover:shadow-lg transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <h3 className="font-bold text-primary-dark mb-2">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 - 2 cards centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {benefits.slice(3, 5).map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary hover:shadow-lg transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={(index + 3) * 100}
                            >
                                <h3 className="font-bold text-primary-dark mb-2">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
