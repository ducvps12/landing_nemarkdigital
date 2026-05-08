import pool from '@/lib/mysql/connection'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

export interface LegalChecklistItem {
    id: number
    title: string
    description: string | null
    category: 'nhan_su' | 'thue' | 'bhxh' | 'giay_phep' | 'tuan_thu' | 'khac'
    deadline: string | null
    recurring: 'none' | 'monthly' | 'quarterly' | 'yearly'
    status: 'pending' | 'in_progress' | 'completed' | 'overdue'
    priority: 'critical' | 'high' | 'medium' | 'low'
    assigned_to: string | null
    notes: string | null
    created_at: string
    updated_at: string
}

export type LegalChecklistInsert = Omit<LegalChecklistItem, 'id' | 'created_at' | 'updated_at'> & { id?: number }
export type LegalChecklistUpdate = Partial<Omit<LegalChecklistItem, 'id' | 'created_at' | 'updated_at'>>

export async function createLegalItem(data: LegalChecklistInsert) {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            `INSERT INTO LegalChecklistItems (title, description, category, deadline, recurring, status, priority, assigned_to, notes)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [data.title, data.description, data.category, data.deadline, data.recurring, data.status, data.priority, data.assigned_to, data.notes]
        )
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM LegalChecklistItems WHERE id = ?', [result.insertId])
        return { data: rows[0] as LegalChecklistItem, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getAllLegalItems() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM LegalChecklistItems ORDER BY priority ASC, deadline ASC')
        return { data: rows as LegalChecklistItem[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getLegalItemById(id: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM LegalChecklistItems WHERE id = ?', [id])
        return { data: rows[0] as LegalChecklistItem || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getUpcomingDeadlines(days: number = 30) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(`
            SELECT * FROM LegalChecklistItems 
            WHERE deadline IS NOT NULL 
            AND deadline BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL ? DAY)
            AND status != 'completed'
            ORDER BY deadline ASC
        `, [days])
        return { data: rows as LegalChecklistItem[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getLegalItemsByCategory(category: string) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM LegalChecklistItems WHERE category = ? ORDER BY priority ASC, deadline ASC', [category]
        )
        return { data: rows as LegalChecklistItem[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getLegalStats() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(`
            SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending_count,
                SUM(CASE WHEN status = 'in_progress' THEN 1 ELSE 0 END) as in_progress_count,
                SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed_count,
                SUM(CASE WHEN status = 'overdue' THEN 1 ELSE 0 END) as overdue_count,
                SUM(CASE WHEN priority = 'critical' AND status != 'completed' THEN 1 ELSE 0 END) as critical_count,
                SUM(CASE WHEN deadline IS NOT NULL AND deadline < CURDATE() AND status != 'completed' THEN 1 ELSE 0 END) as past_due_count
            FROM LegalChecklistItems
        `)
        return { data: rows[0], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function updateLegalItem(id: number, data: LegalChecklistUpdate) {
    try {
        const fields: string[] = []
        const values: unknown[] = []
        if (data.title !== undefined) { fields.push('title = ?'); values.push(data.title) }
        if (data.description !== undefined) { fields.push('description = ?'); values.push(data.description) }
        if (data.category !== undefined) { fields.push('category = ?'); values.push(data.category) }
        if (data.deadline !== undefined) { fields.push('deadline = ?'); values.push(data.deadline) }
        if (data.recurring !== undefined) { fields.push('recurring = ?'); values.push(data.recurring) }
        if (data.status !== undefined) { fields.push('status = ?'); values.push(data.status) }
        if (data.priority !== undefined) { fields.push('priority = ?'); values.push(data.priority) }
        if (data.assigned_to !== undefined) { fields.push('assigned_to = ?'); values.push(data.assigned_to) }
        if (data.notes !== undefined) { fields.push('notes = ?'); values.push(data.notes) }
        if (fields.length === 0) return { data: null, error: 'No fields to update' }
        values.push(id)
        await pool.execute(`UPDATE LegalChecklistItems SET ${fields.join(', ')} WHERE id = ?`, values)
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM LegalChecklistItems WHERE id = ?', [id])
        return { data: rows[0] as LegalChecklistItem, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function deleteLegalItem(id: number) {
    try {
        await pool.execute('DELETE FROM LegalChecklistItems WHERE id = ?', [id])
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
