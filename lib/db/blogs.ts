import pool from '@/lib/mysql/connection'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

export interface Blog {
    id: number
    title: string
    meta_des: string
    main_content: string
    created_at: string
    created_by: string
    image_url: string | null
}

export type BlogInsert = Omit<Blog, 'id' | 'created_at'> & { id?: number; created_at?: string }
export type BlogUpdate = Partial<Blog>

// ==================== CREATE ====================
export async function createBlog(data: BlogInsert) {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            'INSERT INTO Blogs (title, meta_des, main_content, created_by, image_url) VALUES (?, ?, ?, ?, ?)',
            [data.title, data.meta_des, data.main_content, data.created_by, data.image_url || null]
        )
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Blogs WHERE id = ?', [result.insertId]
        )
        return { data: rows[0] as Blog, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== READ ====================
export async function getAllBlogs() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Blogs ORDER BY created_at DESC'
        )
        return { data: rows as Blog[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getBlogById(id: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Blogs WHERE id = ?', [id]
        )
        return { data: rows[0] as Blog || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getBlogsByAuthor(author: string) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Blogs WHERE created_by = ? ORDER BY created_at DESC', [author]
        )
        return { data: rows as Blog[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function searchBlogs(searchTerm: string) {
    try {
        const pattern = `%${searchTerm}%`
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Blogs WHERE title LIKE ? OR main_content LIKE ? ORDER BY created_at DESC',
            [pattern, pattern]
        )
        return { data: rows as Blog[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== UPDATE ====================
export async function updateBlog(id: number, data: BlogUpdate) {
    try {
        const fields: string[] = []
        const values: unknown[] = []
        if (data.title !== undefined) { fields.push('title = ?'); values.push(data.title) }
        if (data.meta_des !== undefined) { fields.push('meta_des = ?'); values.push(data.meta_des) }
        if (data.main_content !== undefined) { fields.push('main_content = ?'); values.push(data.main_content) }
        if (data.created_by !== undefined) { fields.push('created_by = ?'); values.push(data.created_by) }
        if (data.image_url !== undefined) { fields.push('image_url = ?'); values.push(data.image_url) }
        if (fields.length === 0) return { data: null, error: 'No fields to update' }
        values.push(id)
        await pool.execute(`UPDATE Blogs SET ${fields.join(', ')} WHERE id = ?`, values)
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Blogs WHERE id = ?', [id])
        return { data: rows[0] as Blog, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== DELETE ====================
export async function deleteBlog(id: number) {
    try {
        await pool.execute('DELETE FROM Blogs WHERE id = ?', [id])
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
