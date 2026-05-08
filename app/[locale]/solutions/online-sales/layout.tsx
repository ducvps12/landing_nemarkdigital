import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Bán hàng Online - Giải pháp thương mại điện tử | Nemark',
    description: 'Giải pháp bán hàng online toàn diện: website thương mại điện tử, tích hợp thanh toán, quản lý đơn hàng, marketing automation. Tăng doanh thu online 300%.',
    keywords: ['bán hàng online', 'thương mại điện tử', 'e-commerce', 'online sales', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/solutions/online-sales',
        languages: { 'vi': '/vi/solutions/online-sales', 'en': '/en/solutions/online-sales' },
    },
    openGraph: {
        title: 'Bán hàng Online - E-commerce | Nemark',
        description: 'Giải pháp bán hàng online: e-commerce, thanh toán, quản lý đơn hàng.',
        url: 'https://nemarkdigital.com/vi/solutions/online-sales',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
