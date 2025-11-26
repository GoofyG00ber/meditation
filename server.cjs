const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'meditation_app',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 60000
};

// Create connection pool
let pool;

async function initializeDatabase() {
  try {
    pool = mysql.createPool(dbConfig);
    console.log('Connected to MySQL database');

    // Test connection
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    console.log('Database connection test successful');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

// Middleware
app.use(cors());
app.use(express.json());

// Get all users (without passwords)
app.get('/users', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT id, username, email, points, level, created_at, achievements, badges, exercise_counts, features_tried, questionnaire_results, has_completed_questionnaire FROM users'
    );

    // Convert database field names to camelCase
    const users = rows.map(user => ({
      id: user.id,
      username: user.username,
      email: user.email,
      points: user.points,
      level: user.level,
      createdAt: user.created_at,
      achievements: JSON.parse(user.achievements || '[]'),
      badges: JSON.parse(user.badges || '[]'),
      exerciseCounts: JSON.parse(user.exercise_counts || '{}'),
      featuresTried: JSON.parse(user.features_tried || '[]'),
      questionnaireResults: JSON.parse(user.questionnaire_results || '[]'),
      hasCompletedQuestionnaire: user.has_completed_questionnaire
    }));

    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user by ID (without password)
app.get('/users/:id', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT id, username, email, points, level, created_at, achievements, badges, exercise_counts, features_tried, questionnaire_results, has_completed_questionnaire FROM users WHERE id = ?',
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = rows[0];
    const userWithoutPassword = {
      id: user.id,
      username: user.username,
      email: user.email,
      points: user.points,
      level: user.level,
      createdAt: user.created_at,
      achievements: JSON.parse(user.achievements || '[]'),
      badges: JSON.parse(user.badges || '[]'),
      exerciseCounts: JSON.parse(user.exercise_counts || '{}'),
      featuresTried: JSON.parse(user.features_tried || '[]'),
      questionnaireResults: JSON.parse(user.questionnaire_results || '[]'),
      hasCompletedQuestionnaire: user.has_completed_questionnaire
    };

    res.json(userWithoutPassword);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = rows[0];
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const userWithoutPassword = {
      id: user.id,
      username: user.username,
      email: user.email,
      points: user.points,
      level: user.level,
      createdAt: user.created_at,
      achievements: JSON.parse(user.achievements || '[]'),
      badges: JSON.parse(user.badges || '[]'),
      exerciseCounts: JSON.parse(user.exercise_counts || '{}'),
      featuresTried: JSON.parse(user.features_tried || '[]'),
      questionnaireResults: JSON.parse(user.questionnaire_results || '[]'),
      hasCompletedQuestionnaire: user.has_completed_questionnaire
    };

    res.json(userWithoutPassword);
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Register endpoint
app.post('/users', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Username, email, and password are required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long' });
  }

  try {
    // Check if user already exists
    const [existingUsers] = await pool.execute(
      'SELECT id FROM users WHERE email = ? OR username = ?',
      [email, username]
    );

    if (existingUsers.length > 0) {
      return res.status(409).json({ error: 'User with this email or username already exists' });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUserId = Date.now().toString();
    await pool.execute(
      'INSERT INTO users (id, username, email, password, points, level, achievements, badges, exercise_counts, features_tried, questionnaire_results, has_completed_questionnaire) VALUES (?, ?, ?, ?, 0, 1, "[]", "[]", "{}", "[]", "[]", FALSE)',
      [newUserId, username, email, hashedPassword]
    );

    const userWithoutPassword = {
      id: newUserId,
      username,
      email,
      points: 0,
      level: 1,
      createdAt: new Date().toISOString(),
      achievements: [],
      badges: [],
      exerciseCounts: {},
      featuresTried: [],
      questionnaireResults: [],
      hasCompletedQuestionnaire: false
    };

    res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update user
app.patch('/users/:id', async (req, res) => {
  try {
    // First check if user exists
    const [existingUsers] = await pool.execute(
      'SELECT * FROM users WHERE id = ?',
      [req.params.id]
    );

    if (existingUsers.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const currentUser = existingUsers[0];
    const updates = req.body;

    // Build dynamic update query
    const updateFields = [];
    const updateValues = [];

    // Handle each possible field
    if (updates.username !== undefined) {
      updateFields.push('username = ?');
      updateValues.push(updates.username);
    }
    if (updates.email !== undefined) {
      updateFields.push('email = ?');
      updateValues.push(updates.email);
    }
    if (updates.points !== undefined) {
      updateFields.push('points = ?');
      updateValues.push(updates.points);
    }
    if (updates.level !== undefined) {
      updateFields.push('level = ?');
      updateValues.push(updates.level);
    }
    if (updates.achievements !== undefined) {
      updateFields.push('achievements = ?');
      updateValues.push(JSON.stringify(updates.achievements));
    }
    if (updates.badges !== undefined) {
      updateFields.push('badges = ?');
      updateValues.push(JSON.stringify(updates.badges));
    }
    if (updates.exerciseCounts !== undefined) {
      updateFields.push('exercise_counts = ?');
      updateValues.push(JSON.stringify(updates.exerciseCounts));
    }
    if (updates.featuresTried !== undefined) {
      updateFields.push('features_tried = ?');
      updateValues.push(JSON.stringify(updates.featuresTried));
    }
    if (updates.questionnaireResults !== undefined) {
      updateFields.push('questionnaire_results = ?');
      updateValues.push(JSON.stringify(updates.questionnaireResults));
    }
    if (updates.hasCompletedQuestionnaire !== undefined) {
      updateFields.push('has_completed_questionnaire = ?');
      updateValues.push(updates.hasCompletedQuestionnaire);
    }

    if (updateFields.length === 0) {
      return res.status(400).json({ error: 'No valid fields to update' });
    }

    // Execute update
    const updateQuery = `UPDATE users SET ${updateFields.join(', ')} WHERE id = ?`;
    updateValues.push(req.params.id);

    await pool.execute(updateQuery, updateValues);

    // Fetch updated user
    const [updatedUsers] = await pool.execute(
      'SELECT id, username, email, points, level, created_at, achievements, badges, exercise_counts, features_tried, questionnaire_results, has_completed_questionnaire FROM users WHERE id = ?',
      [req.params.id]
    );

    const user = updatedUsers[0];
    const userWithoutPassword = {
      id: user.id,
      username: user.username,
      email: user.email,
      points: user.points,
      level: user.level,
      createdAt: user.created_at,
      achievements: JSON.parse(user.achievements || '[]'),
      badges: JSON.parse(user.badges || '[]'),
      exerciseCounts: JSON.parse(user.exercise_counts || '{}'),
      featuresTried: JSON.parse(user.features_tried || '[]'),
      questionnaireResults: JSON.parse(user.questionnaire_results || '[]'),
      hasCompletedQuestionnaire: user.has_completed_questionnaire
    };

    res.json(userWithoutPassword);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all questionnaire responses (admin endpoint)
app.get('/questionnaire-responses', async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT qr.*, u.username, u.email
      FROM questionnaire_responses qr
      JOIN users u ON qr.user_id = u.id
      ORDER BY qr.created_at DESC
    `);

    const responses = rows.map(row => ({
      id: row.id,
      userId: row.user_id,
      username: row.username,
      email: row.email,
      answers: JSON.parse(row.answers),
      totalPoints: row.total_points,
      totemAnimal: row.totem_animal,
      createdAt: row.created_at
    }));

    res.json(responses);
  } catch (error) {
    console.error('Error fetching questionnaire responses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get questionnaire responses for a specific user
app.get('/users/:id/questionnaire-responses', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM questionnaire_responses WHERE user_id = ? ORDER BY created_at DESC',
      [req.params.id]
    );

    const responses = rows.map(row => ({
      id: row.id,
      userId: row.user_id,
      answers: JSON.parse(row.answers),
      totalPoints: row.total_points,
      totemAnimal: row.totem_animal,
      createdAt: row.created_at
    }));

    res.json(responses);
  } catch (error) {
    console.error('Error fetching user questionnaire responses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get questionnaire statistics
app.get('/questionnaire-stats', async (req, res) => {
  try {
    // Get total responses
    const [totalRows] = await pool.execute('SELECT COUNT(*) as total FROM questionnaire_responses');
    const totalResponses = totalRows[0].total;

    // Get totem animal distribution
    const [totemRows] = await pool.execute(`
      SELECT totem_animal, COUNT(*) as count
      FROM questionnaire_responses
      GROUP BY totem_animal
      ORDER BY count DESC
    `);

    // Get average scores by totem animal
    const [avgRows] = await pool.execute(`
      SELECT totem_animal, AVG(total_points) as avg_score, COUNT(*) as count
      FROM questionnaire_responses
      GROUP BY totem_animal
      ORDER BY avg_score DESC
    `);

    // Get recent responses (last 30 days)
    const [recentRows] = await pool.execute(`
      SELECT COUNT(*) as recent_count
      FROM questionnaire_responses
      WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
    `);

    res.json({
      totalResponses,
      totemDistribution: totemRows,
      averageScores: avgRows.map(row => ({
        totemAnimal: row.totem_animal,
        averageScore: Math.round(row.avg_score * 100) / 100,
        count: row.count
      })),
      recentResponses: recentRows[0].recent_count
    });
  } catch (error) {
    console.error('Error fetching questionnaire stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Save questionnaire response
app.post('/questionnaire-responses', async (req, res) => {
  const { userId, answers, totalPoints, totemAnimal, timestamp } = req.body;

  if (!userId || !answers || totalPoints === undefined || !totemAnimal) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Verify user exists
    const [userRows] = await pool.execute(
      'SELECT id FROM users WHERE id = ?',
      [userId]
    );

    if (userRows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Insert questionnaire response
    const [result] = await pool.execute(
      'INSERT INTO questionnaire_responses (user_id, answers, total_points, totem_animal, created_at) VALUES (?, ?, ?, ?, ?)',
      [userId, JSON.stringify(answers), totalPoints, totemAnimal, new Date(timestamp)]
    );

    res.status(201).json({
      id: result.insertId,
      userId,
      answers,
      totalPoints,
      totemAnimal,
      createdAt: new Date(timestamp)
    });
  } catch (error) {
    console.error('Error saving questionnaire response:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Initialize database and start server
async function startServer() {
  await initializeDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Database: MySQL');
  });
}

startServer().catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
