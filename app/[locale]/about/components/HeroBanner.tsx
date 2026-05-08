'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

const BANNER_IMAGE = 'https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg'

export default function HeroBanner() {
    const t = useTranslations('aboutPage.hero')

    return (
        <div className="relative w-full h-[60vh] min-h-[400px] pt-20 overflow-hidden" data-hero>
            <Image
                src={BANNER_IMAGE}
                alt="About Nemark Banner"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-[1]" />
            <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-center px-6">
                <span className="inline-block py-1.5 px-5 rounded-full bg-white/15 text-white border border-white/25 text-xs font-bold uppercase tracking-[0.2em] mb-5 backdrop-blur-sm">
                    {t('badge')}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight drop-shadow-lg mb-4">
                    {t('title')}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                        {t('titleHighlight')}
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed drop-shadow-md">
                    {t('subtitle')}
                </p>
            </div>
        </div>
    )
}
