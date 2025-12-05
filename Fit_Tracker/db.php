<?php
// db.php
// PRIMARY KEY: 중복될 수 없는 값, 다른 테이블이 참조할 때 쓰임
try {
    $db = new PDO('sqlite:fit_tracker.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 1. 사용자 테이블
    $db->exec("CREATE TABLE IF NOT EXISTS users (
        user_id TEXT PRIMARY KEY,
        password TEXT NOT NULL,
        name TEXT,
        gender TEXT,
        birthdate TEXT,
        weight REAL,
        height REAL, 
        activity_level REAL,
        reg_date TEXT NOT NULL
    )");

    // 2. 일일 기록
    $db->exec("CREATE TABLE IF NOT EXISTS daily_logs (
        daily_log_id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id TEXT,
        date TEXT,
        mood TEXT,
        diary TEXT,
        UNIQUE(user_id, date)
    )");

    // 3. 체중 기록
    $db->exec("CREATE TABLE IF NOT EXISTS weight_logs (
        weight_log_id INTEGER PRIMARY KEY AUTOINCREMENT, 
        user_id TEXT,
        date TEXT, 
        weight REAL
    )");

    // 4. 식단 기록
    $db->exec("CREATE TABLE IF NOT EXISTS food_logs (
        food_log_id INTEGER PRIMARY KEY AUTOINCREMENT, 
        user_id TEXT,
        date TEXT,
        name TEXT,
        amount REAL,
        kcal REAL
    )");

    // 5. 운동 기록
    $db->exec("CREATE TABLE IF NOT EXISTS exercise_logs (
        exercise_log_id INTEGER PRIMARY KEY AUTOINCREMENT, 
        user_id TEXT,
        date TEXT,
        name TEXT,
        minutes REAL,
        kcal REAL
    )");

} catch (PDOException $e) {
    echo "DB 연결 실패: " . $e->getMessage();
    exit;
}
?>