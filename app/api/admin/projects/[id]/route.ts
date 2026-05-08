import { NextRequest, NextResponse } from 'next/server'
import { getProjectById, updateProject, deleteProject } from '@/lib/db/projects'

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const result = await getProjectById(Number(id))
        if (result.error || !result.data) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 })
        }
        return NextResponse.json({ data: result.data })
    } catch (error) {
        console.error('API error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const body = await request.json()
        const result = await updateProject(Number(id), body)
        if (result.error) {
            return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
        }
        return NextResponse.json({ data: result.data })
    } catch (error) {
        console.error('API error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const result = await deleteProject(Number(id))
        if (result.error) {
            return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
        }
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('API error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
