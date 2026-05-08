import Stripe from 'stripe'

let _stripe: Stripe | null = null

function getStripe(): Stripe {
    if (!_stripe) {
        _stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')
    }
    return _stripe
}

export async function createCheckoutSession(params: {
    orderId: string
    amount: number
    currency?: string
    customerEmail?: string
    successUrl: string
    cancelUrl: string
    lineItems?: Array<{
        name: string
        description?: string
        amount: number
        quantity: number
    }>
}) {
    const {
        orderId,
        amount,
        currency = 'vnd',
        customerEmail,
        successUrl,
        cancelUrl,
        lineItems,
    } = params

    const session = await getStripe().checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        customer_email: customerEmail,
        metadata: { orderId },
        line_items: lineItems
            ? lineItems.map((item) => ({
                price_data: {
                    currency,
                    product_data: {
                        name: item.name,
                        description: item.description,
                    },
                    unit_amount: item.amount,
                },
                quantity: item.quantity,
            }))
            : [
                {
                    price_data: {
                        currency,
                        product_data: {
                            name: `Order #${orderId}`,
                        },
                        unit_amount: amount,
                    },
                    quantity: 1,
                },
            ],
        success_url: successUrl,
        cancel_url: cancelUrl,
    })

    return session
}

export async function verifyWebhookSignature(
    payload: string | Buffer,
    signature: string
): Promise<Stripe.Event> {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ''
    return getStripe().webhooks.constructEvent(payload, signature, webhookSecret)
}

export { getStripe as stripe }
