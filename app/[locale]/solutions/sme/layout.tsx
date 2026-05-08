import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Giải pháp SME - Chuyển đổi số cho doanh nghiệp vừa và nhỏ | Nemark',
    description: 'Giải pháp chuyển đổi số toàn diện cho doanh nghiệp SME: website, CRM, marketing automation, data analytics. Tăng doanh thu 60%, giảm chi phí vận hành 40%.',
    keywords: ['giải pháp SME', 'chuyển đổi số SME', 'doanh nghiệp nhỏ', 'digital transformation', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/solutions/sme',
        languages: { 'vi': '/vi/solutions/sme', 'en': '/en/solutions/sme' },
    },
    openGraph: {
        title: 'Giải pháp SME - Chuyển đổi số | Nemark',
        description: 'Chuyển đổi số cho SME: website, CRM, marketing automation.',
        url: 'https://nemarkdigital.com/vi/solutions/sme',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
