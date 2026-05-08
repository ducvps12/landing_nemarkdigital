'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProcessSection() {
    const [activeStep, setActiveStep] = useState(0)

    const steps = [
        {
            number: 1,
            title: 'Khảo sát & Phân tích nghiệp vụ',
            heading: 'Khảo sát & Phân tích nghiệp vụ',
            content: [
                {
                    subtitle: 'Tìm hiểu Nhu Cầu:',
                    description: 'Tiến hành cuộc gọi hoặc gặp gỡ trực tiếp với khách hàng để thu thập các yêu cầu cụ thể về tích hợp thanh toán, API và CRM.'
                },
                {
                    subtitle: 'Phân tích và đề xuất:',
                    description: 'Dựa trên thông tin đã có, phân tích và đề xuất giải pháp tích hợp, công nghệ phù hợp.'
                }
            ]
        },
        {
            number: 2,
            title: 'Thiết kế luồng dữ liệu',
            heading: 'Thiết kế luồng dữ liệu',
            content: [
                {
                    subtitle: 'Thiết kế kiến trúc:',
                    description: 'Xây dựng sơ đồ luồng dữ liệu giữa các hệ thống, định nghĩa các endpoint API và cách thức đồng bộ.'
                },
                {
                    subtitle: 'Lập kế hoạch chi tiết:',
                    description: 'Thiết lập timeline, phân công nhiệm vụ cho đội ngũ, gửi báo giá chi tiết dựa trên yêu cầu.'
                }
            ]
        },
        {
            number: 3,
            title: 'Lập trình & Đấu nối API',
            heading: 'Lập trình & Đấu nối API',
            content: [
                {
                    subtitle: 'Phát triển code:',
                    description: 'Lập trình các module kết nối, xử lý webhook, đồng bộ dữ liệu theo thiết kế đã được phê duyệt.'
                },
                {
                    subtitle: 'Đấu nối hệ thống:',
                    description: 'Kết nối với cổng thanh toán, hệ thống bên thứ 3 và CRM, đảm bảo luồng dữ liệu hoạt động chính xác.'
                }
            ]
        },
        {
            number: 4,
            title: 'Kiểm thử môi trường giả lập',
            heading: 'Kiểm thử môi trường giả lập',
            content: [
                {
                    subtitle: 'Test trên Sandbox:',
                    description: 'Thực hiện các kịch bản test trên môi trường giả lập để đảm bảo tích hợp hoạt động đúng.'
                },
                {
                    subtitle: 'Sửa lỗi và tối ưu:',
                    description: 'Phát hiện và xử lý các lỗi, tối ưu performance và bảo mật trước khi triển khai thực tế.'
                }
            ]
        },
        {
            number: 5,
            title: 'Triển khai thực tế',
            heading: 'Triển khai thực tế',
            content: [
                {
                    subtitle: 'Go-live:',
                    description: 'Triển khai tích hợp lên môi trường production, kích hoạt các kết nối thanh toán và API.'
                },
                {
                    subtitle: 'Giám sát:',
                    description: 'Theo dõi sát sao trong giai đoạn đầu để đảm bảo hệ thống hoạt động ổn định.'
                }
            ]
        },
        {
            number: 6,
            title: 'Bàn giao tài liệu & Đào tạo',
            heading: 'Bàn giao tài liệu & Đào tạo',
            content: [
                {
                    subtitle: 'Bàn giao:',
                    description: 'Cung cấp tài liệu kỹ thuật chi tiết, hướng dẫn sử dụng và các thông tin cần thiết.'
                },
                {
                    subtitle: 'Đào tạo:',
                    description: 'Hướng dẫn đội ngũ khách hàng vận hành, quản lý và xử lý các tình huống thường gặp.'
                }
            ]
        }
    ]

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Sidebar - Steps List */}
                    <div className="lg:col-span-3" data-aos="fade-right">
                        <div className="bg-gradient-to-br from-primary-light/30 via-pink-50 to-orange-50 rounded-2xl p-6 sticky top-24">
                            <h3 className="text-primary font-extrabold text-lg uppercase tracking-wide mb-6">
                                Quy Trình Triển Khai
                            </h3>
                            <div className="space-y-2">
                                {steps.map((step, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveStep(index)}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${activeStep === index
                                            ? 'bg-white shadow-md text-primary font-semibold'
                                            : 'hover:bg-white/50 text-gray-700'
                                            }`}
                                    >
                                        <span className="text-sm">
                                            {step.number} - {step.title}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Middle - Content */}
                    <div className="lg:col-span-5" data-aos="fade-up">
                        <div className="h-full">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 italic">
                                {steps[activeStep].heading}
                            </h2>

                            <div className="space-y-6">
                                {steps[activeStep].content.map((item, index) => (
                                    <div key={index}>
                                        <p className="text-gray-800">
                                            <span className="font-bold text-primary">{item.subtitle}</span>{' '}
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right - Single Image */}
                    <div className="lg:col-span-4 hidden lg:block" data-aos="fade-left">
                        <div className="rounded-2xl overflow-hidden shadow-xl h-full">
                            <Image
                                src="/images/nemark-work-process.png"
                                alt="Quy trình triển khai"
                                width={400}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
