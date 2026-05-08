'use client'

export default function WhyNemarkSection() {
    const reasons = [
        {
            title: 'Tiên phong làm chủ công nghệ mới',
            description: 'Luôn cập nhật và ứng dụng các giải pháp công nghệ mới nhất (AI, Big Data...), giúp doanh nghiệp tối ưu vận hành và không bị tụt hậu.',
            icon: 'emoji_events'
        },
        {
            title: 'Tốc độ thực thi & Sự linh hoạt',
            description: 'Quy trình tinh gọn, loại bỏ thủ tục rườm rà. Cam kết tiến độ triển khai thần tốc, giúp Startup chớp lấy cơ hội kinh doanh.',
            icon: 'paid'
        },
        {
            title: 'Tận tâm & Trách nhiệm',
            description: 'Đặt lợi ích khách hàng lên hàng đầu. Chúng tôi nỗ lực hơn 100% sức lực trong từng dự án để khẳng định uy tín và chất lượng.',
            icon: 'chat'
        },
        {
            title: 'Tư duy đột phá lối mòn',
            description: 'Sáng tạo nhưng thực tế. Mang đến những giải pháp khác biệt, giúp thương hiệu Startup tách mình ra khỏi đám đông đối thủ.',
            icon: 'settings'
        }
    ]

    return (
        <section className="py-4 lg:py-6 bg-[#E8F4FC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                    <h2
                        className="inline-block text-2xl md:text-3xl lg:text-4xl font-bold text-white px-8 py-4 rounded-lg italic"
                        style={{ background: 'linear-gradient(to right, #4988C4, #4988C4, #BDE8F5)' }}
                    >
                        LÝ DO NEMARK ĐƯỢC CÁC ĐỐI TÁC TIN TƯỞNG!
                    </h2>
                </div>

                {/* Reasons Grid - 2x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Content */}
                            <div className="relative z-10 pr-16">
                                <h3 className="text-lg lg:text-xl font-bold text-primary mb-3 uppercase">
                                    {reason.title}
                                </h3>
                                <p className="text-black/80 text-sm lg:text-base leading-relaxed font-['Montserrat']">
                                    {reason.description}
                                </p>
                            </div>

                            {/* Icon - Bottom Right Corner */}
                            <div className="absolute bottom-0 right-0 text-primary/30 group-hover:text-primary/50 group-hover:scale-110 transition-all duration-300">
                                <span className="material-icons-outlined" style={{ fontSize: '120px' }}>
                                    {reason.icon}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
