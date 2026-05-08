'use client'

import { useState, useEffect, useCallback } from 'react'

interface Question {
    id: string
    question: string
    question_type: 'single' | 'multiple'
    options: string[]
    explanation: string | null
    points: number
}

interface QuizData {
    id: string
    title: string
    description: string | null
    pass_score: number
    time_limit: number | null
    questions: Question[]
}

interface QuizPlayerProps {
    quizId: string
    courseSlug: string
}

export default function QuizPlayer({ quizId, courseSlug }: QuizPlayerProps) {
    const [quiz, setQuiz] = useState<QuizData | null>(null)
    const [currentQ, setCurrentQ] = useState(0)
    const [answers, setAnswers] = useState<Record<string, number | number[]>>({})
    const [submitted, setSubmitted] = useState(false)
    const [result, setResult] = useState<{ score: number; maxScore: number; passed: boolean; explanations: Record<string, { correct: number | number[]; explanation: string | null }> } | null>(null)
    const [timeLeft, setTimeLeft] = useState<number | null>(null)
    const [loading, setLoading] = useState(true)

    // Fetch quiz
    useEffect(() => {
        fetch(`/api/courses/quiz?quizId=${quizId}`)
            .then((r) => r.json())
            .then((data) => {
                setQuiz(data.quiz)
                if (data.quiz?.time_limit) setTimeLeft(data.quiz.time_limit)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [quizId])

    // Timer
    const handleSubmit = useCallback(async () => {
        if (!quiz || submitted) return
        setSubmitted(true)

        const res = await fetch('/api/courses/quiz', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quizId, answers }),
        })
        const data = await res.json()
        setResult(data)
    }, [quiz, submitted, quizId, answers])

    useEffect(() => {
        if (timeLeft === null || timeLeft <= 0 || submitted) return
        const timer = setInterval(() => {
            setTimeLeft((t) => {
                if (t !== null && t <= 1) {
                    handleSubmit()
                    return 0
                }
                return t !== null ? t - 1 : null
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [timeLeft, submitted, handleSubmit])

    const selectAnswer = (questionId: string, optionIndex: number, type: 'single' | 'multiple') => {
        if (submitted) return

        setAnswers((prev) => {
            if (type === 'single') {
                return { ...prev, [questionId]: optionIndex }
            }
            const current = (prev[questionId] as number[]) || []
            if (current.includes(optionIndex)) {
                return { ...prev, [questionId]: current.filter((i) => i !== optionIndex) }
            }
            return { ...prev, [questionId]: [...current, optionIndex] }
        })
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="animate-spin h-8 w-8 border-2 border-indigo-600 border-t-transparent rounded-full" />
            </div>
        )
    }

    if (!quiz) {
        return <p className="text-center py-20 text-slate-400">Không tìm thấy bài quiz</p>
    }

    const question = quiz.questions[currentQ]
    const totalQuestions = quiz.questions.length

    // Results screen
    if (submitted && result) {
        const pct = Math.round((result.score / result.maxScore) * 100)
        return (
            <div className="max-w-2xl mx-auto">
                <div className={`text-center p-8 rounded-2xl mb-6 ${result.passed ? 'bg-green-50' : 'bg-red-50'}`}>
                    <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${result.passed ? 'bg-green-100' : 'bg-red-100'}`}>
                        <span className={`material-icons-outlined text-4xl ${result.passed ? 'text-green-600' : 'text-red-600'}`}>
                            {result.passed ? 'check_circle' : 'cancel'}
                        </span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                        {result.passed ? 'Chúc mừng! Bạn đã đạt!' : 'Chưa đạt. Hãy thử lại!'}
                    </h2>
                    <p className="text-4xl font-bold mt-4">
                        <span className={result.passed ? 'text-green-600' : 'text-red-600'}>{pct}%</span>
                    </p>
                    <p className="text-slate-500 mt-2">
                        {result.score} / {result.maxScore} điểm (cần ≥ {quiz.pass_score}%)
                    </p>
                </div>

                {/* Review Answers */}
                <div className="space-y-4">
                    {quiz.questions.map((q, i) => {
                        const userAns = answers[q.id]
                        const correctAns = result.explanations[q.id]?.correct
                        const isCorrect = JSON.stringify(userAns) === JSON.stringify(correctAns)
                        return (
                            <div key={q.id} className={`p-5 rounded-xl border-2 ${isCorrect ? 'border-green-200 bg-green-50/50' : 'border-red-200 bg-red-50/50'}`}>
                                <p className="text-sm font-medium text-slate-900 mb-2">
                                    {i + 1}. {q.question}
                                </p>
                                <div className="space-y-1.5">
                                    {q.options.map((opt, oi) => {
                                        const isSelected = q.question_type === 'single' ? userAns === oi : (userAns as number[])?.includes(oi)
                                        const isCorrectOpt = q.question_type === 'single' ? correctAns === oi : (correctAns as number[])?.includes(oi)
                                        return (
                                            <div key={oi} className={`px-3 py-2 rounded-lg text-sm ${isCorrectOpt ? 'bg-green-100 text-green-800' :
                                                    isSelected ? 'bg-red-100 text-red-800' :
                                                        'bg-white text-slate-600'
                                                }`}>
                                                {isCorrectOpt && <span className="mr-1">✓</span>}
                                                {isSelected && !isCorrectOpt && <span className="mr-1">✗</span>}
                                                {opt}
                                            </div>
                                        )
                                    })}
                                </div>
                                {result.explanations[q.id]?.explanation && (
                                    <p className="mt-2 text-xs text-slate-500 italic">💡 {result.explanations[q.id].explanation}</p>
                                )}
                            </div>
                        )
                    })}
                </div>

                <div className="flex gap-4 mt-6">
                    <button onClick={() => { setSubmitted(false); setResult(null); setAnswers({}); setCurrentQ(0); if (quiz.time_limit) setTimeLeft(quiz.time_limit) }}
                        className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors">
                        Làm lại
                    </button>
                    <a href={`/courses/${courseSlug}`} className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium text-center hover:bg-slate-200 transition-colors">
                        Quay lại
                    </a>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-xl font-bold text-slate-900">{quiz.title}</h1>
                    {quiz.description && <p className="text-sm text-slate-500 mt-1">{quiz.description}</p>}
                </div>
                {timeLeft !== null && (
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${timeLeft < 60 ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
                        }`}>
                        <span className="material-icons-outlined text-base">timer</span>
                        {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                    </div>
                )}
            </div>

            {/* Progress */}
            <div className="flex items-center gap-2 mb-6">
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full transition-all" style={{ width: `${((currentQ + 1) / totalQuestions) * 100}%` }} />
                </div>
                <span className="text-sm text-slate-500 font-medium">{currentQ + 1}/{totalQuestions}</span>
            </div>

            {/* Question */}
            <div className="bg-white rounded-xl border border-slate-100 p-6">
                <p className="text-base font-medium text-slate-900 mb-4">
                    <span className="text-indigo-600 mr-2">Câu {currentQ + 1}.</span>
                    {question.question}
                </p>
                <p className="text-xs text-slate-400 mb-4">
                    {question.question_type === 'single' ? 'Chọn 1 đáp án đúng' : 'Chọn tất cả đáp án đúng'}
                </p>

                <div className="space-y-2">
                    {question.options.map((opt, i) => {
                        const isSelected = question.question_type === 'single'
                            ? answers[question.id] === i
                            : (answers[question.id] as number[])?.includes(i)

                        return (
                            <button
                                key={i}
                                onClick={() => selectAnswer(question.id, i, question.question_type)}
                                className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm ${isSelected
                                        ? 'border-indigo-500 bg-indigo-50 text-indigo-900'
                                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                                    }`}
                            >
                                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full mr-3 text-xs font-bold ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'
                                    }`}>
                                    {String.fromCharCode(65 + i)}
                                </span>
                                {opt}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
                <button
                    onClick={() => setCurrentQ((q) => Math.max(0, q - 1))}
                    disabled={currentQ === 0}
                    className="px-5 py-2.5 text-sm text-slate-600 hover:text-slate-900 disabled:opacity-30"
                >
                    ← Câu trước
                </button>

                {currentQ < totalQuestions - 1 ? (
                    <button
                        onClick={() => setCurrentQ((q) => q + 1)}
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors text-sm"
                    >
                        Câu tiếp →
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-colors text-sm"
                    >
                        Nộp bài
                    </button>
                )}
            </div>

            {/* Question dots */}
            <div className="flex flex-wrap gap-2 mt-6 justify-center">
                {quiz.questions.map((q, i) => (
                    <button
                        key={q.id}
                        onClick={() => setCurrentQ(i)}
                        className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${i === currentQ
                                ? 'bg-indigo-600 text-white'
                                : answers[q.id] !== undefined
                                    ? 'bg-indigo-100 text-indigo-700'
                                    : 'bg-slate-100 text-slate-400'
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}
