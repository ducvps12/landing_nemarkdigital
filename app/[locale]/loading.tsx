export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-200" />
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin" />
                </div>
                {/* Logo pulse */}
                <span className="text-lg font-bold text-slate-700 animate-pulse tracking-wide">
                    Nemark
                </span>
            </div>
        </div>
    )
}
