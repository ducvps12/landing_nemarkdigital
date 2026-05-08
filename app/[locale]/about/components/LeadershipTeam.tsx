'use client'

import { useTranslations } from 'next-intl'

const leaders = [
    { name: 'Mai Tiến Đức', role: 'CEO & Founder', image: '/images/ceo-tienduc.png', isCeo: true },
    { name: 'Trần Trung Kiên', role: 'Team Lead | Fullstack Developer', image: '/images/team-kien.png' },
    { name: 'Đào Huy Toàn', role: 'Fullstack Developer', image: '/images/team-toan.png' },
    { name: 'Nguyễn Quang Huy', role: 'Game Developer', image: '/images/team-huy.png' },
    { name: 'Nguyễn Vy Anh', role: 'Business Analyst / Software Tester', image: '/images/team-vyanh.png' }
]

export default function LeadershipTeam() {
    const t = useTranslations('aboutPage.leadership')
    const ceo = leaders.find(l => l.isCeo)
    const otherLeaders = leaders.filter(l => !l.isCeo)

    return (
        <section id="team" className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-primary-light/10 to-secondary-light/10">
            <header className="w-full pb-12 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-text-main text-3xl md:text-4xl lg:text-[40px] font-heading font-bold uppercase leading-tight tracking-tight mb-4">
                        {t('title')}
                    </h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6" />
                    <p className="text-text-secondary text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>
            </header>

            {ceo && (
                <div className="w-full py-8 px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="100">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center border border-slate-200 hover:border-primary/50 transition-all hover:shadow-3xl">
                            <div className="relative inline-block mb-6">
                                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-xl mx-auto group">
                                    <img alt={`Portrait of ${ceo.name}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={ceo.image} />
                                </div>
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                                    CEO & Founder
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-text-main mb-3">{ceo.name}</h3>
                            <p className="text-primary font-bold text-base uppercase tracking-wider mb-6">{ceo.role}</p>
                            <blockquote className="relative mb-8 max-w-2xl mx-auto">
                                <span className="material-icons-outlined absolute -top-4 -left-4 text-4xl text-slate-300 select-none">format_quote</span>
                                <p className="text-lg md:text-xl text-text-secondary italic leading-relaxed relative z-10">{t('ceoQuote')}</p>
                            </blockquote>
                            <div className="flex gap-3 justify-center">
                                <a href="#" className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-all hover:scale-110">
                                    <span className="material-icons-outlined text-xl">link</span>
                                </a>
                                <a href="#" className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-all hover:scale-110">
                                    <span className="material-icons-outlined text-xl">mail</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
                        {otherLeaders.map((leader, index) => (
                            <div key={index} className="group flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="relative mb-4 w-full aspect-square max-w-[180px] mx-auto">
                                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-primary transition-all duration-300 group-hover:shadow-2xl">
                                        <img alt={`Portrait of ${leader.name}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={leader.image} />
                                    </div>
                                    <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-100 scale-105 transition-all duration-300"></div>
                                </div>
                                <h4 className="text-base md:text-lg font-bold text-text-main group-hover:text-primary transition-colors mb-2">{leader.name}</h4>
                                <p className="text-xs md:text-sm text-text-secondary font-medium leading-snug px-2">{leader.role}</p>
                                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href="#" className="inline-flex items-center gap-1 text-xs text-primary hover:text-purple-600 font-semibold">
                                        <span className="material-icons-outlined text-sm">link</span>
                                        {t('connect')}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
