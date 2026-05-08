-- Run this SQL to create the Projects table
CREATE TABLE IF NOT EXISTS Projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    client_name VARCHAR(255),
    client_email VARCHAR(255),
    client_phone VARCHAR(50),
    project_type ENUM('website','app','seo','startup','maintenance','security','infra','other') DEFAULT 'website',
    status ENUM('lead','planning','in_progress','review','completed','cancelled') DEFAULT 'lead',
    priority ENUM('low','medium','high','urgent') DEFAULT 'medium',
    budget DECIMAL(15,0) DEFAULT 0,
    paid_amount DECIMAL(15,0) DEFAULT 0,
    start_date DATE,
    deadline DATE,
    completed_date DATE,
    progress INT DEFAULT 0,
    description TEXT,
    tech_stack VARCHAR(500),
    assigned_to VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
