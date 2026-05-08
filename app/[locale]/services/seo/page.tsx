'use client'

import { useState, useEffect } from 'react'
// Common components
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import CTAWithForm from '@/components/common/cta/CTAWithForm'
import ContactModal from '@/components/common/modal/ContactModal'

// SEO page components
import HeroSection from '@/components/seo/HeroSection'
import ChallengesSection from '@/components/seo/ChallengesSection'
import SolutionBanner from '@/components/seo/SolutionBanner'
import ServicesSection from '@/components/seo/ServicesSection'
import BenefitsSection from '@/components/seo/BenefitsSection'
import CommitmentSection from '@/components/seo/CommitmentSection'
import PricingSection from '@/components/seo/PricingSection'
import ProcessSection from '@/components/seo/ProcessSection'

export default function SEOPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    // Initialize AOS
    return (
        <div className="min-h-screen overflow-x-hidden bg-white">
            {/* Header */}
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            {/* Hero Section */}
            <HeroSection onOpenContactModal={() => setIsContactModalOpen(true)} />

            {/* Challenges Section */}
            <ChallengesSection />

            {/* Solution Banner */}
            <SolutionBanner />

            {/* Services Section */}
            <ServicesSection />

            {/* Benefits Section */}
            <BenefitsSection />

            {/* Commitment Section */}
            <CommitmentSection />

            {/* Pricing Section */}
            <PricingSection />

            {/* Process Section */}
            <ProcessSection />

            {/* CTA & Contact Form */}
            <CTAWithForm />

            {/* Footer */}
            <Footer />
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />


        </div>
    )
}
