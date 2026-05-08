'use client'

import { AuthProvider, useUser } from '@/lib/auth/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function DashboardSidebar() {
    const { profile } = useUser()
    const displayName = profile?.full_name || 'User'
    const initials = displayName.charAt(0).toUpperCase()

    const menuItems = [
        { href: '/dashboard', icon: 'dashboard', label: 'Tổng quan' },
        { href: '/dashboard/my-courses', icon: 'school', label: 'Khóa học của tôi' },
        { href: '/dashboard/certificates', icon: 'workspace_premium', label: 'Chứng chỉ' },
        { href: '/dashboard/profile', icon: 'person', label: 'Hồ sơ cá nhân' },
        { href: '/dashboard/orders', icon: 'receipt_long', label: 'Đơn hàng' },
    ]

    return (
        <aside className="w-64 bg-white border-r border-slate-200 min-h-[calc(100vh-4rem)] hidden lg:block">
            {/* Profile Card */}
            <div className="p-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
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
                        <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary capitalize">
                            {profile?.role || 'student'}
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

            {/* Back to Home */}
            <div className="p-4 mt-auto border-t border-slate-100">
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

function DashboardContent({ children }: { children: React.ReactNode }) {
    const { user, loading } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push('/auth/login')
        }
    }, [user, loading, router])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <svg className="animate-spin h-10 w-10 text-primary mx-auto mb-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <p className="text-slate-500">Đang tải...</p>
                </div>
            </div>
        )
    }

    if (!user) return null

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Top Bar */}
            <header className="h-16 bg-white border-b border-slate-200 flex items-center px-6 sticky top-0 z-40">
                <Link href="/" className="flex items-center gap-2">
                    <img src="/logo.jpg" alt="Nemark" className="h-8 w-8 rounded-lg" />
                    <span className="text-xl font-bold text-primary">Nemark</span>
                </Link>
                <span className="ml-3 text-slate-300">|</span>
                <span className="ml-3 text-sm text-slate-500">Dashboard</span>
            </header>

            <div className="flex">
                <DashboardSidebar />
                <main className="flex-1 p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthProvider>
            <DashboardContent>{children}</DashboardContent>
        </AuthProvider>
    )
}
