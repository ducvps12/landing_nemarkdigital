import { createClient } from '@/lib/supabase/server'

export interface InstructorCourse {
    id: string
    title: string
    slug: string
    status: 'draft' | 'published' | 'archived'
    price: number
    discount_price: number | null
    level: string
    total_lessons: number
    total_duration: number
    thumbnail_url: string | null
    created_at: string
    enrollment_count?: number
    avg_rating?: number
    revenue?: number
}

export interface InstructorStats {
    totalCourses: number
    publishedCourses: number
    totalStudents: number
    totalRevenue: number
    avgRating: number
}

// === STATS ===

export async function getInstructorStats(): Promise<InstructorStats> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { totalCourses: 0, publishedCourses: 0, totalStudents: 0, totalRevenue: 0, avgRating: 0 }

    // Get all instructor courses
    const { data: courses } = await supabase
        .from('courses')
        .select('id, status')
        .eq('instructor_id', user.id)

    const courseIds = courses?.map((c) => c.id) || []
    const publishedCount = courses?.filter((c) => c.status === 'published').length || 0

    if (courseIds.length === 0) {
        return { totalCourses: 0, publishedCourses: 0, totalStudents: 0, totalRevenue: 0, avgRating: 0 }
    }

    // Total students
    const { count: studentCount } = await supabase
        .from('enrollments')
        .select('id', { count: 'exact', head: true })
        .in('course_id', courseIds)

    // Avg rating
    const { data: reviews } = await supabase
        .from('reviews')
        .select('rating')
        .in('course_id', courseIds)

    const avgRating = reviews && reviews.length > 0
        ? Math.round((reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10) / 10
        : 0

    // Revenue from paid orders
    const { data: orderItems } = await supabase
        .from('order_items')
        .select('price, quantity')
        .eq('item_type', 'course')
        .in('item_id', courseIds)

    const totalRevenue = orderItems?.reduce((s, i) => s + (i.price * i.quantity), 0) || 0

    return {
        totalCourses: courseIds.length,
        publishedCourses: publishedCount,
        totalStudents: studentCount || 0,
        totalRevenue,
        avgRating,
    }
}

// === COURSES ===

export async function getInstructorCourses(): Promise<InstructorCourse[]> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return []

    const { data: courses } = await supabase
        .from('courses')
        .select('*')
        .eq('instructor_id', user.id)
        .order('created_at', { ascending: false })

    if (!courses) return []

    // Enrich with enrollment counts
    const enriched = await Promise.all(
        courses.map(async (course) => {
            const { count } = await supabase
                .from('enrollments')
                .select('id', { count: 'exact', head: true })
                .eq('course_id', course.id)

            const { data: reviews } = await supabase
                .from('reviews')
                .select('rating')
                .eq('course_id', course.id)

            const avg = reviews && reviews.length > 0
                ? Math.round((reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10) / 10
                : 0

            return {
                ...course,
                enrollment_count: count || 0,
                avg_rating: avg,
            }
        })
    )

    return enriched as InstructorCourse[]
}

export async function createCourse(data: {
    title: string
    slug: string
    short_description?: string
    description?: string
    category_id?: string
    level?: string
    price?: number
    discount_price?: number
    thumbnail_url?: string
    what_you_learn?: string[]
    requirements?: string[]
    tags?: string[]
}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    const { data: course, error } = await supabase
        .from('courses')
        .insert({
            ...data,
            instructor_id: user.id,
            status: 'draft',
        })
        .select()
        .single()

    if (error) {
        console.error('Create course error:', error)
        return null
    }
    return course
}

export async function updateCourse(courseId: string, updates: Record<string, unknown>) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    const { data, error } = await supabase
        .from('courses')
        .update(updates)
        .eq('id', courseId)
        .eq('instructor_id', user.id)
        .select()
        .single()

    if (error) {
        console.error('Update course error:', error)
        return null
    }
    return data
}

// === SECTIONS & LESSONS ===

export async function createSection(courseId: string, title: string) {
    const supabase = await createClient()

    // Get max order
    const { data: existing } = await supabase
        .from('sections')
        .select('order_index')
        .eq('course_id', courseId)
        .order('order_index', { ascending: false })
        .limit(1)

    const nextOrder = existing && existing.length > 0 ? existing[0].order_index + 1 : 0

    const { data, error } = await supabase
        .from('sections')
        .insert({ course_id: courseId, title, order_index: nextOrder })
        .select()
        .single()

    if (error) console.error('Create section error:', error)
    return data
}

export async function createLesson(courseId: string, sectionId: string, data: {
    title: string
    slug: string
    description?: string
    video_url?: string
    duration?: number
    is_free?: boolean
    content_md?: string
}) {
    const supabase = await createClient()

    const { data: existing } = await supabase
        .from('lessons')
        .select('order_index')
        .eq('section_id', sectionId)
        .order('order_index', { ascending: false })
        .limit(1)

    const nextOrder = existing && existing.length > 0 ? existing[0].order_index + 1 : 0

    const { data: lesson, error } = await supabase
        .from('lessons')
        .insert({
            ...data,
            course_id: courseId,
            section_id: sectionId,
            order_index: nextOrder,
        })
        .select()
        .single()

    if (error) console.error('Create lesson error:', error)
    return lesson
}

export async function updateLesson(lessonId: string, updates: Record<string, unknown>) {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('lessons')
        .update(updates)
        .eq('id', lessonId)
        .select()
        .single()

    if (error) console.error('Update lesson error:', error)
    return data
}

export async function deleteLesson(lessonId: string) {
    const supabase = await createClient()
    const { error } = await supabase
        .from('lessons')
        .delete()
        .eq('id', lessonId)
    return !error
}

export async function deleteSection(sectionId: string) {
    const supabase = await createClient()
    // Also delete lessons in the section
    await supabase.from('lessons').delete().eq('section_id', sectionId)
    const { error } = await supabase.from('sections').delete().eq('id', sectionId)
    return !error
}
