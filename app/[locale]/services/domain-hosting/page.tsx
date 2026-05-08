'use client'
import { useState, useEffect } from 'react'
import HeroSection from '@/components/domain-hosting/HeroSection';
import HostingPricingSection from '@/components/domain-hosting/HostingPricingSection';
import DomainPricingSection from '@/components/domain-hosting/DomainPricingSection';
import VietnamDomainTable from '@/components/domain-hosting/VietnamDomainTable';
import InternationalDomainTable from '@/components/domain-hosting/InternationalDomainTable';
import ProcessSection from '@/components/domain-hosting/ProcessSection';
import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';
import ContactModal from '@/components/common/modal/ContactModal';

import CTAWithForm from '@/components/common/cta/CTAWithForm'

export default function DomainHostingPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    // Initialize AOS
    return (
        <>
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />
            <main className="min-h-screen overflow-x-hidden">
                <HeroSection onOpenContactModal={() => setIsContactModalOpen(true)} />
                <HostingPricingSection />
                <DomainPricingSection />
                <VietnamDomainTable />
                <InternationalDomainTable />
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
