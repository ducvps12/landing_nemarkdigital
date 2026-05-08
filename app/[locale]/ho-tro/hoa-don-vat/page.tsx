'use client'

import PolicyLayout from '@/components/common/policy/PolicyLayout'

const highlights = [
    {
        icon: 'description',
        title: 'Hóa đơn điện tử',
        description: 'Hóa đơn GTGT điện tử có mã CQT theo quy định pháp luật Việt Nam'
    },
    {
        icon: 'schedule',
        title: 'Xử lý 1-3 ngày',
        description: 'Hóa đơn được xuất trong 1-3 ngày làm việc sau khi nhận đủ thông tin'
    },
    {
        icon: 'percent',
        title: 'Thuế GTGT 8%',
        description: 'Áp dụng thuế suất theo quy định hiện hành cho dịch vụ CNTT'
    }
]

const processSteps = [
    { title: 'Gửi thông tin', description: 'Khách hàng gửi thông tin xuất hóa đơn qua email với tiêu đề "YC xuất HĐ VAT"' },
    { title: 'Xác nhận thông tin', description: 'Bộ phận kế toán xác nhận thông tin trong vòng 1 ngày làm việc' },
    { title: 'Xuất hóa đơn', description: 'Xuất hóa đơn điện tử trên hệ thống có mã CQT' },
    { title: 'Gửi hóa đơn', description: 'Gửi hóa đơn điện tử qua email đã đăng ký' }
]

export default function VATInvoicePage() {
    return (
        <PolicyLayout
            title="Hướng Dẫn Xuất Hóa Đơn VAT"
            subtitle="Thông tin đầy đủ về quy trình, thời gian và thuế suất áp dụng cho hóa đơn giá trị gia tăng"
            icon="receipt_long"
            lastUpdated="01/03/2026"
            highlights={highlights}
            processSteps={processSteps}
        >
            <h2>1. Thông tin chung</h2>
            <p>
                Nemark cung cấp hóa đơn GTGT (VAT) điện tử theo quy định của pháp luật Việt Nam
                cho tất cả các giao dịch dịch vụ. Hóa đơn được xuất qua hệ thống hóa đơn điện tử
                có mã của cơ quan thuế.
            </p>

            <h2>2. Thông tin cần cung cấp</h2>
            <p>Để xuất hóa đơn VAT, Quý khách vui lòng cung cấp đầy đủ các thông tin sau:</p>
            <table>
                <thead><tr><th>Thông tin</th><th>Yêu cầu</th><th>Ví dụ</th></tr></thead>
                <tbody>
                    <tr><td><strong>Tên công ty</strong></td><td>Đúng theo ĐKKD</td><td>CÔNG TY TNHH ABC</td></tr>
                    <tr><td><strong>Mã số thuế</strong></td><td>MST đang hoạt động</td><td>0123456789</td></tr>
                    <tr><td><strong>Địa chỉ</strong></td><td>Đúng theo ĐKKD</td><td>123 Đường ABC, TP HCM</td></tr>
                    <tr><td><strong>Email nhận HĐ</strong></td><td>Email chính thức</td><td>ketoan@congtyabc.com</td></tr>
                    <tr><td><strong>Tên người mua</strong></td><td>Người đại diện</td><td>Nguyễn Văn A</td></tr>
                </tbody>
            </table>

            <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-sm text-amber-800">
                    <strong>⚠️ Lưu ý:</strong> Thông tin phải chính xác theo đăng ký kinh doanh.
                    Nemark không chịu trách nhiệm nếu thông tin sai dẫn đến hóa đơn không hợp lệ.
                </p>
            </div>

            <h2>3. Thời điểm xuất hóa đơn</h2>
            <ul>
                <li><strong>Dịch vụ một lần:</strong> Xuất khi hoàn tất thanh toán và bàn giao</li>
                <li><strong>Dịch vụ định kỳ:</strong> Xuất vào đầu mỗi chu kỳ thanh toán</li>
                <li><strong>Domain:</strong> Xuất khi đăng ký/gia hạn thành công</li>
                <li><strong>Thanh toán trước:</strong> Có thể xuất 1 hóa đơn tổng hoặc chia theo tháng</li>
            </ul>

            <h2>4. Thời gian xử lý</h2>
            <table>
                <thead><tr><th>Trường hợp</th><th>Thời gian</th></tr></thead>
                <tbody>
                    <tr><td>Yêu cầu khi thanh toán</td><td>1-3 ngày làm việc</td></tr>
                    <tr><td>Yêu cầu bổ sung sau</td><td>3-5 ngày làm việc</td></tr>
                    <tr><td>HĐ điều chỉnh/thay thế</td><td>5-7 ngày làm việc</td></tr>
                </tbody>
            </table>

            <h2>5. Thuế suất áp dụng</h2>
            <ul>
                <li><strong>Dịch vụ CNTT:</strong> Thuế GTGT 8%</li>
                <li><strong>Tên miền:</strong> Thuế GTGT 10%</li>
                <li><strong>Hosting, VPS:</strong> Thuế GTGT 8%</li>
            </ul>

            <h2>6. Liên hệ kế toán</h2>
            <ul>
                <li><strong>Email:</strong> support@nemarkdigital.com</li>
                <li><strong>Hotline:</strong> 0914 659 183</li>
                <li>Tiêu đề email: <strong>&quot;YC xuất HĐ VAT - [Tên công ty]&quot;</strong></li>
            </ul>
        </PolicyLayout>
    )
}
