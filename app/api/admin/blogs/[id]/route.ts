import { NextResponse } from 'next/server'
import { getBlogById, updateBlog, deleteBlog } from '@/lib/db/blogs'

// GET single blog
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const resolvedParams = await params
        const { data, error } = await getBlogById(parseInt(resolvedParams.id))

        if (error) {
            return NextResponse.json({ error: (error as Error).message }, { status: 500 })
        }

        if (!data) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
        }

        return NextResponse.json({ data })
    } catch (error) {
        console.error('Get blog error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// PATCH update blog
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const resolvedParams = await params
        const body = await request.json()
        const { title, meta_des, main_content, created_by, image_url } = body

        const { data, error } = await updateBlog(parseInt(resolvedParams.id), {
            title,
            meta_des,
            main_content,
            created_by,
            image_url,
        })

        if (error) {
            return NextResponse.json({ error: (error as Error).message }, { status: 500 })
        }

        return NextResponse.json({ data })
    } catch (error) {
        console.error('Update blog error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// DELETE blog
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const resolvedParams = await params
        const { error } = await deleteBlog(parseInt(resolvedParams.id))

        if (error) {
            return NextResponse.json({ error: (error as Error).message }, { status: 500 })
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Delete blog error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
