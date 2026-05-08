import { NextRequest, NextResponse } from 'next/server'
import { getAllProjects, getProjectStats, createProject } from '@/lib/db/projects'

export async function GET() {
    try {
        const [projectsResult, statsResult] = await Promise.all([
            getAllProjects(),
            getProjectStats()
        ])

        if (projectsResult.error) {
            return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
        }

        return NextResponse.json({
            data: projectsResult.data || [],
            stats: statsResult.data || null
        })
    } catch (error) {
        console.error('API error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        if (!body.project_name) {
            return NextResponse.json({ error: 'Tên dự án là bắt buộc' }, { status: 400 })
        }
        const result = await createProject(body)
        if (result.error) {
            return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
        }
        return NextResponse.json({ data: result.data }, { status: 201 })
    } catch (error) {
        console.error('API error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
