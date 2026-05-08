import { NextResponse } from 'next/server'
import { getAllLegalItems, createLegalItem, getLegalStats, getUpcomingDeadlines } from '@/lib/db/legal-checklist'
import { getSession } from '@/lib/auth/session'

export async function GET() {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const stats = await getLegalStats()
    const deadlines = await getUpcomingDeadlines(30)
    const { data, error } = await getAllLegalItems()
    if (error) return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 })
    return NextResponse.json({ data, stats: stats.data, upcoming_deadlines: deadlines.data })
}

export async function POST(request: Request) {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await request.json()
    const { data, error } = await createLegalItem(body)
    if (error) return NextResponse.json({ error: 'Failed to create item' }, { status: 500 })
    return NextResponse.json({ data }, { status: 201 })
}
