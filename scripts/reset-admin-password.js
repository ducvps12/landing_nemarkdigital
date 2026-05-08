/**
 * Reset admin password script
 * Run: node scripts/reset-admin-password.js
 * 
 * This will reset the 'admin' account password to 'admin123'
 */

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

async function resetAdminPassword() {
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
        console.log('🔧 Resetting admin password...\n');

        // Hash the new password
        const newPassword = 'admin123';
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update the admin password
        const [result] = await pool.execute(
            'UPDATE Admins SET password = ? WHERE login_name = ?',
            [hashedPassword, 'admin']
        );

        if (result.affectedRows > 0) {
            console.log('✅ Admin password reset successfully!\n');
            console.log('   📋 Login credentials:');
            console.log('   ─────────────────────');
            console.log('   Username: admin');
            console.log('   Password: admin123');
            console.log('\n   ⚠️  Please change the password after login!');
        } else {
            console.log('❌ No admin account found with login_name "admin".');
            console.log('   Run "node scripts/seed-admin.js" first to create one.');
        }

        // List all admins
        const [admins] = await pool.execute('SELECT id, login_name FROM Admins');
        console.log('\n📋 All admin accounts:');
        admins.forEach(a => console.log(`   - ID: ${a.id}, Username: ${a.login_name}`));

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await pool.end();
    }
}

resetAdminPassword();
