'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, Heart, ArrowUpRight, ExternalLink } from 'lucide-react'
import ContactModal from '@/components/common/modal/ContactModal'
import { websiteTemplates, listingCategories } from '@/lib/websiteData'

export default function MauWebsitePage() {
    const searchParams = useSearchParams()
    const categoryParam = searchParams.get('category')

    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all')
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        if (categoryParam) {
            setSelectedCategory(categoryParam)
        }
    }, [categoryParam])

    const categories = listingCategories

    const websites = websiteTemplates.map((t, i) => ({
        id: i + 1,
        title: t.title,
        slug: t.slug,
        image: t.image,
        category: t.categoryId,
        categoryLabel: t.categoryLabel,
        demoUrl: t.demoUrl,
    }))

    const filteredWebsites = websites.filter(website => {
        const matchesCategory = selectedCategory === 'all' || website.category === selectedCategory
        const matchesSearch = website.title.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            {/* Hero Section */}
            <section className="pt-28 pb-14 relative overflow-hidden bg-gradient-to-br from-[#1e2a5e] via-[#3953D4] to-[#2563eb]">
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
                </div>
                <div className="max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10 text-center" data-aos="fade-up">
                    <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                        Bộ Sưu Tập <span className="text-blue-200">Mẫu Website</span>
                    </h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-8">
                        Khám phá các mẫu website đẹp, hiện đại và chuyên nghiệp nhất.
                    </p>
                </div>
            </section>

            <main className="py-10 flex-1">
                <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
                    
                    {/* Filter and Search Bar Container */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 lg:p-5 mb-8 -mt-8 relative z-20 flex flex-col lg:flex-row gap-4 items-center justify-between" data-aos="fade-up">

                        {/* Horizontal Filter Chip Group */}
                        <div className="w-full lg:w-[calc(100%-20rem)] overflow-hidden">
                            <div className="flex items-center gap-2 overflow-x-auto pb-3 lg:pb-0 scrollbar-hide snap-x">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`snap-start shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border flex items-center gap-1.5 ${
                                            selectedCategory === cat.id
                                                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                                                : 'bg-white text-gray-600 border-gray-200 hover:border-primary/40 hover:text-primary hover:bg-blue-50/50'
                                        }`}
                                    >
                                        <span>{cat.name}</span>
                                        <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                                            selectedCategory === cat.id 
                                                ? 'bg-blue-400/30 text-white' 
                                                : 'bg-gray-100 text-gray-500'
                                        }`}>
                                            {cat.count}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full lg:w-72 shrink-0">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm giao diện..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                            />
                        </div>
                    </div>

                    {/* Results Count Text */}
                    <div className="mb-6 text-gray-600 text-sm font-medium" data-aos="fade-up" data-aos-delay="100">
                        Hiển thị <span className="text-primary font-bold">{filteredWebsites.length}</span> kết quả
                    </div>

                    {/* Main Content - Website Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
                        {filteredWebsites.map((website, index) => (
                            <div
                                key={website.id}
                                className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={(index % 4) * 50}
                            >
                                {/* Media Shell */}
                                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                                    <Link href={`/mau-website/${website.slug}`} className="block w-full h-full relative cursor-pointer">
                                        {/* Image Zoom Hover effect */}
                                        <img
                                            src={website.image}
                                            alt={website.title}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                        
                                        {/* Overlay (Hidden by default, shown on hover via CSS) */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                            <span className="px-6 py-2.5 bg-white text-gray-900 text-sm font-bold rounded-full shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                                Xem chi tiết <ArrowUpRight className="w-4 h-4" />
                                            </span>
                                        </div>

                                        {/* Badges */}
                                        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                                            <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-800 text-[11px] font-bold uppercase tracking-wider rounded-md shadow-sm">
                                                {website.categoryLabel}
                                            </span>
                                        </div>
                                    </Link>

                                    {/* Favorite Button */}
                                    <button 
                                        type="button" 
                                        className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white shadow-sm transition-all hover:scale-110 active:scale-95 group/fav"
                                        aria-label="Thêm vào danh sách quan tâm"
                                    >
                                        <Heart className="w-4 h-4 group-hover/fav:fill-current transition-colors" />
                                    </button>
                                </div>

                                {/* Card Body */}
                                <div className="p-5 flex flex-col flex-1 border-t border-gray-50">
                                    <div className="flex-1">
                                        <Link href={`/mau-website/${website.slug}`}>
                                            <h3 className="font-bold text-gray-900 text-[15px] leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2" title={website.title}>
                                                {website.title}
                                            </h3>
                                        </Link>
                                    </div>

                                    {/* Footer Actions */}
                                    <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-gray-100">
                                        <Link 
                                            href={`/mau-website/${website.slug}`}
                                            className="flex items-center justify-center py-2.5 px-3 rounded-xl text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                                        >
                                            Chi tiết
                                        </Link>
                                        
                                        <Link 
                                            href={`/demo/${website.slug}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                                        >
                                            <span>Xem Mẫu</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredWebsites.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                            <div className="text-gray-300 mb-4">
                                <Search className="w-12 h-12 mx-auto" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Không tìm thấy kết quả
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Thử tìm kiếm với từ khóa khác hoặc chọn <button onClick={() => {setSearchTerm(''); setSelectedCategory('all')}} className="text-primary font-medium hover:underline">Tất cả mẫu website</button>
                            </p>
                        </div>
                    )}
                </div>
            </main>

            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
            <Footer />
        </div>
    )
}
