import pool from '@/lib/mysql/connection'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

export interface CustomerInfo {
    id: number
    fullname: string
    email: string
    phone_number: string
    customer_message: string
    product: string
}

export type CustomerInfoInsert = Omit<CustomerInfo, 'id'> & { id?: number }
export type CustomerInfoUpdate = Partial<CustomerInfo>

// ==================== CREATE ====================
export async function createCustomerInfo(data: CustomerInfoInsert) {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            'INSERT INTO CustomerInfomations (fullname, email, phone_number, customer_message, product) VALUES (?, ?, ?, ?, ?)',
            [data.fullname, data.email, data.phone_number, data.customer_message, data.product]
        )
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM CustomerInfomations WHERE id = ?', [result.insertId]
        )
        return { data: rows[0] as CustomerInfo, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== READ ====================
export async function getAllCustomerInfos() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM CustomerInfomations')
        return { data: rows as CustomerInfo[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getCustomerInfoById(id: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM CustomerInfomations WHERE id = ?', [id]
        )
        return { data: rows[0] as CustomerInfo || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getCustomerInfosByProduct(product: string) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM CustomerInfomations WHERE product = ?', [product]
        )
        return { data: rows as CustomerInfo[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getCustomerInfosByEmail(email: string) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM CustomerInfomations WHERE email = ?', [email]
        )
        return { data: rows as CustomerInfo[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== UPDATE ====================
export async function updateCustomerInfo(id: number, data: CustomerInfoUpdate) {
    try {
        const fields: string[] = []
        const values: unknown[] = []
        if (data.fullname !== undefined) { fields.push('fullname = ?'); values.push(data.fullname) }
        if (data.email !== undefined) { fields.push('email = ?'); values.push(data.email) }
        if (data.phone_number !== undefined) { fields.push('phone_number = ?'); values.push(data.phone_number) }
        if (data.customer_message !== undefined) { fields.push('customer_message = ?'); values.push(data.customer_message) }
        if (data.product !== undefined) { fields.push('product = ?'); values.push(data.product) }
        if (fields.length === 0) return { data: null, error: 'No fields to update' }
        values.push(id)
        await pool.execute(`UPDATE CustomerInfomations SET ${fields.join(', ')} WHERE id = ?`, values)
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM CustomerInfomations WHERE id = ?', [id])
        return { data: rows[0] as CustomerInfo, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== DELETE ====================
export async function deleteCustomerInfo(id: number) {
    try {
        await pool.execute('DELETE FROM CustomerInfomations WHERE id = ?', [id])
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
