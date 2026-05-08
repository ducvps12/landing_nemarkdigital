'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateCoursePage() {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        short_description: '',
        description: '',
        category_id: '',
        level: 'beginner',
        price: 0,
        discount_price: 0,
        what_you_learn: [''],
        requirements: [''],
        tags: '',
    })

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
    }

    const updateField = (field: string, value: string | number | string[]) => {
        setFormData((prev) => {
            const updated = { ...prev, [field]: value }
            if (field === 'title') {
                updated.slug = generateSlug(value as string)
            }
            return updated
        })
    }

    const addListItem = (field: 'what_you_learn' | 'requirements') => {
        setFormData((prev) => ({
            ...prev,
            [field]: [...prev[field], ''],
        }))
    }

    const updateListItem = (field: 'what_you_learn' | 'requirements', index: number, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: prev[field].map((item, i) => (i === index ? value : item)),
        }))
    }

    const removeListItem = (field: 'what_you_learn' | 'requirements', index: number) => {
        setFormData((prev) => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index),
        }))
    }

    const handleSubmit = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/instructor/courses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    what_you_learn: formData.what_you_learn.filter((v) => v.trim()),
                    requirements: formData.requirements.filter((v) => v.trim()),
                    tags: formData.tags.split(',').map((t) => t.trim()).filter(Boolean),
                    price: Number(formData.price),
                    discount_price: Number(formData.discount_price) || null,
                }),
            })
            const data = await res.json()
            if (data.course) {
                router.push(`/instructor/courses/${data.course.id}/lessons`)
            }
        } catch (error) {
            console.error('Create course error:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-3xl">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Tạo Khóa Học Mới</h1>
            <p className="text-sm text-slate-500 mb-8">Điền thông tin cơ bản, sau đó thêm nội dung bài học.</p>

            {/* Step Indicator */}
            <div className="flex items-center mb-8">
                {[
                    { num: 1, label: 'Thông tin cơ bản' },
                    { num: 2, label: 'Nội dung chi tiết' },
                    { num: 3, label: 'Giá & Xuất bản' },
                ].map(({ num, label }) => (
                    <div key={num} className="flex items-center flex-1">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= num ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'
                            }`}>
                            {step > num ? '✓' : num}
                        </div>
                        <span className={`ml-2 text-xs font-medium ${step >= num ? 'text-indigo-600' : 'text-slate-400'}`}>
                            {label}
                        </span>
                        {num < 3 && <div className={`flex-1 h-0.5 mx-3 ${step > num ? 'bg-indigo-600' : 'bg-slate-200'}`} />}
                    </div>
                ))}
            </div>

            {/* Step 1: Basic Info */}
            {step === 1 && (
                <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Tên khóa học *</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => updateField('title', e.target.value)}
                            placeholder="VD: Web Development với React & Next.js"
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Slug (URL)</label>
                        <input
                            type="text"
                            value={formData.slug}
                            onChange={(e) => updateField('slug', e.target.value)}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm font-mono text-slate-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Mô tả ngắn</label>
                        <textarea
                            value={formData.short_description}
                            onChange={(e) => updateField('short_description', e.target.value)}
                            rows={2}
                            placeholder="1-2 câu mô tả thu hút học viên"
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Trình độ *</label>
                            <select
                                value={formData.level}
                                onChange={(e) => updateField('level', e.target.value)}
                                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                            >
                                <option value="beginner">Cơ bản</option>
                                <option value="intermediate">Trung cấp</option>
                                <option value="advanced">Nâng cao</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Tags</label>
                            <input
                                type="text"
                                value={formData.tags}
                                onChange={(e) => updateField('tags', e.target.value)}
                                placeholder="react, nextjs, web (cách nhau bởi dấu phẩy)"
                                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={() => setStep(2)}
                            disabled={!formData.title.trim()}
                            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors text-sm disabled:opacity-50"
                        >
                            Tiếp theo →
                        </button>
                    </div>
                </div>
            )}

            {/* Step 2: Content Details */}
            {step === 2 && (
                <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Mô tả đầy đủ</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => updateField('description', e.target.value)}
                            rows={6}
                            placeholder="Mô tả chi tiết khóa học, đối tượng, nội dung chính..."
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none"
                        />
                    </div>

                    {/* What You'll Learn */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Bạn sẽ học được gì?</label>
                        <div className="space-y-2">
                            {formData.what_you_learn.map((item, i) => (
                                <div key={i} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={item}
                                        onChange={(e) => updateListItem('what_you_learn', i, e.target.value)}
                                        placeholder={`Điểm ${i + 1}`}
                                        className="flex-1 px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                                    />
                                    {formData.what_you_learn.length > 1 && (
                                        <button onClick={() => removeListItem('what_you_learn', i)} className="text-red-400 hover:text-red-600">
                                            <span className="material-icons-outlined text-base">close</span>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button onClick={() => addListItem('what_you_learn')} className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                            + Thêm điểm
                        </button>
                    </div>

                    {/* Requirements */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Yêu cầu</label>
                        <div className="space-y-2">
                            {formData.requirements.map((item, i) => (
                                <div key={i} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={item}
                                        onChange={(e) => updateListItem('requirements', i, e.target.value)}
                                        placeholder={`Yêu cầu ${i + 1}`}
                                        className="flex-1 px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                                    />
                                    {formData.requirements.length > 1 && (
                                        <button onClick={() => removeListItem('requirements', i)} className="text-red-400 hover:text-red-600">
                                            <span className="material-icons-outlined text-base">close</span>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button onClick={() => addListItem('requirements')} className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                            + Thêm yêu cầu
                        </button>
                    </div>

                    <div className="flex justify-between">
                        <button onClick={() => setStep(1)} className="px-6 py-2.5 text-slate-600 hover:text-slate-900 font-medium text-sm">
                            ← Quay lại
                        </button>
                        <button onClick={() => setStep(3)} className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors text-sm">
                            Tiếp theo →
                        </button>
                    </div>
                </div>
            )}

            {/* Step 3: Pricing */}
            {step === 3 && (
                <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Giá gốc (VNĐ)</label>
                            <input
                                type="number"
                                value={formData.price}
                                onChange={(e) => updateField('price', e.target.value)}
                                placeholder="0 = Miễn phí"
                                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Giá khuyến mãi (VNĐ)</label>
                            <input
                                type="number"
                                value={formData.discount_price}
                                onChange={(e) => updateField('discount_price', e.target.value)}
                                placeholder="Để trống nếu không giảm"
                                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                            />
                        </div>
                    </div>

                    <div className="bg-indigo-50 rounded-xl p-4">
                        <p className="text-sm text-indigo-700">
                            <span className="font-semibold">Lưu ý:</span> Khóa học sẽ được tạo ở trạng thái <strong>Nháp</strong>.
                            Bạn cần thêm bài học nội dung rồi mới xuất bản.
                        </p>
                    </div>

                    <div className="flex justify-between">
                        <button onClick={() => setStep(2)} className="px-6 py-2.5 text-slate-600 hover:text-slate-900 font-medium text-sm">
                            ← Quay lại
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={loading || !formData.title.trim()}
                            className="px-8 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors text-sm disabled:opacity-50"
                        >
                            {loading ? 'Đang tạo...' : 'Tạo khóa học'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
