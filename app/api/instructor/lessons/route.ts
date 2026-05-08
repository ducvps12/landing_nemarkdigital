import { NextRequest, NextResponse } from 'next/server'
import { createSection, createLesson, updateLesson, deleteLesson, deleteSection } from '@/lib/instructor'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const body = await request.json()

        if (body.action === 'createSection') {
            const section = await createSection(body.courseId, body.title)
            return NextResponse.json({ section })
        }

        if (body.action === 'createLesson') {
            const lesson = await createLesson(body.courseId, body.sectionId, {
                title: body.title,
                slug: body.slug,
                description: body.description,
                video_url: body.video_url,
                duration: body.duration,
                is_free: body.is_free,
                content_md: body.content_md,
            })
            return NextResponse.json({ lesson })
        }

        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    } catch {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function PUT(request: NextRequest) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const { lessonId, ...updates } = await request.json()
        if (!lessonId) return NextResponse.json({ error: 'lessonId required' }, { status: 400 })

        const lesson = await updateLesson(lessonId, updates)
        return NextResponse.json({ lesson })
    } catch {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const body = await request.json()

        if (body.sectionId) {
            await deleteSection(body.sectionId)
            return NextResponse.json({ success: true })
        }

        if (body.lessonId) {
            await deleteLesson(body.lessonId)
            return NextResponse.json({ success: true })
        }

        return NextResponse.json({ error: 'sectionId or lessonId required' }, { status: 400 })
    } catch {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
