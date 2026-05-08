import { NextResponse } from 'next/server'
import { getCustomerInfoById, updateCustomerInfo } from '@/lib/db/customer-infos'

// GET single customer
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const resolvedParams = await params
        const { data, error } = await getCustomerInfoById(parseInt(resolvedParams.id))

        if (error) {
            return NextResponse.json({ error: (error as Error).message }, { status: 500 })
        }

        if (!data) {
            return NextResponse.json({ error: 'Customer not found' }, { status: 404 })
        }

        return NextResponse.json({ data })
    } catch (error) {
        console.error('Get customer error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// PATCH update customer
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const resolvedParams = await params
        const body = await request.json()
        const { fullname, email, phone_number, product } = body

        const { data, error } = await updateCustomerInfo(parseInt(resolvedParams.id), {
            fullname,
            email,
            phone_number,
            product,
        })

        if (error) {
            return NextResponse.json({ error: (error as Error).message }, { status: 500 })
        }

        return NextResponse.json({ data })
    } catch (error) {
        console.error('Update customer error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
