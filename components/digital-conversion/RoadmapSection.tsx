export default function RoadmapSection() {
    const steps = [
        {
            step: 1,
            title: "Đánh giá hiện trạng",
            description: "Phân tích quy trình hiện tại, xác định điểm yếu và cơ hội cải thiện"
        },
        {
            step: 2,
            title: "Xây dựng chiến lược",
            description: "Thiết lập mục tiêu, lộ trình và ngân sách cho chuyển đổi số"
        },
        {
            step: 3,
            title: "Triển khai thực hiện",
            description: "Áp dụng công nghệ, đào tạo nhân sự và tối ưu quy trình"
        },
        {
            step: 4,
            title: "Vận hành & Tối ưu",
            description: "Giám sát hiệu quả, điều chỉnh và cải tiến liên tục"
        }
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-16 text-center" data-aos="fade-down">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
                        Lộ trình chuyển đổi
                    </h2>
                </div>

                {/* Desktop Timeline - Zigzag */}
                <div className="hidden lg:block relative my-2 px-16">
                    <div className="relative" style={{ minHeight: '600px' }}>
                        {/* Horizontal timeline line - fixed at 200px from top */}
                        <div className="absolute left-16 right-16 h-0.5 bg-gray-300" style={{ top: '200px' }}></div>

                        {/* Steps grid */}
                        <div className="grid grid-cols-4 gap-6 relative" style={{ top: '200px' }}>
                            {steps.map((item, index) => {
                                const isTop = index % 2 === 0;

                                return (
                                    <div key={item.step} className="relative">
                                        {/* Card positioned above or below */}
                                        <div className={`${isTop ? 'absolute bottom-16 -left-10 -right-10' : 'absolute top-16 -left-10 -right-10'}`}>
                                            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border-2 border-blue-200">
                                                <div className="text-gray-900 font-bold text-sm mb-3">
                                                    Bước {item.step}: {item.title}
                                                </div>
                                                <p className="text-sm text-blue-600 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Vertical connecting line */}
                                        <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-blue-400 ${isTop ? 'bottom-0 h-16' : 'top-0 h-16'}`}></div>

                                        {/* Circle dot on timeline */}
                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-gray-300 rounded-full z-10"></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Timeline - Vertical */}
                <div className="lg:hidden space-y-6" data-aos="fade-up" data-aos-delay="100">
                    {steps.map((item, index) => (
                        <div key={item.step} className="relative">
                            {/* Connecting Line (except for last) */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-10 top-20 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-600 -mb-6"></div>
                            )}

                            {/* Step Content */}
                            <div className="flex items-start gap-4">
                                {/* Circle */}
                                <div className="relative z-10 shrink-0 w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-2xl">
                                        {item.step}
                                    </span>
                                </div>

                                {/* Text */}
                                <div className="flex-1 pt-4">
                                    <h3 className="font-bold text-xl text-primary mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
