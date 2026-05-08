'use client'

import { useState, useEffect } from 'react'
// Common components
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'

import CTAWithForm from '@/components/common/cta/CTAWithForm'
import ContactModal from '@/components/common/modal/ContactModal'

// Digital Conversion page components
import HeroSection from '@/components/digital-conversion/HeroSection'
import TrendSection from '@/components/digital-conversion/TrendSection'
import BenefitsSection from '@/components/digital-conversion/BenefitsSection'
import SolutionsSection from '@/components/digital-conversion/SolutionsSection'
import GrowthSection from '@/components/digital-conversion/GrowthSection'
import RoadmapSection from '@/components/digital-conversion/RoadmapSection'
import WhyNemarkSection from '@/components/digital-conversion/WhyNemarkSection'

export default function DigitalConversionPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    // Initialize AOS
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            {/* Hero Section */}
            <HeroSection onOpenContactModal={() => setIsContactModalOpen(true)} />

            {/* Trend Section */}
            <TrendSection />

            {/* Benefits Section */}
            <BenefitsSection />

            {/* Solutions Section */}
            <SolutionsSection />

            {/* Growth Section */}
            <GrowthSection />

            {/* Roadmap Section */}
            <RoadmapSection />

            {/* Why Nemark Section */}
            <WhyNemarkSection />

            {/* Footer */}
            <Footer />
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />

        </div>
    )
}
