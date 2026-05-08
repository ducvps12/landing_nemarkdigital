import pool from '@/lib/mysql/connection'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

export interface FinancialRecord {
    id: number
    category: string
    record_type: 'income' | 'expense'
    amount: number
    description: string | null
    record_date: string
    website_source: string | null
    payment_method: 'company_bank' | 'personal_bank' | 'cash' | 'online'
    receipt_url: string | null
    notes: string | null
    created_at: string
}

export type FinancialInsert = Omit<FinancialRecord, 'id' | 'created_at'> & { id?: number }
export type FinancialUpdate = Partial<Omit<FinancialRecord, 'id' | 'created_at'>>

export async function createFinancialRecord(data: FinancialInsert) {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            `INSERT INTO FinancialRecords (category, record_type, amount, description, record_date, website_source, payment_method, receipt_url, notes)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [data.category, data.record_type, data.amount, data.description, data.record_date, data.website_source, data.payment_method, data.receipt_url, data.notes]
        )
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM FinancialRecords WHERE id = ?', [result.insertId])
        return { data: rows[0] as FinancialRecord, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getAllFinancialRecords() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM FinancialRecords ORDER BY record_date DESC')
        return { data: rows as FinancialRecord[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getFinancialRecordById(id: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM FinancialRecords WHERE id = ?', [id])
        return { data: rows[0] as FinancialRecord || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getByDateRange(startDate: string, endDate: string) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM FinancialRecords WHERE record_date BETWEEN ? AND ? ORDER BY record_date DESC',
            [startDate, endDate]
        )
        return { data: rows as FinancialRecord[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getFinancialSummary() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(`
            SELECT 
                SUM(CASE WHEN record_type = 'income' THEN amount ELSE 0 END) as total_income,
                SUM(CASE WHEN record_type = 'expense' THEN amount ELSE 0 END) as total_expense,
                SUM(CASE WHEN record_type = 'income' THEN amount ELSE -amount END) as net_profit,
                COUNT(*) as total_records
            FROM FinancialRecords
        `)
        return { data: rows[0], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getMonthlyTotals(year: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(`
            SELECT 
                MONTH(record_date) as month,
                SUM(CASE WHEN record_type = 'income' THEN amount ELSE 0 END) as income,
                SUM(CASE WHEN record_type = 'expense' THEN amount ELSE 0 END) as expense
            FROM FinancialRecords 
            WHERE YEAR(record_date) = ?
            GROUP BY MONTH(record_date)
            ORDER BY month ASC
        `, [year])
        return { data: rows, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getSummaryByCategory() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(`
            SELECT 
                category,
                record_type,
                SUM(amount) as total,
                COUNT(*) as count
            FROM FinancialRecords 
            GROUP BY category, record_type
            ORDER BY total DESC
        `)
        return { data: rows, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function updateFinancialRecord(id: number, data: FinancialUpdate) {
    try {
        const fields: string[] = []
        const values: unknown[] = []
        if (data.category !== undefined) { fields.push('category = ?'); values.push(data.category) }
        if (data.record_type !== undefined) { fields.push('record_type = ?'); values.push(data.record_type) }
        if (data.amount !== undefined) { fields.push('amount = ?'); values.push(data.amount) }
        if (data.description !== undefined) { fields.push('description = ?'); values.push(data.description) }
        if (data.record_date !== undefined) { fields.push('record_date = ?'); values.push(data.record_date) }
        if (data.website_source !== undefined) { fields.push('website_source = ?'); values.push(data.website_source) }
        if (data.payment_method !== undefined) { fields.push('payment_method = ?'); values.push(data.payment_method) }
        if (data.receipt_url !== undefined) { fields.push('receipt_url = ?'); values.push(data.receipt_url) }
        if (data.notes !== undefined) { fields.push('notes = ?'); values.push(data.notes) }
        if (fields.length === 0) return { data: null, error: 'No fields to update' }
        values.push(id)
        await pool.execute(`UPDATE FinancialRecords SET ${fields.join(', ')} WHERE id = ?`, values)
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM FinancialRecords WHERE id = ?', [id])
        return { data: rows[0] as FinancialRecord, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function deleteFinancialRecord(id: number) {
    try {
        await pool.execute('DELETE FROM FinancialRecords WHERE id = ?', [id])
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
