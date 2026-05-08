'use client'

const technologies = [
    {
        category: 'Frontend',
        icon: 'web',
        items: [
            { name: 'React', desc: 'Thư viện UI mạnh mẽ' },
            { name: 'Next.js', desc: 'Framework React hiện đại' },
            { name: 'Vue.js', desc: 'Framework linh hoạt' },
            { name: 'Tailwind CSS', desc: 'Utility-first CSS' }
        ]
    },
    {
        category: 'Backend',
        icon: 'dns',
        items: [
            { name: 'Node.js', desc: 'Runtime JavaScript' },
            { name: 'PHP/Laravel', desc: 'Framework PHP' },
            { name: '.NET Core', desc: 'Framework Microsoft' },
            { name: 'Python/Django', desc: 'Framework Python' }
        ]
    },
    {
        category: 'Database',
        icon: 'storage',
        items: [
            { name: 'PostgreSQL', desc: 'SQL hiệu suất cao' },
            { name: 'MySQL', desc: 'SQL phổ biến' },
            { name: 'MongoDB', desc: 'NoSQL linh hoạt' },
            { name: 'Redis', desc: 'In-memory cache' }
        ]
    },
    {
        category: 'CMS',
        icon: 'dashboard',
        items: [
            { name: 'WordPress', desc: 'CMS phổ biến nhất' },
            { name: 'Strapi', desc: 'Headless CMS' },
            { name: 'Sanity', desc: 'Content platform' },
            { name: 'Custom CMS', desc: 'Giải pháp tùy chỉnh' }
        ]
    },
    {
        category: 'E-commerce',
        icon: 'shopping_cart',
        items: [
            { name: 'WooCommerce', desc: 'Plugin WordPress' },
            { name: 'Shopify', desc: 'Platform thương mại' },
            { name: 'Magento', desc: 'Enterprise solution' },
            { name: 'Custom Shop', desc: 'Giải pháp riêng' }
        ]
    },
    {
        category: 'DevOps & Cloud',
        icon: 'cloud',
        items: [
            { name: 'AWS', desc: 'Amazon Web Services' },
            { name: 'Vercel', desc: 'Deploy Next.js' },
            { name: 'Docker', desc: 'Container platform' },
            { name: 'GitHub Actions', desc: 'CI/CD automation' }
        ]
    }
]

export default function WebsiteTechnologies() {
    return (
        <section className="py-20 overflow-hidden" style={{ backgroundColor: '#f8fafc' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">
                        Technology Stack
                    </span>
                    <h2 className="text-3xl font-display font-bold mt-2" style={{ color: '#0f172a' }}>
                        Công nghệ chúng tôi sử dụng
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#475569' }}>
                        Chúng tôi sử dụng các công nghệ hiện đại và được kiểm chứng để xây dựng website chất lượng cao
                    </p>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                            style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}
                            data-aos="fade-up"
                            data-aos-delay={idx * 50}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                                    <span className="material-icons text-2xl text-primary group-hover:text-white transition-colors">
                                        {tech.icon}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold" style={{ color: '#0f172a' }}>
                                    {tech.category}
                                </h3>
                            </div>

                            {/* Tech Items */}
                            <ul className="space-y-3">
                                {tech.items.map((item, itemIdx) => (
                                    <li
                                        key={itemIdx}
                                        className="flex items-center gap-3 p-2 -mx-2 rounded-lg transition-colors"
                                        style={{ backgroundColor: 'transparent' }}
                                    >
                                        <span className="material-icons text-primary text-sm">check_circle</span>
                                        <div>
                                            <span className="font-medium text-sm" style={{ color: '#1e293b' }}>
                                                {item.name}
                                            </span>
                                            <span className="text-xs ml-2" style={{ color: '#64748b' }}>
                                                - {item.desc}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <div className="mt-12 text-center" data-aos="fade-up">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full">
                        <span className="material-icons text-primary">tips_and_updates</span>
                        <span className="text-sm" style={{ color: '#334155' }}>
                            Chúng tôi luôn cập nhật công nghệ mới nhất để mang lại giải pháp tối ưu
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

