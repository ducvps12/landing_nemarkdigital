import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Giới thiệu Nemark - Đội ngũ & Sứ mệnh | Nemark Digital',
    description: 'Nemark Digital - đội ngũ chuyên gia 6+ năm kinh nghiệm, đồng hành cùng 16.000+ doanh nghiệp trong hành trình chuyển đổi số toàn diện.',
    keywords: ['về Nemark', 'giới thiệu Nemark', 'đội ngũ Nemark', 'Nemark Digital'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/about',
        languages: { 'vi': '/vi/about', 'en': '/en/about' },
    },
    openGraph: {
        title: 'Giới thiệu Nemark Digital',
        description: 'Đội ngũ chuyên gia 6+ năm, đồng hành 16.000+ doanh nghiệp chuyển đổi số.',
        url: 'https://nemarkdigital.com/vi/about',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
