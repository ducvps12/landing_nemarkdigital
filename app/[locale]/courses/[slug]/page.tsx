import { notFound } from 'next/navigation'
import { getCourseBySlug, getCourseSections, getCourseReviews, getUserEnrollment } from '@/lib/courses'
import CourseDetailClient from '@/components/courses/CourseDetailClient'
import type { Metadata } from 'next'

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const course = await getCourseBySlug(slug)
    if (!course) return {}

    return {
        title: course.title,
        description: course.short_description || course.title,
        openGraph: {
            title: course.title,
            description: course.short_description || course.title,
            images: course.thumbnail_url ? [course.thumbnail_url] : [],
        },
    }
}

export default async function CourseDetailPage({ params }: PageProps) {
    const { slug } = await params
    const course = await getCourseBySlug(slug)

    if (!course) notFound()

    const [sections, reviews, enrollment] = await Promise.all([
        getCourseSections(course.id),
        getCourseReviews(course.id),
        getUserEnrollment(course.id),
    ])

    return (
        <CourseDetailClient
            course={course}
            sections={sections}
            reviews={reviews}
            isEnrolled={!!enrollment}
            enrollmentId={enrollment?.id}
        />
    )
}
