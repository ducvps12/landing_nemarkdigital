import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Khóa học Vibe Coding',
    description: 'Khám phá các khóa học lập trình, game dev, web fullstack tại Nemark. Học cùng AI, thực hành dự án thực tế.',
}

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
