'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

// Counter component with animation
function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const counterRef = useRef<HTMLDivElement>(null)

    // Extract number from string (e.g., "16,868+" -> 16868)
    const extractNumber = (str: string) => {
        const numStr = str.replace(/[^0-9]/g, '')
        return parseInt(numStr) || 0
    }

    // Get suffix (e.g., "+", "%")
    const getSuffix = (str: string) => {
        const match = str.match(/[+%]/g)
        return match ? match.join('') : ''
    }

    // Format number with commas
    const formatNumber = (num: number) => {
        return num.toLocaleString('en-US')
    }

    const targetNumber = extractNumber(value)
    const suffix = getSuffix(value)

    useEffect(() => {
        if (!counterRef.current || hasAnimated) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true)

                    const startTime = Date.now()
                    const endTime = startTime + duration

                    const updateCount = () => {
                        const now = Date.now()
                        const progress = Math.min((now - startTime) / duration, 1)

                        // Easing function for smooth animation
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
                        const currentCount = Math.floor(easeOutQuart * targetNumber)

                        setCount(currentCount)

                        if (progress < 1) {
                            requestAnimationFrame(updateCount)
                        } else {
                            setCount(targetNumber)
                        }
                    }

                    requestAnimationFrame(updateCount)
                }
            },
            { threshold: 0.3 }
        )

        observer.observe(counterRef.current)

        return () => observer.disconnect()
    }, [targetNumber, duration, hasAnimated])

    return (
        <div ref={counterRef} suppressHydrationWarning>
            {formatNumber(count)}{suffix}
        </div>
    )
}

export default function Introduction1() {
    const t = useTranslations('intro1')

    const statsRow1 = [
        { value: '16,868+', label: t('stats.customers') },
        { value: '860+', label: t('stats.deployed') },
        { value: '6+', label: t('stats.experience') },
    ]

    const statsRow2 = [
        { value: '5000+', label: t('stats.vps') },
        { value: '500+', label: t('stats.systems') },
        { value: '98%', label: t('stats.satisfaction') },
    ]

    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Grid: Image Left, Content Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" data-aos="fade-up">
                    {/* Left Column - Image Only */}
                    <div className="relative">
                        <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02] cursor-pointer">
                            <Image
                                src="/introduct1/nemark-team-meeting.png"
                                alt="Banner Nemark"
                                fill
                                quality={90}
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column - Stats Grid + Text Content */}
                    <div className="space-y-0">
                        {/* Stats Row 1 */}
                        <div className="grid grid-cols-3">
                            {statsRow1.map((stat, index) => (
                                <div
                                    key={index}
                                    className="p-4 text-center"
                                >
                                    <div className="text-2xl lg:text-4xl font-bold text-primary mb-1">
                                        <AnimatedCounter value={stat.value} duration={2000} />
                                    </div>
                                    <div className="text-sm lg:text-base text-slate-600">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats Row 2 */}
                        <div className="grid grid-cols-3">
                            {statsRow2.map((stat, index) => (
                                <div
                                    key={index}
                                    className="p-4 text-center"
                                >
                                    <div className="text-2xl lg:text-4xl font-bold text-primary mb-1">
                                        <AnimatedCounter value={stat.value} duration={2000} />
                                    </div>
                                    <div className="text-sm lg:text-base text-slate-600">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Text Content - Stacked Vertically */}
                        <div className="space-y-4 mt-6">
                            {/* Text 1 */}
                            <div className="p-6">
                                <p className="text-slate-800 leading-relaxed text-sm font-medium">
                                    {t.rich('text1', {
                                        strong: (chunks) => <strong>{chunks}</strong>,
                                        b: (chunks) => <strong>{chunks}</strong>,
                                        i: (chunks) => <em>{chunks}</em>,
                                        br: () => <br />,
                                    })}
                                </p>
                            </div>

                            {/* Text 2 */}
                            <div className="p-6">
                                <p className="text-slate-800 leading-relaxed text-sm font-medium">
                                    {t.rich('text2', {
                                        strong: (chunks) => <strong>{chunks}</strong>,
                                        b: (chunks) => <strong>{chunks}</strong>,
                                        i: (chunks) => <em>{chunks}</em>,
                                        br: () => <br />,
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
