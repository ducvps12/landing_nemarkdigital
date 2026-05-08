import pool from '@/lib/mysql/connection'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

export interface Message {
    id: number
    conversation_id: number
    send_by: string
    content: string
    send_at: string
    is_read: boolean
}

export type MessageInsert = Omit<Message, 'id' | 'send_at' | 'is_read'> & { id?: number; send_at?: string; is_read?: boolean }
export type MessageUpdate = Partial<Message>

// ==================== CREATE ====================
export async function createMessage(data: MessageInsert) {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            'INSERT INTO Messages (conversation_id, send_by, content) VALUES (?, ?, ?)',
            [data.conversation_id, data.send_by, data.content]
        )
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Messages WHERE id = ?', [result.insertId]
        )
        return { data: rows[0] as Message, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== READ ====================
export async function getAllMessages() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Messages ORDER BY send_at ASC'
        )
        return { data: rows as Message[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getMessageById(id: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Messages WHERE id = ?', [id]
        )
        return { data: rows[0] as Message || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getMessagesByConversation(conversationId: number) {
    try {
        const [msgRows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Messages WHERE conversation_id = ? ORDER BY send_at ASC',
            [conversationId]
        )
        const messages = await Promise.all(
            (msgRows as RowDataPacket[]).map(async (msg) => {
                const [imgRows] = await pool.execute<RowDataPacket[]>(
                    'SELECT * FROM MessageImages WHERE message_id = ?', [msg.id]
                )
                return { ...msg, MessageImages: imgRows }
            })
        )
        return { data: messages, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getUnreadMessages(conversationId?: number) {
    try {
        let sql = 'SELECT * FROM Messages WHERE is_read = FALSE'
        const params: unknown[] = []
        if (conversationId) {
            sql += ' AND conversation_id = ?'
            params.push(conversationId)
        }
        sql += ' ORDER BY send_at ASC'
        const [rows] = await pool.execute<RowDataPacket[]>(sql, params)
        return { data: rows as Message[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== UPDATE ====================
export async function updateMessage(id: number, data: MessageUpdate) {
    try {
        const fields: string[] = []
        const values: unknown[] = []
        if (data.content !== undefined) { fields.push('content = ?'); values.push(data.content) }
        if (data.is_read !== undefined) { fields.push('is_read = ?'); values.push(data.is_read) }
        if (data.send_by !== undefined) { fields.push('send_by = ?'); values.push(data.send_by) }
        if (fields.length === 0) return { data: null, error: 'No fields to update' }
        values.push(id)
        await pool.execute(`UPDATE Messages SET ${fields.join(', ')} WHERE id = ?`, values)
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Messages WHERE id = ?', [id])
        return { data: rows[0] as Message, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function markMessageAsRead(id: number) {
    try {
        await pool.execute('UPDATE Messages SET is_read = TRUE WHERE id = ?', [id])
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Messages WHERE id = ?', [id])
        return { data: rows[0] as Message, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function markAllMessagesAsRead(conversationId: number) {
    try {
        await pool.execute(
            'UPDATE Messages SET is_read = TRUE WHERE conversation_id = ? AND is_read = FALSE',
            [conversationId]
        )
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== DELETE ====================
export async function deleteMessage(id: number) {
    try {
        // MessageImages will be cascade deleted
        await pool.execute('DELETE FROM Messages WHERE id = ?', [id])
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
