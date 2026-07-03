'use client'

import { useState, useEffect } from 'react'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import ContactModal from '@/components/common/modal/ContactModal'

interface HeaderProps {
    onOpenContactModal?: () => void
}

export default function Header({ onOpenContactModal }: HeaderProps) {
    const t = useTranslations('header')
    const [isScrolled, setIsScrolled] = useState(false)
    const [showServicesMenu, setShowServicesMenu] = useState(false)
    const [showStartupMenu, setShowStartupMenu] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // Mobile menu accordion states
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
    const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
    const [mobileStartupOpen, setMobileStartupOpen] = useState(false)
    const [mobileBlogOpen, setMobileBlogOpen] = useState(false)

    // Internal Modal State
    const [internalContactModalOpen, setInternalContactModalOpen] = useState(false)

    const handleOpenContactModal = () => {
        if (onOpenContactModal) {
            onOpenContactModal()
        } else {
            setInternalContactModalOpen(true)
        }
    }

    useEffect(() => {
        // Scroll observer for header background - checks if banner is in view
        const heroSection = document.querySelector('[data-hero]')
        if (heroSection) {
            const observer = new IntersectionObserver(
                (entries) => {
                    setIsScrolled(!entries[0]?.isIntersecting)
                },
                { threshold: 0.2 }
            )
            observer.observe(heroSection)
            return () => observer.disconnect()
        } else {
            setIsScrolled(true)
        }
    }, [])

    return (
        <header
            className="fixed w-full top-0 z-50 transition-all duration-300 bg-white shadow-lg border-b border-gray-200"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="shrink-0 flex items-center gap-2 cursor-pointer">
                        <Image
                            src="/logo.jpg"
                            alt="Nemark Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-lg object-cover"
                            priority
                        />
                        <span className="font-display font-bold text-2xl tracking-tight transition-colors text-primary-dark">
                            Nemark
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 h-full">
                        <Link
                            href="/about"
                            className="text-sm font-bold transition-colors hover:text-primary hover:underline text-primary-dark uppercase"
                        >
                            {t('about')}
                        </Link>

                        <div
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setShowServicesMenu(true)}
                            onMouseLeave={() => setShowServicesMenu(false)}
                        >
                            <button className={`flex items-center text-sm font-bold transition-all duration-300 uppercase h-full ${showServicesMenu ? 'text-primary' : 'text-primary-dark hover:text-primary'}`}>
                                <span>{t('services')}</span>
                                <span className={`material-icons-outlined text-base ml-1 transition-transform duration-300 ${showServicesMenu ? 'rotate-180' : ''}`}>expand_more</span>
                            </button>
                            <div 
                                className={`fixed left-1/2 -translate-x-1/2 transition-all duration-300 origin-top z-50 ${showServicesMenu ? 'opacity-100 translate-y-0 visible shadow-2xl' : 'opacity-0 translate-y-4 invisible shadow-none'}`}
                                style={{ 
                                    width: '840px', 
                                    maxWidth: 'calc(100vw - 32px)',
                                    top: '80px',
                                    maxHeight: 'calc(100vh - 100px)',
                                    overflowY: 'auto'
                                }}
                            >
                                {/* Invisible hover bridge */}
                                <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                                
                                <div className="bg-white shadow-2xl rounded-2xl border border-slate-200 overflow-hidden relative">
                                    {/* Top accent bar */}
                                    <div className="absolute top-0 left-0 right-0 h-[4px] bg-linear-to-r from-primary to-blue-500" />
                                    
                                    <div className="p-8">
                                        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                                            {/* Left Column */}
                                            <div className="space-y-8">
                                                {/* Web App Design Group */}
                                                <div>
                                                    <div className="flex items-center gap-3 mb-4 px-2">
                                                        <div className="flex w-8 h-8 rounded-md bg-blue-50 items-center justify-center">
                                                            <span className="material-icons-outlined text-primary text-[18px]">devices</span>
                                                        </div>
                                                        <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">{t('servicesMenu.webAppDesign')}</span>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <Link href="/dich-vu/thiet-ke-website" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-primary text-[20px] transition-colors">web</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.websiteDesign')}</span>
                                                        </Link>
                                                        <Link href="/services/app-design" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-primary text-[20px] transition-colors">phone_iphone</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.appDesign')}</span>
                                                        </Link>
                                                        <Link href="/services/ai-tools" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-primary text-[20px] transition-colors">smart_toy</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.aiTools')}</span>
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Website Solutions Group */}
                                                <div>
                                                    <div className="flex items-center gap-3 mb-4 px-2">
                                                        <div className="flex w-8 h-8 rounded-md bg-blue-50 items-center justify-center">
                                                            <span className="material-icons-outlined text-primary text-[18px]">settings_suggest</span>
                                                        </div>
                                                        <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">{t('servicesMenu.websiteSolutions')}</span>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <Link href="/services/update-optimization" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-primary text-[20px] transition-colors">upgrade</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.upgradeOptimize')}</span>
                                                        </Link>
                                                        <Link href="/services/website-maintenance" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-primary text-[20px] transition-colors">build</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.maintenance')}</span>
                                                        </Link>
                                                        <Link href="/services/website-operation" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-primary text-[20px] transition-colors">speed</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.speedSecurity')}</span>
                                                        </Link>
                                                        <Link href="/services/api-integration" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-primary text-[20px] transition-colors">integration_instructions</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.apiIntegration')}</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Column */}
                                            <div className="space-y-8">
                                                {/* SEO & Marketing Group */}
                                                <div>
                                                    <div className="flex items-center gap-3 mb-4 px-2">
                                                        <div className="flex w-8 h-8 rounded-md bg-emerald-50 items-center justify-center">
                                                            <span className="material-icons-outlined text-emerald-600 text-[18px]">trending_up</span>
                                                        </div>
                                                        <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">{t('servicesMenu.seoMarketing')}</span>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <Link href="/services/seo" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-emerald-600 text-[20px] transition-colors">search</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.seoOverall')}</span>
                                                        </Link>
                                                        <Link href="#" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-emerald-600 text-[20px] transition-colors">assessment</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.seoAudit')}</span>
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Infrastructure Group */}
                                                <div>
                                                    <div className="flex items-center gap-3 mb-4 px-2">
                                                        <div className="flex w-8 h-8 rounded-md bg-violet-50 items-center justify-center">
                                                            <span className="material-icons-outlined text-violet-600 text-[18px]">cloud</span>
                                                        </div>
                                                        <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">{t('servicesMenu.infrastructure')}</span>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <Link href="/services/domain-hosting" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-violet-200 group-hover:bg-violet-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-violet-600 text-[20px] transition-colors">dns</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.domainHosting')}</span>
                                                        </Link>
                                                        <Link href="/services/business-email" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-violet-200 group-hover:bg-violet-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-violet-600 text-[20px] transition-colors">email</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.businessEmail')}</span>
                                                        </Link>
                                                        <Link href="/services/vps" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-violet-200 group-hover:bg-violet-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-violet-600 text-[20px] transition-colors">storage</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.vps')}</span>
                                                        </Link>
                                                        <Link href="/services/proxy" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-violet-200 group-hover:bg-violet-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-violet-600 text-[20px] transition-colors">vpn_key</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.proxy')}</span>
                                                        </Link>
                                                        <Link href="/services/infra-management" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-violet-200 group-hover:bg-violet-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-violet-600 text-[20px] transition-colors">settings_ethernet</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.infraManagement')}</span>
                                                        </Link>
                                                        <Link href="/services/system-security" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-violet-200 group-hover:bg-violet-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-violet-600 text-[20px] transition-colors">security</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.systemSecurity')}</span>
                                                        </Link>
                                                        <Link href="/services/vps-setup" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                            <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-violet-200 group-hover:bg-violet-50 transition-colors">
                                                                <span className="material-icons-outlined text-slate-400 group-hover:text-violet-600 text-[20px] transition-colors">terminal</span>
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('servicesMenu.vpsSetup')}</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Startup Solutions Menu */}
                        <div
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setShowStartupMenu(true)}
                            onMouseLeave={() => setShowStartupMenu(false)}
                        >
                            <button className={`flex items-center text-sm font-bold transition-all duration-300 uppercase h-full ${showStartupMenu ? 'text-primary' : 'text-primary-dark hover:text-primary'}`}>
                                <span>{t('solutions')}</span>
                                <span className={`material-icons-outlined text-base ml-1 transition-transform duration-300 ${showStartupMenu ? 'rotate-180' : ''}`}>expand_more</span>
                            </button>
                            <div 
                                className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 transition-all duration-300 origin-top z-50 ${showStartupMenu ? 'opacity-100 translate-y-0 visible shadow-2xl' : 'opacity-0 translate-y-4 invisible shadow-none'}`}
                                style={{ width: '380px', maxWidth: 'calc(100vw - 32px)', maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}
                            >
                                {/* Invisible hover bridge */}
                                <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                                
                                <div className="bg-white shadow-2xl rounded-2xl border border-slate-200 overflow-hidden relative">
                                    {/* Top accent bar */}
                                    <div className="absolute top-0 left-0 right-0 h-[4px] bg-linear-to-r from-primary to-blue-500" />
                                    
                                    <div className="p-6 pt-7">
                                        <div className="space-y-1">
                                            <Link href="/solutions/sme" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                                                    <span className="material-icons-outlined text-slate-400 group-hover:text-primary text-[20px] transition-colors">business</span>
                                                </div>
                                                <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('solutionsMenu.sme')}</span>
                                            </Link>
                                            <Link href="/solutions/startup" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-orange-200 group-hover:bg-orange-50 transition-colors">
                                                    <span className="material-icons-outlined text-slate-400 group-hover:text-orange-500 text-[20px] transition-colors">rocket_launch</span>
                                                </div>
                                                <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('solutionsMenu.startup')}</span>
                                            </Link>
                                            <Link href="/solutions/online-sales" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-colors">
                                                    <span className="material-icons-outlined text-slate-400 group-hover:text-emerald-600 text-[20px] transition-colors">shopping_cart</span>
                                                </div>
                                                <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('solutionsMenu.onlineSales')}</span>
                                            </Link>
                                            <Link href="/solutions/digital-conversion" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-violet-200 group-hover:bg-violet-50 transition-colors">
                                                    <span className="material-icons-outlined text-slate-400 group-hover:text-violet-600 text-[20px] transition-colors">sync_alt</span>
                                                </div>
                                                <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('solutionsMenu.digitalConversion')}</span>
                                            </Link>
                                            <Link href="/solutions/digital-branding" className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                                <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:border-amber-200 group-hover:bg-amber-50 transition-colors">
                                                    <span className="material-icons-outlined text-slate-400 group-hover:text-amber-500 text-[20px] transition-colors">star</span>
                                                </div>
                                                <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{t('solutionsMenu.digitalBranding')}</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link href="/projects" className="text-sm font-bold transition-colors hover:text-primary hover:underline text-primary-dark uppercase">
                            {t('projects')}
                        </Link>
                        <Link href="/careers" className="text-sm font-bold transition-colors hover:text-primary hover:underline text-primary-dark uppercase">
                            {t('careers')}
                        </Link>
                        <Link href="/news" className="text-sm font-bold transition-colors hover:text-primary hover:underline text-primary-dark uppercase">
                            {t('news')}
                        </Link>
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        {/* Language Switcher */}
                        <div className="hidden sm:block">
                            <LanguageSwitcher />
                        </div>
                        {/* CTA Button */}
                        <button
                            onClick={handleOpenContactModal}
                            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all cursor-pointer"
                        >
                            <span className="material-icons-outlined text-base">phone_in_talk</span>
                            <span className="uppercase">{t('contact')}</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-md text-primary-dark"
                        >
                            <span className="material-icons-outlined">menu</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Full Screen Overlay */}
                {mobileMenuOpen && (
                    <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
                        {/* Header with close button */}
                        <div className="flex justify-end items-center p-4">
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 text-slate-600 hover:text-slate-900"
                            >
                                <span className="material-icons-outlined text-3xl">close</span>
                            </button>
                        </div>


                        {/* Menu Items */}
                        <nav className="px-6 pt-4 space-y-1">
                            {/* Language Switcher for Mobile */}
                            <div className="py-3 border-b border-slate-100 flex justify-between items-center mb-4">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Language</span>
                                <LanguageSwitcher />
                            </div>

                            {/* TRANG CHỦ */}
                            <Link href="/" className="block text-sm font-medium text-slate-500 uppercase tracking-wide py-3" onClick={() => setMobileMenuOpen(false)}>{t('home')}</Link>

                            {/* GIỚI THIỆU */}
                            <Link href="/about" className="block text-sm font-medium text-slate-500 uppercase tracking-wide py-3" onClick={() => setMobileMenuOpen(false)}>{t('about')}</Link>

                            {/* DỊCH VỤ - Chỉ dịch vụ */}
                            <div>
                                <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="w-full flex items-center justify-between text-sm font-medium text-slate-500 uppercase tracking-wide py-3">
                                    <span>{t('mobileMenu.services')}</span>
                                    <span className={`material-icons-outlined text-lg transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                {mobileServicesOpen && (
                                    <div className="pl-4 space-y-2 pb-2">
                                        <Link href="/dich-vu/thiet-ke-website" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('servicesMenu.websiteDesign')}</Link>
                                        <Link href="/services/app-design" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('servicesMenu.appDesign')}</Link>
                                        <Link href="/services/seo" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('servicesMenu.seoOverall')}</Link>
                                        <Link href="/services/domain-hosting" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('servicesMenu.domainHosting')}</Link>
                                        <Link href="/services/business-email" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('servicesMenu.businessEmail')}</Link>
                                        <Link href="/services/vps" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('servicesMenu.vps')}</Link>
                                        <Link href="/services/proxy" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('servicesMenu.proxy')}</Link>
                                        <Link href="/services/infra-management" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('servicesMenu.infraManagement')}</Link>
                                        <Link href="/services/system-security" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('servicesMenu.systemSecurity')}</Link>
                                        <Link href="/services/ai-tools" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('servicesMenu.aiTools')}</Link>
                                        <Link href="/services/vps-setup" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('servicesMenu.vpsSetup')}</Link>
                                    </div>
                                )}
                            </div>

                            {/* GIẢI PHÁP - Các giải pháp */}
                            <div>
                                <button onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)} className="w-full flex items-center justify-between text-sm font-medium text-slate-500 uppercase tracking-wide py-3">
                                    <span>{t('mobileMenu.solutions')}</span>
                                    <span className={`material-icons-outlined text-lg transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                {mobileSolutionsOpen && (
                                    <div className="pl-4 space-y-2 pb-2">
                                        <Link href="/services/update-optimization" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('servicesMenu.upgradeOptimize')}</Link>
                                        <Link href="/services/website-maintenance" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('servicesMenu.maintenance')}</Link>
                                        <Link href="/services/website-operation" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('servicesMenu.speedSecurity')}</Link>
                                        <Link href="/services/api-integration" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('servicesMenu.apiIntegration')}</Link>
                                        <Link href="/solutions/sme" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('solutionsMenu.sme')}</Link>
                                        <Link href="/solutions/startup" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('solutionsMenu.startup')}</Link>
                                        <Link href="/solutions/online-sales" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('solutionsMenu.onlineSales')}</Link>
                                        <Link href="/solutions/digital-conversion" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('solutionsMenu.digitalConversion')}</Link>
                                        <Link href="/solutions/digital-branding" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('solutionsMenu.digitalBranding')}</Link>
                                    </div>
                                )}
                            </div>

                            {/* DỰ ÁN */}
                            <Link href="/projects" className="block text-sm font-medium text-slate-500 uppercase tracking-wide py-3" onClick={() => setMobileMenuOpen(false)}>{t('projects')}</Link>

                            {/* BLOG K-TECH */}
                            <div>
                                <button onClick={() => setMobileBlogOpen(!mobileBlogOpen)} className="w-full flex items-center justify-between text-sm font-medium text-slate-500 uppercase tracking-wide py-3">
                                    <span>{t('mobileMenu.blog')}</span>
                                    <span className={`material-icons-outlined text-lg transition-transform duration-200 ${mobileBlogOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                {mobileBlogOpen && (
                                    <div className="pl-4 space-y-2 pb-2">
                                        <Link href="/news" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('mobileMenu.newsLink')}</Link>
                                        <Link href="/careers" className="block text-sm text-slate-500 py-2" onClick={() => setMobileMenuOpen(false)}>{t('mobileMenu.careersLink')}</Link>
                                    </div>
                                )}
                            </div>

                            {/* LIÊN HỆ */}
                            <button onClick={() => { setMobileMenuOpen(false); handleOpenContactModal(); }} className="block w-full text-left text-sm font-medium text-slate-500 uppercase tracking-wide py-3">{t('contactUs')}</button>
                        </nav>

                    </div>
                )}
            </div>

            {/* Internal Contact Modal if no prop is provided */}
            <ContactModal 
                isOpen={internalContactModalOpen} 
                onClose={() => setInternalContactModalOpen(false)} 
            />
        </header>
    )
}
