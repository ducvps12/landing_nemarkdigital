import { NextResponse } from 'next/server'
import { getFinancialRecordById, updateFinancialRecord, deleteFinancialRecord } from '@/lib/db/finances'
import { getSession } from '@/lib/auth/session'

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const { id } = await params
    const body = await request.json()
    const { data, error } = await updateFinancialRecord(Number(id), body)
    if (error) return NextResponse.json({ error: 'Failed' }, { status: 500 })
    return NextResponse.json({ data })
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const { id } = await params
    const { error } = await deleteFinancialRecord(Number(id))
    if (error) return NextResponse.json({ error: 'Failed' }, { status: 500 })
    return NextResponse.json({ message: 'Deleted' })
}
