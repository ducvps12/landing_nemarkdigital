import { getInstructorStats, getInstructorCourses } from '@/lib/instructor'

export default async function AnalyticsPage() {
    const stats = await getInstructorStats()
    const courses = await getInstructorCourses()

    // Top courses by enrollment
    const topCourses = [...courses]
        .sort((a, b) => (b.enrollment_count || 0) - (a.enrollment_count || 0))
        .slice(0, 5)

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Phân Tích & Doanh Thu</h1>
                <p className="text-sm text-slate-500 mt-1">Thống kê hiệu quả giảng dạy và doanh thu</p>
            </div>

            {/* Revenue Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-6 text-white">
                    <p className="text-sm text-emerald-100">Tổng doanh thu</p>
                    <p className="text-3xl font-bold mt-2">{stats.totalRevenue.toLocaleString('vi-VN')}đ</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
                    <p className="text-sm text-indigo-100">Tổng học viên</p>
                    <p className="text-3xl font-bold mt-2">{stats.totalStudents}</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-6 text-white">
                    <p className="text-sm text-yellow-100">Đánh giá trung bình</p>
                    <p className="text-3xl font-bold mt-2">{stats.avgRating || '—'} ⭐</p>
                </div>
            </div>

            {/* Top Courses */}
            <div className="bg-white rounded-xl border border-slate-100 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Top Khóa Học</h2>
                {topCourses.length === 0 ? (
                    <p className="text-sm text-slate-400 text-center py-8">Chưa có dữ liệu</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-100">
                                    <th className="text-left py-3 px-2 text-slate-500 font-medium">#</th>
                                    <th className="text-left py-3 px-2 text-slate-500 font-medium">Khóa học</th>
                                    <th className="text-right py-3 px-2 text-slate-500 font-medium">Học viên</th>
                                    <th className="text-right py-3 px-2 text-slate-500 font-medium">Đánh giá</th>
                                    <th className="text-right py-3 px-2 text-slate-500 font-medium">Giá</th>
                                    <th className="text-right py-3 px-2 text-slate-500 font-medium">Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topCourses.map((course, i) => (
                                    <tr key={course.id} className="border-b border-slate-50 hover:bg-slate-50">
                                        <td className="py-3 px-2 text-slate-400">{i + 1}</td>
                                        <td className="py-3 px-2 font-medium text-slate-900">{course.title}</td>
                                        <td className="py-3 px-2 text-right">{course.enrollment_count || 0}</td>
                                        <td className="py-3 px-2 text-right">{course.avg_rating || '—'} ⭐</td>
                                        <td className="py-3 px-2 text-right">
                                            {course.price === 0 ? 'Miễn phí' : `${course.price.toLocaleString('vi-VN')}đ`}
                                        </td>
                                        <td className="py-3 px-2 text-right">
                                            <span className={`px-2 py-0.5 rounded-full text-xs ${course.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                                                }`}>
                                                {course.status === 'published' ? 'Xuất bản' : 'Nháp'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}
