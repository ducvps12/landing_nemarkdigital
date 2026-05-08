'use client'

import { useState } from 'react'
import { useUser, useAuth } from '@/lib/auth/auth-context'
import { createClient } from '@/lib/supabase/client'
import Image from 'next/image'
import toast from 'react-hot-toast'

export default function ProfilePage() {
    const { user, profile } = useUser()
    const { refreshProfile } = useAuth()
    const [fullName, setFullName] = useState(profile?.full_name || '')
    const [phone, setPhone] = useState(profile?.phone || '')
    const [bio, setBio] = useState(profile?.bio || '')
    const [loading, setLoading] = useState(false)

    const displayName = profile?.full_name || user?.email?.split('@')[0] || 'User'
    const initials = displayName.charAt(0).toUpperCase()

    const handleSave = async () => {
        if (!user) return
        setLoading(true)

        const supabase = createClient()
        const { error } = await supabase
            .from('profiles')
            .update({
                full_name: fullName,
                phone,
                bio,
            })
            .eq('id', user.id)

        setLoading(false)

        if (error) {
            toast.error('Cập nhật thất bại: ' + error.message)
        } else {
            toast.success('Cập nhật hồ sơ thành công!')
            await refreshProfile()
        }
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Hồ sơ cá nhân</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Avatar & Info */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                        {profile?.avatar_url ? (
                            <Image
                                src={profile.avatar_url}
                                alt={displayName}
                                width={96}
                                height={96}
                                className="w-full h-full rounded-full object-cover"
                            />
                        ) : (
                            <span className="text-white font-bold text-3xl">{initials}</span>
                        )}
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900">{displayName}</h2>
                    <p className="text-sm text-slate-500">{user?.email}</p>
                    <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary capitalize">
                        {profile?.role || 'student'}
                    </span>
                    <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400">
                        Tham gia từ {profile?.created_at ? new Date(profile.created_at).toLocaleDateString('vi-VN') : '...'}
                    </div>
                </div>

                {/* Right: Edit Form */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-6">Chỉnh sửa thông tin</h3>

                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                Email
                            </label>
                            <input
                                type="email"
                                value={user?.email || ''}
                                disabled
                                className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-500 cursor-not-allowed"
                            />
                            <p className="text-xs text-slate-400 mt-1">Email không thể thay đổi</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                Họ và tên
                            </label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Nhập họ và tên"
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-0 outline-none transition-colors text-slate-900 placeholder:text-slate-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                Số điện thoại
                            </label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="0912 345 678"
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-0 outline-none transition-colors text-slate-900 placeholder:text-slate-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                Giới thiệu bản thân
                            </label>
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                placeholder="Viết vài dòng về bạn..."
                                rows={4}
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-0 outline-none transition-colors text-slate-900 placeholder:text-slate-400 resize-none"
                            />
                        </div>

                        <button
                            onClick={handleSave}
                            disabled={loading}
                            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 shadow-lg shadow-primary/25"
                        >
                            {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
