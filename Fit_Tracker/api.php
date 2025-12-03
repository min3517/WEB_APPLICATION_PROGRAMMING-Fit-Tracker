<?php
error_reporting(0); 
ini_set('display_errors', 0);

header('Content-Type: application/json');
require 'db.php';
session_start();

$action = $_GET['action'] ?? '';
$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

try {
    if ($method === 'POST') {
        // 회원가입
        if ($action === 'register') {
            // 중복 아이디 체크
            $check = $db->prepare("SELECT count(*) FROM users WHERE user_id = ?");
            $check->execute([$input['user_id']]);
            if ($check->fetchColumn() > 0) {
                echo json_encode(['status' => 'error', 'message' => '이미 존재하는 아이디입니다.']);
                exit;
            }
            
            $stmt = $db->prepare("INSERT INTO users (user_id, password, name, gender, birthdate, weight, height, activity_level, reg_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, date('now'))");
            $stmt->execute([
                $input['user_id'], 
                $input['password'], 
                $input['name'], 
                $input['gender'], 
                $input['birthdate'], 
                $input['weight'],
                $input['height'],
                null // 활동 레벨 초기값 = null
            ]);
            
            // 가입 시점 체중
            $stmt2 = $db->prepare("INSERT INTO weight_logs (user_id, date, weight) VALUES (?, date('now'), ?)");
            $stmt2->execute([$input['user_id'], $input['weight']]);

            echo json_encode(['status' => 'success']);
        }
        // 로그인
        elseif ($action === 'login') {
            $stmt = $db->prepare("SELECT * FROM users WHERE user_id = ? AND password = ?");
            $stmt->execute([$input['user_id'], $input['password']]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($user) {
                $_SESSION['user_id'] = $user['user_id'];
                echo json_encode(['status' => 'success', 'user' => $user]);
            } else {
                echo json_encode(['status' => 'fail', 'message' => '아이디 또는 비밀번호 오류']);
            }
        }
        // 로그아웃
        elseif ($action === 'logout') {
            session_destroy();
            echo json_encode(['status' => 'success']);
        }
        // 로그인 후 기능
        elseif (isset($_SESSION['user_id'])) {
            $uid = $_SESSION['user_id'];
            
            if ($action === 'save_food') {
                $stmt = $db->prepare("INSERT INTO food_logs (user_id, date, name, amount, kcal) VALUES (?, ?, ?, ?, ?)");
                $stmt->execute([$uid, $input['date'], $input['name'], $input['amount'], $input['kcal']]);
                echo json_encode(['status' => 'success']);
            }
            elseif ($action === 'save_exercise') {
                $stmt = $db->prepare("INSERT INTO exercise_logs (user_id, date, name, minutes, kcal) VALUES (?, ?, ?, ?, ?)");
                $stmt->execute([$uid, $input['date'], $input['name'], $input['minutes'], $input['kcal']]);
                echo json_encode(['status' => 'success']);
            }
            elseif ($action === 'save_diary') {
                $stmt = $db->prepare("INSERT OR REPLACE INTO daily_logs (user_id, date, mood, diary) VALUES (?, ?, ?, ?)");
                $stmt->execute([$uid, $input['date'], $input['mood'], $input['diary']]);
                echo json_encode(['status' => 'success']);
            }
            elseif ($action === 'save_weight') {
                $db->beginTransaction();
                $stmt1 = $db->prepare("UPDATE users SET weight = ? WHERE user_id = ?");
                $stmt1->execute([$input['weight'], $uid]);
                $stmt2 = $db->prepare("INSERT INTO weight_logs (user_id, date, weight) VALUES (?, ?, ?)");
                $stmt2->execute([$uid, $input['date'], $input['weight']]);
                $db->commit();
                echo json_encode(['status' => 'success']);
            }
            elseif ($action === 'update_detail') {
                $stmt = $db->prepare("UPDATE users SET activity_level = ? WHERE user_id = ?");
                $stmt->execute([$input['activity_level'], $uid]);
                echo json_encode(['status' => 'success']);
            }
            elseif ($action === 'update_profile') {
                $stmt = $db->prepare("UPDATE users SET name=?, birthdate=?, height=?, weight=? WHERE user_id=?");
                $stmt->execute([
                    $input['name'], 
                    $input['birthdate'], 
                    $input['height'], 
                    $input['weight'], 
                    $uid
                ]);
                
                $stmt2 = $db->prepare("INSERT INTO weight_logs (user_id, date, weight) VALUES (?, date('now'), ?)");
                $stmt2->execute([$uid, $input['weight']]);

                echo json_encode(['status' => 'success']);
            } else {
                echo json_encode(['status' => 'error', 'message' => '로그인 필요']);
            }
        }
    } 
    elseif ($method === 'GET') {
        if (isset($_SESSION['user_id'])) {
            $uid = $_SESSION['user_id'];

            if ($action === 'get_user_info') {
                $stmt = $db->prepare("SELECT name, gender, birthdate, weight, height, activity_level, reg_date FROM users WHERE user_id = ?");
                $stmt->execute([$uid]);
                echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));
            }
            elseif ($action === 'get_daily_logs') {
                $date = $_GET['date'] ?? date('Y-m-d');
                $foods = $db->prepare("SELECT * FROM food_logs WHERE user_id = ? AND date = ?");
                $foods->execute([$uid, $date]);
                $exercises = $db->prepare("SELECT * FROM exercise_logs WHERE user_id = ? AND date = ?");
                $exercises->execute([$uid, $date]);
                $diary = $db->prepare("SELECT mood, diary FROM daily_logs WHERE user_id = ? AND date = ?");
                $diary->execute([$uid, $date]);

                echo json_encode([
                    'meals' => $foods->fetchAll(PDO::FETCH_ASSOC),
                    'exercises' => $exercises->fetchAll(PDO::FETCH_ASSOC),
                    'diary' => $diary->fetch(PDO::FETCH_ASSOC)
                ]);
            }
            elseif ($action === 'get_all_diaries') {
                $uid = $_SESSION['user_id']; 
                $stmt = $db->prepare("SELECT * FROM daily_logs WHERE user_id = ? ORDER BY date DESC");
                $stmt->execute([$uid]);
                echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
            }
            elseif ($action === 'get_weight_history') {
                $stmt = $db->prepare("SELECT date, weight FROM weight_logs WHERE user_id = ? ORDER BY date ASC");
                $stmt->execute([$uid]);
                echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
            }
            elseif ($action === 'get_mypage_data') {
                $uid = $_SESSION['user_id'];

                $stmtUser = $db->prepare("SELECT name, birthdate, height, weight as current_weight, reg_date FROM users WHERE user_id = ?");
                $stmtUser->execute([$uid]);
                $userInfo = $stmtUser->fetch(PDO::FETCH_ASSOC);

                if (!$userInfo) {
                    session_destroy(); 
                    echo json_encode(['status' => 'error', 'message' => 'User not found']);
                    exit;
                }

                // 체중 기록
                $stmtWeight = $db->prepare("SELECT date, weight FROM weight_logs WHERE user_id = ? GROUP BY date");
                $stmtWeight->execute([$uid]);
                $weights = $stmtWeight->fetchAll(PDO::FETCH_ASSOC);

                // 일별 총 섭취 칼로리
                $stmtFood = $db->prepare("SELECT date, SUM(kcal) as consumed FROM food_logs WHERE user_id = ? GROUP BY date");
                $stmtFood->execute([$uid]);
                $foodLogs = $stmtFood->fetchAll(PDO::FETCH_ASSOC);
                
                // 소모 칼로리 
                $stmtEx = $db->prepare("SELECT date, SUM(kcal) as burned FROM exercise_logs WHERE user_id = ? GROUP BY date");
                $stmtEx->execute([$uid]);
                $exerciseLogs = $stmtEx->fetchAll(PDO::FETCH_ASSOC);

                // 일기 이모지 
                $stmtDiary = $db->prepare("SELECT date, mood FROM daily_logs WHERE user_id = ?");
                $stmtDiary->execute([$uid]);
                $diaryLogs = $stmtDiary->fetchAll(PDO::FETCH_ASSOC);

                echo json_encode([
                    'status' => 'success',
                    'userInfo' => $userInfo,
                    'weights' => $weights,
                    'foodLogs' => $foodLogs,       
                    'exerciseLogs' => $exerciseLogs,
                    'diaryLogs' => $diaryLogs 
                ]);
            }
            elseif ($action === 'logout') {
                session_destroy();
                echo json_encode(['status' => 'success']);
            }
        } else {
            echo json_encode(['status' => 'error', 'message' => '로그인 필요']);
        }
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}

?>
