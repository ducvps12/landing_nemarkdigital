'use client'

export default function ProcessSection() {
    const steps = [
        {
            number: '01',
            title: 'Tư vấn & Phân tích',
            description: 'Lắng nghe yêu cầu, phân tích nghiệp vụ và đề xuất giải pháp phù hợp.',
            icon: 'support_agent',
            bgColor: 'bg-gradient-to-br from-rose-100 to-rose-50',
            iconColor: 'text-rose-500',
            numberBg: 'bg-rose-500'
        },
        {
            number: '02',
            title: 'Thiết kế UI/UX',
            description: 'Xây dựng wireframe, mockup và prototype để khách hàng duyệt.',
            icon: 'palette',
            bgColor: 'bg-gradient-to-br from-violet-100 to-violet-50',
            iconColor: 'text-violet-500',
            numberBg: 'bg-violet-500'
        },
        {
            number: '03',
            title: 'Phát triển',
            description: 'Coding với công nghệ tiên tiến, đảm bảo hiệu suất và bảo mật.',
            icon: 'code',
            bgColor: 'bg-gradient-to-br from-sky-100 to-sky-50',
            iconColor: 'text-sky-500',
            numberBg: 'bg-sky-500'
        },
        {
            number: '04',
            title: 'Kiểm thử',
            description: 'QA/QC toàn diện trên nhiều thiết bị, fix bugs và tối ưu.',
            icon: 'bug_report',
            bgColor: 'bg-gradient-to-br from-amber-100 to-amber-50',
            iconColor: 'text-amber-500',
            numberBg: 'bg-amber-500'
        },
        {
            number: '05',
            title: 'Triển khai',
            description: 'Đưa app lên App Store & Google Play, hỗ trợ launch.',
            icon: 'rocket_launch',
            bgColor: 'bg-gradient-to-br from-emerald-100 to-emerald-50',
            iconColor: 'text-emerald-500',
            numberBg: 'bg-emerald-500'
        },
        {
            number: '06',
            title: 'Bảo trì & Warranty',
            description: 'Hỗ trợ kỹ thuật liên tục, cập nhật và bảo trì theo cam kết.',
            icon: 'verified_user',
            bgColor: 'bg-gradient-to-br from-primary/20 to-primary/10',
            iconColor: 'text-primary',
            numberBg: 'bg-primary'
        }
    ]

    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-800 mb-4">
                        Quy Trình 6 Bước
                    </h2>
                    <p className="text-base text-black max-w-3xl mx-auto">
                        Quy trình phát triển ứng dụng bài bản, minh bạch từ khâu tư vấn đến triển khai và bảo trì lâu dài.
                    </p>
                </div>

                {/* Process Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative ${step.bgColor} rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                        >
                            {/* Number Badge */}
                            <div className={`absolute -top-3 -left-1 ${step.numberBg} text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md`}>
                                {step.number}
                            </div>

                            {/* Icon */}
                            <div className="flex justify-center mb-4 mt-2">
                                <span className={`material-icons text-4xl ${step.iconColor}`}>
                                    {step.icon}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-center font-bold text-slate-800 mb-2 text-sm leading-tight">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-center text-black text-xs leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
