'use client'

import { useState, useEffect, useCallback } from 'react'

interface FinancialRecord {
    id: number
    category: string
    record_type: 'income' | 'expense'
    amount: number
    description: string | null
    record_date: string
    website_source: string | null
    payment_method: string
    notes: string | null
}

interface FinancialSummary {
    total_income: number
    total_expense: number
    net_profit: number
    total_records: number
}

interface MonthlyData {
    month: number
    income: number
    expense: number
}

const paymentLabels: Record<string, string> = {
    company_bank: '🏦 STK Công ty', personal_bank: '⚠️ STK Cá nhân', cash: '💵 Tiền mặt', online: '🌐 Online',
}

const defaultForm: Partial<FinancialRecord> = {
    category: '', record_type: 'expense', amount: 0, description: '', record_date: new Date().toISOString().split('T')[0],
    website_source: '', payment_method: 'company_bank', notes: '',
}

const formatVND = (n: number) => new Intl.NumberFormat('vi-VN').format(n) + 'đ'
const monthNames = ['', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12']

export default function FinancesPage() {
    const [records, setRecords] = useState<FinancialRecord[]>([])
    const [summary, setSummary] = useState<FinancialSummary | null>(null)
    const [monthly, setMonthly] = useState<MonthlyData[]>([])
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [editingId, setEditingId] = useState<number | null>(null)
    const [form, setForm] = useState<Partial<FinancialRecord>>(defaultForm)
    const [filterType, setFilterType] = useState<'all' | 'income' | 'expense'>('all')

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch('/api/admin/finances')
            const json = await res.json()
            setRecords(json.data || [])
            setSummary(json.summary || null)
            setMonthly(json.monthly || [])
        } catch { /* ignore */ }
        setLoading(false)
    }, [])

    useEffect(() => { fetchData() }, [fetchData])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const url = editingId ? `/api/admin/finances/${editingId}` : '/api/admin/finances'
        const method = editingId ? 'PUT' : 'POST'
        await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
        setShowModal(false); setEditingId(null); setForm(defaultForm); fetchData()
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Xóa bản ghi này?')) return
        await fetch(`/api/admin/finances/${id}`, { method: 'DELETE' })
        fetchData()
    }

    const filtered = records.filter(r => filterType === 'all' || r.record_type === filterType)

    // Chart helper: max value for bar scaling
    const maxMonthly = Math.max(...monthly.map(m => Math.max(m.income || 0, m.expense || 0)), 1)

    const personalBankRecords = records.filter(r => r.payment_method === 'personal_bank')

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 text-white">
                <h1 className="text-3xl font-bold mb-2">💰 Tài Chính Tổng Quan</h1>
                <p className="text-emerald-100">Thu chi, doanh thu, phân tích tài chính — Nemark Digital Solutions</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-xl">📈</div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide">Tổng thu</p>
                    </div>
                    <p className="text-2xl font-bold text-emerald-600">{formatVND(summary?.total_income || 0)}</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-xl">📉</div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide">Tổng chi</p>
                    </div>
                    <p className="text-2xl font-bold text-red-600">{formatVND(summary?.total_expense || 0)}</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">💎</div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide">Lợi nhuận ròng</p>
                    </div>
                    <p className={`text-2xl font-bold ${(summary?.net_profit || 0) >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {formatVND(summary?.net_profit || 0)}
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">📊</div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide">Tổng giao dịch</p>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">{summary?.total_records || 0}</p>
                </div>
            </div>

            {/* Personal Bank Warning */}
            {personalBankRecords.length > 0 && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-800">⚠️ {personalBankRecords.length} giao dịch qua STK cá nhân — Rủi ro thuế cao!</p>
                    <p className="text-sm text-red-600 mt-1">Chi phí qua STK cá nhân không được trừ khi tính thuế TNDN. Giao dịch ≥20tr VNĐ bắt buộc qua TK DN.</p>
                </div>
            )}

            {/* Monthly Chart */}
            {monthly.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">📊 Biểu đồ Thu Chi theo tháng ({new Date().getFullYear()})</h2>
                    <div className="flex items-end gap-2 h-48">
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(month => {
                            const data = monthly.find(m => m.month === month)
                            const income = data?.income || 0
                            const expense = data?.expense || 0
                            return (
                                <div key={month} className="flex-1 flex flex-col items-center gap-1">
                                    <div className="w-full flex gap-0.5 items-end" style={{ height: '160px' }}>
                                        <div className="flex-1 bg-emerald-400 rounded-t-sm transition-all hover:bg-emerald-500"
                                            style={{ height: `${(income / maxMonthly) * 100}%`, minHeight: income > 0 ? '4px' : '0' }}
                                            title={`Thu: ${formatVND(income)}`} />
                                        <div className="flex-1 bg-red-400 rounded-t-sm transition-all hover:bg-red-500"
                                            style={{ height: `${(expense / maxMonthly) * 100}%`, minHeight: expense > 0 ? '4px' : '0' }}
                                            title={`Chi: ${formatVND(expense)}`} />
                                    </div>
                                    <span className="text-xs text-slate-400">{monthNames[month]}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-emerald-400 rounded-sm" /> Thu nhập</div>
                        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-400 rounded-sm" /> Chi phí</div>
                    </div>
                </div>
            )}

            {/* Toolbar */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col md:flex-row gap-3 items-center justify-between">
                <div className="flex gap-2">
                    {(['all', 'income', 'expense'] as const).map(t => (
                        <button key={t} onClick={() => setFilterType(t)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterType === t ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                            {t === 'all' ? '📋 Tất cả' : t === 'income' ? '📈 Thu' : '📉 Chi'}
                        </button>
                    ))}
                </div>
                <button onClick={() => { setForm(defaultForm); setEditingId(null); setShowModal(true) }}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    Thêm giao dịch
                </button>
            </div>

            {/* Records Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {loading ? (
                    <div className="p-12 text-center text-slate-400">Đang tải...</div>
                ) : filtered.length === 0 ? (
                    <div className="p-12 text-center">
                        <span className="text-4xl block mb-3">💰</span>
                        <p className="text-slate-500">Chưa có giao dịch nào.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Ngày</th>
                                    <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 uppercase">Danh mục</th>
                                    <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 uppercase">Mô tả</th>
                                    <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 uppercase">Phương thức</th>
                                    <th className="text-right px-4 py-4 text-xs font-semibold text-slate-500 uppercase">Số tiền</th>
                                    <th className="text-right px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Hành động</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filtered.map(r => (
                                    <tr key={r.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-slate-600">{r.record_date?.split('T')[0]}</td>
                                        <td className="px-4 py-4">
                                            <span className="text-sm font-medium text-slate-900">{r.category}</span>
                                            {r.website_source && <p className="text-xs text-slate-400">{r.website_source}</p>}
                                        </td>
                                        <td className="px-4 py-4 text-sm text-slate-600 max-w-xs truncate">{r.description || '—'}</td>
                                        <td className="px-4 py-4 text-sm">
                                            <span className={r.payment_method === 'personal_bank' ? 'text-red-600 font-semibold' : 'text-slate-600'}>
                                                {paymentLabels[r.payment_method] || r.payment_method}
                                            </span>
                                        </td>
                                        <td className={`px-4 py-4 text-sm font-semibold text-right ${r.record_type === 'income' ? 'text-emerald-600' : 'text-red-600'}`}>
                                            {r.record_type === 'income' ? '+' : '-'}{formatVND(r.amount)}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button onClick={() => { setForm(r); setEditingId(r.id); setShowModal(true) }} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                                </button>
                                                <button onClick={() => handleDelete(r.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <div className="p-6 border-b border-slate-200">
                            <h2 className="text-xl font-bold text-slate-900">{editingId ? '✏️ Sửa giao dịch' : '➕ Thêm giao dịch'}</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Loại *</label>
                                    <select value={form.record_type} onChange={e => setForm({ ...form, record_type: e.target.value as 'income' | 'expense' })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm">
                                        <option value="income">📈 Thu nhập</option>
                                        <option value="expense">📉 Chi phí</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Số tiền (VNĐ) *</label>
                                    <input type="number" required value={form.amount || ''} onChange={e => setForm({ ...form, amount: Number(e.target.value) })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Danh mục *</label>
                                <input type="text" required value={form.category || ''} onChange={e => setForm({ ...form, category: e.target.value })}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="VD: Lương, Mặt bằng, VPS, Website..." />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Ngày *</label>
                                    <input type="date" required value={form.record_date || ''} onChange={e => setForm({ ...form, record_date: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nguồn website</label>
                                    <input type="text" value={form.website_source || ''} onChange={e => setForm({ ...form, website_source: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="huymetv.com, nemark..." />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Phương thức thanh toán</label>
                                <select value={form.payment_method} onChange={e => setForm({ ...form, payment_method: e.target.value })}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm">
                                    <option value="company_bank">🏦 STK Công ty</option>
                                    <option value="personal_bank">⚠️ STK Cá nhân</option>
                                    <option value="cash">💵 Tiền mặt</option>
                                    <option value="online">🌐 Online</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Mô tả</label>
                                <textarea value={form.description || ''} onChange={e => setForm({ ...form, description: e.target.value })} rows={2}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm resize-none" />
                            </div>
                            <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                                <button type="button" onClick={() => setShowModal(false)} className="px-5 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">Hủy</button>
                                <button type="submit" className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                                    {editingId ? 'Cập nhật' : 'Thêm giao dịch'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
