// ====================================================================
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
    {
        slug: 'mau-website-ban-hang-cong-nghe-radios-home-2',
        title: 'Mẫu Website Bán Hàng Công Nghệ - Radios Home 2',
        category: 'selling',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Mẫu giao diện chuyên nghiệp, thiết kế hiện đại, responsive trên mọi thiết bị và tối ưu chuẩn SEO.',
        demoUrl: 'https://themexriver.com/wp/radios/home-two/',
        image: 'https://123website.com.vn/wp-content/uploads/2023/08/mau-website-ban-hang-cong-nghe-radios-home-2.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2023/08/mau-website-ban-hang-cong-nghe-radios-home-2.jpg'
        ],
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
        likes: 126,
    },
    {
        slug: 'mau-website-noi-that-hama',
        title: 'Mẫu Website Nội Thất - Hama',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Mẫu website nội thất Hama với giao diện hiện đại, bắt mắt. Thiết kế responsive trên mọi thiết bị và tối ưu chuẩn SEO.',
        demoUrl: 'https://hama.7uptheme.net/',
        image: 'https://123website.com.vn/wp-content/uploads/2018/08/screenshot-7uptheme.com-2018.08.02-08-49-30-603x1024.png',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2018/08/screenshot-7uptheme.com-2018.08.02-08-49-30.png'
        ],
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
        tags: ['Nội thất', 'Responsive', 'SEO'],
        rating: 4.8,
        likes: 134,
    },
    {
        slug: 'mau-website-noi-that-sns-market',
        title: 'Mẫu Website Nội Thất - Sns Market',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Mẫu website nội thất Sns Market chuyên nghiệp, thiết kế hiện đại, responsive trên mọi thiết bị và tối ưu chuẩn SEO.',
        demoUrl: 'https://demo.snstheme.com/wp/smarket/',
        image: 'https://123website.com.vn/wp-content/uploads/2018/08/screenshot-demo.snstheme.com-2018.08.02-08-35-46-657x1024.png',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2018/08/screenshot-demo.snstheme.com-2018.08.02-08-35-46.png'
        ],
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
        tags: ['Nội thất', 'Responsive', 'SEO'],
        rating: 4.8,
        likes: 118,
    },
    {
        slug: 'mau-website-ban-hang-noi-that-big-bazaar-home-4',
        title: 'Mẫu Website Bán Hàng Nội Thất - Big Bazaar Home 4',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Mẫu website bán hàng nội thất Big Bazaar Home 4 với giao diện hiện đại, tối ưu chuyển đổi và chuẩn SEO.',
        demoUrl: 'https://demo.presslayouts.com/bigbazaar/demo5/',
        image: 'https://123website.com.vn/wp-content/uploads/2021/09/6-3-410x1024.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2021/09/6-3.jpg'
        ],
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
        tags: ['Nội thất', 'Bán hàng', 'Responsive'],
        rating: 4.8,
        likes: 142,
    },
    {
        slug: 'mau-website-dich-vu-noi-that-cozy',
        title: 'Mẫu Website Dịch Vụ Nội Thất - Cozy',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Mẫu website dịch vụ nội thất Cozy với thiết kế ấm cúng, sang trọng. Responsive và tối ưu SEO.',
        demoUrl: 'https://cozy.qodeinteractive.com/',
        image: 'https://123website.com.vn/wp-content/uploads/2021/07/Cozy-Interio-281x1024.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2021/07/Cozy-Interio.jpg'
        ],
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
        tags: ['Nội thất', 'Dịch vụ', 'Thiết kế đẹp'],
        rating: 4.9,
        likes: 156,
    },
    {
        slug: 'mau-website-dich-vu-noi-that-ollis-5',
        title: 'Mẫu Website Dịch Vụ Nội Thất - Ollis 5',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Mẫu website dịch vụ nội thất Ollis 5, thiết kế tối giản, hiện đại. Tối ưu trải nghiệm người dùng và SEO.',
        demoUrl: 'https://ollis.like-themes.com/homepage-mattress/',
        image: 'https://123website.com.vn/wp-content/uploads/2021/07/Homepage-Mattress-–-Ollis-215x1024.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2021/07/Homepage-Mattress-–-Ollis.jpg'
        ],
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
        tags: ['Nội thất', 'Tối giản', 'Modern'],
        rating: 4.7,
        likes: 109,
    },
    {
        slug: 'mau-website-ban-hang-ke-noi-that-ollis-4',
        title: 'Mẫu Website Bán Hàng Nội Thất - Ollis 3',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Mẫu website bán hàng kệ nội thất Ollis 3 với giao diện chuyên nghiệp, responsive trên mọi thiết bị.',
        demoUrl: 'https://ollis.like-themes.com/homepage-furtniture/',
        image: 'https://123website.com.vn/wp-content/uploads/2021/07/Homepage-Furtniture-–-Ollis-211x1024.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2021/07/Homepage-Furtniture-–-Ollis.jpg'
        ],
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
        tags: ['Nội thất', 'Bán hàng', 'SEO'],
        rating: 4.8,
        likes: 121,
    },
    {
        slug: 'mau-website-thiet-ke-noi-that-home-decor-blocksy',
        title: 'Mẫu Website Thiết Kế Nội Thất – Home Decor Blocksy',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Mẫu giao diện hoàn hảo cho công ty thiết kế nội thất, phong cách tối giản, hiện đại.',
        demoUrl: 'https://startersites.io/blocksy/home-decor/',
        image: 'https://123website.com.vn/wp-content/uploads/2023/03/mau-website-thiet-ke-noi-that-home-decor-blocksy-1.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2023/03/mau-website-thiet-ke-noi-that-home-decor-blocksy-1.jpg'
        ],
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
        tags: ['Thiết kế', 'Nội thất', 'Mẫu Blocksy'],
        rating: 4.8,
        likes: 120,
    },
    {
        slug: 'mau-website-noi-that-kuteshop',
        title: 'Mẫu Website Nội Thất – Kuteshop',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Kute Shop là mẫu website nội thất dễ thương, thân thiện, với giao diện cửa hàng cực cuốn hút.',
        demoUrl: 'https://html.kutethemes.com/kuteshop/html-rtl/home14.html',
        image: 'https://123website.com.vn/wp-content/uploads/2016/04/screenshot-kutethemes.net-2016-04-11-11-38-16.png',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2016/04/screenshot-kutethemes.net-2016-04-11-11-38-16.png'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Responsive, Mobile First' },
            { label: 'Tính năng', value: 'WooCommerce tích hợp' },
            { label: 'SEO', value: 'Tối ưu tốc độ tải trang' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Kuteshop', 'Bán hàng', 'Nội thất'],
        rating: 4.9,
        likes: 185,
    },
    {
        slug: 'mau-website-ban-hang-noi-that-basel',
        title: 'Mẫu Website Bán Hàng Nội Thất Basel',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Thiết kế Basel cổ điển nhưng mang hơi hướng đương đại, phù hợp đa dạng sản phẩm nội thất.',
        demoUrl: 'https://demo.xtemos.com/basel/furniture/',
        image: 'https://123website.com.vn/wp-content/uploads/2021/07/mau-website-ban-hang-noi-that-basel.jpeg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2021/07/mau-website-ban-hang-noi-that-basel.jpeg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Basel Framework' },
            { label: 'Tính năng', value: 'Mega Menu' },
            { label: 'SEO', value: 'Tối ưu hình ảnh' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Basel', 'Nội thất', 'E-commerce'],
        rating: 4.7,
        likes: 140,
    },
    {
        slug: 'mau-website-ban-hang-phu-kien-trang-tri-seese-home-1',
        title: 'Mẫu Website Bán Hàng Phụ Kiện Trang Trí Seese Home 1',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Tập trung hiển thị trang trí và phụ kiện với phong cách Seese sáng sủa.',
        demoUrl: 'https://victorthemes.com/themes/seese/home/home-masonry/',
        image: 'https://123website.com.vn/wp-content/uploads/2021/07/mau-website-ban-hang-phu-kien-trang-tri-seese-home-1.jpeg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2021/07/mau-website-ban-hang-phu-kien-trang-tri-seese-home-1.jpeg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Sáng, Hiện đại' },
            { label: 'Tính năng', value: 'Tích hợp lọc sản phẩm' },
            { label: 'SEO', value: 'Tối ưu On-page' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Trang trí', 'Phụ kiện', 'Seese'],
        rating: 4.6,
        likes: 110,
    },
    {
        slug: 'mau-website-ban-hang-phu-kien-trang-tri-seese',
        title: 'Mẫu Website Bán Hàng Phụ Kiện Trang Trí Seese',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Phiên bản bổ sung của dòng Seese với cấu trúc grid thông minh cho phụ kiện trang trí.',
        demoUrl: 'https://victorthemes.com/themes/seese/',
        image: 'https://123website.com.vn/wp-content/uploads/2021/07/mau-website-ban-hang-phu-kien-trang-tri-seese.jpeg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2021/07/mau-website-ban-hang-phu-kien-trang-tri-seese.jpeg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Responsive, Mobile First' },
            { label: 'Tính năng', value: 'Đầy đủ tính năng' },
            { label: 'SEO', value: 'Cấu trúc web chuẩn' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Phụ kiện', 'Trang trí', 'Decor'],
        rating: 4.8,
        likes: 198,
    },
    {
        slug: 'mau-website-ban-hang-phu-kien-trang-tri-noi-that-vura',
        title: 'Mẫu Website Bán Hàng Phụ Kiện Trang Trí Nội Thất Vura',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Vura mang tới cho bạn phong cách boutique, rất phù hợp bán sản phẩm phong cách cá nhân.',
        demoUrl: 'https://shtheme.com/demosd/vura/',
        image: 'https://123website.com.vn/wp-content/uploads/2021/07/mau-website-ban-hang-phu-kien-trang-tri-noi-that-vura.jpeg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2021/07/mau-website-ban-hang-phu-kien-trang-tri-noi-that-vura.jpeg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Boutique Store' },
            { label: 'Tính năng', value: 'Thanh toán dễ dàng' },
            { label: 'SEO', value: 'Tốc độ cực nhanh' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Boutique', 'Vura', 'Trang trí'],
        rating: 4.9,
        likes: 215,
    },
    {
        slug: 'mau-website-ban-hang-phu-kien-trang-tri-noi-that-retbo',
        title: 'Mẫu Website Bán Hàng Phụ Kiện Trang Trí Nội Thất Retbo',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Retbo là một trong những mẫu website phụ kiện nội thất đẹp nhất với tông pastel tinh tế.',
        demoUrl: 'https://codeskdhaka.com/wp/retbo/home-3/',
        image: 'https://123website.com.vn/wp-content/uploads/2021/07/mau-website-ban-hang-phu-kien-trang-tri-noi-that-retbo.jpeg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2021/07/mau-website-ban-hang-phu-kien-trang-tri-noi-that-retbo.jpeg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Giao diện pastel' },
            { label: 'Tính năng', value: 'Phân loại danh mục tốt' },
            { label: 'SEO', value: 'Giao diện thân thiện SEO' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Retbo', 'Trang trí', 'Nội thất'],
        rating: 4.8,
        likes: 147,
    },
    {
        slug: 'mau-website-ban-hang-noi-that-gravity',
        title: 'Mẫu Website Bán Hàng Nội Thất – Gravity',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Mẫu website Gravity đem lại ấn tượng mạnh mẽ cho cửa hàng nội thất cao cấp.',
        demoUrl: 'https://gravity.axiomthemes.com/',
        image: 'https://123website.com.vn/wp-content/uploads/2017/07/mau-website-ban-hang-noi-that-gravity.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2017/07/mau-website-ban-hang-noi-that-gravity.jpg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Sang trọng, Đẳng cấp' },
            { label: 'Tính năng', value: 'Tích hợp giỏ hàng Ajax' },
            { label: 'SEO', value: 'Bộ dữ liệu cấu trúc' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Gravity', 'Cao cấp', 'Nội thất'],
        rating: 4.9,
        likes: 310,
    },
    {
        slug: 'mau-website-ban-hang-plumbing',
        title: 'Mẫu Website Bán Hàng – Plumbing',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Dành riêng cho thiết bị vệ sinh cao cấp và phụ kiện nội thất liên quan. Phong cách cứng cáp vững chãi.',
        demoUrl: 'https://plumbing-parts.themerex.net/',
        image: 'https://123website.com.vn/wp-content/uploads/2016/07/screenshot-plumbing-parts.themerex.net-2016-07-12-14-15-32.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2016/07/screenshot-plumbing-parts.themerex.net-2016-07-12-14-15-32.jpg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Công nghiệp, Cứng cáp' },
            { label: 'Tính năng', value: 'Catalogue sản phẩm' },
            { label: 'SEO', value: 'Chuẩn SEO' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Thiết bị vệ sinh', 'Plumbing', 'Phụ kiện'],
        rating: 4.5,
        likes: 120,
    },
    {
        slug: 'mau-website-ban-hang-noi-that-home-fabric-modus',
        title: 'Mẫu Website Bán Hàng Nội Thất – Home Fabric – Modus',
        category: 'interior',
        categoryId: 'ban-hang',
        categoryLabel: 'Mẫu website bán hàng',
        subcategories: ['Mẫu website bán hàng', 'Mẫu website bán hàng nội thất'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Tập trung chủ yếu vào vải vóc, rèm cửa, sofa nỉ trang trí cho một mái ấm hoàn thiện.',
        demoUrl: 'http://demo.arrowpress.net/modus/furniture-8/',
        image: 'https://123website.com.vn/wp-content/uploads/2019/04/screenshot-demo.arrowpress.net-2019.04.23-11-00-07.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2019/04/screenshot-demo.arrowpress.net-2019.04.23-11-00-07.jpg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Cảm giác mềm mại, ấm cúng' },
            { label: 'Tính năng', value: 'So sánh sản phẩm' },
            { label: 'SEO', value: 'Sitemap tự động' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Sofa', 'Fabric', 'Modus'],
        rating: 4.8,
        likes: 215,
    },
    {
        slug: 'mau-website-dich-vu-ca-phe-barista-modern',
        title: 'Mẫu Website Cafe – Barista Modern',
        category: 'service',
        categoryId: 'dich-vu',
        categoryLabel: 'Mẫu website dịch vụ',
        subcategories: ['Mẫu website dịch vụ', 'Mẫu website nhà hàng'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Mẫu giao diện hoàn hảo cho quán cafe, nhà hàng với thiết kế hiện đại, tinh tế.',
        demoUrl: 'https://barista.qodeinteractive.com/elementor/metro-home/',
        image: 'https://123website.com.vn/wp-content/uploads/2023/05/mau-website-dich-vu-ca-phe-5.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2023/05/mau-website-dich-vu-ca-phe-5.jpg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Responsive, Mobile First' },
            { label: 'Tính năng', value: 'Quản trị dễ dàng, Menu rõ ràng' },
            { label: 'SEO', value: 'Tối ưu SEO On-page' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Cafe', 'Dịch vụ', 'Barista'],
        rating: 4.8,
        likes: 154,
    },
    {
        slug: 'mau-website-dich-vu-du-lich-adventis',
        title: 'Mẫu Website Dịch Vụ Du Lịch – Adventis',
        category: 'service',
        categoryId: 'dich-vu',
        categoryLabel: 'Mẫu website dịch vụ',
        subcategories: ['Mẫu website dịch vụ', 'Mẫu website du lịch'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Mẫu website dịch vụ du lịch Adventis chuyên nghiệp, với tính năng đặt tour chuẩn xác.',
        demoUrl: 'https://demo2.themelexus.com/adventis/',
        image: 'https://123website.com.vn/wp-content/uploads/2024/09/dang-website-1.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2024/09/dang-website-1.jpg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Responsive, Mobile First' },
            { label: 'Tính năng', value: 'Booking tour' },
            { label: 'SEO', value: 'Tối ưu chuẩn' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Du lịch', 'Tour', 'Adventis'],
        rating: 4.9,
        likes: 210,
    },
    {
        slug: 'mau-website-dich-vu-du-lich-sealosca',
        title: 'Mẫu Website Dịch Vụ Du Lịch – Sealosca',
        category: 'service',
        categoryId: 'dich-vu',
        categoryLabel: 'Mẫu website dịch vụ',
        subcategories: ['Mẫu website dịch vụ', 'Mẫu website du lịch'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Sealosca mang phong cách hiện đại biển khơi, phù hợp cho resort, khu nghỉ dưỡng, tour du lịch.',
        demoUrl: 'https://templatekit.kotakkuning.com/sealosca/template-kit/home/',
        image: 'https://123website.com.vn/wp-content/uploads/2023/10/2mau-website-dich-vu-du-lich.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2023/10/2mau-website-dich-vu-du-lich.jpg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Sáng tạo, Hiện đại' },
            { label: 'Tính năng', value: 'Phân loại tour dễ dàng' },
            { label: 'SEO', value: 'Tối ưu On-page' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Du lịch', 'Khu nghỉ dưỡng', 'Sealosca'],
        rating: 4.7,
        likes: 182,
    },
    {
        slug: 'mau-website-dich-vu-dinh-cu-visa-travisa',
        title: 'Mẫu Website Dịch Vụ Định Cư Visa – Travisa',
        category: 'service',
        categoryId: 'dich-vu',
        categoryLabel: 'Mẫu website dịch vụ',
        subcategories: ['Mẫu website dịch vụ', 'Mẫu website thông tin'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Mẫu website tư vấn định cư, làm visa chuyên nghiệp mang tên Travisa.',
        demoUrl: 'https://templatekit.jegtheme.com/travisa/?storefront=envato-elements',
        image: 'https://123website.com.vn/wp-content/uploads/2023/06/mau-website-dich-vu-dinh-cu-visa-3.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2023/06/mau-website-dich-vu-dinh-cu-visa-3.jpg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Bố cục rõ ràng, chuyên nghiệp' },
            { label: 'Tính năng', value: 'Form tư vấn' },
            { label: 'SEO', value: 'Cấu trúc web chuẩn' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Visa', 'Định cư', 'Tư vấn'],
        rating: 4.8,
        likes: 165,
    },
    {
        slug: 'mau-website-dich-vu-khach-san-the-resort',
        title: 'Mẫu Website Dịch Vụ Khách Sạn – The Resort',
        category: 'service',
        categoryId: 'dich-vu',
        categoryLabel: 'Mẫu website dịch vụ',
        subcategories: ['Mẫu website dịch vụ', 'Mẫu website khách sạn'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'The Resort mang đến trải nghiệm đặt phòng khách sạn, homestay với giao diện cực kỳ sang trọng.',
        demoUrl: 'https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/resort/',
        image: 'https://123website.com.vn/wp-content/uploads/2023/05/mau-website-dich-vu-khach-san.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2023/05/mau-website-dich-vu-khach-san.jpg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Cao cấp, tinh tế' },
            { label: 'Tính năng', value: 'Booking phòng khách sạn' },
            { label: 'SEO', value: 'Tốc độ cực nhanh' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Khách sạn', 'Resort', 'Homestay'],
        rating: 4.9,
        likes: 245,
    },
    {
        slug: 'mau-website-dich-vu-nha-hang-gofoodie',
        title: 'Mẫu Website Dịch Vụ Nhà Hàng – Gofoodie',
        category: 'service',
        categoryId: 'dich-vu',
        categoryLabel: 'Mẫu website dịch vụ',
        subcategories: ['Mẫu website dịch vụ', 'Mẫu website nhà hàng'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Gofoodie là mẫu trang web ẩm thực, nhà hàng với hệ thống đặt bàn và hiển thị thực đơn vô cùng hấp dẫn.',
        demoUrl: 'https://templatekits.wpmarvels.com/gofoodie/?storefront=envato-elements',
        image: 'https://123website.com.vn/wp-content/uploads/2023/07/mau-website-dich-vu-nha-hang-4.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2023/07/mau-website-dich-vu-nha-hang-4.jpg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Hình ảnh sống động' },
            { label: 'Tính năng', value: 'Booking bàn, hiển thị menu' },
            { label: 'SEO', value: 'Thân thiện di động' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Nhà hàng', 'Ẩm thực', 'Đặt bàn'],
        rating: 4.8,
        likes: 198,
    },
    {
        slug: 'mau-website-khoa-hoc-online-educrat',
        title: 'Mẫu Website Khoá Học Online – Educrat',
        category: 'service',
        categoryId: 'dich-vu',
        categoryLabel: 'Mẫu website dịch vụ',
        subcategories: ['Mẫu website dịch vụ', 'Mẫu website đào tạo'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Educrat hỗ trợ hiển thị khoá học online bài bản, giúp cơ sở giáo dục vận hành E-learning hiệu quả.',
        demoUrl: 'https://demoapus1.com/educrat/learnpress/home-2/',
        image: 'https://123website.com.vn/wp-content/uploads/2024/03/mau-website-khoa-hoc-4.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2024/03/mau-website-khoa-hoc-4.jpg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Thông tin học tập rõ ràng' },
            { label: 'Tính năng', value: 'Đăng ký khoá học online' },
            { label: 'SEO', value: 'Chuẩn dữ liệu' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Khoá học', 'Đào tạo', 'Educrat'],
        rating: 4.9,
        likes: 310,
    },
    {
        slug: 'mau-website-khoa-hoc-online-eduvison',
        title: 'Mẫu Website Khoá Học Online – Eduvison',
        category: 'service',
        categoryId: 'dich-vu',
        categoryLabel: 'Mẫu website dịch vụ',
        subcategories: ['Mẫu website dịch vụ', 'Mẫu website đào tạo'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Mẫu giao diện hoàn hảo dành cho trường học, trung tâm ngoại ngữ, và dạy kỹ năng.',
        demoUrl: 'https://shtheme.com/demosd/eduvisionwp/',
        image: 'https://123website.com.vn/wp-content/uploads/2024/03/mau-website-khoa-hoc.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2024/03/mau-website-khoa-hoc.jpg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Màu sắc trường học thân thiện' },
            { label: 'Tính năng', value: 'Quản lý khóa học, học viên' },
            { label: 'SEO', value: 'Load cực nhanh' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Trường học', 'Trung tâm', 'Học viên'],
        rating: 4.7,
        likes: 125,
    },
    {
        slug: 'mau-website-khoa-hoc-online-skola',
        title: 'Mẫu Website Khoá Học Online – Skola',
        category: 'service',
        categoryId: 'dich-vu',
        categoryLabel: 'Mẫu website dịch vụ',
        subcategories: ['Mẫu website dịch vụ', 'Mẫu website đào tạo'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Skola ưu tiên tập trung vào việc bán các khóa đào tạo trực tuyến qua các video bài giảng.',
        demoUrl: 'https://skola.madrasthemes.com/',
        image: 'https://123website.com.vn/wp-content/uploads/2024/03/mau-website-khoa-hoc-2.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2024/03/mau-website-khoa-hoc-2.jpg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Tập trung hiển thị nội dung' },
            { label: 'Tính năng', value: 'Giỏ hàng khóa học' },
            { label: 'SEO', value: 'Tối ưu thân thiện Google' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Học trực tuyến', 'Đào tạo', 'Skola'],
        rating: 4.8,
        likes: 180,
    },
    {
        slug: 'mau-website-khoa-hoc-online-zoomy',
        title: 'Mẫu Website Khoá Học Online – Zoomy',
        category: 'service',
        categoryId: 'dich-vu',
        categoryLabel: 'Mẫu website dịch vụ',
        subcategories: ['Mẫu website dịch vụ', 'Mẫu website đào tạo'],
        price: 'Liên hệ',
        time: '3-5 ngày',
        description: 'Mẫu thiết kế đa năng dành cho trung tâm gia sư, lớp học ngắn hạn hoặc học từ xa.',
        demoUrl: 'https://wordpress-theme.spider-themes.net/zoomy/',
        image: 'https://123website.com.vn/wp-content/uploads/2024/03/mau-website-khoa-hoc-3.jpg',
        mainImages: [
            'https://123website.com.vn/wp-content/uploads/2024/03/mau-website-khoa-hoc-3.jpg'
        ],
        features: [
            'Tặng tên miền quốc tế .com',
            'Tặng Hosting 4 GB',
            'Thiết kế chuẩn UX/UI',
            'Tối ưu chuẩn SEO',
            'Bảo hành trọn đời'
        ],
        details: [
            { label: 'Thiết kế', value: 'Hiện đại, chuyên gia' },
            { label: 'Tính năng', value: 'Tích hợp thanh toán' },
            { label: 'SEO', value: 'On-page SEO' },
            { label: 'Bảo hành', value: 'Trọn đời' },
        ],
        tags: ['Gia sư', 'Đào tạo', 'Zoomy'],
        rating: 4.9,
        likes: 245,
    }
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
