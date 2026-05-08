export default function BrandProcessSection() {
    const steps = [
        {
            number: "1",
            title: "Nghiên cứu & Phân tích",
            description: "Tìm hiểu ngành hàng, đối thủ, khách hàng mục tiêu"
        },
        {
            number: "2",
            title: "Chiến lược thương hiệu",
            description: "Định vị, thông điệp, bản sắc thương hiệu"
        },
        {
            number: "3",
            title: "Thiết kế nhận diện",
            description: "Logo, màu sắc, typography, guideline"
        },
        {
            number: "4",
            title: "Triển khai đa kênh",
            description: "Website, social media, marketing materials"
        },
        {
            number: "5",
            title: "Đo lường & Tối ưu",
            description: "Theo dõi, phân tích, cải thiện liên tục"
        }
    ];

    return (
        <section className="py-6 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-12 text-center" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
                        HÀNH TRÌNH XÂY DỰNG THƯƠNG HIỆU SỐ
                    </h2>
                </div>

                {/* Desktop: Zigzag Timeline */}
                <div className="hidden lg:block relative my-2 px-16">
                    <div className="relative" style={{ minHeight: '600px' }}>
                        {/* Horizontal timeline line - fixed at 200px from top */}
                        <div className="absolute left-16 right-16 h-0.5 bg-gray-300" style={{ top: '200px' }}></div>

                        {/* Steps grid */}
                        <div className="grid grid-cols-5 gap-6 relative" style={{ top: '200px' }}>
                            {steps.map((step, index) => {
                                const isTop = index % 2 === 0;

                                return (
                                    <div
                                        key={index}
                                        className="relative"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        {/* Card positioned above or below */}
                                        <div className={`${isTop ? 'absolute bottom-16 -left-10 -right-10' : 'absolute top-16 -left-10 -right-10'}`}>
                                            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border-2 border-blue-200">
                                                <div className="text-gray-900 font-bold text-sm mb-3">
                                                    Bước {step.number}: {step.title}
                                                </div>
                                                <p className="text-sm text-blue-600 leading-relaxed">
                                                    {step.description}
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

                {/* Mobile: Vertical Timeline */}
                <div className="lg:hidden space-y-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex gap-4"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Number */}
                            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                                {step.number}
                            </div>

                            {/* Content */}
                            <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
