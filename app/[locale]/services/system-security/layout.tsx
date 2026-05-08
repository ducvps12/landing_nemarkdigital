import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Bảo mật Hệ thống - System Security | Nemark',
    description: 'Dịch vụ bảo mật hệ thống chuyên nghiệp: SSL, WAF, DDoS protection, penetration testing. Bảo vệ website và dữ liệu doanh nghiệp khỏi tấn công mạng.',
    keywords: ['bảo mật website', 'system security', 'bảo mật hệ thống', 'chống DDoS', 'SSL', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/services/system-security',
        languages: { 'vi': '/vi/services/system-security', 'en': '/en/services/system-security' },
    },
    openGraph: {
        title: 'Bảo mật Hệ thống | Nemark',
        description: 'Bảo mật website: SSL, WAF, DDoS protection. Bảo vệ dữ liệu doanh nghiệp.',
        url: 'https://nemarkdigital.com/vi/services/system-security',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
