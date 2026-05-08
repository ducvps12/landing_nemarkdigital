'use client'

import { useState, useEffect, useCallback } from 'react'

interface RiskItem {
    id: number
    title: string
    description: string | null
    category: string
    severity: string
    likelihood: string
    impact: string
    mitigation_plan: string | null
    status: string
    owner: string | null
    deadline: string | null
}

interface RiskStats {
    total: number
    active_count: number
    critical_count: number
    high_count: number
    mitigated_count: number
    resolved_count: number
}

const categoryLabels: Record<string, string> = {
    phap_ly: '⚖️ Pháp lý', tai_chinh: '💰 Tài chính', nhan_su: '👥 Nhân sự',
    van_hanh: '⚙️ Vận hành', uy_tin: '🌟 Uy tín', khac: '📌 Khác',
}
const severityColors: Record<string, string> = {
    critical: 'bg-red-500 text-white', high: 'bg-orange-500 text-white',
    medium: 'bg-yellow-400 text-yellow-900', low: 'bg-green-400 text-green-900',
}
const severityLabels: Record<string, string> = { critical: 'Rất cao', high: 'Cao', medium: 'Trung bình', low: 'Thấp' }
const statusLabels: Record<string, string> = { active: '🔴 Đang hoạt động', mitigated: '🟡 Đã giảm thiểu', accepted: '🟠 Chấp nhận', resolved: '🟢 Đã xử lý' }
const statusColors: Record<string, string> = {
    active: 'bg-red-100 text-red-700', mitigated: 'bg-yellow-100 text-yellow-700',
    accepted: 'bg-orange-100 text-orange-700', resolved: 'bg-emerald-100 text-emerald-700',
}
const likelihoodLabels: Record<string, string> = { very_likely: 'Rất có thể', likely: 'Có thể', possible: 'Có khả năng', unlikely: 'Ít có khả năng' }
const impactLabels: Record<string, string> = { catastrophic: 'Thảm khốc', major: 'Nghiêm trọng', moderate: 'Vừa phải', minor: 'Nhỏ' }

const defaultForm: Partial<RiskItem> = {
    title: '', description: '', category: 'khac', severity: 'medium', likelihood: 'possible',
    impact: 'moderate', mitigation_plan: '', status: 'active', owner: '', deadline: '',
}

export default function RiskManagementPage() {
    const [risks, setRisks] = useState<RiskItem[]>([])
    const [stats, setStats] = useState<RiskStats | null>(null)
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [editingId, setEditingId] = useState<number | null>(null)
    const [form, setForm] = useState<Partial<RiskItem>>(defaultForm)
    const [filterCat, setFilterCat] = useState('all')
    const [expandedId, setExpandedId] = useState<number | null>(null)

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch('/api/admin/risks')
            const json = await res.json()
            setRisks(json.data || [])
            setStats(json.stats || null)
        } catch { /* ignore */ }
        setLoading(false)
    }, [])

    useEffect(() => { fetchData() }, [fetchData])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const url = editingId ? `/api/admin/risks/${editingId}` : '/api/admin/risks'
        const method = editingId ? 'PUT' : 'POST'
        await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
        setShowModal(false); setEditingId(null); setForm(defaultForm); fetchData()
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Xóa rủi ro này?')) return
        await fetch(`/api/admin/risks/${id}`, { method: 'DELETE' })
        fetchData()
    }

    const filtered = risks.filter(r => filterCat === 'all' || r.category === filterCat)

    // Risk matrix data
    const likelihoodLevels = ['very_likely', 'likely', 'possible', 'unlikely']
    const impactLevels = ['minor', 'moderate', 'major', 'catastrophic']
    const matrixColors: Record<string, string> = {
        '0-0': 'bg-green-100', '0-1': 'bg-green-200', '0-2': 'bg-yellow-200', '0-3': 'bg-orange-200',
        '1-0': 'bg-green-200', '1-1': 'bg-yellow-200', '1-2': 'bg-orange-200', '1-3': 'bg-red-200',
        '2-0': 'bg-yellow-200', '2-1': 'bg-orange-200', '2-2': 'bg-red-200', '2-3': 'bg-red-300',
        '3-0': 'bg-orange-200', '3-1': 'bg-red-200', '3-2': 'bg-red-300', '3-3': 'bg-red-400',
    }

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-xl p-8 text-white">
                <h1 className="text-3xl font-bold mb-2">🛡️ Quản Lý Rủi Ro</h1>
                <p className="text-red-100">Đánh giá, theo dõi và xử lý rủi ro kinh doanh — Nemark Digital Solutions</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                    { label: 'Tổng rủi ro', value: stats?.total || 0, icon: '📊', bg: 'bg-slate-100' },
                    { label: 'Đang hoạt động', value: stats?.active_count || 0, icon: '🔴', bg: 'bg-red-50' },
                    { label: 'Rất cao', value: stats?.critical_count || 0, icon: '💥', bg: 'bg-red-100' },
                    { label: 'Cao', value: stats?.high_count || 0, icon: '⚠️', bg: 'bg-orange-50' },
                    { label: 'Đã giảm thiểu', value: stats?.mitigated_count || 0, icon: '🟡', bg: 'bg-yellow-50' },
                    { label: 'Đã xử lý', value: stats?.resolved_count || 0, icon: '✅', bg: 'bg-emerald-50' },
                ].map(s => (
                    <div key={s.label} className={`rounded-xl shadow-sm border border-slate-200 p-4 text-center ${s.bg}`}>
                        <span className="text-xl">{s.icon}</span>
                        <p className="text-2xl font-bold text-slate-900 mt-1">{s.value}</p>
                        <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Risk Matrix */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">📐 Ma Trận Rủi Ro (Likelihood × Impact)</h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="p-2 text-xs text-slate-500 w-24"></th>
                                {impactLevels.map(imp => (
                                    <th key={imp} className="p-2 text-xs text-slate-600 font-medium text-center">{impactLabels[imp]}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {likelihoodLevels.map((lk, li) => (
                                <tr key={lk}>
                                    <td className="p-2 text-xs text-slate-600 font-medium">{likelihoodLabels[lk]}</td>
                                    {impactLevels.map((imp, ii) => {
                                        const cellRisks = risks.filter(r => r.likelihood === lk && r.impact === imp && r.status === 'active')
                                        return (
                                            <td key={imp} className={`p-2 ${matrixColors[`${3 - li}-${ii}`]} rounded-lg border border-white`}>
                                                <div className="min-h-[40px] flex flex-wrap gap-1 items-center justify-center">
                                                    {cellRisks.length > 0 ? cellRisks.map(r => (
                                                        <span key={r.id} className={`text-xs px-1.5 py-0.5 rounded ${severityColors[r.severity]} cursor-pointer`}
                                                            title={r.title} onClick={() => setExpandedId(expandedId === r.id ? null : r.id)}>
                                                            {r.title.substring(0, 8)}..
                                                        </span>
                                                    )) : <span className="text-xs text-slate-300">—</span>}
                                                </div>
                                            </td>
                                        )
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center gap-4 mt-3 text-xs text-slate-400">
                    <span>← Ít ảnh hưởng</span>
                    <span className="flex-1 h-1 bg-gradient-to-r from-green-200 via-yellow-200 to-red-400 rounded-full" />
                    <span>Ảnh hưởng lớn →</span>
                </div>
            </div>

            {/* Toolbar */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col md:flex-row gap-3 items-center justify-between">
                <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm" value={filterCat} onChange={e => setFilterCat(e.target.value)}>
                    <option value="all">Tất cả danh mục</option>
                    {Object.entries(categoryLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
                <button onClick={() => { setForm(defaultForm); setEditingId(null); setShowModal(true) }}
                    className="bg-gradient-to-r from-red-600 to-rose-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    Thêm rủi ro
                </button>
            </div>

            {/* Risk List */}
            <div className="space-y-3">
                {loading ? (
                    <div className="bg-white rounded-xl p-12 text-center text-slate-400">Đang tải...</div>
                ) : filtered.length === 0 ? (
                    <div className="bg-white rounded-xl p-12 text-center">
                        <span className="text-4xl block mb-3">🛡️</span>
                        <p className="text-slate-500">Chưa có rủi ro nào được đăng ký.</p>
                    </div>
                ) : filtered.map(risk => (
                    <div key={risk.id} className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${expandedId === risk.id ? 'ring-2 ring-blue-400' : ''}`}>
                        <div className="p-5 cursor-pointer hover:bg-slate-50 transition-colors" onClick={() => setExpandedId(expandedId === risk.id ? null : risk.id)}>
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-3 flex-1">
                                    <span className={`text-xs px-2 py-1 rounded-full font-bold ${severityColors[risk.severity]}`}>
                                        {severityLabels[risk.severity]}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-slate-900">{risk.title}</h3>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{categoryLabels[risk.category]}</span>
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[risk.status]}`}>{statusLabels[risk.status]}</span>
                                            {risk.owner && <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">👤 {risk.owner}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={e => { e.stopPropagation(); setForm(risk); setEditingId(risk.id); setShowModal(true) }} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                    </button>
                                    <button onClick={e => { e.stopPropagation(); handleDelete(risk.id) }} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                    <svg className={`w-5 h-5 text-slate-400 transition-transform ${expandedId === risk.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {expandedId === risk.id && (
                            <div className="px-5 pb-5 pt-0 border-t border-slate-100 bg-slate-50">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 mb-4">
                                    <div className="text-center p-2 bg-white rounded-lg"><p className="text-xs text-slate-400">Khả năng</p><p className="text-sm font-medium">{likelihoodLabels[risk.likelihood]}</p></div>
                                    <div className="text-center p-2 bg-white rounded-lg"><p className="text-xs text-slate-400">Tác động</p><p className="text-sm font-medium">{impactLabels[risk.impact]}</p></div>
                                    <div className="text-center p-2 bg-white rounded-lg"><p className="text-xs text-slate-400">Deadline</p><p className="text-sm font-medium">{risk.deadline?.split('T')[0] || '—'}</p></div>
                                    <div className="text-center p-2 bg-white rounded-lg"><p className="text-xs text-slate-400">Người phụ trách</p><p className="text-sm font-medium">{risk.owner || '—'}</p></div>
                                </div>
                                {risk.description && (
                                    <div className="mb-3"><p className="text-xs text-slate-400 mb-1">Mô tả</p><p className="text-sm text-slate-700">{risk.description}</p></div>
                                )}
                                {risk.mitigation_plan && (
                                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                                        <p className="text-xs text-emerald-600 font-semibold mb-1">📋 Kế hoạch xử lý</p>
                                        <p className="text-sm text-emerald-800">{risk.mitigation_plan}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <div className="p-6 border-b border-slate-200">
                            <h2 className="text-xl font-bold text-slate-900">{editingId ? '✏️ Sửa rủi ro' : '➕ Thêm rủi ro mới'}</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Tiêu đề *</label>
                                <input type="text" required value={form.title || ''} onChange={e => setForm({ ...form, title: e.target.value })}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Mô tả</label>
                                <textarea value={form.description || ''} onChange={e => setForm({ ...form, description: e.target.value })} rows={2}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm resize-none" />
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
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Mức độ</label>
                                    <select value={form.severity} onChange={e => setForm({ ...form, severity: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm">
                                        <option value="critical">🔴 Rất cao</option>
                                        <option value="high">🟠 Cao</option>
                                        <option value="medium">🟡 Trung bình</option>
                                        <option value="low">🟢 Thấp</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Khả năng xảy ra</label>
                                    <select value={form.likelihood} onChange={e => setForm({ ...form, likelihood: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm">
                                        <option value="very_likely">Rất có thể</option>
                                        <option value="likely">Có thể</option>
                                        <option value="possible">Có khả năng</option>
                                        <option value="unlikely">Ít có khả năng</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Mức tác động</label>
                                    <select value={form.impact} onChange={e => setForm({ ...form, impact: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm">
                                        <option value="catastrophic">Thảm khốc</option>
                                        <option value="major">Nghiêm trọng</option>
                                        <option value="moderate">Vừa phải</option>
                                        <option value="minor">Nhỏ</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Kế hoạch xử lý</label>
                                <textarea value={form.mitigation_plan || ''} onChange={e => setForm({ ...form, mitigation_plan: e.target.value })} rows={3}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm resize-none" placeholder="Mô tả cách giảm thiểu rủi ro..." />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Trạng thái</label>
                                    <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm">
                                        <option value="active">Đang hoạt động</option>
                                        <option value="mitigated">Đã giảm thiểu</option>
                                        <option value="accepted">Chấp nhận</option>
                                        <option value="resolved">Đã xử lý</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Người phụ trách</label>
                                    <input type="text" value={form.owner || ''} onChange={e => setForm({ ...form, owner: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" />
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                                <button type="button" onClick={() => setShowModal(false)} className="px-5 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">Hủy</button>
                                <button type="submit" className="px-5 py-2 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                                    {editingId ? 'Cập nhật' : 'Thêm rủi ro'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
