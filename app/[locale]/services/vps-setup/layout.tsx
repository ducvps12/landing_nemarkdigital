import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cài đặt VPS - Setup & Cấu hình máy chủ | Nemark',
    description: 'Dịch vụ cài đặt, cấu hình VPS chuyên nghiệp. Setup server Linux/Windows, cài đặt web server, database, SSL, bảo mật. Hỗ trợ kỹ thuật 24/7.',
    keywords: ['cài đặt VPS', 'setup VPS', 'cấu hình server', 'VPS setup', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/services/vps-setup',
        languages: { 'vi': '/vi/services/vps-setup', 'en': '/en/services/vps-setup' },
    },
    openGraph: {
        title: 'Cài đặt VPS - Setup & Cấu hình | Nemark',
        description: 'Cài đặt, cấu hình VPS chuyên nghiệp. Setup server, bảo mật, hỗ trợ 24/7.',
        url: 'https://nemarkdigital.com/vi/services/vps-setup',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
