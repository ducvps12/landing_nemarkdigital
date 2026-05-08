import type { MetadataRoute } from 'next'
import pool from '@/lib/mysql/connection'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://nemarkdigital.com'
    const locales = ['vi', 'en']

    // Static pages
    const staticPages = [
        '',
        '/about',
        '/careers',
        '/projects',
        '/news',
        '/mau-website',
        '/blogs',
    ]

    // Service pages
    const servicePages = [
        '/services/website-maintenance',
        '/services/website-operation',
        '/services/app-design',
        '/services/api-integration',
        '/services/seo',
        '/services/update-optimization',
        '/services/business-email',
        '/services/domain-hosting',
        '/services/vps',
        '/services/proxy',
        '/services/infra-management',
        '/services/system-security',
    ]

    // Solution pages
    const solutionPages = [
        '/solutions/startup',
        '/solutions/sme',
        '/solutions/digital-branding',
        '/solutions/digital-conversion',
        '/solutions/online-sales',
    ]

    // Service detail pages (dich-vu)
    const dichVuPages = [
        '/dich-vu',
    ]

    // Course pages
    const coursePages = [
        '/courses',
    ]

    const allStaticPages = [
        ...staticPages,
        ...servicePages,
        ...solutionPages,
        ...dichVuPages,
        ...coursePages,
    ]

    // Generate URLs for all locales
    const staticUrls: MetadataRoute.Sitemap = allStaticPages.flatMap((route) =>
        locales.map((locale) => ({
            url: `${baseUrl}/${locale}${route}`,
            lastModified: new Date(),
            changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
            priority: route === ''
                ? 1
                : route.startsWith('/services')
                    ? 0.8
                    : route.startsWith('/solutions')
                        ? 0.8
                        : 0.7,
            alternates: {
                languages: Object.fromEntries(
                    locales.map(l => [l, `${baseUrl}/${l}${route}`])
                ),
            },
        }))
    )

    // Fetch blog/news posts from database for dynamic URLs
    let blogUrls: MetadataRoute.Sitemap = []
    try {
        const [rows] = await pool.execute(
            'SELECT id, created_at FROM Blogs ORDER BY created_at DESC'
        )
        blogUrls = (rows as { id: number; created_at: string }[]).flatMap((row) =>
            locales.map((locale) => ({
                url: `${baseUrl}/${locale}/news/${row.id}`,
                lastModified: new Date(row.created_at),
                changeFrequency: 'monthly' as const,
                priority: 0.6,
                alternates: {
                    languages: Object.fromEntries(
                        locales.map(l => [l, `${baseUrl}/${l}/news/${row.id}`])
                    ),
                },
            }))
        )
    } catch (error) {
        // If database is unavailable, continue with static pages only
        console.warn('Sitemap: Could not fetch blog posts from database:', error)
    }

    return [...staticUrls, ...blogUrls]
}
