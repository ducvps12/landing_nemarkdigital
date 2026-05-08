import { z } from 'zod'

/**
 * Zod schema for customer contact form validation & sanitization.
 */
export const customerInfoSchema = z.object({
    name: z
        .string()
        .min(2, 'Tên phải có ít nhất 2 ký tự')
        .max(100, 'Tên không được vượt quá 100 ký tự')
        .transform((val) => val.trim().replace(/<[^>]*>/g, '')), // Strip HTML tags

    email: z
        .string()
        .email('Email không hợp lệ')
        .max(255, 'Email không được vượt quá 255 ký tự')
        .transform((val) => val.trim().toLowerCase()),

    phone: z
        .string()
        .regex(/^[0-9]{10,11}$/, 'Số điện thoại phải có 10-11 chữ số')
        .transform((val) => val.trim()),

    service: z
        .string()
        .min(1, 'Vui lòng chọn dịch vụ')
        .max(100, 'Tên dịch vụ không hợp lệ')
        .transform((val) => val.trim().replace(/<[^>]*>/g, '')),

    message: z
        .string()
        .max(2000, 'Nội dung không được vượt quá 2000 ký tự')
        .optional()
        .default('')
        .transform((val) => val.trim().replace(/<[^>]*>/g, '')),
})

export type CustomerInfoInput = z.infer<typeof customerInfoSchema>
