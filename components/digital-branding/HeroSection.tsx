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
                    src="/banner/branding-hero.png"
                    alt="Digital Branding Background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                    unoptimized
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content - Left Aligned */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl" data-aos="fade-right">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight uppercase">
                        <span className="whitespace-nowrap">GIẢI PHÁP XÂY DỰNG</span>
                        <span className="block text-primary mt-2">THƯƠNG HIỆU SỐ</span>
                    </h1>
                    <p className="text-lg text-gray-100 mb-4">
                        Nhận diện – Website – Nội dung – Marketing
                    </p>
                    <p className="text-base text-gray-200 mb-8 leading-relaxed">
                        Xây dựng thương hiệu số toàn diện từ nhận diện, website đến chiến lược nội dung và marketing.
                        Nemark giúp doanh nghiệp tạo dấu ấn riêng trong kỷ nguyên số.
                    </p>
                    <button
                        onClick={onOpenContactModal}
                        className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        Tư vấn ngay
                    </button>
                </div>
            </div>
        </section>
    );
}
