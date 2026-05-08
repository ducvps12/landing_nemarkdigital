'use client'

import { useState, useEffect, useCallback } from 'react'

interface LegalItem {
    id: number
    title: string
    description: string | null
    category: string
    deadline: string | null
    recurring: string
    status: string
    priority: string
    assigned_to: string | null
    notes: string | null
}

interface LegalStats {
    total: number
    pending_count: number
    in_progress_count: number
    completed_count: number
    overdue_count: number
    critical_count: number
    past_due_count: number
}

const categoryLabels: Record<string, string> = {
    nhan_su: '👥 Nhân sự', thue: '🧾 Thuế', bhxh: '🏥 BHXH',
    giay_phep: '📄 Giấy phép', tuan_thu: '⚖️ Tuân thủ', khac: '📌 Khác',
}
const priorityColors: Record<string, string> = {
    critical: 'bg-red-100 text-red-700 border-red-200', high: 'bg-orange-100 text-orange-700 border-orange-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200', low: 'bg-slate-100 text-slate-600 border-slate-200',
}
const priorityLabels: Record<string, string> = { critical: '🔴 Khẩn cấp', high: '🟠 Cao', medium: '🟡 Trung bình', low: '🟢 Thấp' }
const statusLabels: Record<string, string> = { pending: 'Chưa làm', in_progress: 'Đang làm', completed: 'Hoàn thành', overdue: 'Quá hạn' }
const statusColors: Record<string, string> = {
    pending: 'bg-slate-100 text-slate-600', in_progress: 'bg-blue-100 text-blue-700',
    completed: 'bg-emerald-100 text-emerald-700', overdue: 'bg-red-100 text-red-700',
}

const defaultForm: Partial<LegalItem> = {
    title: '', description: '', category: 'khac', deadline: '', recurring: 'none',
    status: 'pending', priority: 'medium', assigned_to: '', notes: '',
}

export default function LegalChecklistPage() {
    const [items, setItems] = useState<LegalItem[]>([])
    const [stats, setStats] = useState<LegalStats | null>(null)
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [editingId, setEditingId] = useState<number | null>(null)
    const [form, setForm] = useState<Partial<LegalItem>>(defaultForm)
    const [filterCat, setFilterCat] = useState('all')
    const [filterStatus, setFilterStatus] = useState('all')

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch('/api/admin/legal-checklist')
            const json = await res.json()
            setItems(json.data || [])
            setStats(json.stats || null)
        } catch { /* ignore */ }
        setLoading(false)
    }, [])

    useEffect(() => { fetchData() }, [fetchData])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const url = editingId ? `/api/admin/legal-checklist/${editingId}` : '/api/admin/legal-checklist'
        const method = editingId ? 'PUT' : 'POST'
        await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
        setShowModal(false); setEditingId(null); setForm(defaultForm); fetchData()
    }

    const toggleStatus = async (item: LegalItem) => {
        const nextStatus: Record<string, string> = { pending: 'in_progress', in_progress: 'completed', completed: 'pending', overdue: 'in_progress' }
        await fetch(`/api/admin/legal-checklist/${item.id}`, {
            method: 'PUT', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: nextStatus[item.status] || 'pending' })
        })
        fetchData()
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Xóa mục này?')) return
        await fetch(`/api/admin/legal-checklist/${id}`, { method: 'DELETE' })
        fetchData()
    }

    const getDaysUntilDeadline = (deadline: string | null) => {
        if (!deadline) return null
        const d = new Date(deadline)
        const now = new Date()
        return Math.ceil((d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    }

    const filtered = items.filter(i => {
        if (filterCat !== 'all' && i.category !== filterCat) return false
        if (filterStatus !== 'all' && i.status !== filterStatus) return false
        return true
    })

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-8 text-white">
                <h1 className="text-3xl font-bold mb-2">⚖️ Checklist Pháp Lý</h1>
                <p className="text-amber-100">Theo dõi tuân thủ pháp luật, deadline BHXH, thuế, giấy phép — Nemark Digital Solutions</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {[
                    { label: 'Tổng', value: stats?.total || 0, icon: '📋', color: 'blue' },
                    { label: 'Chưa làm', value: stats?.pending_count || 0, icon: '⏳', color: 'slate' },
                    { label: 'Đang làm', value: stats?.in_progress_count || 0, icon: '🔄', color: 'blue' },
                    { label: 'Hoàn thành', value: stats?.completed_count || 0, icon: '✅', color: 'emerald' },
                    { label: 'Quá hạn', value: stats?.overdue_count || 0, icon: '❌', color: 'red' },
                    { label: 'Khẩn cấp', value: stats?.critical_count || 0, icon: '🔴', color: 'red' },
                    { label: 'Đã trễ DL', value: stats?.past_due_count || 0, icon: '⚠️', color: 'orange' },
                ].map(s => (
                    <div key={s.label} className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 text-center">
                        <span className="text-xl">{s.icon}</span>
                        <p className="text-2xl font-bold text-slate-900 mt-1">{s.value}</p>
                        <p className="text-xs text-slate-400 mt-1">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Toolbar */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col md:flex-row gap-3 items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                    <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm" value={filterCat} onChange={e => setFilterCat(e.target.value)}>
                        <option value="all">Tất cả danh mục</option>
                        {Object.entries(categoryLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                    </select>
                    <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                        <option value="all">Tất cả trạng thái</option>
                        {Object.entries(statusLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                    </select>
                </div>
                <button onClick={() => { setForm(defaultForm); setEditingId(null); setShowModal(true) }}
                    className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    Thêm mục mới
                </button>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3">
                {loading ? (
                    <div className="bg-white rounded-xl p-12 text-center text-slate-400">Đang tải...</div>
                ) : filtered.length === 0 ? (
                    <div className="bg-white rounded-xl p-12 text-center">
                        <span className="text-4xl block mb-3">📋</span>
                        <p className="text-slate-500">Chưa có mục nào. Thêm mục mới hoặc chạy seed data.</p>
                    </div>
                ) : filtered.map(item => {
                    const daysLeft = getDaysUntilDeadline(item.deadline)
                    return (
                        <div key={item.id} className={`bg-white rounded-xl shadow-sm border-l-4 p-5 hover:shadow-md transition-all ${item.priority === 'critical' ? 'border-l-red-500' :
                                item.priority === 'high' ? 'border-l-orange-500' :
                                    item.priority === 'medium' ? 'border-l-yellow-500' : 'border-l-slate-300'
                            } border border-slate-200`}>
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-3 flex-1">
                                    <button onClick={() => toggleStatus(item)} className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${item.status === 'completed' ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 hover:border-blue-400'
                                        }`}>
                                        {item.status === 'completed' && <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                    </button>
                                    <div className="flex-1">
                                        <h3 className={`font-semibold text-slate-900 ${item.status === 'completed' ? 'line-through opacity-50' : ''}`}>{item.title}</h3>
                                        {item.description && <p className="text-sm text-slate-500 mt-1">{item.description}</p>}
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className={`text-xs px-2 py-0.5 rounded-full border ${priorityColors[item.priority]}`}>{priorityLabels[item.priority]}</span>
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{categoryLabels[item.category]}</span>
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[item.status]}`}>{statusLabels[item.status]}</span>
                                            {item.recurring !== 'none' && <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-600">🔁 {item.recurring}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                    {daysLeft !== null && (
                                        <div className={`text-center px-3 py-1 rounded-lg text-xs font-medium ${daysLeft < 0 ? 'bg-red-100 text-red-700' :
                                                daysLeft <= 7 ? 'bg-orange-100 text-orange-700' :
                                                    daysLeft <= 30 ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                                            }`}>
                                            {daysLeft < 0 ? `Trễ ${Math.abs(daysLeft)} ngày` : daysLeft === 0 ? 'Hôm nay!' : `${daysLeft} ngày`}
                                        </div>
                                    )}
                                    <button onClick={() => { setForm(item); setEditingId(item.id); setShowModal(true) }} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                    </button>
                                    <button onClick={() => handleDelete(item.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Add/Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <div className="p-6 border-b border-slate-200">
                            <h2 className="text-xl font-bold text-slate-900">{editingId ? '✏️ Sửa mục' : '➕ Thêm mục mới'}</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Tiêu đề *</label>
                                <input type="text" required value={form.title || ''} onChange={e => setForm({ ...form, title: e.target.value })}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Mô tả</label>
                                <textarea value={form.description || ''} onChange={e => setForm({ ...form, description: e.target.value })} rows={2}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none resize-none" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Danh mục</label>
                                    <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm">
                                        {Object.entries(categoryLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Ưu tiên</label>
                                    <select value={form.priority} onChange={e => setForm({ ...form, priority: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm">
                                        <option value="critical">🔴 Khẩn cấp</option>
                                        <option value="high">🟠 Cao</option>
                                        <option value="medium">🟡 Trung bình</option>
                                        <option value="low">🟢 Thấp</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Deadline</label>
                                    <input type="date" value={form.deadline || ''} onChange={e => setForm({ ...form, deadline: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Lặp lại</label>
                                    <select value={form.recurring} onChange={e => setForm({ ...form, recurring: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm">
                                        <option value="none">Không lặp</option>
                                        <option value="monthly">Hàng tháng</option>
                                        <option value="quarterly">Hàng quý</option>
                                        <option value="yearly">Hàng năm</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Giao cho</label>
                                <input type="text" value={form.assigned_to || ''} onChange={e => setForm({ ...form, assigned_to: e.target.value })}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Tên người phụ trách" />
                            </div>
                            <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                                <button type="button" onClick={() => setShowModal(false)} className="px-5 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">Hủy</button>
                                <button type="submit" className="px-5 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                                    {editingId ? 'Cập nhật' : 'Thêm mục'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
