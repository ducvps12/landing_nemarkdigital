'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

interface Section {
    id: string
    title: string
    order_index: number
    lessons: Lesson[]
}

interface Lesson {
    id: string
    title: string
    slug: string
    video_url: string | null
    duration: number
    order_index: number
    is_free: boolean
}

export default function ManageLessonsPage() {
    const { courseId } = useParams<{ courseId: string }>()
    const [sections, setSections] = useState<Section[]>([])
    const [courseTitle, setCourseTitle] = useState('')
    const [loading, setLoading] = useState(true)
    const [newSectionTitle, setNewSectionTitle] = useState('')
    const [editingLesson, setEditingLesson] = useState<string | null>(null)
    const [lessonForm, setLessonForm] = useState({ title: '', video_url: '', duration: 0, is_free: false })

    const supabase = createClient()

    const fetchData = useCallback(async () => {
        setLoading(true)
        const { data: course } = await supabase.from('courses').select('title').eq('id', courseId).single()
        if (course) setCourseTitle(course.title)

        const { data: secs } = await supabase.from('sections').select('*').eq('course_id', courseId).order('order_index')
        const { data: les } = await supabase.from('lessons').select('*').eq('course_id', courseId).order('order_index')

        const enriched = (secs || []).map((s) => ({
            ...s,
            lessons: (les || []).filter((l) => l.section_id === s.id),
        }))
        setSections(enriched as Section[])
        setLoading(false)
    }, [courseId, supabase])

    useEffect(() => { fetchData() }, [fetchData])

    const addSection = async () => {
        if (!newSectionTitle.trim()) return
        const res = await fetch('/api/instructor/lessons', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'createSection', courseId, title: newSectionTitle }),
        })
        if (res.ok) {
            setNewSectionTitle('')
            fetchData()
        }
    }

    const addLesson = async (sectionId: string) => {
        const title = `Bài học mới ${Date.now().toString().slice(-4)}`
        const slug = `bai-hoc-${Date.now()}`
        const res = await fetch('/api/instructor/lessons', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'createLesson', courseId, sectionId, title, slug }),
        })
        if (res.ok) fetchData()
    }

    const saveLesson = async (lessonId: string) => {
        await fetch('/api/instructor/lessons', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lessonId, ...lessonForm }),
        })
        setEditingLesson(null)
        fetchData()
    }

    const removeLesson = async (lessonId: string) => {
        await fetch('/api/instructor/lessons', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lessonId }),
        })
        fetchData()
    }

    const removeSection = async (sectionId: string) => {
        await fetch('/api/instructor/lessons', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sectionId }),
        })
        fetchData()
    }

    const publishCourse = async () => {
        // Count total lessons and duration
        const totalLessons = sections.reduce((s, sec) => s + sec.lessons.length, 0)
        const totalDuration = sections.reduce((s, sec) => s + sec.lessons.reduce((ls, l) => ls + l.duration, 0), 0)

        await fetch('/api/instructor/courses', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ courseId, status: 'published', total_lessons: totalLessons, total_duration: totalDuration }),
        })
        fetchData()
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="animate-spin h-8 w-8 border-2 border-indigo-600 border-t-transparent rounded-full" />
            </div>
        )
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Nội Dung Khóa Học</h1>
                    <p className="text-sm text-slate-500 mt-1">{courseTitle}</p>
                </div>
                <button
                    onClick={publishCourse}
                    className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-colors text-sm"
                >
                    <span className="material-icons-outlined text-base">publish</span>
                    Xuất bản
                </button>
            </div>

            {/* Sections */}
            <div className="space-y-6">
                {sections.map((section) => (
                    <div key={section.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                        {/* Section Header */}
                        <div className="flex items-center justify-between px-5 py-4 bg-slate-50 border-b border-slate-100">
                            <h3 className="font-semibold text-slate-900 text-sm">{section.title}</h3>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => addLesson(section.id)}
                                    className="flex items-center gap-1 px-3 py-1.5 text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
                                >
                                    <span className="material-icons-outlined text-sm">add</span>
                                    Thêm bài
                                </button>
                                <button
                                    onClick={() => removeSection(section.id)}
                                    className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    <span className="material-icons-outlined text-sm">delete</span>
                                </button>
                            </div>
                        </div>

                        {/* Lessons */}
                        <div className="divide-y divide-slate-50">
                            {section.lessons.length === 0 ? (
                                <p className="text-center py-6 text-sm text-slate-400">Chưa có bài học. Nhấn &quot;Thêm bài&quot; để bắt đầu.</p>
                            ) : (
                                section.lessons.map((lesson) => (
                                    <div key={lesson.id} className="px-5 py-3">
                                        {editingLesson === lesson.id ? (
                                            <div className="space-y-3">
                                                <input
                                                    type="text"
                                                    value={lessonForm.title}
                                                    onChange={(e) => setLessonForm(f => ({ ...f, title: e.target.value }))}
                                                    placeholder="Tên bài học"
                                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500"
                                                />
                                                <div className="grid grid-cols-3 gap-3">
                                                    <input
                                                        type="text"
                                                        value={lessonForm.video_url}
                                                        onChange={(e) => setLessonForm(f => ({ ...f, video_url: e.target.value }))}
                                                        placeholder="URL video (HLS/MP4)"
                                                        className="col-span-2 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500"
                                                    />
                                                    <input
                                                        type="number"
                                                        value={lessonForm.duration}
                                                        onChange={(e) => setLessonForm(f => ({ ...f, duration: Number(e.target.value) }))}
                                                        placeholder="Thời lượng (giây)"
                                                        className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500"
                                                    />
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <label className="flex items-center gap-2 text-sm text-slate-600">
                                                        <input
                                                            type="checkbox"
                                                            checked={lessonForm.is_free}
                                                            onChange={(e) => setLessonForm(f => ({ ...f, is_free: e.target.checked }))}
                                                            className="rounded"
                                                        />
                                                        Miễn phí (preview)
                                                    </label>
                                                    <div className="flex gap-2">
                                                        <button onClick={() => setEditingLesson(null)} className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-700">
                                                            Hủy
                                                        </button>
                                                        <button onClick={() => saveLesson(lesson.id)} className="px-4 py-1.5 text-xs bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                                                            Lưu
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-3">
                                                <span className="material-icons-outlined text-slate-300 text-base">drag_indicator</span>
                                                <span className="material-icons-outlined text-slate-400 text-base">
                                                    {lesson.video_url ? 'play_circle' : 'article'}
                                                </span>
                                                <span className="flex-1 text-sm text-slate-700">{lesson.title}</span>
                                                {lesson.is_free && (
                                                    <span className="px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">Miễn phí</span>
                                                )}
                                                {lesson.duration > 0 && (
                                                    <span className="text-xs text-slate-400">{Math.floor(lesson.duration / 60)}:{(lesson.duration % 60).toString().padStart(2, '0')}</span>
                                                )}
                                                <button
                                                    onClick={() => {
                                                        setEditingLesson(lesson.id)
                                                        setLessonForm({
                                                            title: lesson.title,
                                                            video_url: lesson.video_url || '',
                                                            duration: lesson.duration,
                                                            is_free: lesson.is_free,
                                                        })
                                                    }}
                                                    className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                                >
                                                    <span className="material-icons-outlined text-sm">edit</span>
                                                </button>
                                                <button
                                                    onClick={() => removeLesson(lesson.id)}
                                                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <span className="material-icons-outlined text-sm">delete</span>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                ))}

                {/* Add Section */}
                <div className="bg-white rounded-xl border border-dashed border-slate-300 p-5">
                    <div className="flex gap-3">
                        <input
                            type="text"
                            value={newSectionTitle}
                            onChange={(e) => setNewSectionTitle(e.target.value)}
                            placeholder="Tên phần mới (VD: Chương 1 - Giới thiệu)"
                            onKeyDown={(e) => e.key === 'Enter' && addSection()}
                            className="flex-1 px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        <button
                            onClick={addSection}
                            disabled={!newSectionTitle.trim()}
                            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors text-sm disabled:opacity-50"
                        >
                            + Thêm phần
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
