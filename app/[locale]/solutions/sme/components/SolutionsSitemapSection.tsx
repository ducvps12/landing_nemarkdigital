'use client'

export default function SolutionsSitemapSection() {
    const solutions = [
        {
            number: '1',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
                </svg>
            ),
            title: 'Thiết kế Website & Branding',
            subtitle: 'Tạo nền tảng UX/UI đẹp mắt, chính xác và chuyên nghiệp',
            items: [
                'Thiết kế Logo, UX/UI (App/Web)',
                'Chọn lựa hệ thống công nghệ phù hợp (CMS/Custom)',
                'Tích hợp các API cần thiết (Payment, Shipping, CRM...)',
                'Tối ưu tốc độ trang web cho trải nghiệm tốt nhất'
            ],
            color: 'bg-gradient-to-br from-[#4A90E2] to-[#357ABD]'
        },
        {
            number: '2',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
            ),
            title: 'Chiến lược Marketing Tổng thể',
            subtitle: 'Cung cấp giải pháp Tiếp thị',
            items: [
                'Marketing tiếp cận (SEO)',
                'Mở rộng thương hiệu và nhận thức',
                'Đa kênh mạng xã hội (Social Media)',
                'Nội dung sáng tạo và viral để thu hút'
            ],
            color: 'bg-gradient-to-br from-[#5B9BD5] to-[#4472C4]'
        },
        {
            number: '3',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
            ),
            title: 'Hệ thống CRM',
            subtitle: 'Hệ thống Kỹ thuật số (Quản lý Marketing/Bán hàng)',
            items: [
                'Marketing Automation',
                'Mở ra dễ dàng cơ hội về tiềm năng khách hàng',
                'Theo dõi và phân tích hành vi khách hàng',
                'Hệ thống CRM chuyên nghiệp tích hợp đa kênh'
            ],
            color: 'bg-gradient-to-br from-[#4A90E2] to-[#357ABD]',
            featured: true
        },
        {
            number: '4',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ),
            title: 'Email & Lead nurturing',
            subtitle: 'Email Marketing có hiệu quả & Tự động hóa',
            items: [
                'Chiến lược Email Marketing hiệu quả',
                'Tự động hóa Email theo hành vi khách hàng',
                'A/B Testing để tối ưu tỷ lệ mở và click',
                'Nurture leads để chuyển đổi thành khách hàng'
            ],
            color: 'bg-gradient-to-br from-[#5B9BD5] to-[#4472C4]'
        },
        {
            number: '5',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
            ),
            title: 'Giải pháp Tối ưu MMO (Phân tích)',
            subtitle: 'Cung cấp dữ liệu Theo dõi KPI',
            items: [
                'Thiết lập Google Analytics 4 & Tag Manager',
                'Theo dõi conversion và ROI marketing',
                'Dashboard báo cáo tùy chỉnh theo nhu cầu',
                'Tối ưu chiến dịch dựa trên dữ liệu thực tế'
            ],
            color: 'bg-gradient-to-br from-[#4A90E2] to-[#357ABD]'
        }
    ]

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white via-primary-light/10 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-60 h-60 bg-[#0077B6] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#F5C518] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0077B6] mb-4">
                        Giải pháp Nemark cung cấp
                    </h2>
                    <div className="w-24 h-1.5 bg-[#F5C518] mx-auto rounded-full"></div>
                    <p className="text-black mt-4 max-w-3xl mx-auto">
                        Nền tảng công nghệ toàn diện hỗ trợ SME xây dựng kênh kinh doanh trực tuyến,
                        tăng trưởng doanh thu và tiếp cận khách hàng hiệu quả hơn
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-6">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 border-2 ${solution.featured ? 'border-[#F5C518] scale-105' : 'border-gray-200'
                                }`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Featured Badge */}
                            {solution.featured && (
                                <div className="absolute top-3 right-3 z-10">
                                    <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        PHỔ BIẾN NHẤT
                                    </div>
                                </div>
                            )}

                            {/* Header with gradient background */}
                            <div className={`${solution.color} p-6 text-white relative`}>
                                {/* Emoji Icon - Larger and centered */}
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                                        {solution.icon}
                                    </div>
                                </div>

                                <h3 className="text-base font-bold mb-2 leading-tight text-center">
                                    {solution.title}
                                </h3>
                                <p className="text-xs text-white/90 leading-snug text-center">
                                    {solution.subtitle}
                                </p>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <ul className="space-y-2.5">
                                    {solution.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                                            <svg className="w-4 h-4 text-[#4A90E2] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Bottom accent line */}
                            <div className={`h-1.5 ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
                    <p className="text-gray-600 mb-4">
                        Tất cả giải pháp được tùy chỉnh phù hợp với quy mô và ngân sách của doanh nghiệp bạn
                    </p>
                    <div className="inline-flex items-center gap-2 text-[#0077B6] font-semibold">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Linh hoạt - Tối ưu - Hiệu quả</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
