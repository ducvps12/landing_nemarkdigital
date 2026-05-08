import { NextResponse } from 'next/server'
import pool from '@/lib/mysql/connection'
import { RowDataPacket } from 'mysql2'

export async function GET() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT id, title, meta_des, created_by, created_at, image_url FROM Blogs ORDER BY created_at DESC LIMIT 10'
        )

        return NextResponse.json({ data: rows })
    } catch (error) {
        console.error('Database error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch blogs' },
            { status: 500 }
        )
    }
}
