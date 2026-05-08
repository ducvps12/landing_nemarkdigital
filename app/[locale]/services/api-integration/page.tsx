'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'
import CTAWithForm from '@/components/common/cta/CTAWithForm'
// API Integration page sections
import HeroSection from './components/HeroSection'
import ProblemsSection from './components/ProblemsSection'
import ServicesSection from './components/ServicesSection'
import WhyUsSection from './components/WhyUsSection'
import CommitmentSection from './components/CommitmentSection'
import PricingSection from './components/PricingSection'
import ProcessSection from './components/ProcessSection'

export default function ApiIntegrationPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    useEffect(() => {
        document.documentElement.classList.remove('dark')
    }, [])

    return (
        <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            <main className="flex flex-col">
                <HeroSection />
                <ProblemsSection />
                <ServicesSection onOpenContactModal={() => setIsContactModalOpen(true)} />
                <WhyUsSection />
                <CommitmentSection />
                <PricingSection />
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
