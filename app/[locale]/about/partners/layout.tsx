import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Đối tác & Khách hàng | Nemark Digital',
    description: 'Hơn 200+ doanh nghiệp đã tin tưởng và đồng hành cùng Nemark trong hành trình chuyển đổi số.',
    keywords: ['đối tác Nemark', 'khách hàng Nemark', 'partners Nemark', 'case studies'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/about/partners',
        languages: { 'vi': '/vi/about/partners', 'en': '/en/about/partners' },
    },
    openGraph: {
        title: 'Đối tác & Khách hàng Nemark',
        description: '200+ doanh nghiệp đã chuyển đổi số thành công cùng Nemark.',
        url: 'https://nemarkdigital.com/vi/about/partners',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
