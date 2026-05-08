'use client'

import { useState } from 'react'
import type { Section } from '@/lib/courses'

function formatDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60)
    return `${minutes} phút`
}

interface CourseCurriculumProps {
    sections: Section[]
    isEnrolled?: boolean
}

export default function CourseCurriculum({ sections, isEnrolled }: CourseCurriculumProps) {
    const [openSections, setOpenSections] = useState<string[]>(
        sections.length > 0 ? [sections[0].id] : []
    )

    const toggleSection = (id: string) => {
        setOpenSections((prev) =>
            prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
        )
    }

    const totalLessons = sections.reduce((sum, s) => sum + (s.lessons?.length || 0), 0)
    const totalDuration = sections.reduce(
        (sum, s) => sum + (s.lessons?.reduce((d, l) => d + l.duration, 0) || 0),
        0
    )
    const totalHours = Math.floor(totalDuration / 3600)
    const totalMinutes = Math.floor((totalDuration % 3600) / 60)

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900">Nội dung khóa học</h2>
                <p className="text-sm text-slate-500">
                    {sections.length} chương • {totalLessons} bài • {totalHours > 0 ? `${totalHours}h ${totalMinutes}m` : `${totalMinutes} phút`}
                </p>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200">
                {sections.map((section) => (
                    <div key={section.id}>
                        {/* Section Header */}
                        <button
                            onClick={() => toggleSection(section.id)}
                            className="w-full flex items-center justify-between px-5 py-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                        >
                            <div className="flex items-center gap-3">
                                <span className={`material-icons-outlined text-lg transition-transform duration-200 ${openSections.includes(section.id) ? 'rotate-90' : ''}`}>
                                    chevron_right
                                </span>
                                <span className="font-semibold text-slate-900">{section.title}</span>
                            </div>
                            <span className="text-sm text-slate-500">
                                {section.lessons?.length || 0} bài
                            </span>
                        </button>

                        {/* Lessons */}
                        {openSections.includes(section.id) && section.lessons && (
                            <div className="divide-y divide-slate-100">
                                {section.lessons.map((lesson) => (
                                    <div
                                        key={lesson.id}
                                        className="flex items-center gap-3 px-5 py-3 hover:bg-slate-50 transition-colors"
                                    >
                                        {/* Icon */}
                                        <span className="material-icons-outlined text-lg text-slate-400">
                                            {lesson.is_free || isEnrolled ? 'play_circle' : 'lock'}
                                        </span>

                                        {/* Lesson Info */}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-slate-700 truncate">{lesson.title}</p>
                                        </div>

                                        {/* Badges */}
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            {lesson.is_free && (
                                                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                                    Miễn phí
                                                </span>
                                            )}
                                            {lesson.duration > 0 && (
                                                <span className="text-xs text-slate-400">
                                                    {formatDuration(lesson.duration)}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
