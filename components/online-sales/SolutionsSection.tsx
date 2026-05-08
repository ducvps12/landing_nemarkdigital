import Image from 'next/image';

export default function SolutionsSection() {
    const solutions = [
        {
            number: "1",
            title: "Tự Chủ Nền Tảng Kinh Doanh",
            description: "Xóa bỏ hoàn toàn rủi ro phụ thuộc vào người khác, không còn rủi ro bị khoản hoặc bất kỳ hạn chế nào về các quy tắc của các sàn TMĐT.",
            bgImage: "/online-sales/sol-1.png"
        },
        {
            number: "2",
            title: "Tối Ưu Hóa Biên Lợi Nhuận",
            description: "Cắt giảm trực tiếp các chi phí trung gian như (phí sàn, hoa hồng, giá tùng điều kiện), điều này giúp bạn có thể cải thiện biên lợi nhuận ròng của mình rõng rãi hơn.",
            bgImage: "/online-sales/sol-2.png"
        },
        {
            number: "3",
            title: "Sở Hữu Trọn Vẹn Dữ Liệu Khách Hàng",
            description: "Chuyển đổi từ việc đi thuê sang sở hữu 100% dữ liệu khách hàng cho phép doanh nghiệp thống kê kỹ (SDT, Email, hành vi mua sắm) để triển khai tích hợp chiến lược Remarketing chính xác, điều mà các sàn thương mại không cho phép.",
            bgImage: "/online-sales/sol-3.png"
        },
        {
            number: "4",
            title: "Nâng Tầm Uy Tín Thương Hiệu",
            description: "Sở hữu Website/App với giao diện tùy chỉnh khá thân thiện, giúp tạo ấn tượng ban đầu tốt với khách hàng và định vị doanh nghiệp ở phân khúc cao hơn so các shop lẻ trên các sàn thương mại.",
            bgImage: "/online-sales/sol-4.png"
        },
        {
            number: "5",
            title: "Gia Tăng Giá Trị Vòng Đời Khách Hàng",
            description: "Tích hợp chức năng cho khách hàng thành công nhất, tính năng cho khách cũ với, thiết kế chính sách ưu đãi/bởi điều này cho phép tối ưu nhất tỷ lệ quay trở lại (Retention Rate), từ đó gia tăng giá trị vòng đời khách hàng.",
            bgImage: "/online-sales/sol-5.png"
        },
        {
            number: "6",
            title: "Vận Hành Tự Động & Tinh Gọn",
            description: "Hệ thống tích toàn bộ về quy trình tự từ hàng, thanh toàn, giao hàng truy cản trạng thái linh hoạt; giao phô giúp tiết giảm thành công, quy quy trình và giảm sai số của quy định tất tốc lực thu thêm nhập nhằn.",
            bgImage: "/online-sales/sol-6.png"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-12 text-center" data-aos="fade-down">
                    <div className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg mb-6 ">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Giải pháp Nemark
                        </h2>
                    </div>
                </div>

                {/* Solutions Grid with Background Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group relative h-96 rounded-2xl hover:rounded-tl-[4rem] hover:rounded-br-[4rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
                            data-aos="flip-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Background Image */}
                            <Image
                                src={solution.bgImage}
                                alt={solution.title}
                                fill
                                className="object-cover"
                            />

                            {/* Default overlay - gradient for readability */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/60 to-black/40 transition-all duration-300"></div>

                            {/* Hover overlay - darker */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/65 transition-all duration-300"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                {/* Number Badge */}
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg">
                                    {solution.number}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-4 transition-all duration-300">
                                    {solution.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-200 group-hover:text-white leading-relaxed text-sm transition-all duration-300">
                                    {solution.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
