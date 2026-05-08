import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dịch vụ Tên miền & Hosting - Domain chất lượng cao | Nemark',
    description: 'Đăng ký tên miền .com, .vn, hosting chất lượng cao, uptime 99.9%. Tặng SSL miễn phí, hỗ trợ kỹ thuật 24/7. Giá chỉ từ 280.000đ/năm.',
    keywords: ['tên miền', 'hosting', 'domain', 'web hosting', 'VPS', 'Nemark', 'hosting Việt Nam'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/services/domain-hosting',
        languages: { 'vi': '/vi/services/domain-hosting', 'en': '/en/services/domain-hosting' },
    },
    openGraph: {
        title: 'Dịch vụ Tên miền & Hosting | Nemark',
        description: 'Đăng ký tên miền, hosting chất lượng cao, uptime 99.9%. Hỗ trợ 24/7.',
        url: 'https://nemarkdigital.com/vi/services/domain-hosting',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
