const mysql = require('mysql2/promise');
require('dotenv').config();

async function diagnoseDatabase() {
  console.log('🔍 Database Diagnostic Tool');
  console.log('===========================\n');

  console.log('📋 Configuration:');
  console.log(`Host: ${process.env.DB_HOST}`);
  console.log(`User: ${process.env.DB_USER}`);
  console.log(`Database: ${process.env.DB_NAME}`);
  console.log(`Port: ${process.env.DB_PORT || 3306}\n`);

  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectTimeout: 60000,
    acquireTimeout: 60000,
    timeout: 60000,
  };

  let connection;

  try {
    console.log('🔌 Testing connection...');
    connection = await mysql.createConnection(dbConfig);
    console.log('✅ Connected to MySQL database\n');

    // Check if tables exist
    console.log('📊 Checking tables...');

    const [tables] = await connection.execute(`
      SELECT TABLE_NAME
      FROM information_schema.TABLES
      WHERE TABLE_SCHEMA = ? AND TABLE_NAME IN ('users', 'questionnaire_responses', 'sessions')
    `, [process.env.DB_NAME]);

    const existingTables = tables.map(t => t.TABLE_NAME);
    console.log(`Found tables: ${existingTables.join(', ')}\n`);

    const requiredTables = ['users', 'questionnaire_responses'];
    const missingTables = requiredTables.filter(table => !existingTables.includes(table));

    if (missingTables.length > 0) {
      console.log('❌ Missing tables:', missingTables.join(', '));
      console.log('💡 Run the database_schema.sql script in your MySQL admin panel\n');
    } else {
      console.log('✅ All required tables exist\n');
    }

    // Check users table structure
    if (existingTables.includes('users')) {
      console.log('👥 Checking users table structure...');
      const [columns] = await connection.execute(`
        SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE, COLUMN_DEFAULT
        FROM information_schema.COLUMNS
        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'users'
        ORDER BY ORDINAL_POSITION
      `, [process.env.DB_NAME]);

      console.log('Users table columns:');
      columns.forEach(col => {
        console.log(`  ${col.COLUMN_NAME} (${col.DATA_TYPE}) ${col.IS_NULLABLE === 'YES' ? 'NULL' : 'NOT NULL'}`);
      });
      console.log('');

      // Check if there are any users
      const [userCount] = await connection.execute('SELECT COUNT(*) as count FROM users');
      console.log(`👤 Existing users: ${userCount[0].count}\n`);
    }

    // Test a simple registration simulation
    console.log('🧪 Testing registration simulation...');
    try {
      const testUserId = 'test_' + Date.now();
      await connection.execute(
        'INSERT INTO users (id, username, email, password, points, level, achievements, badges, exercise_counts, features_tried, questionnaire_results, has_completed_questionnaire) VALUES (?, ?, ?, ?, 0, 1, "[]", "[]", "{}", "[]", "[]", FALSE)',
        [testUserId, 'testuser', 'test@example.com', '$2b$10$test.hash']
      );
      console.log('✅ Test user creation successful');

      // Clean up test user
      await connection.execute('DELETE FROM users WHERE id = ?', [testUserId]);
      console.log('🧹 Test user cleaned up\n');
    } catch (testError) {
      console.log('❌ Test registration failed:', testError.message);
      console.log('💡 This indicates a database schema issue\n');
    }

    console.log('🎉 Diagnostic complete!');

  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('\n🔧 Troubleshooting steps:');
    console.log('1. Verify your .env file has correct credentials');
    console.log('2. Check if MySQL user has remote access permissions');
    console.log('3. Ensure the database exists and is accessible');
    console.log('4. Run: mysql -h mysql.rackhost.hu -u c64634inner -p c64634db < database_schema.sql');
    console.log('5. Contact your hosting provider about remote MySQL access');
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

diagnoseDatabase();