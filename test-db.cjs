const mysql = require('mysql2/promise');
require('dotenv').config();

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'meditation_app',
  connectTimeout: 60000
};

async function testConnection() {
  let connection;

  try {
    console.log('Testing MySQL connection...');
    connection = await mysql.createConnection(dbConfig);

    console.log('✅ Connected to MySQL database');

    // Test query
    const [rows] = await connection.execute('SELECT COUNT(*) as userCount FROM users');
    console.log(`✅ Database contains ${rows[0].userCount} users`);

    // Test user query
    const [users] = await connection.execute('SELECT id, username, email FROM users LIMIT 1');
    if (users.length > 0) {
      console.log(`✅ Sample user: ${users[0].username} (${users[0].email})`);
    }

    console.log('🎉 All database tests passed!');

  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('\nTroubleshooting:');
    console.log('1. Make sure MySQL server is running');
    console.log('2. Check your .env file configuration');
    console.log('3. Ensure database and user exist');
    console.log('4. Run: mysql -u root -p < database_schema.sql');
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

testConnection();
