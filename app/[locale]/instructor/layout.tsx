'use client'

import { AuthProvider, useUser } from '@/lib/auth/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function InstructorSidebar() {
    const { profile } = useUser()
    const displayName = profile?.full_name || 'Instructor'
    const initials = displayName.charAt(0).toUpperCase()

    const menuItems = [
        { href: '/instructor', icon: 'dashboard', label: 'Tổng quan' },
        { href: '/instructor/courses', icon: 'school', label: 'Khóa học' },
        { href: '/instructor/analytics', icon: 'analytics', label: 'Phân tích' },
    ]

    return (
        <aside className="w-64 bg-white border-r border-slate-200 min-h-[calc(100vh-4rem)] hidden lg:block">
            {/* Profile Card */}
            <div className="p-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        {profile?.avatar_url ? (
                            <Image
                                src={profile.avatar_url}
                                alt={displayName}
                                width={48}
                                height={48}
                                className="w-full h-full rounded-full object-cover"
                            />
                        ) : (
                            <span className="text-white font-bold text-lg">{initials}</span>
                        )}
                    </div>
                    <div className="min-w-0">
                        <p className="font-semibold text-slate-900 truncate">{displayName}</p>
                        <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
                            Giảng viên
                        </span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-1">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                    >
                        <span className="material-icons-outlined text-lg">{item.icon}</span>
                        {item.label}
                    </Link>
                ))}
            </nav>

            {/* Links */}
            <div className="p-4 mt-auto border-t border-slate-100 space-y-1">
                <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                    <span className="material-icons-outlined text-lg">person</span>
                    Dashboard học viên
                </Link>
                <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                    <span className="material-icons-outlined text-lg">arrow_back</span>
                    Về trang chủ
                </Link>
            </div>
        </aside>
    )
}

function InstructorContent({ children }: { children: React.ReactNode }) {
    const { user, profile, loading } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push('/auth/login?redirect=/instructor')
        }
        // Check instructor role
        if (!loading && profile && profile.role !== 'instructor' && profile.role !== 'admin') {
            router.push('/dashboard')
        }
    }, [user, profile, loading, router])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <svg className="animate-spin h-10 w-10 text-indigo-600 mx-auto mb-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <p className="text-slate-500">Đang tải...</p>
                </div>
            </div>
        )
    }

    if (!user) return null
    if (profile && profile.role !== 'instructor' && profile.role !== 'admin') return null

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Top Bar */}
            <header className="h-16 bg-white border-b border-slate-200 flex items-center px-6 sticky top-0 z-40">
                <Link href="/" className="flex items-center gap-2">
                    <img src="/logo.jpg" alt="Nemark" className="h-8 w-8 rounded-lg" />
                    <span className="text-xl font-bold text-primary">Nemark</span>
                </Link>
                <span className="ml-3 text-slate-300">|</span>
                <span className="ml-3 text-sm text-indigo-600 font-medium">Instructor Panel</span>
            </header>

            <div className="flex">
                <InstructorSidebar />
                <main className="flex-1 p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default function InstructorLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <InstructorContent>{children}</InstructorContent>
        </AuthProvider>
    )
}
