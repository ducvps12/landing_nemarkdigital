import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { type NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import { sessionOptions, SessionData } from './lib/auth/session';

// Create next-intl middleware
const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Redirect /admin to homepage
    if (pathname.startsWith('/admin') && !pathname.startsWith('/adminduc')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // Skip i18n for adminduc routes - handle auth separately
    if (pathname.startsWith('/adminduc')) {
        // Allow access to login and password reset pages
        if (pathname === '/adminduc/login' || pathname === '/adminduc/forgot-password' || pathname === '/adminduc/reset-password') {
            return NextResponse.next();
        }

        // Check admin session
        const cookieStore = await cookies();
        const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

        if (!session.isLoggedIn) {
            return NextResponse.redirect(new URL('/adminduc/login', request.url));
        }

        return NextResponse.next();
    }

    // Skip i18n for API routes - handle Supabase session
    if (pathname.startsWith('/api/')) {
        const { updateSession } = await import('./lib/supabase/middleware');
        return await updateSession(request);
    }

    // Skip i18n for SEO files (sitemap, robots, manifest)
    if (pathname === '/sitemap.xml' || pathname === '/robots.txt' || pathname === '/manifest.json') {
        return NextResponse.next();
    }

    // Apply i18n middleware for all other routes
    return intlMiddleware(request);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|jfif)$).*)',
    ],
};
