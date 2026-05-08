'use client'

import Image from 'next/image'

export default function PartnershipSection() {
    const milestones = [
        { icon: 'lightbulb', label: 'Ý tưởng', color: 'primary' },
        { icon: 'build', label: 'Phát triển', color: 'secondary' },
        { icon: 'rocket_launch', label: 'Ra mắt', color: 'accent' },
        { icon: 'trending_up', label: 'Tăng trưởng', color: 'primary' }
    ]

    return (
        <section className="py-10 lg:py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                        <span className="material-icons-outlined text-primary">handshake</span>
                        <span className="text-primary font-semibold text-sm">Đồng hành lâu dài</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-['Montserrat']">
                        Đồng Hành Cùng Startup Từ{' '}
                        <span className="text-primary">Ý Tưởng</span>{' '}
                        Đến{' '}
                        <span className="text-secondary">Tăng Trưởng</span>
                    </h2>
                    <p className="text-black/80 max-w-2xl mx-auto font-['Montserrat']">
                        Chúng tôi không chỉ là nhà cung cấp dịch vụ, mà là đối tác công nghệ đáng tin cậy
                    </p>
                </div>

                {/* Journey Timeline */}
                <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent hidden md:block"></div>

                        {/* Milestones */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="relative flex flex-col items-center">
                                    {/* Circle */}
                                    <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg z-10">
                                        <span className="material-icons-outlined text-primary text-2xl">
                                            {milestone.icon}
                                        </span>
                                    </div>
                                    {/* Label */}
                                    <span className="mt-4 font-semibold text-black/90 font-['Montserrat']">{milestone.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Image */}
                    <div data-aos="fade-right">
                        <div className="relative">
                            {/* Background decoration */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl"></div>

                            {/* Main image */}
                            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                    alt="Partnership"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto object-cover"
                                />

                                {/* Overlay badge */}
                                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <span className="material-icons-outlined text-white text-xl">verified</span>
                                        </div>
                                        <div>
                                            <div className="font-bold text-black font-['Montserrat']">Đối tác tin cậy</div>
                                            <div className="text-sm text-black/80 font-['Montserrat']">Hơn 100+ Startup đã tin tưởng</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Features */}
                    <div data-aos="fade-left">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <span className="material-icons-outlined text-2xl text-primary">support_agent</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-2 font-['Montserrat']">Hỗ trợ 24/7</h3>
                                    <p className="text-black/80 font-['Montserrat']">Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ bạn mọi lúc mọi nơi</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                                    <span className="material-icons-outlined text-2xl text-secondary">tune</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-2 font-['Montserrat']">Giải pháp tùy chỉnh</h3>
                                    <p className="text-black/80 font-['Montserrat']">Mọi giải pháp được thiết kế riêng phù hợp với nhu cầu và ngân sách</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                                    <span className="material-icons-outlined text-2xl text-accent-dark">update</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-2 font-['Montserrat']">Cập nhật liên tục</h3>
                                    <p className="text-black/80 font-['Montserrat']">Luôn cập nhật công nghệ mới nhất để giữ bạn đi trước đối thủ</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center">
                                    <span className="material-icons-outlined text-2xl text-primary">savings</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-2 font-['Montserrat']">Chi phí hợp lý</h3>
                                    <p className="text-black/80 font-['Montserrat']">Gói giải pháp linh hoạt, phù hợp với ngân sách Startup</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
