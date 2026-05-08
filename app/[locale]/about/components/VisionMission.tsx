'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

const VISION_IMAGE = 'https://sf-static.upanhlaylink.com/img/image_202601158bd4f292375edb00e016d9aaeb24a14e.jpg'
const MISSION_IMAGE = '/images/vision.png'

export default function VisionMission() {
    const tV = useTranslations('aboutPage.vision')
    const tM = useTranslations('aboutPage.mission')

    return (
        <section className="py-16 lg:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12" data-aos="fade-up">
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary uppercase tracking-wide">
                            {tV('title')}
                        </h2>
                        <p className="text-primary italic text-lg">
                            {tV('tagline')}
                        </p>
                        <div className="space-y-4 text-text-secondary leading-relaxed">
                            <p dangerouslySetInnerHTML={{ __html: tV.raw('p1') }} />
                            <p dangerouslySetInnerHTML={{ __html: tV.raw('p2') }} />
                        </div>
                    </div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                        <Image src={VISION_IMAGE} alt={tV('title')} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                </div>

                <div className="w-full h-px bg-primary my-8" />

                {/* Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                        <Image src={MISSION_IMAGE} alt={tM('title')} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                    <div className="space-y-4 order-1 md:order-2">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary uppercase tracking-wide">
                            {tM('title')}
                        </h2>
                        <p className="text-primary italic text-lg">
                            {tM('tagline')}
                        </p>
                        <div className="text-text-secondary leading-relaxed">
                            <p dangerouslySetInnerHTML={{ __html: tM.raw('content') }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
