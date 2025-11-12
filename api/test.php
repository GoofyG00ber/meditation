<?php
// Simple database connection test
require_once 'config.php';

try {
    // Test query
    $stmt = $pdo->query('SELECT COUNT(*) as user_count FROM users');
    $result = $stmt->fetch();

    echo json_encode([
        'status' => 'success',
        'message' => 'Database connection successful!',
        'user_count' => $result['user_count'],
        'database' => $db_name,
        'host' => $db_host
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Database connection failed: ' . $e->getMessage(),
        'database' => $db_name,
        'host' => $db_host
    ]);
}
