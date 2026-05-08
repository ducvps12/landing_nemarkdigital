import { jsPDF } from 'jspdf'

interface CertificateData {
    studentName: string
    courseName: string
    certificateNumber: string
    issuedAt: string
    instructorName?: string
}

export function generateCertificatePDF(data: CertificateData): Buffer {
    const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
    })

    const w = 297
    const h = 210
    const centerX = w / 2

    // === Background ===
    // Outer border
    doc.setDrawColor(41, 98, 255) // indigo
    doc.setLineWidth(3)
    doc.rect(8, 8, w - 16, h - 16)

    // Inner border
    doc.setDrawColor(200, 200, 200)
    doc.setLineWidth(0.5)
    doc.rect(14, 14, w - 28, h - 28)

    // Gold corner decorations
    doc.setDrawColor(218, 165, 32)
    doc.setLineWidth(1.5)
    // Top-left
    doc.line(20, 20, 50, 20)
    doc.line(20, 20, 20, 50)
    // Top-right
    doc.line(w - 50, 20, w - 20, 20)
    doc.line(w - 20, 20, w - 20, 50)
    // Bottom-left
    doc.line(20, h - 20, 50, h - 20)
    doc.line(20, h - 50, 20, h - 20)
    // Bottom-right
    doc.line(w - 50, h - 20, w - 20, h - 20)
    doc.line(w - 20, h - 50, w - 20, h - 20)

    // === Header ===
    doc.setFontSize(14)
    doc.setTextColor(100, 100, 100)
    doc.text('NEMARK EDUCATION', centerX, 38, { align: 'center' })

    doc.setFontSize(32)
    doc.setTextColor(41, 98, 255)
    doc.text('CERTIFICATE', centerX, 55, { align: 'center' })

    doc.setFontSize(14)
    doc.setTextColor(120, 120, 120)
    doc.text('OF COMPLETION', centerX, 64, { align: 'center' })

    // === Divider ===
    doc.setDrawColor(218, 165, 32)
    doc.setLineWidth(0.8)
    doc.line(centerX - 40, 70, centerX + 40, 70)

    // === Body ===
    doc.setFontSize(12)
    doc.setTextColor(100, 100, 100)
    doc.text('This is to certify that', centerX, 84, { align: 'center' })

    // Student name
    doc.setFontSize(28)
    doc.setTextColor(30, 30, 30)
    doc.text(data.studentName, centerX, 100, { align: 'center' })

    // Underline
    const nameWidth = doc.getTextWidth(data.studentName)
    doc.setDrawColor(218, 165, 32)
    doc.setLineWidth(0.5)
    doc.line(centerX - nameWidth / 2 - 5, 103, centerX + nameWidth / 2 + 5, 103)

    doc.setFontSize(12)
    doc.setTextColor(100, 100, 100)
    doc.text('has successfully completed the course', centerX, 114, { align: 'center' })

    // Course name
    doc.setFontSize(18)
    doc.setTextColor(41, 98, 255)
    doc.text(data.courseName, centerX, 128, { align: 'center' })

    // === Footer ===
    const footerY = 155

    // Date
    const issueDate = new Date(data.issuedAt).toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
    doc.setFontSize(10)
    doc.setTextColor(120, 120, 120)
    doc.text('Ngày cấp', centerX - 60, footerY, { align: 'center' })
    doc.setFontSize(11)
    doc.setTextColor(60, 60, 60)
    doc.text(issueDate, centerX - 60, footerY + 7, { align: 'center' })

    // Certificate number
    doc.setFontSize(10)
    doc.setTextColor(120, 120, 120)
    doc.text('Mã chứng chỉ', centerX + 60, footerY, { align: 'center' })
    doc.setFontSize(11)
    doc.setTextColor(60, 60, 60)
    doc.text(data.certificateNumber, centerX + 60, footerY + 7, { align: 'center' })

    // Instructor
    if (data.instructorName) {
        doc.setFontSize(10)
        doc.setTextColor(120, 120, 120)
        doc.text('Giảng viên', centerX, footerY, { align: 'center' })
        doc.setFontSize(11)
        doc.setTextColor(60, 60, 60)
        doc.text(data.instructorName, centerX, footerY + 7, { align: 'center' })
    }

    // Bottom text
    doc.setFontSize(8)
    doc.setTextColor(160, 160, 160)
    doc.text(`Verify at: nemarkdigital.com/verify/${data.certificateNumber}`, centerX, h - 22, { align: 'center' })

    // Return as buffer
    return Buffer.from(doc.output('arraybuffer'))
}
