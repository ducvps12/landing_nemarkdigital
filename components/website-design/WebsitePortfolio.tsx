'use client'

import Image from 'next/image'
import { useState } from 'react'

const projects = [
    {
        title: 'E-Commerce Fashion',
        category: 'Thương mại điện tử',
        description: 'Website bán hàng thời trang cao cấp với tích hợp thanh toán online',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop',
        tags: ['E-commerce', 'Payment Integration', 'Inventory'],
        stats: { views: '50K+', conversion: '3.2%' }
    },
    {
        title: 'Tech Startup Landing',
        category: 'Landing Page',
        description: 'Landing page cho startup công nghệ với hiệu ứng hiện đại',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
        tags: ['SaaS', 'Animation', 'Lead Generation'],
        stats: { views: '120K+', conversion: '5.8%' }
    },
    {
        title: 'Real Estate Platform',
        category: 'Bất động sản',
        description: 'Nền tảng đăng tin bất động sản với bộ lọc thông minh',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
        tags: ['Property Listing', 'Search & Filter', 'Maps'],
        stats: { views: '80K+', conversion: '2.5%' }
    },
    {
        title: 'Restaurant & Booking',
        category: 'F&B',
        description: 'Website nhà hàng với hệ thống đặt bàn trực tuyến',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
        tags: ['Booking System', 'Menu', 'Responsive'],
        stats: { views: '35K+', conversion: '4.1%' }
    },
    {
        title: 'Healthcare Portal',
        category: 'Y tế',
        description: 'Cổng thông tin bệnh viện với đặt lịch khám online',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop',
        tags: ['Appointment', 'Patient Portal', 'HIPAA'],
        stats: { views: '200K+', conversion: '6.2%' }
    },
    {
        title: 'Education Platform',
        category: 'Giáo dục',
        description: 'Nền tảng học trực tuyến với hệ thống quản lý khóa học',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop',
        tags: ['LMS', 'Video Streaming', 'Quiz'],
        stats: { views: '150K+', conversion: '7.5%' }
    }
]

const categories = ['Tất cả', 'Thương mại điện tử', 'Landing Page', 'Bất động sản', 'F&B', 'Y tế', 'Giáo dục']

export default function WebsitePortfolio() {
    const [activeCategory, setActiveCategory] = useState('Tất cả')
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)

    const filteredProjects = activeCategory === 'Tất cả'
        ? projects
        : projects.filter(p => p.category === activeCategory)

    return (
        <section id="portfolio" className="py-20" style={{ backgroundColor: '#0f172a' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">
                        Portfolio
                    </span>
                    <h2 className="text-3xl font-display font-bold mt-2" style={{ color: '#ffffff' }}>
                        Dự án tiêu biểu
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#cbd5e1' }}>
                        Khám phá những website chúng tôi đã thiết kế và phát triển cho khách hàng
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12" data-aos="fade-up" data-aos-delay="100">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-primary/50 transition-all duration-500"
                            onMouseEnter={() => setHoveredProject(idx)}
                            onMouseLeave={() => setHoveredProject(null)}
                            data-aos="fade-up"
                            data-aos-delay={idx * 50}
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-primary/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Stats Overlay */}
                                <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${hoveredProject === idx ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                                    }`}>
                                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                                        <span className="text-xs font-bold text-slate-800">{project.stats.views} views</span>
                                    </div>
                                </div>

                                {/* View Button */}
                                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredProject === idx ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                    <button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-lg shadow-xl hover:bg-primary hover:text-white transition-colors transform hover:scale-105">
                                        <span className="material-icons text-lg">visibility</span>
                                        Xem chi tiết
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-slate-300 mt-2 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center" data-aos="fade-up">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all"
                    >
                        Xem tất cả dự án
                        <span className="material-icons">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

