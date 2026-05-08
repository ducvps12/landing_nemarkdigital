import { getUserEnrollments } from '@/lib/courses'
import Link from 'next/link'
import Image from 'next/image'

export default async function MyCoursesPage() {
    const enrollments = await getUserEnrollments()

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Khóa Học Của Tôi</h1>
                    <p className="text-sm text-slate-500 mt-1">Quản lý và tiếp tục học các khóa học đã đăng ký</p>
                </div>
                <Link
                    href="/courses"
                    className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-colors text-sm"
                >
                    <span className="material-icons-outlined text-base">explore</span>
                    Khám phá thêm
                </Link>
            </div>

            {enrollments.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
                    <span className="material-icons-outlined text-6xl text-slate-300 mb-4">school</span>
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">Chưa có khóa học nào</h3>
                    <p className="text-slate-500 mb-6">Hãy bắt đầu hành trình học tập của bạn!</p>
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-colors"
                    >
                        <span className="material-icons-outlined">explore</span>
                        Tìm khóa học
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {enrollments.map((enrollment) => {
                        const course = enrollment.course
                        if (!course) return null

                        return (
                            <div
                                key={enrollment.id}
                                className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-[3/1] bg-slate-100">
                                    {course.thumbnail_url ? (
                                        <Image
                                            src={course.thumbnail_url}
                                            alt={course.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                                            <span className="material-icons-outlined text-3xl text-primary/40">play_circle</span>
                                        </div>
                                    )}

                                    {/* Completion badge */}
                                    {enrollment.completed_at && (
                                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500 text-white">
                                            ✓ Hoàn thành
                                        </span>
                                    )}
                                </div>

                                <div className="p-5">
                                    <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{course.title}</h3>

                                    {/* Progress Bar */}
                                    <div className="mb-4">
                                        <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                                            <span>Tiến độ</span>
                                            <span className="font-medium">{Math.round(enrollment.progress_pct)}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-green-500 rounded-full transition-all"
                                                style={{ width: `${enrollment.progress_pct}%` }}
                                            />
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={`/courses/${course.slug}`}
                                            className="flex-1 text-center py-2.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-colors text-sm"
                                        >
                                            {enrollment.progress_pct > 0 ? 'Tiếp tục học' : 'Bắt đầu'}
                                        </Link>
                                        {enrollment.completed_at && (
                                            <Link
                                                href="/dashboard/certificates"
                                                className="flex items-center justify-center w-10 h-10 bg-yellow-50 hover:bg-yellow-100 rounded-xl transition-colors"
                                                title="Xem chứng chỉ"
                                            >
                                                <span className="material-icons-outlined text-yellow-600">workspace_premium</span>
                                            </Link>
                                        )}
                                    </div>

                                    <p className="text-xs text-slate-400 mt-3">
                                        Đăng ký: {new Date(enrollment.enrolled_at).toLocaleDateString('vi-VN')}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
