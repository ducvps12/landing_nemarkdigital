'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { use } from 'react'

export default function CustomerDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter()
    const resolvedParams = use(params)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState('')
    const [customer, setCustomer] = useState<any>(null)

    useEffect(() => {
        fetchCustomer()
    }, [resolvedParams.id])

    const fetchCustomer = async () => {
        try {
            const response = await fetch(`/api/admin/customers/${resolvedParams.id}`)
            if (!response.ok) throw new Error('Failed to fetch customer')
            const data = await response.json()
            setCustomer(data.data)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred')
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSaving(true)
        setError('')

        const formData = new FormData(e.currentTarget)
        const data = {
            fullname: formData.get('fullname') as string,
            email: formData.get('email') as string,
            phone_number: formData.get('phone_number') as string,
            product: formData.get('product') as string,
        }

        try {
            const response = await fetch(`/api/admin/customers/${resolvedParams.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (!response.ok) throw new Error('Failed to update customer')

            router.push('/adminduc/customers')
            router.refresh()
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred')
            setSaving(false)
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        )
    }

    if (error && !customer) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
                {error}
            </div>
        )
    }

    return (
        <div className="max-w-4xl">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Chi tiết khách hàng</h1>
                <p className="text-slate-500 mt-1">Xem và chỉnh sửa thông tin khách hàng</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Customer Message (Read-only) */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <h2 className="text-lg font-semibold text-slate-900 mb-4">Tin nhắn</h2>
                        <div className="bg-slate-50 rounded-lg p-4">
                            <p className="text-sm text-slate-700 whitespace-pre-wrap">
                                {customer?.customer_message || 'Không có tin nhắn'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Edit Form */}
                <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
                        {error && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="fullname" className="block text-sm font-medium text-slate-700 mb-2">
                                Họ tên <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                required
                                defaultValue={customer?.fullname}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                defaultValue={customer?.email}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone_number" className="block text-sm font-medium text-slate-700 mb-2">
                                Số điện thoại <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone_number"
                                name="phone_number"
                                required
                                defaultValue={customer?.phone_number}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">
                                Sản phẩm quan tâm <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="product"
                                name="product"
                                required
                                defaultValue={customer?.product}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex items-center justify-end space-x-4 pt-4 border-t border-slate-200">
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                            >
                                Quay lại
                            </button>
                            <button
                                type="submit"
                                disabled={saving}
                                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                            >
                                {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
