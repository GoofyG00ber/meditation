# Meditation App - Production Deployment Guide

This guide will help you deploy the meditation app to production using MySQL database.

## Prerequisites

- Node.js 20+ or 22+
- MySQL 8.0+
- npm or yarn

## Database Setup

### 1. Create MySQL Database

Connect to your MySQL server and run the schema:

```bash
mysql -u root -p < database_schema.sql
```

Or run the SQL commands manually from `database_schema.sql`.

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Database Configuration
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=meditation_app
DB_PORT=3306

# Server Configuration
PORT=3001
NODE_ENV=production
```

### 3. Migrate Existing Data (Optional)

If you have existing data in `db.json`, run the migration script:

```bash
node migrate.cjs
```

## Installation & Deployment

### 1. Install Dependencies

```bash
npm install
```

### 2. Build the Frontend

```bash
npm run build
```

### 3. Start the Production Server

```bash
# Start both API and serve built files
npm run dev:all
```

Or for production:

```bash
# API server
npm run api

# Serve built files (you'll need a web server like nginx or apache)
# Copy dist/ contents to your web server
```

## Production Server Setup

### Using PM2 (Recommended)

```bash
npm install -g pm2
pm2 start server.cjs --name "meditation-api"
pm2 startup
pm2 save
```

### Using Docker

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3001

CMD ["node", "server.cjs"]
```

Build and run:

```bash
docker build -t meditation-app .
docker run -p 3001:3001 --env-file .env meditation-app
```

## Database Schema

The MySQL database includes:

- **users** table: Stores user accounts with JSON fields for complex data
  - `id` (VARCHAR): Primary key
  - `username`, `email`: User credentials
  - `password`: Bcrypt hashed password
  - `points`, `level`: Gamification data
  - `achievements`, `badges`: JSON arrays
  - `exercise_counts`, `features_tried`: JSON objects/arrays
  - `questionnaire_results`: JSON array of completed questionnaires (for backward compatibility)
  - `has_completed_questionnaire`: Boolean flag

- **questionnaire_responses** table: Dedicated table for questionnaire data
  - `id` (INT): Auto-increment primary key
  - `user_id` (VARCHAR): Foreign key to users table
  - `answers` (JSON): Complete answer data
  - `total_points` (INT): Calculated score
  - `totem_animal` (VARCHAR): Assigned totem animal
  - `created_at` (TIMESTAMP): When completed

- **sessions** table: For future session management (optional)

## API Endpoints

- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Register new user
- `PATCH /users/:id` - Update user
- `DELETE /users/:id` - Delete user
- `POST /login` - User authentication
- `GET /questionnaire-responses` - Get all questionnaire responses (admin)
- `GET /users/:id/questionnaire-responses` - Get user's questionnaire responses
- `POST /questionnaire-responses` - Save questionnaire response
- `GET /questionnaire-stats` - Get questionnaire analytics

## Security Notes

- Passwords are hashed with bcrypt
- JSON fields store complex data structures
- CORS is enabled for frontend communication
- Input validation on all endpoints

## Troubleshooting

### Database Connection Issues

1. Check your `.env` file configuration
2. Ensure MySQL server is running
3. Verify database and user permissions

### Migration Issues

1. Ensure `db.json` exists in the root directory
2. Check MySQL user has INSERT permissions
3. Run migration script with proper environment variables

### Build Issues

1. Clear node_modules: `rm -rf node_modules && npm install`
2. Clear build cache: `npm run build-only`
3. Check Node.js version compatibility