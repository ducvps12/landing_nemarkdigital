import Image from 'next/image';

export default function SolutionsSection() {
    const solutions = [
        {
            icon: "computer",
            title: "CÔNG NGHỆ TIÊN TIẾN",
            description: "Hệ thống Web/App được thiết kế chuẩn UX/UI, tốc độ tải trang nhanh và bảo mật cao, đảm bảo trải nghiệm người dùng mượt mà và giữ chân khách hàng lâu hơn."
        },
        {
            icon: "diamond",
            title: "NÂNG TẦM THƯƠNG HIỆU",
            description: "Xây dựng hình ảnh doanh nghiệp chuyên nghiệp, uy tín trên môi trường số. Giao diện độc quyền giúp khách hàng tin tưởng và khắc sâu ghi nhớ về thương hiệu."
        },
        {
            icon: "trending_up",
            title: "BÙNG NỔ DOANH SỐ",
            description: "Tích hợp các công cụ hỗ trợ bán hàng, quản lý đơn hàng và Marketing tự động, giúp mở rộng tiếp cận khách hàng tiềm năng và gia tăng tỷ lệ chốt đơn."
        },
        {
            icon: "savings",
            title: "TỐI ƯU CHI PHÍ & HỖ TRỢ",
            description: "Tiết kiệm chi phí Marketing dài hạn nhờ nền tảng chuẩn SEO. Cam kết bảo hành, bảo trì trọn đời và hỗ trợ kỹ thuật 24/7 để bạn an tâm kinh doanh."
        }
    ];

    return (
        <section className="py-6 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-12 text-center" data-aos="fade-down">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
                        GIẢI PHÁP NEMARK
                    </h2>
                </div>

                {/* Main Layout: Left + Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Title, Description, Image */}
                    <div data-aos="fade-right">
                        <h3 className="text-xl md:text-2xl font-bold text-primary-dark uppercase mb-4">
                            LỢI ÍCH CHIẾN LƯỢC KHI ĐỒNG HÀNH CÙNG NEMARK
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Việc hợp tác với Nemark giúp doanh nghiệp sở hữu hệ sinh thái Công nghệ & Marketing khép kín.
                            Chúng tôi cung cấp giải pháp chuyển đổi số toàn diện giúp tối ưu vận hành, gia tăng lợi thế cạnh tranh
                            và thúc đẩy tăng trưởng doanh số bền vững.
                        </p>

                        {/* Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                            <Image
                                src="/banner/branding-solutions.png"
                                alt="Digital Solutions"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Right Side - 4 Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-left">
                        {solutions.map((solution, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl p-6 hover:bg-primary/10 transition-all duration-300 border border-gray-100"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                                    <span className="material-icons-outlined text-white text-2xl">
                                        {solution.icon}
                                    </span>
                                </div>

                                {/* Title */}
                                <h4 className="text-lg font-bold text-primary-dark mb-3">
                                    {solution.title}
                                </h4>

                                {/* Description */}
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {solution.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

