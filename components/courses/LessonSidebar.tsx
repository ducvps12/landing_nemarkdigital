'use client'

import Link from 'next/link'
import type { Section } from '@/lib/courses'

interface LessonSidebarProps {
    courseSlug: string
    sections: Section[]
    currentLessonId: string
    completedLessonIds: string[]
}

export default function LessonSidebar({ courseSlug, sections, currentLessonId, completedLessonIds }: LessonSidebarProps) {
    return (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-200">
                <Link
                    href={`/courses/${courseSlug}`}
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors"
                >
                    <span className="material-icons-outlined text-lg">arrow_back</span>
                    Quay lại khóa học
                </Link>
            </div>

            <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
                {sections.map((section) => (
                    <div key={section.id}>
                        <div className="px-4 py-3 bg-slate-50/50 border-b border-slate-100">
                            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                {section.title}
                            </h3>
                        </div>

                        {section.lessons?.map((lesson) => {
                            const isCurrent = lesson.id === currentLessonId
                            const isCompleted = completedLessonIds.includes(lesson.id)

                            return (
                                <Link
                                    key={lesson.id}
                                    href={`/courses/${courseSlug}/lessons/${lesson.id}`}
                                    className={`flex items-center gap-3 px-4 py-3 border-b border-slate-50 transition-colors ${isCurrent
                                            ? 'bg-primary/5 border-l-2 border-l-primary'
                                            : 'hover:bg-slate-50'
                                        }`}
                                >
                                    {/* Status Icon */}
                                    <span className={`material-icons text-base flex-shrink-0 ${isCompleted
                                            ? 'text-green-500'
                                            : isCurrent
                                                ? 'text-primary'
                                                : 'text-slate-300'
                                        }`}>
                                        {isCompleted ? 'check_circle' : isCurrent ? 'play_circle_filled' : 'radio_button_unchecked'}
                                    </span>

                                    {/* Lesson Info */}
                                    <div className="flex-1 min-w-0">
                                        <p className={`text-sm truncate ${isCurrent ? 'font-semibold text-primary' : 'text-slate-700'
                                            }`}>
                                            {lesson.title}
                                        </p>
                                        {lesson.duration > 0 && (
                                            <p className="text-xs text-slate-400 mt-0.5">
                                                {Math.floor(lesson.duration / 60)} phút
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}
