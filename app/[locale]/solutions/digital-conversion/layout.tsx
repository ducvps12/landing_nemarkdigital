import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chuyển đổi số - Digital Conversion cho doanh nghiệp | Nemark',
    description: 'Giải pháp chuyển đổi số toàn diện: số hóa quy trình, tự động hóa vận hành, tích hợp hệ thống. Lộ trình chuyển đổi số 4 bước cho doanh nghiệp Việt Nam.',
    keywords: ['chuyển đổi số', 'digital conversion', 'digital transformation', 'số hóa doanh nghiệp', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/solutions/digital-conversion',
        languages: { 'vi': '/vi/solutions/digital-conversion', 'en': '/en/solutions/digital-conversion' },
    },
    openGraph: {
        title: 'Chuyển đổi số cho doanh nghiệp | Nemark',
        description: 'Giải pháp chuyển đổi số: số hóa quy trình, tự động hóa, tích hợp hệ thống.',
        url: 'https://nemarkdigital.com/vi/solutions/digital-conversion',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
