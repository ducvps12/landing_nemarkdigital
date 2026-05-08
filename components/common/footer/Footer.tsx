'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import CTAWithForm from '@/components/common/cta/CTAWithForm'

export default function Footer() {
    const t = useTranslations('footer')
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle email submission
        setEmail('')
    }

    return (
        <>
            {/* CTA Section */}
            <CTAWithForm />

            {/* Footer */}
            <footer suppressHydrationWarning className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Column 1: Company Info */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <Image
                                    src="/logo.jpg"
                                    alt="Nemark Logo"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-lg object-cover"
                                />
                                <span className="font-display font-bold text-2xl text-white">
                                    Nemark
                                </span>
                            </div>
                            <div className="text-sm text-slate-400 space-y-1">
                                <p className="font-semibold text-white">{t('companyName')}</p>
                                <p>{t('taxId')}</p>
                                <p>{t('addressFull')}</p>
                                <p>Hotline: {t('phone')}</p>
                                <p>Email: {t('email')}</p>
                                <p>Website: <a href="https://nemarkdigital.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">nemarkdigital.com</a></p>
                            </div>
                        </div>

                        {/* Column 2: Thông tin + Hỗ trợ (merged) */}
                        <div>
                            {/* Thông tin */}
                            <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider border-b border-slate-700 pb-2 hover:text-primary transition-colors cursor-pointer">
                                {t('infoTitle')}
                            </h4>
                            <ul className="space-y-2 text-sm mb-6">
                                <li><Link href="/about" className="hover:text-primary hover:underline transition-colors">{t('info.about')}</Link></li>
                                <li><Link href="/about/experts" className="hover:text-primary hover:underline transition-colors">{t('info.experts')}</Link></li>
                                <li><Link href="/about/partners" className="hover:text-primary hover:underline transition-colors">{t('info.partners')}</Link></li>
                                <li><Link href="/careers" className="hover:text-primary hover:underline transition-colors">{t('info.careers')}</Link></li>
                                <li><Link href="/about/contact" className="hover:text-primary hover:underline transition-colors">{t('info.cooperation')}</Link></li>
                            </ul>

                            {/* Hỗ trợ */}
                            <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider border-b border-slate-700 pb-2 hover:text-primary transition-colors cursor-pointer">
                                {t('supportTitle')}
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/ho-tro/chinh-sach-bao-mat" className="hover:text-primary hover:underline transition-colors">{t('support.privacy')}</Link></li>
                                <li><Link href="/ho-tro/chinh-sach-thanh-toan" className="hover:text-primary hover:underline transition-colors">{t('support.payment')}</Link></li>
                                <li><Link href="/ho-tro/chinh-sach-bao-hanh" className="hover:text-primary hover:underline transition-colors">{t('support.warranty')}</Link></li>
                                <li><Link href="/ho-tro/quy-trinh-ban-giao" className="hover:text-primary hover:underline transition-colors">{t('support.delivery')}</Link></li>
                                <li><Link href="/ho-tro/khieu-nai-su-co" className="hover:text-primary hover:underline transition-colors">{t('support.complaints')}</Link></li>
                                <li><Link href="/ho-tro/hoa-don-vat" className="hover:text-primary hover:underline transition-colors">{t('support.invoice')}</Link></li>
                                <li><Link href="/ho-tro/gop-y-dich-vu" className="hover:text-primary hover:underline transition-colors">{t('support.feedback')}</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Dịch vụ (Services) */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider border-b border-slate-700 pb-2 hover:text-primary transition-colors cursor-pointer">
                                {t('services')}
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/dich-vu/thiet-ke-website" className="hover:text-primary hover:underline transition-colors">{t('serviceLinks.websiteDesign')}</Link></li>
                                <li><Link href="/services/app-design" className="hover:text-primary hover:underline transition-colors">{t('serviceLinks.appDesign')}</Link></li>
                                <li><Link href="/services/update-optimization" className="hover:text-primary hover:underline transition-colors">{t('serviceLinks.upgradeOptimize')}</Link></li>
                                <li><Link href="/services/website-maintenance" className="hover:text-primary hover:underline transition-colors">{t('serviceLinks.maintenance')}</Link></li>
                                <li><Link href="/services/website-operation" className="hover:text-primary hover:underline transition-colors">{t('serviceLinks.speedSecurity')}</Link></li>
                                <li><Link href="/services/api-integration" className="hover:text-primary hover:underline transition-colors">{t('serviceLinks.apiIntegration')}</Link></li>
                                <li><Link href="/services/seo" className="hover:text-primary hover:underline transition-colors">{t('serviceLinks.seo')}</Link></li>
                                <li><Link href="/services/domain-hosting" className="hover:text-primary hover:underline transition-colors">{t('serviceLinks.domainHosting')}</Link></li>
                                <li><Link href="/services/business-email" className="hover:text-primary hover:underline transition-colors">{t('serviceLinks.businessEmail')}</Link></li>
                                <li><Link href="/services/vps" className="hover:text-primary hover:underline transition-colors">{t('serviceLinks.vps')}</Link></li>
                                <li><Link href="/services/proxy" className="hover:text-primary hover:underline transition-colors">{t('serviceLinks.proxy')}</Link></li>
                            </ul>
                        </div>

                        {/* Column 5: Map & Address */}
                        <div>
                            {/* Social Icons - Separate from map */}
                            <div className="mb-4">
                                <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
                                    {t('connectTitle')}
                                </h4>
                                <div className="flex gap-3">
                                    <Link href="https://www.facebook.com/NemarkDigitalHub/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                                        <span className="material-icons text-base">facebook</span>
                                    </Link>
                                    <Link href="https://zalo.me/3516553225829314754" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110">
                                        <span className="material-icons text-base">chat</span>
                                    </Link>
                                    <Link href="https://nemarkdigital.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                                        <span className="material-icons text-base">language</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Map Card - Separate */}
                            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                                <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                                    {t('officeAddress')}
                                </h4>
                                <div className="bg-slate-700 rounded h-48 overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25048.989333694055!2d105.52704413167457!3d21.050502661612956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad884f216eb3%3A0xb4ee365c7b7e1ed6!2sNemark%20Digital%20Solution%20Media%20LMT!5e0!3m2!1svi!2s!4v1767928442584!5m2!1svi!2s"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bộ Công Thương Badge */}
                    <div className="border-t border-slate-800 mt-12 pt-8 flex justify-center">
                        <a
                            href="http://online.gov.vn/Home/WebDetails/141168"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block hover:opacity-80 transition-opacity"
                        >
                            <div className="relative h-14 w-auto aspect-3/1">
                                <Image
                                    src="/images/bocongthuong.png"
                                    alt="Đã thông báo Bộ Công Thương"
                                    fill
                                    sizes="200px"
                                    className="object-contain"
                                />
                            </div>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="mt-6 text-center text-sm text-slate-500">
                        <p>{t('copyright')}</p>
                    </div>
                </div>
            </footer>

            {/* Floating Action Buttons */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
                {/* Zalo Chat */}
                <Link
                    href="https://zalo.me/3516553225829314754"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors text-white"
                >
                    <span className="absolute right-full mr-4 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Chat Zalo
                    </span>
                    <span className="material-icons text-3xl">chat</span>
                </Link>

                {/* Phone */}
                <Link
                    href="tel:0914659183"
                    className="group relative w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-all text-white animate-pulse hover:animate-none"
                >
                    <span className="absolute right-full mr-4 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {t('consultNow')}
                    </span>
                    <span className="material-icons text-3xl">phone_in_talk</span>
                </Link>

                {/* Scroll to Top */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center shadow-md hover:bg-slate-600 transition-colors text-slate-300"
                    aria-label="Scroll to top"
                >
                    <span className="material-icons">arrow_upward</span>
                </button>
            </div>
        </>
    )
}
