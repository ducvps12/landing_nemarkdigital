'use client'

import { useState, useEffect } from 'react'

export default function OptionsPage() {
    const [options, setOptions] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editValue, setEditValue] = useState('')

    useEffect(() => {
        fetchOptions()
    }, [])

    const fetchOptions = async () => {
        try {
            const response = await fetch('/api/admin/options')
            const data = await response.json()
            setOptions(data.data || [])
        } catch (err) {
            setError('Failed to load options')
        } finally {
            setLoading(false)
        }
    }

    const handleEdit = (option: any) => {
        setEditingId(option.id)
        setEditValue(option.option_value)
    }

    const handleSave = async (id: number) => {
        try {
            const response = await fetch(`/api/admin/options/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ option_value: editValue }),
            })

            if (!response.ok) throw new Error('Failed to update')

            // Update local state
            setOptions(options.map(opt =>
                opt.id === id ? { ...opt, option_value: editValue } : opt
            ))
            setEditingId(null)
        } catch (err) {
            alert('Lỗi khi cập nhật cài đặt')
        }
    }

    const handleCancel = () => {
        setEditingId(null)
        setEditValue('')
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Quản lý Cài đặt</h1>
                <p className="text-slate-500 mt-1">Quản lý các tùy chọn cấu hình hệ thống</p>
            </div>

            {/* Options Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {error ? (
                    <div className="p-8 text-center text-red-600">
                        <p>Lỗi khi tải dữ liệu: {error}</p>
                    </div>
                ) : !options || options.length === 0 ? (
                    <div className="p-8 text-center text-slate-500">
                        <svg className="w-16 h-16 mx-auto mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-lg font-medium mb-2">Chưa có cài đặt nào</p>
                    </div>
                ) : (
                    <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Mã cài đặt
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Giá trị
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Mô tả
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Thao tác
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {options.map((option) => (
                                <tr key={option.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                                        <code className="bg-slate-100 px-2 py-1 rounded">{option.option_code}</code>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500">
                                        {editingId === option.id ? (
                                            <input
                                                type="text"
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                                className="w-full px-3 py-1 border border-purple-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                autoFocus
                                            />
                                        ) : (
                                            <span>{option.option_value}</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500">
                                        {option.description}
                                    </td>
                                    <td className="px-6 py-4 text-right text-sm font-medium space-x-2">
                                        {editingId === option.id ? (
                                            <>
                                                <button
                                                    onClick={() => handleSave(option.id)}
                                                    className="text-green-600 hover:text-green-900 inline-flex items-center"
                                                >
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Lưu
                                                </button>
                                                <button
                                                    onClick={handleCancel}
                                                    className="text-slate-600 hover:text-slate-900 inline-flex items-center"
                                                >
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    Hủy
                                                </button>
                                            </>
                                        ) : (
                                            <button
                                                onClick={() => handleEdit(option)}
                                                className="text-purple-600 hover:text-purple-900 inline-flex items-center"
                                            >
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                                Sửa
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}
