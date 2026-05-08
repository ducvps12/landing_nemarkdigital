import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dịch vụ Proxy - Proxy chất lượng cao | Nemark',
    description: 'Dịch vụ proxy chất lượng cao, tốc độ nhanh, bảo mật tuyệt đối. Proxy Việt Nam và quốc tế cho doanh nghiệp. Hỗ trợ HTTP/SOCKS5.',
    keywords: ['proxy', 'proxy Việt Nam', 'proxy doanh nghiệp', 'mua proxy', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/services/proxy',
        languages: { 'vi': '/vi/services/proxy', 'en': '/en/services/proxy' },
    },
    openGraph: {
        title: 'Dịch vụ Proxy chất lượng cao | Nemark',
        description: 'Proxy Việt Nam và quốc tế, tốc độ nhanh, bảo mật tuyệt đối.',
        url: 'https://nemarkdigital.com/vi/services/proxy',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
