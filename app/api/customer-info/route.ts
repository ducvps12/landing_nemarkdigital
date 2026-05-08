import { NextRequest, NextResponse } from 'next/server'
import { createCustomerInfo } from '@/lib/db/customer-infos'
import { customerInfoSchema } from '@/lib/validations/customer-info'
import { checkRateLimit, getClientIP } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
    try {
        // Rate limiting: 5 requests per minute per IP
        const clientIP = getClientIP(request)
        const rateLimitResult = checkRateLimit(`customer-info:${clientIP}`, {
            maxRequests: 5,
            windowSeconds: 60,
        })

        if (!rateLimitResult.allowed) {
            return NextResponse.json(
                { error: `Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau ${rateLimitResult.resetIn} giây.` },
                {
                    status: 429,
                    headers: {
                        'Retry-After': String(rateLimitResult.resetIn),
                    },
                }
            )
        }

        const body = await request.json()

        // Validate and sanitize input with Zod
        const parseResult = customerInfoSchema.safeParse(body)

        if (!parseResult.success) {
            const errors = parseResult.error.flatten().fieldErrors
            return NextResponse.json(
                { error: 'Dữ liệu không hợp lệ', details: errors },
                { status: 400 }
            )
        }

        const { name, email, phone, service, message } = parseResult.data

        // Map validated fields to database schema
        const customerData = {
            fullname: name,
            email: email,
            phone_number: phone,
            product: service,
            customer_message: message || ''
        }

        // Save to database
        const result = await createCustomerInfo(customerData)

        if (result.error) {
            return NextResponse.json(
                { error: 'Có lỗi xảy ra khi lưu thông tin. Vui lòng thử lại sau.' },
                { status: 500 }
            )
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.',
                data: result.data
            },
            { status: 201 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: 'Có lỗi xảy ra. Vui lòng thử lại sau.' },
            { status: 500 }
        )
    }
}
