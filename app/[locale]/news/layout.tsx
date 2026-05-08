import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tin tức & Blog - Kiến thức công nghệ | Nemark',
    description: 'Cập nhật tin tức công nghệ, xu hướng thiết kế website, chiến lược SEO, chuyển đổi số mới nhất. Blog chuyên sâu từ đội ngũ Nemark Digital.',
    keywords: ['tin tức công nghệ', 'blog thiết kế website', 'xu hướng SEO', 'chuyển đổi số', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/news',
        languages: { 'vi': '/vi/news', 'en': '/en/news' },
    },
    openGraph: {
        title: 'Tin tức & Blog công nghệ | Nemark',
        description: 'Tin tức, xu hướng thiết kế website, SEO, chuyển đổi số mới nhất.',
        url: 'https://nemarkdigital.com/vi/news',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
