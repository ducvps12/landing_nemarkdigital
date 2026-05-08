import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
    try {
        const courseId = request.nextUrl.searchParams.get('courseId')
        if (!courseId) return NextResponse.json({ error: 'Missing courseId' }, { status: 400 })

        const supabase = await createClient()
        const { data } = await supabase
            .from('reviews')
            .select(`*, user:profiles!user_id(full_name, avatar_url)`)
            .eq('course_id', courseId)
            .order('created_at', { ascending: false })

        return NextResponse.json({ reviews: data || [] })
    } catch (error) {
        console.error('Reviews get error:', error)
        return NextResponse.json({ error: 'Internal error' }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const { courseId, rating, comment } = await request.json()
        if (!courseId || !rating) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

        // Verify enrollment
        const { data: enrollment } = await supabase
            .from('enrollments')
            .select('id')
            .eq('user_id', user.id)
            .eq('course_id', courseId)
            .single()

        if (!enrollment) return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })

        const { data, error } = await supabase
            .from('reviews')
            .upsert({
                user_id: user.id,
                course_id: courseId,
                rating: Math.min(5, Math.max(1, rating)),
                comment: comment || '',
            }, { onConflict: 'user_id,course_id' })
            .select(`*, user:profiles!user_id(full_name, avatar_url)`)
            .single()

        if (error) return NextResponse.json({ error: 'Review failed' }, { status: 500 })
        return NextResponse.json({ review: data })
    } catch (error) {
        console.error('Review submit error:', error)
        return NextResponse.json({ error: 'Internal error' }, { status: 500 })
    }
}
