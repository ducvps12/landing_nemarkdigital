'use client'

import { useState, useEffect } from 'react'
// Common components
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'

import CTAWithForm from '@/components/common/cta/CTAWithForm'
import ContactModal from '@/components/common/modal/ContactModal'

// Digital Branding components
import HeroSection from '@/components/digital-branding/HeroSection'
import WhyBrandSection from '@/components/digital-branding/WhyBrandSection'
import BenefitsSection from '@/components/digital-branding/BenefitsSection'
import SolutionsSection from '@/components/digital-branding/SolutionsSection'
import GrowthBanner from '@/components/digital-branding/GrowthBanner'
import BrandProcessSection from '@/components/digital-branding/BrandProcessSection'
import WhyChooseSection from '@/components/digital-branding/WhyChooseSection'

export default function DigitalBrandingPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    // Initialize AOS
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            {/* Hero Section */}
            <HeroSection onOpenContactModal={() => setIsContactModalOpen(true)} />

            {/* Why Brand Section */}
            <WhyBrandSection />

            {/* Benefits Section */}
            <BenefitsSection />

            {/* Solutions Section */}
            <SolutionsSection />

            {/* Growth Banner */}
            <GrowthBanner />

            {/* Brand Process Section */}
            <BrandProcessSection />

            {/* Why Choose Section */}
            <WhyChooseSection />

            {/* Footer */}
            <Footer />
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />

            
        </div>
    )
}
