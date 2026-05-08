import fs from 'fs';

const raw = JSON.parse(fs.readFileSync('extracted-16.json', 'utf8'));

const mapCategory = (catStr) => {
    let lower = catStr.toLowerCase();
    if (lower.includes('bán hàng')) return { id: 'ban-hang', label: 'Mẫu website bán hàng' };
    if (lower.includes('landing')) return { id: 'landing-page', label: 'Mẫu website Landing page' };
    if (lower.includes('thông tin')) return { id: 'thong-tin', label: 'Mẫu website thông tin' };
    return { id: 'dich-vu', label: 'Mẫu website dịch vụ' };
};

const templates = raw.map(t => {
    const catInfo = mapCategory(t.category);
    let title = t.title.replace('&#8211;', '-');
    return `    {
        slug: '${t.slug}',
        title: '${title.replace(/'/g, "\\'")}',
        category: 'selling',
        categoryId: '${catInfo.id}',
        categoryLabel: '${catInfo.label}',
        subcategories: ['${catInfo.label}'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Mẫu giao diện chuyên nghiệp, thiết kế hiện đại, responsive trên mọi thiết bị và tối ưu chuẩn SEO.',
        demoUrl: '${t.demoUrl}',
        image: '${t.image}',
        mainImages: [\n            '${t.image}'\n        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Responsive, Mobile First' },
            { label: 'Tính năng', value: 'Đầy đủ tính năng, Quản trị dễ dàng' },
            { label: 'SEO', value: 'Tối ưu SEO On-page' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Responsive', 'SEO', 'Thiết kế đẹp'],
        rating: 4.8,
        likes: ${Math.floor(Math.random() * 100) + 100},
    },`;
});

const tsContent = `// ====================================================================
// Single source of truth for all website template data.
// Used by: Project.tsx (homepage carousel), mau-website/page.tsx (listing),
//          mau-website/[slug]/page.tsx (detail page)
// ====================================================================

export interface WebsiteTemplate {
    slug: string
    title: string
    category: string          // For homepage filter (translation key)
    categoryId: string        // For listing page filter
    categoryLabel: string     // Display label (Vietnamese)
    subcategories: string[]
    price: string
    time: string
    description: string
    demoUrl: string
    image: string             // Primary thumbnail (carousel + listing)
    mainImages: string[]      // Gallery images (detail page)
    features: string[]
    details: { label: string; value: string }[]
    tags: string[]
    rating: number
    likes: number
}

// All website templates
export const websiteTemplates: WebsiteTemplate[] = [
${templates.join('\n')}
]

// Build database lookup by slug for detail pages
export const websiteDatabase: Record<string, WebsiteTemplate> = Object.fromEntries(
    websiteTemplates.map(t => [t.slug, t])
)

// Default template for any slug not found in database
export const defaultTemplate: Omit<WebsiteTemplate, 'slug'> = {
    title: 'Mẫu Website',
    category: 'selling',
    categoryId: 'ban-hang',
    categoryLabel: 'Mẫu website bán hàng',
    subcategories: ['Báo giá'],
    price: 'Liên hệ',
    time: '3-5 ngày',
    description: 'Mẫu website chuyên nghiệp với thiết kế hiện đại, tối ưu SEO và responsive.',
    demoUrl: 'https://123website.com.vn',
    image: '/projects/website-my-pham-ceranle.png',
    mainImages: [
        '/projects/website-my-pham-ceranle.png',
    ],
    features: [
        'Tặng tên miền quốc tế .com',
        'Tặng Hosting 4 GB',
        'Hỗ trợ kỹ thuật trọn đời',
    ],
    details: [
        { label: 'Thiết kế', value: 'Responsive, Mobile First' },
        { label: 'Tính năng', value: 'Đầy đủ tính năng cơ bản' },
        { label: 'SEO', value: 'Tối ưu SEO On-page' },
        { label: 'Bảo hành', value: 'Trọn đời' },
    ],
    tags: ['Responsive', 'SEO', 'Modern'],
    rating: 4.8,
    likes: 50,
}

// Listing page categories with correct counts
export const listingCategories = [
    { id: 'all', name: 'Tất cả', count: websiteTemplates.length },
    { id: 'ban-hang', name: 'Mẫu website bán hàng', count: websiteTemplates.filter(w => w.categoryId === 'ban-hang').length },
    { id: 'dich-vu', name: 'Mẫu website dịch vụ', count: websiteTemplates.filter(w => w.categoryId === 'dich-vu').length },
    { id: 'landing-page', name: 'Mẫu website Landing page', count: websiteTemplates.filter(w => w.categoryId === 'landing-page').length },
    { id: 'thong-tin', name: 'Mẫu website thông tin', count: websiteTemplates.filter(w => w.categoryId === 'thong-tin').length },
]
`;

fs.writeFileSync('lib/websiteData.ts', tsContent);
console.log('Successfully wrote to lib/websiteData.ts');
