# 🚀 InnerBloom Deployment Checklist

## ✅ Pre-Deployment Setup

### 1. Database Setup
- [ ] Create MySQL database on your hosting provider
- [ ] Run the SQL query to create the `users` table (see README.md)
- [ ] Note down your database credentials:
  - Host: _______________
  - Username: _______________
  - Password: _______________
  - Database name: _______________

### 2. Configure API
- [ ] Edit `api/.env` with your database credentials
- [ ] Test database connection: `https://yourdomain.com/api/test.php`

### 3. Build Frontend
- [ ] Run `npm run build`
- [ ] Verify `dist/` folder is created

## 📁 File Upload Structure

```
yourdomain.com/
├── index.html          # From dist/
├── assets/            # From dist/assets/
│   ├── *.css
│   └── *.js
└── api/               # PHP API folder
    ├── .env           # Database config
    ├── .htaccess      # URL rewriting
    ├── config.php     # Database connection
    ├── index.php      # Main API handler
    └── test.php       # Connection test
```

## 🔧 Post-Upload Configuration

### 1. Update Frontend API URL
- [ ] In your hosting file manager, create/edit `.env.production`:
  ```
  VITE_API_URL=https://yourdomain.com/api
  ```

### 2. Verify Permissions
- [ ] Set `api/` folder permissions to 755
- [ ] Set `api/.env` permissions to 644

### 3. Test Endpoints
- [ ] `https://yourdomain.com/api/test.php` - Should show database connection success
- [ ] `https://yourdomain.com/api/users` - Should return user data or empty array

## 🐛 Troubleshooting

### Database Connection Issues
- Check `api/.env` credentials
- Verify database exists and user has permissions
- Check if your hosting blocks external MySQL connections

### API 404 Errors
- Ensure `.htaccess` is uploaded
- Check if mod_rewrite is enabled on your hosting
- Verify API folder structure

### CORS Issues
- The API allows all origins by default
- If needed, update CORS headers in `config.php`

### Frontend Not Loading
- Check browser console for errors
- Verify all files from `dist/` are uploaded
- Check `.env.production` is in the root directory

## 📞 Support

If you encounter issues:
1. Check the browser developer console (F12)
2. Test the API endpoints directly in your browser
3. Verify database connection with `test.php`
4. Check file permissions and upload paths