'use client'

import PolicyLayout from '@/components/common/policy/PolicyLayout'

const highlights = [
    {
        icon: 'https',
        title: 'Mã hóa SSL/TLS',
        description: 'Toàn bộ dữ liệu được mã hóa an toàn trên mọi kênh truyền tải'
    },
    {
        icon: 'local_fire_department',
        title: 'Tường lửa & IDS/IPS',
        description: 'Hệ thống phát hiện và ngăn chặn xâm nhập tiên tiến'
    },
    {
        icon: 'backup',
        title: 'Sao lưu định kỳ',
        description: 'Dữ liệu được backup tự động trên máy chủ an toàn'
    }
]

const processSteps = [
    {
        title: 'Quyền truy cập',
        description: 'Yêu cầu xem lại thông tin cá nhân mà Nemark đang lưu trữ'
    },
    {
        title: 'Quyền chỉnh sửa',
        description: 'Yêu cầu cập nhật, chỉnh sửa thông tin không chính xác'
    },
    {
        title: 'Quyền xóa',
        description: 'Yêu cầu xóa thông tin cá nhân (trừ trường hợp pháp luật yêu cầu lưu giữ)'
    },
    {
        title: 'Quyền từ chối',
        description: 'Từ chối nhận thông tin quảng cáo, marketing'
    },
    {
        title: 'Quyền khiếu nại',
        description: 'Khiếu nại về việc xử lý thông tin cá nhân của bạn'
    }
]

export default function PrivacyPolicyPage() {
    return (
        <PolicyLayout
            title="Chính Sách Bảo Mật Thông Tin"
            subtitle="Cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của khách hàng theo tiêu chuẩn an ninh mạng quốc tế"
            icon="security"
            lastUpdated="01/03/2026"
            highlights={highlights}
            processSteps={processSteps}
        >
            <h2>1. Mục đích thu thập thông tin cá nhân</h2>
            <p>
                CÔNG TY TNHH TRUYỀN THÔNG GIẢI PHÁP SỐ NEMARK (sau đây gọi là <strong>&quot;Nemark&quot;</strong> hoặc <strong>&quot;Chúng tôi&quot;</strong>)
                cam kết bảo vệ quyền riêng tư của Quý khách hàng. Chúng tôi thu thập thông tin cá nhân của Quý khách nhằm các mục đích sau:
            </p>
            <ul>
                <li>Xử lý đơn hàng, yêu cầu tư vấn và cung cấp dịch vụ thiết kế Website, App, SEO, hạ tầng công nghệ</li>
                <li>Liên hệ tư vấn, hỗ trợ kỹ thuật và chăm sóc khách hàng</li>
                <li>Gửi thông báo về dịch vụ, cập nhật tính năng, chương trình ưu đãi (khi được sự đồng ý)</li>
                <li>Nâng cao chất lượng dịch vụ và trải nghiệm người dùng</li>
                <li>Thực hiện các nghĩa vụ pháp lý theo quy định của pháp luật Việt Nam</li>
            </ul>

            <h2>2. Phạm vi thu thập thông tin</h2>
            <p>Chúng tôi có thể thu thập các thông tin sau khi Quý khách sử dụng dịch vụ hoặc truy cập website:</p>
            <ul>
                <li><strong>Thông tin cá nhân:</strong> Họ tên, số điện thoại, địa chỉ email, địa chỉ liên hệ</li>
                <li><strong>Thông tin doanh nghiệp:</strong> Tên công ty, mã số thuế, lĩnh vực kinh doanh (nếu có)</li>
                <li><strong>Thông tin giao dịch:</strong> Lịch sử đặt hàng, thanh toán, yêu cầu dịch vụ</li>
                <li><strong>Thông tin kỹ thuật:</strong> Địa chỉ IP, loại trình duyệt, thiết bị truy cập, thời gian truy cập</li>
                <li><strong>Thông tin khác:</strong> Nội dung tin nhắn, phản hồi, đánh giá dịch vụ</li>
            </ul>

            <h2>3. Thời gian lưu trữ thông tin</h2>
            <p>
                Thông tin cá nhân của Quý khách được lưu trữ trong hệ thống bảo mật của Nemark cho đến khi:
            </p>
            <ul>
                <li>Quý khách yêu cầu hủy bỏ hoặc tự đăng nhập và thực hiện xóa thông tin</li>
                <li>Hết thời hạn hợp đồng dịch vụ và không có gia hạn</li>
                <li>Thời gian lưu trữ tối thiểu theo quy định pháp luật (thông thường là 3 năm kể từ giao dịch cuối cùng)</li>
            </ul>

            <h2>4. Phương thức bảo vệ thông tin</h2>
            <p>Nemark áp dụng các biện pháp bảo mật sau để bảo vệ thông tin của Quý khách:</p>
            <ul>
                <li>Mã hóa SSL/TLS cho tất cả dữ liệu truyền tải trên website</li>
                <li>Hệ thống tường lửa (Firewall) và phát hiện xâm nhập (IDS/IPS)</li>
                <li>Phân quyền truy cập dữ liệu theo nguyên tắc &quot;cần biết&quot; (need-to-know)</li>
                <li>Sao lưu dữ liệu định kỳ và lưu trữ trên hệ thống máy chủ an toàn</li>
                <li>Đào tạo nhân viên về bảo mật thông tin và quy trình xử lý dữ liệu</li>
                <li>Kiểm tra và cập nhật hệ thống bảo mật định kỳ</li>
            </ul>

            <h2>5. Cam kết không chia sẻ thông tin</h2>
            <p>Nemark cam kết <strong>không bán, trao đổi hoặc chia sẻ</strong> thông tin cá nhân của Quý khách cho bên thứ ba, ngoại trừ các trường hợp:</p>
            <ul>
                <li>Được sự đồng ý rõ ràng của Quý khách</li>
                <li>Chia sẻ với đối tác cung cấp dịch vụ trực tiếp (hosting, domain, thanh toán) để hoàn thành đơn hàng</li>
                <li>Theo yêu cầu của cơ quan nhà nước có thẩm quyền theo quy định pháp luật</li>
                <li>Bảo vệ quyền lợi hợp pháp của Nemark trong trường hợp tranh chấp</li>
            </ul>

            <h2>6. Sử dụng Cookie</h2>
            <p>
                Website của Nemark sử dụng cookie để nâng cao trải nghiệm người dùng. Cookie giúp chúng tôi:
            </p>
            <ul>
                <li>Ghi nhớ thông tin đăng nhập và tùy chọn cá nhân</li>
                <li>Phân tích lưu lượng truy cập và hành vi người dùng</li>
                <li>Tối ưu hóa nội dung và dịch vụ</li>
            </ul>
            <p>Quý khách có thể cấu hình trình duyệt để từ chối cookie, tuy nhiên điều này có thể ảnh hưởng đến trải nghiệm sử dụng website.</p>

            <h2>7. Thông tin liên hệ</h2>
            <p>
                Mọi thắc mắc hoặc yêu cầu liên quan đến chính sách bảo mật, vui lòng liên hệ:
            </p>
            <ul>
                <li><strong>Email:</strong> support@nemarkdigital.com</li>
                <li><strong>Hotline:</strong> 0914 659 183</li>
                <li><strong>Địa chỉ:</strong> Số nhà 19, Đường 452, Thôn Linh Sơn, Xã Hạ Bằng, Thành phố Hà Nội, Việt Nam</li>
            </ul>

            <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-sm text-slate-600 italic">
                    <strong>Lưu ý:</strong> Chính sách bảo mật này có thể được cập nhật theo thời gian. Mọi thay đổi sẽ được thông báo trên website.
                    Việc tiếp tục sử dụng dịch vụ sau ngày cập nhật đồng nghĩa với việc Quý khách đồng ý với các thay đổi.
                </p>
            </div>
        </PolicyLayout>
    )
}
