import { NextResponse } from 'next/server'
import { getLegalItemById, updateLegalItem, deleteLegalItem } from '@/lib/db/legal-checklist'
import { getSession } from '@/lib/auth/session'

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const { id } = await params
    const { data, error } = await getLegalItemById(Number(id))
    if (error) return NextResponse.json({ error: 'Failed' }, { status: 500 })
    return NextResponse.json({ data })
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const { id } = await params
    const body = await request.json()
    const { data, error } = await updateLegalItem(Number(id), body)
    if (error) return NextResponse.json({ error: 'Failed' }, { status: 500 })
    return NextResponse.json({ data })
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const { id } = await params
    const { error } = await deleteLegalItem(Number(id))
    if (error) return NextResponse.json({ error: 'Failed' }, { status: 500 })
    return NextResponse.json({ message: 'Deleted' })
}
