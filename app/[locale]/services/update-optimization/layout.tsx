import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cập nhật & Tối ưu Website - Nâng cấp hiệu suất | Nemark',
    description: 'Dịch vụ cập nhật, tối ưu website chuyên nghiệp. Tăng tốc độ tải trang, cải thiện Core Web Vitals, nâng cấp bảo mật và tính năng mới.',
    keywords: ['cập nhật website', 'tối ưu website', 'nâng cấp website', 'tối ưu tốc độ', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/services/update-optimization',
        languages: { 'vi': '/vi/services/update-optimization', 'en': '/en/services/update-optimization' },
    },
    openGraph: {
        title: 'Cập nhật & Tối ưu Website | Nemark',
        description: 'Dịch vụ cập nhật, tối ưu website chuyên nghiệp. Tăng tốc độ, cải thiện Core Web Vitals.',
        url: 'https://nemarkdigital.com/vi/services/update-optimization',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
