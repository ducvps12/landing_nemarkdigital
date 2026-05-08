'use client'

import { useState, useRef } from 'react'
import { uploadBlogImage, deleteBlogImage } from '@/lib/storage/uploadImage'
import toast from 'react-hot-toast'

interface ImageUploadProps {
    value?: string | null
    onChange: (url: string) => void
    onDelete?: () => void
}

export default function ImageUpload({ value, onChange, onDelete }: ImageUploadProps) {
    const [uploading, setUploading] = useState(false)
    const [preview, setPreview] = useState<string | null>(value || null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        // Validate file size
        if (file.size > 5 * 1024 * 1024) {
            toast.error('Kích thước file phải nhỏ hơn 5MB')
            return
        }

        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
        if (!allowedTypes.includes(file.type)) {
            toast.error('Chỉ chấp nhận file JPG, PNG, WebP hoặc GIF')
            return
        }

        // Show preview
        const reader = new FileReader()
        reader.onloadend = () => {
            setPreview(reader.result as string)
        }
        reader.readAsDataURL(file)

        // Upload
        setUploading(true)
        const url = await uploadBlogImage(file)
        setUploading(false)

        if (url) {
            onChange(url)
            toast.success('Upload ảnh thành công!')
        } else {
            setPreview(null)
            toast.error('Upload thất bại. Vui lòng thử lại.')
        }

        // Reset input
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    const handleRemove = async () => {
        if (!value) return

        if (confirm('Bạn có chắc muốn xóa ảnh này?')) {
            // Delete from storage
            await deleteBlogImage(value)

            // Clear state
            setPreview(null)
            onChange('')

            if (onDelete) {
                onDelete()
            }

            toast.success('Đã xóa ảnh')
        }
    }

    return (
        <div className="space-y-4">
            {/* Preview */}
            {preview && (
                <div className="relative inline-block">
                    <img
                        src={preview}
                        alt="Preview"
                        className="max-w-full h-48 object-cover rounded-lg border border-slate-300"
                    />
                    <button
                        type="button"
                        onClick={handleRemove}
                        className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg"
                        title="Xóa ảnh"
                    >
                        <span className="material-icons text-sm">close</span>
                    </button>
                </div>
            )}

            {/* Upload Area */}
            {!preview && (
                <div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="image-upload"
                        disabled={uploading}
                    />
                    <label
                        htmlFor="image-upload"
                        className={`
                            flex flex-col items-center justify-center
                            w-full h-48 border-2 border-dashed border-slate-300
                            rounded-lg cursor-pointer
                            hover:border-purple-500 hover:bg-slate-50
                            transition-all
                            ${uploading ? 'opacity-50 cursor-not-allowed' : ''}
                        `}
                    >
                        {uploading ? (
                            <>
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-3"></div>
                                <p className="text-sm text-slate-600">Đang upload...</p>
                            </>
                        ) : (
                            <>
                                <span className="material-icons text-5xl text-slate-400 mb-3">
                                    cloud_upload
                                </span>
                                <p className="text-sm font-medium text-slate-700">
                                    Click để chọn ảnh
                                </p>
                                <p className="text-xs text-slate-500 mt-1">
                                    JPG, PNG, WebP hoặc GIF (max 5MB)
                                </p>
                            </>
                        )}
                    </label>
                </div>
            )}

            {/* Change Image Button */}
            {preview && !uploading && (
                <div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="image-change"
                    />
                    <label
                        htmlFor="image-change"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                        <span className="material-icons text-sm">edit</span>
                        Thay đổi ảnh
                    </label>
                </div>
            )}
        </div>
    )
}
