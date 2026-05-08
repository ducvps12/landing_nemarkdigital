'use client'

export default function WhyProxySection() {
    const benefits = [
        {
            number: "1",
            title: "Quản trị Đa tài khoản",
            description: "Giải quyết triệt để vấn đề quản lý hàng trăm đến hàng ngàn tài khoản Facebook, TikTok, Zalo, Google, YouTube... Giúp mỗi nick sở hững 1 IP riêng, chạy quảng cáo an toàn và hạn chế tối đa tình trạng khóa tài khoản (Checkpoint).",
            icon: "account_circle"
        },
        {
            number: "2",
            title: "Kinh doanh TMĐT Quốc tế",
            description: "Gia lộp IP quốc tế (Mỹ, Anh, Áu...) chuẩn xác để truy cập Dropshipping, eBay, Amazon, Etsy (Tráo Trọn) cho gian tối ưu tài khoản quảng cáo.",
            icon: "shopping_cart"
        },
        {
            number: "3",
            title: "Hỗ trợ SEO & Thu thập dữ liệu",
            description: "Giúp các phần mềm Marketing, tool SEO thu thập dữ liệu từ nhiều nguồn khác nhau, tránh bị chặn (Block) ITĐ liên tục, tóc độ cao mà không bị chặn (Block) IP.",
            icon: "search"
        },
        {
            number: "4",
            title: "Bảo Mật & Ẩn Danh Tuyệt Đối",
            description: "Ẩn địa chỉ IP thật để bảo vệ danh tính doanh nghiệp, Mã hóa kết nối mang lạnh bảo mật tuyệt đối khi làm việc với hệ thống và dữ liệu nhạy cảm giúp giảo diện tấn chính và truy cập Internet an toàn, riêng tư.",
            icon: "security"
        }
    ]

    return (
        <section className="py-20 bg-[#7CB342]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-16"
                    data-aos="fade-up"
                >
                    Proxy dùng để làm gì?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {benefit.number}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
