'use client'

import Image from 'next/image'

export default function ProblemsSection() {
    const leftProblems = [
        {
            title: 'Thương hiệu số "Mờ nhạt"',
            description: 'Website sơ sài, hình ảnh thiếu chuyên nghiệp khiến doanh nghiệp đánh mất điểm uy tín trong mắt đối tác và khách hàng ngay từ lần đầu tiếp cận.',
        },
        {
            title: 'Rào cản về Hạ tầng & Công nghệ',
            description: 'Thiếu nhân sự IT chuyên trách khiến hệ thống website/hosting hoạt động chập chờn, tốc độ chậm và luôn tiềm ẩn rủi ro mất an toàn dữ liệu.',
        }
    ]

    const rightProblems = [
        {
            title: '"Đốt tiền" Marketing không hiệu quả',
            description: 'Chi phí quảng cáo ngày càng cao nhưng tỷ lệ chuyển đổi ra đơn hàng lại thấp do chưa tối ưu được trải nghiệm người dùng và hành trình khách hàng.',
        },
        {
            title: 'Loay hoay tìm hướng đi dài hạn',
            description: 'Doanh nghiệp bị cuốn vào áp lực doanh số ngắn hạn, thiếu một lộ trình chuyển đổi số bài bản để làm nền tảng cho sự tăng trưởng bền vững sau này.',
        }
    ]

    return (
        <section className="py-10 lg:py-14 bg-[#E8F4FC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 bg-primary-light px-4 py-2 rounded-full mb-4">
                        <span className="material-icons-outlined text-primary">warning</span>
                        <span className="text-primary font-semibold text-sm">Thách thức thực tế</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-['Montserrat']">
                        Thực Trạng <span className="text-primary">Startup</span>
                    </h2>
                    <p className="text-black/80 max-w-2xl mx-auto font-['Montserrat']">
                        Những vấn đề mà hầu hết Startup đang phải đối mặt trong hành trình phát triển
                    </p>
                </div>

                {/* Problems Layout with Center Image */}
                <div className="relative">
                    {/* Desktop Layout */}
                    <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
                        {/* Left Column */}
                        <div className="space-y-8" data-aos="fade-right">
                            {leftProblems.map((problem, index) => (
                                <div
                                    key={index}
                                    className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50"
                                >
                                    {/* X Icon */}
                                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-md z-10">
                                        <span className="text-white font-bold text-lg">×</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-black mb-3 pr-4 font-['Montserrat']">
                                        {problem.title}
                                    </h3>
                                    <p className="text-black/80 text-sm leading-relaxed font-['Montserrat']">
                                        {problem.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Center Image */}
                        <div
                            className="relative flex items-center justify-center"
                            data-aos="zoom-in"
                        >
                            <div className="relative w-full h-[400px]">
                                <Image
                                    src="/images/startup-problem.png"
                                    alt="Startup challenges"
                                    fill
                                    className="object-contain object-center"
                                    priority
                                />
                            </div>
                        </div>                        {/* Right Column */}
                        <div className="space-y-8" data-aos="fade-left">
                            {rightProblems.map((problem, index) => (
                                <div
                                    key={index}
                                    className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50"
                                >
                                    {/* X Icon */}
                                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-md z-10">
                                        <span className="text-white font-bold text-lg">×</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-black mb-3 pl-4 font-['Montserrat']">
                                        {problem.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden">
                        {/* Center Image for mobile */}
                        <div className="relative flex justify-center mb-8" data-aos="zoom-in">
                            <div className="relative w-72 h-80">
                                <Image
                                    src="/images/startup-problem.png"
                                    alt="Startup challenges"
                                    fill
                                    className="object-contain object-bottom"
                                    priority
                                />
                            </div>
                        </div>

                        {/* All problems stacked */}
                        <div className="space-y-4">
                            {[...leftProblems, ...rightProblems].map((problem, index) => (
                                <div
                                    key={index}
                                    className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/50"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    {/* X Icon */}
                                    <div className="absolute -right-2 top-4 w-7 h-7 bg-accent rounded-full flex items-center justify-center shadow-md">
                                        <span className="text-white font-bold">×</span>
                                    </div>

                                    <h3 className="text-base font-bold text-black mb-2 pr-6 font-['Montserrat']">
                                        {problem.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
