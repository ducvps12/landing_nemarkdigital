import { NextRequest, NextResponse } from 'next/server'
import { getCustomerInfoById, deleteCustomerInfo } from '@/lib/db/customer-infos'

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const result = await getCustomerInfoById(Number(id))

        if (result.error || !result.data) {
            return NextResponse.json(
                { error: 'Contact not found' },
                { status: 404 }
            )
        }

        return NextResponse.json({ data: result.data })
    } catch (error) {
        console.error('API error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const result = await deleteCustomerInfo(Number(id))

        if (result.error) {
            return NextResponse.json(
                { error: 'Failed to delete contact' },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('API error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
