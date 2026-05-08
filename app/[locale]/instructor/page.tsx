import { getInstructorStats } from '@/lib/instructor'
import Link from 'next/link'

export default async function InstructorDashboard() {
    const stats = await getInstructorStats()

    const statCards = [
        { label: 'Tổng khóa học', value: stats.totalCourses, icon: 'school', color: 'bg-blue-100 text-blue-600' },
        { label: 'Đã xuất bản', value: stats.publishedCourses, icon: 'publish', color: 'bg-green-100 text-green-600' },
        { label: 'Tổng học viên', value: stats.totalStudents, icon: 'groups', color: 'bg-purple-100 text-purple-600' },
        { label: 'Đánh giá TB', value: stats.avgRating || '—', icon: 'star', color: 'bg-yellow-100 text-yellow-600' },
        { label: 'Doanh thu', value: `${stats.totalRevenue.toLocaleString('vi-VN')}đ`, icon: 'payments', color: 'bg-emerald-100 text-emerald-600' },
    ]

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Tổng Quan Giảng Viên</h1>
                    <p className="text-sm text-slate-500 mt-1">Quản lý khóa học và theo dõi hiệu quả giảng dạy</p>
                </div>
                <Link
                    href="/instructor/courses/create"
                    className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors text-sm"
                >
                    <span className="material-icons-outlined text-base">add</span>
                    Tạo khóa học
                </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {statCards.map((card) => (
                    <div key={card.label} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${card.color}`}>
                                <span className="material-icons-outlined text-lg">{card.icon}</span>
                            </div>
                            <div>
                                <p className="text-xl font-bold text-slate-900">{card.value}</p>
                                <p className="text-xs text-slate-500">{card.label}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                    href="/instructor/courses"
                    className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow group"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                            <span className="material-icons-outlined text-indigo-600 text-xl">library_books</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">Quản lý khóa học</h3>
                            <p className="text-sm text-slate-500">Xem và chỉnh sửa tất cả khóa học</p>
                        </div>
                        <span className="material-icons-outlined text-slate-300 ml-auto group-hover:text-indigo-500 transition-colors">arrow_forward</span>
                    </div>
                </Link>

                <Link
                    href="/instructor/analytics"
                    className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow group"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                            <span className="material-icons-outlined text-emerald-600 text-xl">trending_up</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">Phân tích & Doanh thu</h3>
                            <p className="text-sm text-slate-500">Xem thống kê chi tiết và doanh thu</p>
                        </div>
                        <span className="material-icons-outlined text-slate-300 ml-auto group-hover:text-emerald-500 transition-colors">arrow_forward</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
