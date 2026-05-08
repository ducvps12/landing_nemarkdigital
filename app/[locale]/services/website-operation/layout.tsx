import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Vận hành Website - Quản lý nội dung & Tối ưu | Nemark',
    description: 'Dịch vụ vận hành website chuyên nghiệp. Quản lý nội dung, cập nhật thường xuyên, tối ưu SEO liên tục, báo cáo hiệu suất hàng tháng.',
    keywords: ['vận hành website', 'quản lý website', 'quản lý nội dung', 'website operation', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/services/website-operation',
        languages: { 'vi': '/vi/services/website-operation', 'en': '/en/services/website-operation' },
    },
    openGraph: {
        title: 'Vận hành Website chuyên nghiệp | Nemark',
        description: 'Dịch vụ vận hành website. Quản lý nội dung, tối ưu SEO, báo cáo hiệu suất.',
        url: 'https://nemarkdigital.com/vi/services/website-operation',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
