import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Quản lý Hạ tầng CNTT - Infrastructure Management | Nemark',
    description: 'Dịch vụ quản lý hạ tầng CNTT chuyên nghiệp: server, network, cloud, monitoring. Đảm bảo hệ thống vận hành ổn định 24/7, uptime 99.9%.',
    keywords: ['quản lý hạ tầng', 'infrastructure management', 'quản lý server', 'IT infrastructure', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/services/infra-management',
        languages: { 'vi': '/vi/services/infra-management', 'en': '/en/services/infra-management' },
    },
    openGraph: {
        title: 'Quản lý Hạ tầng CNTT | Nemark',
        description: 'Quản lý hạ tầng CNTT: server, network, cloud. Uptime 99.9%.',
        url: 'https://nemarkdigital.com/vi/services/infra-management',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
