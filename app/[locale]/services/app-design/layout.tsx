import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Thiết kế App Mobile - Ứng dụng di động chuyên nghiệp | Nemark',
    description: 'Dịch vụ thiết kế app mobile chuyên nghiệp: iOS, Android, React Native, Flutter. Giao diện UX/UI chuẩn quốc tế, hiệu suất cao, tối ưu trải nghiệm người dùng.',
    keywords: ['thiết kế app', 'app mobile', 'phát triển ứng dụng', 'iOS', 'Android', 'React Native', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/services/app-design',
        languages: { 'vi': '/vi/services/app-design', 'en': '/en/services/app-design' },
    },
    openGraph: {
        title: 'Thiết kế App Mobile chuyên nghiệp | Nemark',
        description: 'Dịch vụ thiết kế app mobile: iOS, Android. Giao diện chuẩn UX/UI.',
        url: 'https://nemarkdigital.com/vi/services/app-design',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
