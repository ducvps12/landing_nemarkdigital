'use client'

import PolicyLayout from '@/components/common/policy/PolicyLayout'
import { useState } from 'react'

const highlights = [
    {
        icon: 'schedule',
        title: 'Tiếp nhận 24/7',
        description: 'Mọi góp ý được tiếp nhận 24/7 qua tất cả các kênh liên lạc'
    },
    {
        icon: 'chat_bubble',
        title: 'Phản hồi 24 giờ',
        description: 'Cam kết phản hồi mọi góp ý trong vòng 24 giờ ngày làm việc'
    },
    {
        icon: 'privacy_tip',
        title: 'Bảo mật thông tin',
        description: 'Thông tin người góp ý được bảo mật tuyệt đối'
    }
]

const processSteps = [
    { title: 'Tiếp nhận', description: 'Ghi nhận và phân loại góp ý trong vòng 24 giờ' },
    { title: 'Đánh giá', description: 'Bộ phận liên quan xem xét và đề xuất phương án' },
    { title: 'Phản hồi', description: 'Liên hệ khách hàng thông báo kết quả trong 3 ngày làm việc' },
    { title: 'Cải thiện', description: 'Áp dụng thay đổi nếu phù hợp và thông báo cho khách hàng' }
]

export default function FeedbackPage() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', service: '', rating: '', feedback: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsSubmitting(false)
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', service: '', rating: '', feedback: '' })
    }

    return (
        <PolicyLayout
            title="Góp Ý Chất Lượng Dịch Vụ"
            subtitle="Ý kiến của Quý khách là kim chỉ nam để chúng tôi hoàn thiện và nâng cao chất lượng dịch vụ"
            icon="rate_review"
            lastUpdated="01/03/2026"
            highlights={highlights}
            processSteps={processSteps}
        >
            <h2>1. Cam kết lắng nghe</h2>
            <p>
                Nemark luôn đặt sự hài lòng của khách hàng lên hàng đầu. Mọi góp ý đều sẽ được tiếp nhận,
                xem xét nghiêm túc và phản hồi trong thời gian sớm nhất.
            </p>
            <ul>
                <li>Tiếp nhận mọi góp ý 24/7 qua các kênh liên lạc</li>
                <li>Phản hồi trong vòng <strong>24 giờ</strong> (ngày làm việc)</li>
                <li>Bảo mật thông tin người góp ý</li>
                <li>Cải thiện dịch vụ dựa trên phản hồi thực tế</li>
            </ul>

            <h2>2. Kênh tiếp nhận góp ý</h2>
            <ul>
                <li><strong>Form trực tuyến:</strong> Sử dụng form bên dưới</li>
                <li><strong>Email:</strong> support@nemarkdigital.com</li>
                <li><strong>Hotline:</strong> 0914 659 183</li>
                <li><strong>Zalo OA:</strong> Nemark Digital Solutions</li>
            </ul>

            <h2>3. Form góp ý trực tuyến</h2>

            {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <span className="material-icons-outlined text-5xl text-green-500 mb-4 block">task_alt</span>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Cảm ơn Quý khách!</h3>
                    <p className="text-green-700">
                        Góp ý của Quý khách đã được ghi nhận. Chúng tôi sẽ phản hồi sớm nhất.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                        Gửi góp ý khác
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-5 not-prose">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Họ và tên <span className="text-red-500">*</span>
                            </label>
                            <input type="text" required value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                                placeholder="Nhập họ và tên" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Số điện thoại <span className="text-red-500">*</span>
                            </label>
                            <input type="tel" required value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                                placeholder="Nhập số điện thoại" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                        <input type="email" value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                            placeholder="Nhập email (không bắt buộc)" />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Dịch vụ đã sử dụng <span className="text-red-500">*</span>
                        </label>
                        <select required value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white">
                            <option value="">Chọn dịch vụ</option>
                            <option value="website">Thiết kế Website</option>
                            <option value="app">Thiết kế App</option>
                            <option value="seo">SEO & Marketing</option>
                            <option value="hosting">Hosting & Domain</option>
                            <option value="vps">VPS / Proxy</option>
                            <option value="maintenance">Bảo trì & Nâng cấp</option>
                            <option value="other">Khác</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Mức độ hài lòng <span className="text-red-500">*</span>
                        </label>
                        <div className="flex gap-4 flex-wrap">
                            {[
                                { value: '5', label: 'Rất hài lòng', icon: 'sentiment_very_satisfied', color: 'text-green-500' },
                                { value: '4', label: 'Hài lòng', icon: 'sentiment_satisfied', color: 'text-green-400' },
                                { value: '3', label: 'Bình thường', icon: 'sentiment_neutral', color: 'text-yellow-500' },
                                { value: '2', label: 'Không hài lòng', icon: 'sentiment_dissatisfied', color: 'text-orange-500' },
                                { value: '1', label: 'Rất không hài lòng', icon: 'sentiment_very_dissatisfied', color: 'text-red-500' },
                            ].map(item => (
                                <label key={item.value}
                                    className={`flex flex-col items-center gap-1 cursor-pointer p-3 rounded-xl border-2 transition-all ${formData.rating === item.value ? 'border-primary bg-primary/5' : 'border-slate-200 hover:border-slate-300'}`}>
                                    <input type="radio" name="rating" value={item.value}
                                        checked={formData.rating === item.value}
                                        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                                        className="sr-only" required />
                                    <span className={`material-icons-outlined text-3xl ${item.color}`}>{item.icon}</span>
                                    <span className="text-xs text-slate-600 text-center">{item.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Nội dung góp ý <span className="text-red-500">*</span>
                        </label>
                        <textarea required rows={5} value={formData.feedback}
                            onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none"
                            placeholder="Chia sẻ ý kiến, đề xuất cải thiện..." />
                    </div>

                    <button type="submit" disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                            <><span className="material-icons animate-spin">refresh</span> Đang gửi...</>
                        ) : (
                            <><span className="material-icons-outlined">send</span> Gửi góp ý</>
                        )}
                    </button>
                </form>
            )}
        </PolicyLayout>
    )
}
