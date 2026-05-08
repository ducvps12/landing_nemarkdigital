'use client'

import Image from 'next/image'

const testimonials = [
    {
        name: 'Nguyễn Văn Minh',
        role: 'CEO',
        company: 'TechViet Solutions',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop',
        content: 'Nemark đã giúp chúng tôi xây dựng website doanh nghiệp chuyên nghiệp. Tốc độ tải trang nhanh, giao diện đẹp và đặc biệt là hỗ trợ kỹ thuật rất tận tình.',
        rating: 5,
        project: 'Website doanh nghiệp'
    },
    {
        name: 'Trần Thị Hương',
        role: 'Founder',
        company: 'Blossom Boutique',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop',
        content: 'Đội ngũ rất chuyên nghiệp, hiểu rõ nhu cầu của shop thời trang. Website bán hàng hoạt động mượt mà, tỷ lệ chuyển đổi tăng 40% sau khi ra mắt.',
        rating: 5,
        project: 'E-commerce Fashion'
    },
    {
        name: 'Lê Quốc Hùng',
        role: 'Marketing Director',
        company: 'Golden Land Real Estate',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop',
        content: 'Website bất động sản với hệ thống lọc thông minh giúp khách hàng dễ dàng tìm kiếm. Đội ngũ cập nhật SEO liên tục, traffic tăng trưởng đều đặn.',
        rating: 5,
        project: 'Real Estate Platform'
    },
    {
        name: 'Phạm Thị Mai',
        role: 'Owner',
        company: 'Sakura Japanese Restaurant',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop',
        content: 'Thiết kế website nhà hàng đẹp mắt, hệ thống đặt bàn online tiện lợi. Khách hàng phản hồi rất tích cực về trải nghiệm đặt bàn trên web.',
        rating: 5,
        project: 'Restaurant Website'
    }
]

export default function WebsiteTestimonials() {
    return (
        <section className="py-20 overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">
                        Testimonials
                    </span>
                    <h2 className="text-3xl font-display font-bold mt-2" style={{ color: '#ffffff' }}>
                        Khách hàng nói gì về chúng tôi
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#cbd5e1' }}>
                        Những đánh giá chân thực từ khách hàng đã sử dụng dịch vụ thiết kế website
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="group relative p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 left-8">
                                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
                                    <span className="material-icons text-white">format_quote</span>
                                </div>
                            </div>

                            {/* Content */}
                            <p className="text-slate-200 leading-relaxed mt-4 mb-6">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>

                            {/* Rating */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="material-icons text-yellow-400 text-lg">star</span>
                                ))}
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-6 border-t border-slate-700">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/30">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-white">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        {testimonial.role} - {testimonial.company}
                                    </p>
                                </div>
                                <div className="hidden sm:block">
                                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                                        {testimonial.project}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Row */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="fade-up">
                    <div className="text-center">
                        <div className="text-4xl font-display font-bold text-primary mb-2">500+</div>
                        <div className="text-sm text-slate-300">Dự án hoàn thành</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-display font-bold text-primary mb-2">98%</div>
                        <div className="text-sm text-slate-300">Khách hàng hài lòng</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-display font-bold text-primary mb-2">5.0</div>
                        <div className="text-sm text-slate-300">Đánh giá trung bình</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-display font-bold text-primary mb-2">85%</div>
                        <div className="text-sm text-slate-300">Khách hàng quay lại</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

