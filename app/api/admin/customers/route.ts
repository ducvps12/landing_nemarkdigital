import { NextResponse } from 'next/server'
import { getAllCustomerInfos } from '@/lib/db/customer-infos'

// GET all customers
export async function GET() {
    try {
        const { data, error } = await getAllCustomerInfos()

        if (error) {
            return NextResponse.json({ error: (error as Error).message }, { status: 500 })
        }

        return NextResponse.json({ data })
    } catch (error) {
        console.error('Get customers error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
