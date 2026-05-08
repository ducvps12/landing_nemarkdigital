import Image from 'next/image';
import { useState } from 'react';

export default function SalesModelsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const models = [
        {
            title: "Website Đặt Lịch & Tư Vấn",
            description: "Dành cho Spa, Nha khoa, Du lịch hoặc Dịch vụ sửa chữa.",
            feature: "Cho phép khách hàng xem bảng giá, chọn khung giờ rảnh và đặt cọc/thanh toán online ngay trên Web/App.",
            image: "/online-sales/model-1.png"
        },
        {
            title: "Bán Lẻ Trực Tiếp (DTC)",
            description: "Mô hình phổ biến nhất (Thời trang, Mỹ phẩm, Đồ ăn vặt...). Doanh nghiệp bán trực tiếp cho người tiêu dùng cuối.",
            feature: "Giỏ hàng thông minh, Flash Sale đếm ngược, Mua kèm deal sốc để tăng giá trị đơn hàng (AOV).",
            image: "/online-sales/model-2.png"
        },
        {
            title: "Cổng Đặt Hàng Đại Lý",
            description: "Dành cho doanh nghiệp sản xuất phân phối. Đại lý cần đăng nhập mới thấy giá sỉ.",
            feature: "Phân cấp giá theo hạng thành viên (Bạc/Vàng/Kim Cương), đặt hàng số lượng lớn (Bulk order), công nợ tự động.",
            image: "/online-sales/model-3.png"
        },
        {
            title: "Chuỗi Cửa Hàng O2O",
            description: "Dành cho các thương hiệu có nhiều điểm bán vật lý. Kết hợp online và offline.",
            feature: "Tính năng \"Click & Collect\" (Mua online - Nhận tại cửa hàng), kiểm tra tồn kho tại cửa hàng gần nhất, tích điểm đa kênh.",
            image: "/online-sales/model-4.png"
        },
        {
            title: "Tiếp Thị Liên Kết (Affiliate)",
            description: "Tận dụng mạng lưới cộng tác viên (CTV) để bán hàng mà không cần tốn chi phí quảng cáo (Ads).",
            feature: "Mỗi CTV có link riêng/mã giới thiệu riêng. Hệ thống tự động tính hoa hồng khi đơn hàng thành công.",
            image: "/online-sales/model-5.png"
        }
    ];

    // Get 3 visible models based on current index
    const getVisibleModels = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % models.length;
            visible.push({ ...models[index], key: index });
        }
        return visible;
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + models.length) % models.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % models.length);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-12 text-center" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Mô hình bán hàng gợi ý
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Lựa chọn mô hình phù hợp với doanh nghiệp của bạn
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-primary hover:text-white text-primary rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                        aria-label="Previous"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Models Grid - Display 3 at a time */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {getVisibleModels().map((model, index) => (
                            <div
                                key={model.key}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={model.image}
                                        alt={model.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                                        {model.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        <strong>Mô tả:</strong> {model.description}
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        <strong>Tính năng chốt đơn:</strong> {model.feature}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-primary hover:text-white text-primary rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                        aria-label="Next"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {models.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
