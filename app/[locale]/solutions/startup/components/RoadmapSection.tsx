'use client'

export default function RoadmapSection() {
    const stages = [
        {
            phase: '1',
            name: 'GIAI ĐOẠN MVP',
            subtitle: 'Khởi động & Kiểm thử',
            color: 'primary',
            icon: 'rocket_launch',
            goals: [
                {
                    title: 'Mục tiêu',
                    content: 'Ra mắt nhanh, chi phí thấp để kiểm chứng thị trường.'
                }
            ],
            items: [
                {
                    label: 'Website/Landing Page',
                    content: 'Thiết kế web cơ bản, tập trung giới thiệu sản phẩm cốt lõi.'
                },
                {
                    label: 'Nhận diện thương hiệu',
                    content: 'Thiết lập Logo, Email tên miền riêng để tạo uy tín ban đầu.'
                },
                {
                    label: 'Hạ tầng',
                    content: 'Sử dụng gói Hosting cơ bản, tiết kiệm chi phí.'
                },
                {
                    label: 'Marketing',
                    content: 'Chạy thử nghiệm quảng cáo ngân sách nhỏ để đo lường phản hồi khách hàng.'
                }
            ]
        },
        {
            phase: '2',
            name: 'GIAI ĐOẠN TĂNG TRƯỞNG',
            subtitle: 'Growth',
            color: 'secondary',
            icon: 'trending_up',
            goals: [
                {
                    title: 'Mục tiêu',
                    content: 'Thu hút khách hàng, gia tăng doanh số và tối ưu chuyển đổi.'
                }
            ],
            items: [
                {
                    label: 'Tối ưu Website',
                    content: 'Nâng cấp UX/UI, tích hợp cổng thanh toán và công cụ chăm sóc khách hàng (Chatbot).'
                },
                {
                    label: 'Marketing tổng thể',
                    content: 'Triển khai SEO từ khóa, chạy Quảng cáo (Google/Facebook/TikTok) diện rộng.'
                },
                {
                    label: 'Content Marketing',
                    content: 'Xây dựng nội dung blog/video để nuôi dưỡng khách hàng tiềm năng.'
                },
                {
                    label: 'Hạ tầng',
                    content: 'Nâng cấp lên VPS/Server tốc độ cao để chịu tải lượng truy cập tăng đột biến.'
                }
            ]
        },
        {
            phase: '3',
            name: 'GIAI ĐOẠN SCALE',
            subtitle: 'Bứt phá quy mô',
            color: 'accent',
            icon: 'bolt',
            goals: [
                {
                    title: 'Mục tiêu',
                    content: 'Tự động hóa, mở rộng thị phần và thống lĩnh thị trường ngách.'
                }
            ],
            items: [
                {
                    label: 'Hệ sinh thái số',
                    content: 'Phát triển Mobile App riêng, tích hợp CRM/ERP để quản trị vận hành tự động.'
                },
                {
                    label: 'Marketing tự động (Automation)',
                    content: 'Sử dụng các công cụ Email Marketing, Re-marketing chuyên sâu để giữ chân khách hàng cũ (LTV).'
                },
                {
                    label: 'Hạ tầng cao cấp',
                    content: 'Xây dựng hệ thống Server riêng (Dedicated) bảo mật tuyệt đối, xử lý Big Data.'
                },
                {
                    label: 'Mở rộng',
                    content: 'Nhân bản mô hình kinh doanh sang các thị trường hoặc dòng sản phẩm mới.'
                }
            ]
        }
    ]

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'primary':
                return {
                    bg: 'bg-primary',
                    bgLight: 'bg-primary/10',
                    text: 'text-primary',
                    border: 'border-primary',
                    gradient: 'from-primary to-primary-light'
                }
            case 'secondary':
                return {
                    bg: 'bg-secondary',
                    bgLight: 'bg-secondary/10',
                    text: 'text-secondary',
                    border: 'border-secondary',
                    gradient: 'from-secondary to-secondary-light'
                }
            case 'accent':
                return {
                    bg: 'bg-accent',
                    bgLight: 'bg-accent/10',
                    text: 'text-accent-dark',
                    border: 'border-accent',
                    gradient: 'from-accent to-accent-light'
                }
            default:
                return {
                    bg: 'bg-primary',
                    bgLight: 'bg-primary/10',
                    text: 'text-primary',
                    border: 'border-primary',
                    gradient: 'from-primary to-primary-light'
                }
        }
    }

    return (
        <section className="py-4 lg:py-6 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                        <span className="material-icons-outlined text-primary">route</span>
                        <span className="text-primary font-semibold text-sm">Lộ trình rõ ràng</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-['Montserrat']">
                        Lộ Trình <span className="text-primary">Phát Triển</span>
                    </h2>
                    <p className="text-black/80 max-w-2xl mx-auto font-['Montserrat']">
                        3 giai đoạn đồng hành cùng Startup từ ý tưởng đến quy mô lớn
                    </p>
                </div>

                {/* Roadmap Timeline */}
                <div className="relative">
                    {/* Timeline line - hidden on mobile */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>

                    {/* Stages Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                        {stages.map((stage, index) => {
                            const colorClasses = getColorClasses(stage.color)
                            return (
                                <div
                                    key={index}
                                    className="relative flex flex-col"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                >
                                    {/* Phase indicator */}
                                    <div className="flex items-center justify-center mb-6">
                                        <div className="relative w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg z-10">
                                            <span className="material-icons-outlined text-primary text-2xl">
                                                {stage.icon}
                                            </span>
                                            {/* Phase number */}
                                            <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-md">
                                                <span className="text-sm font-bold text-white">{stage.phase}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${colorClasses.border} border-opacity-30 hover:shadow-xl transition-all duration-300 flex-1 flex flex-col`}>
                                        {/* Header */}
                                        <div className="text-center mb-6">
                                            <h3 className={`text-xl font-bold ${colorClasses.text} mb-1`}>
                                                {stage.name}
                                            </h3>
                                            <span className="text-sm text-black/70 font-['Montserrat']">({stage.subtitle})</span>
                                        </div>

                                        {/* Goal */}
                                        {stage.goals.map((goal, gIndex) => (
                                            <div key={gIndex} className={`${colorClasses.bgLight} rounded-lg p-4 mb-4`}>
                                                <span className={`font-semibold ${colorClasses.text}`}>{goal.title}: </span>
                                                <span className="text-black/80 text-sm font-['Montserrat']">{goal.content}</span>
                                            </div>
                                        ))}

                                        {/* Items */}
                                        <div className="space-y-3 flex-1">
                                            {stage.items.map((item, iIndex) => (
                                                <div key={iIndex} className="flex items-start gap-3">
                                                    <div className={`w-2 h-2 ${colorClasses.bg} rounded-full mt-2 flex-shrink-0`}></div>
                                                    <div>
                                                        <span className="font-semibold text-black text-sm font-['Montserrat']">{item.label}: </span>
                                                        <span className="text-black/80 text-sm font-['Montserrat']">{item.content}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
