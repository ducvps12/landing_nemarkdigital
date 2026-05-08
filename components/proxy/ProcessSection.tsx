'use client'

export default function ProcessSection() {
    const steps = [
        {
            number: "1",
            title: "Tư vấn mục đích sử dụng",
            icon: "contact_support"
        },
        {
            number: "2",
            title: "Lựa chọn Quốc gia & Loại IP",
            icon: "public"
        },
        {
            number: "3",
            title: "Thanh toán & Kích hoạt",
            icon: "payment"
        },
        {
            number: "4",
            title: "Bàn giao thông tin (IP:Port)",
            icon: "assignment_turned_in"
        },
        {
            number: "5",
            title: "Hướng dẫn tích hợp",
            icon: "integration_instructions"
        },
        {
            number: "6",
            title: "Giám sát & Bảo hành 1:1",
            icon: "support_agent"
        }
    ]

    return (
        <section className="py-20 bg-[#E8F5E9]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 mb-16"
                    data-aos="fade-up"
                >
                    QUY TRÌNH
                </h2>

                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-6"
                            data-aos="fade-right"
                            data-aos-delay={index * 100}
                        >
                            {/* Step number circle */}
                            <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                                <span className="material-icons text-white text-3xl">{step.icon}</span>
                            </div>

                            {/* Step content */}
                            <div className="flex-1 bg-white rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3">
                                    <span className="text-primary font-bold text-lg">Bước {step.number}:</span>
                                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
