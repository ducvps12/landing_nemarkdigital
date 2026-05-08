'use client'

import { useEffect, useState } from 'react'
import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'

interface Blog {
    id: number
    title: string
    meta_des: string
    main_content: string
    created_by: string
    created_at: string
    image_url: string | null
}

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params)
    const [blog, setBlog] = useState<Blog | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchBlog()
    }, [resolvedParams.id])

    const fetchBlog = async () => {
        try {
            const response = await fetch(`/api/blogs/${resolvedParams.id}`)
            if (!response.ok) throw new Error('Failed to fetch blog')
            const data = await response.json()
            setBlog(data.data)
        } catch (err) {
            setError('Không tìm thấy bài viết')
            console.error('Error fetching blog:', err)
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

    // Empty handler since blog detail page doesn't have contact modal
    const handleOpenContactModal = () => {
        // Could navigate to homepage contact section or show alert
        window.location.href = '/#contact'
    }

    if (loading) {
        return (
            <>
                <Header onOpenContactModal={handleOpenContactModal} />
                <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                    <div className="text-slate-600">Đang tải...</div>
                </div>
                <Footer />
            </>
        )
    }

    if (error || !blog) {
        return (
            <>
                <Header onOpenContactModal={handleOpenContactModal} />
                <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-slate-900 mb-4">
                            {error || 'Không tìm thấy bài viết'}
                        </h1>
                        <Link href="/" className="text-primary hover:text-primary-dark">
                            ← Quay về trang chủ
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Header onOpenContactModal={handleOpenContactModal} />

            {/* Blog Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
                {/* Featured Image */}
                {blog.image_url && (
                    <div className="relative w-full h-96 mb-8 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={blog.image_url}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Meta Info */}
                <div className="flex items-center gap-6 text-sm text-slate-600 mb-6">
                    <div className="flex items-center gap-2">
                        <span className="material-icons-outlined text-lg">person</span>
                        <span className="font-medium">{blog.created_by}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-icons-outlined text-lg">calendar_today</span>
                        <span>{formatDate(blog.created_at)}</span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    {blog.title}
                </h1>

                {/* Meta Description */}
                <p className="text-xl text-slate-600 mb-8 leading-relaxed italic border-l-4 border-primary pl-6 py-2 bg-slate-100 rounded">
                    {blog.meta_des}
                </p>

                {/* Main Content */}
                <div
                    className="prose prose-lg max-w-none break-words overflow-wrap
                        prose-headings:text-slate-900 prose-headings:font-bold
                        prose-p:text-slate-700 prose-p:leading-relaxed prose-p:break-words
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:break-all
                        prose-strong:text-slate-900 prose-strong:font-semibold
                        prose-ul:text-slate-700 prose-ol:text-slate-700
                        prose-li:marker:text-primary prose-li:break-words
                        prose-img:rounded-lg prose-img:shadow-md prose-img:max-w-full
                        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:break-words
                    "
                    dangerouslySetInnerHTML={{ __html: blog.main_content }}
                />

                {/* Back Button */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
                    >
                        <span className="material-icons-outlined mr-2">arrow_back</span>
                        Quay về trang chủ
                    </Link>
                </div>
            </article>

            <Footer />
        </>
    )
}
