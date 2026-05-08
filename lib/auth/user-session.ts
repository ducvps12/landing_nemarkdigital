import { createClient } from '@/lib/supabase/server'

export type UserRole = 'admin' | 'instructor' | 'student'

export interface UserProfile {
    id: string
    email: string
    full_name: string | null
    avatar_url: string | null
    phone: string | null
    role: UserRole
    bio: string | null
    created_at: string
    updated_at: string
}

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

    if (error || !data) return null
    return data as UserProfile
}

export async function getCurrentUserProfile(): Promise<UserProfile | null> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return null
    return getUserProfile(user.id)
}

export async function updateUserProfile(
    userId: string,
    updates: Partial<Pick<UserProfile, 'full_name' | 'avatar_url' | 'phone' | 'bio'>>
): Promise<UserProfile | null> {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', userId)
        .select()
        .single()

    if (error || !data) return null
    return data as UserProfile
}

export async function getUserRole(userId: string): Promise<UserRole | null> {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userId)
        .single()

    if (error || !data) return null
    return data.role as UserRole
}
