import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dự án - Portfolio & Case Studies | Nemark',
    description: 'Khám phá danh mục dự án thiết kế website, app mobile, giải pháp công nghệ của Nemark Digital. 860+ website và ứng dụng đã triển khai thành công.',
    keywords: ['dự án Nemark', 'portfolio', 'case studies', 'mẫu website', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/projects',
        languages: { 'vi': '/vi/projects', 'en': '/en/projects' },
    },
    openGraph: {
        title: 'Dự án & Portfolio | Nemark',
        description: '860+ website và ứng dụng đã triển khai thành công.',
        url: 'https://nemarkdigital.com/vi/projects',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
