import { useState, useEffect, useRef } from 'react';

export default function GrowthSection() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);

                        // Animate first counter to 70
                        let start1 = 0;
                        const end1 = 70;
                        const duration = 2000;
                        const increment1 = end1 / (duration / 16);

                        const timer1 = setInterval(() => {
                            start1 += increment1;
                            if (start1 >= end1) {
                                setCount1(end1);
                                clearInterval(timer1);
                            } else {
                                setCount1(Math.floor(start1));
                            }
                        }, 16);

                        // Animate second counter to 50
                        let start2 = 0;
                        const end2 = 50;
                        const increment2 = end2 / (duration / 16);

                        const timer2 = setInterval(() => {
                            start2 += increment2;
                            if (start2 >= end2) {
                                setCount2(end2);
                                clearInterval(timer2);
                            } else {
                                setCount2(Math.floor(start2));
                            }
                        }, 16);

                        // Animate third counter to 3
                        let start3 = 0;
                        const end3 = 3;
                        const increment3 = end3 / (duration / 16);

                        const timer3 = setInterval(() => {
                            start3 += increment3;
                            if (start3 >= end3) {
                                setCount3(end3);
                                clearInterval(timer3);
                            } else {
                                setCount3(Math.floor(start3 * 10) / 10);
                            }
                        }, 16);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <section ref={sectionRef} className="py-16 bg-gradient-to-r from-blue-600 via-primary to-blue-700 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-aos="fade-up">
                {/* Title */}
                <div className="mb-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
                        Chuyển đổi số - Tăng trưởng dài hạn
                    </h2>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg text-primary md:text-xl leading-relaxed mb-8">
                        Chuyển đổi số không chỉ là việc ứng dụng công nghệ mà còn là sự thay đổi toàn diện
                        về văn hóa, quy trình và chiến lược kinh doanh. Đầu tư đúng hướng vào chuyển đổi số
                        sẽ mang lại lợi ích dài hạn, giúp doanh nghiệp thích ứng nhanh với thị trường và
                        duy trì lợi thế cạnh tranh.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{count1}%</div>
                            <p className="text-primary">Tăng hiệu suất vận hành</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{count2}%</div>
                            <p className="text-primary">Giảm chi phí vận hành</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{count3}x</div>
                            <p className="text-primary">Tăng tốc độ phát triển</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
