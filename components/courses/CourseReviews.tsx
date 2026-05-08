'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Review {
    id: string
    rating: number
    comment: string
    created_at: string
    user?: { full_name: string; avatar_url: string | null }
}

interface CourseReviewsProps {
    reviews: Review[]
    avgRating: number
    canReview?: boolean
    onSubmitReview?: (rating: number, comment: string) => Promise<void>
}

export default function CourseReviews({ reviews, avgRating, canReview, onSubmitReview }: CourseReviewsProps) {
    const [newRating, setNewRating] = useState(5)
    const [newComment, setNewComment] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [hoveredStar, setHoveredStar] = useState(0)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!onSubmitReview) return
        setSubmitting(true)
        try {
            await onSubmitReview(newRating, newComment)
            setNewComment('')
        } finally {
            setSubmitting(false)
        }
    }

    // Rating distribution
    const distribution = [5, 4, 3, 2, 1].map((star) => ({
        star,
        count: reviews.filter((r) => r.rating === star).length,
        pct: reviews.length > 0 ? (reviews.filter((r) => r.rating === star).length / reviews.length) * 100 : 0,
    }))

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Đánh giá từ học viên</h2>

            {/* Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Average */}
                <div className="flex flex-col items-center justify-center p-6 bg-primary/5 rounded-2xl">
                    <p className="text-4xl font-bold text-primary">{avgRating || '—'}</p>
                    <div className="flex mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`material-icons text-lg ${star <= Math.round(avgRating) ? 'text-yellow-400' : 'text-slate-300'}`}
                            >
                                star
                            </span>
                        ))}
                    </div>
                    <p className="text-sm text-slate-500 mt-1">{reviews.length} đánh giá</p>
                </div>

                {/* Distribution */}
                <div className="md:col-span-2 space-y-2">
                    {distribution.map(({ star, count, pct }) => (
                        <div key={star} className="flex items-center gap-3">
                            <span className="text-sm text-slate-600 w-8">{star} ★</span>
                            <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-yellow-400 rounded-full transition-all"
                                    style={{ width: `${pct}%` }}
                                />
                            </div>
                            <span className="text-sm text-slate-400 w-8 text-right">{count}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Write Review */}
            {canReview && (
                <form onSubmit={handleSubmit} className="mb-8 p-5 bg-slate-50 rounded-xl">
                    <h3 className="font-semibold text-slate-900 mb-3">Viết đánh giá</h3>

                    {/* Star Selector */}
                    <div className="flex gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setNewRating(star)}
                                onMouseEnter={() => setHoveredStar(star)}
                                onMouseLeave={() => setHoveredStar(0)}
                                className="focus:outline-none"
                            >
                                <span className={`material-icons text-2xl transition-colors ${star <= (hoveredStar || newRating) ? 'text-yellow-400' : 'text-slate-300'
                                    }`}>
                                    star
                                </span>
                            </button>
                        ))}
                    </div>

                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Chia sẻ trải nghiệm của bạn..."
                        rows={3}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm"
                    />

                    <button
                        type="submit"
                        disabled={submitting}
                        className="mt-3 px-6 py-2.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-colors disabled:opacity-50 text-sm"
                    >
                        {submitting ? 'Đang gửi...' : 'Gửi đánh giá'}
                    </button>
                </form>
            )}

            {/* Review List */}
            <div className="space-y-4">
                {reviews.length === 0 ? (
                    <p className="text-center text-slate-400 py-8">Chưa có đánh giá nào.</p>
                ) : (
                    reviews.map((review) => (
                        <div key={review.id} className="flex gap-4 p-4 bg-white border border-slate-100 rounded-xl">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                {review.user?.avatar_url ? (
                                    <Image
                                        src={review.user.avatar_url}
                                        alt={review.user.full_name}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                    />
                                ) : (
                                    <span className="text-sm font-bold text-primary">
                                        {review.user?.full_name?.charAt(0) || '?'}
                                    </span>
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <p className="font-medium text-slate-900 text-sm">{review.user?.full_name || 'Ẩn danh'}</p>
                                    <span className="text-xs text-slate-400">
                                        {new Date(review.created_at).toLocaleDateString('vi-VN')}
                                    </span>
                                </div>
                                <div className="flex mb-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`material-icons text-sm ${star <= review.rating ? 'text-yellow-400' : 'text-slate-300'}`}
                                        >
                                            star
                                        </span>
                                    ))}
                                </div>
                                {review.comment && (
                                    <p className="text-sm text-slate-600 leading-relaxed">{review.comment}</p>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
