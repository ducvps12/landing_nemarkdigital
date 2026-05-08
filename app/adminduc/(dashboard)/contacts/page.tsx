'use client'

import { useState, useEffect } from 'react'

interface Contact {
    id: number
    fullname: string
    email: string
    phone_number: string
    product: string
    customer_message: string
}

const serviceBadgeColors: Record<string, string> = {
    'Thiết kế Website': 'bg-blue-100 text-blue-700',
    'Thiết kế App': 'bg-purple-100 text-purple-700',
    'SEO & Marketing': 'bg-green-100 text-green-700',
    'Giải pháp Startup': 'bg-orange-100 text-orange-700',
    'Hạ tầng & Tài khoản số': 'bg-cyan-100 text-cyan-700',
    'Bảo trì & Nâng cấp': 'bg-yellow-100 text-yellow-700',
    'Khác': 'bg-slate-100 text-slate-700',
}

export default function ContactsPage() {
    const [contacts, setContacts] = useState<Contact[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
    const [deleting, setDeleting] = useState<number | null>(null)
    const [filterService, setFilterService] = useState('')

    useEffect(() => {
        fetchContacts()
    }, [])

    const fetchContacts = async () => {
        try {
            const response = await fetch('/api/admin/contacts')
            const data = await response.json()
            setContacts(data.data || [])
        } catch {
            setError('Không thể tải danh sách liên hệ')
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Bạn có chắc chắn muốn xóa liên hệ này?')) return
        setDeleting(id)
        try {
            const res = await fetch(`/api/admin/contacts/${id}`, { method: 'DELETE' })
            if (res.ok) {
                setContacts(prev => prev.filter(c => c.id !== id))
                if (selectedContact?.id === id) setSelectedContact(null)
            }
        } catch {
            alert('Xóa thất bại')
        } finally {
            setDeleting(null)
        }
    }

    const filteredContacts = filterService
        ? contacts.filter(c => c.product === filterService)
        : contacts

    const uniqueServices = [...new Set(contacts.map(c => c.product).filter(Boolean))]

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Yêu cầu tư vấn</h1>
                    <p className="text-slate-500 mt-1">
                        Quản lý các yêu cầu liên hệ từ khách hàng ({contacts.length} yêu cầu)
                    </p>
                </div>

                {/* Filter */}
                {uniqueServices.length > 0 && (
                    <select
                        value={filterService}
                        onChange={(e) => setFilterService(e.target.value)}
                        className="px-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                    >
                        <option value="">Tất cả dịch vụ</option>
                        {uniqueServices.map(s => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                )}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900">{contacts.length}</p>
                            <p className="text-xs text-slate-500">Tổng yêu cầu</p>
                        </div>
                    </div>
                </div>
                {uniqueServices.slice(0, 3).map(service => (
                    <div key={service} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                        <div>
                            <p className="text-2xl font-bold text-slate-900">
                                {contacts.filter(c => c.product === service).length}
                            </p>
                            <p className="text-xs text-slate-500 truncate">{service}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {error ? (
                    <div className="p-8 text-center text-red-600">
                        <p>{error}</p>
                    </div>
                ) : filteredContacts.length === 0 ? (
                    <div className="p-8 text-center text-slate-500">
                        <svg className="w-16 h-16 mx-auto mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className="text-lg font-medium mb-2">Chưa có yêu cầu tư vấn</p>
                        <p className="text-sm">Khi khách hàng gửi form liên hệ, thông tin sẽ hiển thị ở đây</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                        Khách hàng
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                        Liên hệ
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                        Dịch vụ
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider hidden lg:table-cell">
                                        Nội dung
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                                        Thao tác
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {filteredContacts.map((contact) => (
                                    <tr key={contact.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-semibold text-slate-900">{contact.fullname}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-slate-700">{contact.email}</p>
                                            <p className="text-xs text-slate-400">{contact.phone_number}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${serviceBadgeColors[contact.product] || 'bg-slate-100 text-slate-700'}`}>
                                                {contact.product || 'N/A'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 hidden lg:table-cell">
                                            <p className="text-sm text-slate-500 truncate max-w-xs">
                                                {contact.customer_message || '—'}
                                            </p>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => setSelectedContact(contact)}
                                                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                    Xem
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(contact.id)}
                                                    disabled={deleting === contact.id}
                                                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                    {deleting === contact.id ? '...' : 'Xóa'}
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

            {/* Detail Modal */}
            {selectedContact && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedContact(null)} />
                    <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 text-white">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold">Chi tiết yêu cầu tư vấn</h3>
                                <button
                                    onClick={() => setSelectedContact(null)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs font-medium text-slate-400 uppercase mb-1">Họ và tên</p>
                                    <p className="text-sm font-semibold text-slate-900">{selectedContact.fullname}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-slate-400 uppercase mb-1">Số điện thoại</p>
                                    <a href={`tel:${selectedContact.phone_number}`} className="text-sm font-semibold text-blue-600 hover:underline">
                                        {selectedContact.phone_number}
                                    </a>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-400 uppercase mb-1">Email</p>
                                <a href={`mailto:${selectedContact.email}`} className="text-sm font-semibold text-blue-600 hover:underline">
                                    {selectedContact.email}
                                </a>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-400 uppercase mb-1">Dịch vụ quan tâm</p>
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${serviceBadgeColors[selectedContact.product] || 'bg-slate-100 text-slate-700'}`}>
                                    {selectedContact.product || 'N/A'}
                                </span>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-400 uppercase mb-1">Nội dung chi tiết</p>
                                <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700 min-h-[60px]">
                                    {selectedContact.customer_message || 'Không có nội dung'}
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                            <button
                                onClick={() => handleDelete(selectedContact.id)}
                                disabled={deleting === selectedContact.id}
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Xóa liên hệ
                            </button>
                            <a
                                href={`tel:${selectedContact.phone_number}`}
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg transition-all"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Gọi ngay
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
