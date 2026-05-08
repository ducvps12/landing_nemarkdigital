import { NextResponse } from 'next/server'
import { getEmployeeById, updateEmployee, deleteEmployee } from '@/lib/db/employees'
import { getContractsByEmployeeId } from '@/lib/db/contracts'
import { getInsuranceByEmployeeId } from '@/lib/db/insurance'
import { getSession } from '@/lib/auth/session'

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const { data, error } = await getEmployeeById(Number(id))
    if (error) return NextResponse.json({ error: 'Failed to fetch employee' }, { status: 500 })
    if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const contracts = await getContractsByEmployeeId(Number(id))
    const insurance = await getInsuranceByEmployeeId(Number(id))

    return NextResponse.json({ data, contracts: contracts.data, insurance: insurance.data })
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const body = await request.json()
    const { data, error } = await updateEmployee(Number(id), body)
    if (error) return NextResponse.json({ error: 'Failed to update employee' }, { status: 500 })
    return NextResponse.json({ data })
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await getSession()
    if (!session.isLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const { error } = await deleteEmployee(Number(id))
    if (error) return NextResponse.json({ error: 'Failed to delete employee' }, { status: 500 })
    return NextResponse.json({ message: 'Deleted' })
}
