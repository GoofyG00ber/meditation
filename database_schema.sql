-- MySQL Database Schema for Meditation App
-- Run this script to create the database and tables

CREATE DATABASE IF NOT EXISTS meditation_app;
USE meditation_app;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    points INT DEFAULT 0,
    level INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    achievements JSON DEFAULT ('[]'),
    badges JSON DEFAULT ('[]'),
    exercise_counts JSON DEFAULT ('{}'),
    features_tried JSON DEFAULT ('[]'),
    questionnaire_results JSON DEFAULT ('[]'),
    has_completed_questionnaire BOOLEAN DEFAULT FALSE,
    INDEX idx_email (email),
    INDEX idx_username (username)
);

-- Questionnaire responses table
CREATE TABLE IF NOT EXISTS questionnaire_responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL,
    answers JSON NOT NULL,
    total_points INT NOT NULL,
    totem_animal VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_totem_animal (totem_animal),
    INDEX idx_created_at (created_at)
);

-- Insert sample questionnaire data (optional, for testing)
INSERT INTO questionnaire_responses (user_id, answers, total_points, totem_animal, created_at) VALUES
('1764014720038', '{"0":1,"1":2,"2":5,"3":2,"4":3,"5":3,"6":1,"7":3,"8":2,"9":"Víz (érzelem, áramlás)","10":"kutya"}', 22, 'delfin', '2025-11-25 20:54:44'),
('1764014720038', '{"0":2,"1":2,"2":5,"3":2,"4":2,"5":3,"6":2,"7":2,"8":3,"9":"Víz (érzelem, áramlás)","10":"cica"}', 23, 'delfin', '2025-11-25 20:56:27')
ON DUPLICATE KEY UPDATE id = id;

-- Insert demo data (optional, for testing)
INSERT INTO users (id, username, email, password, points, level, created_at, achievements) VALUES
('1', 'demo_user', 'demo@meditation.com', '$2b$10$2f1OjRjUxF3sZMAk4v17v.AnrRLIhxF5TUqK5.wpmNKKHlb30X/yK', 180, 2, '2025-11-01 10:00:00', '["first_game", "stress_buster"]'),
('fe3d', 'imre', 'asd@asd.hu', '$2b$10$SbZsoZ.ya8JGK8qL8m7Aq.9YkpVCKqXTvNGsCV0PT9BtuRXzetpzW', 24, 1, '2025-11-05 15:48:15', '["stress_buster"]'),
('1762939411714', 'imer', 'asdfasmc@gmail.com', '$2b$10$.mlNHD2N.Cl2x3bInAGqTug5203EHkAD.HXL3TI0OYN9Phxym5d3.', 0, 1, '2025-11-12 09:23:31', '[]'),
('1763573641520', 'asder', 'asder@a.hu', '$2b$10$K.ggHzeX3DgWDV8sVhX/M.w7g7djLPUJ.X81cOlUS0Rot.kPoikja', 260, 3, '2025-11-19 17:34:01', '[]'),
('1764014720038', 'perec', 'm@m.hu', '$2b$10$WwzqojZaRlpTXLj1O3iz2OL7cN5ZMyVtJqezjaNmMr7fJ12S1F.MO', 280, 3, '2025-11-24 20:05:20', '[]')
ON DUPLICATE KEY UPDATE id = id;