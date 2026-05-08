'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function WebsiteCommitment() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/website-design/commit-1.png",
        "/website-design/commit-2.png",
        "/website-design/commit-3.png"
    ];

    // Auto slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="py-20 bg-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark">
                        Nemark Cam Kết
                    </h2>
                    <p className="text-2xl md:text-3xl text-accent font-semibold mt-4 italic">
                        Hoàn Tiền Nếu Bạn Không Hài Lòng
                    </p>
                </div>

                {/* Content - 2 columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Points in yellow boxes with layered effect */}
                    <div className="space-y-6" data-aos="fade-right">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/30 rounded-full translate-x-2 translate-y-2"></div>
                            <div className="relative flex items-center gap-3 bg-primary-light border-2 border-primary/40 rounded-full px-5 py-3 hover:translate-x-1 hover:translate-y-1 transition-transform duration-300">
                                <span className="text-primary-dark text-xl font-bold">✓</span>
                                <p className="text-gray-800 font-medium">Đáp ứng nhu cầu từ giá rẻ đến web cao cấp</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/30 rounded-full translate-x-2 translate-y-2"></div>
                            <div className="relative flex items-center gap-3 bg-primary-light border-2 border-primary/40 rounded-full px-5 py-3 hover:translate-x-1 hover:translate-y-1 transition-transform duration-300">
                                <span className="text-primary-dark text-xl font-bold">✓</span>
                                <p className="text-gray-800 font-medium">Thiết kế web chuẩn SEO theo từng ngành hàng</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/30 rounded-full translate-x-2 translate-y-2"></div>
                            <div className="relative flex items-center gap-3 bg-primary-light border-2 border-primary/40 rounded-full px-5 py-3 hover:translate-x-1 hover:translate-y-1 transition-transform duration-300">
                                <span className="text-primary-dark text-xl font-bold">✓</span>
                                <p className="text-gray-800 font-medium">Dễ sử dụng, hỗ trợ nhanh, chuyên nghiệp</p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Single Large Image Slideshow */}
                    <div className="relative" data-aos="fade-left">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={images[currentImage]}
                                alt={`Website ${currentImage + 1}`}
                                width={800}
                                height={450}
                                className="w-full h-full object-cover transition-opacity duration-500"
                            />
                        </div>

                        {/* Dots indicator */}
                        <div className="flex justify-center gap-2 mt-4">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    className={`w-3 h-3 rounded-full transition-colors ${idx === currentImage ? 'bg-primary' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
