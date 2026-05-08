'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Blog {
    id: number
    title: string
    meta_des: string
    created_by: string
    created_at: string
    image_url: string | null
}

export default function News() {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchBlogs()
    }, [])

    const fetchBlogs = async () => {
        try {
            const response = await fetch('/api/blogs')
            if (!response.ok) {
                // API error (e.g. DB connection failed) - silently show empty state
                setBlogs([])
                return
            }
            const data = await response.json()
            setBlogs(data.data || [])
        } catch (error) {
            // Network error - silently show empty state
            console.warn('Could not load blogs:', error)
            setBlogs([])
        } finally {
            setLoading(false)
        }
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
    }

    if (loading) {
        return (
            <section id="news" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-slate-600">Đang tải bài viết...</div>
                </div>
            </section>
        )
    }

    if (blogs.length === 0) {
        return (
            <section id="news" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-slate-600">Chưa có bài viết nào</div>
                </div>
            </section>
        )
    }

    return (
        <section id="news" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10" data-aos="fade-up">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                        Blog & Tin tức
                    </h2>
                    <h3 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">
                        Cập nhật kiến thức mới nhất
                    </h3>
                    <Link
                        href="#"
                        className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
                    >
                        Xem tất cả
                        <span className="material-icons-outlined ml-1">arrow_forward</span>
                    </Link>
                </div>

                {/* News Horizontal Scroll */}
                <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
                    {/* Scroll Container */}
                    <div className="overflow-x-auto scroll-smooth news-scroll pb-4 px-4 sm:px-6 lg:px-8">
                        <div className="flex gap-6">
                            {blogs.map((blog, index) => (
                                <article
                                    key={blog.id}
                                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-80 flex-shrink-0"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden bg-slate-200">
                                        {blog.image_url ? (
                                            <Image
                                                src={blog.image_url}
                                                alt={blog.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                                                <span className="material-icons text-6xl text-slate-400">article</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Meta Info */}
                                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                            <div className="flex items-center gap-1">
                                                <span className="material-icons-outlined text-sm">person</span>
                                                {blog.created_by}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="material-icons-outlined text-sm">calendar_today</span>
                                                {formatDate(blog.created_at)}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h4 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                                        </h4>

                                        {/* Excerpt */}
                                        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                                            {blog.meta_des}
                                        </p>

                                        {/* Read More Link */}
                                        <Link
                                            href={`/blogs/${blog.id}`}
                                            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors group/link"
                                        >
                                            Đọc thêm
                                            <span className="material-icons-outlined text-sm ml-1 group-hover/link:translate-x-1 transition-transform">
                                                arrow_forward
                                            </span>
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .news-scroll::-webkit-scrollbar {
                        height: 8px;
                    }
                    .news-scroll::-webkit-scrollbar-track {
                        background: #f1f5f9;
                        border-radius: 10px;
                    }
                    .news-scroll::-webkit-scrollbar-thumb {
                        background: #cbd5e1;
                        border-radius: 10px;
                    }
                    .news-scroll::-webkit-scrollbar-thumb:hover {
                        background: #94a3b8;
                    }
                    .news-scroll {
                        scrollbar-width: thin;
                        scrollbar-color: #cbd5e1 #f1f5f9;
                    }
                `}</style>
            </div>
        </section>
    )
}
