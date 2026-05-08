'use client'

export default function OrdersPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Lịch sử đơn hàng</h1>

            {/* Empty State */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-12 text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons-outlined text-slate-400 text-3xl">receipt_long</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-700 mb-2">Chưa có đơn hàng nào</h2>
                <p className="text-slate-500 mb-6 max-w-sm mx-auto">
                    Bạn chưa thực hiện giao dịch nào. Hãy khám phá các khóa học và dịch vụ của chúng tôi.
                </p>
                <a
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                    <span className="material-icons-outlined text-lg">explore</span>
                    Khám phá ngay
                </a>
            </div>
        </div>
    )
}
