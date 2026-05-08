import { createClient } from '@/lib/supabase/server'

export interface Course {
    id: string
    instructor_id: string | null
    category_id: string | null
    title: string
    slug: string
    short_description: string | null
    description: string | null
    thumbnail_url: string | null
    preview_video_url: string | null
    price: number
    discount_price: number | null
    level: 'beginner' | 'intermediate' | 'advanced'
    status: 'draft' | 'published' | 'archived'
    total_lessons: number
    total_duration: number
    what_you_learn: string[] | null
    requirements: string[] | null
    tags: string[] | null
    created_at: string
    updated_at: string
    // joined
    instructor?: { full_name: string; avatar_url: string | null }
    category?: { name: string; slug: string }
    avg_rating?: number
    review_count?: number
    enrollment_count?: number
}

export interface Section {
    id: string
    course_id: string
    title: string
    order_index: number
    lessons?: Lesson[]
}

export interface Lesson {
    id: string
    course_id: string
    section_id: string
    title: string
    slug: string
    description: string | null
    video_url: string | null
    duration: number
    order_index: number
    is_free: boolean
    content_md: string | null
}

export interface Category {
    id: string
    name: string
    slug: string
    description: string | null
    icon: string | null
    order_index: number
}

export interface Enrollment {
    id: string
    user_id: string
    course_id: string
    order_id: string | null
    progress_pct: number
    enrolled_at: string
    completed_at: string | null
    course?: Course
}

// === READ FUNCTIONS ===

export async function getCategories(): Promise<Category[]> {
    const supabase = await createClient()
    const { data } = await supabase
        .from('categories')
        .select('*')
        .order('order_index')
    return (data || []) as Category[]
}

export async function getCourses(options?: {
    categorySlug?: string
    search?: string
    level?: string
    limit?: number
    offset?: number
}): Promise<{ courses: Course[]; count: number }> {
    const supabase = await createClient()
    let query = supabase
        .from('courses')
        .select(`
            *,
            instructor:profiles!instructor_id(full_name, avatar_url),
            category:categories!category_id(name, slug)
        `, { count: 'exact' })
        .eq('status', 'published')
        .order('created_at', { ascending: false })

    if (options?.categorySlug) {
        const { data: cat } = await supabase
            .from('categories')
            .select('id')
            .eq('slug', options.categorySlug)
            .single()
        if (cat) query = query.eq('category_id', cat.id)
    }

    if (options?.search) {
        query = query.ilike('title', `%${options.search}%`)
    }

    if (options?.level) {
        query = query.eq('level', options.level)
    }

    if (options?.limit) {
        const offset = options.offset || 0
        query = query.range(offset, offset + options.limit - 1)
    }

    const { data, count } = await query
    return { courses: (data || []) as Course[], count: count || 0 }
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
    const supabase = await createClient()
    const { data } = await supabase
        .from('courses')
        .select(`
            *,
            instructor:profiles!instructor_id(full_name, avatar_url),
            category:categories!category_id(name, slug)
        `)
        .eq('slug', slug)
        .single()

    if (!data) return null

    // Get review stats
    const { data: reviews } = await supabase
        .from('reviews')
        .select('rating')
        .eq('course_id', data.id)

    const reviewCount = reviews?.length || 0
    const avgRating = reviewCount > 0
        ? reviews!.reduce((sum, r) => sum + r.rating, 0) / reviewCount
        : 0

    // Get enrollment count
    const { count: enrollmentCount } = await supabase
        .from('enrollments')
        .select('id', { count: 'exact', head: true })
        .eq('course_id', data.id)

    return {
        ...data,
        avg_rating: Math.round(avgRating * 10) / 10,
        review_count: reviewCount,
        enrollment_count: enrollmentCount || 0,
    } as Course
}

export async function getCourseSections(courseId: string): Promise<Section[]> {
    const supabase = await createClient()
    const { data: sections } = await supabase
        .from('sections')
        .select('*')
        .eq('course_id', courseId)
        .order('order_index')

    if (!sections) return []

    const { data: lessons } = await supabase
        .from('lessons')
        .select('*')
        .eq('course_id', courseId)
        .order('order_index')

    return sections.map((section) => ({
        ...section,
        lessons: (lessons || []).filter((l) => l.section_id === section.id),
    })) as Section[]
}

export async function getLesson(courseId: string, lessonId: string): Promise<Lesson | null> {
    const supabase = await createClient()
    const { data } = await supabase
        .from('lessons')
        .select('*')
        .eq('id', lessonId)
        .eq('course_id', courseId)
        .single()
    return data as Lesson | null
}

// === ENROLLMENT ===

export async function getUserEnrollment(courseId: string): Promise<Enrollment | null> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    const { data } = await supabase
        .from('enrollments')
        .select('*')
        .eq('user_id', user.id)
        .eq('course_id', courseId)
        .single()

    return data as Enrollment | null
}

export async function getUserEnrollments(): Promise<Enrollment[]> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return []

    const { data } = await supabase
        .from('enrollments')
        .select(`
            *,
            course:courses(*)
        `)
        .eq('user_id', user.id)
        .order('enrolled_at', { ascending: false })

    return (data || []) as Enrollment[]
}

export async function enrollUser(courseId: string, orderId?: string): Promise<Enrollment | null> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    const { data } = await supabase
        .from('enrollments')
        .upsert({
            user_id: user.id,
            course_id: courseId,
            order_id: orderId || null,
        }, { onConflict: 'user_id,course_id' })
        .select()
        .single()

    return data as Enrollment | null
}

// === PROGRESS ===

export async function updateLessonProgress(
    enrollmentId: string,
    lessonId: string,
    watchedSeconds: number,
    isCompleted: boolean
) {
    const supabase = await createClient()
    await supabase
        .from('lesson_progress')
        .upsert({
            enrollment_id: enrollmentId,
            lesson_id: lessonId,
            watched_seconds: watchedSeconds,
            is_completed: isCompleted,
            completed_at: isCompleted ? new Date().toISOString() : null,
        }, { onConflict: 'enrollment_id,lesson_id' })

    // Recalculate enrollment progress
    const { data: enrollment } = await supabase
        .from('enrollments')
        .select('course_id')
        .eq('id', enrollmentId)
        .single()

    if (enrollment) {
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
    }
}

export async function getLessonProgress(enrollmentId: string) {
    const supabase = await createClient()
    const { data } = await supabase
        .from('lesson_progress')
        .select('*')
        .eq('enrollment_id', enrollmentId)
    return data || []
}

// === REVIEWS ===

export async function getCourseReviews(courseId: string) {
    const supabase = await createClient()
    const { data } = await supabase
        .from('reviews')
        .select(`
            *,
            user:profiles!user_id(full_name, avatar_url)
        `)
        .eq('course_id', courseId)
        .order('created_at', { ascending: false })
    return data || []
}

export async function submitReview(courseId: string, rating: number, comment: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    const { data } = await supabase
        .from('reviews')
        .upsert({
            user_id: user.id,
            course_id: courseId,
            rating,
            comment,
        }, { onConflict: 'user_id,course_id' })
        .select()
        .single()

    return data
}
