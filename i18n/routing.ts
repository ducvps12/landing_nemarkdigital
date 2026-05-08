import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    localePrefix: 'as-needed' // Don't show /vi/ prefix for default locale
});
