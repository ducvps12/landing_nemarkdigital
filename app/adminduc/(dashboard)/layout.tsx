import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth/session'
import Sidebar from './_components/sidebar'
import Header from './_components/header'

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getSession()

    // Redirect to login if not authenticated
    if (!session.isLoggedIn) {
        redirect('/adminduc/login')
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content area */}
            <div className="lg:pl-64">
                {/* Header */}
                <Header adminName={session.loginName || 'Admin'} />

                {/* Page content */}
                <main className="p-6">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
