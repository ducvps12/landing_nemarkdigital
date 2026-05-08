'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';
import ContactModal from '@/components/common/modal/ContactModal';
import CTAWithForm from '@/components/common/cta/CTAWithForm';
import HeroSection from '@/components/business-email/HeroSection';
import ValuePropositionSection from '@/components/business-email/ValuePropositionSection';
import BenefitsSection from '@/components/business-email/BenefitsSection';
import PricingSection from '@/components/business-email/PricingSection';
import ContentSection from '@/components/business-email/ContentSection';
import ProcessSection from '@/components/business-email/ProcessSection';

export default function BusinessEmailPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    // Initialize AOS
    return (
        <>
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />
            <main className="min-h-screen overflow-x-hidden">
                <HeroSection onOpenContactModal={() => setIsContactModalOpen(true)} />
                <ValuePropositionSection />
                <BenefitsSection />
                <PricingSection />
                <ContentSection />
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
