'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'
import HeroSection from './components/HeroSection'
import ProblemsSection from './components/ProblemsSection'
import ServicesSection from './components/ServicesSection'
import BenefitsSection from './components/BenefitsSection'
import ProcessSection from './components/ProcessSection'

export default function SystemSecurityPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    useEffect(() => {
        document.documentElement.classList.remove('dark')
    }, [])

    return (
        <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            <main className="flex flex-col">
                {/* Hero Section */}
                <HeroSection />

                {/* Problems Section */}
                <ProblemsSection />

                {/* Services Section */}
                <ServicesSection />

                {/* Benefits Section */}
                <BenefitsSection />

                {/* Process Section */}
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
