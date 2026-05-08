'use client'

import { useState } from 'react'
import { AuthProvider, useAuth } from '@/lib/auth/auth-context'
import Link from 'next/link'

function ForgotPasswordContent() {
    const { resetPassword } = useAuth()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        const result = await resetPassword(email)
        setLoading(false)

        if (result.error) {
            setError(result.error)
        } else {
            setSuccess(true)
        }
    }

    if (success) {
        return (
            <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons text-primary text-3xl">email</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Kiểm tra email</h2>
                <p className="text-slate-500 mb-6">
                    Chúng tôi đã gửi link đặt lại mật khẩu đến <strong className="text-slate-700">{email}</strong>.
                    Vui lòng kiểm tra hộp thư của bạn.
                </p>
                <Link
                    href="/auth/login"
                    className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                    Quay lại đăng nhập
                </Link>
            </div>
        )
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Quên mật khẩu?</h1>
                <p className="text-slate-500">
                    Nhập email của bạn để nhận link đặt lại mật khẩu.
                </p>
            </div>

            {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-0 outline-none transition-colors duration-200 text-slate-900 placeholder:text-slate-400"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 shadow-lg shadow-primary/25"
                >
                    {loading ? 'Đang gửi...' : 'Gửi link đặt lại'}
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
                <Link href="/auth/login" className="text-primary font-semibold hover:text-primary-dark transition-colors">
                    ← Quay lại đăng nhập
                </Link>
            </p>
        </div>
    )
}

export default function ForgotPasswordPage() {
    return (
        <AuthProvider>
            <ForgotPasswordContent />
        </AuthProvider>
    )
}
