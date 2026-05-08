'use client';

import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
    onOpenContactModal: () => void
}

export default function HeroSection({ onOpenContactModal }: HeroSectionProps) {
    const industries = [
        'Thương mại & Bán lẻ',
        'Tài chính & Kế toán',
        'Công nghệ & Startup',
        'Bất động sản & Xây dựng',
        'Luật & Tư vấn pháp lý',
        'Du lịch & Khách sạn',
    ];

    return (
        <section
            data-hero
            className="relative min-h-screen overflow-hidden bg-slate-900"
        >
            {/* Solid Dark Background */}
            <div className="absolute inset-0 bg-slate-900" />

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0EA5E9_1px,transparent_1px)] [background-size:20px_20px]" />

            {/* Floating Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
            <div className="absolute bottom-20 right-1/3 w-48 h-48 bg-primary/20 rounded-full blur-[80px]" />

            {/* Gradient overlay for content area */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-transparent z-10" />

            {/* Image Area - Full background with diagonal clip */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{
                    clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 40% 100%)'
                }}
            >
                <Image
                    src="/images/email-hero.png"
                    alt="Doanh nhân sử dụng email doanh nghiệp chuyên nghiệp"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                    sizes="100vw"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-slate-900/30" />
            </div>

            {/* Content Area */}
            <div className="relative z-20 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28">
                    <div className="max-w-xl" data-aos="fade-right">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold text-primary border border-primary/30 backdrop-blur-sm mb-6">
                            <span className="material-icons-outlined text-sm">email</span>
                            Email Doanh Nghiệp Chuyên Nghiệp
                        </div>

                        <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
                            Email Doanh Nghiệp <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-primary bg-[length:200%_auto] animate-gradient">
                                Theo Tên Miền Riêng
                            </span>
                        </h1>

                        <p className="text-lg text-slate-200 leading-relaxed mb-8 max-w-md">
                            Bạn có biết <span className="text-primary font-semibold">75% khách hàng</span> đánh giá mức độ chuyên nghiệp 
                            của một công ty thông qua email liên hệ? Email doanh nghiệp theo tên miền riêng chính là cách để 
                            khẳng định thương hiệu và nâng cao hiệu quả kinh doanh.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <button
                                onClick={onOpenContactModal}
                                className="group flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white transition-all hover:bg-primary-dark shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
                            >
                                <span>Bắt đầu ngay</span>
                                <span className="material-icons ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <Link
                                href="#pricing"
                                className="group flex h-12 items-center justify-center rounded-lg border border-slate-600 bg-slate-800/50 px-8 text-base font-bold text-white hover:bg-slate-700 hover:border-slate-500 transition-all backdrop-blur-sm"
                            >
                                <span className="material-icons mr-2 text-lg">description</span>
                                Xem báo giá
                            </Link>
                        </div>

                        {/* Industries List */}
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/90">
                            {industries.map((industry, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="material-icons text-primary text-[18px]">check_circle</span>
                                    <span>{industry}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Bar at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-slate-800/95 backdrop-blur-sm border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        <div className="flex items-center gap-3 text-white">
                            <span className="material-icons-outlined text-primary text-2xl">verified</span>
                            <div>
                                <span className="text-xl font-bold">99%</span>
                                <span className="text-slate-400 text-sm ml-2">Email vào Inbox</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                            <span className="material-icons-outlined text-primary text-2xl">security</span>
                            <div>
                                <span className="text-xl font-bold">100%</span>
                                <span className="text-slate-400 text-sm ml-2">Bảo mật dữ liệu</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                            <span className="material-icons-outlined text-primary text-2xl">support_agent</span>
                            <div>
                                <span className="text-xl font-bold">24/7</span>
                                <span className="text-slate-400 text-sm ml-2">Hỗ trợ kỹ thuật</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                            <span className="material-icons-outlined text-primary text-2xl">thumb_up</span>
                            <div>
                                <span className="text-xl font-bold">85%</span>
                                <span className="text-slate-400 text-sm ml-2">Đối tác tin tưởng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% center; }
                    100% { background-position: 200% center; }
                }
                .animate-gradient {
                    animation: gradient 3s linear infinite;
                }
            `}</style>
        </section>
    );
}
