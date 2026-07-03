'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { ChevronLeft, ChevronRight, ChevronDown, Maximize2, Minimize2, ZoomIn, Star, Heart, Check } from 'lucide-react'
import ContactModal from '@/components/common/modal/ContactModal'
import { websiteDatabase, defaultTemplate, websiteTemplates, getTranslatedTemplate } from '@/lib/websiteData'

export default function WebsiteDetailPage() {
    const params = useParams()
    const slug = params.slug as string
    const locale = params.locale as string

    // Get product data or use default
    const dbEntry = websiteDatabase[slug]
    const rawProduct = dbEntry || { ...defaultTemplate, slug, title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') }
    const product = getTranslatedTemplate(rawProduct, locale)

    const [activeImage, setActiveImage] = useState(0)
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    const relatedWebsites = websiteTemplates
        .filter(t => t.slug !== slug)
        .slice(0, 4)
        .map(t => getTranslatedTemplate(t, locale))

    return (
        <div className="min-h-screen bg-white">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            <main className="pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" data-aos="fade-up">
                        <Link href="/" className="hover:text-primary transition-colors">
                            {locale === 'en' ? 'Home' : 'Trang chủ'}
                        </Link>
                        <span>›</span>
                        <Link href="/mau-website" className="hover:text-primary transition-colors">
                            {locale === 'en' ? 'Website templates' : 'Mẫu website'}
                        </Link>
                        <span>›</span>
                        <span className="text-primary font-medium">{product.title}</span>
                    </nav>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                        {/* Left - Image Gallery */}
                        <div data-aos="fade-right">
                            {/* Main Image - Expandable */}
                            <div className={`relative bg-gray-100 rounded-xl overflow-hidden mb-4 transition-all duration-500 ${isExpanded ? 'h-[600px] lg:h-[700px]' : 'aspect-[4/3]'
                                }`}>
                                <div className={`absolute inset-0 overflow-y-auto ${isExpanded ? 'cursor-grab' : ''}`}>
                                    <img
                                        src={product.mainImages[activeImage]}
                                        alt={product.title}
                                        className="w-full object-cover object-top"
                                    />
                                </div>

                                {isExpanded && (
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 animate-bounce">
                                        <ChevronDown className="w-4 h-4" />
                                        {locale === 'en' ? 'Scroll to view full' : 'Cuộn để xem đầy đủ'}
                                    </div>
                                )}

                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg flex items-center gap-2"
                                >
                                    {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                                    <span className="text-sm font-medium">
                                        {isExpanded 
                                            ? (locale === 'en' ? 'Collapse' : 'Thu gọn') 
                                            : (locale === 'en' ? 'Expand' : 'Mở rộng')}
                                    </span>
                                </button>

                                {product.mainImages.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => setActiveImage(prev => prev > 0 ? prev - 1 : product.mainImages.length - 1)}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => setActiveImage(prev => prev < product.mainImages.length - 1 ? prev + 1 : 0)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </>
                                )}

                                <div className="absolute top-4 left-4 bg-black/60 text-white text-sm px-3 py-1.5 rounded-full">
                                    {activeImage + 1} / {product.mainImages.length}
                                </div>
                            </div>

                            {/* Thumbnails */}
                            {product.mainImages.length > 1 && (
                                <div className="grid grid-cols-5 gap-2">
                                    {product.mainImages.map((img: string, index: number) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveImage(index)}
                                            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${activeImage === index
                                                ? 'border-primary ring-2 ring-primary/30'
                                                : 'border-gray-200 hover:border-primary/50'
                                                }`}
                                        >
                                            <img src={img} alt="" className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Right - Product Info */}
                        <div data-aos="fade-left">
                            <div className="bg-white rounded-xl border border-gray-200 p-6 lg:p-8 shadow-sm">
                                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                                    {product.title}
                                </h1>

                                {/* Info */}
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1 text-amber-500">
                                            <Star className="w-5 h-5 fill-current" />
                                            <span className="font-semibold">{product.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-400">
                                            <Heart className="w-5 h-5" />
                                            <span>
                                                {product.likes} {locale === 'en' ? 'likes' : 'lượt thích'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-28 text-gray-600 shrink-0">
                                            {locale === 'en' ? 'Category:' : 'Danh mục:'}
                                        </span>
                                        <span className="text-primary font-medium">{product.categoryLabel}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="w-28 text-gray-600">
                                            {locale === 'en' ? 'Price:' : 'Giá:'}
                                        </span>
                                        <span className="text-primary font-semibold text-xl">{product.price}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="w-28 text-gray-600">
                                            {locale === 'en' ? 'Timeline:' : 'Thời gian:'}
                                        </span>
                                        <span className="text-gray-900">{product.time}</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-28 text-gray-600 shrink-0">
                                            {locale === 'en' ? 'Description:' : 'Mô tả:'}
                                        </span>
                                        <span className="text-gray-700">{product.description}</span>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex gap-4 mb-6">
                                    <Link
                                        href={`/${locale}/demo/${product.slug}`}
                                        target="_blank"
                                        className="flex-1 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors text-center flex items-center justify-center"
                                    >
                                        {locale === 'en' ? 'LIVE DEMO' : 'XEM DEMO'}
                                    </Link>
                                    <button
                                        onClick={() => setIsContactModalOpen(true)}
                                        className="flex-1 px-6 py-3 border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-semibold rounded-lg transition-colors"
                                    >
                                        {locale === 'en' ? 'Order template' : 'Đặt mẫu'}
                                    </button>
                                </div>

                                {/* Features */}
                                <div className="space-y-3">
                                    {product.features.map((feature: string, index: number) => (
                                        <div key={index} className="flex items-center gap-3 text-green-600">
                                            <Check className="w-5 h-5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Details */}
                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {locale === 'en' ? 'Technical details:' : 'Thông tin chi tiết:'}
                                </h3>
                                <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                                    {product.details.map((detail: { label: string; value: string }, index: number) => (
                                        <div key={index} className="flex items-start">
                                            <span className="w-32 text-gray-600 shrink-0 font-medium">{detail.label}:</span>
                                            <span className="text-gray-900">{detail.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Websites */}
                    {relatedWebsites.length > 0 && (
                        <section data-aos="fade-up">
                            <h2 className="text-2xl font-bold text-primary mb-8 uppercase">
                                {locale === 'en' ? 'Similar templates' : 'Website tương tự'}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {relatedWebsites.map((website) => (
                                    <Link
                                        key={website.slug}
                                        href={`/mau-website/${website.slug}`}
                                        className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={website.mainImages[0]}
                                                alt={website.title}
                                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 text-sm">
                                                {website.title}
                                            </h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-1 text-amber-500">
                                                    <Star className="w-4 h-4 fill-current" />
                                                    <span className="text-sm">{website.rating}</span>
                                                </div>
                                                <span className="text-primary font-medium text-sm">{website.price}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>

            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
            <Footer />
        </div>
    )
}
