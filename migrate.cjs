const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'meditation_app',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

async function migrateData() {
  let pool;

  try {
    // Connect to database
    pool = mysql.createPool(dbConfig);
    console.log('Connected to MySQL database');

    // Read JSON data
    const dbPath = path.join(__dirname, 'db.json');
    if (!fs.existsSync(dbPath)) {
      console.log('No db.json file found. Skipping migration.');
      return;
    }

    const jsonData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    console.log(`Found ${jsonData.users.length} users to migrate`);

    // Migrate each user
    for (const user of jsonData.users) {
      try {
        await pool.execute(
          `INSERT INTO users (
            id, username, email, password, points, level, created_at,
            achievements, badges, exercise_counts, features_tried,
            questionnaire_results, has_completed_questionnaire
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            user.id,
            user.username,
            user.email,
            user.password,
            user.points || 0,
            user.level || 1,
            user.createdAt ? new Date(user.createdAt) : new Date(),
            JSON.stringify(user.achievements || []),
            JSON.stringify(user.badges || []),
            JSON.stringify(user.exerciseCounts || {}),
            JSON.stringify(user.featuresTried || []),
            JSON.stringify(user.questionnaireResults || []),
            user.hasCompletedQuestionnaire || false
          ]
        );
        console.log(`Migrated user: ${user.username}`);

        // Migrate questionnaire responses to separate table
        if (user.questionnaireResults && user.questionnaireResults.length > 0) {
          for (const response of user.questionnaireResults) {
            try {
              await pool.execute(
                `INSERT INTO questionnaire_responses (
                  user_id, answers, total_points, totem_animal, created_at
                ) VALUES (?, ?, ?, ?, ?)`,
                [
                  user.id,
                  JSON.stringify(response.answers || {}),
                  response.totalPoints || 0,
                  response.totemAnimal || '',
                  response.timestamp ? new Date(response.timestamp) : new Date()
                ]
              );
              console.log(`Migrated questionnaire response for user: ${user.username}`);
            } catch (responseError) {
              console.error(`Error migrating questionnaire response for user ${user.username}:`, responseError);
            }
          }
        }
      } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
          console.log(`User ${user.username} already exists, skipping...`);
        } else {
          console.error(`Error migrating user ${user.username}:`, error);
        }
      }
    }

    console.log('Migration completed successfully!');

  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    if (pool) {
      await pool.end();
    }
  }
}

// Run migration if called directly
if (require.main === module) {
  migrateData();
}

module.exports = { migrateData };
