import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dịch vụ SEO Website - Tối ưu lên top Google | Nemark',
    description: 'Dịch vụ SEO website chuyên nghiệp: tối ưu on-page, off-page, technical SEO. Đưa website lên top Google bền vững với chiến lược SEO white-hat. Cam kết kết quả.',
    keywords: ['dịch vụ SEO', 'SEO website', 'tối ưu SEO', 'lên top Google', 'SEO chuyên nghiệp', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/services/seo',
        languages: { 'vi': '/vi/services/seo', 'en': '/en/services/seo' },
    },
    openGraph: {
        title: 'Dịch vụ SEO Website - Tối ưu lên top Google | Nemark',
        description: 'Dịch vụ SEO website chuyên nghiệp. Đưa website lên top Google bền vững.',
        url: 'https://nemarkdigital.com/vi/services/seo',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
