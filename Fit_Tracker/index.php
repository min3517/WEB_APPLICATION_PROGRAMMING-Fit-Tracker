<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fit-tracker Pro</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=0d6a91ad860653f340f49b8c89f7b062&libraries=services,places"></script>
    <link rel="stylesheet" href="style_v2.css">
    
</head>
<body> 

    <div id="login-section" style="display:none;">
        <div class="auth-container">
            <h1>Fit-tracker</h1>
            <div id="loginBox">
                <h2>로그인하여 시작하세요</h2>
                <form id="loginForm" class="auth-form">
                    <input type="text" id="loginId" placeholder="아이디" required>
                    <input type="password" id="loginPw" placeholder="비밀번호" required>
                    <button type="submit" class="btn-primary">로그인</button>
                </form>
                <div style="margin-top: 15px;">
                    <button type="button" onclick="cancelLogin()" style="background:none; border:none; color:#666; cursor:pointer; text-decoration:underline;">메인으로 돌아가기</button>
                </div>
                <p class="auth-link">계정이 없으신가요? <span id="go-register">회원가입</span></p>
            </div>
            <div id="registerBox" style="display:none;">
                <h2>새 계정 만들기</h2>
                <form id="registerForm" class="auth-form">
                    <input type="text" id="regId" placeholder="아이디" required>
                    <input type="password" id="regPw" placeholder="비밀번호" required>
                    <input type="text" id="regName" placeholder="이름" required>
                    <div style="display:flex; gap:10px;">
                        <select id="regGender" style="flex:1;"><option value="">성별 선택</option><option value="M">남성</option><option value="F">여성</option></select>
                        <input type="number" id="regWeight" placeholder="체중 (kg)" style="flex:1;" required>
                        <input type="number" id="regHeight" placeholder="신장 (cm)" style="flex:1;" required>
                    </div>
                    <div style="text-align:left; margin-bottom:-10px; margin-left:5px; font-size:13px; color:#666;">생년월일</div>
                    <input type="date" id="regBirth" min="1900-01-01" max="2099-12-31" required>
                    <button type="submit" class="btn-primary">가입하기</button>
                </form>
                <p class="auth-link">이미 계정이 있으신가요? <span id="go-login">로그인</span></p>
            </div>
        </div>
    </div>

    <div id="app-section">
        <nav id="navbar">
            <div class="nav-container">
                <div class="logo"><a href="#" onclick="switchTab('home')">Fit-tracker</a></div>
                <ul class="nav-links">
                    <li><a href="#" onclick="switchTab('home')" id="nav-home" class="active-tab">홈</a></li>
                    
                    <li class="dropdown-parent auth-menu">
                        <a href="javascript:void(0);" onclick="switchTab('health')" id="nav-health">건강관리 ▾</a>
                        <div class="dropdown-menu">
                            <a href="javascript:void(0);" onclick="scrollToSection('health', 'sub-exercise')">운동 기록</a>
                            <a href="javascript:void(0);" onclick="scrollToSection('health', 'sub-diet')">식단 기록</a>
                        </div>
                    </li>

                    <li class="dropdown-parent auth-menu">
                        <a href="javascript:void(0);" onclick="switchTab('diary')" id="nav-diary">다이어리 ▾</a>
                        <div class="dropdown-menu">
                            <a href="javascript:void(0);" onclick="scrollToSection('diary', 'sub-weather')">주간 날씨</a>
                            <a href="javascript:void(0);" onclick="scrollToSection('diary', 'sub-fortune')">오늘의 운세</a>
                            <a href="javascript:void(0);" onclick="scrollToSection('diary', 'sub-today')">오늘의 기록</a>
                            <a href="javascript:void(0);" onclick="scrollToSection('diary', 'sub-past')">지난 기록</a>
                        </div>
                    </li>

                    <li class="dropdown-parent auth-menu">
                        <a href="javascript:void(0);" onclick="switchTab('mypage')" id="nav-mypage">마이페이지 ▾</a>
                        <div class="dropdown-menu">
                            <a href="javascript:void(0);" onclick="scrollToSection('mypage', 'sub-profile')">프로필</a>
                            <a href="javascript:void(0);" onclick="scrollToSection('mypage', 'sub-calendar')">캘린더</a>
                            <a href="javascript:void(0);" onclick="scrollToSection('mypage', 'sub-weight')">체중 그래프</a>
                        </div>
                    </li>
                    
                    <li class="auth-menu"><span id="userNameDisplay" style="font-weight:bold; color:#0056b3; margin-left:15px;"></span></li>
                    <li class="auth-menu"><a href="#" id="logoutBtn" style="color:red;" onclick="handleLogout()">로그아웃</a></li>

                    <li class="guest-menu"><a href="#" onclick="showLoginScreen()" style="color:#0066cc; font-weight:bold;">로그인</a></li>
                </ul>
            </div>
        </nav>

        <main>
            <div id="tab-home" class="tab-content active">
                <?php include 'tabs/home.php'; ?>
            </div>

            <div id="tab-health" class="tab-content">
                <?php include 'tabs/health.php'; ?>
            </div>

            <div id="tab-diary" class="tab-content">
                <?php include 'tabs/diary.php'; ?>
            </div>

            <div id="tab-mypage" class="tab-content">
                <?php include 'tabs/mypage.php'; ?>
            </div>
        </main>

        <footer>
            <p>&copy; 2025 Fit-tracker Project</p>
        </footer>
    </div>

    <script>
        
        document.getElementById('app-section').style.display = 'block';
        document.getElementById('login-section').style.display = 'none';

        function showLoginScreen() {
            document.getElementById('app-section').style.display = 'none';
            document.getElementById('login-section').style.display = 'flex';
        }

        function cancelLogin() {
            document.getElementById('login-section').style.display = 'none';
            document.getElementById('app-section').style.display = 'block';
        }

        function handleLogout() {
            if(confirm('로그아웃 하시겠습니까?')) {
                document.body.classList.remove('logged-in');
                document.getElementById('userNameDisplay').innerText = '';
                switchTab('home');
                alert('로그아웃 되었습니다.');
            }
        }

        function switchTab(tabName) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active-tab'));

            document.getElementById('tab-' + tabName).classList.add('active');
            
            const navBtn = document.getElementById('nav-' + tabName);
            if(navBtn) navBtn.classList.add('active-tab');

            if (tabName === 'home' && typeof map !== 'undefined' && map) {
                setTimeout(() => {
                    map.relayout();
                    if(typeof myLocation !== 'undefined' && myLocation) map.setCenter(myLocation); 
                }, 200);
            }

            if (tabName === 'diary') {
                setTimeout(() => {
                    if (typeof window.initDiary === 'function') {
                        window.initDiary();
                    }
                }, 100);
            }
            
            if (tabName === 'mypage') {
                setTimeout(() => {
                    if (typeof window.loadMyPageData === 'function') {
                        window.loadMyPageData();
                    }
                }, 100);
            }
        }

        function scrollToSection(tabName, sectionId) {
           const activeTab = document.querySelector('.tab-content.active');
           const targetTabId = 'tab-' + tabName;

           
            if (activeTab && activeTab.id === targetTabId) {
                executeScroll(sectionId);
            } else {
                switchTab(tabName);
                
                setTimeout(() => {
                    executeScroll(sectionId);
                }, 50);
            }
        }

        function executeScroll(id) {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100; // 네비게이션 높이 보정
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

        const loginBox = document.getElementById('loginBox');
        const registerBox = document.getElementById('registerBox');
        document.getElementById('go-register').onclick = () => { loginBox.style.display = 'none'; registerBox.style.display = 'block'; };
        document.getElementById('go-login').onclick = () => { registerBox.style.display = 'none'; loginBox.style.display = 'block'; };
    </script>
    <script src="food_data.js"></script>
    <script src="exercise_data.js"></script>
    <script src="fortune_data.js"></script>
    <script src="script_v3.js"></script>
</body>

</html>
