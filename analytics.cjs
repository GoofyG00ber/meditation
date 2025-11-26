const mysql = require('mysql2/promise');
require('dotenv').config();

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'meditation_app',
};

async function showQuestionnaireAnalytics() {
  let connection;

  try {
    console.log('🔍 Questionnaire Analytics Report');
    console.log('==================================\n');

    connection = await mysql.createConnection(dbConfig);

    // Get total responses
    const [totalRows] = await connection.execute('SELECT COUNT(*) as total FROM questionnaire_responses');
    const totalResponses = totalRows[0].total;
    console.log(`📊 Total Questionnaire Responses: ${totalResponses}\n`);

    if (totalResponses === 0) {
      console.log('No questionnaire data found. Run some questionnaires first!');
      return;
    }

    // Get totem animal distribution
    const [totemRows] = await connection.execute(`
      SELECT totem_animal, COUNT(*) as count
      FROM questionnaire_responses
      GROUP BY totem_animal
      ORDER BY count DESC
    `);

    console.log('🦊 Totem Animal Distribution:');
    totemRows.forEach(row => {
      const percentage = ((row.count / totalResponses) * 100).toFixed(1);
      console.log(`  ${row.totem_animal}: ${row.count} responses (${percentage}%)`);
    });
    console.log('');

    // Get average scores by totem animal
    const [avgRows] = await connection.execute(`
      SELECT totem_animal, AVG(total_points) as avg_score, MIN(total_points) as min_score, MAX(total_points) as max_score
      FROM questionnaire_responses
      GROUP BY totem_animal
      ORDER BY avg_score DESC
    `);

    console.log('📈 Score Analysis by Totem Animal:');
    avgRows.forEach(row => {
      console.log(`  ${row.totem_animal}:`);
      console.log(`    Average Score: ${Math.round(row.avg_score * 100) / 100}`);
      console.log(`    Score Range: ${row.min_score} - ${row.max_score}`);
    });
    console.log('');

    // Get recent activity (last 7 days)
    const [recentRows] = await connection.execute(`
      SELECT COUNT(*) as recent_count
      FROM questionnaire_responses
      WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
    `);

    console.log(`📅 Recent Activity (7 days): ${recentRows[0].recent_count} responses\n`);

    // Show sample responses
    const [sampleRows] = await connection.execute(`
      SELECT qr.*, u.username
      FROM questionnaire_responses qr
      JOIN users u ON qr.user_id = u.id
      ORDER BY qr.created_at DESC
      LIMIT 3
    `);

    console.log('📝 Recent Responses:');
    sampleRows.forEach((row, index) => {
      console.log(`  ${index + 1}. ${row.username} - ${row.totem_animal} (${row.total_points} points)`);
      console.log(`     Completed: ${new Date(row.created_at).toLocaleString()}`);
    });

    console.log('\n✅ Analytics report complete!');

  } catch (error) {
    console.error('❌ Analytics error:', error.message);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// Run analytics if called directly
if (require.main === module) {
  showQuestionnaireAnalytics();
}

module.exports = { showQuestionnaireAnalytics };
