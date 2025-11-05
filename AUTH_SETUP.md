# Authentication & Points System Setup

## Overview
The meditation app now has a complete authentication and gamification system with points, levels, and achievements.

## Features Implemented

### 1. Authentication System
- **Login/Register**: Users can create accounts and log in
- **Guest Mode**: All content accessible without login
- **Profile Management**: User profiles with stats and achievements
- **Session Persistence**: User stays logged in using localStorage

### 2. Points & Leveling System
- **Experience Points**: Earn XP for completing meditation games
- **Level System**: 10 levels with increasing XP requirements
- **Progress Tracking**: Visual progress bar showing level advancement
- **Achievements**: Unlock achievements for milestones

### 3. Game Integration
- **Whack-A-Mole**: Base 10 points + 2 per score
  - Achievement: "Stress Buster" (complete game)
  - Achievement: "Whack Champion" (score ≥ 20)
- **Breathing Exercise**: 20 points + 5 per cycle completed
  - Achievement: "Breathing Master" (complete session)

### 4. Guest Notifications
- Guests see prompts to login/register after completing games
- Notifications explain benefits of creating an account

## Running the Application

### Start the Backend (JSON Server)
```bash
npm run api
```
This starts the JSON server on `http://localhost:3001`

### Start the Frontend (Vite Dev Server)
```bash
npm run dev
```
This starts the app on `http://localhost:5173`

### Run Both Simultaneously
Open two terminal windows:
1. Terminal 1: `npm run api`
2. Terminal 2: `npm run dev`

## User Flows

### New User Registration
1. Click "Bejelentkezés" in navbar
2. Click "Regisztráció" link
3. Fill in username, email, password
4. Submit → Automatically logged in and redirected to profile

### Existing User Login
1. Click "Bejelentkezés" in navbar
2. Enter email and password
3. Submit → Logged in and redirected to profile

### Demo Account
- Email: `demo@meditation.com`
- Password: `demo123`
- Already has 150 points, Level 2, and 2 achievements

### Playing Games as Guest
1. Navigate to Sessions → Stresszes vagyok → Whack-a-Mole
2. Play the game
3. After completion, see notification prompting to login
4. No points are awarded

### Playing Games as Logged-in User
1. Login first
2. Navigate to game
3. Play and complete game
4. See points notification showing XP earned
5. Points automatically added to profile
6. Check profile to see updated stats and progress

## Level System Details

### Level Thresholds
- Level 1: 0 XP
- Level 2: 100 XP
- Level 3: 250 XP
- Level 4: 450 XP
- Level 5: 700 XP
- Level 6: 1000 XP
- Level 7: 1400 XP
- Level 8: 1850 XP
- Level 9: 2400 XP
- Level 10: 3000 XP

### Points Calculation
**Whack-A-Mole:**
```
points = 10 + (score * 2)
Example: score of 15 = 10 + 30 = 40 points
```

**Breathing Exercise:**
```
points = 20 + (cycles * 5)
Example: 4 cycles = 20 + 20 = 40 points
```

## File Structure

### New Files Created
```
src/
├── stores/
│   └── auth.ts              # Pinia store for authentication
├── types/
│   └── user.ts              # User-related TypeScript types
├── utils/
│   └── points.ts            # Points calculation utilities
├── views/
│   ├── LoginView.vue        # Login page
│   ├── RegisterView.vue     # Registration page
│   └── ProfileView.vue      # User profile with stats
db.json                       # JSON server database
```

### Modified Files
```
src/
├── main.ts                  # Added Pinia
├── router/index.ts          # Added auth routes
├── components/
│   └── NavBar.vue           # Added login/profile links
├── views/feature/
│   ├── WhackAMoleView.vue   # Added points integration
│   └── BreathingView.vue    # Added points integration
package.json                  # Added json-server, pinia, api script
```

## Extending the System

### Adding Points to New Games
1. Import the auth store and utils:
```typescript
import { useAuthStore } from '../../stores/auth'
import { POINTS_CONFIG } from '../../utils/points'
```

2. Award points on game completion:
```typescript
if (authStore.isAuthenticated) {
  const points = 50 // or calculate based on performance
  authStore.addPoints(points)
  authStore.addAchievement('achievement_id')
}
```

3. Show guest notification if not logged in:
```typescript
else {
  showGuestNotification.value = true
}
```

### Adding New Achievements
1. Add achievement to `formatAchievement()` in ProfileView.vue
2. Call `authStore.addAchievement('new_achievement')` when earned
3. Achievement is automatically saved to user profile

### Adjusting Level Thresholds
Edit `LEVEL_THRESHOLDS` array in `src/utils/points.ts`

### Adjusting Points Values
Edit `POINTS_CONFIG` object in `src/utils/points.ts`

## API Endpoints (JSON Server)

- `GET /users` - List all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PATCH /users/:id` - Update user (points, level, achievements)
- `GET /users?email=X&password=Y` - Login query

## Security Notes

**⚠️ This is a development/demo implementation:**
- Passwords are stored in plain text
- No encryption or hashing
- No token-based authentication
- For production, implement:
  - Password hashing (bcrypt)
  - JWT tokens
  - Secure backend API
  - HTTPS
  - Input validation
  - CSRF protection

## Troubleshooting

### JSON Server Not Starting
- Check if port 3001 is available
- Try: `npx json-server --watch db.json --port 3001`

### Points Not Saving
- Ensure JSON server is running
- Check browser console for errors
- Verify db.json is writable

### User Not Staying Logged In
- Check localStorage in browser DevTools
- Clear localStorage and try again
- Ensure `loadUserFromStorage()` is called on app mount

## Future Enhancements

1. **Leaderboard**: Show top users by points/level
2. **Daily Challenges**: Bonus points for daily login/games
3. **Streak System**: Consecutive days playing
4. **Friend System**: Compare progress with friends
5. **Reward Shop**: Spend points on themes/features
6. **Achievement Badges**: Visual badges for accomplishments
7. **Social Sharing**: Share achievements on social media
8. **Profile Customization**: Avatars, themes, bios
