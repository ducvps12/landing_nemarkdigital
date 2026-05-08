import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const { enrollmentId, lessonId, watchedSeconds, isCompleted } = await request.json()

        if (!enrollmentId || !lessonId) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
        }

        // Verify enrollment belongs to user
        const { data: enrollment } = await supabase
            .from('enrollments')
            .select('id, course_id')
            .eq('id', enrollmentId)
            .eq('user_id', user.id)
            .single()

        if (!enrollment) return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })

        // Upsert lesson progress
        await supabase
            .from('lesson_progress')
            .upsert({
                enrollment_id: enrollmentId,
                lesson_id: lessonId,
                watched_seconds: watchedSeconds || 0,
                is_completed: isCompleted || false,
                completed_at: isCompleted ? new Date().toISOString() : null,
            }, { onConflict: 'enrollment_id,lesson_id' })

        // Recalculate enrollment progress
        const { count: totalLessons } = await supabase
            .from('lessons')
            .select('id', { count: 'exact', head: true })
            .eq('course_id', enrollment.course_id)

        const { count: completedLessons } = await supabase
            .from('lesson_progress')
            .select('id', { count: 'exact', head: true })
            .eq('enrollment_id', enrollmentId)
            .eq('is_completed', true)

        const progressPct = totalLessons ? Math.round(((completedLessons || 0) / totalLessons) * 100) : 0

        await supabase
            .from('enrollments')
            .update({
                progress_pct: progressPct,
                completed_at: progressPct >= 100 ? new Date().toISOString() : null,
            })
            .eq('id', enrollmentId)

        return NextResponse.json({ progress: progressPct })
    } catch (error) {
        console.error('Progress update error:', error)
        return NextResponse.json({ error: 'Internal error' }, { status: 500 })
    }
}

export async function GET(request: NextRequest) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const enrollmentId = request.nextUrl.searchParams.get('enrollmentId')
        if (!enrollmentId) return NextResponse.json({ error: 'Missing enrollmentId' }, { status: 400 })

        const { data } = await supabase
            .from('lesson_progress')
            .select('*')
            .eq('enrollment_id', enrollmentId)

        return NextResponse.json({ progress: data || [] })
    } catch (error) {
        console.error('Progress get error:', error)
        return NextResponse.json({ error: 'Internal error' }, { status: 500 })
    }
}
