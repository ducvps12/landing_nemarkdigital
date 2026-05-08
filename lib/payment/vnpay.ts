import crypto from 'crypto'

interface VNPayConfig {
    tmnCode: string
    hashSecret: string
    url: string
    returnUrl: string
}

const vnpayConfig: VNPayConfig = {
    tmnCode: process.env.VNPAY_TMN_CODE || '',
    hashSecret: process.env.VNPAY_HASH_SECRET || '',
    url: process.env.VNPAY_URL || 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html',
    returnUrl: process.env.VNPAY_RETURN_URL || 'https://nemarkdigital.com/api/payment/vnpay/callback',
}

function sortObject(obj: Record<string, string>): Record<string, string> {
    const sorted: Record<string, string> = {}
    const keys = Object.keys(obj).sort()
    for (const key of keys) {
        sorted[key] = obj[key]
    }
    return sorted
}

export function createPaymentUrl(params: {
    orderId: string
    amount: number
    orderInfo: string
    ipAddr: string
    locale?: string
}): string {
    const { orderId, amount, orderInfo, ipAddr, locale = 'vn' } = params

    const now = new Date()
    const createDate = now.toISOString().replace(/[-:T.Z]/g, '').slice(0, 14)

    const vnpParams: Record<string, string> = {
        vnp_Version: '2.1.0',
        vnp_Command: 'pay',
        vnp_TmnCode: vnpayConfig.tmnCode,
        vnp_Locale: locale,
        vnp_CurrCode: 'VND',
        vnp_TxnRef: orderId,
        vnp_OrderInfo: orderInfo,
        vnp_OrderType: 'other',
        vnp_Amount: String(amount * 100),
        vnp_ReturnUrl: vnpayConfig.returnUrl,
        vnp_IpAddr: ipAddr,
        vnp_CreateDate: createDate,
    }

    const sorted = sortObject(vnpParams)
    const signData = new URLSearchParams(sorted).toString()

    const hmac = crypto.createHmac('sha512', vnpayConfig.hashSecret)
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex')

    sorted['vnp_SecureHash'] = signed

    return `${vnpayConfig.url}?${new URLSearchParams(sorted).toString()}`
}

export function verifyReturnUrl(query: Record<string, string>): {
    isValid: boolean
    orderId: string
    responseCode: string
    amount: number
} {
    const secureHash = query['vnp_SecureHash']
    const params = { ...query }
    delete params['vnp_SecureHash']
    delete params['vnp_SecureHashType']

    const sorted = sortObject(params)
    const signData = new URLSearchParams(sorted).toString()

    const hmac = crypto.createHmac('sha512', vnpayConfig.hashSecret)
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex')

    return {
        isValid: secureHash === signed,
        orderId: query['vnp_TxnRef'] || '',
        responseCode: query['vnp_ResponseCode'] || '',
        amount: parseInt(query['vnp_Amount'] || '0') / 100,
    }
}
