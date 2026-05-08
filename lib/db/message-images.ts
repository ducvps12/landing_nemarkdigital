import pool from '@/lib/mysql/connection'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

export interface MessageImage {
    id: number
    message_id: number
    img_url: string
}

export type MessageImageInsert = Omit<MessageImage, 'id'> & { id?: number }
export type MessageImageUpdate = Partial<MessageImage>

// ==================== CREATE ====================
export async function createMessageImage(data: MessageImageInsert) {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            'INSERT INTO MessageImages (message_id, img_url) VALUES (?, ?)',
            [data.message_id, data.img_url]
        )
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM MessageImages WHERE id = ?', [result.insertId]
        )
        return { data: rows[0] as MessageImage, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function createMultipleMessageImages(images: MessageImageInsert[]) {
    try {
        if (images.length === 0) return { data: [], error: null }
        const placeholders = images.map(() => '(?, ?)').join(', ')
        const values = images.flatMap(img => [img.message_id, img.img_url])
        const [result] = await pool.execute<ResultSetHeader>(
            `INSERT INTO MessageImages (message_id, img_url) VALUES ${placeholders}`,
            values
        )
        const firstId = result.insertId
        const ids = Array.from({ length: images.length }, (_, i) => firstId + i)
        const [rows] = await pool.execute<RowDataPacket[]>(
            `SELECT * FROM MessageImages WHERE id IN (${ids.map(() => '?').join(',')})`,
            ids
        )
        return { data: rows as MessageImage[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== READ ====================
export async function getAllMessageImages() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM MessageImages')
        return { data: rows as MessageImage[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getMessageImageById(id: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM MessageImages WHERE id = ?', [id]
        )
        return { data: rows[0] as MessageImage || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getImagesByMessage(messageId: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM MessageImages WHERE message_id = ?', [messageId]
        )
        return { data: rows as MessageImage[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== UPDATE ====================
export async function updateMessageImage(id: number, data: MessageImageUpdate) {
    try {
        const fields: string[] = []
        const values: unknown[] = []
        if (data.img_url !== undefined) { fields.push('img_url = ?'); values.push(data.img_url) }
        if (data.message_id !== undefined) { fields.push('message_id = ?'); values.push(data.message_id) }
        if (fields.length === 0) return { data: null, error: 'No fields to update' }
        values.push(id)
        await pool.execute(`UPDATE MessageImages SET ${fields.join(', ')} WHERE id = ?`, values)
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM MessageImages WHERE id = ?', [id])
        return { data: rows[0] as MessageImage, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== DELETE ====================
export async function deleteMessageImage(id: number) {
    try {
        await pool.execute('DELETE FROM MessageImages WHERE id = ?', [id])
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function deleteImagesByMessage(messageId: number) {
    try {
        await pool.execute('DELETE FROM MessageImages WHERE message_id = ?', [messageId])
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
