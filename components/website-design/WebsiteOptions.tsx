'use client'

import Image from 'next/image';

export default function WebsiteOptions() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-4" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark uppercase">
                        LỰA CHỌN GÓI GIẢI PHÁP PHÙ HỢP
                    </h2>
                </div>
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto" data-aos="fade-up">
                    Với hơn 6 năm kinh nghiệm thực chiến, Nemark mang đến các giải pháp linh hoạt, từ tiết kiệm chi phí cho khởi nghiệp đến thiết kế cao cấp cho doanh nghiệp lớn.
                </p>

                {/* 2 Options */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Option 1 - Theo Mẫu */}
                    <div className="border border-gray-200 rounded-2xl overflow-hidden" data-aos="fade-right">
                        {/* Image */}
                        <div className="aspect-video relative">
                            <Image
                                src="/website-design/option-template.png"
                                alt="Website theo mẫu"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary-dark mb-2">
                                THIẾT KẾ WEBSITE THEO MẪU
                            </h3>
                            <p className="text-accent font-semibold mb-4">
                                Tối ưu chi phí khởi tạo (Chỉ từ 1.500.000đ – 3.000.000đ)
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Lựa chọn từ kho giao diện mẫu hiện đại, chỉnh sửa màu sắc theo thương hiệu.</li>
                                <li>• Tích hợp đầy đủ tính năng cơ bản: Giới thiệu, Tin tức, Sản phẩm, Chat Zalo/Facebook.</li>
                                <li>• Triển khai thần tốc, bàn giao chỉ trong 2 – 3 ngày làm việc.</li>
                                <li>• <span className="text-primary font-semibold">Quà tặng:</span> Miễn phí Tên miền quốc tế (.com/.net) & Hosting SSD 1GB năm đầu.</li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-500 italic">
                                Phù hợp: Cá nhân, Shop online nhỏ, Startup cần web nhanh & rẻ.
                            </p>
                        </div>
                    </div>

                    {/* Option 2 - Theo Yêu Cầu */}
                    <div className="border border-primary rounded-2xl overflow-hidden" data-aos="fade-left">
                        {/* Image */}
                        <div className="aspect-video relative">
                            <Image
                                src="/website-design/option-custom.png"
                                alt="Website theo yêu cầu"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary-dark mb-2">
                                THIẾT KẾ WEBSITE THEO YÊU CẦU
                            </h3>
                            <p className="text-accent font-semibold mb-4">
                                Thiết kế độc bản – Chuẩn nhận diện thương hiệu (Gói Pro & Premium)
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Quy trình bài bản: Thiết kế UI/UX riêng trên Figma, không dùng Template có sẵn.</li>
                                <li>• Lập trình tính năng chuyên sâu theo đặc thù ngành (BĐS, Spa, E-commerce, Booking).</li>
                                <li>• Tối ưu SEO Technical & Tốc độ tải trang đạt chuẩn Google (85 – 95 điểm).</li>
                                <li>• Tư vấn chiến lược tăng tỷ lệ chuyển đổi (CTA, Form, Tracking hành vi).</li>
                                <li>• Hỗ trợ kỹ thuật ưu tiên 24/7 + Bảo hành trọn đời.</li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-500 italic">
                                Phù hợp: Doanh nghiệp B2B, Showroom, Thương hiệu lớn cần khẳng định vị thế.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
