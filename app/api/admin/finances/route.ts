import { NextResponse } from 'next/server'
import { getAllFinancialRecords, createFinancialRecord, getFinancialSummary, getMonthlyTotals, getSummaryByCategory } from '@/lib/db/finances'
import { getSession } from '@/lib/auth/session'

export async function GET(request: Request) {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const url = new URL(request.url)
    const year = url.searchParams.get('year') || new Date().getFullYear()

    const summary = await getFinancialSummary()
    const monthly = await getMonthlyTotals(Number(year))
    const categories = await getSummaryByCategory()
    const { data, error } = await getAllFinancialRecords()
    if (error) return NextResponse.json({ error: 'Failed' }, { status: 500 })
    return NextResponse.json({ data, summary: summary.data, monthly: monthly.data, categories: categories.data })
}

export async function POST(request: Request) {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await request.json()
    const { data, error } = await createFinancialRecord(body)
    if (error) return NextResponse.json({ error: 'Failed to create record' }, { status: 500 })
    return NextResponse.json({ data }, { status: 201 })
}
