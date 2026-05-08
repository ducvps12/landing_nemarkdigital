import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import QuizPlayer from '@/components/courses/QuizPlayer'

interface PageProps {
    params: Promise<{ slug: string; quizId: string }>
}

export default async function QuizPage({ params }: PageProps) {
    const { slug, quizId } = await params
    const supabase = await createClient()

    // Check auth
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) redirect(`/auth/login?redirect=/courses/${slug}/quiz/${quizId}`)

    // Get quiz
    const { data: quiz } = await supabase
        .from('quizzes')
        .select('id, title')
        .eq('id', quizId)
        .single()

    if (!quiz) redirect(`/courses/${slug}`)

    return (
        <div className="min-h-screen bg-slate-50 py-8 px-4">
            <QuizPlayer quizId={quizId} courseSlug={slug} />
        </div>
    )
}
