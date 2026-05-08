import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Image from 'next/image'

interface AdminCourse {
    id: string
    title: string
    slug: string
    status: string
    level: string
    price: number
    total_lessons: number
    thumbnail_url: string | null
    created_at: string
    instructor: { full_name: string } | null
}

export default async function AdminCoursesPage() {
    const supabase = await createClient()

    const { data: courses } = await supabase
        .from('courses')
        .select(`
            id, title, slug, status, level, price, total_lessons, thumbnail_url, created_at,
            instructor:profiles!instructor_id(full_name)
        `)
        .order('created_at', { ascending: false })

    const allCourses = (courses || []) as unknown as AdminCourse[]

    const stats = {
        total: allCourses.length,
        published: allCourses.filter((c) => c.status === 'published').length,
        draft: allCourses.filter((c) => c.status === 'draft').length,
        archived: allCourses.filter((c) => c.status === 'archived').length,
    }

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Quản Lý Khóa Học</h1>
                    <p className="text-sm text-slate-500 mt-1">Duyệt và quản lý tất cả khóa học trên nền tảng</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                    { label: 'Tổng', value: stats.total, color: 'text-slate-900 bg-slate-100' },
                    { label: 'Đã xuất bản', value: stats.published, color: 'text-green-700 bg-green-100' },
                    { label: 'Nháp', value: stats.draft, color: 'text-yellow-700 bg-yellow-100' },
                    { label: 'Lưu trữ', value: stats.archived, color: 'text-red-700 bg-red-100' },
                ].map((s) => (
                    <div key={s.label} className={`rounded-xl p-4 ${s.color}`}>
                        <p className="text-2xl font-bold">{s.value}</p>
                        <p className="text-xs mt-1">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-100 bg-slate-50">
                            <th className="text-left py-3 px-4 text-xs font-medium text-slate-500 uppercase">Khóa học</th>
                            <th className="text-left py-3 px-4 text-xs font-medium text-slate-500 uppercase">Giảng viên</th>
                            <th className="text-left py-3 px-4 text-xs font-medium text-slate-500 uppercase">Trạng thái</th>
                            <th className="text-right py-3 px-4 text-xs font-medium text-slate-500 uppercase">Giá</th>
                            <th className="text-right py-3 px-4 text-xs font-medium text-slate-500 uppercase">Bài học</th>
                            <th className="text-right py-3 px-4 text-xs font-medium text-slate-500 uppercase">Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {allCourses.map((course) => (
                            <tr key={course.id} className="hover:bg-slate-50">
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-10 rounded-lg bg-slate-100 overflow-hidden relative flex-shrink-0">
                                            {course.thumbnail_url ? (
                                                <Image src={course.thumbnail_url} alt={course.title} fill sizes="64px" className="object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center"><span className="material-icons-outlined text-slate-300 text-sm">image</span></div>
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm text-slate-900 line-clamp-1">{course.title}</p>
                                            <p className="text-xs text-slate-400">{new Date(course.created_at).toLocaleDateString('vi-VN')}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-sm text-slate-600">
                                    {course.instructor?.full_name || '—'}
                                </td>
                                <td className="py-3 px-4">
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${course.status === 'published' ? 'bg-green-100 text-green-700' :
                                            course.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-red-100 text-red-700'
                                        }`}>
                                        {course.status === 'published' ? 'Xuất bản' : course.status === 'draft' ? 'Nháp' : 'Lưu trữ'}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-sm text-right text-slate-600">
                                    {course.price === 0 ? 'Miễn phí' : `${course.price.toLocaleString('vi-VN')}đ`}
                                </td>
                                <td className="py-3 px-4 text-sm text-right text-slate-600">{course.total_lessons}</td>
                                <td className="py-3 px-4 text-right">
                                    <Link
                                        href={`/adminduc/courses/${course.id}`}
                                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
                                    >
                                        <span className="material-icons-outlined text-sm">visibility</span>
                                        Chi tiết
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
