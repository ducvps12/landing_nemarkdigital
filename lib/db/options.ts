import pool from '@/lib/mysql/connection'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

export interface Option {
    id: number
    option_code: string
    option_value: string
    description: string
}

export type OptionInsert = Omit<Option, 'id'> & { id?: number }
export type OptionUpdate = Partial<Option>

// ==================== CREATE ====================
export async function createOption(data: OptionInsert) {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            'INSERT INTO Options (option_code, option_value, description) VALUES (?, ?, ?)',
            [data.option_code, data.option_value, data.description]
        )
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Options WHERE id = ?', [result.insertId]
        )
        return { data: rows[0] as Option, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== READ ====================
export async function getAllOptions() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Options')
        return { data: rows as Option[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getOptionById(id: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Options WHERE id = ?', [id]
        )
        return { data: rows[0] as Option || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getOptionByCode(optionCode: string) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Options WHERE option_code = ?', [optionCode]
        )
        return { data: rows[0] as Option || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== UPDATE ====================
export async function updateOption(id: number, data: OptionUpdate) {
    try {
        const fields: string[] = []
        const values: unknown[] = []
        if (data.option_code !== undefined) { fields.push('option_code = ?'); values.push(data.option_code) }
        if (data.option_value !== undefined) { fields.push('option_value = ?'); values.push(data.option_value) }
        if (data.description !== undefined) { fields.push('description = ?'); values.push(data.description) }
        if (fields.length === 0) return { data: null, error: 'No fields to update' }
        values.push(id)
        await pool.execute(`UPDATE Options SET ${fields.join(', ')} WHERE id = ?`, values)
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Options WHERE id = ?', [id])
        return { data: rows[0] as Option, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function updateOptionByCode(optionCode: string, data: OptionUpdate) {
    try {
        const fields: string[] = []
        const values: unknown[] = []
        if (data.option_value !== undefined) { fields.push('option_value = ?'); values.push(data.option_value) }
        if (data.description !== undefined) { fields.push('description = ?'); values.push(data.description) }
        if (fields.length === 0) return { data: null, error: 'No fields to update' }
        values.push(optionCode)
        await pool.execute(`UPDATE Options SET ${fields.join(', ')} WHERE option_code = ?`, values)
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Options WHERE option_code = ?', [optionCode])
        return { data: rows[0] as Option, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== DELETE ====================
export async function deleteOption(id: number) {
    try {
        await pool.execute('DELETE FROM Options WHERE id = ?', [id])
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
