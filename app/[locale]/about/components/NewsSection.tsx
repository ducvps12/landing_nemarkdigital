'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

interface Article {
    id: number
    slug: string
    title: string
    excerpt: string
    date: string
    readTime: string
    icon: string
    image: string
    author: string
}

function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })
}

function estimateReadTime(content: string): string {
    const wordsPerMinute = 200
    const wordCount = content?.split(/\s+/).length || 0
    const minutes = Math.ceil(wordCount / wordsPerMinute)
    return `${Math.max(1, minutes)} min read`
}

export default function NewsSection() {
    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState(true)
    const t = useTranslations('aboutPage.news')

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await fetch('/api/admin/blogs')
                const result = await response.json()

                if (result.data && result.data.length > 0) {
                    const mappedArticles: Article[] = result.data.slice(0, 6).map((blog: any) => ({
                        id: blog.id,
                        slug: blog.id.toString(),
                        title: blog.title,
                        excerpt: blog.meta_des || '',
                        date: formatDate(blog.created_at),
                        readTime: estimateReadTime(blog.main_content || ''),
                        icon: 'article',
                        image: blog.image_url || 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
                        author: blog.created_by || 'Admin'
                    }))
                    setArticles(mappedArticles)
                } else {
                    setArticles([])
                }
            } catch (error) {
                console.warn('Using fallback news data')
                setArticles([])
            } finally {
                setLoading(false)
            }
        }

        fetchNews()
    }, [])

    if (loading) {
        return (
            <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        <p className="mt-4 text-text-secondary">{t('loading')}</p>
                    </div>
                </div>
            </section>
        )
    }

    if (articles.length === 0) return null

    return (
        <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="mb-12 flex justify-center" data-aos="fade-up">
                    <div className="inline-flex items-center justify-center px-6 py-2 bg-primary/20 border border-primary/30 rounded-full backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary mr-3 animate-pulse" />
                        <h2 className="text-primary text-sm font-bold tracking-[0.15em] uppercase">
                            {t('sectionLabel')}
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {articles.map((article, index) => (
                        <Link
                            key={article.id}
                            href={`/news/${article.slug}`}
                            className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-primary/30"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="relative overflow-hidden aspect-video w-full">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                                    style={{ backgroundImage: `url('${article.image}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold">
                                        {article.author}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col flex-grow p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="material-icons-outlined text-primary text-lg">{article.icon}</span>
                                    <span className="text-xs font-medium text-text-secondary">{article.date}</span>
                                    <span className="text-slate-400">•</span>
                                    <span className="text-xs font-medium text-text-secondary">{article.readTime}</span>
                                </div>
                                <h3 className="text-lg font-bold leading-tight text-text-main group-hover:text-primary transition-colors line-clamp-3 mb-2">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-text-secondary line-clamp-2 mt-auto pt-2">{article.excerpt}</p>
                                <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                                    <span>{t('readMore')}</span>
                                    <span className="material-icons-outlined text-base">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 w-full flex justify-center" data-aos="fade-up">
                    <button className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-accent hover:bg-accent-dark text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/30 active:translate-y-0.5">
                        <span>{t('viewMore')}</span>
                        <span className="material-icons-outlined ml-2 text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 skew-x-12" />
                    </button>
                </div>
            </div>
        </section>
    )
}
