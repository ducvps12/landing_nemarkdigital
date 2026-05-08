export default function ServicesSection() {
    const services = [
        {
            number: "01",
            title: "Thiết kế theo hành trình người dùng",
            description: "Giao diện được xây dựng chuẩn UX – UI, bám sát hành vi người dùng trên từng điểm chạm."
        },
        {
            number: "02",
            title: "Tối ưu tốc độ, hiển thị mượt mà trên mọi thiết bị",
            description: "Thiết kế chuẩn responsive 100%, website hiển thị đẹp và đầy đủ tính năng trên cả máy tính, điện thoại & tablet."
        },
        {
            number: "03",
            title: "Tùy biến tính năng theo nhu cầu",
            description: "Mỗi website sẽ được Zafago phát triển với tính năng chuyên biệt như: form đăng ký, bộ lọc sản phẩm, booking, chatbot, CRM,..."
        },
        {
            number: "04",
            title: "Tích hợp thanh toán trực tuyến",
            description: "Hỗ trợ tích hợp các cổng thanh toán phổ biến như VNPay, Momo, ZaloPay giúp khách hàng thanh toán dễ dàng và an toàn."
        },
        {
            number: "05",
            title: "Bảo mật cao cấp SSL",
            description: "Website được bảo vệ bằng chứng chỉ SSL, mã hóa dữ liệu và đảm bảo an toàn thông tin khách hàng."
        },
        {
            number: "06",
            title: "Quản trị dễ dàng",
            description: "Hệ thống quản trị trực quan, dễ sử dụng giúp bạn tự cập nhật nội dung, sản phẩm mà không cần kiến thức lập trình."
        },
        {
            number: "07",
            title: "Tối ưu SEO từ đầu",
            description: "Website được xây dựng với cấu trúc chuẩn SEO, giúp Google dễ dàng index và xếp hạng cao trên kết quả tìm kiếm."
        },
        {
            number: "08",
            title: "Hỗ trợ & Bảo hành",
            description: "Đội ngũ hỗ trợ 24/7, bảo hành trọn đời website và cập nhật công nghệ mới nhất để website luôn hoạt động ổn định."
        }
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                    Dịch vụ SEO tại NEMARK
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => {
                        const isOdd = (index + 1) % 2 !== 0;
                        const borderRadiusClass = isOdd
                            ? 'rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md'
                            : 'rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md';

                        return (
                            <div
                                key={service.number}
                                className={`group bg-white p-5 transition-all duration-300 hover:shadow-xl relative overflow-hidden border-2 border-gray-300 ${borderRadiusClass}`}
                            >
                                {/* Blue bottom border on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                                {/* Large outlined number - smaller size */}
                                <div className="mb-3">
                                    <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-br from-orange-400 to-yellow-500"
                                        style={{
                                            WebkitTextStroke: '2px transparent',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundImage: 'linear-gradient(to bottom right, #fb923c, #eab308)',
                                            WebkitBackgroundClip: 'text',
                                            backgroundClip: 'text',
                                        }}>
                                        {service.number}
                                    </span>
                                </div>

                                {/* Title with blue underline - smaller */}
                                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 relative inline-block">
                                    <span className="relative">
                                        {service.title}
                                        <span className="absolute bottom-0 left-0 w-full h-0.5"></span>
                                    </span>
                                </h3>

                                {/* Description - smaller text */}
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-3">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
