export default function ValuePropositionSection() {
    const features = [
        {
            icon: 'verified_user',
            title: 'Tăng độ tin cậy',
            description: 'Xây dựng lòng tin tuyệt đối với mọi đối tác và khách hàng'
        },
        {
            icon: 'branding_watermark',
            title: 'Định vị Thương hiệu',
            description: 'Đồng bộ hoàn hảo nhận diện thương hiệu qua mỗi email'
        },
        {
            icon: 'mark_email_read',
            title: 'Tránh Spam',
            description: 'Đảm bảo tỷ lệ vào Inbox lên đến 99%, không bị vào Spam'
        },
        {
            icon: 'admin_panel_settings',
            title: 'Kiểm soát dữ liệu',
            description: 'Quản lý tập trung mọi tài khoản email nhân viên'
        },
        {
            icon: 'lock',
            title: 'Bảo mật cao',
            description: 'Mã hóa dữ liệu an toàn đa lớp, chống xâm nhập'
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Vì sao doanh nghiệp cần email theo tên miền?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Với email doanh nghiệp theo tên miền riêng, toàn bộ hệ thống liên lạc được quản lý tập trung, 
                        bảo mật tối đa và giảm <span className="text-primary font-semibold">40% nguy cơ thất lạc thông tin</span> quan trọng.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <span className="material-icons-outlined text-3xl">{feature.icon}</span>
                            </div>

                            {/* Content */}
                            <h3 className="font-bold text-lg text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

