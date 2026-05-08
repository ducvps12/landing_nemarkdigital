'use client'
import { useState, useEffect } from 'react'
import HeroSection from '@/components/proxy/HeroSection'
import WhyProxySection from '@/components/proxy/WhyProxySection'
import PricingSection from '@/components/proxy/PricingSection'
import ProcessSection from '@/components/proxy/ProcessSection'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'

import CTAWithForm from '@/components/common/cta/CTAWithForm'

export default function ProxyPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    // Initialize AOS
    return (
        <>
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />
            <main className="min-h-screen">
                <HeroSection onOpenContactModal={() => setIsContactModalOpen(true)} />
                <WhyProxySection />
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
