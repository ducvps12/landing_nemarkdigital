// Example: How to use ContactModal in your components

'use client'

import { useState } from 'react'
import ContactModal from '@/components/common/modal/ContactModal'

export default function ExampleUsage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            {/* Button to open modal */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark"
            >
                Liên hệ ngay
            </button>

            {/* Contact Modal */}
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}

/* 
USAGE INSTRUCTIONS:
==================

1. Import the ContactModal component:
   import ContactModal from '@/components/modal/ContactModal'

2. Add state to control modal visibility:
   const [isModalOpen, setIsModalOpen] = useState(false)

3. Add modal to your JSX:
   <ContactModal 
       isOpen={isModalOpen}
       onClose={() => setIsModalOpen(false)}
   />

4. Trigger modal from any button/link:
   onClick={() => setIsModalOpen(true)}

INTEGRATION EXAMPLES:
====================

// In Header.tsx - Replace existing CTA button:
<Link
    href="#contact"
    onClick={(e) => {
        e.preventDefault()
        setIsModalOpen(true)
    }}
    className="..."
>
    <span>Tư vấn ngay</span>
</Link>

// In Banner.tsx - Call-to-action buttons:
<button 
    onClick={() => setIsModalOpen(true)}
    className="..."
>
    Khám phá dự án
</button>

// In Footer.tsx - Floating action button:
<button
    onClick={() => setIsModalOpen(true)}
    className="..."
>
    <span className="material-icons">phone_in_talk</span>
</button>
*/
