import { notFound, redirect } from 'next/navigation'
import { getLesson, getCourseSections, getUserEnrollment, getCourseBySlug, getLessonProgress } from '@/lib/courses'
import { createClient } from '@/lib/supabase/server'
import LessonViewerClient from '@/components/courses/LessonViewerClient'
import type { Metadata } from 'next'

interface PageProps {
    params: Promise<{ slug: string; lessonId: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug, lessonId } = await params
    const course = await getCourseBySlug(slug)
    if (!course) return {}
    const lesson = await getLesson(course.id, lessonId)
    if (!lesson) return {}

    return {
        title: `${lesson.title} | ${course.title}`,
        description: lesson.description || lesson.title,
    }
}

export default async function LessonPage({ params }: PageProps) {
    const { slug, lessonId } = await params
    const course = await getCourseBySlug(slug)
    if (!course) notFound()

    const lesson = await getLesson(course.id, lessonId)
    if (!lesson) notFound()

    // Check access: must be enrolled or lesson is free
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const enrollment = user ? await getUserEnrollment(course.id) : null
    const hasAccess = lesson.is_free || !!enrollment

    if (!hasAccess) {
        redirect(`/courses/${slug}?access=denied`)
    }

    const sections = await getCourseSections(course.id)

    // Get completed lessons
    let completedLessonIds: string[] = []
    let initialWatchTime = 0

    if (enrollment) {
        const progress = await getLessonProgress(enrollment.id)
        completedLessonIds = progress
            .filter((p: { is_completed: boolean }) => p.is_completed)
            .map((p: { lesson_id: string }) => p.lesson_id)
        const lessonProg = progress.find((p: { lesson_id: string }) => p.lesson_id === lessonId)
        if (lessonProg) {
            initialWatchTime = (lessonProg as { watched_seconds: number }).watched_seconds
        }
    }

    return (
        <LessonViewerClient
            course={course}
            lesson={lesson}
            sections={sections}
            currentLessonId={lessonId}
            completedLessonIds={completedLessonIds}
            enrollmentId={enrollment?.id}
            initialWatchTime={initialWatchTime}
        />
    )
}
