'use client'

import { useEffect, useState } from 'react'
// Import Layout Components
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import ContactModal from '@/components/common/modal/ContactModal'
import CTAWithForm from '@/components/common/cta/CTAWithForm'

// Import Website Design Service Components
import WebsiteHero from '@/components/website-design/WebsiteHero'
import WebsiteWhyNeeded from '@/components/website-design/WebsiteWhyNeeded'
import WebsiteBenefits from '@/components/website-design/WebsiteBenefits'
import WebsiteSolutions from '@/components/website-design/WebsiteSolutions'
import WebsiteCommitment from '@/components/website-design/WebsiteCommitment'
import WebsiteOptions from '@/components/website-design/WebsiteOptions'
import WebsitePricing from '@/components/website-design/WebsitePricing'
import WebsiteProcess from '@/components/website-design/WebsiteProcess'

export default function WebsiteDesignServicePage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    // Initialize AOS animations
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />

            {/* Hero Section */}
            <WebsiteHero />

            {/* Why Business Needs Website */}
            <WebsiteWhyNeeded />

            {/* Benefits of Professional Website */}
            <WebsiteBenefits />

            {/* Solutions */}
            <WebsiteSolutions />

            {/* Commitment */}
            <WebsiteCommitment />

            {/* Choose Your Package */}
            <WebsiteOptions />

            {/* Pricing */}
            <WebsitePricing />

            {/* Process */}
            <WebsiteProcess />

            {/* Footer */}
            <Footer />

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    )
}
