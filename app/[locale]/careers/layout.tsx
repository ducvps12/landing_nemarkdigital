import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tuyển dụng - Cơ hội nghề nghiệp tại Nemark | Nemark',
    description: 'Gia nhập đội ngũ Nemark Digital. Tuyển dụng developer, designer, marketing. Môi trường làm việc sáng tạo, phúc lợi hấp dẫn.',
    keywords: ['tuyển dụng Nemark', 'việc làm IT', 'tuyển developer', 'tuyển designer', 'Nemark careers'],
    alternates: {
        canonical: 'https://nemarkdigital.com/vi/careers',
        languages: { 'vi': '/vi/careers', 'en': '/en/careers' },
    },
    openGraph: {
        title: 'Tuyển dụng tại Nemark Digital',
        description: 'Cơ hội nghề nghiệp tại Nemark. Môi trường sáng tạo, phúc lợi hấp dẫn.',
        url: 'https://nemarkdigital.com/vi/careers',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
