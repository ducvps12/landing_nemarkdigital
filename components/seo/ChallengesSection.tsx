export default function ChallengesSection() {
    const challenges = [
        {
            number: 1,
            text: "Website có nhưng không có khách truy cập"
        },
        {
            number: 2,
            text: "Chạy quảng cáo tốn kém, dừng là mất khách"
        },
        {
            number: 3,
            text: "Từ khóa lên Top nhưng không ra đơn hàng"
        },
        {
            number: 4,
            text: "Thứ hạng từ khóa thiếu ổn định"
        },
        {
            number: 5,
            text: "Nội dung nghèo nàn, tỉ lệ thoát trang cao"
        }
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                    Thách thức khiến doanh nghiệp trăn trở khi làm SEO
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {challenges.map((challenge) => (
                        <div
                            key={challenge.number}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
                        >
                            <div className="text-5xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                {challenge.number}
                            </div>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed">
                                {challenge.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
