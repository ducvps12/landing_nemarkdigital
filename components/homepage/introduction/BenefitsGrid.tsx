'use client'

import { Shield, Zap, CheckCircle, Code, CreditCard, Lock, Settings, Headphones, Sparkles, TrendingUp } from 'lucide-react'

export default function BenefitsGrid() {
    const benefits = [
        {
            icon: Sparkles,
            title: 'Thiết Kế Độc Bản (Custom UI/UX)',
            desc: 'Không sử dụng theme mẫu đại trà. Thiết kế giao diện hoàn toàn mới theo chuẩn thương hiệu của riêng bạn.'
        },
        {
            icon: Zap,
            title: 'Tối Ưu Tốc Độ Siêu Tốc',
            desc: 'Áp dụng công nghệ Next.js mới nhất giúp website đạt điểm số tối ưu trên Google Pagespeed.'
        },
        {
            icon: TrendingUp,
            title: 'Tối Ưu Chuẩn SEO On-page',
            desc: 'Cấu trúc code sạch, hỗ trợ SEO tối đa giúp website dễ dàng leo top tìm kiếm Google.'
        },
        {
            icon: Shield,
            title: 'Bảo Mật Đa Tầng Tuyệt Đối',
            desc: 'Hệ thống bảo mật vững chắc, ngăn chặn hoàn toàn các cuộc tấn công mạng độc hại.'
        },
        {
            icon: Code,
            title: 'Bàn Giao Source Code Đầy Đủ',
            desc: 'Khách hàng sở hữu 100% mã nguồn dự án, tự do nâng cấp và mở rộng không giới hạn.'
        },
        {
            icon: Headphones,
            title: 'Hỗ Trợ Kỹ Thuật 24/7',
            desc: 'Đội ngũ chuyên gia luôn sẵn sàng giải đáp và xử lý các vấn đề kỹ thuật của khách hàng.'
        },
        {
            icon: CreditCard,
            title: 'Tích Hợp Thanh Toán Tiện Lợi',
            desc: 'Kết nối cổng thanh toán Momo, VNPay, Paypal hoặc ngân hàng nội địa mượt mà.'
        },
        {
            icon: Settings,
            title: 'Hệ Quản Trị Dễ Sử Dụng',
            desc: 'Trang quản trị tùy biến thân thiện, quản lý bài viết, sản phẩm và đơn hàng chỉ với vài click.'
        },
        {
            icon: CheckCircle,
            title: 'Kiểm Thử Nghiêm Ngặt',
            desc: 'Dự án trải qua quy trình QC/QA chuẩn chỉnh trên nhiều thiết bị trước khi bàn giao.'
        },
        {
            icon: Lock,
            title: 'Bảo Hành Trọn Đời',
            desc: 'Cam kết đồng hành và bảo hành miễn phí trọn đời cho toàn bộ tính năng đã bàn giao.'
        }
    ]

    return (
        <section id="loi-ich" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Left Sidebar Content (~30% width) */}
                    <div className="lg:col-span-4 flex flex-col justify-start lg:sticky lg:top-32 h-fit">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6 w-fit">
                            <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                                Lợi thế cạnh tranh
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                            10 Lợi Ích Khách Hàng Nhận Được Khi <span className="bg-gradient-primary bg-clip-text text-transparent">Hợp Tác Cùng Nemark</span>
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Nemark cam kết mang lại các giải pháp công nghệ toàn diện và tối ưu nhất giúp doanh nghiệp chuyển đổi số thành công và bứt phá doanh số.
                        </p>
                        <a
                            href="#cta"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-xl transition-all duration-300 w-fit"
                        >
                            Nhận tư vấn ngay
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Right Grid Content (~70% width) */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon
                            return (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-slate-800 text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {benefit.desc}
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}
