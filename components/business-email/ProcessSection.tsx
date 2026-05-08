export default function ProcessSection() {
    const steps = [
        {
            step: 1,
            title: 'Tư vấn & Khảo sát',
            description: 'Phân tích nhu cầu doanh nghiệp'
        },
        {
            step: 2,
            title: 'Lựa chọn gói',
            description: 'Chọn gói phù hợp & Ký kết'
        },
        {
            step: 3,
            title: 'Đăng ký & Kích hoạt',
            description: 'Thanh toán và kích hoạt'
        },
        {
            step: 4,
            title: 'Cấu hình kỹ thuật',
            description: 'Thiết lập DNS & MX Record'
        },
        {
            step: 5,
            title: 'Khởi tạo User',
            description: 'Tạo tài khoản & Bàn giao'
        },
        {
            step: 6,
            title: 'Hỗ trợ & Bảo hành',
            description: 'Đồng hành 24/7'
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                    QUY TRÌNH TRIỂN KHAI
                </h2>
                <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                    Quy trình 6 bước chuyên nghiệp để triển khai Email doanh nghiệp
                </p>

                {/* Desktop Timeline - Zigzag */}
                <div className="hidden lg:block relative my-2 px-16">
                    <div className="relative" style={{ minHeight: '600px' }}>
                        {/* Horizontal timeline line - fixed at 200px from top */}
                        <div className="absolute left-16 right-16 h-0.5 bg-gray-300" style={{ top: '200px' }}></div>

                        {/* Steps grid */}
                        <div className="grid grid-cols-6 gap-6 relative" style={{ top: '200px' }}>
                            {steps.map((item, index) => {
                                const isTop = index % 2 === 0;

                                return (
                                    <div key={item.step} className="relative">
                                        {/* Card positioned above or below */}
                                        <div className={`${isTop ? 'absolute bottom-16 -left-10 -right-10' : 'absolute top-16 -left-10 -right-10'}`}>
                                            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border-2 border-primary/30">
                                                <div className="text-gray-900 font-bold text-sm mb-3">
                                                    Bước {item.step}: {item.title}
                                                </div>
                                                <p className="text-sm text-primary leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Vertical connecting line */}
                                        <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-primary/50 ${isTop ? 'bottom-0 h-16' : 'top-0 h-16'}`}></div>

                                        {/* Circle dot on timeline */}
                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-gray-300 rounded-full z-10"></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet - Vertical Timeline */}
                <div className="lg:hidden relative max-w-4xl mx-auto">
                    {/* Vertical Line on Left */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary-dark to-primary" />

                    {/* Steps */}
                    <div className="space-y-8">
                        {steps.map((item, index) => (
                            <div key={item.step} className="relative flex items-start gap-6">
                                {/* Circle on Timeline */}
                                <div className="relative z-10 shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white">
                                    {item.step}
                                </div>

                                {/* Content Card on Right */}
                                <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-primary">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
