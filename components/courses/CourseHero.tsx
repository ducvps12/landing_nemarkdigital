import Image from 'next/image'
import type { Course } from '@/lib/courses'

function formatPrice(price: number): string {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}

function formatDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    if (hours > 0) return `${hours} giờ ${minutes} phút`
    return `${minutes} phút`
}

const levelLabels: Record<string, string> = {
    beginner: 'Cơ bản',
    intermediate: 'Trung cấp',
    advanced: 'Nâng cao',
}

interface CourseHeroProps {
    course: Course
    isEnrolled?: boolean
    onEnroll?: () => void
    enrollLoading?: boolean
}

export default function CourseHero({ course, isEnrolled, onEnroll, enrollLoading }: CourseHeroProps) {
    const isFree = course.price === 0
    const hasDiscount = course.discount_price && course.discount_price < course.price

    return (
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Left: Info */}
                    <div className="lg:col-span-3 space-y-5">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                            <a href="/courses" className="hover:text-white transition-colors">Khóa học</a>
                            <span>/</span>
                            {course.category && (
                                <>
                                    <a href={`/courses?category=${course.category.slug}`} className="hover:text-white transition-colors">
                                        {course.category.name}
                                    </a>
                                    <span>/</span>
                                </>
                            )}
                            <span className="text-slate-400 truncate">{course.title}</span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold leading-tight">{course.title}</h1>

                        {course.short_description && (
                            <p className="text-lg text-slate-300 leading-relaxed">{course.short_description}</p>
                        )}

                        {/* Stats */}
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            {course.avg_rating !== undefined && course.avg_rating > 0 && (
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-400 font-bold">{course.avg_rating}</span>
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span
                                                key={star}
                                                className={`material-icons text-sm ${star <= Math.round(course.avg_rating!) ? 'text-yellow-400' : 'text-slate-600'}`}
                                            >
                                                star
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-slate-400">({course.review_count} đánh giá)</span>
                                </div>
                            )}
                            {course.enrollment_count !== undefined && (
                                <span className="flex items-center gap-1 text-slate-300">
                                    <span className="material-icons-outlined text-sm">people</span>
                                    {course.enrollment_count} học viên
                                </span>
                            )}
                            <span className="flex items-center gap-1 text-slate-300">
                                <span className="material-icons-outlined text-sm">play_lesson</span>
                                {course.total_lessons} bài học
                            </span>
                            <span className="flex items-center gap-1 text-slate-300">
                                <span className="material-icons-outlined text-sm">schedule</span>
                                {formatDuration(course.total_duration)}
                            </span>
                            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10">
                                {levelLabels[course.level]}
                            </span>
                        </div>

                        {/* Instructor */}
                        {course.instructor && (
                            <div className="flex items-center gap-3 pt-2">
                                <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                                    {course.instructor.avatar_url ? (
                                        <Image
                                            src={course.instructor.avatar_url}
                                            alt={course.instructor.full_name}
                                            width={40}
                                            height={40}
                                            className="rounded-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-white font-bold">
                                            {course.instructor.full_name.charAt(0)}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Giảng viên</p>
                                    <p className="font-medium">{course.instructor.full_name}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: CTA Card */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-6 shadow-2xl text-slate-900 sticky top-24">
                            {/* Thumbnail */}
                            <div className="relative aspect-video rounded-xl overflow-hidden mb-5 bg-slate-100">
                                {course.thumbnail_url ? (
                                    <Image
                                        src={course.thumbnail_url}
                                        alt={course.title}
                                        fill
                                        sizes="400px"
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                                        <span className="material-icons-outlined text-5xl text-primary/40">play_circle</span>
                                    </div>
                                )}
                            </div>

                            {/* Price */}
                            <div className="mb-5">
                                {isFree ? (
                                    <p className="text-2xl font-bold text-green-600">Miễn phí</p>
                                ) : hasDiscount ? (
                                    <div className="flex items-center gap-3">
                                        <p className="text-2xl font-bold text-primary">{formatPrice(course.discount_price!)}</p>
                                        <p className="text-lg text-slate-400 line-through">{formatPrice(course.price)}</p>
                                        <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-600">
                                            -{Math.round(((course.price - course.discount_price!) / course.price) * 100)}%
                                        </span>
                                    </div>
                                ) : (
                                    <p className="text-2xl font-bold text-primary">{formatPrice(course.price)}</p>
                                )}
                            </div>

                            {/* CTA */}
                            {isEnrolled ? (
                                <a
                                    href={`/courses/${course.slug}/lessons/${course.slug}`}
                                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
                                >
                                    <span className="material-icons-outlined text-lg">play_circle</span>
                                    Tiếp tục học
                                </a>
                            ) : (
                                <button
                                    onClick={onEnroll}
                                    disabled={enrollLoading}
                                    className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 shadow-lg shadow-primary/25"
                                >
                                    {enrollLoading ? 'Đang xử lý...' : isFree ? 'Đăng ký miễn phí' : 'Mua khóa học'}
                                </button>
                            )}

                            {/* What's included */}
                            <div className="mt-5 pt-5 border-t border-slate-100 space-y-3">
                                <h4 className="font-semibold text-sm text-slate-900">Bao gồm:</h4>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <span className="material-icons-outlined text-base text-primary">play_circle</span>
                                    {course.total_lessons} bài học video
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <span className="material-icons-outlined text-base text-primary">all_inclusive</span>
                                    Truy cập trọn đời
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <span className="material-icons-outlined text-base text-primary">workspace_premium</span>
                                    Chứng chỉ hoàn thành
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <span className="material-icons-outlined text-base text-primary">devices</span>
                                    Học trên mọi thiết bị
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
