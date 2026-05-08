import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

async function testConnection() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
        });
        const [rows] = await connection.execute('SELECT 1 as test');
        console.log('✅ DB connected OK:', rows);
        const [tables] = await connection.execute('SHOW TABLES');
        console.log('📋 Tables:', tables.map(t => Object.values(t)[0]));
        await connection.end();
    } catch (err) {
        console.error('❌ DB connection FAILED:', err.message);
    }
}
testConnection();
