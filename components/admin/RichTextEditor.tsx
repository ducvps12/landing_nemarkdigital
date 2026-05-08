'use client'

import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import 'react-quill-new/dist/quill.snow.css'

interface RichTextEditorProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
    // Dynamically import ReactQuill to avoid SSR issues
    const ReactQuill = useMemo(
        () => dynamic(() => import('react-quill-new'), { ssr: false }),
        []
    )

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link', 'image'],
            ['clean']
        ]
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'list',
        'color', 'background',
        'align',
        'link', 'image'
    ]

    return (
        <div className="rich-text-editor">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                placeholder={placeholder}
                className="bg-white"
            />
            <style jsx global>{`
                .rich-text-editor .quill {
                    border-radius: 0.5rem;
                    border: 1px solid rgb(203 213 225);
                }
                .rich-text-editor .ql-toolbar {
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                    border: 1px solid rgb(203 213 225);
                    border-bottom: none;
                    background: rgb(248 250 252);
                }
                .rich-text-editor .ql-container {
                    border-bottom-left-radius: 0.5rem;
                    border-bottom-right-radius: 0.5rem;
                    border: 1px solid rgb(203 213 225);
                    font-family: inherit;
                    font-size: 0.875rem;
                    min-height: 300px;
                }
                .rich-text-editor .ql-editor {
                    min-height: 300px;
                }
                .rich-text-editor .ql-editor.ql-blank::before {
                    color: rgb(148 163 184);
                    font-style: normal;
                }
                .rich-text-editor .ql-snow .ql-stroke {
                    stroke: rgb(71 85 105);
                }
                .rich-text-editor .ql-snow .ql-fill {
                    fill: rgb(71 85 105);
                }
                .rich-text-editor .ql-snow .ql-picker-label {
                    color: rgb(71 85 105);
                }
                .rich-text-editor .ql-toolbar button:hover,
                .rich-text-editor .ql-toolbar button:focus,
                .rich-text-editor .ql-toolbar button.ql-active {
                    color: rgb(147 51 234);
                }
                .rich-text-editor .ql-toolbar button:hover .ql-stroke,
                .rich-text-editor .ql-toolbar button:focus .ql-stroke,
                .rich-text-editor .ql-toolbar button.ql-active .ql-stroke {
                    stroke: rgb(147 51 234);
                }
                .rich-text-editor .ql-toolbar button:hover .ql-fill,
                .rich-text-editor .ql-toolbar button:focus .ql-fill,
                .rich-text-editor .ql-toolbar button.ql-active .ql-fill {
                    fill: rgb(147 51 234);
                }
            `}</style>
        </div>
    )
}
