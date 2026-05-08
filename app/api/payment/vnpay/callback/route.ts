import { NextRequest, NextResponse } from 'next/server'
import { verifyReturnUrl } from '@/lib/payment/vnpay'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
    try {
        const query: Record<string, string> = {}
        request.nextUrl.searchParams.forEach((value, key) => {
            query[key] = value
        })

        const result = verifyReturnUrl(query)

        if (!result.isValid) {
            return NextResponse.redirect(new URL('/dashboard/orders?status=invalid', request.url))
        }

        const supabase = await createClient()

        if (result.responseCode === '00') {
            // Payment successful
            await supabase
                .from('orders')
                .update({
                    status: 'paid',
                    payment_ref: query['vnp_TransactionNo'] || '',
                })
                .eq('id', result.orderId)

            return NextResponse.redirect(new URL(`/dashboard/orders?status=success&orderId=${result.orderId}`, request.url))
        } else {
            // Payment failed
            await supabase
                .from('orders')
                .update({
                    status: 'failed',
                    payment_ref: query['vnp_TransactionNo'] || '',
                })
                .eq('id', result.orderId)

            return NextResponse.redirect(new URL(`/dashboard/orders?status=failed&orderId=${result.orderId}`, request.url))
        }
    } catch (error) {
        console.error('VNPay callback error:', error)
        return NextResponse.redirect(new URL('/dashboard/orders?status=error', request.url))
    }
}
