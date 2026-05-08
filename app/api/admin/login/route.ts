import { NextRequest, NextResponse } from 'next/server'
import { getAdminByLoginName } from '@/lib/db/admins'
import { comparePassword } from '@/lib/auth/password'
import { getSession } from '@/lib/auth/session'
import { checkRateLimit, getClientIP } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
    try {
        // Rate limiting: 5 login attempts per minute per IP
        const clientIP = getClientIP(request)
        const rateLimitResult = checkRateLimit(`admin-login:${clientIP}`, {
            maxRequests: 5,
            windowSeconds: 60,
        })

        if (!rateLimitResult.allowed) {
            return NextResponse.json(
                { error: 'Too many login attempts. Please try again later.' },
                {
                    status: 429,
                    headers: { 'Retry-After': String(rateLimitResult.resetIn) },
                }
            )
        }

        const body = await request.json()
        const { loginName, password } = body

        // Validate input
        if (!loginName || !password) {
            return NextResponse.json(
                { error: 'Login name and password are required' },
                { status: 400 }
            )
        }

        // Get admin from database
        const { data: admin, error } = await getAdminByLoginName(loginName)

        if (error) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            )
        }

        if (!admin) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            )
        }

        // Compare password
        const isValidPassword = await comparePassword(password, admin.password)

        if (!isValidPassword) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            )
        }

        // Create session
        const session = await getSession()
        session.adminId = admin.id
        session.loginName = admin.login_name
        session.isLoggedIn = true
        await session.save()

        return NextResponse.json({
            success: true,
            admin: {
                id: admin.id,
                loginName: admin.login_name,
            },
        })
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
