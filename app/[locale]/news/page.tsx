'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'
import CTAWithForm from '@/components/common/cta/CTAWithForm'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'

interface BlogData {
    id: number
    title: string
    meta_des: string
    main_content: string
    created_by: string
    image_url: string
    created_at: string
}

// Helper function để format ngày
function formatDate(dateString: string, locale: string): string {
    const date = new Date(dateString)
    const loc = locale === 'vi' ? 'vi-VN' : 'en-US'
    return date.toLocaleDateString(loc, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
}

// Helper function để estimate thời gian đọc
function estimateReadTime(content: string, t: (key: string, values?: Record<string, string | number>) => string): string {
    const wordsPerMinute = 200
    const wordCount = content?.split(/\s+/).length || 0
    const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute))
    return t('minuteRead', { minutes })
}

export default function NewsPage() {
    const [blogs, setBlogs] = useState<BlogData[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const t = useTranslations('newsPage')
    const locale = useLocale()

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const response = await fetch('/api/admin/blogs')

                if (!response.ok) {
                    setError(true)
                    return
                }

                const result = await response.json()

                if (result.data) {
                    setBlogs(result.data)
                } else {
                    setError(true)
                }
            } catch (err) {
                console.error('Error fetching blogs:', err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchBlogs()
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen bg-white text-black flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    <p className="mt-4 text-black">{t('loading')}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white text-black">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            <main className="flex flex-col items-center w-full pb-20">
                {/* Hero Section */}
                <div className="w-full bg-gradient-to-br from-primary-dark to-primary py-20 pt-32">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 text-center" data-aos="fade-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                            {t('heroTitle')}
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                            {t('heroSubtitle')}
                        </p>
                    </div>
                </div>

                {/* Breadcrumbs */}
                <div className="w-full max-w-7xl px-4 md:px-8 pt-8 pb-4" data-aos="fade-up">
                    <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                        <Link className="text-primary font-medium hover:underline" href="/">{t('breadcrumbHome')}</Link>
                        <span className="text-slate-500">/</span>
                        <span className="text-slate-900 font-semibold">{t('breadcrumbNews')}</span>
                    </div>
                </div>

                {/* Blog Grid */}
                {error || blogs.length === 0 ? (
                    <div className="w-full max-w-7xl px-4 md:px-8 py-20 text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-6">
                            <span className="material-icons-outlined text-4xl text-slate-400">article</span>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('emptyTitle')}</h2>
                        <p className="text-slate-600">{t('emptyDescription')}</p>
                    </div>
                ) : (
                    <div className="w-full max-w-7xl px-4 md:px-8 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog, index) => (
                                <Link
                                    key={blog.id}
                                    href={`/news/${blog.id}`}
                                    className="group"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 h-full flex flex-col">
                                        {/* Featured Image */}
                                        {blog.image_url && (
                                            <div className="relative w-full aspect-video overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                                                <Image
                                                    src={blog.image_url}
                                                    alt={blog.title}
                                                    fill
                                                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            {/* Meta Info */}
                                            <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                                                <div className="flex items-center gap-1">
                                                    <span className="material-icons-outlined text-base">person</span>
                                                    <span>{blog.created_by}</span>
                                                </div>
                                                <span>•</span>
                                                <div className="flex items-center gap-1">
                                                    <span className="material-icons-outlined text-base">calendar_today</span>
                                                    <span>{formatDate(blog.created_at, locale)}</span>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                                {blog.title}
                                            </h2>

                                            {/* Description */}
                                            <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                                                {blog.meta_des}
                                            </p>

                                            {/* Read More */}
                                            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                                                <span className="text-sm text-slate-500 flex items-center gap-1">
                                                    <span className="material-icons-outlined text-base">schedule</span>
                                                    {estimateReadTime(blog.main_content, t)}
                                                </span>
                                                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                                                    {t('readMore')}
                                                    <span className="material-icons-outlined text-lg">arrow_forward</span>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA Section */}
            </main>

            <Footer />

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    )
}
