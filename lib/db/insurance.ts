import pool from '@/lib/mysql/connection'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

export interface InsuranceRecord {
    id: number
    employee_id: number
    insurance_code: string | null
    insurance_type: 'bhxh' | 'bhyt' | 'bhtn' | 'all'
    monthly_employee: number
    monthly_employer: number
    start_date: string | null
    end_date: string | null
    status: 'active' | 'inactive' | 'pending' | 'overdue'
    notes: string | null
    created_at: string
}

export type InsuranceInsert = Omit<InsuranceRecord, 'id' | 'created_at'> & { id?: number }
export type InsuranceUpdate = Partial<Omit<InsuranceRecord, 'id' | 'created_at'>>

export async function createInsurance(data: InsuranceInsert) {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            `INSERT INTO InsuranceRecords (employee_id, insurance_code, insurance_type, monthly_employee, monthly_employer, start_date, end_date, status, notes)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [data.employee_id, data.insurance_code, data.insurance_type, data.monthly_employee, data.monthly_employer, data.start_date, data.end_date, data.status, data.notes]
        )
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM InsuranceRecords WHERE id = ?', [result.insertId])
        return { data: rows[0] as InsuranceRecord, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getAllInsurance() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(`
            SELECT i.*, e.full_name as employee_name 
            FROM InsuranceRecords i 
            LEFT JOIN Employees e ON i.employee_id = e.id 
            ORDER BY i.created_at DESC
        `)
        return { data: rows, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getInsuranceByEmployeeId(employeeId: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM InsuranceRecords WHERE employee_id = ?', [employeeId]
        )
        return { data: rows as InsuranceRecord[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getTotalMonthlyInsurance() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(`
            SELECT 
                SUM(monthly_employee) as total_employee,
                SUM(monthly_employer) as total_employer,
                SUM(monthly_employee + monthly_employer) as total_monthly,
                COUNT(*) as total_records,
                SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active_count,
                SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending_count,
                SUM(CASE WHEN status = 'overdue' THEN 1 ELSE 0 END) as overdue_count
            FROM InsuranceRecords
        `)
        return { data: rows[0], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function updateInsurance(id: number, data: InsuranceUpdate) {
    try {
        const fields: string[] = []
        const values: unknown[] = []
        if (data.insurance_code !== undefined) { fields.push('insurance_code = ?'); values.push(data.insurance_code) }
        if (data.insurance_type !== undefined) { fields.push('insurance_type = ?'); values.push(data.insurance_type) }
        if (data.monthly_employee !== undefined) { fields.push('monthly_employee = ?'); values.push(data.monthly_employee) }
        if (data.monthly_employer !== undefined) { fields.push('monthly_employer = ?'); values.push(data.monthly_employer) }
        if (data.start_date !== undefined) { fields.push('start_date = ?'); values.push(data.start_date) }
        if (data.end_date !== undefined) { fields.push('end_date = ?'); values.push(data.end_date) }
        if (data.status !== undefined) { fields.push('status = ?'); values.push(data.status) }
        if (data.notes !== undefined) { fields.push('notes = ?'); values.push(data.notes) }
        if (fields.length === 0) return { data: null, error: 'No fields to update' }
        values.push(id)
        await pool.execute(`UPDATE InsuranceRecords SET ${fields.join(', ')} WHERE id = ?`, values)
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM InsuranceRecords WHERE id = ?', [id])
        return { data: rows[0] as InsuranceRecord, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function deleteInsurance(id: number) {
    try {
        await pool.execute('DELETE FROM InsuranceRecords WHERE id = ?', [id])
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
