/**
 * Simple in-memory rate limiter for API routes.
 * Uses a sliding window approach per IP address.
 */

interface RateLimitEntry {
    count: number
    resetTime: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()

// Clean up expired entries every 5 minutes
setInterval(() => {
    const now = Date.now()
    for (const [key, entry] of rateLimitMap) {
        if (now > entry.resetTime) {
            rateLimitMap.delete(key)
        }
    }
}, 5 * 60 * 1000)

interface RateLimitConfig {
    /** Maximum number of requests allowed in the window */
    maxRequests: number
    /** Time window in seconds */
    windowSeconds: number
}

interface RateLimitResult {
    allowed: boolean
    remaining: number
    resetIn: number // seconds until reset
}

export function checkRateLimit(
    identifier: string,
    config: RateLimitConfig
): RateLimitResult {
    const now = Date.now()
    const windowMs = config.windowSeconds * 1000
    const key = identifier

    const entry = rateLimitMap.get(key)

    if (!entry || now > entry.resetTime) {
        // New window
        rateLimitMap.set(key, {
            count: 1,
            resetTime: now + windowMs,
        })
        return {
            allowed: true,
            remaining: config.maxRequests - 1,
            resetIn: config.windowSeconds,
        }
    }

    if (entry.count >= config.maxRequests) {
        return {
            allowed: false,
            remaining: 0,
            resetIn: Math.ceil((entry.resetTime - now) / 1000),
        }
    }

    entry.count++
    return {
        allowed: true,
        remaining: config.maxRequests - entry.count,
        resetIn: Math.ceil((entry.resetTime - now) / 1000),
    }
}

/**
 * Get client IP from Next.js request headers.
 */
export function getClientIP(request: Request): string {
    const forwarded = request.headers.get('x-forwarded-for')
    if (forwarded) {
        return forwarded.split(',')[0].trim()
    }
    const realIp = request.headers.get('x-real-ip')
    if (realIp) {
        return realIp
    }
    return '127.0.0.1'
}
