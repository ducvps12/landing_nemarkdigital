export default function GrowthBanner() {
    return (
        <section className="py-10 bg-gradient-to-r from-primary via-blue-600 to-primary-dark relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Chốt đơn hiệu quả - Tăng trưởng dài hạn
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                    Thương hiệu mạnh là nền tảng cho sự phát triển bền vững
                </p>
            </div>
        </section>
    );
}
