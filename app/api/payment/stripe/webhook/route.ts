import { NextRequest, NextResponse } from 'next/server'
import { verifyWebhookSignature } from '@/lib/payment/stripe'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.text()
        const signature = request.headers.get('stripe-signature')

        if (!signature) {
            return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
        }

        const event = await verifyWebhookSignature(body, signature)
        const supabase = await createClient()

        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object as { id: string; metadata?: { orderId?: string } }
                const orderId = session.metadata?.orderId

                if (orderId) {
                    await supabase
                        .from('orders')
                        .update({
                            status: 'paid',
                            payment_ref: session.id,
                        })
                        .eq('id', orderId)
                }
                break
            }

            case 'checkout.session.expired': {
                const session = event.data.object as { id: string; metadata?: { orderId?: string } }
                const orderId = session.metadata?.orderId

                if (orderId) {
                    await supabase
                        .from('orders')
                        .update({ status: 'failed' })
                        .eq('id', orderId)
                }
                break
            }

            default:
                console.log(`Unhandled Stripe event: ${event.type}`)
        }

        return NextResponse.json({ received: true })
    } catch (error) {
        console.error('Stripe webhook error:', error)
        return NextResponse.json({ error: 'Webhook error' }, { status: 400 })
    }
}
