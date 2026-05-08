import pool from '@/lib/mysql/connection'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

export interface Contract {
    id: number
    employee_id: number
    contract_type: 'indefinite' | 'definite' | 'seasonal' | 'probation'
    contract_number: string | null
    start_date: string
    end_date: string | null
    salary: number
    status: 'active' | 'expired' | 'terminated' | 'pending'
    file_url: string | null
    notes: string | null
    created_at: string
}

export type ContractInsert = Omit<Contract, 'id' | 'created_at'> & { id?: number }
export type ContractUpdate = Partial<Omit<Contract, 'id' | 'created_at'>>

export async function createContract(data: ContractInsert) {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            `INSERT INTO Contracts (employee_id, contract_type, contract_number, start_date, end_date, salary, status, file_url, notes)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [data.employee_id, data.contract_type, data.contract_number, data.start_date, data.end_date, data.salary, data.status, data.file_url, data.notes]
        )
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Contracts WHERE id = ?', [result.insertId])
        return { data: rows[0] as Contract, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getAllContracts() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(`
            SELECT c.*, e.full_name as employee_name 
            FROM Contracts c 
            LEFT JOIN Employees e ON c.employee_id = e.id 
            ORDER BY c.created_at DESC
        `)
        return { data: rows, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getContractsByEmployeeId(employeeId: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Contracts WHERE employee_id = ? ORDER BY start_date DESC', [employeeId]
        )
        return { data: rows as Contract[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getExpiringContracts(days: number = 30) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(`
            SELECT c.*, e.full_name as employee_name 
            FROM Contracts c 
            LEFT JOIN Employees e ON c.employee_id = e.id 
            WHERE c.end_date IS NOT NULL 
            AND c.end_date BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL ? DAY)
            AND c.status = 'active'
            ORDER BY c.end_date ASC
        `, [days])
        return { data: rows, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function updateContract(id: number, data: ContractUpdate) {
    try {
        const fields: string[] = []
        const values: unknown[] = []
        if (data.contract_type !== undefined) { fields.push('contract_type = ?'); values.push(data.contract_type) }
        if (data.contract_number !== undefined) { fields.push('contract_number = ?'); values.push(data.contract_number) }
        if (data.start_date !== undefined) { fields.push('start_date = ?'); values.push(data.start_date) }
        if (data.end_date !== undefined) { fields.push('end_date = ?'); values.push(data.end_date) }
        if (data.salary !== undefined) { fields.push('salary = ?'); values.push(data.salary) }
        if (data.status !== undefined) { fields.push('status = ?'); values.push(data.status) }
        if (data.file_url !== undefined) { fields.push('file_url = ?'); values.push(data.file_url) }
        if (data.notes !== undefined) { fields.push('notes = ?'); values.push(data.notes) }
        if (fields.length === 0) return { data: null, error: 'No fields to update' }
        values.push(id)
        await pool.execute(`UPDATE Contracts SET ${fields.join(', ')} WHERE id = ?`, values)
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Contracts WHERE id = ?', [id])
        return { data: rows[0] as Contract, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function deleteContract(id: number) {
    try {
        await pool.execute('DELETE FROM Contracts WHERE id = ?', [id])
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
