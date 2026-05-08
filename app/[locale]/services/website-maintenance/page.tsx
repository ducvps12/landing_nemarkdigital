'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'
import CTAWithForm from '@/components/common/cta/CTAWithForm'
// Website Maintenance page sections
import HeroSection from './components/HeroSection'
import ProblemsSection from './components/ProblemsSection'
import PricingSection from './components/PricingSection'
import CommitmentSection from './components/CommitmentSection'
import ProcessSection from './components/ProcessSection'

export default function WebsiteMaintenancePage() {
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
                <PricingSection />
                <CommitmentSection />
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
