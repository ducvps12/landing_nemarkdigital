import Image from 'next/image';

export default function BenefitsSection() {
    const benefits = [
        {
            number: "1",
            title: "Nghiên cứu & Hoạch định chiến lược",
            points: [
                "Phân tích sâu Insight thị trường, chân dung khách hàng mục tiêu và \"giải mã\" chiến thuật của đối thủ cạnh tranh.",
                "Tư vấn định vị thương hiệu khác biệt, xây dựng lộ trình phủ sóng thương hiệu bài bản theo từng giai đoạn."
            ]
        },
        {
            number: "2",
            title: "Xây dựng & Quản lý nền tảng Online",
            points: [
                "Thiết kế Website/App chuẩn UI/UX, tốc độ cao và tối ưu SEO tổng thể để chiếm lĩnh Top tìm kiếm Google.",
                "Vận hành và chăm sóc toàn diện hệ thống kênh Social (Fanpage, TikTok, Zalo OA) giúp duy trì tương tác liên tục."
            ]
        },
        {
            number: "3",
            title: "Sản xuất nội dung & Thiết kế nhận diện",
            points: [
                "Sáng tạo nội dung đa định dạng: Bài viết chuẩn SEO, kịch bản Video ngắn (Reels/TikTok), hình ảnh quảng cáo thu hút.",
                "Thiết kế bộ nhận diện thương hiệu đồng bộ (Logo, Profile, Catalogue, Namecard) giúp nâng tầm uy tín doanh nghiệp."
            ]
        },
        {
            number: "4",
            title: "Quảng cáo Performance & Truyền thông đa kênh",
            points: [
                "Triển khai chiến dịch quảng cáo bám đuổi (Facebook, Google, TikTok Ads) nhắm đúng khách hàng tiềm năng.",
                "Kết hợp chiến thuật Remarketing (Tiếp thị lại) để gia tăng tỷ lệ chốt đơn và tối ưu chi phí chuyển đổi."
            ]
        },
        {
            number: "5",
            title: "Đo lường & Tối ưu hiệu quả (Data Driven)",
            points: [
                "Hệ thống báo cáo minh bạch các chỉ số quan trọng (Traffic, Lead, Doanh thu, ROI) theo thời gian thực.",
                "Liên tục A/B Testing và điều chỉnh kỹ thuật để tối đa hóa hiệu quả đầu tư và cắt giảm ngân sách lãng phí."
            ]
        }
    ];

    return (
        <section className="py-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-12 text-center" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
                        QUY TRÌNH XÂY DỰNG THƯƠNG HIỆU SỐ
                    </h2>
                </div>

                {/* 2 Column Layout: Content Left, Image Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left - Content */}
                    <div className="space-y-4" data-aos="fade-right">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg hover:bg-primary/10 transition-all duration-300 border-l-4 border-primary"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full border-2 border-yellow-400 flex items-center justify-center flex-shrink-0">
                                        <span className="text-sm font-bold text-primary">{benefit.number}</span>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900">
                                        {benefit.title}
                                    </h3>
                                </div>

                                {/* Points */}
                                <ul className="space-y-2 pl-11">
                                    {benefit.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-primary mt-0.5 text-sm">•</span>
                                            <p className="text-sm text-gray-600 leading-relaxed">{point}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Right - Image */}
                    <div className="relative h-full group" data-aos="fade-left">
                        <div className="sticky top-24 rounded-2xl overflow-hidden shadow-xl h-full min-h-[600px]">
                            <Image
                                src="/banner/branding-process.png"
                                alt="Digital Branding Process"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


