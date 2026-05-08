'use client'

import PolicyLayout from '@/components/common/policy/PolicyLayout'

const highlights = [
    {
        icon: 'account_balance',
        title: 'Chuyển khoản ngân hàng',
        description: 'Internet Banking, Mobile Banking hoặc chuyển khoản tại quầy giao dịch'
    },
    {
        icon: 'account_balance_wallet',
        title: 'Ví điện tử',
        description: 'Thanh toán nhanh qua MoMo, ZaloPay, VNPay bằng mã QR'
    },
    {
        icon: 'public',
        title: 'Thanh toán quốc tế',
        description: 'Hỗ trợ PayPal, Wise, Payoneer cho khách hàng quốc tế'
    }
]

const processSteps = [
    {
        title: 'Gửi yêu cầu hoàn tiền',
        description: 'Khách hàng gửi yêu cầu qua email support@nemarkdigital.com hoặc hotline 0914 659 183'
    },
    {
        title: 'Xác nhận & đánh giá',
        description: 'Nemark xác nhận và đánh giá yêu cầu trong vòng 2 ngày làm việc'
    },
    {
        title: 'Thông báo kết quả',
        description: 'Thông báo kết quả và mức hoàn tiền (nếu đủ điều kiện)'
    },
    {
        title: 'Thực hiện hoàn tiền',
        description: 'Hoàn tiền trong vòng 7-14 ngày làm việc qua chuyển khoản ngân hàng'
    }
]

export default function PaymentPolicyPage() {
    return (
        <PolicyLayout
            title="Chính Sách Thanh Toán & Hoàn Tiền"
            subtitle="Quy định rõ ràng về phương thức thanh toán, điều kiện và quy trình hoàn tiền minh bạch"
            icon="payments"
            lastUpdated="01/03/2026"
            highlights={highlights}
            processSteps={processSteps}
        >
            <h2>1. Phương thức thanh toán</h2>
            <p>Nemark hỗ trợ các phương thức thanh toán sau:</p>

            <h3>a) Chuyển khoản ngân hàng</h3>
            <ul>
                <li>Chuyển khoản qua Internet Banking, Mobile Banking, hoặc tại quầy giao dịch</li>
                <li>Thông tin tài khoản sẽ được cung cấp trong hợp đồng/báo giá</li>
                <li>Nội dung chuyển khoản ghi rõ: <strong>[Tên khách hàng] - [Mã hợp đồng]</strong></li>
            </ul>

            <h3>b) Ví điện tử</h3>
            <ul>
                <li>MoMo, ZaloPay, VNPay</li>
                <li>Quét mã QR hoặc chuyển khoản theo hướng dẫn</li>
            </ul>

            <h3>c) Thanh toán quốc tế</h3>
            <ul>
                <li>PayPal (cho khách hàng quốc tế)</li>
                <li>Wise / Payoneer (theo thỏa thuận)</li>
            </ul>

            <h2>2. Quy định thanh toán theo loại dịch vụ</h2>
            <table>
                <thead>
                    <tr>
                        <th>Loại dịch vụ</th>
                        <th>Đặt cọc</th>
                        <th>Thanh toán cuối</th>
                        <th>Ghi chú</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Thiết kế Website</td>
                        <td>50%</td>
                        <td>50% khi bàn giao</td>
                        <td>Có thể chia 3 đợt cho dự án lớn</td>
                    </tr>
                    <tr>
                        <td>Thiết kế App</td>
                        <td>40%</td>
                        <td>30% + 30%</td>
                        <td>Theo milestone dự án</td>
                    </tr>
                    <tr>
                        <td>SEO & Marketing</td>
                        <td>100%</td>
                        <td>Thanh toán theo tháng</td>
                        <td>Thanh toán đầu mỗi tháng</td>
                    </tr>
                    <tr>
                        <td>Domain, Hosting, VPS</td>
                        <td>100%</td>
                        <td>—</td>
                        <td>Thanh toán trước khi kích hoạt</td>
                    </tr>
                    <tr>
                        <td>Bảo trì & Nâng cấp</td>
                        <td>50-100%</td>
                        <td>Theo thỏa thuận</td>
                        <td>Tùy quy mô công việc</td>
                    </tr>
                </tbody>
            </table>

            <h2>3. Chính sách hoàn tiền</h2>

            <h3>a) Điều kiện được hoàn tiền</h3>
            <ul>
                <li>Nemark không thể cung cấp dịch vụ đã cam kết trong hợp đồng</li>
                <li>Chất lượng dịch vụ không đạt yêu cầu đã thỏa thuận sau 2 lần chỉnh sửa</li>
                <li>Khách hàng hủy dịch vụ <strong>trong vòng 3 ngày</strong> kể từ ngày ký hợp đồng và Nemark <strong>chưa triển khai</strong> công việc</li>
                <li>Lỗi kỹ thuật từ phía Nemark gây gián đoạn dịch vụ nghiêm trọng</li>
            </ul>

            <h3>b) Trường hợp không hoàn tiền</h3>
            <ul>
                <li>Khách hàng tự ý hủy dịch vụ khi Nemark đã triển khai công việc</li>
                <li>Phí domain, hosting, VPS đã kích hoạt (do đây là dịch vụ của bên thứ ba)</li>
                <li>Khách hàng thay đổi yêu cầu vượt quá phạm vi hợp đồng ban đầu</li>
                <li>Nghiệp vụ SEO, marketing đã triển khai (do tính chất dịch vụ liên tục)</li>
            </ul>

            <h3>c) Mức hoàn tiền</h3>
            <table>
                <thead>
                    <tr>
                        <th>Thời điểm</th>
                        <th>Mức hoàn</th>
                        <th>Ghi chú</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Trong 3 ngày, chưa triển khai</td>
                        <td>100%</td>
                        <td>Trừ phí giao dịch (nếu có)</td>
                    </tr>
                    <tr>
                        <td>Đã triển khai dưới 30%</td>
                        <td>70%</td>
                        <td>Trừ chi phí đã phát sinh</td>
                    </tr>
                    <tr>
                        <td>Đã triển khai 30-60%</td>
                        <td>40%</td>
                        <td>Theo đánh giá tiến độ</td>
                    </tr>
                    <tr>
                        <td>Đã triển khai trên 60%</td>
                        <td>Không hoàn</td>
                        <td>Bàn giao phần đã hoàn thành</td>
                    </tr>
                </tbody>
            </table>

            <h2>4. Liên hệ hỗ trợ</h2>
            <p>Mọi thắc mắc về thanh toán và hoàn tiền, vui lòng liên hệ:</p>
            <ul>
                <li><strong>Email:</strong> support@nemarkdigital.com</li>
                <li><strong>Hotline:</strong> 0914 659 183</li>
                <li><strong>Zalo OA:</strong> Nemark Digital Solutions</li>
            </ul>
        </PolicyLayout>
    )
}
