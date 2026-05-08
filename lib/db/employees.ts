import pool from '@/lib/mysql/connection'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

export interface Employee {
    id: number
    full_name: string
    email: string | null
    phone: string | null
    position: string | null
    department: string | null
    employment_type: 'fulltime' | 'parttime'
    id_card_number: string | null
    date_of_birth: string | null
    address: string | null
    start_date: string | null
    end_date: string | null
    salary: number
    bank_account: string | null
    bank_name: string | null
    payment_method: 'company_bank' | 'personal_transfer' | 'cash'
    profile_image_url: string | null
    notes: string | null
    status: 'active' | 'inactive' | 'probation' | 'on_leave'
    created_at: string
    updated_at: string
}

export type EmployeeInsert = Omit<Employee, 'id' | 'created_at' | 'updated_at'> & { id?: number }
export type EmployeeUpdate = Partial<Omit<Employee, 'id' | 'created_at' | 'updated_at'>>

// ==================== CREATE ====================
export async function createEmployee(data: EmployeeInsert) {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            `INSERT INTO Employees (full_name, email, phone, position, department, employment_type, 
             id_card_number, date_of_birth, address, start_date, end_date, salary, 
             bank_account, bank_name, payment_method, profile_image_url, notes, status)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [data.full_name, data.email, data.phone, data.position, data.department, data.employment_type,
            data.id_card_number, data.date_of_birth, data.address, data.start_date, data.end_date, data.salary,
            data.bank_account, data.bank_name, data.payment_method, data.profile_image_url, data.notes, data.status]
        )
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Employees WHERE id = ?', [result.insertId])
        return { data: rows[0] as Employee, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== READ ====================
export async function getAllEmployees() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Employees ORDER BY created_at DESC')
        return { data: rows as Employee[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getEmployeeById(id: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Employees WHERE id = ?', [id])
        return { data: rows[0] as Employee || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getEmployeesByType(type: 'fulltime' | 'parttime') {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Employees WHERE employment_type = ? ORDER BY created_at DESC', [type])
        return { data: rows as Employee[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getActiveEmployees() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            "SELECT * FROM Employees WHERE status IN ('active', 'probation') ORDER BY created_at DESC"
        )
        return { data: rows as Employee[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getEmployeeStats() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(`
            SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active_count,
                SUM(CASE WHEN employment_type = 'fulltime' THEN 1 ELSE 0 END) as fulltime_count,
                SUM(CASE WHEN employment_type = 'parttime' THEN 1 ELSE 0 END) as parttime_count,
                SUM(CASE WHEN status = 'probation' THEN 1 ELSE 0 END) as probation_count
            FROM Employees
        `)
        return { data: rows[0], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== UPDATE ====================
export async function updateEmployee(id: number, data: EmployeeUpdate) {
    try {
        const fields: string[] = []
        const values: unknown[] = []
        const fieldMap: Record<string, keyof EmployeeUpdate> = {
            'full_name': 'full_name', 'email': 'email', 'phone': 'phone',
            'position': 'position', 'department': 'department', 'employment_type': 'employment_type',
            'id_card_number': 'id_card_number', 'date_of_birth': 'date_of_birth', 'address': 'address',
            'start_date': 'start_date', 'end_date': 'end_date', 'salary': 'salary',
            'bank_account': 'bank_account', 'bank_name': 'bank_name', 'payment_method': 'payment_method',
            'profile_image_url': 'profile_image_url', 'notes': 'notes', 'status': 'status'
        }
        for (const [col, key] of Object.entries(fieldMap)) {
            if (data[key] !== undefined) { fields.push(`${col} = ?`); values.push(data[key]) }
        }
        if (fields.length === 0) return { data: null, error: 'No fields to update' }
        values.push(id)
        await pool.execute(`UPDATE Employees SET ${fields.join(', ')} WHERE id = ?`, values)
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Employees WHERE id = ?', [id])
        return { data: rows[0] as Employee, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== DELETE ====================
export async function deleteEmployee(id: number) {
    try {
        await pool.execute('DELETE FROM Employees WHERE id = ?', [id])
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
