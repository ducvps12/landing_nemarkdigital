import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

interface Certificate {
    id: string
    certificate_number: string
    issued_at: string
    enrollment: {
        course: {
            title: string
            slug: string
        }
    }
}

export default async function CertificatesPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    let certificates: Certificate[] = []

    if (user) {
        const { data } = await supabase
            .from('certificates')
            .select(`
                id,
                certificate_number,
                issued_at,
                enrollment:enrollments!enrollment_id(
                    course:courses!course_id(title, slug)
                )
            `)
            .order('issued_at', { ascending: false })

        certificates = (data || []) as unknown as Certificate[]
    }

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Chứng Chỉ</h1>
                <p className="text-sm text-slate-500 mt-1">Các chứng chỉ bạn đã nhận được khi hoàn thành khóa học</p>
            </div>

            {certificates.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
                    <span className="material-icons-outlined text-6xl text-slate-300 mb-4">workspace_premium</span>
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">Chưa có chứng chỉ nào</h3>
                    <p className="text-slate-500 mb-6">Hoàn thành khóa học để nhận chứng chỉ!</p>
                    <Link
                        href="/dashboard/my-courses"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-colors"
                    >
                        <span className="material-icons-outlined">school</span>
                        Xem khóa học
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 p-6 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center flex-shrink-0">
                                    <span className="material-icons text-white text-2xl">workspace_premium</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-slate-900 mb-1 line-clamp-2">
                                        {cert.enrollment?.course?.title || 'Khóa học'}
                                    </h3>
                                    <p className="text-xs font-mono text-slate-500 mb-2">
                                        {cert.certificate_number}
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        Cấp ngày: {new Date(cert.issued_at).toLocaleDateString('vi-VN')}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-yellow-200/50">
                                <Link
                                    href={`/courses/${cert.enrollment?.course?.slug}`}
                                    className="flex-1 text-center py-2 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors text-sm border border-slate-200"
                                >
                                    Xem khóa học
                                </Link>
                                <a
                                    href={`/api/certificates/${cert.id}/download`}
                                    className="flex items-center justify-center w-9 h-9 bg-white hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors"
                                    title="Tải xuống PDF"
                                    download
                                >
                                    <span className="material-icons-outlined text-slate-600 text-lg">download</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
