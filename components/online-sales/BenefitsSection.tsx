'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function BenefitsSection() {
    const benefits = [
        {
            number: "1.",
            title: "Tự Chủ Nền Tảng Kinh Doanh",
            description: "Xóa bỏ hoàn toàn nỗi lo \"xây nhà trên đất người khác\". Doanh nghiệp nắm toàn quyền kiểm soát luật chơi, không còn rủi ro bị khóa tài khoản, giới hạn hiển thị hay bóp tương tác do thay đổi thuật toán bất ngờ của các sàn TMĐT."
        },
        {
            number: "2.",
            title: "Tối Ưu Hóa Biên Lợi Nhuận",
            description: "Cắt giảm triệt để các chi phí trung gian đắt đỏ như phí sàn (8-14%) hay chiết khấu bắt buộc. Việc sở hữu kênh bán hàng riêng giúp doanh nghiệp linh hoạt trong chiến lược giá và giữ lại trọn vẹn lợi nhuận ròng trên từng đơn hàng."
        },
        {
            number: "3.",
            title: "Sở Hữu Trọn Vẹn Dữ Liệu Khách Hàng",
            description: "Chuyển đổi từ việc \"đi thuê\" sang \"sở hữu\" Big Data. Nemark giúp bạn nắm giữ 100% thông tin (SĐT, Email, hành vi mua sắm) để phân tích Insight sâu và triển khai các chiến dịch Remarketing chính xác, điều mà các sàn thường che giấu."
        },
        {
            number: "4.",
            title: "Nâng Tầm Uy Tín Thương Hiệu",
            description: "Sở hữu Website/App với giao diện UI/UX độc quyền, được thiết kế đồng bộ nhận diện thương hiệu. Đây là \"bộ mặt\" chuyên nghiệp trên Internet, giúp gia tăng niềm tin khách hàng và định vị doanh nghiệp ở phân khúc cao hơn đối thủ."
        },
        {
            number: "5.",
            title: "Gia Tăng Giá Trị Vòng Đời Khách Hàng",
            description: "Tích hợp sẵn hệ thống chăm sóc khách hàng tự động: Tích điểm, thăng hạng thành viên, ưu đãi sinh nhật. Giúp doanh nghiệp giữ chân khách hàng cũ, kích thích mua lại nhiều lần và giảm chi phí tìm kiếm khách mới."
        },
        {
            number: "6.",
            title: "Vận Hành Tự Động & Tinh Gọn",
            description: "Hệ thống hóa toàn bộ quy trình từ đặt hàng, thanh toán, quản lý kho đến báo cáo doanh thu. Giải pháp giúp tiết kiệm tối đa chi phí nhân sự, giảm thiểu sai sót thủ công và giúp chủ doanh nghiệp quản lý mọi lúc mọi nơi."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-12 text-center" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                        Lợi ích khi có hệ thống riêng
                    </h2>
                </div>

                {/* Benefits Swiper - 3 slides visible, loop enabled */}
                <div className="relative" data-aos="fade-up">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="benefits-swiper"
                    >
                        {benefits.map((benefit, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full min-h-[320px]">
                                    {/* Number */}
                                    <div className="text-5xl font-bold text-primary mb-4">
                                        {benefit.number}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-primary mb-4">
                                        {benefit.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {benefit.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Blue Banner Slogan - Full Width */}
            <div className="mt-16 w-full bg-primary py-8" data-aos="fade-up">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
                    Chốt đơn hiệu quả – Tăng trưởng dài hạn
                </p>
            </div>

            <style jsx global>{`
                .benefits-swiper {
                    padding-bottom: 50px !important;
                }
                
                .benefits-swiper .swiper-pagination-bullet {
                    background: #CBD5E1;
                    width: 10px;
                    height: 10px;
                }
                
                .benefits-swiper .swiper-pagination-bullet-active {
                    background: #4988C4;
                }
            `}</style>
        </section>
    );
}
