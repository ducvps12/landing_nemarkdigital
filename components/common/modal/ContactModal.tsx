'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useTranslations } from 'next-intl'

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const t = useTranslations('contactModal')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const serviceKeys = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'] as const

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose()
            }
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isOpen, onClose])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/customer-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const result = await response.json()

            if (response.ok) {
                toast.success(result.message || t('successMessage'))

                // Reset form and close modal after success
                setTimeout(() => {
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: ''
                    })
                    onClose()
                }, 2000)
            } else {
                toast.error(result.error || t('errorMessage'))
            }
        } catch (error) {
            toast.error(t('errorMessage'))
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full z-50 max-w-3xl bg-white rounded-2xl shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto scrollbar-hide">
                {/* Header */}
                <div className="sticky top-0 z-10 text-white px-4 md:px-6 py-4 md:py-5 rounded-t-2xl" style={{ backgroundColor: '#0EA5E9' }}>
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl md:text-2xl font-display font-bold">{t('title')}</h2>
                            <p className="text-xs md:text-sm text-cyan-50 mt-1">{t('subtitle')}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                            aria-label={t('close')}
                        >
                            <span className="material-icons text-2xl">close</span>
                        </button>
                    </div>
                </div>

                {/* Content Grid: Form + Image */}
                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-0">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4 md:space-y-5 order-2 lg:order-1">
                        {/* Name */}
                        <div>
                            <label htmlFor="modal-name" className="block text-sm font-semibold text-slate-700 mb-2">
                                {t('nameLabel')} <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-xl">
                                    person
                                </span>
                                <input
                                    type="text"
                                    id="modal-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    placeholder={t('namePlaceholder')}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="modal-email" className="block text-sm font-semibold text-slate-700 mb-2">
                                {t('emailLabel')} <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-xl">
                                    email
                                </span>
                                <input
                                    type="email"
                                    id="modal-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    placeholder="example@email.com"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="modal-phone" className="block text-sm font-semibold text-slate-700 mb-2">
                                {t('phoneLabel')} <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-xl">
                                    phone
                                </span>
                                <input
                                    type="tel"
                                    id="modal-phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    pattern="[0-9]{10,11}"
                                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    placeholder="0123456789"
                                />
                            </div>
                        </div>

                        {/* Service */}
                        <div>
                            <label htmlFor="modal-service" className="block text-sm font-semibold text-slate-700 mb-2">
                                {t('serviceLabel')} <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-xl">
                                    category
                                </span>
                                <select
                                    id="modal-service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none bg-white cursor-pointer"
                                >
                                    <option value="">{t('servicePlaceholder')}</option>
                                    {serviceKeys.map((key) => (
                                        <option key={key} value={t(`services.${key}`)}>{t(`services.${key}`)}</option>
                                    ))}
                                </select>
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 material-icons text-slate-400 pointer-events-none">
                                    expand_more
                                </span>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="modal-message" className="block text-sm font-semibold text-slate-700 mb-2">
                                {t('messageLabel')}
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 material-icons-outlined text-slate-400 text-xl">
                                    message
                                </span>
                                <textarea
                                    id="modal-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                                    placeholder={t('messagePlaceholder')}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-3 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                style={{ backgroundColor: '#0EA5E9' }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="material-icons animate-spin">refresh</span>
                                        {t('submitting')}
                                    </>
                                ) : (
                                    <>
                                        <span className="material-icons-outlined">send</span>
                                        {t('submitButton')}
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Image Section */}
                    <div className="relative hidden lg:flex items-center justify-center order-1 lg:order-2 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
                        <img
                            src="/images/contact-consultation.png"
                            alt="Nemark consultation"
                            className="w-full h-full object-cover rounded-tr-2xl"
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scale-in {
                    from { 
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.2s ease-out;
                }
                .animate-scale-in {
                    animation: scale-in 0.3s ease-out;
                }
                /* Hide scrollbar */
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    )
}
