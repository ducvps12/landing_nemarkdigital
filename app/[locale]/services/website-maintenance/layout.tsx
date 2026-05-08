import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Bảo trì Website - Duy trì hoạt động ổn định | Nemark',
    description: 'Dịch vụ bảo trì website chuyên nghiệp 24/7. Sao lưu tự động, cập nhật bảo mật, giám sát uptime, khắc phục sự cố nhanh chóng. Cam kết website hoạt động ổn định.',
    keywords: ['bảo trì website', 'duy trì website', 'website maintenance', 'giám sát website', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/services/website-maintenance',
        languages: { 'vi': '/vi/services/website-maintenance', 'en': '/en/services/website-maintenance' },
    },
    openGraph: {
        title: 'Bảo trì Website chuyên nghiệp 24/7 | Nemark',
        description: 'Dịch vụ bảo trì website chuyên nghiệp. Sao lưu, bảo mật, giám sát, khắc phục sự cố.',
        url: 'https://nemarkdigital.com/vi/services/website-maintenance',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
