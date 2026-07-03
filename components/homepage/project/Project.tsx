'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { useTranslations, useLocale } from 'next-intl'
import { websiteTemplates, getTranslatedTemplate } from '@/lib/websiteData'

export default function Project() {
    const t = useTranslations('projectSection')
    const locale = useLocale()
    const [activeCategory, setActiveCategory] = useState(t('categories.all'))

    const categoryKeys = ['all', 'selling', 'interior', 'realEstate', 'intro', 'education'] as const
    const categories = categoryKeys.map(key => t(`categories.${key}`))

    const projects = websiteTemplates.map((template) => {
        const transTemplate = getTranslatedTemplate(template, locale)
        return {
            category: t(`categories.${transTemplate.category}`),
            title: transTemplate.title,
            image: transTemplate.image,
            slug: transTemplate.slug,
        }
    })

    const filteredProjects = activeCategory === t('categories.all')
        ? projects
        : projects.filter(p => p.category === activeCategory)

    return (
        <section id="projects" className="py-20 bg-slate-50 mx-auto">
            <div className="w-[80%] mx-auto">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        {t('title')} <span className="text-primary">{t('titleHighlight')}</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
                        {t('description')}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === category
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-white text-slate-700 hover:bg-slate-100'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="relative" data-aos="fade-up">
                    <Swiper
                        modules={[Navigation, Pagination, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        loop={true}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        className="project-swiper"
                    >
                        {filteredProjects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <Link href={`/mau-website/${project.slug}`}>
                                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2" style={{ perspective: '1000px' }}>
                                        <div className="relative aspect-[3/4] overflow-hidden">
                                            <div className="image-scroll-container">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full object-cover object-top"
                                                />
                                            </div>

                                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent">
                                                <h4 className="text-white text-sm font-bold text-center">
                                                    {project.title}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style jsx global>{`
                .project-swiper {
                    padding-bottom: 50px !important;
                    padding-top: 50px !important;
                }
                
                .project-swiper .swiper-slide {
                    width: 350px !important;
                }
                
                .project-swiper .swiper-button-next,
                .project-swiper .swiper-button-prev {
                    color: #0EA5E9;
                    background: transparent;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
                
                .project-swiper .swiper-button-next:after,
                .project-swiper .swiper-button-prev:after {
                    font-size: 16px;
                    font-weight: 600;
                    transform: scale(0.7);
                }
                
                .project-swiper .swiper-pagination-bullet-active {
                    background: #0EA5E9;
                }
                
                .image-scroll-container {
                    position: relative;
                    height: 100%;
                    overflow: hidden;
                }
                
                .image-scroll-container img {
                    display: block;
                    width: 100%;
                    min-height: 100%;
                    transition: transform 4s ease-in-out;
                    transform: translateY(0);
                }
                
                .group:hover .image-scroll-container img {
                    transform: translateY(calc(-100% + 466px));
                }
            `}</style>
        </section>
    )
}
