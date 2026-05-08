'use client'

import { useState, useEffect, useCallback } from 'react'

interface Project {
    id: number
    project_name: string
    client_name: string | null
    client_email: string | null
    client_phone: string | null
    project_type: string
    status: string
    priority: string
    budget: number
    paid_amount: number
    start_date: string | null
    deadline: string | null
    completed_date: string | null
    progress: number
    description: string | null
    tech_stack: string | null
    assigned_to: string | null
    notes: string | null
}

interface ProjectStats {
    total: number
    lead_count: number
    planning_count: number
    in_progress_count: number
    review_count: number
    completed_count: number
    cancelled_count: number
    total_budget: number
    total_paid: number
    avg_progress: number
}

const statusLabels: Record<string, string> = {
    lead: 'Lead', planning: 'Lên kế hoạch', in_progress: 'Đang triển khai',
    review: 'Đang nghiệm thu', completed: 'Hoàn thành', cancelled: 'Đã hủy',
}
const statusColors: Record<string, string> = {
    lead: 'bg-slate-100 text-slate-700', planning: 'bg-blue-100 text-blue-700',
    in_progress: 'bg-amber-100 text-amber-700', review: 'bg-purple-100 text-purple-700',
    completed: 'bg-emerald-100 text-emerald-700', cancelled: 'bg-red-100 text-red-600',
}
const priorityLabels: Record<string, string> = {
    low: 'Thấp', medium: 'Trung bình', high: 'Cao', urgent: 'Gấp',
}
const priorityColors: Record<string, string> = {
    low: 'bg-slate-100 text-slate-600', medium: 'bg-blue-100 text-blue-700',
    high: 'bg-orange-100 text-orange-700', urgent: 'bg-red-100 text-red-700',
}
const typeLabels: Record<string, string> = {
    website: '🌐 Website', app: '📱 App', seo: '📈 SEO', startup: '🚀 Startup',
    maintenance: '🔧 Bảo trì', security: '🔒 Bảo mật', infra: '🖥️ Hạ tầng', other: '📦 Khác',
}

const defaultForm: Partial<Project> = {
    project_name: '', client_name: '', client_email: '', client_phone: '',
    project_type: 'website', status: 'lead', priority: 'medium',
    budget: 0, paid_amount: 0, start_date: '', deadline: '', completed_date: '',
    progress: 0, description: '', tech_stack: '', assigned_to: '', notes: '',
}

function formatVND(n: number) {
    return new Intl.NumberFormat('vi-VN').format(n) + 'đ'
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([])
    const [stats, setStats] = useState<ProjectStats | null>(null)
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [editingId, setEditingId] = useState<number | null>(null)
    const [form, setForm] = useState<Partial<Project>>(defaultForm)
    const [filterStatus, setFilterStatus] = useState('')
    const [filterType, setFilterType] = useState('')
    const [search, setSearch] = useState('')

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch('/api/admin/projects')
            const json = await res.json()
            setProjects(json.data || [])
            setStats(json.stats || null)
        } catch { /* ignore */ }
        setLoading(false)
    }, [])

    useEffect(() => { fetchData() }, [fetchData])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const url = editingId ? `/api/admin/projects/${editingId}` : '/api/admin/projects'
        const method = editingId ? 'PUT' : 'POST'
        await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
        setShowModal(false)
        setEditingId(null)
        setForm(defaultForm)
        fetchData()
    }

    const handleEdit = (proj: Project) => {
        setForm({
            ...proj,
            start_date: proj.start_date ? proj.start_date.split('T')[0] : '',
            deadline: proj.deadline ? proj.deadline.split('T')[0] : '',
            completed_date: proj.completed_date ? proj.completed_date.split('T')[0] : '',
        })
        setEditingId(proj.id)
        setShowModal(true)
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Xác nhận xóa dự án này?')) return
        await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' })
        fetchData()
    }

    const filtered = projects.filter(p => {
        if (filterStatus && p.status !== filterStatus) return false
        if (filterType && p.project_type !== filterType) return false
        if (search && !p.project_name.toLowerCase().includes(search.toLowerCase()) &&
            !(p.client_name || '').toLowerCase().includes(search.toLowerCase())) return false
        return true
    })

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-8 text-white">
                <h1 className="text-3xl font-bold mb-2">📋 Quản Lý Dự Án</h1>
                <p className="text-indigo-100">Theo dõi tiến độ, ngân sách và trạng thái dự án</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">📊</div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">Tổng</p>
                            <p className="text-2xl font-bold text-slate-900">{stats?.total || 0}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-xl">⚡</div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">Đang triển khai</p>
                            <p className="text-2xl font-bold text-amber-600">{stats?.in_progress_count || 0}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-xl">✅</div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">Hoàn thành</p>
                            <p className="text-2xl font-bold text-emerald-600">{stats?.completed_count || 0}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">🔍</div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">Nghiệm thu</p>
                            <p className="text-2xl font-bold text-purple-600">{stats?.review_count || 0}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center text-xl">💰</div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">Tổng ngân sách</p>
                            <p className="text-lg font-bold text-slate-900">{formatVND(Number(stats?.total_budget) || 0)}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">💵</div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">Đã thu</p>
                            <p className="text-lg font-bold text-green-600">{formatVND(Number(stats?.total_paid) || 0)}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toolbar */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex gap-2 items-center w-full md:w-auto flex-wrap">
                        <input
                            type="text" placeholder="🔍 Tìm kiếm dự án..."
                            className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none flex-1 md:w-56"
                            value={search} onChange={e => setSearch(e.target.value)}
                        />
                        <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                            <option value="">Tất cả trạng thái</option>
                            {Object.entries(statusLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                        </select>
                        <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white" value={filterType} onChange={e => setFilterType(e.target.value)}>
                            <option value="">Tất cả loại</option>
                            {Object.entries(typeLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                        </select>
                    </div>
                    <button onClick={() => { setForm(defaultForm); setEditingId(null); setShowModal(true) }}
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        Thêm dự án
                    </button>
                </div>
            </div>

            {/* Projects Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {loading ? (
                    <div className="p-12 text-center text-slate-400">Đang tải...</div>
                ) : filtered.length === 0 ? (
                    <div className="p-12 text-center">
                        <span className="text-4xl block mb-3">📋</span>
                        <p className="text-slate-500">Chưa có dự án nào. Nhấn &quot;Thêm dự án&quot; để bắt đầu.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Dự án</th>
                                    <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Loại</th>
                                    <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Trạng thái</th>
                                    <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Ưu tiên</th>
                                    <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Tiến độ</th>
                                    <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Deadline</th>
                                    <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden xl:table-cell">Ngân sách</th>
                                    <th className="text-right px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filtered.map(proj => {
                                    const isOverdue = proj.deadline && new Date(proj.deadline) < new Date() && proj.status !== 'completed' && proj.status !== 'cancelled'
                                    return (
                                        <tr key={proj.id} className={`hover:bg-slate-50 transition-colors ${isOverdue ? 'bg-red-50/50' : ''}`}>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="font-semibold text-slate-900">{proj.project_name}</p>
                                                    <p className="text-xs text-slate-400">{proj.client_name || 'Chưa có KH'} {proj.client_phone ? `• ${proj.client_phone}` : ''}</p>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm">{typeLabels[proj.project_type] || proj.project_type}</td>
                                            <td className="px-4 py-4">
                                                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[proj.status]}`}>
                                                    {statusLabels[proj.status]}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4">
                                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${priorityColors[proj.priority]}`}>
                                                    {priorityLabels[proj.priority]}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-20 bg-slate-200 rounded-full h-2">
                                                        <div
                                                            className={`h-2 rounded-full transition-all ${proj.progress >= 100 ? 'bg-emerald-500' : proj.progress >= 50 ? 'bg-blue-500' : 'bg-amber-500'}`}
                                                            style={{ width: `${Math.min(proj.progress, 100)}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-xs font-medium text-slate-600">{proj.progress}%</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 hidden lg:table-cell">
                                                <span className={`text-sm ${isOverdue ? 'text-red-600 font-semibold' : 'text-slate-600'}`}>
                                                    {proj.deadline ? new Date(proj.deadline).toLocaleDateString('vi-VN') : '—'}
                                                </span>
                                                {isOverdue && <span className="text-xs text-red-500 block">⚠️ Quá hạn</span>}
                                            </td>
                                            <td className="px-4 py-4 hidden xl:table-cell text-sm text-slate-600">
                                                {proj.budget ? formatVND(proj.budget) : '—'}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-1">
                                                    <button onClick={() => handleEdit(proj)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Sửa">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                                    </button>
                                                    <button onClick={() => handleDelete(proj.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Xóa">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Add/Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <div className="sticky top-0 z-10 bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4 rounded-t-2xl">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-white">{editingId ? '✏️ Sửa dự án' : '➕ Thêm dự án mới'}</h2>
                                <button onClick={() => setShowModal(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors text-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-5">
                            {/* Project Info */}
                            <div>
                                <p className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">📋 Thông tin dự án</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-slate-600 mb-1">Tên dự án *</label>
                                        <input type="text" required value={form.project_name || ''} onChange={e => setForm({ ...form, project_name: e.target.value })}
                                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="VD: Website Nemark Digital" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1">Loại dự án</label>
                                        <select value={form.project_type} onChange={e => setForm({ ...form, project_type: e.target.value })}
                                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                                            {Object.entries(typeLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1">Trạng thái</label>
                                        <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}
                                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                                            {Object.entries(statusLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1">Độ ưu tiên</label>
                                        <select value={form.priority} onChange={e => setForm({ ...form, priority: e.target.value })}
                                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                                            {Object.entries(priorityLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1">Tiến độ (%)</label>
                                        <input type="number" min="0" max="100" value={form.progress || 0} onChange={e => setForm({ ...form, progress: Number(e.target.value) })}
                                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Client Info */}
                            <div>
                                <p className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">👤 Thông tin khách hàng</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1">Tên KH</label>
                                        <input type="text" value={form.client_name || ''} onChange={e => setForm({ ...form, client_name: e.target.value })}
                                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1">Email KH</label>
                                        <input type="email" value={form.client_email || ''} onChange={e => setForm({ ...form, client_email: e.target.value })}
                                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1">SĐT KH</label>
                                        <input type="text" value={form.client_phone || ''} onChange={e => setForm({ ...form, client_phone: e.target.value })}
                                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Timeline & Budget */}
                            <div>
                                <p className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">📅 Timeline & Ngân sách</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1">Ngày bắt đầu</label>
                                        <input type="date" value={form.start_date || ''} onChange={e => setForm({ ...form, start_date: e.target.value })}
                                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1">Deadline</label>
                                        <input type="date" value={form.deadline || ''} onChange={e => setForm({ ...form, deadline: e.target.value })}
                                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1">Ngân sách (VNĐ)</label>
                                        <input type="number" value={form.budget || 0} onChange={e => setForm({ ...form, budget: Number(e.target.value) })}
                                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1">Đã thanh toán (VNĐ)</label>
                                        <input type="number" value={form.paid_amount || 0} onChange={e => setForm({ ...form, paid_amount: Number(e.target.value) })}
                                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Detail */}
                            <div>
                                <p className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">📝 Chi tiết</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1">Tech Stack</label>
                                        <input type="text" value={form.tech_stack || ''} onChange={e => setForm({ ...form, tech_stack: e.target.value })}
                                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="VD: Next.js, React, MySQL" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1">Người phụ trách</label>
                                        <input type="text" value={form.assigned_to || ''} onChange={e => setForm({ ...form, assigned_to: e.target.value })}
                                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-slate-600 mb-1">Mô tả dự án</label>
                                    <textarea value={form.description || ''} onChange={e => setForm({ ...form, description: e.target.value })} rows={3}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none" />
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-slate-600 mb-1">Ghi chú</label>
                                    <textarea value={form.notes || ''} onChange={e => setForm({ ...form, notes: e.target.value })} rows={2}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none" />
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                                <button type="button" onClick={() => setShowModal(false)} className="px-5 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">Hủy</button>
                                <button type="submit" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                                    {editingId ? 'Cập nhật' : 'Thêm dự án'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
