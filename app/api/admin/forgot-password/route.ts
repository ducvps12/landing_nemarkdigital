import { NextRequest, NextResponse } from 'next/server'
import { getAdminByEmail } from '@/lib/db/admins'
import { createResetToken } from '@/lib/db/password-reset'
import { sendPasswordResetEmail } from '@/lib/email/mailer'
import { checkRateLimit, getClientIP } from '@/lib/rate-limit'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
    try {
        // Rate limiting: 3 requests per 5 minutes per IP
        const clientIP = getClientIP(request)
        const rateLimitResult = checkRateLimit(`forgot-password:${clientIP}`, {
            maxRequests: 3,
            windowSeconds: 300,
        })

        if (!rateLimitResult.allowed) {
            return NextResponse.json(
                { error: 'Quá nhiều yêu cầu. Vui lòng thử lại sau.' },
                {
                    status: 429,
                    headers: { 'Retry-After': String(rateLimitResult.resetIn) },
                }
            )
        }

        const body = await request.json()
        const { email } = body

        if (!email) {
            return NextResponse.json(
                { error: 'Vui lòng nhập email' },
                { status: 400 }
            )
        }

        // Always return success to prevent email enumeration
        const successResponse = NextResponse.json({
            success: true,
            message: 'Nếu email tồn tại trong hệ thống, bạn sẽ nhận được link đặt lại mật khẩu.',
        })

        // Look up admin by email
        const { data: admin, error } = await getAdminByEmail(email)

        if (error || !admin) {
            // Return success even if email not found (security)
            return successResponse
        }

        // Generate secure token
        const token = crypto.randomUUID()
        const expiresAt = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

        // Store token in DB
        const { error: tokenError } = await createResetToken(admin.id, token, expiresAt)

        if (tokenError) {
            console.error('Failed to create reset token:', tokenError)
            return NextResponse.json(
                { error: 'Đã xảy ra lỗi. Vui lòng thử lại.' },
                { status: 500 }
            )
        }

        // Send email
        try {
            await sendPasswordResetEmail(email, token)
        } catch (emailError) {
            console.error('Failed to send reset email:', emailError)
            return NextResponse.json(
                { error: 'Không thể gửi email. Vui lòng thử lại sau.' },
                { status: 500 }
            )
        }

        return successResponse
    } catch (error) {
        console.error('Forgot password error:', error)
        return NextResponse.json(
            { error: 'Đã xảy ra lỗi. Vui lòng thử lại.' },
            { status: 500 }
        )
    }
}
