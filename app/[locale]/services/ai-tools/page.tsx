'use client'
import { useState, useEffect } from 'react'
import HeroSection from '@/components/ai-tools/HeroSection'
import BenefitsSection from '@/components/ai-tools/BenefitsSection'
import PricingSection from '@/components/ai-tools/PricingSection'
import ProcessSection from '@/components/ai-tools/ProcessSection'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'

export default function AIToolsPage() {
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
