import { NextRequest, NextResponse } from 'next/server'
import { createCourse, updateCourse } from '@/lib/instructor'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const course = await createCourse(body)

        if (!course) {
            return NextResponse.json({ error: 'Failed to create course' }, { status: 500 })
        }

        return NextResponse.json({ course })
    } catch {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function PUT(request: NextRequest) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { courseId, ...updates } = await request.json()
        if (!courseId) {
            return NextResponse.json({ error: 'courseId required' }, { status: 400 })
        }

        const course = await updateCourse(courseId, updates)
        return NextResponse.json({ course })
    } catch {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
