import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const quizId = searchParams.get('quizId')
        if (!quizId) return NextResponse.json({ error: 'quizId required' }, { status: 400 })

        const supabase = await createClient()

        const { data: quiz } = await supabase
            .from('quizzes')
            .select('*')
            .eq('id', quizId)
            .single()

        if (!quiz) return NextResponse.json({ error: 'Quiz not found' }, { status: 404 })

        // Get questions (without correct answers for security)
        const { data: questions } = await supabase
            .from('quiz_questions')
            .select('id, question, question_type, options, points, order_index')
            .eq('quiz_id', quizId)
            .order('order_index')

        return NextResponse.json({
            quiz: { ...quiz, questions: questions || [] },
        })
    } catch {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const { quizId, answers } = await request.json()
        if (!quizId) return NextResponse.json({ error: 'quizId required' }, { status: 400 })

        // Get quiz with pass score
        const { data: quiz } = await supabase
            .from('quizzes')
            .select('pass_score')
            .eq('id', quizId)
            .single()

        if (!quiz) return NextResponse.json({ error: 'Quiz not found' }, { status: 404 })

        // Get questions with correct answers
        const { data: questions } = await supabase
            .from('quiz_questions')
            .select('id, correct_answer, explanation, points')
            .eq('quiz_id', quizId)

        if (!questions) return NextResponse.json({ error: 'No questions' }, { status: 404 })

        // Grade
        let score = 0
        let maxScore = 0
        const explanations: Record<string, { correct: unknown; explanation: string | null }> = {}

        for (const q of questions) {
            maxScore += q.points
            const userAnswer = answers[q.id]
            const correctAnswer = q.correct_answer

            const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(correctAnswer)
            if (isCorrect) score += q.points

            explanations[q.id] = {
                correct: correctAnswer,
                explanation: q.explanation,
            }
        }

        const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0
        const passed = pct >= quiz.pass_score

        // Save attempt
        await supabase.from('quiz_attempts').insert({
            user_id: user.id,
            quiz_id: quizId,
            score,
            max_score: maxScore,
            passed,
            answers,
            completed_at: new Date().toISOString(),
        })

        return NextResponse.json({ score, maxScore, passed, explanations })
    } catch {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
