import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const url = request.nextUrl.searchParams.get('url')

    if (!url) {
        return NextResponse.json({ blocked: false, error: 'No URL provided' })
    }

    try {
        // Validate URL
        const parsedUrl = new URL(url)
        if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
            return NextResponse.json({ blocked: true, reason: 'Invalid protocol' })
        }

        // Send HEAD request to check response headers
        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 5000)

        const response = await fetch(url, {
            method: 'HEAD',
            signal: controller.signal,
            redirect: 'follow',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            },
        })

        clearTimeout(timeout)

        // Check X-Frame-Options header
        const xFrameOptions = response.headers.get('x-frame-options')
        if (xFrameOptions) {
            const value = xFrameOptions.toUpperCase().trim()
            if (value === 'DENY' || value === 'SAMEORIGIN') {
                return NextResponse.json({ blocked: true, reason: `X-Frame-Options: ${value}` })
            }
        }

        // Check Content-Security-Policy frame-ancestors header
        const csp = response.headers.get('content-security-policy')
        if (csp) {
            const frameAncestors = csp.match(/frame-ancestors\s+([^;]+)/i)
            if (frameAncestors) {
                const ancestorList = frameAncestors[1].trim().toLowerCase()
                
                // If frame-ancestors includes '*' (wildcard), it allows everything
                if (ancestorList.includes('*')) {
                    return NextResponse.json({ blocked: false })
                }

                // Get our origin from the request to check if we're allowed
                const origin = request.headers.get('origin') || request.headers.get('referer') || ''
                let ourDomain = ''
                try {
                    ourDomain = new URL(origin).hostname
                } catch {
                    ourDomain = 'localhost'
                }

                // Check if our domain is explicitly allowed
                const ancestors = ancestorList.split(/\s+/)
                const isAllowed = ancestors.some(ancestor => {
                    // Skip CSP keywords
                    if (ancestor === "'self'") return false
                    if (ancestor === "'none'") return false
                    
                    // Check if ancestor matches our domain
                    try {
                        const ancestorHost = ancestor.replace(/^https?:\/\//, '')
                        return ourDomain === ancestorHost || 
                               ourDomain.endsWith('.' + ancestorHost)
                    } catch {
                        return false
                    }
                })

                if (!isAllowed) {
                    return NextResponse.json({ 
                        blocked: true, 
                        reason: `CSP frame-ancestors doesn't include ${ourDomain}: ${ancestorList}` 
                    })
                }
            }
        }

        return NextResponse.json({ blocked: false })
    } catch (error) {
        // If we can't reach the URL at all, mark as blocked
        return NextResponse.json({
            blocked: true,
            reason: 'Fetch failed',
            error: error instanceof Error ? error.message : 'Unknown error',
        })
    }
}
