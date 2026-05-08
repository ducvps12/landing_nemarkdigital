import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dịch vụ VPS - Máy chủ ảo hiệu năng cao | Nemark',
    description: 'Cho thuê VPS Việt Nam, quốc tế với hiệu năng cao, SSD NVMe, uptime 99.9%. Cấu hình linh hoạt, hỗ trợ kỹ thuật 24/7. Phù hợp cho mọi doanh nghiệp.',
    keywords: ['VPS', 'máy chủ ảo', 'VPS Việt Nam', 'cloud VPS', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/services/vps',
        languages: { 'vi': '/vi/services/vps', 'en': '/en/services/vps' },
    },
    openGraph: {
        title: 'Dịch vụ VPS - Máy chủ ảo hiệu năng cao | Nemark',
        description: 'VPS Việt Nam SSD NVMe, uptime 99.9%, hỗ trợ 24/7.',
        url: 'https://nemarkdigital.com/vi/services/vps',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
