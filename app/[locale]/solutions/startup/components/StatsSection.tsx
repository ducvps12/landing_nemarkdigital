'use client'

export default function StatsSection() {
    const stats = [
        {
            number: '6+',
            label: 'Năm',
            description: 'Kinh nghiệm thực chiến',
            icon: 'verified'
        },
        {
            number: '100+',
            label: 'Dự án',
            description: 'Đã triển khai thành công',
            icon: 'folder_open'
        },
        {
            number: '98%',
            label: 'Khách hàng',
            description: 'Hài lòng & Gia hạn',
            icon: 'thumb_up'
        }
    ]

    return (
        <section className="py-12 bg-white relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-10" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-black font-['Montserrat']">
                        Những Con Số <span className="text-primary">Ấn Tượng</span> Của Nemark
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Stats Container - Compact Design */}
                <div
                    className="relative bg-gradient-to-br from-white via-primary/5 to-accent/10 rounded-2xl p-6 lg:p-8 shadow-xl border-2 border-primary/30 overflow-hidden"
                    data-aos="fade-up"
                >
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-3xl -z-0"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-3xl -z-0"></div>

                    {/* Stats Grid */}
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.map((stat, index) => {
                            // Define unique colors for each stat
                            const colors = [
                                { number: 'text-primary', glow: 'group-hover:shadow-primary/30' },
                                { number: 'text-secondary', glow: 'group-hover:shadow-secondary/30' },
                                { number: 'text-accent-dark', glow: 'group-hover:shadow-accent/30' }
                            ]
                            const colorScheme = colors[index]

                            return (
                                <div
                                    key={index}
                                    className={`group relative text-center transition-all duration-300 hover:scale-105 ${colorScheme.glow}`}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    {/* Number */}
                                    <div className={`text-4xl md:text-5xl font-extrabold ${colorScheme.number} mb-2 transition-transform duration-300 group-hover:scale-110`}>
                                        {stat.number}
                                    </div>

                                    {/* Label */}
                                    <div className="text-base font-semibold text-black/90 mb-1 font-['Montserrat']">
                                        {stat.label}
                                    </div>

                                    {/* Description */}
                                    <div className="text-sm text-black/70 font-['Montserrat']">
                                        {stat.description}
                                    </div>

                                    {/* Divider between stats (not after last one) */}
                                    {index < stats.length - 1 && (
                                        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
