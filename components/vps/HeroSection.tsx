import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
    onOpenContactModal: () => void
}

export default function HeroSection({ onOpenContactModal }: HeroSectionProps) {
    return (
        <section className="relative py-20 bg-primary-light overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary-darker">
                            Dịch vụ VPS
                            <span className="block text-primary">Hiệu năng cao</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                            VPS (Virtual Private Server) - Máy chủ ảo riêng với hiệu năng vượt trội,
                            tốc độ nhanh, bảo mật cao và quyền quản trị toàn diện.
                            Giải pháp hoàn hảo cho website có lượng truy cập lớn.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#pricing"
                                className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg inline-block text-center"
                            >
                                Xem bảng giá
                            </Link>
                            <button 
                                onClick={onOpenContactModal}
                                className="bg-white hover:bg-gray-100 text-primary font-bold px-8 py-4 rounded-full transition-all duration-300 border-2 border-primary"
                            >
                                Tư vấn ngay
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-primary/20">
                            <div className="aspect-square bg-primary rounded-2xl overflow-hidden">
                                {/* VPS Server Image */}
                                <Image
                                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                                    alt="VPS Server Infrastructure"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
