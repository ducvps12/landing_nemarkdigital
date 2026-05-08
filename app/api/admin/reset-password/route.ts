import { NextRequest, NextResponse } from 'next/server'
import { getValidToken, markTokenUsed } from '@/lib/db/password-reset'
import { updateAdmin } from '@/lib/db/admins'
import { hashPassword } from '@/lib/auth/password'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { token, newPassword } = body

        if (!token || !newPassword) {
            return NextResponse.json(
                { error: 'Token và mật khẩu mới là bắt buộc' },
                { status: 400 }
            )
        }

        if (newPassword.length < 6) {
            return NextResponse.json(
                { error: 'Mật khẩu phải có ít nhất 6 ký tự' },
                { status: 400 }
            )
        }

        // Validate token
        const { data: resetToken, error } = await getValidToken(token)

        if (error || !resetToken) {
            return NextResponse.json(
                { error: 'Link đặt lại mật khẩu không hợp lệ hoặc đã hết hạn.' },
                { status: 400 }
            )
        }

        // Hash new password
        const hashedPassword = await hashPassword(newPassword)

        // Update admin password
        const { error: updateError } = await updateAdmin(resetToken.admin_id, {
            password: hashedPassword,
        })

        if (updateError) {
            console.error('Failed to update password:', updateError)
            return NextResponse.json(
                { error: 'Không thể cập nhật mật khẩu. Vui lòng thử lại.' },
                { status: 500 }
            )
        }

        // Mark token as used
        await markTokenUsed(token)

        return NextResponse.json({
            success: true,
            message: 'Mật khẩu đã được đặt lại thành công!',
        })
    } catch (error) {
        console.error('Reset password error:', error)
        return NextResponse.json(
            { error: 'Đã xảy ra lỗi. Vui lòng thử lại.' },
            { status: 500 }
        )
    }
}
