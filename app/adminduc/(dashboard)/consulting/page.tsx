'use client'

import { useState } from 'react'

// ====================== DATA ======================

const invoiceTemplates = [
    {
        category: '🖥️ VPS / Hosting',
        risk: 'low',
        items: [
            { product: 'VPS Windows/Linux', price: 'Theo gói', template: 'Dịch vụ cho thuê và quản trị máy chủ ảo (VPS)', detail: 'Gói: [tên gói, VD: VPS Windows 4GB RAM]\nThời hạn: [1 tháng / 3 tháng / 1 năm]\nBao gồm: Cài đặt hệ điều hành, cấu hình ban đầu' },
            { product: 'VPS + Cài đặt phần mềm', price: 'Theo gói', template: 'Dịch vụ cho thuê máy chủ ảo và hỗ trợ cài đặt cấu hình phần mềm', detail: 'VPS: [thông số]\nHỗ trợ: Cài đặt IIS, Deploy website, cấu hình SSL' },
        ]
    },
    {
        category: '🔑 Tài Khoản Premium',
        risk: 'medium',
        items: [
            { product: 'Gemini Ultra', price: '440.000đ', template: 'Dịch vụ hỗ trợ kích hoạt & cấu hình phần mềm AI Gemini Ultra', detail: 'Bao gồm: Kích hoạt tài khoản, cấu hình, hướng dẫn sử dụng' },
            { product: 'YouTube Premium', price: 'Theo gói', template: 'Dịch vụ hỗ trợ kích hoạt & cấu hình YouTube Premium', detail: 'Bao gồm: Kích hoạt, cấu hình trên thiết bị, HDSD' },
            { product: 'ChatGPT Plus', price: 'Theo gói', template: 'Dịch vụ hỗ trợ kích hoạt & cấu hình phần mềm AI ChatGPT Plus', detail: '' },
            { product: 'Canva Pro', price: 'Theo gói', template: 'Dịch vụ hỗ trợ kích hoạt & cấu hình phần mềm thiết kế Canva Pro', detail: '' },
            { product: 'Netflix', price: 'Theo gói', template: 'Dịch vụ hỗ trợ kích hoạt & cấu hình dịch vụ giải trí trực tuyến Netflix', detail: '' },
        ]
    },
    {
        category: '🌐 Mã Nguồn Website',
        risk: 'medium',
        items: [
            { product: 'Cài đặt website', price: 'Theo gói', template: 'Dịch vụ cài đặt và tùy chỉnh phần mềm quản lý website', detail: 'Nội dung: Cài đặt mã nguồn [tên], tùy chỉnh giao diện\nBao gồm: Deploy lên VPS/hosting, hỗ trợ kỹ thuật 30 ngày' },
            { product: 'Website trọn gói + VPS', price: 'Theo gói', template: 'Dịch vụ triển khai giải pháp website trọn gói', detail: 'VPS: [thông số]\nPhần mềm: Cài đặt & tùy chỉnh mã nguồn website\nHỗ trợ: Cấu hình domain, SSL, hướng dẫn quản trị' },
        ]
    },
    {
        category: '🔒 Proxy',
        risk: 'low',
        items: [
            { product: 'Proxy/VPN', price: 'Theo gói', template: 'Dịch vụ cung cấp giải pháp proxy/bảo mật mạng', detail: 'Gói: [tên gói]\nThời hạn: [x tháng]\nSố lượng: [x IP]' },
        ]
    },
    {
        category: '🎨 Thiết Kế Website',
        risk: 'low',
        items: [
            { product: 'Thiết kế website', price: 'Theo dự án', template: 'Dịch vụ thiết kế và phát triển website theo yêu cầu', detail: 'Loại: [Landing page / TMĐT / Giới thiệu]\nBao gồm: Thiết kế giao diện, lập trình, deploy, bàn giao' },
        ]
    },
]

const roadmap = [
    {
        phase: '🔴 Sống Sót — Tháng 3/2026 (ĐANG Ở ĐÂY)',
        color: 'border-red-500 bg-red-50',
        headerColor: 'text-red-700',
        items: [
            { task: 'Chuyển TOÀN BỘ giao dịch sang STK Nemark (Techcombank)', status: 'urgent', deadline: '10/03/2026', note: 'Thông tư 25/2025 CẤM STK cá nhân từ 01/03/2026. Mọi doanh thu PHẢI qua TK DN' },
            { task: 'Nội dung CK khách hàng: "Thanh toán DV [mã HĐ]" — không ghi "mua TK"', status: 'urgent', deadline: '10/03/2026', note: 'Ngân hàng lưu log CK → cơ quan thuế tra được' },
            { task: 'Lập biên bản kiểm kê 220tr thiết bị (100tr bàn ghế + 120tr PC)', status: 'urgent', deadline: '15/03/2026', note: 'Ghi nhận TSCĐ → khấu hao ~5tr/tháng → tiết kiệm ~1tr thuế TNDN/tháng' },
            { task: 'Đổi HĐ internet + điện sang tên NEMARK + MST', status: 'urgent', deadline: '15/03/2026', note: 'Miễn phí, 30 phút, tiết kiệm thuế ngay' },
            { task: 'Lập HĐLĐ cho Huy, Diễm, Huyền (tối thiểu)', status: 'urgent', deadline: '31/03/2026', note: 'Chỉ 3 người nhưng VẪN bắt buộc có HĐLĐ. Không HĐLĐ → GĐ chịu trách nhiệm cá nhân' },
            { task: 'Gỡ game NRO/NSO/clone khỏi huymetv.com + tách brand Nemark', status: 'urgent', deadline: '15/03/2026', note: 'Luật SHTT sửa đổi hiệu lực 04/2026. Rủi ro hình sự nếu còn bán' },
            { task: 'Tập trung dòng tiền: Ưu tiên dịch vụ margin cao (thiết kế web, VPS resell)', status: 'urgent', deadline: 'Liên tục', note: 'Mục tiêu: Trả 120tr nợ. Không chi bất kỳ khoản nào không có HĐ' },
        ]
    },
    {
        phase: '🟠 Ổn Định — Tháng 4-6/2026',
        color: 'border-orange-500 bg-orange-50',
        headerColor: 'text-orange-700',
        items: [
            { task: 'Kê khai thuế Q1/2026 (GTGT + TNCN)', status: 'high', deadline: '30/04/2026', note: 'Hạn cuối kê khai thuế quý 1. Chuẩn bị chứng từ đầy đủ' },
            { task: 'Đăng ký BHXH cho 3 nhân sự (Huy, Diễm, Huyền) + GĐ', status: 'high', deadline: '30/04/2026', note: '4 người × ~2.5tr/tháng/người (phần DN). GĐ ~1.85tr/tháng riêng' },
            { task: 'Nếu Tuấn đầu tư: Lập HĐ HỢP TÁC KINH DOANH rõ ràng', status: 'high', deadline: 'Khi xác nhận', note: '⚠️ KHÔNG góp miệng. Cần: Biên bản góp vốn, % sở hữu, quyền/nghĩa vụ, điều khoản thoát' },
            { task: 'Đăng ký Bộ Công Thương cho nemarkdigital.com + huymetv.com', status: 'high', deadline: '30/04/2026', note: 'Website TMĐT bắt buộc đăng ký BCT' },
            { task: 'Giải quyết MST chủ nhà thuê VP 10tr/tháng', status: 'medium', deadline: '30/06/2026', note: '120tr/năm tiền thuê không trừ được TNDN → thiệt 24tr/năm. Thuyết phục hoặc đổi VP' },
            { task: 'Trả dần nợ 120tr — mục tiêu giảm xuống 60tr', status: 'high', deadline: '30/06/2026', note: 'Mục tiêu trả 20tr/tháng × 3 tháng. Cắt mọi chi phí không cần thiết' },
        ]
    },
    {
        phase: '🟢 Phục Hồi & Phát Triển — Q3-Q4/2026',
        color: 'border-emerald-500 bg-emerald-50',
        headerColor: 'text-emerald-700',
        items: [
            { task: 'Trả hết nợ 120tr', status: 'growth', deadline: 'Q3/2026', note: 'Mục tiêu: Debt-free trước Q4 để có vốn đầu tư phát triển' },
            { task: 'Ra mắt dòng "Đào tạo Vibe Coding" (nếu có vốn từ Tuấn)', status: 'growth', deadline: 'Q3/2026', note: 'Mã ngành 8560, margin cao, thay thế game clone. Chi phí thấp (GĐ dạy trực tiếp)' },
            { task: 'Phát triển dịch vụ IT Outsourcing — nhận thêm dự án web/app', status: 'growth', deadline: 'Q3/2026', note: 'Tận dụng năng lực hiện có. 1 dự án web 10-30tr = doanh thu sạch, HĐ sạch' },
            { task: 'Tuyển thêm 1-2 dev nếu doanh thu ổn định', status: 'growth', deadline: 'Q4/2026', note: 'Chỉ tuyển khi đã trả hết nợ + có doanh thu ổn 3 tháng liên tiếp' },
            { task: 'Chuyển đổi bán TK → Reseller/Affiliate chính thức (Google, Microsoft)', status: 'growth', deadline: 'Q4/2026', note: 'Hợp pháp hóa dòng doanh thu hiện tại' },
        ]
    },
]

const inputInvoiceGuide = [
    {
        category: '🖥️ VPS / Hosting / Domain',
        status: 'fixable',
        problem: 'Mua VPS nước ngoài (DigitalOcean, Vultr, Contabo) hoặc nhỏ lẻ → không có HĐ VAT đầu vào',
        solutions: [
            { action: 'Từ giờ: Mua VPS qua nhà cung cấp VN có xuất HĐ VAT', providers: 'MatBao, PA Vietnam, Viettel IDC, VNPT Cloud, VNG Cloud, Long Vân', priority: 'high' },
            { action: 'VPS nước ngoài (DigitalOcean, Vultr…): Lập bảng kê chi phí + sao kê thẻ/PayPal', providers: 'Không khấu trừ VAT nhưng ĐƯỢC tính chi phí hợp lý trừ TNDN', priority: 'medium' },
            { action: 'Domain: Mua qua đại lý VN (MatBao, Nhân Hòa, VinaHost) → có HĐ VAT', providers: '', priority: 'high' },
        ]
    },
    {
        category: '💻 Máy tính / Thiết bị văn phòng',
        status: 'partial',
        problem: 'Mua PC, bàn ghế, màn hình nhỏ lẻ từ cá nhân/shop nhỏ → không có hóa đơn',
        solutions: [
            { action: 'Dưới 200.000đ/lần: Lập PHIẾU CHI nội bộ (tự ký) → hợp lệ, không cần HĐ', providers: 'Theo Thông tư 78/2014/TT-BTC, chi dưới 200k chỉ cần chứng từ thanh toán', priority: 'medium' },
            { action: 'Từ 200.000đ trở lên: Lập Bảng kê mua hàng (Mẫu 01/TNDN) có chữ ký người bán', providers: 'Cần: Tên, CMND/CCCD, địa chỉ người bán + mô tả hàng hóa + số tiền', priority: 'high' },
            { action: 'Từ giờ: Mua thiết bị ở nơi CÓ HĐ (Phong Vũ, TGDĐ, CellphoneS, Hòa Phát)', providers: 'Yêu cầu xuất HĐ VAT ghi tên NEMARK + MST khi mua', priority: 'high' },
            { action: 'Thiết bị đã mua: Lập BIÊN BẢN KIỂM KÊ tài sản → ghi nhận TSCĐ → khấu hao dần', providers: 'Đối với tài sản >5tr, thời gian KH: Máy tính 3 năm, Bàn ghế 5 năm', priority: 'high' },
        ]
    },
    {
        category: '🏠 Mặt bằng / Thuê văn phòng',
        status: 'critical',
        problem: 'Chủ nhà không có MST → 120tr/năm (10tr/tháng) KHÔNG được khấu trừ thuế TNDN',
        solutions: [
            { action: 'Thuyết phục chủ nhà đăng ký MST cá nhân (nộp thuế 5% cho thuê nhà)', providers: 'Chủ nhà chỉ cần ra chi cục thuế quận, mang CCCD + hợp đồng thuê', priority: 'high' },
            { action: 'Hoặc: Đề nghị chủ nhà ủy quyền cho Nemark kê khai & nộp thuế thay', providers: 'Nemark nộp 5% thuế GTGT + 5% thuế TNCN hộ chủ nhà → Được trừ chi phí', priority: 'high' },
            { action: 'Nếu chủ nhà không hợp tác: Tìm mặt bằng mới CÓ HĐ', providers: 'Ưu tiên thuê từ doanh nghiệp hoặc cá nhân có MST', priority: 'medium' },
        ]
    },
    {
        category: '⚡ Điện / Nước / Internet',
        status: 'fixable',
        problem: 'HĐ điện/nước/internet đứng tên cá nhân → không được trừ chi phí',
        solutions: [
            { action: 'Gọi nhà mạng (FPT/Viettel/VNPT) → đổi tên HĐ internet sang NEMARK + MST', providers: 'Gọi tổng đài hoặc ra cửa hàng, mang ĐKKD + CCCD + HĐ thuê', priority: 'high' },
            { action: 'Ra Điện lực quận → đổi tên HĐ điện sang NEMARK + MST', providers: 'Mang: ĐKKD, CCCD GĐ, HĐ thuê nhà, đơn xin đổi tên', priority: 'high' },
            { action: 'HĐ nước: Liên hệ công ty cấp nước quận → đổi tên tương tự', providers: '', priority: 'medium' },
        ]
    },
    {
        category: '🌐 Phần mềm / SaaS nước ngoài',
        status: 'fixable',
        problem: 'Mua license, Gemini, ChatGPT, Canva… từ nước ngoài → không có HĐ VN',
        solutions: [
            { action: 'Lưu TẤT CẢ email receipts/invoices từ Google, OpenAI, Adobe…', providers: 'Download PDF receipt → lưu vào thư mục "Chứng từ đầu vào" theo tháng', priority: 'high' },
            { action: 'Lập bảng kê chi phí + sao kê ngân hàng/thẻ VISA đối chiếu', providers: 'Được tính chi phí hợp lý (trừ TNDN), KHÔNG được khấu trừ VAT đầu vào', priority: 'medium' },
            { action: 'Nếu có đại lý VN: Mua qua đại lý → có HĐ VAT VN', providers: 'VD: Google Workspace mua qua SaoBắcĐẩu, CMC; Microsoft qua FPT IS', priority: 'medium' },
        ]
    },
]

const immediateActions = [
    { task: 'Gọi FPT/Viettel → đổi HĐ internet sang tên NEMARK + MST', deadline: 'Tuần này', difficulty: 'Dễ' },
    { task: 'Ra Điện lực quận → đổi HĐ điện sang tên NEMARK + MST', deadline: 'Tuần này', difficulty: 'Dễ' },
    { task: 'Lập biên bản kiểm kê: liệt kê toàn bộ PC, bàn, ghế, thiết bị hiện có', deadline: 'Trước 15/03', difficulty: 'Trung bình' },
    { task: 'Tạo thư mục "Chứng từ đầu vào" trên Drive, chia theo tháng', deadline: 'Hôm nay', difficulty: 'Dễ' },
    { task: 'Lấy sao kê STK Nemark (Techcombank) từ đầu năm 2026', deadline: 'Tuần này', difficulty: 'Dễ' },
    { task: 'Lập bảng kê mua hàng (Mẫu 01/TNDN) cho thiết bị đã mua ≥200k', deadline: 'Trước 15/03', difficulty: 'Trung bình' },
    { task: 'Nói chuyện với chủ nhà về MST → nếu không hợp tác, tính phương án B', deadline: 'Trước 31/03', difficulty: 'Khó' },
    { task: 'Mua VPS tiếp theo → chọn MatBao/PA/Viettel IDC có HĐ VAT', deadline: 'Khi cần mua', difficulty: 'Dễ' },
]

const keyPrinciples = [
    { icon: '🏦', title: 'STK Công ty = Bắt buộc', desc: 'Mọi giao dịch kinh doanh PHẢI qua Techcombank Nemark. Vi phạm: Phạt 1-3x thuế trốn.' },
    { icon: '📝', title: 'Bán DV, không bán SP', desc: 'Luôn ghi HĐ là "Dịch vụ hỗ trợ/cài đặt/cấu hình" — KHÔNG ghi "bán tài khoản/mã nguồn".' },
    { icon: '📄', title: 'HĐ + Biên bản = An toàn', desc: 'Mỗi hóa đơn nên có biên bản nghiệm thu hoặc xác nhận hoàn thành đi kèm.' },
    { icon: '🚫', title: 'Nemark ≠ Hoạt động rủi ro', desc: 'KHÔNG gắn brand Nemark lên website bán game clone, tài khoản chợ đen.' },
    { icon: '💼', title: 'HĐLĐ + BHXH = Bắt buộc', desc: '3 nhân sự còn lại VẪN phải có HĐLĐ + BHXH. GĐ đóng BHXH ~1.85tr/tháng.' },
    { icon: '🎓', title: 'Đào tạo = Tương lai', desc: 'Vibe Coding, lập trình game → mã ngành 8560, hợp pháp, margin cao, thay thế game clone.' },
    { icon: '🧾', title: 'HĐ đầu vào = Tiết kiệm thuế', desc: 'Không HĐ đầu vào → không trừ chi phí → đóng thuế TNDN 20% trên doanh thu thay vì lợi nhuận.' },
    { icon: '📂', title: 'Lưu trữ chứng từ = Sống sót', desc: 'Mọi receipt, sao kê, phiếu chi phải lưu trữ ≥10 năm. Tạo Drive/folder theo tháng.' },
    { icon: '🤝', title: 'Đầu tư = Văn bản', desc: 'Mọi thỏa thuận góp vốn PHẢI có hợp đồng bằng văn bản, công chứng nếu cần.' },
]

const revenueServices = [
    {
        name: 'Thiết kế Website',
        icon: '🎨',
        monthlyTarget: '30-50tr',
        margin: 85,
        effort: 'Cao (2-4 tuần/dự án)',
        risk: 'low',
        description: 'Dự án 10-50tr, hóa đơn sạch, tận dụng AI (Cursor/Gemini) giảm thời gian 70%',
        actions: ['Lên bảng giá chuẩn trên nemarkdigital.com', 'Nhận 1-2 dự án/tháng là đủ sống', 'Xuất HĐ VAT đàng hoàng'],
        code: '6201',
    },
    {
        name: 'VPS Resell + Cài đặt',
        icon: '🖥️',
        monthlyTarget: '15-25tr',
        margin: 40,
        effort: 'Thấp (tự động hóa được)',
        risk: 'low',
        description: '1 VPS margin ~50-100k/tháng. 50-100 khách = 5-10tr passive. Cài đặt thêm +100-300k/lần',
        actions: ['Chuyển mua VPS từ nhà cung cấp có HĐ (MatBao, PA)', 'Up-sell dịch vụ cài đặt kèm VPS', 'Tạo gói VPS + Bảo trì hàng tháng'],
        code: '6311',
    },
    {
        name: 'Hỗ trợ kích hoạt TK Premium',
        icon: '🔑',
        monthlyTarget: '10-15tr',
        margin: 60,
        effort: 'Thấp (5-15 phút/đơn)',
        risk: 'medium',
        description: 'Gemini 440k, ChatGPT 350k, YouTube 150k. Nhanh, nhiều đơn. Rủi ro ToS nhưng xuất HĐ được',
        actions: ['Xuất HĐ: "DV hỗ trợ kích hoạt & cấu hình"', 'Chuyển dần sang Reseller chính thức', 'Tích lũy KH ổn định, gia hạn hàng tháng'],
        code: '6201',
    },
    {
        name: 'Đào tạo Vibe Coding',
        icon: '🎓',
        monthlyTarget: '10-30tr',
        margin: 95,
        effort: 'Trung bình (chuẩn bị tài liệu)',
        risk: 'low',
        description: 'MARGIN CAO NHẤT. Dạy 1-1 hoặc nhóm. 2-5tr/học viên/khóa. GĐ dạy trực tiếp, chi phí gần 0',
        actions: ['Tạo landing page khóa học trên nemarkdigital.com', 'Quảng cáo trên TikTok/YouTube (nội dung miễn phí)', 'Bắt đầu với 3-5 học viên đầu tiên'],
        code: '8560',
    },
    {
        name: 'Bảo trì Website',
        icon: '🛠️',
        monthlyTarget: '5-15tr',
        margin: 90,
        effort: 'Thấp (1-2h/KH/tháng)',
        risk: 'low',
        description: 'Thu phí 500k-2tr/tháng/website. Passive income, KH cũ từ dự án thiết kế web',
        actions: ['Chào gói bảo trì cho KH cũ', 'Gói: Cơ bản 500k, Nâng cao 1.5tr, VIP 3tr', 'Cài monitoring tự động, giảm công'],
        code: '6201',
    },
    {
        name: 'Proxy / VPN',
        icon: '🔒',
        monthlyTarget: '3-5tr',
        margin: 50,
        effort: 'Thấp',
        risk: 'low',
        description: 'Margin thấp nhưng ổn định, recurring revenue',
        actions: ['Tự động hóa provisioning', 'Bán kèm VPS làm add-on'],
        code: '6312',
    },
]

const partnershipModels = [
    {
        type: 'Góp vốn cổ phần (Khuyến nghị)',
        icon: '🎯',
        pros: ['Tuấn có quyền lợi rõ ràng', 'Hợp pháp, đăng ký thay đổi SLV tại Sở KHĐT', 'Giảm gánh nặng tài chính cho GĐ Đức'],
        cons: ['Mất một phần quyền điều hành', 'Cần họa lại điều lệ công ty', 'Phức tạp hơn về giấy tờ'],
        howTo: 'Tuấn góp tiền vào vốn điều lệ công ty → Đăng ký thay đổi SLV tại Sở KHĐT → Có % sở hữu chính thức',
        docs: ['Biên bản góp vốn', 'Hợp đồng góp vốn', 'Đăng ký thay đổi SLV', 'Điều lệ công ty mới'],
    },
    {
        type: 'Hợp đồng Hợp tác Kinh doanh (BCC)',
        icon: '📝',
        pros: ['Nhanh, không cần đăng ký SLV', 'Linh hoạt, dễ giải thể', 'GĐ giữ nguyên quyền điều hành'],
        cons: ['Tuấn không có quyền sở hữu công ty', 'Kém mạnh về mặt pháp lý', 'Cần cam kết rõ ràng để tránh tranh chấp'],
        howTo: 'Ký HĐ hợp tác kinh doanh giữa cá nhân Tuấn & Công ty Nemark → Ghi rõ số tiền góp, % chia lợi nhuận, thời hạn, điều khoản thoát',
        docs: ['Hợp đồng BCC', 'Biên bản nhận tiền', 'Báo cáo tài chính định kỳ'],
    },
    {
        type: 'Cho vay (Nếu Tuấn không muốn góp vốn)',
        icon: '💰',
        pros: ['GĐ giữ 100% quyền', 'Đơn giản nhất', 'Tuấn hưởng lãi cố định'],
        cons: ['Phải trả lãi dù lãi hay lỗ', 'Thêm gánh nặng nợ', 'Tuấn có thể đòi bất cứ lúc nào'],
        howTo: 'Ký hợp đồng vay vốn giữa Tuấn (cá nhân) & Nemark (công ty) → Lãi suất thỏa thuận, kỳ trả',
        docs: ['Hợp đồng vay vốn', 'Phiếu nhận tiền', 'Lịch trả nợ'],
    },
]

const partnershipRedFlags = [
    'Tuấn yêu cầu quyền điều hành 100% nhưng chỉ góp <50% vốn',
    'Không chịu ký HĐ bằng văn bản (“tin nhau”, “làm đi rồi tính”)',
    'Muốn rút vốn bất cứ lúc nào không cần báo trước',
    'Yêu cầu chia lợi nhuận hàng tuần/ngày thay vì hàng quý',
    'Đưa tiền mặt không qua ngân hàng, không biên nhận',
    'Không đồng ý công khai sổ sách tài chính',
    'Muốn đưa người vào quản lý mà không qua GĐ Đức',
]

// ====================== COMPONENT ======================

export default function ConsultingPage() {
    const [copiedId, setCopiedId] = useState<string | null>(null)
    const [activeTab, setActiveTab] = useState<'invoice' | 'input' | 'revenue' | 'partner' | 'roadmap' | 'principles'>('invoice')

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text)
        setCopiedId(id)
        setTimeout(() => setCopiedId(null), 2000)
    }

    const riskBadge = (risk: string) => {
        if (risk === 'low') return <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">🟢 An toàn</span>
        if (risk === 'medium') return <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 font-medium">🟡 Cần lưu ý</span>
        return <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-medium">🔴 Nguy hiểm</span>
    }

    const statusBadge = (status: string) => {
        const map: Record<string, { color: string, label: string }> = {
            urgent: { color: 'bg-red-500 text-white', label: '⚡ Khẩn cấp' },
            high: { color: 'bg-orange-500 text-white', label: '📌 Ưu tiên cao' },
            medium: { color: 'bg-yellow-400 text-yellow-900', label: '📋 Trung bình' },
            growth: { color: 'bg-emerald-500 text-white', label: '🌱 Phát triển' },
        }
        const s = map[status] || map.medium
        return <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.color}`}>{s.label}</span>
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
                <div className="relative">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">📋</span>
                        <h1 className="text-3xl font-bold">Tài Liệu Giám Đốc</h1>
                    </div>
                    <p className="text-slate-300">Chế độ vận hành tinh gọn — GĐ Đức + Huy, Diễm, Huyền — NEMARK DIGITAL SOLUTIONS</p>
                    <p className="text-xs text-slate-400 mt-2">Cập nhật: 03/03/2026 | Nợ: 120tr | Thiết bị: 220tr (chưa HĐ) | Nhà đầu tư tiềm năng: Tuấn</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-1.5 flex gap-1 flex-wrap">
                {([
                    { id: 'invoice', label: '🧾 HĐ Đầu Ra', desc: 'Template xuất HĐ' },
                    { id: 'input', label: '📥 HĐ Đầu Vào', desc: 'Cứu vãn chi phí' },
                    { id: 'revenue', label: '💰 Doanh Thu', desc: 'Phân tích margin' },
                    { id: 'partner', label: '🤝 Đầu Tư & Góp Vốn', desc: 'HĐ với Tuấn' },
                    { id: 'roadmap', label: '🗺️ Lộ Trình', desc: 'Roadmap 2026' },
                    { id: 'principles', label: '⚖️ Nguyên Tắc', desc: '9 quy tắc' },
                ] as const).map(tab => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id
                            ? 'bg-slate-900 text-white shadow-lg'
                            : 'text-slate-600 hover:bg-slate-100'
                            }`}>
                        <span className="block">{tab.label}</span>
                        <span className={`block text-xs mt-0.5 ${activeTab === tab.id ? 'text-slate-300' : 'text-slate-400'}`}>{tab.desc}</span>
                    </button>
                ))}
            </div>

            {/* =================== TAB 1: INVOICE TEMPLATES =================== */}
            {activeTab === 'invoice' && (
                <div className="space-y-6">
                    {/* Quick Warning */}
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                        <p className="font-semibold text-amber-800">💡 Nguyên tắc xuất hóa đơn</p>
                        <p className="text-sm text-amber-700 mt-1">Luôn ghi là <strong>&quot;Dịch vụ hỗ trợ/cài đặt/cấu hình&quot;</strong> — KHÔNG BAO GIỜ ghi &quot;bán tài khoản&quot; hoặc &quot;bán mã nguồn&quot;. Nội dung CK khách hàng: &quot;Thanh toán DV [mã HĐ]&quot;.</p>
                    </div>

                    {invoiceTemplates.map((cat, ci) => (
                        <div key={ci} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                                <h2 className="font-semibold text-slate-900 text-lg">{cat.category}</h2>
                                {riskBadge(cat.risk)}
                            </div>
                            <div className="divide-y divide-slate-100">
                                {cat.items.map((item, ii) => {
                                    const id = `${ci}-${ii}`
                                    return (
                                        <div key={ii} className="p-5 hover:bg-blue-50/30 transition-colors">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="font-medium text-slate-900">{item.product}</span>
                                                        <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{item.price}</span>
                                                    </div>
                                                    {/* Template - copyable */}
                                                    <div className="bg-slate-900 text-green-400 p-3 rounded-lg font-mono text-sm mb-2 relative group">
                                                        <p>{item.template}</p>
                                                        <button
                                                            onClick={() => copyToClipboard(item.template, `tmpl-${id}`)}
                                                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-slate-700 hover:bg-slate-600 text-white px-2 py-1 rounded text-xs transition-all"
                                                        >
                                                            {copiedId === `tmpl-${id}` ? '✅ Đã copy!' : '📋 Copy'}
                                                        </button>
                                                    </div>
                                                    {item.detail && (
                                                        <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded-lg whitespace-pre-line relative group">
                                                            {item.detail}
                                                            <button
                                                                onClick={() => copyToClipboard(`${item.template}\n${item.detail}`, `full-${id}`)}
                                                                className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 bg-slate-200 hover:bg-slate-300 text-slate-700 px-2 py-0.5 rounded text-xs transition-all"
                                                            >
                                                                {copiedId === `full-${id}` ? '✅' : 'Copy đầy đủ'}
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}

                    {/* Game Warning */}
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                            <span className="text-3xl">⛔</span>
                            <div>
                                <h3 className="font-bold text-red-800 text-lg">Mã nguồn game NRO / NSO / Clone</h3>
                                <p className="text-red-700 mt-2 font-medium">KHÔNG CÓ CÁCH NÀO xuất hóa đơn hợp lệ cho dòng này.</p>
                                <p className="text-sm text-red-600 mt-1">Dù mô tả kiểu gì, bản chất sản phẩm vi phạm SHTT. Cơ quan thuế truy ngược: HĐ → website → mã nguồn game clone → hình sự.</p>
                                <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                                    <p className="font-semibold text-emerald-800">💡 Thay thế bằng:</p>
                                    <div className="bg-slate-900 text-green-400 p-2 rounded font-mono text-sm mt-2 relative group">
                                        <p>Dịch vụ đào tạo & huấn luyện lập trình game mobile (Unity/Cocos2d)</p>
                                        <button
                                            onClick={() => copyToClipboard('Dịch vụ đào tạo & huấn luyện lập trình game mobile (Unity/Cocos2d)', 'game-alt')}
                                            className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 bg-slate-700 text-white px-2 py-0.5 rounded text-xs"
                                        >
                                            {copiedId === 'game-alt' ? '✅' : '📋 Copy'}
                                        </button>
                                    </div>
                                    <p className="text-xs text-emerald-600 mt-1">Mã ngành 8560 — Hợp pháp, đúng ĐKKD, margin cao hơn bán mã nguồn</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* =================== TAB 2: INPUT INVOICES =================== */}
            {activeTab === 'input' && (
                <div className="space-y-6">
                    {/* Explainer */}
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                        <p className="font-semibold text-red-800">⚠️ Vấn đề: Không có Hóa đơn Đầu vào</p>
                        <p className="text-sm text-red-700 mt-1">Không HĐ đầu vào → không khấu trừ VAT 10% → không trừ chi phí hợp lý khi tính thuế TNDN 20%.<br /><strong>Kết quả: Đóng thuế trên DOANH THU thay vì LỢI NHUẬN.</strong> VD: Chi 10tr/tháng thuê VPS mà không có HĐ → mất 2tr tiền thuế/tháng.</p>
                    </div>

                    {/* Recovery guide by category */}
                    {inputInvoiceGuide.map((cat, ci) => (
                        <div key={ci} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                                <h2 className="font-semibold text-slate-900 text-lg">{cat.category}</h2>
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cat.status === 'fixable' ? 'bg-green-100 text-green-700' :
                                    cat.status === 'partial' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-red-100 text-red-700'
                                    }`}>
                                    {cat.status === 'fixable' ? '🟢 Sửa được' : cat.status === 'partial' ? '🟡 Cứu 1 phần' : '🔴 Cần xử lý gấp'}
                                </span>
                            </div>
                            <div className="p-5">
                                <div className="bg-red-50 px-3 py-2 rounded-lg mb-4">
                                    <p className="text-sm text-red-700"><strong>Vấn đề:</strong> {cat.problem}</p>
                                </div>
                                <div className="space-y-3">
                                    {cat.solutions.map((sol, si) => (
                                        <div key={si} className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50/50 transition-colors">
                                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 mt-0.5 ${sol.priority === 'high' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                {sol.priority === 'high' ? '⚡ Ưu tiên' : '📋 Khuyến nghị'}
                                            </span>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-slate-900">{sol.action}</p>
                                                {sol.providers && <p className="text-xs text-slate-500 mt-1">{sol.providers}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Immediate Actions Checklist */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                            <h2 className="text-lg font-bold">✅ Checklist Hành Động Ngay</h2>
                            <p className="text-sm text-blue-100 mt-1">Làm ngay trong tuần này để cứu vãn chi phí đầu vào</p>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {immediateActions.map((item, i) => (
                                <div key={i} className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-3 flex-1">
                                        <span className="text-lg">☐</span>
                                        <p className="text-sm text-slate-900">{item.task}</p>
                                    </div>
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        <span className={`text-xs px-2 py-0.5 rounded font-medium ${item.difficulty === 'Dễ' ? 'bg-green-100 text-green-700' :
                                            item.difficulty === 'Trung bình' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-red-100 text-red-700'
                                            }`}>{item.difficulty}</span>
                                        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">📅 {item.deadline}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick math */}
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                        <h3 className="font-bold text-emerald-800 text-lg mb-3">💰 Tính nhanh: Tiết kiệm bao nhiêu nếu có HĐ đầu vào?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white rounded-lg p-4 text-center">
                                <p className="text-xs text-slate-500">VPS + Hosting (10tr/tháng)</p>
                                <p className="text-xl font-bold text-emerald-600 mt-1">Tiết kiệm 2tr/tháng</p>
                                <p className="text-xs text-slate-400">VAT 1tr + TNDN 1tr</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 text-center">
                                <p className="text-xs text-slate-500">Thuê nhà (10tr/tháng)</p>
                                <p className="text-xl font-bold text-emerald-600 mt-1">Tiết kiệm 2tr/tháng</p>
                                <p className="text-xs text-slate-400">Nếu chủ nhà có MST</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 text-center">
                                <p className="text-xs text-slate-500">Thiết bị + Phần mềm (5tr/tháng)</p>
                                <p className="text-xl font-bold text-emerald-600 mt-1">Tiết kiệm 1tr/tháng</p>
                                <p className="text-xs text-slate-400">Tổng ~60tr/năm!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* =================== TAB 3: REVENUE STRATEGY =================== */}
            {activeTab === 'revenue' && (
                <div className="space-y-6">
                    {/* Summary */}
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-white">
                        <h2 className="text-xl font-bold mb-2">💰 Phân Tích Doanh Thu — Chế Độ 4 Người</h2>
                        <p className="text-emerald-100 text-sm">Tập trung vào dịch vụ margin cao, effort thấp. Mục tiêu: 50-80tr/tháng để trả nợ + sống.</p>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="bg-white/10 rounded-lg p-3 text-center">
                                <p className="text-2xl font-bold">120tr</p>
                                <p className="text-xs text-emerald-200">Nợ cần trả</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-center">
                                <p className="text-2xl font-bold">~20tr</p>
                                <p className="text-xs text-emerald-200">Chi phí cố định/tháng</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-center">
                                <p className="text-2xl font-bold">50-80tr</p>
                                <p className="text-xs text-emerald-200">Mục tiêu DT/tháng</p>
                            </div>
                        </div>
                    </div>

                    {/* Cost breakdown */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <h3 className="font-semibold text-slate-900 mb-3">📊 Chi phí cố định hàng tháng (ước tính)</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                                { label: 'Thuê VP', amount: '10tr', note: 'Chưa trừ TNDN được' },
                                { label: 'Lương 3 NS', amount: '~5-8tr', note: 'Huy, Diễm, Huyền' },
                                { label: 'VPS/Hosting', amount: '~3-5tr', note: 'Chi phí hạ tầng' },
                                { label: 'Điện/Net/Khác', amount: '~2-3tr', note: 'Tiện ích VP' },
                            ].map((c, i) => (
                                <div key={i} className="bg-slate-50 rounded-lg p-3">
                                    <p className="text-xs text-slate-500">{c.label}</p>
                                    <p className="font-bold text-slate-900">{c.amount}</p>
                                    <p className="text-[10px] text-slate-400">{c.note}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-slate-500 mt-3">→ Cần tối thiểu <strong className="text-red-600">25-30tr/tháng</strong> để hòa vốn. Phần dư = trả nợ 120tr.</p>
                    </div>

                    {/* Service cards */}
                    {revenueServices.map((svc, si) => (
                        <div key={si} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{svc.icon}</span>
                                        <div>
                                            <h3 className="font-semibold text-slate-900">{svc.name}</h3>
                                            <p className="text-xs text-slate-500">Mã ngành: {svc.code}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-emerald-600">{svc.monthlyTarget}</p>
                                        <p className="text-xs text-slate-400">mục tiêu/tháng</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <p className="text-sm text-slate-700 mb-3">{svc.description}</p>
                                {/* Margin bar */}
                                <div className="mb-3">
                                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                                        <span>Margin</span>
                                        <span className="font-bold">{svc.margin}%</span>
                                    </div>
                                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full transition-all ${svc.margin >= 80 ? 'bg-emerald-500' : svc.margin >= 50 ? 'bg-yellow-500' : 'bg-orange-500'}`} style={{ width: `${svc.margin}%` }} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                    <span>⏱️ Effort: {svc.effort}</span>
                                    <span className={`px-2 py-0.5 rounded-full ${svc.risk === 'low' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                        {svc.risk === 'low' ? '🟢 An toàn' : '🟡 Cần lưu ý'}
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    {svc.actions.map((a, ai) => (
                                        <p key={ai} className="text-sm text-slate-600 flex items-start gap-2">
                                            <span className="text-emerald-500 flex-shrink-0">→</span> {a}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Revenue formula */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h3 className="font-bold text-blue-800 text-lg mb-3">🎯 Công thức sống sót</h3>
                        <div className="bg-white rounded-lg p-4 font-mono text-sm text-center">
                            <p><span className="text-emerald-600 font-bold">1 dự án web (20-30tr)</span> + <span className="text-blue-600 font-bold">VPS recurring (10-15tr)</span> + <span className="text-purple-600 font-bold">TK Premium (10-15tr)</span></p>
                            <p className="text-xl font-bold mt-2">= 40-60tr/tháng</p>
                            <p className="text-slate-500 text-xs mt-1">- 25tr chi phí = <span className="text-emerald-600 font-bold">15-35tr dư → trả nợ</span></p>
                        </div>
                        <p className="text-sm text-blue-600 mt-3"><strong>Bonus:</strong> Thêm 1 khóa Vibe Coding (10-30tr) = debt-free trong 4-5 tháng!</p>
                    </div>
                </div>
            )}

            {/* =================== TAB 4: PARTNERSHIP GUIDE =================== */}
            {activeTab === 'partner' && (
                <div className="space-y-6">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-6 text-white">
                        <h2 className="text-xl font-bold mb-2">🤝 Hướng Dẫn Hợp Tác Đầu Tư — Tuấn</h2>
                        <p className="text-amber-100 text-sm">3 mô hình hợp tác, so sánh ưu/nhược, giấy tờ cần thiết, và red flags cần tránh</p>
                    </div>

                    {/* Critical warning */}
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                        <p className="font-bold text-red-800">⚠️ NGUYÊN TẮC SỐ 1: KHÔNG GÓP MIỆNG</p>
                        <p className="text-sm text-red-700 mt-1">Mọi thỏa thuận PHẢI có hợp đồng bằng văn bản. Góp vốn bằng lời nói = không có giá trị pháp lý khi tranh chấp. Tiền PHẢI chuyển khoản qua ngân hàng, KHÔNG nhận tiền mặt.</p>
                    </div>

                    {/* Debt transparency */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800">📋 Trước khi nói chuyện với Tuấn — Chuẩn bị</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                            <div className="bg-white rounded-lg p-4">
                                <p className="font-semibold text-slate-800 mb-2">✅ PHẢI minh bạch</p>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Nợ hiện tại: 120tr</li>
                                    <li>• Tài sản: 220tr thiết bị (chưa HĐ)</li>
                                    <li>• Doanh thu trung bình/tháng: [cần tính]</li>
                                    <li>• Chi phí cố định/tháng: ~25tr</li>
                                    <li>• Đội ngũ hiện tại: 4 người</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                                <p className="font-semibold text-slate-800 mb-2">❌ TRÁNH</p>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Giấu nợ 120tr (Tuấn sẽ biết sớm thôi)</li>
                                    <li>• Phóng đại doanh thu</li>
                                    <li>• Hứa % lợi nhuận phi thực tế</li>
                                    <li>• Bảo &quot;công ty không nợ gì&quot;</li>
                                    <li>• Nhận tiền trước khi ký HĐ</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Partnership models comparison */}
                    {partnershipModels.map((model, mi) => (
                        <div key={mi} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center gap-3">
                                <span className="text-2xl">{model.icon}</span>
                                <div>
                                    <h3 className="font-semibold text-slate-900">{model.type}</h3>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="text-xs font-semibold text-emerald-700 mb-2">✅ Ưu điểm</p>
                                        {model.pros.map((p, pi) => (
                                            <p key={pi} className="text-sm text-slate-600 flex items-start gap-1 mb-1">
                                                <span className="text-emerald-500">+</span> {p}
                                            </p>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-red-700 mb-2">❌ Nhược điểm</p>
                                        {model.cons.map((c, ci) => (
                                            <p key={ci} className="text-sm text-slate-600 flex items-start gap-1 mb-1">
                                                <span className="text-red-500">−</span> {c}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-3 mb-3">
                                    <p className="text-xs font-semibold text-blue-700 mb-1">📝 Cách thực hiện</p>
                                    <p className="text-sm text-blue-800">{model.howTo}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-500 mb-1">📄 Giấy tờ cần:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {model.docs.map((d, di) => (
                                            <span key={di} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">{d}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Red flags */}
                    <div className="bg-red-50 border border-red-200 rounded-xl overflow-hidden">
                        <div className="px-6 py-4 bg-red-100 border-b border-red-200">
                            <h3 className="font-bold text-red-800">🚩 Red Flags — Dấu hiệu cần DỪNG ngay</h3>
                            <p className="text-xs text-red-600 mt-1">Nếu Tuấn có BẤT KỲ hành vi nào dưới đây → KHÔNG hợp tác</p>
                        </div>
                        <div className="p-5 space-y-2">
                            {partnershipRedFlags.map((flag, fi) => (
                                <div key={fi} className="flex items-start gap-2 p-2 rounded-lg hover:bg-red-100/50 transition-colors">
                                    <span className="text-red-500 font-bold flex-shrink-0">🚩</span>
                                    <p className="text-sm text-red-800">{flag}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Example deal structure */}
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                        <h3 className="font-bold text-emerald-800 text-lg mb-3">💡 Ví dụ cấu trúc deal (nếu Tuấn góp 200tr)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg p-4">
                                <p className="font-semibold text-slate-800 mb-2">Phương án A: Góp vốn 30%</p>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Tuấn góp 200tr → sở hữu 30% Nemark</li>
                                    <li>• GĐ Đức giữ 70% + quyền điều hành</li>
                                    <li>• Chia lợi nhuận hàng quý theo %</li>
                                    <li>• 120tr trả nợ cũ, 80tr đầu tư phát triển</li>
                                    <li>• Lock-in 2 năm, không rút sớm</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                                <p className="font-semibold text-slate-800 mb-2">Phương án B: BCC + Chia lợi nhuận</p>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Tuấn đầu tư 200tr theo HĐ BCC</li>
                                    <li>• Chia lợi nhuận 30% cho Tuấn</li>
                                    <li>• GĐ Đức giữ 100% sở hữu công ty</li>
                                    <li>• Thời hạn: 3 năm, đánh giá hàng năm</li>
                                    <li>• Tuấn rút vốn: báo trước 6 tháng</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* =================== TAB 5: ROADMAP =================== */}
            {activeTab === 'roadmap' && (
                <div className="space-y-6">
                    {roadmap.map((phase, pi) => (
                        <div key={pi} className={`rounded-xl border-l-4 border ${phase.color} overflow-hidden shadow-sm`}>
                            <div className="px-6 py-4">
                                <h2 className={`text-lg font-bold ${phase.headerColor}`}>{phase.phase}</h2>
                            </div>
                            <div className="bg-white divide-y divide-slate-100">
                                {phase.items.map((item, ii) => (
                                    <div key={ii} className="px-6 py-4 hover:bg-slate-50 transition-colors">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 flex-wrap mb-1">
                                                    {statusBadge(item.status)}
                                                    <h3 className="font-medium text-slate-900">{item.task}</h3>
                                                </div>
                                                <p className="text-sm text-slate-500 mt-1">{item.note}</p>
                                            </div>
                                            <div className="flex-shrink-0 text-right">
                                                <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                                    📅 {item.deadline}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Visual Timeline */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <h2 className="text-lg font-semibold text-slate-900 mb-4">📊 Timeline Tổng Quan 2026</h2>
                        <div className="flex items-center gap-0">
                            {[
                                { month: 'T3', label: 'STK DN\nKiểm kê\nHĐLĐ 3 người', color: 'bg-red-500', active: true },
                                { month: 'T4', label: 'Thuế Q1\nBHXH 4 người\nHĐ Tuấn?', color: 'bg-orange-500', active: false },
                                { month: 'T5', label: 'Trả nợ\n-20tr', color: 'bg-orange-400', active: false },
                                { month: 'T6', label: 'Trả nợ\n-20tr\nMST chủ nhà', color: 'bg-yellow-500', active: false },
                                { month: 'T7', label: 'Trả nợ\n-20tr\nVibe Coding?', color: 'bg-emerald-500', active: false },
                                { month: 'T8', label: 'Trả nợ\n-20tr\nDự án web', color: 'bg-emerald-400', active: false },
                                { month: 'T9', label: 'Debt-free?\nIT Outsource', color: 'bg-emerald-400', active: false },
                                { month: 'T10', label: 'Tuyển dev\nnếu ổn', color: 'bg-blue-500', active: false },
                                { month: 'T11', label: 'Reseller\nchính thức', color: 'bg-blue-400', active: false },
                                { month: 'T12', label: 'Đánh giá\n1 năm', color: 'bg-purple-500', active: false },
                            ].map((m, i) => (
                                <div key={i} className="flex-1 text-center">
                                    <div className={`w-full h-2 ${m.color} ${i === 0 ? 'rounded-l-full' : ''} ${i === 9 ? 'rounded-r-full' : ''} ${m.active ? 'animate-pulse' : ''}`} />
                                    <p className={`text-xs font-bold mt-2 ${m.active ? 'text-red-600' : 'text-slate-500'}`}>{m.month}</p>
                                    <p className="text-[10px] text-slate-400 mt-0.5 whitespace-pre-line leading-tight">{m.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* =================== TAB 3: PRINCIPLES =================== */}
            {activeTab === 'principles' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {keyPrinciples.map((p, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all hover:-translate-y-1">
                            <div className="text-4xl mb-3">{p.icon}</div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">{p.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Footer */}
            <div className="bg-slate-100 rounded-xl p-4 text-center text-xs text-slate-400">
                Tài liệu nội bộ — CÔNG TY TNHH TRUYỀN THÔNG GIẢI PHÁP SỐ NEMARK — MST: cần cập nhật<br />
                Dựa trên phân tích pháp luật Việt Nam 2025-2026 | Liên hệ kế toán để cập nhật thêm
            </div>
        </div>
    )
}
