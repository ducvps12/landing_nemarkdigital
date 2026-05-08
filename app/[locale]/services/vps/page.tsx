'use client'
import { useState, useEffect } from 'react'
import HeroSection from '@/components/vps/HeroSection';
import BenefitsSection from '@/components/vps/BenefitsSection';
import PricingSection from '@/components/vps/PricingSection';
import ProcessSection from '@/components/vps/ProcessSection';
import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';
import ContactModal from '@/components/common/modal/ContactModal';

import CTAWithForm from '@/components/common/cta/CTAWithForm'

export default function VPSPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    // Initialize AOS
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
    );
}
