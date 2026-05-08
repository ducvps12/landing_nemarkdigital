import { NextResponse } from 'next/server'
import { getOptionById, updateOption } from '@/lib/db/options'

// GET single option
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const resolvedParams = await params
        const { data, error } = await getOptionById(parseInt(resolvedParams.id))

        if (error) {
            return NextResponse.json({ error: (error as Error).message }, { status: 500 })
        }

        if (!data) {
            return NextResponse.json({ error: 'Option not found' }, { status: 404 })
        }

        return NextResponse.json({ data })
    } catch (error) {
        console.error('Get option error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// PATCH update option
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const resolvedParams = await params
        const body = await request.json()
        const { option_value } = body

        const { data, error } = await updateOption(parseInt(resolvedParams.id), {
            option_value,
        })

        if (error) {
            return NextResponse.json({ error: (error as Error).message }, { status: 500 })
        }

        return NextResponse.json({ data })
    } catch (error) {
        console.error('Update option error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
