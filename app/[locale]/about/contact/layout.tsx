import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Liên hệ hợp tác | Nemark Digital',
    description: 'Liên hệ hợp tác cùng Nemark — đối tác công nghệ tin cậy cho doanh nghiệp Việt. Tư vấn miễn phí, phản hồi trong 15 phút.',
    keywords: ['liên hệ Nemark', 'hợp tác Nemark', 'contact Nemark', 'partnership'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/about/contact',
        languages: { 'vi': '/vi/about/contact', 'en': '/en/about/contact' },
    },
    openGraph: {
        title: 'Liên hệ hợp tác Nemark Digital',
        description: 'Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết.',
        url: 'https://nemarkdigital.com/vi/about/contact',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
