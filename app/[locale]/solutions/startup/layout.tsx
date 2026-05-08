import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Giải pháp Startup - Công nghệ cho khởi nghiệp | Nemark',
    description: 'Giải pháp công nghệ toàn diện cho startup: MVP development, tech consulting, UI/UX design, cloud hosting. Tiết kiệm 50% chi phí phát triển sản phẩm.',
    keywords: ['giải pháp startup', 'startup solutions', 'MVP development', 'khởi nghiệp', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/solutions/startup',
        languages: { 'vi': '/vi/solutions/startup', 'en': '/en/solutions/startup' },
    },
    openGraph: {
        title: 'Giải pháp Startup | Nemark',
        description: 'Giải pháp công nghệ cho startup: MVP, consulting, UI/UX. Tiết kiệm 50% chi phí.',
        url: 'https://nemarkdigital.com/vi/solutions/startup',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
