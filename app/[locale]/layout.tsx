import type { Metadata } from "next";
import { Toaster } from 'react-hot-toast';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import "../globals.css";
import "aos/dist/aos.css";

export const metadata: Metadata = {
    title: {
        default: "Nemark - Thiết kế Website & Giải pháp Công nghệ",
        template: "%s | Nemark"
    },
    description: "Nemark - Thiết kế Website chuẩn UX/UI, tối ưu chuyển đổi, SEO, App Mobile. Giải pháp công nghệ toàn diện cho doanh nghiệp. Liên hệ: 0914659183",
    keywords: ["thiết kế website", "thiết kế app", "SEO", "digital marketing", "nemark", "công nghệ", "giải pháp số", "website design", "app design"],
    authors: [{ name: "Nemark" }],
    creator: "Nemark",
    publisher: "Nemark",
    icons: {
        icon: [
            { url: '/logo.jpg', sizes: 'any' },
            { url: '/logo.jpg', type: 'image/jpeg' }
        ],
        shortcut: '/logo.jpg',
        apple: '/logo.jpg',
    },
    manifest: '/manifest.json',
    alternates: {
        canonical: 'https://nemarkdigital.com',
        languages: {
            'vi': 'https://nemarkdigital.com/vi',
            'en': 'https://nemarkdigital.com/en',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'vi_VN',
        alternateLocale: ['en_US'],
        url: 'https://nemarkdigital.com',
        siteName: 'Nemark',
        title: 'Nemark - Thiết kế Website & Giải pháp Công nghệ',
        description: 'Thiết kế Website chuẩn UX/UI, tối ưu chuyển đổi, nâng tầm thương hiệu doanh nghiệp',
        images: [
            {
                url: 'https://nemarkdigital.com/logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Nemark - Thiết kế Website & Giải pháp Công nghệ',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nemark - Thiết kế Website & Giải pháp Công nghệ',
        description: 'Thiết kế Website chuẩn UX/UI, tối ưu chuyển đổi, nâng tầm thương hiệu doanh nghiệp',
        images: ['https://nemarkdigital.com/logo.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

// JSON-LD Structured Data
const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nemark Digital",
    "alternateName": "Nemark",
    "url": "https://nemarkdigital.com",
    "logo": "https://nemarkdigital.com/logo.jpg",
    "description": "Thiết kế Website chuẩn UX/UI, tối ưu chuyển đổi, SEO, App Mobile. Giải pháp công nghệ toàn diện cho doanh nghiệp.",
    "foundingDate": "2020",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+84-914659183",
        "contactType": "customer service",
        "availableLanguage": ["Vietnamese", "English"]
    },
    "sameAs": [
        "https://www.facebook.com/nemarkdigital"
    ]
};

const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nemark",
    "url": "https://nemarkdigital.com",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://nemarkdigital.com/vi/news?q={search_term_string}",
        "query-input": "required name=search_term_string"
    },
    "inLanguage": ["vi", "en"]
};

export default async function LocaleLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
            />
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#fff',
                        color: '#333',
                    },
                    success: {
                        iconTheme: {
                            primary: '#10b981',
                            secondary: '#fff',
                        },
                    },
                    error: {
                        iconTheme: {
                            primary: '#ef4444',
                            secondary: '#fff',
                        },
                    },
                }}
            />
            <div className="min-h-screen w-full relative bg-white">
                {/* Radial Gradient Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(125% 125% at 50% 10%, #fff 50%, #bae6fd 100%)",
                    }}
                />
                {/* Content */}
                <div className="relative z-10">
                    {children}
                </div>
            </div>
        </NextIntlClientProvider>
    );
}

