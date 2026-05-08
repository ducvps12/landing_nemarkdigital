import pool from '@/lib/mysql/connection'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

export interface Conversation {
    id: number
    title: string
    created_at: string
}

export type ConversationInsert = Omit<Conversation, 'id' | 'created_at'> & { id?: number; created_at?: string }
export type ConversationUpdate = Partial<Conversation>

// ==================== CREATE ====================
export async function createConversation(data: ConversationInsert) {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            'INSERT INTO Conversations (title) VALUES (?)',
            [data.title]
        )
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Conversations WHERE id = ?', [result.insertId]
        )
        return { data: rows[0] as Conversation, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== READ ====================
export async function getAllConversations() {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Conversations ORDER BY created_at DESC'
        )
        return { data: rows as Conversation[], error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function getConversationById(id: number) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Conversations WHERE id = ?', [id]
        )
        return { data: rows[0] as Conversation || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// Get conversation with all messages and images
export async function getConversationWithMessages(id: number) {
    try {
        const [convRows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Conversations WHERE id = ?', [id]
        )
        if (!convRows[0]) return { data: null, error: null }

        const [msgRows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM Messages WHERE conversation_id = ? ORDER BY send_at ASC', [id]
        )

        const messages = await Promise.all(
            (msgRows as RowDataPacket[]).map(async (msg) => {
                const [imgRows] = await pool.execute<RowDataPacket[]>(
                    'SELECT * FROM MessageImages WHERE message_id = ?', [msg.id]
                )
                return { ...msg, MessageImages: imgRows }
            })
        )

        return { data: { ...convRows[0], Messages: messages }, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== UPDATE ====================
export async function updateConversation(id: number, data: ConversationUpdate) {
    try {
        const fields: string[] = []
        const values: unknown[] = []
        if (data.title !== undefined) { fields.push('title = ?'); values.push(data.title) }
        if (fields.length === 0) return { data: null, error: 'No fields to update' }
        values.push(id)
        await pool.execute(`UPDATE Conversations SET ${fields.join(', ')} WHERE id = ?`, values)
        const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Conversations WHERE id = ?', [id])
        return { data: rows[0] as Conversation, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

// ==================== DELETE ====================
export async function deleteConversation(id: number) {
    try {
        // Messages and MessageImages will be cascade deleted
        await pool.execute('DELETE FROM Conversations WHERE id = ?', [id])
        return { data: null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
