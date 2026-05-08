export default function WhyBrandSection() {
    const reasons = [
        {
            description: "Dễ tuyển dụng và giữ chân nhân tài. Ứng viên chất lượng chỉ chọn bến đỗ chuyên nghiệp, giúp bạn giảm đau đầu vì nhân sự ra vào liên tục."
        },
        {
            description: "Rút ngắn thời gian tư vấn. Thương hiệu uy tín giúp xóa bỏ sự nghi ngờ của khách. Sale không tốn thời gian \"thanh minh\", chỉ tập trung \"chốt đơn\"."
        },
        {
            description: "Lợi thế đàm phán với đối tác. Hồ sơ năng lực \"sang xịn\" giúp bạn ở thế cửa trên khi deal giá nhập hàng hoặc công nợ với nhà cung cấp."
        },
        {
            description: "Dễ dàng sang nhượng hoặc nhượng quyền. Dễ dàng đóng gói quy trình để nhượng quyền (Franchise) hoặc sang nhượng lại công ty với định giá cao."
        }
    ];

    return (
        <section className="py-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-12 text-center" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
                        VÌ SAO CẦN THƯƠNG HIỆU SỐ
                    </h2>
                </div>

                {/* Reasons Grid - Icon + Text */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="text-center"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Circle Icon */}
                            <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-icons text-white text-2xl">
                                    priority_high
                                </span>
                            </div>

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


