import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession } from '@/lib/payment/stripe'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const { amount, items } = body

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
                payment_method: 'stripe',
                status: 'pending',
            })
            .select()
            .single()

        if (orderError || !order) {
            return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
        }

        // Create order items
        if (items && items.length > 0) {
            await supabase.from('order_items').insert(
                items.map((item: { item_type: string; item_id: string; item_name: string; price: number; quantity?: number }) => ({
                    order_id: order.id,
                    ...item,
                }))
            )
        }

        const origin = request.headers.get('origin') || 'https://nemarkdigital.com'

        const session = await createCheckoutSession({
            orderId: order.id,
            amount,
            customerEmail: user.email || undefined,
            successUrl: `${origin}/dashboard/orders?status=success&orderId=${order.id}`,
            cancelUrl: `${origin}/dashboard/orders?status=cancelled&orderId=${order.id}`,
            lineItems: items?.map((item: { item_name: string; price: number; quantity?: number }) => ({
                name: item.item_name,
                amount: item.price,
                quantity: item.quantity || 1,
            })),
        })

        // Save Stripe session ID
        await supabase
            .from('orders')
            .update({ payment_ref: session.id, status: 'processing' })
            .eq('id', order.id)

        return NextResponse.json({ url: session.url, orderId: order.id })
    } catch (error) {
        console.error('Stripe create error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
