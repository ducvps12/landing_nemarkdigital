import pool from '@/lib/mysql/connection'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

export interface Admin {
    id: number
    login_name: string
    password: string
    email: string | null
}

export type AdminInsert = Omit<Admin, 'id'> & { id?: number }
export type AdminUpdate = Partial<Admin>

// ==================== CREATE ====================
export async function createAdmin(data: AdminInsert) {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            'INSERT INTO Admins (login_name, password) VALUES (?, ?)',
            [data.login_name, data.password]
        )
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Admins WHERE id = ?',
            [result.insertId]
        )
        return { data: rows[0] as Admin, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== READ ====================
export async function getAllAdmins() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Admins')
        return { data: rows as Admin[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getAdminById(id: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Admins WHERE id = ?', [id]
        )
        return { data: rows[0] as Admin || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getAdminByLoginName(loginName: string) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Admins WHERE login_name = ?', [loginName]
        )
        return { data: rows[0] as Admin || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getAdminByEmail(email: string) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Admins WHERE email = ?', [email]
        )
        return { data: rows[0] as Admin || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== UPDATE ====================
export async function updateAdmin(id: number, data: AdminUpdate) {
    try {
        const fields: string[] = []
        const values: unknown[] = []
        if (data.login_name !== undefined) { fields.push('login_name = ?'); values.push(data.login_name) }
        if (data.password !== undefined) { fields.push('password = ?'); values.push(data.password) }
        if (fields.length === 0) return { data: null, error: 'No fields to update' }
        values.push(id)
        await pool.execute(`UPDATE Admins SET ${fields.join(', ')} WHERE id = ?`, values)
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Admins WHERE id = ?', [id])
        return { data: rows[0] as Admin, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== DELETE ====================
export async function deleteAdmin(id: number) {
    try {
        await pool.execute('DELETE FROM Admins WHERE id = ?', [id])
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
