'use client'

import React from 'react'

export default function GlobalLoading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-xl transition-all duration-500">
            {/* Minimalist Corporate Brand Spinner */}
            <div className="relative flex flex-col items-center">
                {/* Advanced Multi-Ring CSS Spinner */}
                <div className="relative w-28 h-28 mb-8">
                    {/* Ring 1 - Stationary Base */}
                    <div className="absolute inset-0 border-4 border-slate-100/50 rounded-full"></div>
                    
                    {/* Ring 2 - Primary Spinning Track */}
                    <div className="absolute inset-0 border-4 border-transparent border-t-primary border-r-primary rounded-full animate-[spin_1s_ease-in-out_infinite]"></div>
                    
                    {/* Ring 3 - Secondary Inner Spinning Track */}
                    <div className="absolute inset-2 border-4 border-transparent border-b-primary-dark border-l-primary-dark rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
                    
                    {/* Inner Branding (Pulsing N) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-white shadow-sm shadow-primary/20 rounded-full m-4">
                        <span className="text-3xl font-black font-display text-primary animate-pulse tracking-tighter">N</span>
                    </div>
                </div>

                {/* Stylish Loading Typography */}
                <div className="flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-1.5 backdrop-blur-md bg-white/50 px-6 py-2 rounded-full border border-primary/10 shadow-sm">
                        <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase">Đang tải</span>
                        <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="w-1.5 h-1.5 bg-primary/80 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                    </div>
                    <span className="text-xs font-medium text-slate-500/80 tracking-wide mt-2">Vui lòng chờ trong giây lát...</span>
                </div>
            </div>
        </div>
    )
}
