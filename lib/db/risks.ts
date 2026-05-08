import pool from '@/lib/mysql/connection'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

export interface RiskItem {
    id: number
    title: string
    description: string | null
    category: 'phap_ly' | 'tai_chinh' | 'nhan_su' | 'van_hanh' | 'uy_tin' | 'khac'
    severity: 'critical' | 'high' | 'medium' | 'low'
    likelihood: 'very_likely' | 'likely' | 'possible' | 'unlikely'
    impact: 'catastrophic' | 'major' | 'moderate' | 'minor'
    mitigation_plan: string | null
    status: 'active' | 'mitigated' | 'accepted' | 'resolved'
    owner: string | null
    deadline: string | null
    created_at: string
    updated_at: string
}

export type RiskInsert = Omit<RiskItem, 'id' | 'created_at' | 'updated_at'> & { id?: number }
export type RiskUpdate = Partial<Omit<RiskItem, 'id' | 'created_at' | 'updated_at'>>

export async function createRisk(data: RiskInsert) {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            `INSERT INTO RiskItems (title, description, category, severity, likelihood, impact, mitigation_plan, status, owner, deadline)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [data.title, data.description, data.category, data.severity, data.likelihood, data.impact, data.mitigation_plan, data.status, data.owner, data.deadline]
        )
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM RiskItems WHERE id = ?', [result.insertId])
        return { data: rows[0] as RiskItem, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getAllRisks() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(`
            SELECT * FROM RiskItems 
            ORDER BY FIELD(severity, 'critical', 'high', 'medium', 'low'), created_at DESC
        `)
        return { data: rows as RiskItem[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getRiskById(id: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM RiskItems WHERE id = ?', [id])
        return { data: rows[0] as RiskItem || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getActiveRisks() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(`
            SELECT * FROM RiskItems WHERE status = 'active'
            ORDER BY FIELD(severity, 'critical', 'high', 'medium', 'low')
        `)
        return { data: rows as RiskItem[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getRiskStats() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(`
            SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active_count,
                SUM(CASE WHEN severity = 'critical' AND status = 'active' THEN 1 ELSE 0 END) as critical_count,
                SUM(CASE WHEN severity = 'high' AND status = 'active' THEN 1 ELSE 0 END) as high_count,
                SUM(CASE WHEN status = 'mitigated' THEN 1 ELSE 0 END) as mitigated_count,
                SUM(CASE WHEN status = 'resolved' THEN 1 ELSE 0 END) as resolved_count
            FROM RiskItems
        `)
        return { data: rows[0], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function updateRisk(id: number, data: RiskUpdate) {
    try {
        const fields: string[] = []
        const values: unknown[] = []
        if (data.title !== undefined) { fields.push('title = ?'); values.push(data.title) }
        if (data.description !== undefined) { fields.push('description = ?'); values.push(data.description) }
        if (data.category !== undefined) { fields.push('category = ?'); values.push(data.category) }
        if (data.severity !== undefined) { fields.push('severity = ?'); values.push(data.severity) }
        if (data.likelihood !== undefined) { fields.push('likelihood = ?'); values.push(data.likelihood) }
        if (data.impact !== undefined) { fields.push('impact = ?'); values.push(data.impact) }
        if (data.mitigation_plan !== undefined) { fields.push('mitigation_plan = ?'); values.push(data.mitigation_plan) }
        if (data.status !== undefined) { fields.push('status = ?'); values.push(data.status) }
        if (data.owner !== undefined) { fields.push('owner = ?'); values.push(data.owner) }
        if (data.deadline !== undefined) { fields.push('deadline = ?'); values.push(data.deadline) }
        if (fields.length === 0) return { data: null, error: 'No fields to update' }
        values.push(id)
        await pool.execute(`UPDATE RiskItems SET ${fields.join(', ')} WHERE id = ?`, values)
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM RiskItems WHERE id = ?', [id])
        return { data: rows[0] as RiskItem, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function deleteRisk(id: number) {
    try {
        await pool.execute('DELETE FROM RiskItems WHERE id = ?', [id])
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
