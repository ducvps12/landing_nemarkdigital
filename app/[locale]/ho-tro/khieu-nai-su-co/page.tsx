'use client'

import PolicyLayout from '@/components/common/policy/PolicyLayout'

const highlights = [
    {
        icon: 'confirmation_number',
        title: 'Hệ thống Ticket',
        description: 'Mỗi khiếu nại được cấp mã ticket theo dõi xuyên suốt quá trình xử lý'
    },
    {
        icon: 'timer',
        title: 'Phản hồi 30 phút',
        description: 'Sự cố khẩn cấp được phản hồi trong 30 phút, xử lý trong 2-4 giờ'
    },
    {
        icon: 'lock',
        title: 'Bảo mật khiếu nại',
        description: 'Thông tin khiếu nại được bảo mật tuyệt đối, xử lý công bằng minh bạch'
    }
]

const processSteps = [
    { title: 'Tiếp nhận (Trong 2 giờ)', description: 'Xác nhận đã nhận khiếu nại và cấp mã ticket theo dõi' },
    { title: 'Đánh giá (1-2 ngày)', description: 'Phân loại mức độ, xác minh thông tin và giao cho bộ phận phụ trách' },
    { title: 'Xử lý', description: 'Thực hiện biện pháp khắc phục theo cam kết thời gian xử lý' },
    { title: 'Thông báo kết quả', description: 'Liên hệ khách hàng thông báo kết quả xử lý và giải pháp' },
    { title: 'Xác nhận hoàn tất', description: 'Khách hàng xác nhận hài lòng. Nếu chưa, tiếp tục hoặc chuyển cấp quản lý' }
]

export default function ComplaintsPage() {
    return (
        <PolicyLayout
            title="Quy Định Khiếu Nại & Xử Lý Sự Cố"
            subtitle="Kênh tiếp nhận đa dạng, quy trình xử lý chuyên nghiệp và cam kết thời gian minh bạch"
            icon="support_agent"
            lastUpdated="01/03/2026"
            highlights={highlights}
            processSteps={processSteps}
        >
            <h2>1. Kênh tiếp nhận khiếu nại</h2>
            <p>Quý khách có thể gửi khiếu nại qua các kênh sau:</p>
            <table>
                <thead><tr><th>Kênh</th><th>Thông tin</th><th>Thời gian</th></tr></thead>
                <tbody>
                    <tr><td><strong>Hotline</strong></td><td>0914 659 183</td><td>8h00 - 22h00</td></tr>
                    <tr><td><strong>Email</strong></td><td>support@nemarkdigital.com</td><td>24/7</td></tr>
                    <tr><td><strong>Zalo OA</strong></td><td>Nemark Digital Solutions</td><td>8h00 - 22h00</td></tr>
                    <tr><td><strong>Trực tiếp</strong></td><td>Số 19, Đường 452, Hạ Bằng, Hà Nội</td><td>8h00 - 17h30</td></tr>
                </tbody>
            </table>

            <h2>2. Thông tin cần cung cấp</h2>
            <ul>
                <li>Họ tên, số điện thoại, email</li>
                <li>Mã hợp đồng / mã đơn hàng (nếu có)</li>
                <li>Mô tả chi tiết vấn đề</li>
                <li>Hình ảnh, video minh chứng (nếu có)</li>
                <li>Thời gian phát sinh sự cố</li>
                <li>Yêu cầu xử lý mong muốn</li>
            </ul>

            <h2>3. Phân loại khiếu nại</h2>
            <table>
                <thead><tr><th>Loại</th><th>Mô tả</th><th>Ví dụ</th></tr></thead>
                <tbody>
                    <tr><td className="font-semibold">Sự cố kỹ thuật</td><td>Website/App bị lỗi</td><td>Trang web không truy cập được</td></tr>
                    <tr><td className="font-semibold">Chất lượng</td><td>Sản phẩm không đạt yêu cầu</td><td>Giao diện khác thiết kế duyệt</td></tr>
                    <tr><td className="font-semibold">Tiến độ</td><td>Chậm tiến độ so với cam kết</td><td>Quá hạn bàn giao</td></tr>
                    <tr><td className="font-semibold">Thanh toán</td><td>Vấn đề phí dịch vụ</td><td>Tính phí sai, yêu cầu hoàn tiền</td></tr>
                    <tr><td className="font-semibold">Thái độ</td><td>Nhân viên không đạt chuẩn</td><td>Phản hồi chậm</td></tr>
                </tbody>
            </table>

            <h2>4. Thời gian xử lý cam kết</h2>
            <table>
                <thead><tr><th>Mức độ</th><th>Phản hồi</th><th>Xử lý</th></tr></thead>
                <tbody>
                    <tr><td className="font-semibold text-red-600">Khẩn cấp</td><td>30 phút</td><td>2-4 giờ</td></tr>
                    <tr><td className="font-semibold text-orange-600">Cao</td><td>2 giờ</td><td>24 giờ</td></tr>
                    <tr><td className="font-semibold text-yellow-600">Trung bình</td><td>4 giờ</td><td>3 ngày</td></tr>
                    <tr><td className="font-semibold text-green-600">Thông thường</td><td>24 giờ</td><td>5-7 ngày</td></tr>
                </tbody>
            </table>

            <h2>5. Quyền lợi & cam kết</h2>
            <ul>
                <li>Xử lý khiếu nại công bằng, minh bạch</li>
                <li>Cập nhật tiến độ trong suốt quá trình</li>
                <li>Bồi thường thiệt hại nếu lỗi thuộc Nemark</li>
                <li>Chuyển cấp quản lý nếu chưa hài lòng</li>
                <li>Tuân thủ quy định bảo vệ người tiêu dùng</li>
            </ul>
        </PolicyLayout>
    )
}
