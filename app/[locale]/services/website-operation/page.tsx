'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'
// Website Operation page sections
import HeroSection from './components/HeroSection'
import ProblemsSection from './components/ProblemsSection'
import ServicesSection from './components/ServicesSection'
import BenefitsSection from './components/BenefitsSection'
import ProcessSection from './components/ProcessSection'

export default function WebsiteOperationPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    useEffect(() => {
        // Remove dark mode for this page (light theme)
        document.documentElement.classList.remove('dark')
    }, [])

    return (
        <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            <main className="flex flex-col">
                {/* Hero Section - Tăng tốc & bảo mật website toàn diện */}
                <HeroSection />

                {/* Problems Section - Tác hại của website chậm & không bảo mật */}
                <ProblemsSection />

                {/* Services Section - Dịch vụ tăng tốc & bảo mật */}
                <ServicesSection />

                {/* Benefits Section - Lợi ích sau khi triển khai */}
                <BenefitsSection />

                {/* Process Section - Quy trình triển khai */}
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
