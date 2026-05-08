import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { courseId, orderId } = await request.json()
        if (!courseId) {
            return NextResponse.json({ error: 'Course ID required' }, { status: 400 })
        }

        // Check if course is free or order is paid
        const { data: course } = await supabase
            .from('courses')
            .select('id, price')
            .eq('id', courseId)
            .single()

        if (!course) {
            return NextResponse.json({ error: 'Course not found' }, { status: 404 })
        }

        if (course.price > 0 && !orderId) {
            return NextResponse.json({ error: 'Payment required' }, { status: 402 })
        }

        if (orderId) {
            const { data: order } = await supabase
                .from('orders')
                .select('id, status')
                .eq('id', orderId)
                .eq('user_id', user.id)
                .eq('status', 'paid')
                .single()

            if (!order) {
                return NextResponse.json({ error: 'Invalid or unpaid order' }, { status: 400 })
            }
        }

        const { data: enrollment, error } = await supabase
            .from('enrollments')
            .upsert({
                user_id: user.id,
                course_id: courseId,
                order_id: orderId || null,
            }, { onConflict: 'user_id,course_id' })
            .select()
            .single()

        if (error) {
            return NextResponse.json({ error: 'Enrollment failed' }, { status: 500 })
        }

        return NextResponse.json({ enrollment })
    } catch (error) {
        console.error('Enroll error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
