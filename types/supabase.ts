export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            Admins: {
                Row: {
                    id: number
                    login_name: string
                    password: string
                }
                Insert: {
                    id?: number
                    login_name: string
                    password: string
                }
                Update: {
                    id?: number
                    login_name?: string
                    password?: string
                }
            }
            Blogs: {
                Row: {
                    id: number
                    title: string
                    meta_des: string
                    main_content: string
                    created_at: string
                    created_by: string
                    image_url: string | null
                }
                Insert: {
                    id?: number
                    title: string
                    meta_des: string
                    main_content: string
                    created_at?: string
                    created_by: string
                    image_url?: string | null
                }
                Update: {
                    id?: number
                    title?: string
                    meta_des?: string
                    main_content?: string
                    created_at?: string
                    created_by?: string
                    image_url?: string | null
                }
            }
            CustomerInfomations: {
                Row: {
                    id: number
                    fullname: string
                    email: string
                    phone_number: string
                    customer_message: string
                    product: string
                }
                Insert: {
                    id?: number
                    fullname: string
                    email: string
                    phone_number: string
                    customer_message: string
                    product: string
                }
                Update: {
                    id?: number
                    fullname?: string
                    email?: string
                    phone_number?: string
                    customer_message?: string
                    product?: string
                }
            }
            Options: {
                Row: {
                    id: number
                    option_code: string
                    option_value: string
                    description: string
                }
                Insert: {
                    id?: number
                    option_code: string
                    option_value: string
                    description: string
                }
                Update: {
                    id?: number
                    option_code?: string
                    option_value?: string
                    description?: string
                }
            }
            Conversations: {
                Row: {
                    id: number
                    title: string
                    created_at: string
                }
                Insert: {
                    id?: number
                    title: string
                    created_at?: string
                }
                Update: {
                    id?: number
                    title?: string
                    created_at?: string
                }
            }
            Messages: {
                Row: {
                    id: number
                    conversation_id: number
                    send_by: string
                    content: string
                    send_at: string
                    is_read: boolean
                }
                Insert: {
                    id?: number
                    conversation_id: number
                    send_by: string
                    content: string
                    send_at?: string
                    is_read?: boolean
                }
                Update: {
                    id?: number
                    conversation_id?: number
                    send_by?: string
                    content?: string
                    send_at?: string
                    is_read?: boolean
                }
            }
            MessageImages: {
                Row: {
                    id: number
                    message_id: number
                    img_url: string
                }
                Insert: {
                    id?: number
                    message_id: number
                    img_url: string
                }
                Update: {
                    id?: number
                    message_id?: number
                    img_url?: string
                }
            }
        }
        Views: Record<string, never>
        Functions: Record<string, never>
        Enums: Record<string, never>
    }
}
