'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'
import Link from 'next/link'
import { websiteTemplates, listingCategories } from '@/lib/websiteData'
import { ExternalLink } from 'lucide-react'

export default function ProjectsPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('all')
    const t = useTranslations('projectsPage')

    const filteredProjects = selectedCategory === 'all'
        ? websiteTemplates
        : websiteTemplates.filter(t => t.categoryId === selectedCategory)

    const statsColors = ['blue', 'green', 'purple', 'orange']

    return (
        <div className="min-h-screen bg-white text-black">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            <main className="flex flex-col items-center w-full">
                {/* Hero */}
                <div className="w-full bg-gradient-to-br from-primary-dark to-primary py-20 pt-32">
                    <div suppressHydrationWarning className="max-w-7xl mx-auto px-4 md:px-8 text-center" data-aos="fade-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">{t('hero.title')}</h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">{t('hero.subtitle')}</p>
                    </div>
                </div>

                {/* Breadcrumbs */}
                <div suppressHydrationWarning className="w-full max-w-7xl px-4 md:px-8 pt-8 pb-4" data-aos="fade-up">
                    <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                        <Link className="text-primary font-medium hover:underline" href="/">{t('breadcrumb.home')}</Link>
                        <span className="text-slate-500">/</span>
                        <span className="text-slate-900 font-semibold">{t('breadcrumb.projects')}</span>
                    </div>
                </div>

                {/* Stats */}
                <div suppressHydrationWarning className="w-full max-w-7xl px-4 md:px-8 py-12" data-aos="fade-up">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i, idx) => (
                            <div key={i} className={`text-center p-6 bg-gradient-to-br from-${statsColors[idx]}-50 to-${statsColors[idx]}-100 rounded-xl border border-${statsColors[idx]}-200 hover:shadow-lg transition-shadow`}>
                                <div className={`text-4xl font-bold text-${statsColors[idx]}-600 mb-2`}>{t(`stats.s${i}Value`)}</div>
                                <div className="text-slate-700 font-medium">{t(`stats.s${i}Label`)}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category Filter */}
                <div suppressHydrationWarning className="w-full max-w-7xl px-4 md:px-8 py-8" data-aos="fade-up">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {listingCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${selectedCategory === cat.id ? 'bg-primary text-white shadow-lg' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                            >
                                <span>{cat.name}</span>
                                {cat.count > 0 && (
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-500'}`}>
                                        {cat.count}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="w-full max-w-7xl px-4 md:px-8 py-8 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, displayIdx) => (
                            <div
                                suppressHydrationWarning
                                key={project.slug}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 flex flex-col"
                                data-aos="fade-up"
                                data-aos-delay={(displayIdx % 3) * 100}
                            >
                                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100 shrink-0">
                                    <Link href={`/mau-website/${project.slug}`}>
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                                    </Link>
                                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary shadow-lg">{project.price}</div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-primary-light text-primary text-xs font-semibold rounded-full">{project.categoryLabel}</span>
                                    </div>
                                    <Link href={`/mau-website/${project.slug}`}>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2" title={project.title}>
                                            {project.title}
                                        </h3>
                                    </Link>
                                    <p className="text-sm text-slate-600 mb-4">
                                        <span className="font-semibold">Thời gian triển khai:</span> {project.time}
                                    </p>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2 min-h-[40px]">{project.description}</p>
                                    
                                    {project.tags && project.tags.length > 0 && (
                                        <div className="mb-4">
                                            <div className="text-xs font-semibold text-slate-700 mb-2">Đặc điểm / Tính năng:</div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.slice(0, 4).map((tech, i) => (
                                                    <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">{tech}</span>
                                                ))}
                                                {project.tags.length > 4 && <span className="px-2 py-1 bg-slate-50 text-slate-400 text-xs rounded">+{project.tags.length - 4}</span>}
                                            </div>
                                        </div>
                                    )}

                                    <div className="border-t border-slate-200 pt-4 mt-auto mb-4">
                                        <div className="text-xs font-semibold text-slate-700 mb-2">Thông tin đi kèm:</div>
                                        <ul className="space-y-1">
                                            {project.features.slice(0, 3).map((f, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                    <span className="material-icons-outlined text-green-500 text-base mt-0.5">check_circle</span>
                                                    <span className="line-clamp-1">{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                                        <Link 
                                            href={`/mau-website/${project.slug}`}
                                            className="flex items-center justify-center py-2 px-3 rounded-xl text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                                        >
                                            Chi tiết
                                        </Link>
                                        <Link 
                                            href={`/demo/${project.slug}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                                        >
                                            <span>Xem Mẫu</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12 text-slate-500">
                            Không có dự án nào trong danh mục này.
                        </div>
                    )}
                </div>
            </main>

            <Footer />
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </div>
    )
}
