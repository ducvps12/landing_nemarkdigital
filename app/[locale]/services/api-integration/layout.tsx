import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tích hợp API - Kết nối hệ thống thông minh | Nemark',
    description: 'Dịch vụ tích hợp API chuyên nghiệp: kết nối thanh toán, CRM, ERP, social media, logistics. Tự động hóa quy trình, tăng hiệu suất vận hành.',
    keywords: ['tích hợp API', 'API integration', 'kết nối hệ thống', 'tự động hóa', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/services/api-integration',
        languages: { 'vi': '/vi/services/api-integration', 'en': '/en/services/api-integration' },
    },
    openGraph: {
        title: 'Tích hợp API - Kết nối hệ thống | Nemark',
        description: 'Dịch vụ tích hợp API: thanh toán, CRM, ERP, tự động hóa quy trình.',
        url: 'https://nemarkdigital.com/vi/services/api-integration',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
