'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslations } from 'next-intl'

interface CTAWithFormProps {
    title?: string
    subtitle?: string
}

export default function CTAWithForm({
    title,
    subtitle
}: CTAWithFormProps) {
    const t = useTranslations('cta')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const serviceKeys = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'] as const

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

                // Reset form after success
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: ''
                })
            } else {
                toast.error(result.error || t('errorMessage'))
            }
        } catch (error) {
            toast.error(t('errorMessage'))
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="cta" className="py-16 md:py-20 bg-gradient-to-br from-primary-light to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary/5 rounded-full blur-xl"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10">
                {/* Header */}
                <div suppressHydrationWarning className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary-dark mb-4">
                        {title || t('title')}
                    </h2>
                    <p className="text-primary-dark/80 text-base md:text-lg max-w-2xl mx-auto">
                        {subtitle || t('subtitle')}
                    </p>
                </div>

                {/* Form */}
                <div suppressHydrationWarning className="bg-white rounded-2xl shadow-2xl p-6 md:p-8" data-aos="fade-up" data-aos-delay="100">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Name */}
                            <div>
                                <label htmlFor="cta-name" className="block text-sm font-semibold text-slate-700 mb-2">
                                    {t('nameLabel')} <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-xl">
                                        person
                                    </span>
                                    <input
                                        type="text"
                                        id="cta-name"
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
                                <label htmlFor="cta-email" className="block text-sm font-semibold text-slate-700 mb-2">
                                    {t('emailLabel')} <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-xl">
                                        email
                                    </span>
                                    <input
                                        type="email"
                                        id="cta-email"
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
                                <label htmlFor="cta-phone" className="block text-sm font-semibold text-slate-700 mb-2">
                                    {t('phoneLabel')} <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-xl">
                                        phone
                                    </span>
                                    <input
                                        type="tel"
                                        id="cta-phone"
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
                                <label htmlFor="cta-service" className="block text-sm font-semibold text-slate-700 mb-2">
                                    {t('serviceLabel')} <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-xl">
                                        category
                                    </span>
                                    <select
                                        id="cta-service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-11 pr-10 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none bg-white cursor-pointer"
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
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="cta-message" className="block text-sm font-semibold text-slate-700 mb-2">
                                {t('messageLabel')}
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 material-icons-outlined text-slate-400 text-xl">
                                    message
                                </span>
                                <textarea
                                    id="cta-message"
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
                                className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-base uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

                    {/* Footer Note */}
                    <p className="text-center text-sm text-slate-600 mt-6">
                        <span className="material-icons-outlined text-green-500 text-base align-middle mr-1">verified</span>
                        {t.rich('responseNote', {
                            strong: (chunks) => <strong>{chunks}</strong>,
                        })}
                    </p>
                </div>

                {/* Bottom Text */}
                <p suppressHydrationWarning className="text-center text-primary-dark text-sm mt-8 font-medium" data-aos="fade-up" data-aos-delay="200">
                    {t('bottomText')}
                </p>
            </div>
        </section>
    )
}
