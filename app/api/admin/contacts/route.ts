import { NextResponse } from 'next/server'
import { getAllCustomerInfos } from '@/lib/db/customer-infos'

export async function GET() {
    try {
        const result = await getAllCustomerInfos()

        if (result.error) {
            return NextResponse.json(
                { error: 'Failed to fetch contacts' },
                { status: 500 }
            )
        }

        // Sort by ID descending (newest first)
        const sorted = (result.data || []).sort((a, b) => b.id - a.id)

        return NextResponse.json({ data: sorted })
    } catch (error) {
        console.error('API error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
