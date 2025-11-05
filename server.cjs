const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const DB_PATH = path.join(__dirname, 'db.json');

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to read database
function readDatabase() {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return { users: [] };
  }
}

// Helper function to write database
function writeDatabase(data) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing database:', error);
  }
}

// Get all users (without passwords)
app.get('/users', (req, res) => {
  const db = readDatabase();
  const usersWithoutPasswords = db.users.map(user => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
  res.json(usersWithoutPasswords);
});

// Get user by ID (without password)
app.get('/users/:id', (req, res) => {
  const db = readDatabase();
  const user = db.users.find(u => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const { password, ...userWithoutPassword } = user;
  res.json(userWithoutPassword);
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const db = readDatabase();
  const user = db.users.find(u => u.email === email);

  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const { password: _, ...userWithoutPassword } = user;
  res.json(userWithoutPassword);
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

  const db = readDatabase();

  // Check if user already exists
  const existingUser = db.users.find(u => u.email === email);
  if (existingUser) {
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
    achievements: []
  };

  db.users.push(newUser);
  writeDatabase(db);

  const { password: _, ...userWithoutPassword } = newUser;
  res.status(201).json(userWithoutPassword);
});

// Update user
app.patch('/users/:id', async (req, res) => {
  const db = readDatabase();
  const userIndex = db.users.findIndex(u => u.id === req.params.id);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Update user (keep password unchanged)
  const updatedUser = { ...db.users[userIndex], ...req.body };
  db.users[userIndex] = updatedUser;
  writeDatabase(db);

  const { password, ...userWithoutPassword } = updatedUser;
  res.json(userWithoutPassword);
});

// Delete user
app.delete('/users/:id', (req, res) => {
  const db = readDatabase();
  const userIndex = db.users.findIndex(u => u.id === req.params.id);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  db.users.splice(userIndex, 1);
  writeDatabase(db);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});