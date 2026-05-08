import { NextResponse } from 'next/server'
import pool from '@/lib/mysql/connection'
import { RowDataPacket } from 'mysql2'

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const resolvedParams = await params

        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Blogs WHERE id = ?',
            [parseInt(resolvedParams.id)]
        )

        if (!rows[0]) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            )
        }

        return NextResponse.json({ data: rows[0] })
    } catch (error) {
        console.error('Error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
