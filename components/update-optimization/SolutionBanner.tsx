'use client'

import { useState } from 'react'

export default function SolutionBanner() {
    const [showMore, setShowMore] = useState(false)

    const solutions = [
        "Khả năng tiếp cận khách hàng tiềm năng cao lên đến 95% tỷ lệ người dùng Internet",
        "Kênh quảng cáo có độ đa dạng hình thức và định dạng quảng cáo khác nhau",
        "Có thể tiếp cận đúng tệp khách hàng theo hình thức quảng cáo đã setup",
    ]

    const moreSolutions = [
        "Chủ động kiểm soát chi phí quảng cáo linh hoạt",
        "Khả năng do lường và báo cáo kết quả chính xác",
        "Chính sách quảng cáo không khắt khe nên dễ chạy đa dạng các ngành hàng để nhanh ra chuyển đổi, có tỷ lệ quan tâm sản phẩm/dịch vụ của bạn cao",
        "Dễ dàng quản lý và giám sát các tài khoản quảng cáo",
        "Khả thác các mục tiêu tìm kiếm hiệu quả",
        "Ra kết quả nhanh hơn so với giải pháp SEO cần phải xây dựng, đầu tư lâu dài"
    ]

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Outer light blue container */}
                <div className="rounded-3xl p-10 md:p-16" style={{ background: '#e8f4fa' }}>
                    {/* Inner white box containing BOTH image and text */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                            {/* Left - Image */}
                            <div className="flex items-center justify-center">
                                {/* Growth Illustration */}
                                <div className="w-full max-w-md rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #1C4D8D 0%, #4988C4 100%)' }}>
                                    {/* Top Stats */}
                                    <div className="grid grid-cols-3 gap-3 mb-6">
                                        <div className="bg-white/15 rounded-lg p-3 text-center">
                                            <p className="text-white/70 text-xs">Doanh thu</p>
                                            <p className="text-white text-xl font-bold">+180%</p>
                                        </div>
                                        <div className="bg-white/15 rounded-lg p-3 text-center">
                                            <p className="text-white/70 text-xs">Khách hàng</p>
                                            <p className="text-white text-xl font-bold">+95%</p>
                                        </div>
                                        <div className="bg-white/15 rounded-lg p-3 text-center">
                                            <p className="text-white/70 text-xs">Traffic</p>
                                            <p className="text-white text-xl font-bold">3x</p>
                                        </div>
                                    </div>

                                    {/* Growth Chart SVG */}
                                    <div className="bg-white/10 rounded-xl p-4 mb-4">
                                        <svg viewBox="0 0 300 120" className="w-full h-auto">
                                            <defs>
                                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                                                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                                                </linearGradient>
                                            </defs>
                                            {/* Grid lines */}
                                            <line x1="0" y1="30" x2="300" y2="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                                            <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                                            <line x1="0" y1="90" x2="300" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                                            {/* Growth line */}
                                            <path d="M 0 100 Q 50 95, 75 80 T 150 60 T 225 30 T 300 10" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                            {/* Area under line */}
                                            <path d="M 0 100 Q 50 95, 75 80 T 150 60 T 225 30 T 300 10 L 300 120 L 0 120 Z" fill="url(#chartGradient)" />
                                            {/* Dots */}
                                            <circle cx="75" cy="80" r="4" fill="white" />
                                            <circle cx="150" cy="60" r="4" fill="white" />
                                            <circle cx="225" cy="30" r="4" fill="white" />
                                            <circle cx="300" cy="10" r="5" fill="#F59E0B" stroke="white" strokeWidth="2" />
                                        </svg>
                                    </div>

                                    {/* Nemark Badge */}
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/20">
                                            <span className="text-white text-sm font-bold">N</span>
                                        </div>
                                        <span className="text-white/90 text-sm font-semibold">Powered by Nemark Digital</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Content */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                                    <span className="whitespace-nowrap"><span style={{ color: '#1C4D8D' }}>GIẢI PHÁP </span><span style={{ color: '#F59E0B' }}>TĂNG TRƯỞNG</span></span>
                                    <br />
                                    <span style={{ color: '#F59E0B' }}>DOANH THU </span>
                                    <span style={{ color: '#1C4D8D' }}>HIỆU QUẢ</span>
                                    <br />
                                    <span style={{ color: '#1C4D8D' }}>CHO DOANH NGHIỆP</span>
                                    <br />
                                    <span style={{ color: '#1C4D8D' }}>CỦA BẠN</span>
                                </h2>

                                {/* Main Solutions */}
                                <ul className="space-y-4 mb-4">
                                    {solutions.map((solution, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3"
                                            style={{ color: '#334155' }}
                                        >
                                            <span style={{ color: '#22c55e' }} className="flex-shrink-0 mt-1">✓</span>
                                            <span className="leading-relaxed">{solution}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Expandable Section */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${showMore ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
                                >
                                    <ul className="space-y-4">
                                        {moreSolutions.map((solution, index) => (
                                            <li
                                                key={`more-${index}`}
                                                className="flex items-start gap-3"
                                                style={{ color: '#334155' }}
                                            >
                                                <span style={{ color: '#22c55e' }} className="flex-shrink-0 mt-1">✓</span>
                                                <span className="leading-relaxed">{solution}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    onClick={() => setShowMore(!showMore)}
                                    className="flex items-center gap-2 font-semibold transition-colors"
                                    style={{ color: '#F59E0B' }}
                                >
                                    <span>{showMore ? 'Thu gọn' : 'Xem thêm'}</span>
                                    <span className={`text-xl transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}>
                                        {showMore ? '−' : '+'}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
