'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Monitor, Smartphone, Tablet, X, PhoneCall, ArrowLeft, ExternalLink, AlertTriangle } from 'lucide-react'
import { websiteDatabase, defaultTemplate } from '@/lib/websiteData'

export default function DemoPreviewPage() {
    const params = useParams()
    const router = useRouter()
    const slug = params.slug as string
    const locale = params.locale as string

    const dbEntry = websiteDatabase[slug]
    const product = dbEntry || { ...defaultTemplate, slug, title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') }

    const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
    const [isLoading, setIsLoading] = useState(true)
    const [iframeError, setIframeError] = useState(false)
    const iframeRef = useRef<HTMLIFrameElement>(null)

    // Wait until mounted to avoid hydration mismatch
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    // Pre-check if URL allows iframe embedding by fetching headers
    useEffect(() => {
        if (!mounted || !product.demoUrl) return

        const controller = new AbortController()

        // Try to check iframe-ability via a HEAD request through our proxy API
        fetch(`/api/check-iframe?url=${encodeURIComponent(product.demoUrl)}`, {
            signal: controller.signal,
        })
            .then(res => res.json())
            .then(data => {
                if (data.blocked) {
                    setIframeError(true)
                    setIsLoading(false)
                }
            })
            .catch(() => {
                // If check fails, let the iframe try to load normally
            })

        return () => controller.abort()
    }, [mounted, product.demoUrl])

    // Fallback timeout - if iframe hasn't loaded after 10s, show error
    useEffect(() => {
        if (!mounted) return

        const timeout = setTimeout(() => {
            if (isLoading) {
                setIframeError(true)
                setIsLoading(false)
            }
        }, 10000)

        return () => clearTimeout(timeout)
    }, [mounted, isLoading])

    const handleIframeLoad = useCallback(() => {
        // Give a short delay to let the iframe settle
        setTimeout(() => {
            const iframe = iframeRef.current
            if (!iframe) return

            try {
                // Same-origin check
                const doc = iframe.contentDocument || iframe.contentWindow?.document
                if (doc && doc.body) {
                    const bodyContent = doc.body.innerHTML.trim()
                    if (bodyContent.length > 0) {
                        setIsLoading(false)
                        setIframeError(false)
                    } else {
                        setIsLoading(false)
                        setIframeError(true)
                    }
                    return
                }
            } catch {
                // Cross-origin: can't access content
                // onLoad fires regardless of X-Frame-Options blocking.
                // We rely on the pre-check API or timeout fallback.
                // For now, just hide loader - if pre-check already set error, that takes priority.
                setIsLoading(false)
            }
        }, 1000)
    }, [])

    const getIframeContainerClasses = () => {
        switch (device) {
            case 'mobile':
                return 'w-[375px] h-[812px] border-[8px] border-gray-900 rounded-[3rem] shadow-2xl relative overflow-hidden bg-white mt-8 mx-auto flex-shrink-0'
            case 'tablet':
                return 'w-[768px] h-[1024px] border-[12px] border-gray-900 rounded-[2rem] shadow-2xl relative overflow-hidden bg-white mt-8 mx-auto flex-shrink-0'
            case 'desktop':
            default:
                return 'w-full h-full bg-white relative'
        }
    }

    if (!mounted) return null

    return (
        <div className="h-screen w-screen overflow-hidden bg-gray-100 flex flex-col font-sans fixed inset-0 z-50 isolate">
            {/* Topbar */}
            <div className="h-[60px] bg-white border-b border-gray-200 shrink-0 flex items-center justify-between px-4 lg:px-6 shadow-sm z-50">
                
                {/* Left: Branding & Back */}
                <div className="flex items-center gap-4 h-full">
                    <button 
                        onClick={() => router.push(`/${locale}/mau-website/${slug}`)}
                        className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="hidden sm:inline">Quay lại</span>
                    </button>
                    <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded shrink-0 overflow-hidden flex items-center justify-center bg-primary text-white font-bold text-lg">
                            N
                        </div>
                        <span className="font-semibold text-gray-800 line-clamp-1 max-w-[150px] lg:max-w-xs text-sm lg:text-base">
                            {product.title}
                        </span>
                    </div>
                </div>

                {/* Center: Device Switcher */}
                <div className="hidden md:flex items-center gap-1 bg-gray-100/80 p-1 rounded-xl border border-gray-200/50">
                    <button 
                        onClick={() => setDevice('desktop')}
                        className={`p-2 rounded-lg transition-all flex items-center justify-center w-12 h-9 ${device === 'desktop' ? 'bg-white text-primary shadow-sm ring-1 ring-gray-200/50' : 'text-gray-500 hover:text-gray-900'}`}
                        title="Máy tính"
                    >
                        <Monitor className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => setDevice('tablet')}
                        className={`p-2 rounded-lg transition-all flex items-center justify-center w-12 h-9 ${device === 'tablet' ? 'bg-white text-primary shadow-sm ring-1 ring-gray-200/50' : 'text-gray-500 hover:text-gray-900'}`}
                        title="Máy tính bảng"
                    >
                        <Tablet className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => setDevice('mobile')}
                        className={`p-2 rounded-lg transition-all flex items-center justify-center w-12 h-9 ${device === 'mobile' ? 'bg-white text-primary shadow-sm ring-1 ring-gray-200/50' : 'text-gray-500 hover:text-gray-900'}`}
                        title="Điện thoại"
                    >
                        <Smartphone className="w-4 h-5" />
                    </button>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 lg:gap-3">
                    <a 
                        href={product.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hidden lg:flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium px-3 py-2"
                        title="Mở xem đầy đủ tại tab mới"
                    >
                        <X className="w-4 h-4" />
                        <span>Bỏ khung</span>
                    </a>
                    
                    <a 
                        href="tel:0914659183"
                        className="bg-primary hover:bg-primary/90 text-white px-3 lg:px-5 py-2 lg:py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm shadow-primary/20"
                    >
                        <PhoneCall className="w-4 h-4" />
                        <span className="hidden sm:inline">Nhận tư vấn</span>
                    </a>
                    
                    {/* Mobile menu fallback for Bỏ khung */}
                    <a 
                        href={product.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-900 bg-gray-50 rounded-lg border border-gray-200"
                    >
                        <X className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Mobile Switcher (visible only on small screens) */}
            <div className="md:hidden flex items-center justify-center gap-2 bg-white border-b border-gray-200 py-2 shrink-0 shadow-sm z-50">
                <button 
                    onClick={() => setDevice('desktop')}
                    className={`p-2 rounded-lg transition-all w-16 flex justify-center ${device === 'desktop' ? 'bg-blue-50 text-primary' : 'text-gray-500'}`}
                >
                    <Monitor className="w-5 h-5" />
                </button>
                <button 
                    onClick={() => setDevice('tablet')}
                    className={`p-2 rounded-lg transition-all w-16 flex justify-center ${device === 'tablet' ? 'bg-blue-50 text-primary' : 'text-gray-500'}`}
                >
                    <Tablet className="w-5 h-5" />
                </button>
                <button 
                    onClick={() => setDevice('mobile')}
                    className={`p-2 rounded-lg transition-all w-16 flex justify-center ${device === 'mobile' ? 'bg-blue-50 text-primary' : 'text-gray-500'}`}
                >
                    <Smartphone className="w-5 h-5" />
                </button>
            </div>

            {/* Main Area: Iframe Container */}
            <div className="flex-1 overflow-auto flex flex-col items-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-gray-100 relative custom-scrollbar z-10 w-full">
                
                {/* Loader showing while iframe is loading */}
                {isLoading && !iframeError && (
                    <div className="absolute inset-x-0 top-[20%] flex flex-col items-center justify-center z-20 transition-opacity duration-500 pointer-events-none">
                        <div className="w-12 h-12 relative flex items-center justify-center">
                            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
                            <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                        </div>
                        <p className="mt-4 text-gray-500 font-medium text-sm bg-white/90 px-5 py-2 rounded-full shadow-sm backdrop-blur-sm border border-gray-100">
                            Đang tải giao diện...
                        </p>
                    </div>
                )}

                {/* Error Fallback - when iframe is blocked */}
                {iframeError && (
                    <div className="absolute inset-0 flex items-center justify-center z-30 bg-gray-50/80 backdrop-blur-sm">
                        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-4 text-center border border-gray-100">
                            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-5">
                                <AlertTriangle className="w-8 h-8 text-amber-500" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Không thể xem trước trong khung
                            </h3>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                Trang demo này không hỗ trợ xem trong iframe. Vui lòng mở trực tiếp tại tab mới để trải nghiệm đầy đủ.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <a
                                    href={product.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors shadow-sm shadow-primary/20"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Mở Demo tại tab mới
                                </a>
                                <button
                                    onClick={() => router.push(`/${locale}/mau-website/${slug}`)}
                                    className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Quay lại
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div 
                    className={`transition-all duration-700 ease-in-[cubic-bezier(0.4,0,0.2,1)] ${getIframeContainerClasses()} isolate`}
                >
                    {!iframeError && (
                        <iframe 
                            ref={iframeRef}
                            src={product.demoUrl}
                            className={`w-full h-full border-none bg-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} z-10 relative`}
                            onLoad={handleIframeLoad}
                            onError={() => { setIframeError(true); setIsLoading(false); }}
                            referrerPolicy="no-referrer-when-downgrade"
                            allow="autoplay; encrypted-media"
                        />
                    )}
                    
                    {/* Simulated Camera notch for mobile */}
                    {device === 'mobile' && (
                        <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-30 pointer-events-none">
                            <div className="w-[120px] h-[24px] bg-gray-900 rounded-b-[18px] flex items-center justify-center shadow-sm">
                                <div className="w-12 h-1.5 bg-gray-800 rounded-full ml-2"></div>
                                <div className="w-2.5 h-2.5 bg-[#0a0a20] rounded-full ml-3 border border-gray-800 flex items-center justify-center">
                                    <div className="w-1 h-1 bg-blue-900/40 rounded-full relative overflow-hidden">
                                        <div className="absolute right-0 top-0 w-1/2 h-full bg-white/20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Simulated Tablet camera */}
                    {device === 'tablet' && (
                        <div className="absolute top-2 inset-x-0 h-4 flex justify-center z-30 pointer-events-none">
                            <div className="w-2.5 h-2.5 rounded-full bg-gray-800 border-2 border-gray-700 relative overflow-hidden">
                                <div className="absolute right-0 top-0 w-1/2 h-full bg-white/20"></div>
                            </div>
                        </div>
                    )}

                    {/* Home Indicator */}
                    {(device === 'mobile' || device === 'tablet') && (
                        <div className="absolute bottom-1.5 inset-x-0 flex justify-center z-30 pointer-events-none">
                            <div className={`${device === 'mobile' ? 'w-32' : 'w-48'} h-1.5 bg-gray-900/30 backdrop-blur-sm rounded-full`}></div>
                        </div>
                    )}
                </div>
                
                {device !== 'desktop' && <div className="h-16 shrink-0 w-full" />}
            </div>
            
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #cbd5e1;
                    border-radius: 20px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: #94a3b8;
                }
            `}</style>
        </div>
    )
}
