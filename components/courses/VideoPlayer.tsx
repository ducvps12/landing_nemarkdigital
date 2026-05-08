'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface VideoPlayerProps {
    src: string
    onProgress?: (currentTime: number, duration: number) => void
    onComplete?: () => void
    initialTime?: number
}

export default function VideoPlayer({ src, onProgress, onComplete, initialTime = 0 }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(1)
    const [isMuted, setIsMuted] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [showControls, setShowControls] = useState(true)
    const [playbackRate, setPlaybackRate] = useState(1)
    const containerRef = useRef<HTMLDivElement>(null)
    const controlsTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
    const progressReportRef = useRef<ReturnType<typeof setInterval>>(undefined)
    const completedRef = useRef(false)

    // Load HLS.js dynamically for adaptive streaming
    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        if (src.endsWith('.m3u8') || src.includes('.m3u8')) {
            import('hls.js').then(({ default: Hls }) => {
                if (Hls.isSupported()) {
                    const hls = new Hls()
                    hls.loadSource(src)
                    hls.attachMedia(video)
                    hls.on(Hls.Events.MANIFEST_PARSED, () => {
                        if (initialTime > 0) video.currentTime = initialTime
                    })
                    return () => hls.destroy()
                } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    video.src = src
                    if (initialTime > 0) video.currentTime = initialTime
                }
            })
        } else {
            video.src = src
            if (initialTime > 0) video.currentTime = initialTime
        }
    }, [src, initialTime])

    // Report progress periodically
    useEffect(() => {
        progressReportRef.current = setInterval(() => {
            const video = videoRef.current
            if (video && onProgress && !video.paused) {
                onProgress(video.currentTime, video.duration)
            }
        }, 10000) // every 10 seconds

        return () => {
            if (progressReportRef.current) clearInterval(progressReportRef.current)
        }
    }, [onProgress])

    const togglePlay = useCallback(() => {
        const video = videoRef.current
        if (!video) return
        if (video.paused) {
            video.play()
            setIsPlaying(true)
        } else {
            video.pause()
            setIsPlaying(false)
        }
    }, [])

    const toggleFullscreen = useCallback(() => {
        if (!containerRef.current) return
        if (document.fullscreenElement) {
            document.exitFullscreen()
            setIsFullscreen(false)
        } else {
            containerRef.current.requestFullscreen()
            setIsFullscreen(true)
        }
    }, [])

    const handleTimeUpdate = useCallback(() => {
        const video = videoRef.current
        if (!video) return
        setCurrentTime(video.currentTime)

        // Mark as complete at 90%
        if (!completedRef.current && video.duration && video.currentTime / video.duration >= 0.9) {
            completedRef.current = true
            onComplete?.()
        }
    }, [onComplete])

    const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const video = videoRef.current
        if (!video) return
        const time = parseFloat(e.target.value)
        video.currentTime = time
        setCurrentTime(time)
    }, [])

    const handleMouseMove = useCallback(() => {
        setShowControls(true)
        if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current)
        controlsTimerRef.current = setTimeout(() => setShowControls(false), 3000)
    }, [])

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600)
        const m = Math.floor((seconds % 3600) / 60)
        const s = Math.floor(seconds % 60)
        if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
        return `${m}:${s.toString().padStart(2, '0')}`
    }

    return (
        <div
            ref={containerRef}
            className="relative group bg-black rounded-xl overflow-hidden aspect-video select-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setShowControls(false)}
        >
            {/* Anti-screenshot overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none mix-blend-multiply opacity-0" />

            <video
                ref={videoRef}
                className="w-full h-full object-contain cursor-pointer"
                onClick={togglePlay}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() => {
                    if (videoRef.current) setDuration(videoRef.current.duration)
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => {
                    setIsPlaying(false)
                    onProgress?.(duration, duration)
                }}
                playsInline
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
            />

            {/* Play overlay for paused state */}
            {!isPlaying && (
                <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center z-20"
                >
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                        <span className="material-icons text-white text-3xl ml-1">play_arrow</span>
                    </div>
                </button>
            )}

            {/* Controls */}
            <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-8 z-30 transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                {/* Progress bar */}
                <input
                    type="range"
                    min={0}
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1 mb-3 appearance-none bg-white/30 rounded-full cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                    style={{
                        background: `linear-gradient(to right, var(--color-primary) ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.3) ${(currentTime / (duration || 1)) * 100}%)`,
                    }}
                />

                <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center gap-3">
                        {/* Play/Pause */}
                        <button onClick={togglePlay} className="hover:text-primary transition-colors">
                            <span className="material-icons text-xl">
                                {isPlaying ? 'pause' : 'play_arrow'}
                            </span>
                        </button>

                        {/* Volume */}
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => {
                                    setIsMuted(!isMuted)
                                    if (videoRef.current) videoRef.current.muted = !isMuted
                                }}
                            >
                                <span className="material-icons text-lg">
                                    {isMuted || volume === 0 ? 'volume_off' : volume < 0.5 ? 'volume_down' : 'volume_up'}
                                </span>
                            </button>
                            <input
                                type="range"
                                min={0}
                                max={1}
                                step={0.1}
                                value={isMuted ? 0 : volume}
                                onChange={(e) => {
                                    const v = parseFloat(e.target.value)
                                    setVolume(v)
                                    setIsMuted(v === 0)
                                    if (videoRef.current) {
                                        videoRef.current.volume = v
                                        videoRef.current.muted = v === 0
                                    }
                                }}
                                className="w-16 h-1 appearance-none bg-white/30 rounded-full cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                            />
                        </div>

                        {/* Time */}
                        <span className="text-xs text-white/70">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Playback speed */}
                        <select
                            value={playbackRate}
                            onChange={(e) => {
                                const rate = parseFloat(e.target.value)
                                setPlaybackRate(rate)
                                if (videoRef.current) videoRef.current.playbackRate = rate
                            }}
                            className="bg-transparent text-xs border border-white/20 rounded px-1.5 py-0.5 cursor-pointer"
                        >
                            {[0.5, 0.75, 1, 1.25, 1.5, 2].map((r) => (
                                <option key={r} value={r} className="text-black">{r}x</option>
                            ))}
                        </select>

                        {/* Fullscreen */}
                        <button onClick={toggleFullscreen} className="hover:text-primary transition-colors">
                            <span className="material-icons text-lg">
                                {isFullscreen ? 'fullscreen_exit' : 'fullscreen'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
