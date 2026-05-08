import pool from '@/lib/mysql/connection'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

export interface PasswordResetToken {
    id: number
    admin_id: number
    token: string
    expires_at: Date
    used: boolean
    created_at: Date
}

export async function createResetToken(adminId: number, token: string, expiresAt: Date) {
    try {
        // Invalidate any existing tokens for this admin
        await pool.execute(
            'UPDATE PasswordResetTokens SET used = TRUE WHERE admin_id = ? AND used = FALSE',
            [adminId]
        )
        // Create new token
        await pool.execute<ResultSetHeader>(
            'INSERT INTO PasswordResetTokens (admin_id, token, expires_at) VALUES (?, ?, ?)',
            [adminId, token, expiresAt]
        )
        return { error: null }
    } catch (error) {
        return { error }
    }
}

export async function getValidToken(token: string) {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT * FROM PasswordResetTokens WHERE token = ? AND used = FALSE AND expires_at > NOW()',
            [token]
        )
        return { data: rows[0] as PasswordResetToken || null, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export async function markTokenUsed(token: string) {
    try {
        await pool.execute(
            'UPDATE PasswordResetTokens SET used = TRUE WHERE token = ?',
            [token]
        )
        return { error: null }
    } catch (error) {
        return { error }
    }
}
