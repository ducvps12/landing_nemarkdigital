import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Công cụ AI - Tích hợp trí tuệ nhân tạo | Nemark',
    description: 'Dịch vụ tích hợp công cụ AI cho doanh nghiệp: chatbot AI, content automation, data analytics. Tăng hiệu suất vận hành 40%, giảm chi phí 30%.',
    keywords: ['công cụ AI', 'AI tools', 'chatbot AI', 'trí tuệ nhân tạo', 'automation', 'Nemark'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/services/ai-tools',
        languages: { 'vi': '/vi/services/ai-tools', 'en': '/en/services/ai-tools' },
    },
    openGraph: {
        title: 'Công cụ AI cho doanh nghiệp | Nemark',
        description: 'Tích hợp AI: chatbot, automation, data analytics. Tăng hiệu suất 40%.',
        url: 'https://nemarkdigital.com/vi/services/ai-tools',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
