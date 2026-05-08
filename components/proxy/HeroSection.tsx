'use client'

import Image from 'next/image'

interface HeroSectionProps {
    onOpenContactModal: () => void
}

export default function HeroSection({ onOpenContactModal }: HeroSectionProps) {
    return (
        <section className="relative pt-32 pb-20 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #3953D4 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div data-aos="fade-right">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
                            Proxy / IP Proxy ổn định
                        </h1>
                        <p className="text-lg md:text-xl text-text-secondary mb-4">
                            Bảo mật – Linh hoạt – Hiệu quả.............
                        </p>
                        <p className="text-base md:text-lg text-primary font-medium mb-8">
                            Tư vấn Proxy
                        </p>
                        <button 
                            onClick={onOpenContactModal}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                        >
                            <span className="material-icons-outlined">support_agent</span>
                            Liên hệ tư vấn
                        </button>
                    </div>

                    {/* Right Image/Icon */}
                    <div className="flex justify-center lg:justify-end" data-aos="fade-left">
                        <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                                alt="Proxy Network Security"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
