# PHP API for InnerBloom Meditation App

## Database Setup

### 1. Create MySQL Database
Run this SQL query in your MySQL database:

```sql
-- Create the users table
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(255) PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  points INT DEFAULT 0,
  level INT DEFAULT 1,
  createdAt DATETIME NOT NULL,
  achievements JSON DEFAULT ('[]')
);

-- Insert example data (optional)
INSERT INTO users (id, username, email, password, points, level, createdAt, achievements) VALUES
('1', 'demo_user', 'demo@meditation.com', '$2b$10$2f1OjRjUxF3sZMAk4v17v.AnrRLIhxF5TUqK5.wpmNKKHlb30X/yK', 180, 2, '2025-11-01 10:00:00', '[]');
```

### 2. Configure Database Connection

**Option A: Using .env file (Recommended)**
1. Copy `api/.env.example` to `api/.env`
2. Edit `api/.env` with your database credentials:
```env
DB_HOST=your-mysql-host.com
DB_USER=your-mysql-username
DB_PASSWORD=your-mysql-password
DB_NAME=your-database-name
DB_PORT=3306
```

**Option B: Using Hosting Control Panel**
Set these environment variables in your hosting control panel:
- `DB_HOST`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`

### 3. Upload Files
Upload the entire `api/` folder to your web server (FTP).

### 4. Configure .htaccess
Make sure `.htaccess` is uploaded (it should be in the `api/` folder).

### 5. Test Connection
Visit: `https://yourdomain.com/api/users`

You should see a JSON response with user data.

## API Endpoints

- `POST /api/login` - User login
- `POST /api/users` - Register new user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get specific user
- `PATCH /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Common Hosting Configurations

### Hostinger
```env
DB_HOST=mysql.hostinger.com
DB_USER=u123456789_dbuser
DB_PASSWORD=yourpassword
DB_NAME=u123456789_meditation
```

### SiteGround
```env
DB_HOST=localhost
DB_USER=yourusername_dbuser
DB_PASSWORD=yourpassword
DB_NAME=yourusername_meditation
```

### Bluehost
```env
DB_HOST=localhost
DB_USER=yourusername_dbuser
DB_PASSWORD=yourpassword
DB_NAME=yourusername_meditation
```

## Troubleshooting

1. **Database connection error**: Check your database credentials in `api/.env`
2. **404 errors**: Make sure `.htaccess` is uploaded and mod_rewrite is enabled
3. **CORS errors**: The API allows all origins by default for development
4. **Permission errors**: Make sure the `api/` folder has proper permissions (755)
