'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import CourseHero from '@/components/courses/CourseHero'
import CourseCurriculum from '@/components/courses/CourseCurriculum'
import CourseReviews from '@/components/courses/CourseReviews'
import type { Course, Section } from '@/lib/courses'
import { createClient } from '@/lib/supabase/client'

interface CourseDetailClientProps {
    course: Course
    sections: Section[]
    reviews: Array<{
        id: string
        rating: number
        comment: string
        created_at: string
        user?: { full_name: string; avatar_url: string | null }
    }>
    isEnrolled: boolean
    enrollmentId?: string
}

export default function CourseDetailClient({
    course,
    sections,
    reviews: initialReviews,
    isEnrolled,
}: CourseDetailClientProps) {
    const router = useRouter()
    const [enrollLoading, setEnrollLoading] = useState(false)
    const [reviews, setReviews] = useState(initialReviews)

    const handleEnroll = async () => {
        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            router.push(`/auth/login?redirect=/courses/${course.slug}`)
            return
        }

        setEnrollLoading(true)
        try {
            if (course.price === 0) {
                // Free course: enroll directly
                await supabase.from('enrollments').upsert({
                    user_id: user.id,
                    course_id: course.id,
                }, { onConflict: 'user_id,course_id' })
                router.refresh()
            } else {
                // Paid course: redirect to payment
                const res = await fetch('/api/payment/vnpay/create', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        amount: course.discount_price || course.price,
                        orderInfo: `Mua khóa học: ${course.title}`,
                        items: [{
                            item_type: 'course',
                            item_id: course.id,
                            item_name: course.title,
                            price: course.discount_price || course.price,
                            quantity: 1,
                        }],
                    }),
                })
                const data = await res.json()
                if (data.paymentUrl) {
                    window.location.href = data.paymentUrl
                }
            }
        } catch (error) {
            console.error('Enroll error:', error)
        } finally {
            setEnrollLoading(false)
        }
    }

    const handleSubmitReview = async (rating: number, comment: string) => {
        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return

        const { data } = await supabase
            .from('reviews')
            .upsert({
                user_id: user.id,
                course_id: course.id,
                rating,
                comment,
            }, { onConflict: 'user_id,course_id' })
            .select(`*, user:profiles!user_id(full_name, avatar_url)`)
            .single()

        if (data) {
            setReviews((prev) => {
                const filtered = prev.filter((r) => r.id !== data.id)
                return [data, ...filtered]
            })
        }
    }

    return (
        <main className="min-h-screen bg-slate-50 mt-20">
            {/* Hero */}
            <CourseHero
                course={course}
                isEnrolled={isEnrolled}
                onEnroll={handleEnroll}
                enrollLoading={enrollLoading}
            />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        {/* What You'll Learn */}
                        {course.what_you_learn && course.what_you_learn.length > 0 && (
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">Bạn sẽ học được gì?</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {course.what_you_learn.map((item, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="material-icons text-green-500 text-lg mt-0.5">check_circle</span>
                                            <span className="text-sm text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Curriculum */}
                        <section>
                            <CourseCurriculum sections={sections} isEnrolled={isEnrolled} />
                        </section>

                        {/* Description */}
                        {course.description && (
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">Mô tả khóa học</h2>
                                <div className="prose prose-slate max-w-none text-sm leading-relaxed">
                                    {course.description.split('\n').map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Requirements */}
                        {course.requirements && course.requirements.length > 0 && (
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">Yêu cầu</h2>
                                <ul className="space-y-2">
                                    {course.requirements.map((req, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="material-icons-outlined text-slate-400 text-lg mt-0.5">arrow_right</span>
                                            <span className="text-sm text-slate-700">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Reviews */}
                        <section>
                            <CourseReviews
                                reviews={reviews}
                                avgRating={course.avg_rating || 0}
                                canReview={isEnrolled}
                                onSubmitReview={handleSubmitReview}
                            />
                        </section>
                    </div>

                    {/* Sidebar placeholder for desktop — the sticky card is already in Hero */}
                    <div className="hidden lg:block" />
                </div>
            </div>
        </main>
    )
}
