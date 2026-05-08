import Image from 'next/image';

export default function WhyNemarkSection() {
    const reasons = [
        {
            icon: "verified",
            text: "Kinh nghiệm triển khai thực tế cho nhiều doanh nghiệp & startup"
        },
        {
            icon: "psychology",
            text: "Giải pháp phù hợp từng mô hình, không rập khuôn"
        },
        {
            icon: "handshake",
            text: "Quy trình rõ ràng – minh bạch, dễ theo dõi và kiểm soát"
        },
        {
            icon: "support_agent",
            text: "Đội ngũ kỹ thuật đồng hành lâu dài, hỗ trợ nhanh khi cần"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-12 text-center" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
                        Lý do Nemark được khách hàng tin tưởng
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div data-aos="fade-right">
                        <div className="space-y-6">
                            {reasons.map((reason, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 hover:bg-primary/5 transition-colors duration-300"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                        <span className="material-icons-outlined text-white text-2xl">
                                            {reason.icon}
                                        </span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed pt-2">
                                        {reason.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-8">
                            <button className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                                Tư vấn miễn phí ngay
                            </button>
                        </div>
                    </div>

                    {/* Right Image - matches height of reasons only */}
                    <div className="relative" data-aos="fade-left">
                        <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                            <Image
                                src="/banner/digital-why-nemark.png"
                                alt="Why Choose Nemark"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                                quality={100}
                                unoptimized
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
