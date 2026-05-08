export default function ProcessSection() {
    const steps = [
        {
            step: 1,
            title: "Tiếp nhận nhu cầu",
            description: "Tiếp nhận nhu cầu & tư vấn dịch vụ VPS"
        },
        {
            step: 2,
            title: "Tư vấn gói VPS",
            description: "Tư vấn và đề xuất gói VPS phù hợp"
        },
        {
            step: 3,
            title: "Khởi tạo VPS",
            description: "Khởi tạo VPS theo cấu hình đã chọn"
        },
        {
            step: 4,
            title: "Cài đặt hệ thống",
            description: "Cài đặt hệ điều hành & cấu hình bảo mật cơ bản"
        },
        {
            step: 5,
            title: "Kiểm tra & tối ưu",
            description: "Kiểm tra hoạt động, tối ưu truy cập ban đầu"
        },
        {
            step: 6,
            title: "Bàn giao",
            description: "Bàn giao thông tin quản trị & hỗ trợ vận hành"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title with primary background bar */}
                <div className="mb-16">
                    <div className="bg-primary text-white text-center py-4 rounded-lg">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            QUY TRÌNH
                        </h2>
                    </div>
                </div>

                {/* Desktop Timeline - Zigzag */}
                <div className="hidden lg:block relative my-2 px-16">
                    <div className="relative" style={{ minHeight: '600px' }}>
                        {/* Horizontal timeline line - fixed at 200px from top */}
                        <div className="absolute left-16 right-16 h-0.5 bg-primary/30" style={{ top: '200px' }}></div>

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
                                                <p className="text-sm text-primary font-medium leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Vertical connecting line */}
                                        <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-primary/50 ${isTop ? 'bottom-0 h-16' : 'top-0 h-16'}`}></div>

                                        {/* Circle dot on timeline */}
                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary border-2 border-white rounded-full z-10 shadow"></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Timeline - Vertical */}
                <div className="lg:hidden space-y-6">
                    {steps.map((item, index) => (
                        <div
                            key={item.step}
                            className="relative flex items-start gap-4"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Connecting Line (except for last) */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-primary/30 -mb-6"></div>
                            )}

                            {/* Circle */}
                            <div className="relative z-10 shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">
                                    {item.step}
                                </span>
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow border-l-4 border-primary">
                                <h3 className="font-bold text-lg text-gray-900 mb-1">
                                    Bước {item.step}: {item.title}
                                </h3>
                                <p className="text-primary leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
