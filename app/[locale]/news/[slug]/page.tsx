'use client'

import { useEffect, useState, use } from 'react'
import { notFound } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
interface BlogData {
    id: number
    title: string
    meta_des: string
    main_content: string
    created_by: string
    image_url: string
    created_at: string
}

interface PageProps {
    params: Promise<{ slug: string }>
}

// Helper function để format ngày
function formatDate(dateString: string, locale: string): string {
    const date = new Date(dateString)
    const loc = locale === 'vi' ? 'vi-VN' : 'en-US'
    return date.toLocaleDateString(loc, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
}

// Helper function để estimate thời gian đọc
function estimateReadTime(content: string, t: (key: string, values?: Record<string, string | number>) => string): string {
    const wordsPerMinute = 200
    const wordCount = content?.split(/\s+/).length || 0
    const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute))
    return t('minuteRead', { minutes })
}

export default function ArticlePage({ params }: PageProps) {
    const resolvedParams = use(params)
    const [blog, setBlog] = useState<BlogData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const t = useTranslations('newsPage')
    const locale = useLocale()

    useEffect(() => {
        async function fetchBlog() {
            try {
                // Fetch blog by id from API
                const response = await fetch(`/api/admin/blogs/${resolvedParams.slug}`)

                if (!response.ok) {
                    setError(true)
                    return
                }

                const result = await response.json()

                if (result.data) {
                    setBlog(result.data)
                } else {
                    setError(true)
                }
            } catch (err) {
                console.error('Error fetching blog:', err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchBlog()
    }, [resolvedParams.slug])

    if (loading) {
        return (
            <div className="min-h-screen bg-white text-black flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    <p className="mt-4 text-black">{t('loadingArticle')}</p>
                </div>
            </div>
        )
    }

    if (error || !blog) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-white text-black">
            <Header onOpenContactModal={() => { }} />

            <main className="flex flex-col items-center w-full pb-20">
                {/* Breadcrumbs & Meta */}
                <div className="w-full max-w-4xl px-4 md:px-8 pt-28 pb-4" data-aos="fade-up">
                    <div className="flex flex-wrap items-center gap-2 mb-6 text-sm md:text-base">
                        <a className="text-primary font-medium hover:underline" href="/">{t('breadcrumbHome')}</a>
                        <span className="text-slate-500">/</span>
                        <a className="text-primary font-medium hover:underline" href="/news">{t('breadcrumbNews')}</a>
                        <span className="text-slate-500">/</span>
                        <span className="text-slate-900 font-semibold">{t('breadcrumbArticle')}</span>
                    </div>

                    <h1 className="text-slate-900 text-3xl md:text-4xl lg:text-[42px] font-heading font-bold leading-[1.2] tracking-tight mb-6">
                        {blog.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 border-b border-slate-200 pb-6 mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <span className="material-icons-outlined text-sm">person</span>
                            </div>
                            <span className="text-sm font-semibold text-black">{blog.created_by}</span>
                        </div>
                        <span className="text-black">|</span>
                        <div className="flex items-center gap-1 text-black text-sm">
                            <span className="material-icons-outlined text-lg">calendar_today</span>
                            <span>{formatDate(blog.created_at, locale)}</span>
                        </div>
                        <span className="text-black">|</span>
                        <div className="flex items-center gap-1 text-black text-sm">
                            <span className="material-icons-outlined text-lg">schedule</span>
                            <span>{estimateReadTime(blog.main_content, t)}</span>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                {blog.image_url && (
                    <div className="w-full max-w-5xl px-4 md:px-8 mb-10" data-aos="fade-up" data-aos-delay="100">
                        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-lg group">
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-primary/10 z-10" />
                            <div
                                className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                                style={{ backgroundImage: `url('${blog.image_url}')` }}
                            />
                        </div>
                    </div>
                )}

                {/* Content Body - Dynamic from database */}
                <article className="w-full max-w-4xl px-4 md:px-8" data-aos="fade-up" data-aos-delay="200">
                    {/* Description Block */}
                    <div className="bg-primary-light/20 border-l-4 border-primary p-6 rounded-r-lg mb-10">
                        <p className="text-black text-lg font-medium italic leading-relaxed">
                            {blog.meta_des}
                        </p>
                    </div>

                    {/* Main Content */}
                    <div
                        className="prose prose-lg max-w-none 
                            prose-headings:text-slate-900 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                            prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg
                            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
                            prose-strong:text-slate-900 prose-strong:font-bold
                            prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4
                            prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-4
                            prose-li:text-slate-700 prose-li:mb-2
                            prose-a:text-primary prose-a:underline prose-a:hover:text-primary-dark
                            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-600
                            prose-img:rounded-lg prose-img:shadow-md prose-img:my-6
                            break-words"
                        style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                    >
                        <div
                            dangerouslySetInnerHTML={{ __html: blog.main_content }}
                            style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                        />
                    </div>

                </article>

                {/* CTA Box */}
                <div className="w-full max-w-4xl px-4 md:px-8 mt-12" data-aos="fade-up">
                    <div className="bg-gradient-to-br from-primary to-primary-dark border border-primary/30 rounded-2xl p-8 md:p-10 text-center shadow-xl relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
                            {t('ctaTitle')}
                        </h3>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
                            {t('ctaDescription')}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8 text-left relative z-10">
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                                <span className="material-icons-outlined text-primary">verified</span>
                                <span className="font-medium text-white">{t('ctaFeature1')}</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                                <span className="material-icons-outlined text-primary">verified</span>
                                <span className="font-medium text-white">{t('ctaFeature2')}</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                                <span className="material-icons-outlined text-primary">verified</span>
                                <span className="font-medium text-white">{t('ctaFeature3')}</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                                <span className="material-icons-outlined text-primary">verified</span>
                                <span className="font-medium text-white">{t('ctaFeature4')}</span>
                            </div>
                        </div>

                        <button className="relative z-10 inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full md:w-auto">
                            <span className="material-icons-outlined">mail</span>
                            <span>{t('ctaButton')}</span>
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
// Google Sites Content
function GoogleSitesContent() {
    return (
        <article className="w-full max-w-4xl px-4 md:px-8" data-aos="fade-up" data-aos-delay="200">
            {/* Intro Block */}
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-10">
                <p className="text-slate-200 text-lg font-medium italic leading-relaxed">
                    "Google Sites không chỉ là một công cụ tạo trang web miễn phí, mà là một giải pháp toàn diện giúp doanh nghiệp xây dựng sự hiện diện số an toàn, nhanh chóng và dễ dàng vận hành mà không cần biết một dòng code nào."
                </p>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4">Google Sites là gì? Tại sao nó lại là "cuộc cách mạng"?</h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                    Được phát triển bởi gã khổng lồ công nghệ Google, <strong className="text-white">Google Sites</strong> là một ứng dụng nằm trong hệ sinh thái Google Workspace. Nó cho phép người dùng tạo ra các trang web nội bộ (intranet), trang dự án, hoặc website giới thiệu công ty (landing page) một cách trực quan như việc soạn thảo một văn bản trên Google Docs.
                </p>
                <p className="text-slate-300 leading-relaxed mb-8">
                    Không cần hosting đắt đỏ, không cần lo lắng về chứng chỉ SSL hay bảo mật, mọi thứ đều được Google lo liệu. Điều này tạo nên một cuộc cách mạng thực sự cho những người không chuyên về kỹ thuật nhưng vẫn muốn sở hữu một website chuyên nghiệp.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">Giải mã sức hút của Google Sites đối với từng nhóm khách hàng</h2>

                {/* Comparison Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <div className="w-12 h-12 bg-red-500/20 text-red-500 rounded-lg flex items-center justify-center mb-4">
                            <span className="material-icons-outlined">trending_down</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Startups & SME</h3>
                        <p className="text-sm text-slate-400 mb-2"><strong>Nỗi đau:</strong> Ngân sách hạn hẹp, không có đội ngũ IT riêng.</p>
                        <p className="text-sm text-primary"><strong>Lợi ích:</strong> Miễn phí trọn đời, không tốn phí duy trì server.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <div className="w-12 h-12 bg-orange-500/20 text-orange-500 rounded-lg flex items-center justify-center mb-4">
                            <span className="material-icons-outlined">person</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Cá Nhân & Freelancer</h3>
                        <p className="text-sm text-slate-400 mb-2"><strong>Nỗi đau:</strong> Mù tịt về Code, sợ website bị lỗi thời.</p>
                        <p className="text-sm text-primary"><strong>Lợi ích:</strong> Kéo thả cực đơn giản, giao diện hiện đại.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <div className="w-12 h-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center mb-4">
                            <span className="material-icons-outlined">security</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Doanh Nghiệp Lớn</h3>
                        <p className="text-sm text-slate-400 mb-2"><strong>Nỗi đau:</strong> Rủi ro bảo mật dữ liệu, khó khăn khi phân quyền.</p>
                        <p className="text-sm text-primary"><strong>Lợi ích:</strong> Bảo mật cấp độ Google, tích hợp sâu với Drive.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">04 Ưu điểm vượt trội khiến Google Sites trở nên khác biệt</h2>
                <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                        <span className="material-icons-outlined text-primary mt-1">check_circle</span>
                        <span className="text-slate-300"><strong className="text-white">Tốc độ tải trang siêu tốc:</strong> Máy chủ Google đảm bảo website của bạn luôn truy cập nhanh từ mọi nơi trên thế giới.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="material-icons-outlined text-primary mt-1">check_circle</span>
                        <span className="text-slate-300"><strong className="text-white">Bảo mật tuyệt đối:</strong> Bạn không cần cài plugin bảo mật hay lo sợ hacker tấn công.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="material-icons-outlined text-primary mt-1">check_circle</span>
                        <span className="text-slate-300"><strong className="text-white">Tương thích đa thiết bị:</strong> Giao diện tự động căn chỉnh hoàn hảo trên Mobile, Tablet và Desktop.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="material-icons-outlined text-primary mt-1">check_circle</span>
                        <span className="text-slate-300"><strong className="text-white">Hệ sinh thái đồng bộ:</strong> Chèn biểu đồ từ Sheet, văn bản từ Docs, video từ YouTube chỉ bằng 1 cú click.</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">Kết luận</h2>
                <p className="text-slate-300 leading-relaxed">
                    Nếu bạn đang tìm kiếm một giải pháp để bắt đầu hiện diện trên Internet một cách nhanh chóng, chuyên nghiệp và tiết kiệm chi phí, Google Sites là ứng cử viên số 1. Đừng lãng phí thời gian vào những kỹ thuật phức tạp, hãy tập trung vào nội dung và giá trị cốt lõi của doanh nghiệp bạn.
                </p>
            </div>
        </article>
    )
}

// UI/UX Content
function UIUXContent() {
    return (
        <article className="w-full max-w-4xl px-4 md:px-8" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-10">
                <p className="text-slate-200 text-lg font-medium italic leading-relaxed">
                    Website không chỉ là bộ mặt thương hiệu mà còn là cỗ máy bán hàng tự động 24/7. Bài viết này sẽ giúp bạn hiểu rõ cách xây dựng một website chuẩn SEO, tối ưu trải nghiệm người dùng (UX) để bùng nổ doanh số.
                </p>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="material-icons-outlined text-primary">verified</span>
                    Website "Chạm Là Mê" – Tiêu chuẩn mới của năm 2026
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                    Đã qua rồi cái thời website chỉ cần "có là được". Năm 2026, người dùng đòi hỏi sự mượt mà, tốc độ và tính thẩm mỹ cao ngay từ cái chạm đầu tiên.
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-8">
                    {['Tốc độ tải trang < 1s', 'Mobile First', 'Dark Mode Ready', 'Micro-interactions'].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-slate-800 p-4 rounded-lg border border-slate-700">
                            <span className="material-icons-outlined text-green-500 mt-1">check_circle</span>
                            <span className="text-slate-300">{item}</span>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="material-icons-outlined text-primary">grid_view</span>
                    Giải mã nhu cầu: Website nào dành cho bạn?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-primary/30 transition-all">
                        <div className="size-12 rounded-lg bg-orange-100/10 text-orange-500 flex items-center justify-center mb-4">
                            <span className="material-icons-outlined">person_edit</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Freelancer / Creator</h3>
                        <p className="text-sm text-slate-400">Xây dựng thương hiệu cá nhân với Portfolio ấn tượng.</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-primary/30 transition-all">
                        <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                            <span className="material-icons-outlined">storefront</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Chủ Shop / Hộ KD</h3>
                        <p className="text-sm text-slate-400">Website bán hàng chuẩn SEO, tích hợp thanh toán online.</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-primary/30 transition-all">
                        <div className="size-12 rounded-lg bg-purple-100/10 text-purple-500 flex items-center justify-center mb-4">
                            <span className="material-icons-outlined">domain</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Doanh nghiệp Lớn</h3>
                        <p className="text-sm text-slate-400">Hệ thống ERP mini, bảo mật cấp cao, đa ngôn ngữ.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">Kết luận</h2>
                <p className="text-slate-300 leading-relaxed">
                    Website là khoản đầu tư sinh lời bền vững nhất trong kỷ nguyên số. Đừng để đối thủ vượt mặt chỉ vì giao diện web của bạn đã lỗi thời. Hãy bắt đầu thay đổi ngay hôm nay.
                </p>
            </div>
        </article>
    )
}

// SEO Content
function SEOContent() {
    return (
        <article className="w-full max-w-4xl px-4 md:px-8" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-10">
                <p className="text-slate-200 text-lg font-medium italic leading-relaxed">
                    "Trong kỷ nguyên số 2026, website không chỉ là bộ mặt thương hiệu mà còn là cỗ máy tạo doanh thu chủ lực. Tại NEMARK, chúng tôi cung cấp giải pháp thiết kế web chuẩn SEO giúp doanh nghiệp bứt phá."
                </p>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded bg-primary/10 text-primary text-lg font-bold">1</span>
                    Tầm quan trọng của việc thiết kế web trong bối cảnh 2026
                </h2>

                <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                        <span className="material-icons-outlined text-green-500 mt-1">check_circle</span>
                        <span className="text-slate-300"><strong className="text-white">Tăng khả năng tiếp cận:</strong> Website chuẩn SEO giúp bạn xuất hiện trước mắt khách hàng tiềm năng.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="material-icons-outlined text-green-500 mt-1">check_circle</span>
                        <span className="text-slate-300"><strong className="text-white">Tiết kiệm chi phí quảng cáo:</strong> Lượng truy cập tự nhiên bền vững giảm phụ thuộc vào Ads.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="material-icons-outlined text-green-500 mt-1">check_circle</span>
                        <span className="text-slate-300"><strong className="text-white">Nâng cao uy tín thương hiệu:</strong> Thứ hạng cao trên Google đồng nghĩa với việc khách hàng tin tưởng bạn hơn.</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded bg-primary/10 text-primary text-lg font-bold">2</span>
                    Tiêu chuẩn "vàng" của một website chuẩn SEO hiện đại
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {[
                        { icon: 'speed', color: 'blue', title: 'Tốc độ tải trang siêu tốc', desc: 'Load trang dưới 1 giây để giữ chân người dùng.' },
                        { icon: 'smartphone', color: 'green', title: 'Mobile First', desc: 'Giao diện tương thích hoàn hảo trên mọi thiết bị di động.' },
                        { icon: 'lock', color: 'purple', title: 'Bảo mật SSL & An toàn', desc: 'Chứng chỉ bảo mật SSL miễn phí trọn đời.' },
                        { icon: 'code', color: 'orange', title: 'Clean Code & Schema', desc: 'Mã nguồn sạch, tích hợp Schema Markup.' }
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-primary/30 transition-all">
                            <div className={`w-12 h-12 rounded-lg bg-${item.color}-100/10 text-${item.color}-500 flex items-center justify-center mb-4`}>
                                <span className="material-icons-outlined text-2xl">{item.icon}</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}

// E-commerce Content
function EcommerceContent() {
    return (
        <article className="w-full max-w-4xl px-4 md:px-8" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-10">
                <p className="text-slate-200 text-lg font-medium italic leading-relaxed">
                    Trong kỷ nguyên số 2026, sở hữu một website thương mại điện tử không chỉ là xu hướng mà là cốt lõi của sự phát triển bền vững. NEMARK mang đến giải pháp chuyển đổi số toàn diện.
                </p>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-primary rounded-full" />
                    Tại sao doanh nghiệp cần chú trọng vào thiết kế web trong năm 2026?
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                            <span className="material-icons-outlined text-2xl">shopping_bag</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Tối ưu trải nghiệm</h3>
                        <p className="text-sm text-slate-400">Giao diện UX/UI được thiết kế dựa trên hành vi người dùng, tăng tỷ lệ chuyển đổi lên 45%.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                            <span className="material-icons-outlined text-2xl">rocket_launch</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Tiếp cận tự động</h3>
                        <p className="text-sm text-slate-400">Tích hợp Marketing Automation giúp tiếp cận đúng khách hàng, đúng thời điểm.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <div className="w-12 h-12 bg-purple-100/10 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                            <span className="material-icons-outlined text-2xl">sync</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Đồng bộ dữ liệu</h3>
                        <p className="text-sm text-slate-400">Kết nối realtime với phần mềm kho, kế toán và vận chuyển.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-6">Quy trình triển khai dịch vụ thiết kế web</h2>

                <div className="relative pl-6 border-l-2 border-slate-700 space-y-10 mb-10">
                    {[
                        { num: 1, title: 'Tư vấn và Phân tích', desc: 'Đội ngũ chuyên gia làm việc trực tiếp để hiểu rõ nhu cầu.' },
                        { num: 2, title: 'Thiết kế Giao diện', desc: 'Phác thảo wireframe và thiết kế giao diện chi tiết.' },
                        { num: 3, title: 'Lập trình và Phát triển', desc: 'Xây dựng website trên nền tảng công nghệ mới nhất.' },
                        { num: 4, title: 'Kiểm thử (QA/QC)', desc: 'Kiểm tra kỹ lưỡng trên đa nền tảng.' },
                        { num: 5, title: 'Bàn giao và Đào tạo', desc: 'Bàn giao mã nguồn, hướng dẫn quản trị website.' }
                    ].map((step) => (
                        <div key={step.num} className="relative">
                            <div className={`absolute -left-[27px] top-0 flex items-center justify-center w-8 h-8 rounded-full ${step.num === 1 ? 'bg-primary text-white' : 'bg-slate-800 border-2 border-primary text-primary'} font-bold text-sm`}>
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold text-white">{step.title}</h3>
                            <p className="text-slate-400 mt-2">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}

// App Content
function AppContent() {
    return (
        <article className="w-full max-w-4xl px-4 md:px-8" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-10">
                <p className="text-slate-200 text-lg font-medium italic leading-relaxed">
                    "Số liệu thống kê mới nhất cho thấy hơn 70% giao dịch thương mại điện tử hiện nay đến từ thiết bị di động. Tại thị trường sôi động như Hà Nội, việc sở hữu một Mobile App không chỉ là xu hướng mà là yếu tố sống còn."
                </p>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">
                    Tại sao doanh nghiệp cần đầu tư thiết kế app trong năm 2026?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col gap-4">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-icons-outlined text-2xl">verified</span>
                        </div>
                        <h3 className="font-bold text-lg text-white">Nâng tầm thương hiệu</h3>
                        <p className="text-sm text-slate-400">Tăng độ nhận diện và sự chuyên nghiệp của doanh nghiệp.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col gap-4">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-icons-outlined text-2xl">touch_app</span>
                        </div>
                        <h3 className="font-bold text-lg text-white">Tối ưu trải nghiệm (UX)</h3>
                        <p className="text-sm text-slate-400">Tương tác mượt mà, nhanh chóng giữ chân khách hàng.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col gap-4">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-icons-outlined text-2xl">campaign</span>
                        </div>
                        <h3 className="font-bold text-lg text-white">Marketing tự động</h3>
                        <p className="text-sm text-slate-400">Gửi Push Notification miễn phí, tiếp cận đúng thời điểm.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-6">NEMARK – Đơn vị tiên phong trong giải pháp Mobile App</h2>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-800 rounded-2xl p-8 border border-slate-700 mb-10">
                    <p className="text-slate-300 mb-8 max-w-2xl">
                        Với hơn 5 năm kinh nghiệm triển khai dự án cho các tập đoàn lớn, NEMARK tự tin mang đến chất lượng sản phẩm chuẩn quốc tế.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: 'palette', title: 'Giao diện UI/UX Độc Bản', desc: 'Thiết kế "may đo" riêng biệt.' },
                            { icon: 'rocket_launch', title: 'Hiệu năng vượt trội', desc: 'Tối ưu code giúp App khởi động nhanh.' },
                            { icon: 'savings', title: 'Chi phí tối ưu', desc: 'Tiết kiệm đến 30% ngân sách.' },
                            { icon: 'search', title: 'Chuẩn ASO & SEO', desc: 'Hỗ trợ đẩy App lên Top Store.' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-700">
                                <span className="material-icons-outlined text-primary text-3xl">{item.icon}</span>
                                <div>
                                    <h4 className="font-bold text-white">{item.title}</h4>
                                    <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-6">Bảng giá dịch vụ năm 2026</h2>
                <div className="p-6 bg-primary/10 rounded-xl border border-primary/30 mb-8">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <span className="material-icons-outlined text-green-500 text-xl">check_circle</span>
                            <span className="text-white font-medium">Gói Cơ bản (Tin tức, Giới thiệu): Từ 30.000.000đ</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-icons-outlined text-green-500 text-xl">check_circle</span>
                            <span className="text-white font-medium">Gói Thương mại điện tử: Từ 60.000.000đ</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-icons-outlined text-green-500 text-xl">check_circle</span>
                            <span className="text-white font-medium">Gói Super App / Hệ sinh thái: Liên hệ báo giá</span>
                        </li>
                    </ul>
                    <p className="text-sm text-slate-400 italic mt-4">* Bảng giá mang tính chất tham khảo. Vui lòng liên hệ để nhận báo giá chi tiết.</p>
                </div>
            </div>
        </article>
    )
}
