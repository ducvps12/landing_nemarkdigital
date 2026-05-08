import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Đội ngũ chuyên gia | Nemark Digital',
    description: 'Gặp gỡ đội ngũ chuyên gia công nghệ tài năng của Nemark — những người kiến tạo giải pháp số cho doanh nghiệp Việt.',
    keywords: ['đội ngũ Nemark', 'chuyên gia công nghệ', 'team Nemark', 'developer Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/about/experts',
        languages: { 'vi': '/vi/about/experts', 'en': '/en/about/experts' },
    },
    openGraph: {
        title: 'Đội ngũ chuyên gia Nemark Digital',
        description: 'Đội ngũ phát triển trẻ, tận tâm và đầy sáng tạo.',
        url: 'https://nemarkdigital.com/vi/about/experts',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
