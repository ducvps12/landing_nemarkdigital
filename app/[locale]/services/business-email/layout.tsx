import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dịch vụ Email doanh nghiệp - Email chuyên nghiệp | Nemark',
    description: 'Email doanh nghiệp chuyên nghiệp theo tên miền riêng. Dung lượng lớn, bảo mật cao, chống spam. Nâng tầm thương hiệu với email @tenmien.vn.',
    keywords: ['email doanh nghiệp', 'email theo tên miền', 'business email', 'email chuyên nghiệp', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/services/business-email',
        languages: { 'vi': '/vi/services/business-email', 'en': '/en/services/business-email' },
    },
    openGraph: {
        title: 'Dịch vụ Email doanh nghiệp | Nemark',
        description: 'Email doanh nghiệp chuyên nghiệp theo tên miền riêng.',
        url: 'https://nemarkdigital.com/vi/services/business-email',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
