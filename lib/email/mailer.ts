import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
})

export async function sendPasswordResetEmail(to: string, token: string) {
    const appUrl = process.env.APP_URL || 'http://localhost:3000'
    const resetLink = `${appUrl}/adminduc/reset-password?token=${token}`

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;padding:0;background-color:#f0f4f8;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f4f8;padding:40px 20px;">
            <tr>
                <td align="center">
                    <table width="520" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                        <!-- Header -->
                        <tr>
                            <td style="background:linear-gradient(135deg,#1e3a5f 0%,#2563eb 50%,#06b6d4 100%);padding:36px 40px;text-align:center;">
                                <h1 style="color:#ffffff;font-size:24px;margin:0 0 8px 0;font-weight:700;">🔐 Đặt lại mật khẩu</h1>
                                <p style="color:#bfdbfe;font-size:14px;margin:0;">Nemark Admin Panel</p>
                            </td>
                        </tr>
                        <!-- Body -->
                        <tr>
                            <td style="padding:36px 40px;">
                                <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 20px 0;">
                                    Xin chào,<br><br>
                                    Chúng tôi nhận được yêu cầu đặt lại mật khẩu cho tài khoản admin của bạn. 
                                    Nhấn nút bên dưới để tạo mật khẩu mới:
                                </p>
                                <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td align="center" style="padding:8px 0 24px 0;">
                                            <a href="${resetLink}" 
                                               style="display:inline-block;background:linear-gradient(135deg,#2563eb,#06b6d4);color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:10px;font-size:15px;font-weight:600;letter-spacing:0.5px;">
                                                Đặt lại mật khẩu
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                                <div style="background:#f8fafc;border-radius:10px;padding:16px 20px;border:1px solid #e2e8f0;margin-bottom:20px;">
                                    <p style="color:#64748b;font-size:13px;margin:0 0 4px 0;font-weight:600;">⏰ Lưu ý:</p>
                                    <p style="color:#64748b;font-size:13px;margin:0;line-height:1.5;">
                                        Link này sẽ hết hạn sau <strong>1 giờ</strong>. Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này.
                                    </p>
                                </div>
                                <p style="color:#9ca3af;font-size:12px;margin:0;line-height:1.5;">
                                    Nếu nút không hoạt động, copy link sau vào trình duyệt:<br>
                                    <a href="${resetLink}" style="color:#2563eb;word-break:break-all;font-size:11px;">${resetLink}</a>
                                </p>
                            </td>
                        </tr>
                        <!-- Footer -->
                        <tr>
                            <td style="background:#f8fafc;padding:20px 40px;border-top:1px solid #e2e8f0;text-align:center;">
                                <p style="color:#9ca3af;font-size:12px;margin:0;">
                                    © ${new Date().getFullYear()} Nemark Digital. All rights reserved.
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `

    await transporter.sendMail({
        from: `"Nemark Admin" <${process.env.SMTP_USER}>`,
        to,
        subject: '🔐 Đặt lại mật khẩu - Nemark Admin',
        html: htmlContent,
    })
}
