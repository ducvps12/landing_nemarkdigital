'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'
// About page sections
import HeroBanner from './components/HeroBanner'
import Introduction from './components/Introduction'
import VisionMission from './components/VisionMission'
import CoreValues from './components/CoreValues'
import LeadershipTeam from './components/LeadershipTeam'
import CultureBanner from './components/CultureBanner'
import Testimonials from './components/Testimonials'
import NewsSection from './components/NewsSection'

export default function AboutPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    useEffect(() => {
        // Initialize AOS animation library
        // Light mode - no dark class needed
    }, [])

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            <main className="flex flex-col">
                {/* Hero Banner with Slider */}
                <HeroBanner />

                {/* Introduction Section */}
                <Introduction />

                {/* Vision & Mission */}
                <VisionMission />

                {/* Core Values */}
                <CoreValues />

                {/* Leadership Team */}
                <LeadershipTeam />

                {/* Culture Banner */}
                <CultureBanner />

                {/* Client Testimonials */}
                <Testimonials />

                {/* News Section with 5 articles */}
                <NewsSection />
            </main>

            <Footer />

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    )
}
