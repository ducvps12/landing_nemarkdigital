'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import DeleteConfirmModal from '@/components/admin/DeleteConfirmModal'
import toast from 'react-hot-toast'

export default function BlogsPage() {
    const router = useRouter()
    const [blogs, setBlogs] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; blog: any | null }>({ isOpen: false, blog: null })
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        fetchBlogs()
    }, [])

    const fetchBlogs = async () => {
        try {
            const response = await fetch('/api/admin/blogs')
            const data = await response.json()
            setBlogs(data.data || [])
        } catch (err) {
            setError('Failed to load blogs')
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: number, title: string) => {
        setDeleteModal({ isOpen: true, blog: { id, title } })
    }

    const confirmDelete = async () => {
        if (!deleteModal.blog) return

        setIsDeleting(true)
        try {
            const response = await fetch(`/api/admin/blogs/${deleteModal.blog.id}`, {
                method: 'DELETE',
            })

            if (!response.ok) throw new Error('Failed to delete')

            // Refresh list
            setBlogs(blogs.filter(blog => blog.id !== deleteModal.blog.id))
            toast.success(`Đã xóa "${deleteModal.blog.title}" thành công!`)
            setDeleteModal({ isOpen: false, blog: null })
        } catch (err) {
            toast.error('Lỗi khi xóa bài viết. Vui lòng thử lại.')
        } finally {
            setIsDeleting(false)
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Quản lý Blog</h1>
                    <p className="text-slate-500 mt-1">Quản lý tất cả bài viết blog của bạn</p>
                </div>
                <Link
                    href="/adminduc/blogs/new"
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span>Tạo bài viết mới</span>
                </Link>
            </div>

            {/* Blogs Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {error ? (
                    <div className="p-8 text-center text-red-600">
                        <p>Lỗi khi tải dữ liệu: {error}</p>
                    </div>
                ) : !blogs || blogs.length === 0 ? (
                    <div className="p-8 text-center text-slate-500">
                        <svg className="w-16 h-16 mx-auto mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <p className="text-lg font-medium mb-2">Chưa có bài viết nào</p>
                        <p className="text-sm">Tạo bài viết đầu tiên của bạn ngay bây giờ!</p>
                    </div>
                ) : (
                    <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Tiêu đề
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Tác giả
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Ngày tạo
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Thao tác
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {blogs.map((blog) => (
                                <tr key={blog.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-slate-900">{blog.title}</div>
                                        <div className="text-sm text-slate-500 truncate max-w-md">{blog.meta_des}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500">
                                        {blog.created_by}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500">
                                        {new Date(blog.created_at).toLocaleDateString('vi-VN')}
                                    </td>
                                    <td className="px-6 py-4 text-right text-sm font-medium space-x-2">
                                        <Link
                                            href={`/adminduc/blogs/${blog.id}/edit`}
                                            className="text-purple-600 hover:text-purple-900 inline-flex items-center"
                                        >
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            Sửa
                                        </Link>
                                        <button
                                            className="text-red-600 hover:text-red-900 inline-flex items-center"
                                            onClick={() => handleDelete(blog.id, blog.title)}
                                        >
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Delete Confirmation Modal */}
            <DeleteConfirmModal
                isOpen={deleteModal.isOpen}
                onClose={() => setDeleteModal({ isOpen: false, blog: null })}
                onConfirm={confirmDelete}
                title={deleteModal.blog?.title || ''}
                isDeleting={isDeleting}
            />
        </div>
    )
}
