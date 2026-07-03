'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { useTransition } from 'react'

export default function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()

    const switchLocale = (newLocale: string) => {
        if (newLocale === locale) return
        startTransition(() => {
            router.replace(pathname, { locale: newLocale as 'vi' | 'en' })
        })
    }

    return (
        <>
            {isPending && (
                <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm transition-all duration-300">
                    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-xs text-center">
                        <div className="relative w-12 h-12">
                            <div className="absolute inset-0 rounded-full border-4 border-slate-200" />
                            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
                        </div>
                        <div>
                            <span className="text-lg font-bold text-primary tracking-wider uppercase block">
                                Nemark
                            </span>
                            <p className="text-xs text-slate-500 mt-1 font-medium">
                                {locale === 'vi' ? 'Đang chuyển đổi ngôn ngữ...' : 'Switching language...'}
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex items-center gap-1 bg-gray-100 rounded-full p-0.5">
                {routing.locales.map((loc) => (
                    <button
                        key={loc}
                        disabled={isPending}
                        onClick={() => switchLocale(loc)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase transition-all duration-200 ${locale === loc
                            ? 'bg-primary text-white shadow-sm'
                            : 'text-gray-500 hover:text-primary'
                            } ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        {loc === 'vi' ? '🇻🇳 VI' : '🇬🇧 EN'}
                    </button>
                ))}
            </div>
        </>
    )
}

