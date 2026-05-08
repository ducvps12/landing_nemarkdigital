'use client'

import { useState, useEffect } from 'react'
// Common components
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'

import CTAWithForm from '@/components/common/cta/CTAWithForm'
import ContactModal from '@/components/common/modal/ContactModal'

// Online Sales page components
import HeroSection from '@/components/online-sales/HeroSection'
import StatisticsSection from '@/components/online-sales/StatisticsSection'
import BenefitsSection from '@/components/online-sales/BenefitsSection'
import SolutionsSection from '@/components/online-sales/SolutionsSection'
import SalesModelsSection from '@/components/online-sales/SalesModelsSection'
import WhyNemarkSection from '@/components/online-sales/WhyNemarkSection'

export default function OnlineSalesPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    // Initialize AOS
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            {/* Hero Section */}
            <HeroSection onOpenContactModal={() => setIsContactModalOpen(true)} />

            {/* Statistics Section */}
            <StatisticsSection />

            {/* Benefits Section */}
            <BenefitsSection />

            {/* Solutions Section */}
            <SolutionsSection />

            {/* Sales Models Section */}
            <SalesModelsSection />

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
