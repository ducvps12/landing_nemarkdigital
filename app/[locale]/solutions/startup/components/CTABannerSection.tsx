'use client'

interface CTABannerSectionProps {
    onOpenContactModal: () => void
}

export default function CTABannerSection({ onOpenContactModal }: CTABannerSectionProps) {
    return (
        <section
            className="py-8 lg:py-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(to right, #4988C4, #4988C4, #BDE8F5)' }}
        >
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center gap-6" data-aos="fade-up">
                    {/* Content */}
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                            BẠN CẦN TƯ VẤN DỊCH VỤ
                        </h2>
                        <p className="text-white/80 text-lg">
                            Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn 24/7
                        </p>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={onOpenContactModal}
                        className="group relative px-10 py-5 bg-accent hover:bg-accent-dark text-primary font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 uppercase tracking-wider text-lg flex items-center gap-3 overflow-hidden"
                    >
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                        <span className="relative">CLICK NGAY!</span>
                        <svg className="w-6 h-6 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
