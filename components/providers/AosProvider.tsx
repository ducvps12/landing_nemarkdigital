'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AosProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    useEffect(() => {
        // Safe AOS Init function
        const initAOS = () => {
            if (document.body.classList.contains('aos-is-initialized')) return
            AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true,
                offset: 100
            })
            document.body.classList.add('aos-is-initialized')
        }

        // Wait for all React 18 Suspense boundaries and Hydrations to finish
        // by listening strictly to window 'load' or heavily deferring if already loaded
        if (document.readyState === 'complete') {
            setTimeout(initAOS, 500) // Fallback delay for Suspense streaming
        } else {
            window.addEventListener('load', () => setTimeout(initAOS, 100))
        }

        const handleResize = () => AOS.refresh()
        window.addEventListener('resize', handleResize)
        
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Refresh AOS instances smoothly when NEXT.js SPA router injects new pages
    useEffect(() => {
        // give React DOM a tiny delay to paint newly injected nodes
        const timeout = setTimeout(() => {
            AOS.refreshHard()
        }, 100)
        return () => clearTimeout(timeout)
    }, [pathname])

    return <>{children}</>
}
