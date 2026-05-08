'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
// SME page sections
import HeroSection from './components/HeroSection'
import ProblemsSection from './components/ProblemsSection'
import BenefitsSection from './components/BenefitsSection'
import SolutionsSitemapSection from './components/SolutionsSitemapSection'
import PricingSection from './components/PricingSection'
import CTAWithForm from '@/components/common/cta/CTAWithForm'

// Contact Modal
import ContactModal from '@/components/common/modal/ContactModal'

export default function SMEPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    useEffect(() => {
        // Remove dark mode for this page (light theme)
        document.documentElement.classList.remove('dark')
    }, [])

    return (
        <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            <main className="flex flex-col">
                {/* Hero Section - Giải pháp chuyển đổi số toàn diện cho SME */}
                <HeroSection onOpenContactModal={() => setIsContactModalOpen(true)} />

                {/* Problems Section - Vấn đề SME thường gặp */}
                <ProblemsSection />

                {/* Benefits Section - Lợi ích khi triển khai cùng Nemark */}
                <BenefitsSection />

                {/* Solutions Sitemap - Giải pháp Nemark cung cấp */}
                <SolutionsSitemapSection />

                {/* Pricing Section - Gói giải pháp đề xuất */}
                <PricingSection onOpenContactModal={() => setIsContactModalOpen(true)} />

            </main>

            <Footer />

            {/* Contact Modal */}
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    )
}
