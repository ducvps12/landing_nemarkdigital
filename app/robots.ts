import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/adminduc/', '/admin/', '/api/', '/dashboard/', '/_next/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/adminduc/', '/admin/', '/api/', '/dashboard/'],
            },
        ],
        sitemap: 'https://nemarkdigital.com/sitemap.xml',
    }
}
