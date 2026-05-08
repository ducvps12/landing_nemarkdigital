import Image from 'next/image'
import Link from 'next/link'
import type { Course } from '@/lib/courses'

function formatPrice(price: number): string {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}

function formatDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    if (hours > 0) return `${hours}h ${minutes}m`
    return `${minutes} phút`
}

const levelLabels: Record<string, { text: string; color: string }> = {
    beginner: { text: 'Cơ bản', color: 'bg-green-100 text-green-700' },
    intermediate: { text: 'Trung cấp', color: 'bg-yellow-100 text-yellow-700' },
    advanced: { text: 'Nâng cao', color: 'bg-red-100 text-red-700' },
}

export default function CourseCard({ course }: { course: Course }) {
    const level = levelLabels[course.level] || levelLabels.beginner
    const hasDiscount = course.discount_price && course.discount_price < course.price
    const isFree = course.price === 0

    return (
        <Link
            href={`/courses/${course.slug}`}
            className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-slate-100">
                {course.thumbnail_url ? (
                    <Image
                        src={course.thumbnail_url}
                        alt={course.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                        <span className="material-icons-outlined text-4xl text-primary/40">play_circle</span>
                    </div>
                )}

                {/* Level Badge */}
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${level.color}`}>
                    {level.text}
                </span>

                {/* Duration */}
                {course.total_duration > 0 && (
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium bg-black/70 text-white">
                        {formatDuration(course.total_duration)}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Category */}
                {course.category && (
                    <p className="text-xs font-medium text-primary mb-1.5 uppercase tracking-wider">
                        {course.category.name}
                    </p>
                )}

                {/* Title */}
                <h3 className="font-semibold text-slate-900 line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                </h3>

                {/* Short Description */}
                {course.short_description && (
                    <p className="text-sm text-slate-500 line-clamp-2 mb-3">
                        {course.short_description}
                    </p>
                )}

                {/* Instructor */}
                {course.instructor && (
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            {course.instructor.avatar_url ? (
                                <Image
                                    src={course.instructor.avatar_url}
                                    alt={course.instructor.full_name}
                                    width={24}
                                    height={24}
                                    className="rounded-full object-cover"
                                />
                            ) : (
                                <span className="text-xs font-bold text-primary">
                                    {course.instructor.full_name.charAt(0)}
                                </span>
                            )}
                        </div>
                        <span className="text-xs text-slate-500 truncate">{course.instructor.full_name}</span>
                    </div>
                )}

                {/* Stats Row */}
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                        <span className="material-icons-outlined text-sm">play_lesson</span>
                        {course.total_lessons} bài
                    </span>
                    {course.enrollment_count !== undefined && course.enrollment_count > 0 && (
                        <span className="flex items-center gap-1">
                            <span className="material-icons-outlined text-sm">people</span>
                            {course.enrollment_count}
                        </span>
                    )}
                    {course.avg_rating !== undefined && course.avg_rating > 0 && (
                        <span className="flex items-center gap-1">
                            <span className="material-icons text-yellow-400 text-sm">star</span>
                            {course.avg_rating}
                        </span>
                    )}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                    {isFree ? (
                        <span className="text-lg font-bold text-green-600">Miễn phí</span>
                    ) : hasDiscount ? (
                        <>
                            <span className="text-lg font-bold text-primary">
                                {formatPrice(course.discount_price!)}
                            </span>
                            <span className="text-sm text-slate-400 line-through">
                                {formatPrice(course.price)}
                            </span>
                        </>
                    ) : (
                        <span className="text-lg font-bold text-primary">
                            {formatPrice(course.price)}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    )
}
