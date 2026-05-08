'use client'

import Link from 'next/link'

export default function CTABanner() {
    return (
        <section className="relative overflow-hidden">
            {/* Full-width blue gradient banner */}
            <Link
                href="#contact"
                className="group block w-full bg-gradient-to-r from-primary-dark via-primary to-primary-dark py-6 cursor-pointer transition-all duration-300 hover:from-primary hover:via-primary-dark hover:to-primary"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-center gap-4">
                        {/* Animated text */}
                        <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold tracking-wide">
                            Nhận tư vấn
                        </p>

                        {/* Click button with animation */}
                        <span className="inline-flex items-center gap-2 bg-white text-primary-dark px-6 py-2.5 rounded-full font-bold text-lg shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 animate-pulse group-hover:animate-none">
                            <span>CLICK NGAY</span>
                            <span className="material-icons-outlined text-xl group-hover:translate-x-1 transition-transform duration-300">
                                arrow_forward
                            </span>
                        </span>
                    </div>
                </div>

                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </Link>
        </section>
    )
}
