interface PricingSectionProps {
    onOpenContactModal: () => void
}

export default function PricingSection({ onOpenContactModal }: PricingSectionProps) {
    const plans = [
        {
            name: "CLOUD 1C-1G-20D PRO",
            badges: ["1 vCPU", "1 GB", "20 GB"],
            price: "42.000",
            priceUnit: "Tháng",
            specs: [
                { label: "CPU", value: "1 Core Platinum 8171M" },
                { label: "RAM", value: "1 GB DDR4" },
                { label: "DISK", value: "20 GB SSD NVME" },
                { label: "IP", value: "1 IPv4 Riêng" },
                { label: "Băng thông", value: "Không giới hạn", note: "dung lượng" },
                { label: "Uplink Port", value: "> 300 Mbps", note: "tại DC" },
                { label: "Ảo hóa", value: "Vmware" },
                { label: "Firewall", value: "AntiDos Pro" },
            ],
            isHighlight: false
        },
        {
            name: "CLOUD 2C-2G-30D PRO",
            badges: ["2 vCPU", "2 GB", "30 GB"],
            price: "84.000",
            priceUnit: "Tháng",
            specs: [
                { label: "CPU", value: "2 Core Platinum 8171M" },
                { label: "RAM", value: "2 GB DDR4" },
                { label: "DISK", value: "30 GB SSD NVME" },
                { label: "IP", value: "1 IPv4 Riêng" },
                { label: "Băng thông", value: "Không giới hạn", note: "dung lượng" },
                { label: "Uplink Port", value: "> 300 Mbps", note: "tại DC" },
                { label: "Ảo hóa", value: "Vmware" },
                { label: "Firewall", value: "AntiDos Pro" },
            ],
            isHighlight: true
        },
        {
            name: "CLOUD 6C-6G-80D PRO - 1 NĂM",
            badges: ["6 vCPU", "6 GB", "80 GB"],
            price: "1.097.600",
            priceUnit: "1 Năm",
            specs: [
                { label: "CPU", value: "6 Core Platinum 8171M" },
                { label: "RAM", value: "6 GB DDR4" },
                { label: "DISK", value: "80 GB SSD NVME" },
                { label: "IP", value: "1 IPv4 Riêng" },
                { label: "Băng thông", value: "Không giới hạn", note: "dung lượng" },
                { label: "Uplink Port", value: "> 300 Mbps", note: "tại DC" },
                { label: "Ảo hóa", value: "Vmware" },
                { label: "Firewall", value: "AntiDos Pro" },
            ],
            isHighlight: false
        },
        {
            name: "CLOUD 4C-4G-40D PRO SALE",
            badges: ["4 vCPU", "4 GB", "40 GB"],
            price: "168.000",
            priceUnit: "Tháng",
            specs: [
                { label: "CPU", value: "4 Core Platinum 8171M" },
                { label: "RAM", value: "4 GB DDR4" },
                { label: "DISK", value: "40 GB SSD NVME" },
                { label: "IP", value: "1 IPv4 Riêng" },
                { label: "Băng thông", value: "Không giới hạn", note: "dung lượng" },
                { label: "Uplink Port", value: "> 300 Mbps", note: "tại DC" },
                { label: "Ảo hóa", value: "Vmware" },
                { label: "Firewall", value: "AntiDos Pro" },
            ],
            isHighlight: false
        },
        {
            name: "CLOUD 6C-6G-80D PRO",
            badges: ["6 vCPU", "6 GB", "80 GB"],
            price: "280.000",
            priceUnit: "Tháng",
            specs: [
                { label: "CPU", value: "6 Core Platinum 8171M" },
                { label: "RAM", value: "6 GB DDR4" },
                { label: "DISK", value: "80 GB SSD NVME" },
                { label: "IP", value: "1 IPv4 Riêng" },
                { label: "Băng thông", value: "Không giới hạn", note: "dung lượng" },
                { label: "Uplink Port", value: "> 300 Mbps", note: "tại DC" },
                { label: "Ảo hóa", value: "Vmware" },
                { label: "Firewall", value: "AntiDos Pro" },
            ],
            isHighlight: false
        },
        {
            name: "CLOUD 18C-30G-240D PRO",
            badges: ["18 vCPU", "30 GB", "240 GB"],
            price: "1.232.000",
            priceUnit: "Tháng",
            specs: [
                { label: "CPU", value: "18 Core Platinum 8171M" },
                { label: "RAM", value: "30 GB DDR4" },
                { label: "DISK", value: "240 GB SSD NVME" },
                { label: "IP", value: "1 IPv4 Riêng" },
                { label: "Băng thông", value: "Không giới hạn", note: "dung lượng" },
                { label: "Uplink Port", value: "> 300 Mbps", note: "tại DC" },
                { label: "Ảo hóa", value: "Vmware" },
                { label: "Firewall", value: "AntiDos Pro" },
            ],
            isHighlight: false
        }
    ];

    return (
        <section id="pricing" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-12">
                    <div className="bg-primary text-white text-center py-4 rounded-lg">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Bảng giá dịch vụ VPS
                        </h2>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-xl ${plan.isHighlight
                                ? 'border-primary shadow-lg ring-2 ring-primary/20'
                                : 'border-gray-200 hover:border-primary'
                                }`}
                        >
                            {/* Plan Name */}
                            <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                                {plan.name}
                            </h3>

                            {/* Resource Badges */}
                            <div className="flex items-center justify-center gap-2 mb-4">
                                {plan.badges.map((badge, i) => (
                                    <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-xs font-medium text-gray-700 border border-gray-200">
                                        {i === 0 && (
                                            <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        )}
                                        {i === 1 && (
                                            <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                        )}
                                        {i === 2 && (
                                            <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" /></svg>
                                        )}
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            {/* Price */}
                            <div className="text-center mb-4 pb-4 border-b border-gray-200">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-lg text-gray-500">đ</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-0.5">/ {plan.priceUnit}</p>
                            </div>

                            {/* Specs */}
                            <div className="space-y-2.5 mb-6">
                                {plan.specs.map((spec, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">
                                            <span className="font-medium">{spec.label}:</span> {spec.value}
                                            {spec.note && <span className="text-gray-400 text-xs"> ({spec.note})</span>}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={onOpenContactModal}
                                className={`w-full py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 ${plan.isHighlight
                                    ? 'bg-primary hover:bg-primary-dark text-white'
                                    : 'bg-primary hover:bg-primary-dark text-white'
                                    }`}
                            >
                                Chọn gói →
                            </button>
                        </div>
                    ))}
                </div>

                {/* Note */}
                <div className="mt-8 text-center text-gray-600 text-sm">
                    <p>* Giá đã bao gồm VAT. Liên hệ để được tư vấn gói phù hợp nhất.</p>
                </div>
            </div>
        </section>
    );
}
