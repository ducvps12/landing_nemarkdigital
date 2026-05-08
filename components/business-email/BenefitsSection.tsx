export default function BenefitsSection() {
    const stats = [
        {
            value: '85%',
            label: 'Đối tác ưu tiên hợp tác',
            description: 'Đối tác ưu tiên hợp tác với doanh nghiệp có email chuyên nghiệp'
        },
        {
            value: '99%',
            label: 'Email vào Inbox',
            description: 'Email gửi đi vào thẳng Hộp thư đến, không bị đánh Spam'
        },
        {
            value: '100%',
            label: 'Kiểm soát dữ liệu',
            description: 'Quyền kiểm soát dữ liệu hoàn toàn thuộc về doanh nghiệp'
        },
        {
            value: '42%',
            label: 'Tỷ lệ mở thư cao hơn',
            description: 'Tỷ lệ mở email cao hơn so với email cá nhân miễn phí'
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                        Lợi ích của khách hàng khi sử dụng
                    </h2>
                    <p className="text-slate-600">Số liệu chứng minh hiệu quả từ các đối tác của Nemark</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-primary overflow-hidden group"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
                            
                            {/* Content */}
                            <div className="relative z-10 text-center">
                                <p className="text-5xl font-bold text-primary mb-3">{stat.value}</p>
                                <p className="font-semibold text-slate-900 mb-2">{stat.label}</p>
                                <p className="text-sm text-slate-500 leading-relaxed">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

