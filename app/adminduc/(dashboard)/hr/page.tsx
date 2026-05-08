'use client'

import { useState, useEffect, useCallback } from 'react'

interface Employee {
    id: number
    full_name: string
    email: string | null
    phone: string | null
    position: string | null
    department: string | null
    employment_type: 'fulltime' | 'parttime'
    id_card_number: string | null
    date_of_birth: string | null
    address: string | null
    start_date: string | null
    end_date: string | null
    salary: number
    bank_account: string | null
    bank_name: string | null
    payment_method: 'company_bank' | 'personal_transfer' | 'cash'
    notes: string | null
    status: 'active' | 'inactive' | 'probation' | 'on_leave'
}

interface EmployeeStats {
    total: number
    active_count: number
    fulltime_count: number
    parttime_count: number
    probation_count: number
}

const statusLabels: Record<string, string> = {
    active: 'Đang làm việc',
    inactive: 'Nghỉ việc',
    probation: 'Thử việc',
    on_leave: 'Nghỉ phép',
}

const statusColors: Record<string, string> = {
    active: 'bg-emerald-100 text-emerald-700',
    inactive: 'bg-slate-100 text-slate-600',
    probation: 'bg-amber-100 text-amber-700',
    on_leave: 'bg-blue-100 text-blue-700',
}

const paymentLabels: Record<string, string> = {
    company_bank: '🏦 STK Công ty',
    personal_transfer: '⚠️ CK Cá nhân',
    cash: '💵 Tiền mặt',
}

const defaultForm: Partial<Employee> = {
    full_name: '', email: '', phone: '', position: '', department: '',
    employment_type: 'fulltime', id_card_number: '', date_of_birth: '',
    address: '', start_date: '', salary: 0, bank_account: '', bank_name: '',
    payment_method: 'company_bank', notes: '', status: 'active'
}

export default function HRManagementPage() {
    const [employees, setEmployees] = useState<Employee[]>([])
    const [stats, setStats] = useState<EmployeeStats | null>(null)
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [editingId, setEditingId] = useState<number | null>(null)
    const [form, setForm] = useState<Partial<Employee>>(defaultForm)
    const [filter, setFilter] = useState<'all' | 'fulltime' | 'parttime'>('all')
    const [search, setSearch] = useState('')

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch('/api/admin/employees')
            const json = await res.json()
            setEmployees(json.data || [])
            setStats(json.stats || null)
        } catch { /* ignore */ }
        setLoading(false)
    }, [])

    useEffect(() => { fetchData() }, [fetchData])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const url = editingId ? `/api/admin/employees/${editingId}` : '/api/admin/employees'
        const method = editingId ? 'PUT' : 'POST'
        await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
        setShowModal(false)
        setEditingId(null)
        setForm(defaultForm)
        fetchData()
    }

    const handleEdit = (emp: Employee) => {
        setForm(emp)
        setEditingId(emp.id)
        setShowModal(true)
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Xác nhận xóa nhân sự này?')) return
        await fetch(`/api/admin/employees/${id}`, { method: 'DELETE' })
        fetchData()
    }

    const filtered = employees.filter(e => {
        if (filter !== 'all' && e.employment_type !== filter) return false
        if (search && !e.full_name.toLowerCase().includes(search.toLowerCase())) return false
        return true
    })

    const personalBankCount = employees.filter(e => e.payment_method === 'personal_transfer').length

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-8 text-white">
                <h1 className="text-3xl font-bold mb-2">👥 Quản Lý Nhân Sự</h1>
                <p className="text-indigo-100">Hồ sơ nhân viên, HĐLĐ, BHXH — CÔNG TY TNHH TRUYỀN THÔNG GIẢI PHÁP SỐ NEMARK</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">👥</div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">Tổng nhân sự</p>
                            <p className="text-2xl font-bold text-slate-900">{stats?.total || 0}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-xl">✅</div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">Đang làm việc</p>
                            <p className="text-2xl font-bold text-emerald-600">{stats?.active_count || 0}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">🏢</div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">Full-time</p>
                            <p className="text-2xl font-bold text-purple-600">{stats?.fulltime_count || 0}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl">⏰</div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">Part-time</p>
                            <p className="text-2xl font-bold text-orange-600">{stats?.parttime_count || 0}</p>
                        </div>
                    </div>
                </div>
                {personalBankCount > 0 && (
                    <div className="bg-red-50 rounded-xl shadow-sm border border-red-200 p-5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-xl">⚠️</div>
                            <div>
                                <p className="text-xs text-red-600 uppercase tracking-wide font-semibold">CK Cá nhân</p>
                                <p className="text-2xl font-bold text-red-600">{personalBankCount}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Alert Banner */}
            {personalBankCount > 0 && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <div className="flex items-start gap-3">
                        <span className="text-2xl">🚨</span>
                        <div>
                            <p className="font-semibold text-red-800">CẢNH BÁO: {personalBankCount} nhân sự đang nhận lương qua STK cá nhân</p>
                            <p className="text-sm text-red-600 mt-1">Từ 01/03/2026, Thông tư 25/2025 CẤM dùng STK cá nhân cho hoạt động kinh doanh. Cần chuyển sang STK công ty ngay!</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Toolbar */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex gap-2 items-center w-full md:w-auto">
                        <input
                            type="text" placeholder="🔍 Tìm kiếm nhân sự..."
                            className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none flex-1 md:w-64"
                            value={search} onChange={e => setSearch(e.target.value)}
                        />
                        <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm" value={filter} onChange={e => setFilter(e.target.value as 'all' | 'fulltime' | 'parttime')}>
                            <option value="all">Tất cả</option>
                            <option value="fulltime">Full-time</option>
                            <option value="parttime">Part-time</option>
                        </select>
                    </div>
                    <button onClick={() => { setForm(defaultForm); setEditingId(null); setShowModal(true) }}
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        Thêm nhân sự
                    </button>
                </div>
            </div>

            {/* Employee Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {loading ? (
                    <div className="p-12 text-center text-slate-400">Đang tải...</div>
                ) : filtered.length === 0 ? (
                    <div className="p-12 text-center">
                        <span className="text-4xl block mb-3">📋</span>
                        <p className="text-slate-500">Chưa có nhân sự nào. Nhấn &quot;Thêm nhân sự&quot; để bắt đầu.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Họ tên</th>
                                    <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Vị trí</th>
                                    <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Loại</th>
                                    <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Thanh toán</th>
                                    <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Trạng thái</th>
                                    <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">SĐT</th>
                                    <th className="text-right px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Hành động</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filtered.map(emp => (
                                    <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                                                    {emp.full_name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-slate-900">{emp.full_name}</p>
                                                    <p className="text-xs text-slate-400">{emp.email || 'Chưa có email'}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-sm text-slate-600">{emp.position || '—'}</td>
                                        <td className="px-4 py-4">
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${emp.employment_type === 'fulltime' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'}`}>
                                                {emp.employment_type === 'fulltime' ? 'Full-time' : 'Part-time'}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-sm">
                                            <span className={emp.payment_method === 'personal_transfer' ? 'text-red-600 font-semibold' : 'text-slate-600'}>
                                                {paymentLabels[emp.payment_method]}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[emp.status]}`}>
                                                {statusLabels[emp.status]}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-sm text-slate-600">{emp.phone || '—'}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button onClick={() => handleEdit(emp)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Sửa">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                                </button>
                                                <button onClick={() => handleDelete(emp.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Xóa">
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

            {/* Add/Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <div className="p-6 border-b border-slate-200">
                            <h2 className="text-xl font-bold text-slate-900">{editingId ? '✏️ Sửa nhân sự' : '➕ Thêm nhân sự mới'}</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Họ và tên *</label>
                                    <input type="text" required value={form.full_name || ''} onChange={e => setForm({ ...form, full_name: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input type="email" value={form.email || ''} onChange={e => setForm({ ...form, email: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Số điện thoại</label>
                                    <input type="text" value={form.phone || ''} onChange={e => setForm({ ...form, phone: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Vị trí</label>
                                    <input type="text" value={form.position || ''} onChange={e => setForm({ ...form, position: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Phòng ban</label>
                                    <input type="text" value={form.department || ''} onChange={e => setForm({ ...form, department: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Loại hình</label>
                                    <select value={form.employment_type} onChange={e => setForm({ ...form, employment_type: e.target.value as 'fulltime' | 'parttime' })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                                        <option value="fulltime">Full-time (Toàn thời gian)</option>
                                        <option value="parttime">Part-time (Bán thời gian)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Số CCCD/CMND</label>
                                    <input type="text" value={form.id_card_number || ''} onChange={e => setForm({ ...form, id_card_number: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Ngày sinh</label>
                                    <input type="date" value={form.date_of_birth || ''} onChange={e => setForm({ ...form, date_of_birth: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Ngày bắt đầu</label>
                                    <input type="date" value={form.start_date || ''} onChange={e => setForm({ ...form, start_date: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Lương (VNĐ)</label>
                                    <input type="number" value={form.salary || 0} onChange={e => setForm({ ...form, salary: Number(e.target.value) })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Hình thức thanh toán</label>
                                    <select value={form.payment_method} onChange={e => setForm({ ...form, payment_method: e.target.value as 'company_bank' | 'personal_transfer' | 'cash' })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                                        <option value="company_bank">🏦 STK Công ty</option>
                                        <option value="personal_transfer">⚠️ CK Cá nhân (Không khuyến khích)</option>
                                        <option value="cash">💵 Tiền mặt</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Trạng thái</label>
                                    <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value as Employee['status'] })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                                        <option value="active">Đang làm việc</option>
                                        <option value="probation">Thử việc</option>
                                        <option value="on_leave">Nghỉ phép</option>
                                        <option value="inactive">Nghỉ việc</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">STK ngân hàng</label>
                                    <input type="text" value={form.bank_account || ''} onChange={e => setForm({ ...form, bank_account: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Tên ngân hàng</label>
                                    <input type="text" value={form.bank_name || ''} onChange={e => setForm({ ...form, bank_name: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Địa chỉ</label>
                                <input type="text" value={form.address || ''} onChange={e => setForm({ ...form, address: e.target.value })}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Ghi chú</label>
                                <textarea value={form.notes || ''} onChange={e => setForm({ ...form, notes: e.target.value })} rows={2}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none" />
                            </div>
                            <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                                <button type="button" onClick={() => setShowModal(false)} className="px-5 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">Hủy</button>
                                <button type="submit" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                                    {editingId ? 'Cập nhật' : 'Thêm nhân sự'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
