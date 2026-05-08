'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { use } from 'react'
import RichTextEditor from '@/components/admin/RichTextEditor'
import ImageUpload from '@/components/admin/ImageUpload'

export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter()
    const resolvedParams = use(params)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState('')
    const [blog, setBlog] = useState<any>(null)
    const [content, setContent] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        fetchBlog()
    }, [resolvedParams.id])

    const fetchBlog = async () => {
        try {
            const response = await fetch(`/api/admin/blogs/${resolvedParams.id}`)
            if (!response.ok) throw new Error('Failed to fetch blog')
            const data = await response.json()
            setBlog(data.data)
            setContent(data.data?.main_content || '')
            setImageUrl(data.data?.image_url || '')
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred')
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSaving(true)
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
            const response = await fetch(`/api/admin/blogs/${resolvedParams.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (!response.ok) throw new Error('Failed to update blog')

            router.push('/adminduc/blogs')
            router.refresh()
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred')
            setSaving(false)
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        )
    }

    if (error && !blog) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
                {error}
            </div>
        )
    }

    return (
        <div className="max-w-4xl">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Chỉnh sửa bài viết</h1>
                <p className="text-slate-500 mt-1">Cập nhật thông tin bài viết</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
                {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                        {error}
                    </div>
                )}

                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
                        Tiêu đề <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        defaultValue={blog?.title}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label htmlFor="meta_des" className="block text-sm font-medium text-slate-700 mb-2">
                        Mô tả ngắn <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="meta_des"
                        name="meta_des"
                        required
                        defaultValue={blog?.meta_des}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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

                <div>
                    <label htmlFor="created_by" className="block text-sm font-medium text-slate-700 mb-2">
                        Tác giả <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="created_by"
                        name="created_by"
                        required
                        defaultValue={blog?.created_by}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>

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
                        disabled={saving}
                        className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                    >
                        {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
                    </button>
                </div>
            </form>
        </div>
    )
}
