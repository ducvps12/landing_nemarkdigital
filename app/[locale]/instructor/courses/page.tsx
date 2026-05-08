import { getInstructorCourses } from '@/lib/instructor'
import Link from 'next/link'
import Image from 'next/image'

export default async function InstructorCoursesPage() {
    const courses = await getInstructorCourses()

    const statusLabels: Record<string, { label: string; color: string }> = {
        draft: { label: 'Nháp', color: 'bg-slate-100 text-slate-600' },
        published: { label: 'Đã xuất bản', color: 'bg-green-100 text-green-700' },
        archived: { label: 'Lưu trữ', color: 'bg-yellow-100 text-yellow-700' },
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Khóa Học Của Tôi</h1>
                    <p className="text-sm text-slate-500 mt-1">Quản lý và tạo khóa học mới</p>
                </div>
                <Link
                    href="/instructor/courses/create"
                    className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors text-sm"
                >
                    <span className="material-icons-outlined text-base">add</span>
                    Tạo khóa học mới
                </Link>
            </div>

            {courses.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
                    <span className="material-icons-outlined text-6xl text-slate-300 mb-4">library_books</span>
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">Chưa có khóa học nào</h3>
                    <p className="text-slate-500 mb-6">Bắt đầu tạo khóa học đầu tiên của bạn!</p>
                    <Link
                        href="/instructor/courses/create"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors"
                    >
                        <span className="material-icons-outlined">add</span>
                        Tạo khóa học
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">
                    {courses.map((course) => {
                        const status = statusLabels[course.status] || statusLabels.draft

                        return (
                            <div
                                key={course.id}
                                className="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-5">
                                    {/* Thumbnail */}
                                    <div className="w-24 h-16 rounded-lg bg-slate-100 flex-shrink-0 overflow-hidden relative">
                                        {course.thumbnail_url ? (
                                            <Image
                                                src={course.thumbnail_url}
                                                alt={course.title}
                                                fill
                                                sizes="96px"
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <span className="material-icons-outlined text-slate-300">image</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-semibold text-slate-900 truncate">{course.title}</h3>
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${status.color}`}>
                                                {status.label}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4 text-xs text-slate-500">
                                            <span className="flex items-center gap-1">
                                                <span className="material-icons-outlined text-sm">groups</span>
                                                {course.enrollment_count || 0} học viên
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span className="material-icons-outlined text-sm">star</span>
                                                {course.avg_rating || '—'}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span className="material-icons-outlined text-sm">play_lesson</span>
                                                {course.total_lessons} bài
                                            </span>
                                            <span>
                                                {course.price === 0 ? 'Miễn phí' : `${course.price.toLocaleString('vi-VN')}đ`}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        <Link
                                            href={`/instructor/courses/${course.id}/lessons`}
                                            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                                        >
                                            <span className="material-icons-outlined text-sm">edit_note</span>
                                            Nội dung
                                        </Link>
                                        <Link
                                            href={`/instructor/courses/${course.id}/edit`}
                                            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
                                        >
                                            <span className="material-icons-outlined text-sm">edit</span>
                                            Sửa
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
