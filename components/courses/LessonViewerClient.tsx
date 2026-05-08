'use client'

import { useCallback } from 'react'
import VideoPlayer from '@/components/courses/VideoPlayer'
import LessonSidebar from '@/components/courses/LessonSidebar'
import type { Course, Lesson, Section } from '@/lib/courses'

interface LessonViewerClientProps {
    course: Course
    lesson: Lesson
    sections: Section[]
    currentLessonId: string
    completedLessonIds: string[]
    enrollmentId?: string
    initialWatchTime: number
}

export default function LessonViewerClient({
    course,
    lesson,
    sections,
    currentLessonId,
    completedLessonIds,
    enrollmentId,
    initialWatchTime,
}: LessonViewerClientProps) {
    const handleProgress = useCallback(async (currentTime: number) => {
        if (!enrollmentId) return

        try {
            await fetch('/api/courses/progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    enrollmentId,
                    lessonId: currentLessonId,
                    watchedSeconds: Math.floor(currentTime),
                    isCompleted: false,
                }),
            })
        } catch {
            // silent fail for progress saves
        }
    }, [enrollmentId, currentLessonId])

    const handleComplete = useCallback(async () => {
        if (!enrollmentId) return

        try {
            await fetch('/api/courses/progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    enrollmentId,
                    lessonId: currentLessonId,
                    watchedSeconds: lesson.duration,
                    isCompleted: true,
                }),
            })
        } catch {
            // silent fail
        }
    }, [enrollmentId, currentLessonId, lesson.duration])

    // Find next/prev lessons
    const allLessons = sections.flatMap((s) => s.lessons || [])
    const currentIdx = allLessons.findIndex((l) => l.id === currentLessonId)
    const prevLesson = currentIdx > 0 ? allLessons[currentIdx - 1] : null
    const nextLesson = currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null

    return (
        <main className="min-h-screen bg-slate-900 mt-20">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Video Player */}
                        {lesson.video_url ? (
                            <VideoPlayer
                                src={lesson.video_url}
                                onProgress={handleProgress}
                                onComplete={handleComplete}
                                initialTime={initialWatchTime}
                            />
                        ) : (
                            <div className="aspect-video bg-slate-800 flex items-center justify-center">
                                <div className="text-center">
                                    <span className="material-icons-outlined text-5xl text-slate-600 mb-2">videocam_off</span>
                                    <p className="text-slate-500">Bài học này không có video</p>
                                </div>
                            </div>
                        )}

                        {/* Lesson Info */}
                        <div className="bg-white">
                            {/* Title & Navigation */}
                            <div className="px-6 py-5 border-b border-slate-100">
                                <h1 className="text-xl font-bold text-slate-900 mb-1">{lesson.title}</h1>
                                <p className="text-sm text-slate-500">
                                    {course.title}
                                    {lesson.duration > 0 && ` • ${Math.floor(lesson.duration / 60)} phút`}
                                </p>

                                {/* Nav Buttons */}
                                <div className="flex items-center gap-3 mt-4">
                                    {prevLesson && (
                                        <a
                                            href={`/courses/${course.slug}/lessons/${prevLesson.id}`}
                                            className="flex items-center gap-1.5 px-4 py-2 text-sm text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                                        >
                                            <span className="material-icons-outlined text-base">navigate_before</span>
                                            Bài trước
                                        </a>
                                    )}
                                    {nextLesson && (
                                        <a
                                            href={`/courses/${course.slug}/lessons/${nextLesson.id}`}
                                            className="flex items-center gap-1.5 px-4 py-2 text-sm text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
                                        >
                                            Bài tiếp
                                            <span className="material-icons-outlined text-base">navigate_next</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Lesson Content */}
                            {lesson.content_md && (
                                <div className="px-6 py-6">
                                    <div className="prose prose-slate max-w-none text-sm">
                                        {lesson.content_md.split('\n').map((line, i) => {
                                            if (line.startsWith('# ')) return <h2 key={i} className="text-lg font-bold mt-6 mb-3">{line.slice(2)}</h2>
                                            if (line.startsWith('## ')) return <h3 key={i} className="text-base font-semibold mt-4 mb-2">{line.slice(3)}</h3>
                                            if (line.startsWith('- ')) return <li key={i} className="ml-4">{line.slice(2)}</li>
                                            if (line.startsWith('```')) return <pre key={i} className="bg-slate-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto my-3"><code>{line.slice(3)}</code></pre>
                                            if (line.trim() === '') return <br key={i} />
                                            return <p key={i} className="mb-2 leading-relaxed text-slate-700">{line}</p>
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 bg-white border-l border-slate-200">
                        <LessonSidebar
                            courseSlug={course.slug}
                            sections={sections}
                            currentLessonId={currentLessonId}
                            completedLessonIds={completedLessonIds}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
