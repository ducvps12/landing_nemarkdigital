'use client'

interface Package {
    name: string
    subtitle?: string
    price: string
    features: string[]
    cta: string
}

interface PricingSectionProps {
    onOpenContactModal: () => void
}

interface PricingTable {
    title: string
    packages: Package[]
}

export default function PricingSection({ onOpenContactModal }: PricingSectionProps) {
    const pricingTables: PricingTable[] = [
        {
            title: "Bảng giá dịch vụ Proxy IPV4 Tĩnh",
            packages: [
                {
                    name: "1. GÓI PROXY DATACENTER VIỆT NAM",
                    subtitle: "Tốc độ siêu tốc - Chuyên trị Game & Tool",
                    price: "Giá: Chỉ từ 14.400đ / Proxy / Tháng",
                    features: [
                        "Loại IP: Datacenter VN (Tĩnh)",
                        "Máy chủ: CMC Telecom (Hà Nội)",
                        "Tính năng:",
                        "✓ Băng thông không giới hạn",
                        "✓ IP sạch, dùng riêng 100%",
                        "✓ Độ ổn định cao, Ping cực thấp",
                        "✓ Tối ưu cho treo Tool Game, Cày View",
                        "Phù hợp: Game Online, MMO Việt Nam, Web Scraping"
                    ],
                    cta: "MUA NGAY"
                },
                {
                    name: "2. GÓI PROXY DÂN CƯ (RESIDENTIAL)",
                    subtitle: "Độ Truyền các cao - \"Khắc tinh\" của quét tài khoản",
                    price: "Giá: Chỉ từ 14.400đ / Proxy / Tháng",
                    features: [
                        "Loại IP: Dân cư Việt Nam (Tĩnh)",
                        "Nhà mạng: Tùy chọn Viettel / FPT / VNPT",
                        "Tính năng:",
                        "✓ IP sạch 100% (Chuẩn mạng gia đình)",
                        "✓ Nơi không với Blacklist/Spam",
                        "✓ Đã ký hợp đồng dài hạn với nhà mạng lớn",
                        "✓ Băng thông không giới hạn",
                        "Phù hợp: Nuôi nick Facebook, TikTok, Chạy Ads, Reg acc."
                    ],
                    cta: "MUA NGAY"
                },
                {
                    name: "3. GÓI PROXY US (MỸ)",
                    subtitle: "Giải pháp tiết kiệm nhất cho nhu cầu MMO quốc tế",
                    price: "Giá: Chỉ từ 4.800đ / Proxy / Tháng",
                    features: [
                        "Loại IP: Datacenter US (Tĩnh)",
                        "Máy chủ: San Jose, California (USA)",
                        "Tính năng:",
                        "✓ Băng thông không giới hạn",
                        "✓ IP dùng riêng (Private), không chung dùng",
                        "✓ Tốc độ cao, Ping ổn định quốc tế",
                        "✓ Hỗ trợ giao thức HTTP/SOCKS5",
                        "Phù hợp: Dropshipping, Ebay, Amazon, Nuôi acc US."
                    ],
                    cta: "MUA NGAY"
                }
            ]
        },
        {
            title: "Bảng giá dịch vụ Gói Proxy IPV4 Tĩnh",
            packages: [
                {
                    name: "1. GÓI DÂN CƯ VIETTEL (90 IP)",
                    price: "Giá: 675.000đ / 30 ngày",
                    features: [
                        "Hạ tầng mạng Viettel phủ sóng rộng, độ Trust cao",
                        "Số lượng: 90 Proxy IP Tĩnh",
                        "Loại IP: Dân cư (Residential) - Viettel",
                        "Tính năng nổi bật:",
                        "✓ Sạch 100%: Chuẩn IP hộ gia đình",
                        "✓ Băng thông: Không giới hạn dung lượng tốc độ",
                        "✓ Băng thông: Không giới hạn dung lượng (Unlimited)",
                        "✓ Giao thức: Tùy chọn HTTP",
                        "✓ Bảo mật: Có chế để đảng đổi Pass bảo vệ tài khoản"
                    ],
                    cta: "MUA NGAY"
                },
                {
                    name: "2. GÓI DATACENTER VIỆT NAM (100 IP)",
                    price: "Giá: 480.000đ / 30 ngày (Rẻ nhất)",
                    features: [
                        "Giải pháp Tiết kiệm - Số lượng lớn. Tối ưu cho chạy Tool NMO.",
                        "Số lượng: 100 Proxy IP Tĩnh",
                        "Loại IP: Data-center (Máy chủ) Việt Nam",
                        "Tính năng nổi bật:",
                        "✓ Tốc độ cao: Server đường truyền mạnh nhé, Ping thấp",
                        "✓ Băng thông: Không giới hạn dung lượng tốc độ",
                        "✓ Giao thức: Tùy chọn HTTP hoặc SOCKS5",
                        "✓ Linh hoạt: Hỗ trợ gia hạn linh hoạt theo tháng"
                    ],
                    cta: "MUA NGAY"
                },
                {
                    name: "3. GÓI DÂN CƯ VNPT (96 IP)",
                    price: "Giá: 675.000đ / 30 ngày",
                    features: [
                        "Mạng VNPT ổn định, lâu đời. Sự lựa chọn an toàn cho các tài khoản TMDT.",
                        "Số lượng: 96 Proxy IP Tĩnh",
                        "Loại IP: Dân cư (Residential) - VNPT",
                        "Tính năng nổi bật:",
                        "✓ Uy tín: IP từ nhà mạng lâu đời nhất Việt Nam.",
                        "✓ Băng thông: Không giới hạn dung lượng tốc độ",
                        "✓ Giao thức: Tùy chọn HTTP hoặc SOCKS5",
                        "✓ Tiện ích: Có thể đổi mật Proxy bất cứ lúc nào.",
                        "Giá tham khảo: 675.000đ / 30 ngày"
                    ],
                    cta: "MUA NGAY"
                },
                {
                    name: "4. GÓI DÂN CƯ FPT (96 IP)",
                    price: "Giá: 675.000đ / 30 ngày",
                    features: [
                        "Mạng FPT tốc độ cao, cơ sở hạ tầng mới. Thích hợp cho rụp acc, checkout nhanh.",
                        "Số lượng: 96 Proxy IP Tĩnh",
                        "Loại IP: Dân cư (Residential) - FPT",
                        "Tính năng nổi bật:",
                        "✓ Tốc độ: Hạ tăng cấp quang FPT mạnh mẽ",
                        "✓ Băng thông: Không giới hạn dung lượng tốc độ",
                        "✓ Giao thức: Tùy chọn HTTP hoặc SOCKS5",
                        "✓ Hỗ trợ: Gia hạn dễ dàng, gia nguyên IP cũ.",
                        "Giá tham khảo: 675.000đ / 30 ngày"
                    ],
                    cta: "MUA NGAY"
                }
            ]
        },
        {
            title: "Bảng giá dịch vụ Key Proxy IPV4",
            packages: [
                {
                    name: "1. Key xoay ipv4 theo ngày (24 giờ)",
                    price: "Giá khuyến mãi: 2.500đ / Key / Ngày",
                    features: [
                        "Phù hợp trải nghiệm dịch vụ hoặc chạy dự án ngắn hạn.",
                        "Thời hạn: 24 Giờ",
                        "Đặc điểm kỹ thuật:",
                        "✓ Xoay IP chủ động: Hỗ trợ đổi IP qua API hoặc Tool.",
                        "✓ Không giới hạn: Số lần đổi IP và Băng thông data.",
                        "✓ Nguồn IP chất lượng: Hạ tầng Viettel, VNPT, FPT phủ sóng 63 tỉnh thành.",
                        "✓ Thời gian sống đổi IP: Tối thiểu 60 giây/lần."
                    ],
                    cta: "MUA NGAY"
                },
                {
                    name: "2. Key xoay ipv4 theo tuần (7 ngày)",
                    price: "Giá khuyến mãi: 14.000đ / Key / Tuần",
                    features: [
                        "Tiết kiệm chi phí hơn cho nhu cầu sử dụng liên tục trong tuần.",
                        "Thời hạn: 07 Ngày",
                        "Đặc điểm kỹ thuật:",
                        "✓ Xoay IP chủ động: Hỗ trợ đổi IP qua API hoặc Tool.",
                        "✓ Không giới hạn: Số lần đổi IP và Băng thông data.",
                        "✓ Nguồn IP chất lượng: Hạ tăng Viettel, VNPT, FPT phủ sóng 63 tỉnh thành.",
                        "✓ Thời gian sống đổi IP: Từ 15 - 30 phút/IP"
                    ],
                    cta: "MUA NGAY"
                },
                {
                    name: "3. Key xoay ipv4 theo tháng (30 ngày)",
                    price: "Giá khuyến mãi: 45.000đ / Key / Tháng",
                    features: [
                        "Giải pháp tiết tra chi phí cho dân MMO muối nick, chạy tool dài hạn.",
                        "Thời hạn: 30 Ngày",
                        "Đặc điểm kỹ thuật:",
                        "✓ Xoay IP chủ động: Hỗ trợ đổi IP qua API hoặc Tool.",
                        "✓ Không giới hạn: Số lần đổi IP và Băng thông data.",
                        "✓ Nguồn IP chất lượng: Hạ tầng Viettel, VNPT, FPT phủ sóng 63 tỉnh thành.",
                        "✓ Cam kết: Hỗ thông tự build, không qua trung gian, ổn định 99%."
                    ],
                    cta: "MUA NGAY"
                }
            ]
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {pricingTables.map((table, tableIndex) => (
                    <div key={tableIndex} className="mb-20 last:mb-0">
                        <h2
                            className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 mb-12"
                            data-aos="fade-up"
                        >
                            {table.title}
                        </h2>

                        <div className={`grid grid-cols-1 ${table.packages.length === 3 ? 'lg:grid-cols-3' : table.packages.length === 4 ? 'lg:grid-cols-2 xl:grid-cols-4' : 'lg:grid-cols-3'} gap-8`}>
                            {table.packages.map((pkg, index) => (
                                <div
                                    key={index}
                                    className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                                    data-aos="slide-up"
                                    data-aos-delay={index * 100}
                                >
                                    <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                                        {pkg.name}
                                    </h3>
                                    {pkg.subtitle && (
                                        <p className="text-sm text-gray-600 italic mb-3">
                                            {pkg.subtitle}
                                        </p>
                                    )}
                                    <div className="text-xl font-bold text-red-600 mb-4">
                                        {pkg.price}
                                    </div>
                                    <ul className="space-y-2 mb-6 flex-grow">
                                        {pkg.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="text-sm text-gray-700">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button 
                                        onClick={onOpenContactModal}
                                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 mt-auto"
                                    >
                                        {pkg.cta}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
