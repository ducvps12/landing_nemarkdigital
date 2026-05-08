import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Digital Branding - Xây dựng thương hiệu số | Nemark',
    description: 'Dịch vụ xây dựng thương hiệu số chuyên nghiệp: brand identity, website branding, social media branding. Nâng tầm hình ảnh doanh nghiệp trên không gian số.',
    keywords: ['digital branding', 'xây dựng thương hiệu', 'thương hiệu số', 'brand identity', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/solutions/digital-branding',
        languages: { 'vi': '/vi/solutions/digital-branding', 'en': '/en/solutions/digital-branding' },
    },
    openGraph: {
        title: 'Digital Branding - Xây dựng thương hiệu số | Nemark',
        description: 'Xây dựng thương hiệu số: brand identity, website, social media.',
        url: 'https://nemarkdigital.com/vi/solutions/digital-branding',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
