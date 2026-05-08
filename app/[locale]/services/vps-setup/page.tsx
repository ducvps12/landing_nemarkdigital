'use client'
import { useState, useEffect } from 'react'
import HeroSection from '@/components/vps-setup/HeroSection'
import BenefitsSection from '@/components/vps-setup/BenefitsSection'
import PricingSection from '@/components/vps-setup/PricingSection'
import ProcessSection from '@/components/vps-setup/ProcessSection'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'

export default function VPSSetupPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    return (
        <>
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />
            <main className="min-h-screen">
                <HeroSection onOpenContactModal={() => setIsContactModalOpen(true)} />
                <BenefitsSection />
                <PricingSection onOpenContactModal={() => setIsContactModalOpen(true)} />
                <ProcessSection />
            </main>
            <Footer />
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    )
}
