'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

export default function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const switchLocale = (newLocale: string) => {
        if (newLocale === locale) return
        router.replace(pathname, { locale: newLocale as 'vi' | 'en' })
    }

    return (
        <div className="flex items-center gap-1 bg-gray-100 rounded-full p-0.5">
            {routing.locales.map((loc) => (
                <button
                    key={loc}
                    onClick={() => switchLocale(loc)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase transition-all duration-200 ${locale === loc
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-gray-500 hover:text-primary'
                        }`}
                >
                    {loc === 'vi' ? '🇻🇳 VI' : '🇬🇧 EN'}
                </button>
            ))}
        </div>
    )
}

