'use client'

import PolicyLayout from '@/components/common/policy/PolicyLayout'

const highlights = [
    {
        icon: 'engineering',
        title: '6 Bước Chuyên Nghiệp',
        description: 'Quy trình bàn giao được chuẩn hóa với 6 bước đảm bảo chất lượng tối ưu'
    },
    {
        icon: 'task_alt',
        title: 'Nghiệm Thu Đạt Chuẩn',
        description: '100% tính năng được kiểm thử trên đa thiết bị và trình duyệt trước bàn giao'
    },
    {
        icon: 'school',
        title: 'Đào Tạo Sử Dụng',
        description: 'Hướng dẫn trực tiếp + video hướng dẫn + hỗ trợ 30 ngày đầu sau bàn giao'
    }
]

const processSteps = [
    {
        title: 'Hoàn thiện sản phẩm',
        description: 'Đội ngũ phát triển hoàn thiện tính năng, kiểm thử nội bộ (QA) trên nhiều thiết bị'
    },
    {
        title: 'Demo sản phẩm',
        description: 'Tổ chức buổi demo cho khách hàng (online hoặc trực tiếp), ghi nhận phản hồi'
    },
    {
        title: 'Chỉnh sửa theo phản hồi',
        description: 'Thực hiện chỉnh sửa (tối đa 2 lượt), thời gian 1-5 ngày tùy quy mô'
    },
    {
        title: 'Nghiệm thu & ký biên bản',
        description: 'Khách hàng kiểm tra lại, xác nhận đạt yêu cầu và ký biên bản nghiệm thu'
    },
    {
        title: 'Bàn giao tài liệu & tài khoản',
        description: 'Bàn giao tài khoản quản trị, mã nguồn, tài liệu hướng dẫn, biên bản bàn giao'
    },
    {
        title: 'Đào tạo sử dụng',
        description: 'Hướng dẫn trực tiếp, cung cấp video, hỗ trợ kỹ thuật 30 ngày đầu'
    }
]

export default function DeliveryProcessPage() {
    return (
        <PolicyLayout
            title="Quy Trình Bàn Giao Sản Phẩm"
            subtitle="Quy trình nghiệm thu và bàn giao sản phẩm 6 bước chuyên nghiệp, minh bạch và đảm bảo chất lượng"
            icon="assignment_turned_in"
            lastUpdated="01/03/2026"
            highlights={highlights}
            processSteps={processSteps}
        >
            <h2>1. Tổng quan quy trình</h2>
            <p>
                Nemark áp dụng quy trình bàn giao sản phẩm 6 bước chuyên nghiệp, đảm bảo chất lượng sản phẩm đạt yêu cầu
                và khách hàng hoàn toàn hài lòng trước khi tiếp nhận chính thức.
            </p>

            <h2>2. Tiêu chí nghiệm thu</h2>
            <table>
                <thead>
                    <tr>
                        <th>Tiêu chí</th>
                        <th>Yêu cầu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Đầy đủ tính năng</td>
                        <td>100% tính năng theo hợp đồng/báo giá hoạt động đúng</td>
                    </tr>
                    <tr>
                        <td>Giao diện</td>
                        <td>Đúng thiết kế đã duyệt, responsive trên mobile/tablet/desktop</td>
                    </tr>
                    <tr>
                        <td>Tốc độ</td>
                        <td>Thời gian tải trang dưới 3 giây (điều kiện mạng bình thường)</td>
                    </tr>
                    <tr>
                        <td>Bảo mật</td>
                        <td>SSL đã cài đặt, không có lỗ hổng cơ bản</td>
                    </tr>
                    <tr>
                        <td>SEO cơ bản</td>
                        <td>Meta tags, sitemap, robots.txt đã cấu hình</td>
                    </tr>
                    <tr>
                        <td>Tương thích</td>
                        <td>Hoạt động tốt trên Chrome, Firefox, Safari, Edge</td>
                    </tr>
                </tbody>
            </table>

            <h2>3. Tài liệu bàn giao</h2>
            <p>Nemark bàn giao đầy đủ các tài liệu sau:</p>
            <ul>
                <li><strong>Tài khoản quản trị:</strong> Admin website/app, hosting, domain, email</li>
                <li><strong>Mã nguồn:</strong> Source code (nếu có trong hợp đồng), file thiết kế gốc</li>
                <li><strong>Tài liệu hướng dẫn:</strong> Hướng dẫn sử dụng, quản trị website/app</li>
                <li><strong>Biên bản bàn giao:</strong> Danh mục tài sản kỹ thuật số đã bàn giao</li>
                <li><strong>Thông tin bảo hành:</strong> Phạm vi, thời gian, kênh hỗ trợ bảo hành</li>
            </ul>

            <h2>4. Thời gian bàn giao</h2>
            <ul>
                <li>Thời gian bàn giao cụ thể được ghi rõ trong hợp đồng</li>
                <li>Trong trường hợp chậm tiến độ do Nemark, khách hàng sẽ được bồi thường theo thỏa thuận</li>
                <li>Trường hợp chậm do khách hàng (cung cấp nội dung, phản hồi muộn), thời gian sẽ được điều chỉnh tương ứng</li>
            </ul>

            <h2>5. Liên hệ</h2>
            <ul>
                <li><strong>Email:</strong> support@nemarkdigital.com</li>
                <li><strong>Hotline:</strong> 0914 659 183</li>
                <li><strong>Zalo OA:</strong> Nemark Digital Solutions</li>
            </ul>
        </PolicyLayout>
    )
}
