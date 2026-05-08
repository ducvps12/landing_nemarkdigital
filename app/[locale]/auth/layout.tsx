import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Đăng nhập',
    description: 'Đăng nhập vào tài khoản Nemark của bạn',
}

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-12">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <a href="/" className="inline-flex items-center gap-2 group">
                        <img src="/logo.jpg" alt="Nemark" className="h-10 w-10 rounded-lg" />
                        <span className="text-2xl font-bold text-primary group-hover:text-primary-dark transition-colors">
                            Nemark
                        </span>
                    </a>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
                    {children}
                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-xs text-slate-400">
                    © 2026 Nemark. Tất cả quyền được bảo lưu.
                </p>
            </div>
        </div>
    )
}
