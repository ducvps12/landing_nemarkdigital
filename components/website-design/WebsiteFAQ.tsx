'use client'

import { useState } from 'react'

const faqs = [
    {
        question: 'Thời gian thiết kế website mất bao lâu?',
        answer: 'Tùy thuộc vào độ phức tạp của dự án. Landing page đơn giản: 3-5 ngày. Website doanh nghiệp: 2-3 tuần. Website thương mại điện tử: 4-8 tuần. Chúng tôi luôn cam kết tiến độ rõ ràng ngay từ đầu.'
    },
    {
        question: 'Chi phí thiết kế website bao gồm những gì?',
        answer: 'Báo giá của chúng tôi bao gồm: Thiết kế UI/UX, lập trình frontend & backend, tối ưu SEO cơ bản, responsive mobile, hướng dẫn sử dụng, và bảo hành kỹ thuật. Không phát sinh chi phí ẩn.'
    },
    {
        question: 'Tôi có được sở hữu source code không?',
        answer: 'Có. Sau khi thanh toán hoàn tất, bạn sẽ được bàn giao toàn bộ source code và có quyền sở hữu 100%. Chúng tôi cũng hỗ trợ chuyển giao hosting nếu cần.'
    },
    {
        question: 'Website có được hỗ trợ bảo hành không?',
        answer: 'Tất cả các gói đều được bảo hành kỹ thuật từ 6-12 tháng. Trong thời gian bảo hành, chúng tôi sửa lỗi miễn phí và hỗ trợ kỹ thuật qua Zalo/Hotline.'
    },
    {
        question: 'Tôi có thể tự quản lý nội dung website không?',
        answer: 'Hoàn toàn có thể. Chúng tôi tích hợp hệ thống CMS trực quan, dễ sử dụng. Bạn có thể tự thêm/sửa/xóa nội dung, hình ảnh mà không cần kiến thức lập trình.'
    },
    {
        question: 'Website có hỗ trợ SEO không?',
        answer: 'Tất cả website đều được tối ưu SEO Onpage chuẩn Google: cấu trúc heading, meta tags, sitemap, schema markup, tốc độ tải trang. Chúng tôi cũng có dịch vụ SEO tổng thể riêng nếu bạn cần.'
    }
]

export default function WebsiteFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-20" style={{ backgroundColor: '#f8fafc' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">
                        FAQ
                    </span>
                    <h2 className="text-3xl font-display font-bold mt-2" style={{ color: '#0f172a' }}>
                        Câu hỏi thường gặp
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#475569' }}>
                        Giải đáp những thắc mắc phổ biến về dịch vụ thiết kế website của chúng tôi
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl border transition-all duration-300 overflow-hidden"
                            style={{
                                borderColor: openIndex === idx ? '#0ea5e9' : '#e2e8f0',
                                backgroundColor: '#ffffff',
                                boxShadow: openIndex === idx ? '0 10px 15px -3px rgba(14, 165, 233, 0.1)' : 'none'
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span
                                    className="font-bold pr-4 transition-colors"
                                    style={{ color: openIndex === idx ? '#0ea5e9' : '#0f172a' }}
                                >
                                    {faq.question}
                                </span>
                                <span
                                    className="material-icons flex-shrink-0 transition-transform duration-300"
                                    style={{
                                        transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                                        color: openIndex === idx ? '#0ea5e9' : '#94a3b8'
                                    }}
                                >
                                    expand_more
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 pb-6' : 'max-h-0'
                                }`}>
                                <p className="px-6 leading-relaxed" style={{ color: '#475569' }}>
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center" data-aos="fade-up">
                    <p className="mb-4" style={{ color: '#64748b' }}>
                        Không tìm thấy câu trả lời bạn cần?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                    >
                        <span className="material-icons text-lg">chat</span>
                        Liên hệ tư vấn trực tiếp
                    </a>
                </div>
            </div>
        </section>
    )
}

