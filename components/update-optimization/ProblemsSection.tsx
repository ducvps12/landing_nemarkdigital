export default function ProblemsSection() {
    const problems = [
        {
            title: "Website load chậm",
            description: "Trang web tải lâu, khách hàng rời bỏ trước khi xem nội dung"
        },
        {
            title: "Giao diện<br />lỗi thời",
            description: "Thiết kế cũ kỹ, không thu hút và giữ chân người dùng"
        },
        {
            title: "Không dùng trên Mobile",
            description: "Hiển thị lỗi trên điện thoại, mất phần lớn khách hàng"
        },
        {
            title: "Cấu trúc không chuẩn SEO",
            description: "Không xuất hiện trên Google, khó tiếp cận khách hàng mới"
        },
        {
            title: "Tỷ lệ chuyển đổi thấp",
            description: "Có traffic nhưng ít người thực hiện hành động mong muốn"
        }
    ]

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 uppercase">
                    VẤN ĐỀ KHÁCH HÀNG THƯỜNG GẶP
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg md:text-xl">
                    Những thách thức phổ biến khiến website của bạn mất cơ hội kinh doanh
                </p>

                {/* Horizontal layout - 5 columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="text-center group"
                        >
                            {/* Title */}
                            <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300" dangerouslySetInnerHTML={{ __html: problem.title }}>
                            </h3>

                            {/* Description */}
                            <p className="text-base font-medium text-gray-700 leading-relaxed">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
