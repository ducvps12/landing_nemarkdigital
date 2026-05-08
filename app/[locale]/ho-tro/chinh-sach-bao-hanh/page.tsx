'use client'

import PolicyLayout from '@/components/common/policy/PolicyLayout'

const highlights = [
    {
        icon: 'verified_user',
        title: 'Bảo hành 6-12 tháng',
        description: 'Thời gian bảo hành tối thiểu 6 tháng cho mọi sản phẩm thiết kế'
    },
    {
        icon: 'flash_on',
        title: 'Xử lý nhanh 2-4 giờ',
        description: 'Lỗi khẩn cấp được xử lý trong vòng 2-4 giờ làm việc'
    },
    {
        icon: 'support_agent',
        title: 'Hỗ trợ 8h-22h',
        description: 'Đội ngũ kỹ thuật hỗ trợ từ 8h00 đến 22h00 hàng ngày'
    }
]

const processSteps = [
    {
        title: 'Thông báo lỗi',
        description: 'Khách hàng thông báo lỗi qua Zalo OA, email, hoặc hotline'
    },
    {
        title: 'Xác nhận lỗi',
        description: 'Nemark tiếp nhận và xác nhận lỗi trong vòng 2 giờ (giờ hành chính)'
    },
    {
        title: 'Đánh giá & phân loại',
        description: 'Đánh giá mức độ (Khẩn cấp / Cao / Trung bình / Thấp) và phân loại lỗi'
    },
    {
        title: 'Khắc phục lỗi',
        description: 'Thực hiện khắc phục theo cam kết thời gian tương ứng mức độ'
    },
    {
        title: 'Xác nhận hoàn tất',
        description: 'Thông báo kết quả và xác nhận hoàn tất bảo hành với khách hàng'
    }
]

export default function WarrantyPolicyPage() {
    return (
        <PolicyLayout
            title="Chính Sách Bảo Hành & Bảo Trì"
            subtitle="Cam kết bảo hành sản phẩm toàn diện và dịch vụ bảo trì website, ứng dụng chuyên nghiệp"
            icon="verified_user"
            lastUpdated="01/03/2026"
            highlights={highlights}
            processSteps={processSteps}
        >
            <h2>1. Phạm vi bảo hành</h2>
            <p>Nemark cung cấp chế độ bảo hành cho tất cả các sản phẩm và dịch vụ đã triển khai, bao gồm:</p>

            <h3>a) Được bảo hành</h3>
            <ul>
                <li>Lỗi kỹ thuật do Nemark phát triển (bug code, lỗi chức năng)</li>
                <li>Lỗi hiển thị, tương thích trình duyệt/thiết bị theo phạm vi cam kết ban đầu</li>
                <li>Sự cố hosting, server do Nemark quản lý</li>
                <li>Các tính năng không hoạt động đúng theo mô tả trong hợp đồng</li>
                <li>Cập nhật bản vá bảo mật cho mã nguồn do Nemark phát triển</li>
            </ul>

            <h3>b) Không thuộc phạm vi bảo hành</h3>
            <ul>
                <li>Lỗi do khách hàng tự sửa đổi source code mà không thông qua Nemark</li>
                <li>Lỗi do cài đặt plugin/extension/phần mềm bên thứ ba trái phép</li>
                <li>Thiệt hại do virus, mã độc, tấn công DDoS (nếu không sử dụng gói bảo mật của Nemark)</li>
                <li>Các thay đổi mới ngoài phạm vi hợp đồng ban đầu</li>
                <li>Lỗi do nhà cung cấp dịch vụ bên thứ ba (API thanh toán, email, SMS...)</li>
            </ul>

            <h2>2. Thời gian bảo hành</h2>
            <table>
                <thead>
                    <tr>
                        <th>Dịch vụ</th>
                        <th>Thời gian bảo hành</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Thiết kế Website</td>
                        <td>6 - 12 tháng</td>
                        <td>Tùy gói dịch vụ, tối thiểu 6 tháng</td>
                    </tr>
                    <tr>
                        <td>Thiết kế App Mobile</td>
                        <td>6 - 12 tháng</td>
                        <td>Bao gồm fix bug và cập nhật OS mới</td>
                    </tr>
                    <tr>
                        <td>Hệ thống quản lý (CRM/ERP)</td>
                        <td>12 tháng</td>
                        <td>Bao gồm hỗ trợ vận hành</td>
                    </tr>
                    <tr>
                        <td>SEO & Marketing</td>
                        <td>Theo hợp đồng</td>
                        <td>Bảo hành kết quả theo KPI cam kết</td>
                    </tr>
                    <tr>
                        <td>Domain & Hosting & VPS</td>
                        <td>Theo chu kỳ đăng ký</td>
                        <td>Hỗ trợ kỹ thuật trong suốt thời gian sử dụng</td>
                    </tr>
                </tbody>
            </table>

            <h2>3. Thời gian xử lý</h2>
            <table>
                <thead>
                    <tr>
                        <th>Mức độ</th>
                        <th>Mô tả</th>
                        <th>Thời gian xử lý</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="font-semibold text-red-600">Khẩn cấp</td>
                        <td>Website/App không hoạt động, mất dữ liệu</td>
                        <td>2 - 4 giờ</td>
                    </tr>
                    <tr>
                        <td className="font-semibold text-orange-600">Cao</td>
                        <td>Chức năng chính bị lỗi, ảnh hưởng kinh doanh</td>
                        <td>4 - 24 giờ</td>
                    </tr>
                    <tr>
                        <td className="font-semibold text-yellow-600">Trung bình</td>
                        <td>Lỗi hiển thị, chức năng phụ bị ảnh hưởng</td>
                        <td>1 - 3 ngày làm việc</td>
                    </tr>
                    <tr>
                        <td className="font-semibold text-green-600">Thấp</td>
                        <td>Lỗi nhỏ, không ảnh hưởng vận hành</td>
                        <td>3 - 7 ngày làm việc</td>
                    </tr>
                </tbody>
            </table>

            <h2>4. Dịch vụ bảo trì sau bảo hành</h2>
            <p>Sau khi hết thời gian bảo hành, Nemark cung cấp các gói bảo trì định kỳ:</p>
            <ul>
                <li><strong>Gói Cơ bản:</strong> Kiểm tra & fix lỗi định kỳ, backup dữ liệu, cập nhật bảo mật</li>
                <li><strong>Gói Nâng cao:</strong> Bao gồm gói Cơ bản + tối ưu tốc độ, hỗ trợ thay đổi nội dung nhỏ</li>
                <li><strong>Gói Toàn diện:</strong> Bao gồm gói Nâng cao + giám sát 24/7, phát triển tính năng mới nhỏ</li>
            </ul>

            <h2>5. Liên hệ bảo hành</h2>
            <ul>
                <li><strong>Email:</strong> support@nemarkdigital.com</li>
                <li><strong>Hotline:</strong> 0914 659 183 (8h00 - 22h00 hàng ngày)</li>
                <li><strong>Zalo OA:</strong> Nemark Digital Solutions</li>
            </ul>
        </PolicyLayout>
    )
}
