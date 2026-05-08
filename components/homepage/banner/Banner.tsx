'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Banner() {
    const [activeSlide, setActiveSlide] = useState(0)
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [lightboxImage, setLightboxImage] = useState('')
    const [lightboxVisible, setLightboxVisible] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    const touchStartX = useRef(0)
    const touchStartY = useRef(0)
    const t = useTranslations('banner')

    const slides = [
        {
            image: '/banner/team-lobby-v2.png',
            title: t('slide1.title'),
            subtitle: t('slide1.subtitle'),
            badge: t('slide1.badge'),
        },
        {
            image: '/banner/banner-strategy.png',
            title: t('slide2.title'),
            subtitle: t('slide2.subtitle'),
            badge: t('slide2.badge'),
        },
        {
            image: '/banner/banner-infrastructure.png',
            title: t('slide3.title'),
            subtitle: t('slide3.subtitle'),
            badge: t('slide3.badge'),
        },
    ]

    const totalSlides = slides.length

    // Handle user slide change
    const goToSlide = useCallback((index: number) => {
        setActiveSlide(index)
    }, [])

    const goNext = useCallback(() => {
        setActiveSlide((prev) => (prev + 1) % totalSlides)
    }, [totalSlides])

    const goPrev = useCallback(() => {
        setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    }, [totalSlides])

    // Open lightbox
    const openLightbox = (imageSrc: string) => {
        setLightboxImage(imageSrc)
        setLightboxOpen(true)
        document.body.style.overflow = 'hidden'
        setTimeout(() => setLightboxVisible(true), 20)
    }

    // Close lightbox
    const closeLightbox = useCallback(() => {
        setLightboxVisible(false)
        setTimeout(() => {
            setLightboxOpen(false)
            setLightboxImage('')
            document.body.style.overflow = ''
        }, 300)
    }, [])

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && lightboxOpen) closeLightbox()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [lightboxOpen, closeLightbox])

    // Touch swipe handlers
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
        touchStartY.current = e.touches[0].clientY
    }, [])

    const handleTouchEnd = useCallback((e: React.TouchEvent) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX.current
        const deltaY = e.changedTouches[0].clientY - touchStartY.current
        // Only trigger if horizontal swipe is dominant and > 50px
        if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
            if (deltaX < 0) {
                // Swipe left → next
                goNext()
            } else {
                // Swipe right → prev
                goPrev()
            }
        }
    }, [goNext, goPrev])

    return (
        <section
            data-hero
            className="relative mt-22 w-full px-4 sm:px-6 lg:px-8"
        >
            {/* Banner Images with Fade Transition */}
            <div
                className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl shadow-2xl cursor-pointer group aspect-3/4 sm:aspect-video md:aspect-16/7"
                style={{ backgroundColor: '#0a1628' }}
                onClick={() => openLightbox(slides[activeSlide].image)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${activeSlide === index ? 'opacity-100 z-1' : 'opacity-0 z-0'}`}
                    >
                        {/* Background Image */}
                        <Image
                            src={slide.image}
                            alt={`Banner ${index + 1}`}
                            fill
                            quality={95}
                            priority={index === 0}
                            sizes="100vw"
                            className="object-cover object-center"
                        />

                        {/* Dark Blue Gradient Overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(to right, rgba(10, 22, 40, 0.85) 0%, rgba(10, 22, 40, 0.70) 40%, rgba(20, 60, 120, 0.35) 70%, rgba(10, 22, 40, 0.25) 100%)',
                            }}
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-center z-10">
                            <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                                <div className="max-w-2xl">
                                    {/* Badge */}
                                    <div
                                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm mb-4 md:mb-6 transition-all duration-700 ${activeSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                        style={{ transitionDelay: '200ms' }}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                        <span className="text-blue-200 text-xs sm:text-sm font-medium tracking-wide">
                                            {slide.badge}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h1
                                        className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-5 transition-all duration-700 ${activeSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                                        style={{ transitionDelay: '400ms', textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
                                    >
                                        {slide.title}
                                    </h1>

                                    {/* Subtitle */}
                                    <p
                                        className={`text-blue-100/80 text-sm sm:text-base md:text-lg leading-relaxed mb-5 md:mb-8 max-w-xl transition-all duration-700 ${activeSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                        style={{ transitionDelay: '600ms' }}
                                    >
                                        {slide.subtitle}
                                    </p>

                                    {/* CTA Button */}
                                    <div
                                        className={`transition-all duration-700 ${activeSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                        style={{ transitionDelay: '800ms' }}
                                    >
                                        <a
                                            href="#cta"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-3.5 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 text-sm md:text-base"
                                        >
                                            {t('ctaButton')}
                                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-1/3 h-full z-2 pointer-events-none hidden lg:block">
                            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl" />
                            <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-cyan-400/5 rounded-full blur-2xl" />
                        </div>

                        {/* Bottom gradient for dots visibility */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#0a1628]/80 to-transparent z-2" />
                    </div>
                ))}

                {/* Zoom hint icon */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        <span className="text-white text-xs font-medium">Xem ảnh</span>
                    </div>
                </div>

                {/* Slide Counter */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10 text-white/50 text-xs md:text-sm font-mono">
                    <span className="text-white font-semibold">{String(activeSlide + 1).padStart(2, '0')}</span>
                    <span className="mx-1">/</span>
                    <span>{String(totalSlides).padStart(2, '0')}</span>
                </div>
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2 md:h-3 rounded-full transition-all duration-300 ${activeSlide === index
                            ? 'bg-blue-400 w-6 md:w-8 shadow-lg shadow-blue-400/30'
                            : 'bg-white/30 hover:bg-white/50 w-2 md:w-3'
                            }`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Lightbox Modal - rendered via Portal to escape stacking context */}
            {mounted && lightboxOpen && createPortal(
                <div
                    className={`fixed inset-0 z-9999 transition-all duration-500 ${lightboxVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ top: 0, left: 0, width: '100vw', height: '100vh' }}
                >
                    {/* Full black backdrop */}
                    <div className="absolute inset-0 bg-black" onClick={closeLightbox} />

                    {/* Fullscreen image */}
                    <div
                        className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${lightboxVisible ? 'scale-100' : 'scale-95'}`}
                    >
                        <img
                            src={lightboxImage}
                            alt="Banner full view"
                            className="w-full h-full object-contain select-none"
                            draggable={false}
                        />
                    </div>

                    {/* Top bar with close */}
                    <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 md:p-6 bg-linear-to-b from-black/70 to-transparent">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">N</span>
                            </div>
                            <span className="text-white/80 text-sm font-medium hidden sm:block">Nemark Digital</span>
                        </div>
                        <button
                            onClick={closeLightbox}
                            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 transition-all duration-200 hover:rotate-90"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation - Left */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            const prevIndex = (activeSlide - 1 + totalSlides) % totalSlides
                            setActiveSlide(prevIndex)
                            setLightboxImage(slides[prevIndex].image)
                        }}
                        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm transition-all duration-200 hover:scale-110"
                    >
                        <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Navigation - Right */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            const nextIndex = (activeSlide + 1) % totalSlides
                            setActiveSlide(nextIndex)
                            setLightboxImage(slides[nextIndex].image)
                        }}
                        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm transition-all duration-200 hover:scale-110"
                    >
                        <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Bottom bar */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 bg-linear-to-t from-black/80 to-transparent p-4 md:p-6">
                        <div className="flex items-center justify-between max-w-4xl mx-auto">
                            <div>
                                <p className="text-white text-sm md:text-lg font-semibold">
                                    {slides[activeSlide].title}
                                </p>
                                <p className="text-white/50 text-xs md:text-sm mt-0.5">
                                    {slides[activeSlide].badge}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setActiveSlide(index)
                                            setLightboxImage(slides[index].image)
                                        }}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === index
                                            ? 'bg-white w-8'
                                            : 'bg-white/30 hover:bg-white/50 w-1.5'
                                            }`}
                                    />
                                ))}
                                <span className="text-white/50 text-xs ml-2 font-mono">
                                    {activeSlide + 1}/{totalSlides}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    )
}
