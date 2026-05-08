/**
 * Run DB migration for password reset feature
 * Adds email column to Admins and creates PasswordResetTokens table
 * Run: node scripts/setup-password-reset.js
 */

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const mysql = require('mysql2/promise');

async function migrate() {
    const pool = mysql.createPool({
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DATABASE || 'landingnemark',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    });

    try {
        console.log('🔧 Running password reset migration...\n');

        // Add email column to Admins (ignore error if already exists)
        try {
            await pool.execute('ALTER TABLE Admins ADD COLUMN email VARCHAR(255) DEFAULT NULL');
            console.log('✅ Added email column to Admins table.');
        } catch (err) {
            if (err.code === 'ER_DUP_FIELDNAME') {
                console.log('ℹ️  email column already exists in Admins table.');
            } else {
                throw err;
            }
        }

        // Create PasswordResetTokens table
        await pool.execute(`
            CREATE TABLE IF NOT EXISTS PasswordResetTokens (
                id INT AUTO_INCREMENT PRIMARY KEY,
                admin_id INT NOT NULL,
                token VARCHAR(255) NOT NULL UNIQUE,
                expires_at DATETIME NOT NULL,
                used BOOLEAN DEFAULT FALSE,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (admin_id) REFERENCES Admins(id) ON DELETE CASCADE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
        `);
        console.log('✅ PasswordResetTokens table ready.');

        // Set email for existing admin accounts
        const [admins] = await pool.execute('SELECT id, login_name, email FROM Admins');
        console.log(`\n📋 Found ${admins.length} admin account(s):`);
        admins.forEach(admin => {
            console.log(`   - ID: ${admin.id}, Login: ${admin.login_name}, Email: ${admin.email || '(not set)'}`);
        });

        // Update admin email if not set
        if (admins.length > 0 && !admins[0].email) {
            await pool.execute(
                'UPDATE Admins SET email = ? WHERE id = ?',
                ['teavpn21@gmail.com', admins[0].id]
            );
            console.log(`\n✅ Updated admin "${admins[0].login_name}" email to: teavpn21@gmail.com`);
        }

        console.log('\n🎉 Migration completed successfully!');
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.error('Full error:', error);
    } finally {
        await pool.end();
    }
}

migrate();
