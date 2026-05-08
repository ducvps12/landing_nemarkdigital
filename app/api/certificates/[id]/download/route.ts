import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { generateCertificatePDF } from '@/lib/certificates/generate'

interface RouteContext {
    params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, context: RouteContext) {
    try {
        const { id } = await context.params
        const supabase = await createClient()

        // Auth check
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        // Get certificate with enrollment and course data
        const { data: cert } = await supabase
            .from('certificates')
            .select(`
                id,
                certificate_number,
                issued_at,
                enrollment:enrollments!enrollment_id(
                    id,
                    user_id,
                    course:courses!course_id(
                        title,
                        instructor_id
                    )
                )
            `)
            .eq('id', id)
            .single()

        if (!cert) {
            return NextResponse.json({ error: 'Certificate not found' }, { status: 404 })
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const enrollment = cert.enrollment as any
        if (!enrollment || enrollment.user_id !== user.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
        }

        // Get student name
        const { data: profile } = await supabase
            .from('profiles')
            .select('full_name')
            .eq('id', user.id)
            .single()

        // Get instructor name
        let instructorName = undefined
        if (enrollment.course?.instructor_id) {
            const { data: instructor } = await supabase
                .from('profiles')
                .select('full_name')
                .eq('id', enrollment.course.instructor_id)
                .single()
            instructorName = instructor?.full_name || undefined
        }

        const pdfBuffer = generateCertificatePDF({
            studentName: profile?.full_name || user.email || 'Student',
            courseName: enrollment.course?.title || 'Course',
            certificateNumber: cert.certificate_number,
            issuedAt: cert.issued_at,
            instructorName,
        })

        return new NextResponse(new Uint8Array(pdfBuffer), {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="certificate-${cert.certificate_number}.pdf"`,
            },
        })
    } catch (error) {
        console.error('Certificate download error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
