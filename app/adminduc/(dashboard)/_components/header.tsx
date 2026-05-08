'use client'

import { usePathname } from 'next/navigation'

export default function Header({ adminName }: { adminName: string }) {
    const pathname = usePathname()

    // Generate breadcrumbs from pathname
    const generateBreadcrumbs = () => {
        const paths = pathname.split('/').filter(Boolean)
        const breadcrumbs = [{ name: 'Admin', href: '/adminduc/dashboard' }]

        if (paths.length > 1) {
            const section = paths[1]
            const sectionNames: Record<string, string> = {
                dashboard: 'Dashboard',
                blogs: 'Quản lý Blog',
                customers: 'Quản lý Khách hàng',
                options: 'Quản lý Cài đặt',
            }
            breadcrumbs.push({
                name: sectionNames[section] || section,
                href: `/${paths.slice(0, 2).join('/')}`,
            })
        }

        return breadcrumbs
    }

    const breadcrumbs = generateBreadcrumbs()

    return (
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
            <div className="h-16 px-6 flex items-center justify-between">
                {/* Breadcrumbs */}
                <nav className="flex items-center space-x-2 text-sm">
                    {breadcrumbs.map((crumb, index) => (
                        <div key={index} className="flex items-center">
                            {index > 0 && (
                                <svg className="w-4 h-4 mx-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            )}
                            <span className={index === breadcrumbs.length - 1 ? 'text-slate-900 font-medium' : 'text-slate-500'}>
                                {crumb.name}
                            </span>
                        </div>
                    ))}
                </nav>

                {/* User info */}
                <div className="flex items-center space-x-3">
                    <div className="text-right">
                        <p className="text-sm font-medium text-slate-900">{adminName}</p>
                        <p className="text-xs text-slate-500">Administrator</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {adminName.charAt(0).toUpperCase()}
                    </div>
                </div>
            </div>
        </header>
    )
}
