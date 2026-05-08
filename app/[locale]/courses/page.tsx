import { Suspense } from 'react'
import { getCourses, getCategories } from '@/lib/courses'
import CourseCard from '@/components/courses/CourseCard'

interface PageProps {
    searchParams: Promise<{ category?: string; search?: string; level?: string; page?: string }>
}

export default async function CoursesPage({ searchParams }: PageProps) {
    const params = await searchParams
    const categories = await getCategories()
    const page = parseInt(params.page || '1')
    const limit = 12

    const { courses, count } = await getCourses({
        categorySlug: params.category,
        search: params.search,
        level: params.level,
        limit,
        offset: (page - 1) * limit,
    })

    const totalPages = Math.ceil(count / limit)
    const activeCategory = params.category || 'all'

    return (
        <main className="min-h-screen" style={{ background: '#f8fafc' }}>
            {/* Hero */}
            <section
                className="relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20"
                style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #1c4d8d 70%, #3953d4 100%)',
                }}
            >
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #fbbf24, transparent)' }} />
                    <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-8" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-5" style={{ background: 'radial-gradient(ellipse, #ffffff, transparent)' }} />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6" style={{ background: 'rgba(251,191,36,0.15)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }}>
                        <span className="material-icons-outlined" style={{ fontSize: '14px' }}>auto_awesome</span>
                        Học cùng AI
                    </div>

                    <h1
                        className="font-bold mb-5"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            color: '#ffffff',
                            lineHeight: 1.2,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Khóa Học{' '}
                        <span
                            style={{
                                background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #fcd34d)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Vibe Coding
                        </span>
                    </h1>

                    <p
                        className="max-w-2xl mx-auto mb-10"
                        style={{
                            fontFamily: "'Be Vietnam Pro', sans-serif",
                            fontSize: '1.125rem',
                            color: 'rgba(255,255,255,0.75)',
                            lineHeight: 1.7,
                        }}
                    >
                        Học lập trình, phát triển game và xây dựng ứng dụng thực tế cùng AI.
                        <br />
                        Từ cơ bản đến nâng cao, với hệ thống bài học tương tác.
                    </p>

                    {/* Search */}
                    <Suspense fallback={null}>
                        <form method="GET" action="/courses" className="max-w-2xl mx-auto">
                            <div className="flex gap-3">
                                <div className="relative flex-1">
                                    <span
                                        className="absolute left-4 top-1/2 -translate-y-1/2 material-icons-outlined"
                                        style={{ color: 'rgba(255,255,255,0.5)', fontSize: '22px' }}
                                    >
                                        search
                                    </span>
                                    <input
                                        type="text"
                                        name="search"
                                        defaultValue={params.search || ''}
                                        placeholder="Tìm khóa học..."
                                        className="w-full transition-all"
                                        style={{
                                            fontFamily: "'Be Vietnam Pro', sans-serif",
                                            paddingLeft: '3rem',
                                            paddingRight: '1.25rem',
                                            paddingTop: '0.875rem',
                                            paddingBottom: '0.875rem',
                                            borderRadius: '14px',
                                            background: 'rgba(255,255,255,0.1)',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            color: '#ffffff',
                                            fontSize: '0.95rem',
                                            backdropFilter: 'blur(10px)',
                                            outline: 'none',
                                        }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 transition-all hover:scale-105"
                                    style={{
                                        fontFamily: "'Be Vietnam Pro', sans-serif",
                                        padding: '0.875rem 1.75rem',
                                        background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                                        color: '#1e293b',
                                        fontWeight: 700,
                                        borderRadius: '14px',
                                        border: 'none',
                                        fontSize: '0.95rem',
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 15px rgba(251,191,36,0.3)',
                                    }}
                                >
                                    <span className="material-icons-outlined" style={{ fontSize: '20px' }}>search</span>
                                    Tìm kiếm
                                </button>
                            </div>
                        </form>
                    </Suspense>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ background: 'transparent' }}>
                {/* Category Filters */}
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                    <a
                        href="/courses"
                        className="transition-all hover:scale-105"
                        style={{
                            fontFamily: "'Be Vietnam Pro', sans-serif",
                            padding: '0.5rem 1.25rem',
                            borderRadius: '9999px',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            textDecoration: 'none',
                            ...(activeCategory === 'all'
                                ? { background: 'linear-gradient(135deg, #3953d4, #1c4d8d)', color: '#ffffff', boxShadow: '0 2px 8px rgba(57,83,212,0.3)' }
                                : { background: '#ffffff', color: '#475569', border: '1px solid #e2e8f0' }),
                        }}
                    >
                        Tất cả
                    </a>
                    {categories.map((cat) => (
                        <a
                            key={cat.id}
                            href={`/courses?category=${cat.slug}`}
                            className="transition-all hover:scale-105"
                            style={{
                                fontFamily: "'Be Vietnam Pro', sans-serif",
                                padding: '0.5rem 1.25rem',
                                borderRadius: '9999px',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                ...(activeCategory === cat.slug
                                    ? { background: 'linear-gradient(135deg, #3953d4, #1c4d8d)', color: '#ffffff', boxShadow: '0 2px 8px rgba(57,83,212,0.3)' }
                                    : { background: '#ffffff', color: '#475569', border: '1px solid #e2e8f0' }),
                            }}
                        >
                            {cat.icon && <span className="material-icons-outlined text-sm mr-1 align-text-bottom">{cat.icon}</span>}
                            {cat.name}
                        </a>
                    ))}
                </div>

                {/* Level Filter */}
                <div className="flex items-center gap-2 mb-8">
                    <span style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: '0.875rem', color: '#64748b', fontWeight: 500 }}>Trình độ:</span>
                    {[
                        { value: '', label: 'Tất cả' },
                        { value: 'beginner', label: 'Cơ bản' },
                        { value: 'intermediate', label: 'Trung cấp' },
                        { value: 'advanced', label: 'Nâng cao' },
                    ].map((lev) => (
                        <a
                            key={lev.value}
                            href={`/courses?${new URLSearchParams({
                                ...(params.category ? { category: params.category } : {}),
                                ...(params.search ? { search: params.search } : {}),
                                ...(lev.value ? { level: lev.value } : {}),
                            }).toString()}`}
                            className="transition-colors"
                            style={{
                                fontFamily: "'Be Vietnam Pro', sans-serif",
                                padding: '0.375rem 0.875rem',
                                borderRadius: '0.5rem',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                ...((params.level || '') === lev.value
                                    ? { background: 'rgba(57,83,212,0.1)', color: '#3953d4' }
                                    : { color: '#64748b' }),
                            }}
                        >
                            {lev.label}
                        </a>
                    ))}
                </div>

                {/* Results count */}
                <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
                    {count > 0 ? `Hiển thị ${courses.length} / ${count} khóa học` : 'Không tìm thấy khóa học nào'}
                </p>

                {/* Course Grid */}
                {courses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ background: 'linear-gradient(135deg, rgba(57,83,212,0.1), rgba(124,58,237,0.1))' }}>
                            <span className="material-icons-outlined" style={{ fontSize: '40px', color: '#3953d4' }}>school</span>
                        </div>
                        <h3
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: '1.375rem',
                                fontWeight: 700,
                                color: '#1e293b',
                                marginBottom: '0.75rem',
                            }}
                        >
                            Chưa có khóa học nào
                        </h3>
                        <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: '1rem', color: '#64748b', lineHeight: 1.6 }}>
                            Các khóa học đang được chuẩn bị. Hãy quay lại sớm!
                        </p>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-12">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                            <a
                                key={p}
                                href={`/courses?${new URLSearchParams({
                                    ...(params.category ? { category: params.category } : {}),
                                    ...(params.search ? { search: params.search } : {}),
                                    ...(params.level ? { level: params.level } : {}),
                                    page: String(p),
                                }).toString()}`}
                                className="transition-all hover:scale-105"
                                style={{
                                    width: '2.5rem',
                                    height: '2.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '0.75rem',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    fontFamily: "'Be Vietnam Pro', sans-serif",
                                    textDecoration: 'none',
                                    ...(page === p
                                        ? { background: 'linear-gradient(135deg, #3953d4, #1c4d8d)', color: '#ffffff', boxShadow: '0 2px 8px rgba(57,83,212,0.3)' }
                                        : { background: '#ffffff', color: '#475569', border: '1px solid #e2e8f0' }),
                                }}
                            >
                                {p}
                            </a>
                        ))}
                    </div>
                )}
            </section>
        </main>
    )
}
