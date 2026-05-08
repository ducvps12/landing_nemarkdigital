'use client'

import Image from 'next/image'

export default function SolutionsSection() {
    const solutions = [
        {
            number: '1',
            title: 'Thiết kế Website & Branding',
            description: 'Kiến tạo "cửa hàng số" chuyên nghiệp với giao diện UX/UI hiện đại, chuẩn SEO. Chúng tôi cũng nhận thiết kế logo, bộ nhận diện thương hiệu, banner, hình ảnh tự động, giúp định vị thương hiệu và gia tăng tỷ lệ chuyển đổi khách hàng.',
            image: '/images/nemark-speed-optimization.png'
        },
        {
            number: '2',
            title: 'Chiến lược Marketing Digital',
            description: 'Cung cấp giải pháp Marketing thực chiến (SEO, Content, Ads...). Tập trung vào các chỉ số hiệu quả (Performance), giúp doanh nghiệp tiếp cận đúng khách hàng mục tiêu và bứt phá doanh thu.',
            image: '/images/nemark-growth-benefits.png'
        },
        {
            number: '3',
            title: 'Hạ tầng Kỹ thuật số (Domain/Hosting)',
            description: 'Cung cấp nền tảng kỹ thuật vững chắc cho hệ thống: Tên miền dễ nhớ và hệ thống Hosting/VPS tốc độ cao, đảm bảo hoạt động kinh doanh online luôn ổn định, mượt mà và bảo mật.',
            image: '/images/nemark-maintenance-hero.png'
        },
        {
            number: '4',
            title: 'Email Doanh nghiệp & Văn phòng số',
            description: 'Chuẩn hóa quy trình giao tiếp với hệ thống Email theo tên miền riêng. Giải pháp giúp nâng tầm tính chuyên nghiệp trong mắt đối tác và bảo vệ tuyệt đối dữ liệu nội bộ của doanh nghiệp.',
            image: '/images/nemark-api-hero.png'
        },
        {
            number: '5',
            title: 'Giải pháp Tài nguyên MMO (Proxy/IP)',
            description: 'Cung cấp hệ thống Proxy/IP Private chất lượng cao và các công cụ hỗ trợ chuyên biệt. Đây là giải pháp tối ưu cho các mô hình kinh doanh E-commerce, mở tài khoản và chạy quảng cáo đa nền tảng.',
            image: '/images/nemark-work-process.png'
        }
    ]

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-6" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
                        Giải pháp <span className="text-primary">Nemark cung cấp</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                {/* Subtitle */}
                <div className="text-center max-w-4xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
                    <p className="text-gray-600 leading-relaxed">
                        Nếu bạn đang tìm kiếm một Agency có khả năng thấu hiểu bài toán kinh doanh và cung cấp hệ sinh thái{' '}
                        <span className="font-semibold text-primary">Công nghệ – Marketing trọn gói</span>, giúp tối ưu hóa chi phí vận hành mà vẫn đảm bảo sự tăng trưởng vượt bậc thì Nemark sẽ là một đối tác uy tín, mang đến hiệu quả cao và cam kết đồng hành bền vững cùng doanh nghiệp của bạn.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            {/* Image */}
                            <div className="h-40 overflow-hidden">
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    width={300}
                                    height={200}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 flex-1 flex flex-col">
                                {/* Title */}
                                <h3 className="text-primary font-bold text-sm mb-2 leading-tight">
                                    {solution.number}. {solution.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-xs leading-relaxed flex-1">
                                    {solution.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
