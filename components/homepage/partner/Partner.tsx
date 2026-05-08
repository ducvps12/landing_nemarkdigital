'use client'

import Image from 'next/image'

export default function Partner() {
    const partners = [
        { name: 'Cloundinary', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Cloudinary_logo_blue_0720_2x.png' },
        { name: 'Supabase', logo: 'https://brandlogos.net/wp-content/uploads/2025/07/supabase-logo_brandlogos.net_wahxg-scaled.png' },
        { name: 'VNPAY', logo: 'https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR-1.png' },
        { name: 'Google', logo: '/partners/google.svg' },
        { name: 'Amazon AWS', logo: 'https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg' },
        { name: 'DigitalOcean', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/79/DigitalOcean_logo.png' },
        { name: 'Vercel', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vercel_logo_2025.svg' },
        { name: 'TikTok', logo: '/partners/tiktok.svg' },
    ]

    return (
        <section className="py-12 bg-white border-t border-slate-100 overflow-hidden">
            {/* Title */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <p
                    className="text-center text-sm font-medium text-slate-500 uppercase tracking-widest"
                    data-aos="fade-up"
                >
                    Đối tác công nghệ của chúng tôi
                </p>
            </div>

            {/* Marquee Container - Full Width */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient overlays for smooth edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling track */}
                <div className="marquee-track flex gap-16 py-4">
                    {/* First set of logos */}
                    {partners.map((partner, index) => (
                        <div
                            key={`first-${index}`}
                            className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer p-2"
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={160}
                                height={48}
                                className="h-12 w-auto object-contain"
                                unoptimized
                            />
                        </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {partners.map((partner, index) => (
                        <div
                            key={`second-${index}`}
                            className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer p-2"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .marquee-track {
                    animation: marquee 30s linear infinite;
                    will-change: transform;
                }
                
                .marquee-track:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    )
}
