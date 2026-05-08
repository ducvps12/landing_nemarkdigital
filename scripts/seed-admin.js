/**
 * Seed script to create a default admin account
 * Run: node scripts/seed-admin.js
 * 
 * Default credentials:
 *   Username: admin
 *   Password: admin123
 */

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

async function seedAdmin() {
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
        console.log('🔧 Setting up Admins table...\n');

        // Create Admins table if not exists
        await pool.execute(`
            CREATE TABLE IF NOT EXISTS Admins (
                id INT AUTO_INCREMENT PRIMARY KEY,
                login_name VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('✅ Admins table ready.\n');

        // Check if admin already exists
        const [existing] = await pool.execute(
            'SELECT * FROM Admins WHERE login_name = ?',
            ['admin']
        );

        if (existing.length > 0) {
            console.log('⚠️  Admin account "admin" already exists. Skipping creation.');
            console.log(`   ID: ${existing[0].id}`);
            console.log(`   Login name: ${existing[0].login_name}`);
            console.log('\n💡 If you want to reset the password, delete the existing account first:');
            console.log('   DELETE FROM Admins WHERE login_name = "admin";');
        } else {
            // Hash the password
            const password = 'admin123';
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Insert admin
            const [result] = await pool.execute(
                'INSERT INTO Admins (login_name, password) VALUES (?, ?)',
                ['admin', hashedPassword]
            );

            console.log('✅ Admin account created successfully!\n');
            console.log('   📋 Login credentials:');
            console.log('   ─────────────────────');
            console.log('   Username: admin');
            console.log('   Password: admin123');
            console.log(`   ID: ${result.insertId}`);
            console.log('\n   ⚠️  Please change the password after first login!');
        }

        // Also ensure CustomerInfomations table exists
        await pool.execute(`
            CREATE TABLE IF NOT EXISTS CustomerInfomations (
                id INT AUTO_INCREMENT PRIMARY KEY,
                fullname VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone_number VARCHAR(50) NOT NULL,
                customer_message TEXT,
                product VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('\n✅ CustomerInfomations table ready.');

        console.log('\n🎉 Seed completed! You can now login at /admin/login');
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.error('Full error:', error);
    } finally {
        await pool.end();
    }
}

seedAdmin();
