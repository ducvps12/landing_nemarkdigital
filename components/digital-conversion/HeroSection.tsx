import Image from 'next/image';

interface HeroSectionProps {
    onOpenContactModal: () => void;
}

export default function HeroSection({ onOpenContactModal }: HeroSectionProps) {
    return (
        <section
            data-hero
            className="relative overflow-hidden min-h-[80vh] flex items-center pt-24 pb-16 lg:py-24"
            style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0f172a 50%, #1e293b 100%)' }}
        >
            {/* Decorative background shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 text-center lg:text-left" data-aos="fade-right">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full w-fit mx-auto lg:mx-0">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                            <span className="text-slate-300 text-sm font-medium">Chuyển đổi số</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight uppercase">
                            Giải pháp chuyển đổi số
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary-light font-extrabold">
                                cho doanh nghiệp
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số toàn diện.
                            Tối ưu quy trình, nâng cao hiệu suất và tăng trưởng bền vững với công nghệ hiện đại.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-2">
                            <button
                                onClick={onOpenContactModal}
                                className="group px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wider text-sm flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <span className="material-icons-outlined text-xl">phone_in_talk</span>
                                Tư vấn ngay
                            </button>
                            <button 
                                onClick={() => {
                                    const nextSection = document.querySelector('section:nth-of-type(2)');
                                    if (nextSection) {
                                        nextSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm uppercase tracking-wider text-sm flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <span className="material-icons-outlined text-xl">visibility</span>
                                Tìm hiểu thêm
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Mockup Image with Floating Badges */}
                    <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-cyan-500/10 rounded-3xl blur-xl"></div>

                            {/* Image container */}
                            <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-4 md:p-6 border border-white/10 shadow-2xl">
                                <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px]">
                                    <Image
                                        src="/banner/digital-hero-clean.png"
                                        alt="Digital Conversion Solutions"
                                        fill
                                        className="object-cover rounded-2xl shadow-inner"
                                        priority
                                    />

                                    {/* Floating badges */}
                                    <div className="absolute -top-3 -right-3 bg-cyan-500 text-white px-4 py-2 rounded-full font-bold text-xs md:text-sm shadow-lg animate-float">
                                        Cloud Infrastructure
                                    </div>
                                    <div className="absolute -bottom-3 -left-3 bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-xs md:text-sm shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                                        Big Data Analytics
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Custom Animation Styles */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
