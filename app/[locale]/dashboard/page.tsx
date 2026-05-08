'use client'

import { useUser } from '@/lib/auth/auth-context'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import Image from 'next/image'

interface RecentCourse {
    id: string
    progress_pct: number
    course: {
        title: string
        slug: string
        thumbnail_url: string | null
        total_lessons: number
    }
}

export default function DashboardPage() {
    const { user, profile } = useUser()
    const [stats, setStats] = useState({ courses: 0, certificates: 0, orders: 0 })
    const [recentCourses, setRecentCourses] = useState<RecentCourse[]>([])

    const displayName = profile?.full_name || user?.email?.split('@')[0] || 'User'

    useEffect(() => {
        if (!user) return

        const supabase = createClient()

        // Fetch stats
        Promise.all([
            supabase.from('enrollments').select('id', { count: 'exact', head: true }).eq('user_id', user.id),
            supabase.from('certificates').select('id', { count: 'exact', head: true }),
            supabase.from('orders').select('id', { count: 'exact', head: true }).eq('user_id', user.id),
        ]).then(([enrollRes, certRes, orderRes]) => {
            setStats({
                courses: enrollRes.count || 0,
                certificates: certRes.count || 0,
                orders: orderRes.count || 0,
            })
        }).catch(() => {
            // Tables may not exist yet
        })

            // Fetch recent courses
            ; (async () => {
                try {
                    const { data } = await supabase
                        .from('enrollments')
                        .select(`
                        id,
                        progress_pct,
                        course:courses!course_id(title, slug, thumbnail_url, total_lessons)
                    `)
                        .eq('user_id', user.id)
                        .order('enrolled_at', { ascending: false })
                        .limit(3)
                    if (data) setRecentCourses(data as unknown as RecentCourse[])
                } catch {
                    // Table may not exist yet
                }
            })()
    }, [user])

    return (
        <div>
            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">
                    Xin chào, {displayName}! 👋
                </h1>
                <p className="text-slate-500 mt-1">
                    Chào mừng bạn đến với Dashboard của Nemark.
                </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Link href="/dashboard/my-courses" className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                            <span className="material-icons-outlined text-primary text-xl">school</span>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900">{stats.courses}</p>
                            <p className="text-sm text-slate-500">Khóa học đã đăng ký</p>
                        </div>
                    </div>
                </Link>

                <Link href="/dashboard/certificates" className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                            <span className="material-icons-outlined text-yellow-600 text-xl">workspace_premium</span>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900">{stats.certificates}</p>
                            <p className="text-sm text-slate-500">Chứng chỉ</p>
                        </div>
                    </div>
                </Link>

                <Link href="/dashboard/orders" className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                            <span className="material-icons-outlined text-green-600 text-xl">receipt_long</span>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900">{stats.orders}</p>
                            <p className="text-sm text-slate-500">Đơn hàng</p>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Continue Learning */}
            {recentCourses.length > 0 && (
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-slate-900">Tiếp tục học</h2>
                        <Link href="/dashboard/my-courses" className="text-sm text-primary hover:text-primary-dark font-medium">
                            Xem tất cả →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {recentCourses.map((enrollment) => (
                            <Link
                                key={enrollment.id}
                                href={`/courses/${enrollment.course.slug}`}
                                className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group"
                            >
                                <div className="relative aspect-[3/1] bg-slate-100">
                                    {enrollment.course.thumbnail_url ? (
                                        <Image
                                            src={enrollment.course.thumbnail_url}
                                            alt={enrollment.course.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                                            <span className="material-icons-outlined text-2xl text-primary/40">play_circle</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <p className="font-medium text-slate-900 text-sm line-clamp-1 group-hover:text-primary transition-colors">
                                        {enrollment.course.title}
                                    </p>
                                    <div className="mt-2">
                                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                                            <span>Tiến độ</span>
                                            <span>{Math.round(enrollment.progress_pct)}%</span>
                                        </div>
                                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-green-500 rounded-full transition-all"
                                                style={{ width: `${enrollment.progress_pct}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Getting Started CTA */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
                <h2 className="text-xl font-bold mb-2">Bắt đầu hành trình học tập</h2>
                <p className="text-blue-100 mb-6 max-w-lg">
                    Khám phá các khóa học Vibe Coding, Game Development và Web/App Development để nâng cao kỹ năng của bạn.
                </p>
                <a
                    href="/courses"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                >
                    <span className="material-icons-outlined text-lg">explore</span>
                    Khám phá khóa học
                </a>
            </div>
        </div>
    )
}
