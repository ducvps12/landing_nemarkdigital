'use client'

import { useState, useEffect } from 'react'
// Common components
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'

import CTAWithForm from '@/components/common/cta/CTAWithForm'
import ContactModal from '@/components/common/modal/ContactModal'

// Update-Optimization page components
import HeroSection from '@/components/update-optimization/HeroSection'
import ProblemsSection from '@/components/update-optimization/ProblemsSection'
import SolutionBanner from '@/components/update-optimization/SolutionBanner'
import BenefitsSection from '@/components/update-optimization/BenefitsSection'
import PricingSection from '@/components/update-optimization/PricingSection'
import ProcessSection from '@/components/update-optimization/ProcessSection'
import CTABanner from '@/components/update-optimization/CTABanner'
import ContactSection from '@/components/update-optimization/ContactSection'

export default function UpdateOptimizationPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    // Initialize AOS
    return (
        <div className="min-h-screen overflow-x-hidden bg-white">
            {/* Header */}
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            {/* Hero Section */}
            <HeroSection onOpenContactModal={() => setIsContactModalOpen(true)} />

            {/* Problems Section */}
            <ProblemsSection />

            {/* Solution Banner */}
            <SolutionBanner />

            {/* Benefits Section */}
            <BenefitsSection />

            {/* Pricing Section */}
            <PricingSection />

            {/* Process Section */}
            <ProcessSection />

            {/* Footer */}
            <Footer />
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    )
}
