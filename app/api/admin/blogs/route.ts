import { NextResponse } from 'next/server'
import { createBlog, getAllBlogs } from '@/lib/db/blogs'

// GET all blogs
export async function GET() {
    try {
        const { data, error } = await getAllBlogs()

        if (error) {
            return NextResponse.json({ error: (error as Error).message }, { status: 500 })
        }

        return NextResponse.json({ data })
    } catch (error) {
        console.error('Get blogs error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// POST create new blog
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { title, meta_des, main_content, created_by, image_url } = body

        // Validation
        if (!title || !meta_des || !main_content || !created_by) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            )
        }

        const { data, error } = await createBlog({
            title,
            meta_des,
            main_content,
            created_by,
            image_url,
        })

        if (error) {
            return NextResponse.json({ error: (error as Error).message }, { status: 500 })
        }

        return NextResponse.json({ data }, { status: 201 })
    } catch (error) {
        console.error('Create blog error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
