import { NextResponse } from 'next/server'
import { getAllEmployees, createEmployee, getEmployeeStats } from '@/lib/db/employees'
import { getSession } from '@/lib/auth/session'

export async function GET() {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const stats = await getEmployeeStats()
    const { data, error } = await getAllEmployees()
    if (error) return NextResponse.json({ error: 'Failed to fetch employees' }, { status: 500 })
    return NextResponse.json({ data, stats: stats.data })
}

export async function POST(request: Request) {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await request.json()
    const { data, error } = await createEmployee(body)
    if (error) return NextResponse.json({ error: 'Failed to create employee' }, { status: 500 })
    return NextResponse.json({ data }, { status: 201 })
}
