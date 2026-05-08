-- Nemark Admin Management Tables
-- HR Management, Legal Checklist, Finances, Risk Management
-- Run: mysql -h 163.61.110.181 -u landingnemark -plandingnemark landingnemark < scripts/setup-management-tables.sql

-- ==================== HR MANAGEMENT ====================

CREATE TABLE IF NOT EXISTS Employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) DEFAULT NULL,
    phone VARCHAR(50) DEFAULT NULL,
    position VARCHAR(255) DEFAULT NULL,
    department VARCHAR(255) DEFAULT NULL,
    employment_type ENUM('fulltime', 'parttime') DEFAULT 'fulltime',
    id_card_number VARCHAR(50) DEFAULT NULL,
    date_of_birth DATE DEFAULT NULL,
    address TEXT DEFAULT NULL,
    start_date DATE DEFAULT NULL,
    end_date DATE DEFAULT NULL,
    salary DECIMAL(15,0) DEFAULT 0,
    bank_account VARCHAR(50) DEFAULT NULL,
    bank_name VARCHAR(255) DEFAULT NULL,
    payment_method ENUM('company_bank', 'personal_transfer', 'cash') DEFAULT 'company_bank',
    profile_image_url VARCHAR(1000) DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    status ENUM('active', 'inactive', 'probation', 'on_leave') DEFAULT 'active',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS Contracts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    contract_type ENUM('indefinite', 'definite', 'seasonal', 'probation') DEFAULT 'definite',
    contract_number VARCHAR(100) DEFAULT NULL,
    start_date DATE NOT NULL,
    end_date DATE DEFAULT NULL,
    salary DECIMAL(15,0) DEFAULT 0,
    status ENUM('active', 'expired', 'terminated', 'pending') DEFAULT 'active',
    file_url VARCHAR(1000) DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES Employees(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS InsuranceRecords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    insurance_code VARCHAR(50) DEFAULT NULL,
    insurance_type ENUM('bhxh', 'bhyt', 'bhtn', 'all') DEFAULT 'all',
    monthly_employee DECIMAL(15,0) DEFAULT 0,
    monthly_employer DECIMAL(15,0) DEFAULT 0,
    start_date DATE DEFAULT NULL,
    end_date DATE DEFAULT NULL,
    status ENUM('active', 'inactive', 'pending', 'overdue') DEFAULT 'pending',
    notes TEXT DEFAULT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES Employees(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==================== LEGAL CHECKLIST ====================

CREATE TABLE IF NOT EXISTS LegalChecklistItems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    description TEXT DEFAULT NULL,
    category ENUM('nhan_su', 'thue', 'bhxh', 'giay_phep', 'tuan_thu', 'khac') DEFAULT 'khac',
    deadline DATE DEFAULT NULL,
    recurring ENUM('none', 'monthly', 'quarterly', 'yearly') DEFAULT 'none',
    status ENUM('pending', 'in_progress', 'completed', 'overdue') DEFAULT 'pending',
    priority ENUM('critical', 'high', 'medium', 'low') DEFAULT 'medium',
    assigned_to VARCHAR(255) DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==================== FINANCIAL OVERVIEW ====================

CREATE TABLE IF NOT EXISTS FinancialRecords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    record_type ENUM('income', 'expense') NOT NULL,
    amount DECIMAL(15,0) NOT NULL DEFAULT 0,
    description TEXT DEFAULT NULL,
    record_date DATE NOT NULL,
    website_source VARCHAR(255) DEFAULT NULL,
    payment_method ENUM('company_bank', 'personal_bank', 'cash', 'online') DEFAULT 'company_bank',
    receipt_url VARCHAR(1000) DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==================== RISK MANAGEMENT ====================

CREATE TABLE IF NOT EXISTS RiskItems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    description TEXT DEFAULT NULL,
    category ENUM('phap_ly', 'tai_chinh', 'nhan_su', 'van_hanh', 'uy_tin', 'khac') DEFAULT 'khac',
    severity ENUM('critical', 'high', 'medium', 'low') DEFAULT 'medium',
    likelihood ENUM('very_likely', 'likely', 'possible', 'unlikely') DEFAULT 'possible',
    impact ENUM('catastrophic', 'major', 'moderate', 'minor') DEFAULT 'moderate',
    mitigation_plan TEXT DEFAULT NULL,
    status ENUM('active', 'mitigated', 'accepted', 'resolved') DEFAULT 'active',
    owner VARCHAR(255) DEFAULT NULL,
    deadline DATE DEFAULT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
