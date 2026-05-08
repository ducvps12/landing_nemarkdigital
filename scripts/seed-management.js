// Seed script for management tables
// Run: node scripts/seed-management.js
const mysql = require('mysql2/promise');
const fs = require('fs');

async function main() {
    const conn = await mysql.createConnection({
        host: '163.61.110.181',
        user: 'landingnemark',
        password: 'landingnemark',
        database: 'landingnemark',
        multipleStatements: true,
        connectTimeout: 30000,
    });

    console.log('Connected to database');

    // Create tables
    const sql = fs.readFileSync('scripts/setup-management-tables.sql', 'utf8');
    await conn.query(sql);
    console.log('Tables created');

    // Seed Legal Checklist Items
    const legalItems = [
        ['Lập HĐLĐ cho toàn bộ nhân sự chính thức', 'Tất cả 5-6 nhân sự full-time cần có HĐLĐ hợp lệ theo Bộ luật Lao động', 'nhan_su', '2026-03-31', 'none', 'pending', 'critical', 'Mai Tiến Đức'],
        ['Lập HĐLĐ cho 10 nhân sự part-time', 'Từ 01/01/2026, HĐ từ 1 tháng trở lên phải tham gia BHTN. Cần HĐLĐ cho tất cả part-time', 'nhan_su', '2026-03-31', 'none', 'pending', 'critical', 'Mai Tiến Đức'],
        ['Thu thập hồ sơ nhân sự đầy đủ', 'CCCD, sơ yếu lý lịch, giấy khám sức khỏe, ảnh thẻ cho toàn bộ nhân sự', 'nhan_su', '2026-03-31', 'none', 'pending', 'high', null],
        ['Đăng ký BHXH cho nhân sự part-time', 'Từ 01/07/2025, part-time/thời vụ BẮT BUỘC đóng BHXH (NLĐ 8%, NSDLĐ 17.5%)', 'bhxh', '2026-03-31', 'monthly', 'pending', 'critical', null],
        ['Nộp BHXH giám đốc hàng tháng', 'Giám đốc dù không hưởng lương vẫn BẮT BUỘC đóng BHXH ~1.850.000đ/tháng', 'bhxh', '2026-03-20', 'monthly', 'pending', 'high', 'Kế toán'],
        ['Chuyển giao dịch sang STK công ty', 'Từ 01/03/2026, Thông tư 25/2025 CẤM dùng STK cá nhân cho kinh doanh', 'tuan_thu', '2026-03-15', 'none', 'pending', 'critical', 'Mai Tiến Đức'],
        ['Kê khai thuế hàng quý Q1/2026', 'Nộp tờ khai thuế GTGT, TNCN quý 1 năm 2026', 'thue', '2026-04-30', 'quarterly', 'pending', 'high', 'Kế toán'],
        ['Đăng ký Bộ Công Thương cho website TMĐT', 'Tất cả website bán hàng cần đăng ký với Bộ Công Thương', 'giay_phep', '2026-04-30', 'none', 'pending', 'high', null],
        ['Giải quyết vấn đề MST chủ nhà', 'Chủ nhà không có MST → 2026 có thể không được khấu trừ chi phí thuê 10tr/tháng', 'thue', '2026-06-30', 'none', 'pending', 'medium', null],
        ['Gỡ bỏ mã nguồn game vi phạm bản quyền', 'NRO, NSO, clone game trên huymetv.com vi phạm SHTT, rủi ro hình sự', 'tuan_thu', '2026-03-10', 'none', 'pending', 'critical', 'Mai Tiến Đức'],
        ['Tách branding Nemark khỏi hoạt động rủi ro', 'Không gắn thương hiệu Nemark lên website bán tài khoản/game clone', 'tuan_thu', '2026-03-15', 'none', 'pending', 'critical', null],
        ['Cập nhật HĐLĐ điện tử theo quy định mới', 'Từ 01/01/2026, HĐLĐ điện tử có giá trị pháp lý như văn bản giấy', 'nhan_su', '2026-06-30', 'none', 'pending', 'medium', null],
        ['Luật Bảo vệ Dữ liệu Cá nhân 2025', 'Có hiệu lực 01/01/2026 - cần review chính sách bảo mật dữ liệu NLĐ', 'tuan_thu', '2026-06-30', 'none', 'pending', 'medium', null],
    ];

    for (const item of legalItems) {
        await conn.execute(
            'INSERT INTO LegalChecklistItems (title, description, category, deadline, recurring, status, priority, assigned_to) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            item
        );
    }
    console.log(`Seeded ${legalItems.length} legal checklist items`);

    // Seed Risk Items
    const riskItems = [
        ['Bán mã nguồn game private server (NRO/NSO)', 'Vi phạm bản quyền SHTT game TeamObi. Luật SHTT sửa đổi 2025 (hiệu lực 04/2026) xử lý như trộm cắp', 'phap_ly', 'critical', 'very_likely', 'catastrophic', 'Gỡ bỏ ngay toàn bộ mã nguồn game clone khỏi huymetv.com', 'active', 'Mai Tiến Đức', '2026-03-10'],
        ['Sử dụng STK cá nhân cho kinh doanh', 'Thông tư 25/2025 cấm từ 01/03/2026. Cơ quan thuế liên kết ngân hàng → phát hiện nhanh', 'tai_chinh', 'critical', 'very_likely', 'major', 'Chuyển toàn bộ giao dịch sang STK công ty Nemark', 'active', 'Mai Tiến Đức', '2026-03-15'],
        ['Không có HĐLĐ cho nhân sự', '5-6 nhân sự chính thức + 10 part-time không có HĐLĐ. Tai nạn LĐ → GĐ chịu trách nhiệm cá nhân', 'nhan_su', 'critical', 'likely', 'catastrophic', 'Lập HĐLĐ ngay cho toàn bộ nhân sự', 'active', 'Mai Tiến Đức', '2026-03-31'],
        ['Không đóng BHXH cho part-time', 'Từ 07/2025 bắt buộc. Truy đóng + lãi 0.03%/ngày + phạt 12-15% tổng số chưa đóng', 'tai_chinh', 'high', 'likely', 'major', 'Đăng ký BHXH cho toàn bộ part-time, truy đóng từ thời điểm bắt buộc', 'active', null, '2026-03-31'],
        ['Branding Nemark trên website rủi ro', 'Gắn thương hiệu Nemark lên 5+ website bán sản phẩm rủi ro → liên đới trách nhiệm pháp lý', 'uy_tin', 'high', 'likely', 'major', 'Tách branding, tạo thương hiệu riêng cho hoạt động rủi ro', 'active', null, '2026-03-15'],
        ['Bán tài khoản YT Premium/ChatGPT Plus', 'Vi phạm ToS Google/OpenAI. Pháp luật VN chưa công nhận tài khoản online là tài sản', 'phap_ly', 'medium', 'possible', 'moderate', 'Chuyển sang mô hình đại lý/reseller chính thức hoặc affiliate', 'active', null, null],
        ['Mặt bằng chủ nhà không có MST', 'Chi phí 10tr/tháng = 120tr/năm có thể không được khấu trừ thuế TNDN từ 2026', 'tai_chinh', 'medium', 'possible', 'moderate', 'Thuyết phục chủ nhà đăng ký MST hoặc tìm phương án thay thế', 'active', null, '2026-06-30'],
        ['Kế toán thuê ngoài — thiếu kiểm soát', 'Chỉ có 1 bạn nội bộ hỗ trợ giấy tờ, kế toán thuê ngoài → khó kiểm soát', 'van_hanh', 'medium', 'possible', 'moderate', 'Thuê kế toán nội bộ hoặc tăng cường giám sát kế toán ngoài', 'active', null, null],
    ];

    for (const item of riskItems) {
        await conn.execute(
            'INSERT INTO RiskItems (title, description, category, severity, likelihood, impact, mitigation_plan, status, owner, deadline) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            item
        );
    }
    console.log(`Seeded ${riskItems.length} risk items`);

    await conn.end();
    console.log('Done!');
}

main().catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
});
