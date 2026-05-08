import pool from '@/lib/mysql/connection'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

export interface Project {
    id: number
    project_name: string
    client_name: string | null
    client_email: string | null
    client_phone: string | null
    project_type: 'website' | 'app' | 'seo' | 'startup' | 'maintenance' | 'security' | 'infra' | 'other'
    status: 'lead' | 'planning' | 'in_progress' | 'review' | 'completed' | 'cancelled'
    priority: 'low' | 'medium' | 'high' | 'urgent'
    budget: number
    paid_amount: number
    start_date: string | null
    deadline: string | null
    completed_date: string | null
    progress: number
    description: string | null
    tech_stack: string | null
    assigned_to: string | null
    notes: string | null
    created_at: string
    updated_at: string
}

export type ProjectInsert = Omit<Project, 'id' | 'created_at' | 'updated_at'> & { id?: number }
export type ProjectUpdate = Partial<Omit<Project, 'id' | 'created_at' | 'updated_at'>>

// ==================== CREATE ====================
export async function createProject(data: ProjectInsert) {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            `INSERT INTO Projects (project_name, client_name, client_email, client_phone, project_type, status, priority, budget, paid_amount, start_date, deadline, completed_date, progress, description, tech_stack, assigned_to, notes)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                data.project_name, data.client_name, data.client_email, data.client_phone,
                data.project_type, data.status, data.priority,
                data.budget, data.paid_amount,
                data.start_date, data.deadline, data.completed_date,
                data.progress, data.description, data.tech_stack, data.assigned_to, data.notes
            ]
        )
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Projects WHERE id = ?', [result.insertId]
        )
        return { data: rows[0] as Project, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== READ ====================
export async function getAllProjects() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Projects ORDER BY updated_at DESC'
        )
        return { data: rows as Project[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getProjectById(id: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Projects WHERE id = ?', [id]
        )
        return { data: rows[0] as Project || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getProjectStats() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(`
            SELECT
                COUNT(*) as total,
                SUM(CASE WHEN status = 'lead' THEN 1 ELSE 0 END) as lead_count,
                SUM(CASE WHEN status = 'planning' THEN 1 ELSE 0 END) as planning_count,
                SUM(CASE WHEN status = 'in_progress' THEN 1 ELSE 0 END) as in_progress_count,
                SUM(CASE WHEN status = 'review' THEN 1 ELSE 0 END) as review_count,
                SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed_count,
                SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) as cancelled_count,
                SUM(budget) as total_budget,
                SUM(paid_amount) as total_paid,
                AVG(progress) as avg_progress
            FROM Projects
        `)
        return { data: rows[0], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== UPDATE ====================
export async function updateProject(id: number, data: ProjectUpdate) {
    try {
        const fields: string[] = []
        const values: unknown[] = []
        if (data.project_name !== undefined) { fields.push('project_name = ?'); values.push(data.project_name) }
        if (data.client_name !== undefined) { fields.push('client_name = ?'); values.push(data.client_name) }
        if (data.client_email !== undefined) { fields.push('client_email = ?'); values.push(data.client_email) }
        if (data.client_phone !== undefined) { fields.push('client_phone = ?'); values.push(data.client_phone) }
        if (data.project_type !== undefined) { fields.push('project_type = ?'); values.push(data.project_type) }
        if (data.status !== undefined) { fields.push('status = ?'); values.push(data.status) }
        if (data.priority !== undefined) { fields.push('priority = ?'); values.push(data.priority) }
        if (data.budget !== undefined) { fields.push('budget = ?'); values.push(data.budget) }
        if (data.paid_amount !== undefined) { fields.push('paid_amount = ?'); values.push(data.paid_amount) }
        if (data.start_date !== undefined) { fields.push('start_date = ?'); values.push(data.start_date) }
        if (data.deadline !== undefined) { fields.push('deadline = ?'); values.push(data.deadline) }
        if (data.completed_date !== undefined) { fields.push('completed_date = ?'); values.push(data.completed_date) }
        if (data.progress !== undefined) { fields.push('progress = ?'); values.push(data.progress) }
        if (data.description !== undefined) { fields.push('description = ?'); values.push(data.description) }
        if (data.tech_stack !== undefined) { fields.push('tech_stack = ?'); values.push(data.tech_stack) }
        if (data.assigned_to !== undefined) { fields.push('assigned_to = ?'); values.push(data.assigned_to) }
        if (data.notes !== undefined) { fields.push('notes = ?'); values.push(data.notes) }
        if (fields.length === 0) return { data: null, error: 'No fields to update' }
        values.push(id)
        await pool.execute(`UPDATE Projects SET ${fields.join(', ')} WHERE id = ?`, values)
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Projects WHERE id = ?', [id])
        return { data: rows[0] as Project, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== DELETE ====================
export async function deleteProject(id: number) {
    try {
        await pool.execute('DELETE FROM Projects WHERE id = ?', [id])
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
