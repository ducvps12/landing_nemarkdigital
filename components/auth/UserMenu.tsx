'use client'

import { useState, useRef, useEffect } from 'react'
import { useUser, useAuth } from '@/lib/auth/auth-context'
import Link from 'next/link'
import Image from 'next/image'

export default function UserMenu() {
    const { user, profile } = useUser()
    const { signOut } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    if (!user) return null

    const displayName = profile?.full_name || user.email?.split('@')[0] || 'User'
    const avatarUrl = profile?.avatar_url
    const initials = displayName.charAt(0).toUpperCase()

    const handleSignOut = async () => {
        setIsOpen(false)
        await signOut()
    }

    return (
        <div className="relative" ref={menuRef}>
            {/* Avatar Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-slate-100 transition-colors duration-200"
            >
                <div className="w-9 h-9 rounded-full overflow-hidden bg-primary flex items-center justify-center flex-shrink-0 ring-2 ring-primary/20">
                    {avatarUrl ? (
                        <Image
                            src={avatarUrl}
                            alt={displayName}
                            width={36}
                            height={36}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-white font-bold text-sm">{initials}</span>
                    )}
                </div>
                <span className="text-sm font-medium text-slate-700 hidden sm:block max-w-[120px] truncate">
                    {displayName}
                </span>
                <span className="material-icons-outlined text-slate-400 text-lg hidden sm:block">
                    {isOpen ? 'expand_less' : 'expand_more'}
                </span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-slate-100">
                        <p className="text-sm font-semibold text-slate-900 truncate">{displayName}</p>
                        <p className="text-xs text-slate-500 truncate">{user.email}</p>
                        {profile?.role && (
                            <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary capitalize">
                                {profile.role}
                            </span>
                        )}
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                        <Link
                            href="/dashboard"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                            <span className="material-icons-outlined text-lg text-slate-400">dashboard</span>
                            Dashboard
                        </Link>
                        <Link
                            href="/dashboard/profile"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                            <span className="material-icons-outlined text-lg text-slate-400">person</span>
                            Hồ sơ cá nhân
                        </Link>
                        <Link
                            href="/dashboard/orders"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                            <span className="material-icons-outlined text-lg text-slate-400">receipt_long</span>
                            Lịch sử đơn hàng
                        </Link>
                    </div>

                    {/* Logout */}
                    <div className="border-t border-slate-100 pt-1">
                        <button
                            onClick={handleSignOut}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                            <span className="material-icons-outlined text-lg">logout</span>
                            Đăng xuất
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
