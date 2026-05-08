import { NextRequest, NextResponse } from 'next/server'
import { createPaymentUrl } from '@/lib/payment/vnpay'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const { amount, orderInfo, items } = body

        if (!amount || amount <= 0) {
            return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
        }

        // Create order in database
        const { data: order, error: orderError } = await supabase
            .from('orders')
            .insert({
                user_id: user.id,
                amount,
                currency: 'VND',
                payment_method: 'vnpay',
                status: 'pending',
            })
            .select()
            .single()

        if (orderError || !order) {
            return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
        }

        // Create order items if provided
        if (items && items.length > 0) {
            await supabase.from('order_items').insert(
                items.map((item: { item_type: string; item_id: string; item_name: string; price: number; quantity?: number }) => ({
                    order_id: order.id,
                    ...item,
                }))
            )
        }

        // Generate VNPay payment URL
        const ipAddr = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1'
        const paymentUrl = createPaymentUrl({
            orderId: order.id,
            amount,
            orderInfo: orderInfo || `Thanh toán đơn hàng ${order.order_number}`,
            ipAddr: ipAddr.split(',')[0].trim(),
        })

        return NextResponse.json({ paymentUrl, orderId: order.id })
    } catch (error) {
        console.error('VNPay create error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
