<?php
require_once 'config.php';

// Get request method and path
$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = str_replace('/api', '', $path);

// Route requests
if ($path === '/login' && $method === 'POST') {
    handleLogin($pdo);
} elseif ($path === '/users' && $method === 'GET') {
    getUsers($pdo);
} elseif ($path === '/users' && $method === 'POST') {
    registerUser($pdo);
} elseif (preg_match('/^\/users\/(.+)$/', $path, $matches) && $method === 'GET') {
    getUser($pdo, $matches[1]);
} elseif (preg_match('/^\/users\/(.+)$/', $path, $matches) && $method === 'PATCH') {
    updateUser($pdo, $matches[1]);
} elseif (preg_match('/^\/users\/(.+)$/', $path, $matches) && $method === 'DELETE') {
    deleteUser($pdo, $matches[1]);
} elseif ($path === '/questionnaire-responses' && $method === 'POST') {
    saveQuestionnaireResponse($pdo);
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Not found']);
}

// Handle login
function handleLogin($pdo) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (empty($data['email']) || empty($data['password'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Email and password are required']);
        return;
    }
    
    try {
        $stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?');
        $stmt->execute([$data['email']]);
        $user = $stmt->fetch();
        
        if (!$user) {
            http_response_code(401);
            echo json_encode(['error' => 'Invalid email or password']);
            return;
        }
        
        if (!password_verify($data['password'], $user['password'])) {
            http_response_code(401);
            echo json_encode(['error' => 'Invalid email or password']);
            return;
        }
        
        // Remove password from response
        unset($user['password']);
        
        // Decode JSON fields
        $user['achievements'] = json_decode($user['achievements'], true);
        $user['badges'] = json_decode($user['badges'], true);
        $user['exerciseCounts'] = json_decode($user['exerciseCounts'], true);
        $user['featuresTried'] = json_decode($user['featuresTried'], true);
        $user['questionnaireResults'] = json_decode($user['questionnaireResults'], true);
        $user['hasCompletedQuestionnaire'] = (bool) $user['hasCompletedQuestionnaire'];
        
        echo json_encode($user);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Database error']);
    }
}

// Get all users (PROTECTED - requires authentication)
function getUsers($pdo) {
    // Check for authentication header
    $authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    $apiKey = $_SERVER['HTTP_X_API_KEY'] ?? '';

    // Allow requests from same origin (frontend)
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $referer = $_SERVER['HTTP_REFERER'] ?? '';

    $allowedOrigins = [
        'https://inner-bloom.hu',
        'https://www.inner-bloom.hu',
        'http://localhost:3000',
        'http://localhost:5173',
        'http://localhost:3001'
    ];

    $isAllowed = false;
    foreach ($allowedOrigins as $allowed) {
        if (strpos($origin, $allowed) === 0 || strpos($referer, $allowed) === 0) {
            $isAllowed = true;
            break;
        }
    }

    if (!$isAllowed) {
        http_response_code(403);
        echo json_encode(['error' => 'Access denied. Direct API access not allowed.']);
        return;
    }

    try {
        $stmt = $pdo->query('SELECT id, username, email, points, level, created_at AS createdAt, achievements, badges, exercise_counts AS exerciseCounts, features_tried AS featuresTried, questionnaire_results AS questionnaireResults, has_completed_questionnaire AS hasCompletedQuestionnaire FROM users');
        $users = $stmt->fetchAll();
        
        foreach ($users as &$user) {
            $user['achievements'] = json_decode($user['achievements'], true);
            $user['badges'] = json_decode($user['badges'], true);
            $user['exerciseCounts'] = json_decode($user['exerciseCounts'], true);
            $user['featuresTried'] = json_decode($user['featuresTried'], true);
            $user['questionnaireResults'] = json_decode($user['questionnaireResults'], true);
            $user['hasCompletedQuestionnaire'] = (bool) $user['hasCompletedQuestionnaire'];
        }
        
        echo json_encode($users);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Database error']);
    }
}

// Get single user
function getUser($pdo, $id) {
    try {
        $stmt = $pdo->prepare('SELECT id, username, email, points, level, created_at AS createdAt, achievements, badges, exercise_counts AS exerciseCounts, features_tried AS featuresTried, questionnaire_results AS questionnaireResults, has_completed_questionnaire AS hasCompletedQuestionnaire FROM users WHERE id = ?');
        $stmt->execute([$id]);
        $user = $stmt->fetch();
        
        if (!$user) {
            http_response_code(404);
            echo json_encode(['error' => 'User not found']);
            return;
        }
        
        $user['achievements'] = json_decode($user['achievements'], true);
        $user['badges'] = json_decode($user['badges'], true);
        $user['exerciseCounts'] = json_decode($user['exerciseCounts'], true);
        $user['featuresTried'] = json_decode($user['featuresTried'], true);
        $user['questionnaireResults'] = json_decode($user['questionnaireResults'], true);
        $user['hasCompletedQuestionnaire'] = (bool) $user['hasCompletedQuestionnaire'];
        
        echo json_encode($user);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Database error']);
    }
}

// Register new user
function registerUser($pdo) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (empty($data['username']) || empty($data['email']) || empty($data['password'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Username, email, and password are required']);
        return;
    }
    
    if (strlen($data['password']) < 6) {
        http_response_code(400);
        echo json_encode(['error' => 'Password must be at least 6 characters long']);
        return;
    }
    
    try {
        // Check if user exists
        $stmt = $pdo->prepare('SELECT id FROM users WHERE email = ?');
        $stmt->execute([$data['email']]);
        if ($stmt->fetch()) {
            http_response_code(409);
            echo json_encode(['error' => 'User with this email already exists']);
            return;
        }
        
        // Create user
        $hashedPassword = password_hash($data['password'], PASSWORD_BCRYPT);
        $userId = (string) (time() * 1000);
        
        $stmt = $pdo->prepare('INSERT INTO users (id, username, email, password, points, level, achievements, badges, exerciseCounts, featuresTried, questionnaireResults, hasCompletedQuestionnaire) VALUES (?, ?, ?, ?, 0, 1, ?, ?, ?, ?, ?, ?)');
        $stmt->execute([
            $userId,
            $data['username'],
            $data['email'],
            $hashedPassword,
            json_encode([]),
            json_encode([]),
            json_encode(new stdClass()),
            json_encode([]),
            json_encode([]),
            0
        ]);
        
        echo json_encode([
            'id' => $userId,
            'username' => $data['username'],
            'email' => $data['email'],
            'points' => 0,
            'level' => 1,
            'createdAt' => date('c'),
            'achievements' => [],
            'badges' => [],
            'exerciseCounts' => new stdClass(),
            'featuresTried' => [],
            'questionnaireResults' => [],
            'hasCompletedQuestionnaire' => false
        ]);
        http_response_code(201);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
    }
}

// Update user
function updateUser($pdo, $id) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    try {
        // Check if user exists
        $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');
        $stmt->execute([$id]);
        if (!$stmt->fetch()) {
            http_response_code(404);
            echo json_encode(['error' => 'User not found']);
            return;
        }
        
        // Build update query
        $updates = [];
        $values = [];
        
        if (isset($data['username'])) {
            $updates[] = 'username = ?';
            $values[] = $data['username'];
        }
        if (isset($data['email'])) {
            $updates[] = 'email = ?';
            $values[] = $data['email'];
        }
        if (isset($data['points'])) {
            $updates[] = 'points = ?';
            $values[] = $data['points'];
        }
        if (isset($data['level'])) {
            $updates[] = 'level = ?';
            $values[] = $data['level'];
        }
        if (isset($data['achievements'])) {
            $updates[] = 'achievements = ?';
            $values[] = json_encode($data['achievements']);
        }
        if (isset($data['badges'])) {
            $updates[] = 'badges = ?';
            $values[] = json_encode($data['badges']);
        }
        if (isset($data['exerciseCounts'])) {
            $updates[] = 'exerciseCounts = ?';
            $values[] = json_encode($data['exerciseCounts']);
        }
        if (isset($data['featuresTried'])) {
            $updates[] = 'featuresTried = ?';
            $values[] = json_encode($data['featuresTried']);
        }
        if (isset($data['questionnaireResults'])) {
            $updates[] = 'questionnaireResults = ?';
            $values[] = json_encode($data['questionnaireResults']);
        }
        if (isset($data['hasCompletedQuestionnaire'])) {
            $updates[] = 'hasCompletedQuestionnaire = ?';
            $values[] = $data['hasCompletedQuestionnaire'] ? 1 : 0;
        }
        
        if (empty($updates)) {
            http_response_code(400);
            echo json_encode(['error' => 'No fields to update']);
            return;
        }
        
        $values[] = $id;
        $sql = 'UPDATE users SET ' . implode(', ', $updates) . ' WHERE id = ?';
        $stmt = $pdo->prepare($sql);
        $stmt->execute($values);
        
        // Fetch updated user
        $stmt = $pdo->prepare('SELECT id, username, email, points, level, created_at AS createdAt, achievements, badges, exercise_counts AS exerciseCounts, features_tried AS featuresTried, questionnaire_results AS questionnaireResults, has_completed_questionnaire AS hasCompletedQuestionnaire FROM users WHERE id = ?');
        $stmt->execute([$id]);
        $user = $stmt->fetch();
        
        $user['achievements'] = json_decode($user['achievements'], true);
        $user['badges'] = json_decode($user['badges'], true);
        $user['exerciseCounts'] = json_decode($user['exerciseCounts'], true);
        $user['featuresTried'] = json_decode($user['featuresTried'], true);
        $user['questionnaireResults'] = json_decode($user['questionnaireResults'], true);
        $user['hasCompletedQuestionnaire'] = (bool) $user['hasCompletedQuestionnaire'];
        
        echo json_encode($user);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Database error']);
    }
}

// Delete user
function deleteUser($pdo, $id) {
    try {
        $stmt = $pdo->prepare('DELETE FROM users WHERE id = ?');
        $stmt->execute([$id]);
        
        if ($stmt->rowCount() === 0) {
            http_response_code(404);
            echo json_encode(['error' => 'User not found']);
            return;
        }
        
        http_response_code(204);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Database error']);
    }
}

// Save questionnaire response
function saveQuestionnaireResponse($pdo) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (empty($data['userId']) || empty($data['answers']) || !isset($data['totalPoints']) || empty($data['totemAnimal'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing required fields']);
        return;
    }
    
    try {
        $stmt = $pdo->prepare('INSERT INTO questionnaire_responses (user_id, answers, total_points, totem_animal) VALUES (?, ?, ?, ?)');
        $stmt->execute([
            $data['userId'],
            json_encode($data['answers']),
            $data['totalPoints'],
            $data['totemAnimal']
        ]);
        
        echo json_encode(['success' => true]);
        http_response_code(201);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Database error']);
    }
}
