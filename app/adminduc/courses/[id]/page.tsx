'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

interface CourseDetail {
    id: string
    title: string
    slug: string
    status: string
    level: string
    price: number
    discount_price: number | null
    description: string | null
    total_lessons: number
    total_duration: number
    created_at: string
    instructor: { full_name: string } | null
}

export default function AdminCourseDetailPage() {
    const { id } = useParams<{ id: string }>()
    const router = useRouter()
    const [course, setCourse] = useState<CourseDetail | null>(null)
    const [loading, setLoading] = useState(true)
    const supabase = createClient()

    const fetchCourse = useCallback(async () => {
        const { data } = await supabase
            .from('courses')
            .select(`*, instructor:profiles!instructor_id(full_name)`)
            .eq('id', id)
            .single()
        setCourse(data as unknown as CourseDetail)
        setLoading(false)
    }, [id, supabase])

    useEffect(() => { fetchCourse() }, [fetchCourse])

    const updateStatus = async (newStatus: string) => {
        await supabase.from('courses').update({ status: newStatus }).eq('id', id)
        fetchCourse()
    }

    if (loading) {
        return (
            <div className="p-6 flex items-center justify-center py-20">
                <div className="animate-spin h-8 w-8 border-2 border-indigo-600 border-t-transparent rounded-full" />
            </div>
        )
    }

    if (!course) {
        return <div className="p-6"><p className="text-slate-400">Không tìm thấy khóa học</p></div>
    }

    return (
        <div className="p-6 max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
                <button onClick={() => router.back()} className="text-slate-400 hover:text-slate-600">
                    <span className="material-icons-outlined">arrow_back</span>
                </button>
                <h1 className="text-2xl font-bold text-slate-900">{course.title}</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Info */}
                <div className="md:col-span-2 bg-white rounded-xl border border-slate-100 p-6 space-y-4">
                    <div>
                        <label className="text-xs text-slate-400 uppercase font-medium">Trạng thái</label>
                        <div className="flex items-center gap-3 mt-1">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${course.status === 'published' ? 'bg-green-100 text-green-700' :
                                    course.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-red-100 text-red-700'
                                }`}>
                                {course.status === 'published' ? 'Đã xuất bản' : course.status === 'draft' ? 'Nháp' : 'Lưu trữ'}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs text-slate-400 uppercase font-medium">Giảng viên</label>
                            <p className="text-sm text-slate-900 mt-1">{course.instructor?.full_name || '—'}</p>
                        </div>
                        <div>
                            <label className="text-xs text-slate-400 uppercase font-medium">Trình độ</label>
                            <p className="text-sm text-slate-900 mt-1 capitalize">{course.level}</p>
                        </div>
                        <div>
                            <label className="text-xs text-slate-400 uppercase font-medium">Giá</label>
                            <p className="text-sm text-slate-900 mt-1">
                                {course.price === 0 ? 'Miễn phí' : `${course.price.toLocaleString('vi-VN')}đ`}
                                {course.discount_price !== null && course.discount_price > 0 && (
                                    <span className="ml-2 text-green-600">→ {course.discount_price.toLocaleString('vi-VN')}đ</span>
                                )}
                            </p>
                        </div>
                        <div>
                            <label className="text-xs text-slate-400 uppercase font-medium">Bài học</label>
                            <p className="text-sm text-slate-900 mt-1">{course.total_lessons} bài</p>
                        </div>
                    </div>

                    {course.description && (
                        <div>
                            <label className="text-xs text-slate-400 uppercase font-medium">Mô tả</label>
                            <p className="text-sm text-slate-600 mt-1 whitespace-pre-wrap">{course.description}</p>
                        </div>
                    )}

                    <div>
                        <label className="text-xs text-slate-400 uppercase font-medium">Ngày tạo</label>
                        <p className="text-sm text-slate-900 mt-1">{new Date(course.created_at).toLocaleDateString('vi-VN')}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link
                            href={`/courses/${course.slug}`}
                            className="px-4 py-2 text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                        >
                            Xem trang khóa học
                        </Link>
                    </div>
                </div>

                {/* Actions */}
                <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-4 h-fit">
                    <h3 className="font-semibold text-slate-900 text-sm">Hành động</h3>

                    {course.status === 'draft' && (
                        <button
                            onClick={() => updateStatus('published')}
                            className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-sm"
                        >
                            ✓ Duyệt & Xuất bản
                        </button>
                    )}

                    {course.status === 'published' && (
                        <button
                            onClick={() => updateStatus('archived')}
                            className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors text-sm"
                        >
                            Gỡ xuống
                        </button>
                    )}

                    {course.status === 'archived' && (
                        <button
                            onClick={() => updateStatus('published')}
                            className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-sm"
                        >
                            Xuất bản lại
                        </button>
                    )}

                    <button
                        onClick={() => updateStatus('draft')}
                        className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors text-sm"
                    >
                        Chuyển về nháp
                    </button>
                </div>
            </div>
        </div>
    )
}
