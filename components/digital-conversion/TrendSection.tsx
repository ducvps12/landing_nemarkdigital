import Image from 'next/image';

export default function TrendSection() {
    return (
        <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#4988C4' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image (50%) */}
                    <div className="relative" data-aos="fade-right">
                        <div className="relative z-10 aspect-square w-full">
                            <Image
                                src="/banner/digital-trend.png"
                                alt="Digital Transformation"
                                fill
                                className="rounded-2xl object-cover"
                                quality={100}
                                sizes="50vw"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="text-white" data-aos="fade-left">
                        <p className="text-lg text-white/80 mb-4">
                            Xu hướng chuyển đổi số hiện nay
                        </p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                            <span className="text-yellow-400">CHUYỂN ĐỔI SỐ TOÀN DIỆN,</span>
                            <br />
                            <span className="text-yellow-400">TĂNG TRƯỞNG BỀN VỮNG</span>
                        </h2>
                        <p className="text-lg text-white/90 leading-relaxed">
                            Chuyển đổi số đang trở thành xu hướng tất yếu, giúp doanh nghiệp tối ưu vận hành,
                            nâng cao năng lực cạnh tranh và tăng trưởng bền vững trong kỷ nguyên số.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
