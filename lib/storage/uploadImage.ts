import { createClient } from '@/lib/supabase/client'

const BUCKET_NAME = 'blog-images'

/**
 * Upload image to Supabase Storage
 * @param file - Image file to upload
 * @returns Public URL of uploaded image or null if failed
 */
export async function uploadBlogImage(file: File): Promise<string | null> {
    try {
        // Validate file
        const maxSize = 5 * 1024 * 1024 // 5MB
        if (file.size > maxSize) {
            throw new Error('File size must be less than 5MB')
        }

        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
        if (!allowedTypes.includes(file.type)) {
            throw new Error('File type must be JPEG, PNG, WebP, or GIF')
        }

        // Generate unique filename with timestamp
        const timestamp = Date.now()
        const fileExt = file.name.split('.').pop()
        const fileName = `${timestamp}-${Math.random().toString(36).substring(7)}.${fileExt}`

        // Upload to Supabase Storage
        const supabase = createClient()
        const { data, error } = await supabase.storage
            .from(BUCKET_NAME)
            .upload(fileName, file, {
                cacheControl: '3600',
                upsert: false
            })

        if (error) {
            console.error('Upload error:', error)
            throw error
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(data.path)

        return publicUrl
    } catch (error) {
        console.error('Error uploading image:', error)
        return null
    }
}

/**
 * Delete image from Supabase Storage
 * @param url - Public URL of image to delete
 * @returns true if deleted successfully, false otherwise
 */
export async function deleteBlogImage(url: string): Promise<boolean> {
    try {
        // Extract file path from URL
        // URL format: https://[project].supabase.co/storage/v1/object/public/blog-images/filename.jpg
        const urlParts = url.split(`${BUCKET_NAME}/`)
        if (urlParts.length < 2) {
            console.error('Invalid URL format')
            return false
        }

        const filePath = urlParts[1]

        // Delete from storage
        const supabase = createClient()
        const { error } = await supabase.storage
            .from(BUCKET_NAME)
            .remove([filePath])

        if (error) {
            console.error('Delete error:', error)
            return false
        }

        return true
    } catch (error) {
        console.error('Error deleting image:', error)
        return false
    }
}
