'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import RichTextEditor from '@/components/admin/RichTextEditor'
import ImageUpload from '@/components/admin/ImageUpload'

export default function NewBlogPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [content, setContent] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        const formData = new FormData(e.currentTarget)
        const data = {
            title: formData.get('title') as string,
            meta_des: formData.get('meta_des') as string,
            main_content: content,
            created_by: formData.get('created_by') as string,
            image_url: imageUrl || null,
        }

        try {
            const response = await fetch('/api/admin/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error('Failed to create blog')
            }

            router.push('/adminduc/blogs')
            router.refresh()
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred')
            setLoading(false)
        }
    }

    return (
        <div className="max-w-4xl">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Tạo bài viết mới</h1>
                <p className="text-slate-500 mt-1">Thêm bài viết blog mới vào hệ thống</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
                {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                        {error}
                    </div>
                )}

                {/* Title */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
                        Tiêu đề <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Nhập tiêu đề bài viết"
                    />
                </div>

                {/* Meta Description */}
                <div>
                    <label htmlFor="meta_des" className="block text-sm font-medium text-slate-700 mb-2">
                        Mô tả ngắn <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="meta_des"
                        name="meta_des"
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Mô tả ngắn gọn về bài viết"
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Ảnh đại diện
                    </label>
                    <ImageUpload
                        value={imageUrl}
                        onChange={setImageUrl}
                    />
                </div>

                {/* Main Content */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Nội dung <span className="text-red-500">*</span>
                    </label>
                    <RichTextEditor
                        value={content}
                        onChange={setContent}
                        placeholder="Nội dung chi tiết của bài viết"
                    />
                </div>

                {/* Author */}
                <div>
                    <label htmlFor="created_by" className="block text-sm font-medium text-slate-700 mb-2">
                        Tác giả <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="created_by"
                        name="created_by"
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Tên tác giả"
                    />
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end space-x-4 pt-4 border-t border-slate-200">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                        Hủy
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Đang tạo...' : 'Tạo bài viết'}
                    </button>
                </div>
            </form>
        </div>
    )
}
