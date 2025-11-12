require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const { pool, testConnection } = require('./db.cjs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize database connection
async function initializeDatabase() {
  const connected = await testConnection();
  if (!connected) {
    console.error('❌ Failed to connect to database. Server will continue but database operations will fail.');
  }
}

initializeDatabase();

// Get all users (without passwords)
app.get('/users', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, username, email, points, level, createdAt, achievements FROM users');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

// Get user by ID (without password)
app.get('/users/:id', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, username, email, points, level, createdAt, achievements FROM users WHERE id = ?',
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = rows[0];
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Database error' });
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
    const [existingUsers] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);

    if (existingUsers.length > 0) {
      return res.status(409).json({ error: 'User with this email already exists' });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      username,
      email,
      password: hashedPassword,
      points: 0,
      level: 1,
      createdAt: new Date().toISOString(),
      achievements: JSON.stringify([])
    };

    await pool.query(
      'INSERT INTO users (id, username, email, password, points, level, createdAt, achievements) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [newUser.id, newUser.username, newUser.email, newUser.password, newUser.points, newUser.level, newUser.createdAt, newUser.achievements]
    );

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser;
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

// Update user
app.patch('/users/:id', async (req, res) => {
  try {
    const [existingUser] = await pool.query('SELECT * FROM users WHERE id = ?', [req.params.id]);

    if (existingUser.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Build update query dynamically based on provided fields
    const updates = [];
    const values = [];

    if (req.body.username !== undefined) {
      updates.push('username = ?');
      values.push(req.body.username);
    }
    if (req.body.email !== undefined) {
      updates.push('email = ?');
      values.push(req.body.email);
    }
    if (req.body.points !== undefined) {
      updates.push('points = ?');
      values.push(req.body.points);
    }
    if (req.body.level !== undefined) {
      updates.push('level = ?');
      values.push(req.body.level);
    }
    if (req.body.achievements !== undefined) {
      updates.push('achievements = ?');
      values.push(JSON.stringify(req.body.achievements));
    }

    if (updates.length === 0) {
      return res.status(400).json({ error: 'No fields to update' });
    }

    values.push(req.params.id);

    await pool.query(
      `UPDATE users SET ${updates.join(', ')} WHERE id = ?`,
      values
    );

    // Fetch updated user
    const [updatedUser] = await pool.query(
      'SELECT id, username, email, points, level, createdAt, achievements FROM users WHERE id = ?',
      [req.params.id]
    );

    res.json(updatedUser[0]);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

// Delete user
app.delete('/users/:id', async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [req.params.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

// Initialize database connection and start server
async function startServer() {
  console.log('🚀 Starting server...');
  
  const connected = await testConnection();
  if (!connected) {
    console.error('❌ Database connection failed. Please check your database configuration.');
    console.error('💡 Make sure MySQL is running and your credentials in .env are correct.');
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`🔗 Database connected and ready`);
  });
}

startServer();
