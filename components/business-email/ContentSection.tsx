import Image from 'next/image';

export default function ContentSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Image */}
                    <div className="relative" data-aos="fade-right">
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/email-content.png"
                                alt="Đội ngũ đang họp chiến lược chốt deal thành công"
                                width={600}
                                height={450}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl blur-xl"></div>
                    </div>

                    {/* Right Content */}
                    <div data-aos="fade-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            Làm Sao Để Email Doanh Nghiệp Giúp Chốt Deal Nhanh Hơn?
                        </h2>

                        {/* Quote Box */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-primary mb-8">
                            <blockquote className="text-lg text-slate-700 italic leading-relaxed">
                                &ldquo;Theo <span className="font-semibold text-primary">CAMPAIGN MONITOR</span>, khách hàng có xu hướng 
                                <span className="font-bold text-primary"> TIN TƯỞNG CAO HƠN 9 LẦN</span> từ một địa chỉ 
                                <span className="font-bold text-primary"> EMAIL TÊN MIỀN RIÊNG</span> thay vì Gmail hay Yahoo cá nhân.&rdquo;
                            </blockquote>
                        </div>

                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Email chuyên nghiệp không chỉ là công cụ liên lạc, nó là đại diện cho sự uy tín của doanh nghiệp bạn. 
                            Mỗi email gửi đi là một cơ hội để khẳng định thương hiệu và tạo ấn tượng chuyên nghiệp với đối tác.
                        </p>

                        {/* Key Benefits List */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="material-icons-outlined text-primary text-lg">trending_up</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Tăng tỷ lệ chuyển đổi</h4>
                                    <p className="text-sm text-slate-500">82% người mua hàng tin tưởng email từ tên miền công ty hơn</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="material-icons-outlined text-primary text-lg">handshake</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Xây dựng mối quan hệ bền vững</h4>
                                    <p className="text-sm text-slate-500">Đối tác đánh giá cao sự chuyên nghiệp từ những chi tiết nhỏ</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="material-icons-outlined text-primary text-lg">security</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Bảo vệ thông tin kinh doanh</h4>
                                    <p className="text-sm text-slate-500">Kiểm soát hoàn toàn dữ liệu email của doanh nghiệp</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <button className="group flex items-center gap-2 font-bold text-primary hover:text-primary-dark transition-colors">
                            <span>Tìm hiểu thêm về giải pháp</span>
                            <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

