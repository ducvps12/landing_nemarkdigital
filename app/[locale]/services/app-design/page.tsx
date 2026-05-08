'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'
import CTAWithForm from '@/components/common/cta/CTAWithForm'
// App Design page sections
import HeroSection from './components/HeroSection'
import DifficultiesSection from './components/DifficultiesSection'
import WhyCustomApp from './components/WhyCustomApp'
import NemarkSolutions from './components/NemarkSolutions'
import CTABanner from './components/CTABanner'
import BenefitsSection from './components/BenefitsSection'
import PricingSection from './components/PricingSection'
import ProcessSection from './components/ProcessSection'
import TopAppsShowcase from './components/TopAppsShowcase'

export default function AppDesignPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    useEffect(() => {
        document.documentElement.classList.remove('dark')
    }, [])

    return (
        <div className="min-h-screen bg-white text-slate-800">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            <main className="flex flex-col">
                <HeroSection onOpenContactModal={() => setIsContactModalOpen(true)} />
                <DifficultiesSection />
                <WhyCustomApp />
                <NemarkSolutions />
                <CTABanner />
                <BenefitsSection />
                <PricingSection />
                <TopAppsShowcase />
                <ProcessSection />
                
            </main>

            <Footer />
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    )
}
