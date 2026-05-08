'use client'

import { useState, useEffect } from 'react'
// Common components
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'

// Startup page sections
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import ProblemsSection from './components/ProblemsSection'
import ValuesSection from './components/ValuesSection'
import SolutionsFitSection from './components/SolutionsFitSection'
import RoadmapSection from './components/RoadmapSection'
import CTABannerSection from './components/CTABannerSection'
import WhyNemarkSection from './components/WhyNemarkSection'
import PartnershipSection from './components/PartnershipSection'
import CTAWithForm from '@/components/common/cta/CTAWithForm'

export default function StartupPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    useEffect(() => {
        // Remove dark mode for this page (light theme)
        document.documentElement.classList.remove('dark')
    }, [])

    const openModal = () => setIsContactModalOpen(true)
    const closeModal = () => setIsContactModalOpen(false)

    return (
        <div className="min-h-screen bg-white text-slate-800">
            {/* Header with Contact Modal trigger */}
            <Header onOpenContactModal={openModal} />

            <main className="flex flex-col">
                {/* Hero Section - Giải pháp công nghệ cho Startup */}
                <HeroSection onOpenContactModal={openModal} />

                {/* Stats Section - Những con số ấn tượng */}
                <StatsSection />

                {/* Problems Section - Thực trạng Startup */}
                <ProblemsSection />

                {/* Values Section - Giá trị Nemark mang lại */}
                <ValuesSection />

                {/* Solutions Fit Section - Giải pháp cốt lõi */}
                <SolutionsFitSection />

                {/* CTA Banner Section */}
                <CTABannerSection onOpenContactModal={openModal} />

                {/* Roadmap Section - Lộ trình phát triển */}
                <RoadmapSection />

                {/* Why Nemark Section - Lý do tin tưởng */}
                <WhyNemarkSection />

                {/* Partnership Section - Đồng hành cùng Startup */}
                <PartnershipSection />

            </main>

            {/* Footer */}
            <Footer />

            {/* Contact Modal */}
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={closeModal}
            />
        </div>
    )
}
