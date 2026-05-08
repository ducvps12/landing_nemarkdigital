'use client'

export default function WebsiteSolutions() {
    const solutions = [
        {
            number: "01",
            title: "Thiết kế theo hành trình người dùng",
            description: "Giao diện được xây dựng chuẩn UX – UI, bám sát hành vi người dùng trên từng điểm chạm."
        },
        {
            number: "02",
            title: "Giao diện độc bản & Nhận diện thương hiệu",
            description: "Website được thiết kế thống nhất với bộ nhận diện của doanh nghiệp: từ màu sắc, font chữ cho đến phong cách hình ảnh."
        },
        {
            number: "03",
            title: "Tối ưu cấu trúc chuẩn SEO Google",
            description: "Toàn bộ cấu trúc, tiêu đề, hình ảnh và liên kết nội bộ đều được tối ưu theo tiêu chí SEO."
        },
        {
            number: "04",
            title: "Tương thích đa thiết bị (Responsive)",
            description: "Thiết kế chuẩn responsive 100%, website hiển thị đẹp và đầy đủ tính năng trên cả máy tính, điện thoại & tablet."
        },
        {
            number: "05",
            title: "Tốc độ tải trang & Bảo mật tối ưu",
            description: "Website được tối ưu tốc độ tải trang và bảo mật cao, giúp website dễ dàng lên top Google."
        },
        {
            number: "06",
            title: "Hệ quản trị thông minh & Dễ sử dụng",
            description: "Website được xây dựng trên nền tảng linh hoạt, dễ dàng tích hợp các công cụ như: thanh toán online, email marketing,..."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-4" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark uppercase">
                        NEMARK GIẢI PHÁP THIẾT KẾ WEBSITE TOÀN DIỆN CHO DOANH NGHIỆP
                    </h2>
                </div>
                <p className="text-center text-gray-600 mb-12" data-aos="fade-up">
                    Không chỉ kiến tạo các mẫu website ấn tượng....
                </p>

                {/* Solutions Grid 3x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="solution-card bg-white p-6 border border-gray-200 hover:border-primary hover:shadow-xl group"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Number and Title */}
                            <div className="flex items-start gap-4 mb-4">
                                <span className="solution-number text-5xl font-bold text-primary group-hover:text-primary-dark transition-all duration-300">
                                    {solution.number}
                                </span>
                                <h3 className="text-lg font-bold text-primary-dark pt-2 leading-tight">
                                    {solution.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {solution.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .solution-card {
                    border-radius: 2rem 0.5rem 2rem 0.5rem;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .solution-card:hover {
                    border-radius: 0.5rem 2rem 0.5rem 2rem;
                }
                .solution-number {
                    text-shadow: 2px 2px 4px rgba(73, 136, 196, 0.3),
                                 0 4px 8px rgba(73, 136, 196, 0.2);
                    line-height: 1;
                    min-width: 70px;
                }
                .group:hover .solution-number {
                    text-shadow: 3px 3px 6px rgba(26, 54, 93, 0.4),
                                 0 6px 12px rgba(26, 54, 93, 0.25);
                    transform: scale(1.08);
                }
            `}</style>
        </section>
    );
}
