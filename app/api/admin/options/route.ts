import { NextResponse } from 'next/server'
import { getAllOptions } from '@/lib/db/options'

// GET all options
export async function GET() {
    try {
        const { data, error } = await getAllOptions()

        if (error) {
            return NextResponse.json({ error: (error as Error).message }, { status: 500 })
        }

        return NextResponse.json({ data })
    } catch (error) {
        console.error('Get options error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
