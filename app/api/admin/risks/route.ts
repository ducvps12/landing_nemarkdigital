import { NextResponse } from 'next/server'
import { getAllRisks, createRisk, getRiskStats } from '@/lib/db/risks'
import { getSession } from '@/lib/auth/session'

export async function GET() {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const stats = await getRiskStats()
    const { data, error } = await getAllRisks()
    if (error) return NextResponse.json({ error: 'Failed' }, { status: 500 })
    return NextResponse.json({ data, stats: stats.data })
}

export async function POST(request: Request) {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await request.json()
    const { data, error } = await createRisk(body)
    if (error) return NextResponse.json({ error: 'Failed to create risk' }, { status: 500 })
    return NextResponse.json({ data }, { status: 201 })
}
