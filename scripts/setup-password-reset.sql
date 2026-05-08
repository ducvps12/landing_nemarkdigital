-- Password Reset Tokens table
-- Run: mysql -h 163.61.110.181 -u landingnemark -plandingnemark landingnemark < scripts/setup-password-reset.sql

-- Add email column to Admins table
ALTER TABLE Admins ADD COLUMN IF NOT EXISTS email VARCHAR(255) DEFAULT NULL;

-- Create PasswordResetTokens table
CREATE TABLE IF NOT EXISTS PasswordResetTokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id INT NOT NULL,
    token VARCHAR(255) NOT NULL UNIQUE,
    expires_at DATETIME NOT NULL,
    used BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES Admins(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
