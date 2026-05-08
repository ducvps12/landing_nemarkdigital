import Image from 'next/image';

interface HeroSectionProps {
    onOpenContactModal: () => void;
}

export default function HeroSection({ onOpenContactModal }: HeroSectionProps) {
    return (
        <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/banner/digital-hero.png"
                    alt="Digital Transformation Background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                    sizes="100vw"
                    unoptimized
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content - Left Aligned */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl" data-aos="fade-right">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                        Giải pháp chuyển đổi số
                        <span className="block text-primary mt-2">cho doanh nghiệp</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                        Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số toàn diện.
                        Tối ưu quy trình, nâng cao hiệu suất và tăng trưởng bền vững với công nghệ hiện đại.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={onOpenContactModal}
                            className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            Tư vấn ngay
                        </button>
                        <button className="bg-white hover:bg-gray-50 text-primary font-bold px-8 py-4 rounded-full transition-all duration-300 border-2 border-white">
                            Tìm hiểu thêm
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
