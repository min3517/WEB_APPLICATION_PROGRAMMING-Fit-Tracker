document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('submit', async (e) => {
        if (e.target && e.target.id === 'diaryFormNew') {
            e.preventDefault(); 

            const date = document.getElementById('diaryDate').value;
            const content = document.getElementById('diaryContent').value;
            const selectedMood = document.querySelector('input[name="mood"]:checked');

            if (!selectedMood) {
                alert('오늘의 기분을 선택해주세요!');
                return;
            }

            const payload = {
                date: date,
                mood: selectedMood.value,
                diary: content
            };

            try {
                const res = await fetch('api.php?action=save_diary', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const data = await res.json();

                if (data.status === 'success') {
                    alert('일기가 저장되었습니다! 🎉');
                    document.getElementById('diaryContent').value = ''; 
                    
                    const radios = document.querySelectorAll('input[name="mood"]');
                    radios.forEach(el => el.checked = false);
                    
                    loadDiaries(); 
                } else {
                    alert('저장 실패: ' + (data.message || '알 수 없는 오류'));
                }
            } catch (err) {
                console.error(err);
                alert("서버 통신 중 오류가 발생했습니다.");
            }
        }
    });


    // ==========================================
    // 전역 변수 및 설정 
    // ==========================================
    let currentUser = null; // 현재 로그인 사용자 정보
    let dailyData = { meals: [], exercises: [], diary: null }; // 일일 데이터
    let weightChartInstance = null;
    let calorieChartInstance = null;
    let allWeightData = []; 


    // 연령별 기본 권장 칼로리 
    const RECOMMENDED_CALORIES = {
        '19-29': { M: 2600, F: 2100 },
        '30-49': { M: 2400, F: 1900 },
        '50-64': { M: 2200, F: 1800 },
        '65-74': { M: 2000, F: 1600 },
        '75+':   { M: 1900, F: 1500 }
    };

    // 오늘 날짜
    const getTodayStr = () => {
        const d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // 나이 계산
    const calculateAge = (birthdate) => {
        const birth = new Date(birthdate);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
        return age;
    };

    // 목표 칼로리 계산 
    const getBaseTargetKcal = () => {
        if (!currentUser) return 2000;

        if (currentUser.height && currentUser.activity_level) {
            const weight = parseFloat(currentUser.weight);
            const height = parseFloat(currentUser.height);
            const age = calculateAge(currentUser.birthdate);
            const gender = currentUser.gender;
            const activity = parseFloat(currentUser.activity_level);

            // Mifflin-St Jeor
            let bmr = (10 * weight) + (6.25 * height) - (5 * age);
            if (gender === 'M') bmr += 5;
            else bmr -= 161;

            return Math.round(bmr * activity);
        }

        // 정보 부족 시 기본 테이블 사용
        const age = calculateAge(currentUser.birthdate);
        const gender = currentUser.gender || 'M'; 
        let ageGroup = '19-29';
        if (age >= 75) ageGroup = '75+';
        else if (age >= 65) ageGroup = '65-74';
        else if (age >= 50) ageGroup = '50-64';
        else if (age >= 30) ageGroup = '30-49';
        
        return RECOMMENDED_CALORIES[ageGroup][gender] || 2000;
    };

    // ==========================================
    // 인증 및 앱 상태 관리 
    // ==========================================
    const loginSection = document.getElementById('login-section');
    const appSection = document.getElementById('app-section');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    checkSession();

    async function checkSession() {
        try {
            const res = await fetch('api.php?action=get_user_info');
            const data = await res.json();
            
            // 로그인 성공
            if (data.user_id || data.name) { 
                currentUser = data;
                document.body.classList.add('logged-in'); 
                if(document.getElementById('userNameDisplay')) {
                    document.getElementById('userNameDisplay').textContent = `${currentUser.name}님`;
                }
                loadWeightHistory();
                loadDailyData();
                initDiary();
            } 
            // 로그인 실패
            else {
                document.body.classList.remove('logged-in'); 
            }
    
            // 공통
            loginSection.style.display = 'none';
            appSection.style.display = 'block';
    
            if(typeof window.initMap === 'function') window.initMap(); 
            if(typeof window.initYoutube === 'function') window.initYoutube();
    
        } catch (e) {
            console.error("세션 체크 실패:", e);
            loginSection.style.display = 'none';
            appSection.style.display = 'block';
            if(typeof window.initMap === 'function') window.initMap(); 
        }
    }
    // 앱 화면 표시 및 데이터 로드 
    function showApp() {
        loginSection.style.display = 'none';
        appSection.style.display = 'block';
        
        // 사용자 이름 표시
        const userNameDisplay = document.getElementById('userNameDisplay');
        if(currentUser && userNameDisplay) userNameDisplay.textContent = `${currentUser.name}님`;

        // 상세 설정 알람
        const alertBox = document.getElementById('detail-info-alert');
        if (alertBox) {
            if (!currentUser.activity_level) {
                alertBox.style.display = 'block';
            } else {
                alertBox.style.display = 'none';
                document.getElementById('detailActivity').value = currentUser.activity_level;
            }
        }

        loadWeightHistory(); // 
        loadDailyData();     // 
        
       if(typeof window.initMap === 'function') window.initMap(); 
       if(typeof window.initYoutube === 'function') window.initYoutube();
       
       initDiary();
    }

    function showLogin() {
        loginSection.style.display = 'flex';
        appSection.style.display = 'none';
    }

    // 로그인 처리 
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const payload = { 
            user_id: document.getElementById('loginId').value, 
            password: document.getElementById('loginPw').value 
        };
        
        try {
            const res = await fetch('api.php?action=login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (data.status === 'success') {
                currentUser = data.user;
                document.body.classList.add('logged-in'); 
            const addrInput = document.getElementById('address-input');
            if (addrInput) addrInput.value = '';
                showApp();
            } else {
                alert(data.message || "로그인 실패");
            }
        } catch (err) {
            alert("로그인 중 오류 발생");
        }
    });

    // 회원가입 처리 
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const payload = {
            user_id: document.getElementById('regId').value,
            password: document.getElementById('regPw').value,
            name: document.getElementById('regName').value,
            gender: document.getElementById('regGender').value,
            birthdate: document.getElementById('regBirth').value,
            weight: document.getElementById('regWeight').value,
            height: document.getElementById('regHeight').value 
        };

        try {
            const res = await fetch('api.php?action=register', { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload) 
            });
            const data = await res.json();
            if (data.status === 'success') {
                alert("가입 완료! 로그인해주세요.");
                location.reload();
            } else {
                alert(data.message || "가입 실패");
            }
        } catch (err) {
            alert("가입 처리 중 오류 발생");
        }
    });

    // 로그아웃 
    document.getElementById('logoutBtn').onclick = async () => {
        await fetch('api.php?action=logout');
        location.reload();
    };
    
    // 활동량 상세 설정 저장 
    const detailForm = document.getElementById('detailForm');
    if (detailForm) {
        document.getElementById('btn-open-detail').addEventListener('click', () => {
            const section = document.getElementById('detail-calc-section');
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        });

        detailForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const activity = document.getElementById('detailActivity').value;
            
            // DB 업데이트
            await fetch('api.php?action=update_detail', {
                method: 'POST',
                body: JSON.stringify({ activity_level: activity })
            });

            currentUser.activity_level = activity;
            alert('활동량 정보가 저장되었습니다.');
            document.getElementById('detail-calc-section').style.display = 'none';
            document.getElementById('detail-info-alert').style.display = 'none';
            updateSummary(); 
        });
    }

    // BMI 계산기
    const bmiForm = document.getElementById('bmiForm');
    if (bmiForm) {
        bmiForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const w = parseFloat(document.getElementById('bmiWeight').value);
            const h = parseFloat(document.getElementById('bmiHeight').value);
            if (w > 0 && h > 0) {
                const bmi = (w / ((h/100)**2)).toFixed(2);
                let status = bmi < 18.5 ? "저체중" : bmi < 23 ? "정상" : bmi < 25 ? "과체중" : "비만";
                document.getElementById('bmiResult').innerHTML = `BMI: <strong>${bmi}</strong> (${status})`;
            }
        });
    }

  
    // ==========================================
    // 체중 그래프 및 기록 
    // ==========================================
    const weightForm = document.getElementById('weightForm');
    const chartCanvas = document.getElementById('weightGraphCanvas');
    const chartFiltersContainer = document.getElementById('chartFilters');

    // 체중 데이터 로드 
    async function loadWeightHistory() {
        try {
            const res = await fetch('api.php?action=get_weight_history');
            allWeightData = await res.json(); // 전체 데이터 저장
            renderWeightChart(30); // 기본 30일
        } catch (e) {
            console.error("체중 데이터 로드 실패", e);
        }
    }

    // 체중 저장 
    if(weightForm) {
        document.getElementById('weightDate').value = getTodayStr();
        weightForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const date = document.getElementById('weightDate').value;
            const weight = document.getElementById('weightValue').value;
            
            const res = await fetch('api.php?action=save_weight', { 
                method: 'POST', 
                body: JSON.stringify({ date, weight }) 
            });
            const data = await res.json();

            if(data.status === 'success') {
                currentUser.weight = weight; // 현재 체중 갱신
                alert("체중 저장 완료");
                loadWeightHistory(); // 그래프 갱신
                updateSummary(); // 목표 칼로리 갱신
            } else {
                alert("저장 실패");
            }
        });
    }

    // 그래프 렌더링
    function renderWeightChart(filterDays = 30) {
        if (!chartCanvas || !allWeightData) return;
        
        const today = new Date();
        const filterDate = new Date();
        filterDate.setDate(today.getDate() - filterDays);
        
        // 날짜 필터
        const filteredData = allWeightData.filter(entry => {
            const entryDate = new Date(entry.date);
            return entryDate >= filterDate && entryDate <= today;
        }).sort((a, b) => new Date(a.date) - new Date(b.date));

        const labels = filteredData.map(d => d.date);
        const dataPoints = filteredData.map(d => d.weight);

        if(weightChartInstance) weightChartInstance.destroy();
        
        const ctx = chartCanvas.getContext('2d');
        weightChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: '내 체중 (kg)',
                    data: dataPoints,
                    borderColor: '#0066cc',
                    backgroundColor: 'rgba(0, 102, 204, 0.1)',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#0066cc',
                    pointRadius: 4,      
                    pointHoverRadius: 6,
                    fill: true,
                    tension: 0.1 
                }]
            },
            options: {
            responsive: true,
            maintainAspectRatio: false, 
            plugins: {
                legend: { display: false }, 
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                x: { 
                    title: { display: true, text: '날짜' },
                    ticks: {
                        maxRotation: 45, 
                        minRotation: 0
                    }
                },
                y: { 
                    title: { display: true, text: '체중 (kg)' },
                    beginAtZero: false, 
                    grace: '10%', 
                    
                    ticks: {
                        stepSize: 1,
                        precision: 0
                    }
                }
            }
        }
        });
    }
    
    // 기간 필터
    if (chartFiltersContainer) {
        chartFiltersContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' && e.target.classList.contains('filter-btn')) {
                chartFiltersContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active-filter'));
                e.target.classList.add('active-filter');
                const days = parseInt(e.target.dataset.days, 10);
                renderWeightChart(days);
            }
        });
    }

    async function loadDailyData() {
        const today = getTodayStr();
        try {
            const res = await fetch(`api.php?action=get_daily_logs&date=${today}`);
            dailyData = await res.json();
            renderLists(); 
        } catch (e) {
            console.error("일일 데이터 로드 실패", e);
        }
    }
    // ==========================================
    // 요약 및 원형 차트 업데이트
    // ==========================================
    function updateSummary() {
        const consumed = dailyData.meals.reduce((sum, m) => sum + parseFloat(m.kcal), 0);
        const burned = dailyData.exercises.reduce((sum, e) => sum + parseFloat(e.kcal), 0);
        
        const baseTarget = getBaseTargetKcal(); // 기본 권장량
        const totalTarget = baseTarget + burned; // 최종 목표 

        if(document.getElementById('consumeKcal')) {
            document.getElementById('consumeKcal').textContent = consumed.toFixed(0);
        }
        if(document.getElementById('burnKcal')) {
             document.getElementById('burnKcal').textContent = burned.toFixed(0);
        }
        
        // 섭취 칼로리
        if(document.getElementById('netConsumeKcal')) {
            document.getElementById('netConsumeKcal').textContent = consumed.toFixed(0);
        }

        if(document.getElementById('targetKcal')) {
            const baseStr = baseTarget.toFixed(0);
            const burnStr = burned.toFixed(0);
            const totalStr = totalTarget.toFixed(0);
            document.getElementById('targetKcal').textContent = 
                `(${baseStr} + ${burnStr} = ${totalStr})`;
            

        }

        renderCalorieChart(consumed, burned, totalTarget);
    }

    // 차트 그리기 
    function renderCalorieChart(consumed, burned, totalTarget) {
        const ctx = document.getElementById('calorieChart');
        if (!ctx) return;

        // 파란색 (섭취)
        const blueValue = Math.min(consumed, totalTarget);
        const blueRemaining = totalTarget - blueValue;

        // 초록색 (소모): 전체 목표 대비 소모량 비율
        const greenValue = Math.min(burned, totalTarget);
        const greenRemaining = totalTarget - greenValue;

        // 빨간색 (초과): 섭취 > 목표
        const excess = Math.max(0, consumed - totalTarget);
        const redRemaining = Math.max(0, totalTarget - excess); 

        if (calorieChartInstance) calorieChartInstance.destroy();

        calorieChartInstance = new Chart(ctx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['초과', '섭취', '소모'],
                datasets: [
                    {
                        label: '초과 섭취',
                        data: [excess, redRemaining],
                        backgroundColor: ['#dc3545', 'transparent'], 
                        borderWidth: 0,
                        circumference: 360,
                        rotation: -90, 
                        weight: 0.3 
                    },
                    {
                        label: '섭취 칼로리',
                        data: [blueValue, blueRemaining],
                        backgroundColor: ['#0066cc', '#e0e0e0'], 
                        borderWidth: 0,
                        circumference: 360,
                        rotation: -90,
                        weight: 0.5 
                    },
                    {
                        label: '소모 칼로리',
                        data: [greenValue, greenRemaining],
                        backgroundColor: ['#28a745', 'transparent'], 
                        borderWidth: 0,
                        circumference: 360,
                        rotation: -90,
                        weight: 0.3 
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                cutout: '40%',
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const val = context.raw;
                                if (context.datasetIndex === 0 && context.dataIndex === 1) return ''; 
                                if (context.datasetIndex === 1 && context.dataIndex === 1) return `잔여: ${val.toFixed(0)} kcal`;
                                if (context.datasetIndex === 2 && context.dataIndex === 1) return ''; 
                                return `${context.dataset.label}: ${val.toFixed(0)} kcal`;
                            }
                        }
                    }
                }
            }
        });
    }

    function renderLists() {
        const mList = document.getElementById('mealList');
        const eList = document.getElementById('exerciseList');
        mList.innerHTML = ''; 
        eList.innerHTML = '';

        dailyData.meals.forEach(m => {
            mList.innerHTML += `<li>${m.name} - ${m.amount}인분 (${parseFloat(m.kcal).toFixed(0)} kcal)</li>`;
        });

        let totalMins = 0;
        dailyData.exercises.forEach(e => {
            eList.innerHTML += `<li>${e.name} - ${e.minutes}분 (-${parseFloat(e.kcal).toFixed(0)} kcal)</li>`;
            totalMins += parseFloat(e.minutes);
        });

        const totalExEl = document.getElementById('totalExerciseMinutes');
        if(totalExEl) totalExEl.textContent = totalMins.toFixed(0);

        updateSummary();
    }

    // 식단 추가
    document.getElementById('mealForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('foodName').value;
        const amount = parseFloat(document.getElementById('foodAmount').value);
        
        const data = (typeof FOOD_DATA !== 'undefined') ? FOOD_DATA.find(i => i.name === name) : null;
        
        let kcal = 0;
        if (data) {
            kcal = data.kcal_per_unit * amount;
        } else {
            kcal = parseFloat(prompt("데이터에 없는 음식입니다. 총 칼로리(kcal)를 입력해주세요:")) || 0;
        }

        if(kcal > 0) {
            await fetch('api.php?action=save_food', { 
                method: 'POST', 
                body: JSON.stringify({ date: getTodayStr(), name, amount, kcal }) 
            });
            document.getElementById('mealForm').reset(); 
            loadDailyData();
        }
    });

    // 식단 직접 입력 
    document.getElementById('manualMealForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('manualFoodName').value;
        const kcal = parseFloat(document.getElementById('manualFoodKcal').value);
        const amount = 1; 
        if(kcal > 0) {
            await fetch('api.php?action=save_food', { 
                method: 'POST', 
                body: JSON.stringify({ date: getTodayStr(), name, amount, kcal }) 
            });
            document.getElementById('manualMealForm').reset(); 
            loadDailyData();
        }
    });

    // 운동 추가
    document.getElementById('exerciseForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('exerciseName').value;
        const mins = parseFloat(document.getElementById('exerciseMinutes').value);
        
        const data = (typeof EXERCISE_DATA !== 'undefined') ? EXERCISE_DATA.find(i => i.name === name) : null;
        let kcal = 0;

        if (data) {
            const weight = currentUser && currentUser.weight ? parseFloat(currentUser.weight) : 60;
            kcal = (data.mets * 3.5 * weight * mins) / 200;
        } else {
            kcal = parseFloat(prompt("데이터에 없는 운동입니다. 소모 칼로리(kcal)를 입력해주세요:")) || 0;
        }

        if(kcal > 0) {
            await fetch('api.php?action=save_exercise', { 
                method: 'POST', 
                body: JSON.stringify({ date: getTodayStr(), name, minutes: mins, kcal }) 
            });
            document.getElementById('exerciseForm').reset(); 
            loadDailyData();
        }
    });

    // 운동 직접 입력 
    document.getElementById('manualExerciseForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('manualExName').value;
        const kcal = parseFloat(document.getElementById('manualExKcal').value);
        const mins = parseFloat(document.getElementById('manualExMin').value);
        if(kcal > 0) {
            await fetch('api.php?action=save_exercise', { 
                method: 'POST', 
                body: JSON.stringify({ date: getTodayStr(), name, minutes: mins, kcal }) 
            });
            document.getElementById('manualExerciseForm').reset(); 
            loadDailyData();
        }
    });

    // 자동완성
    function setupAutocomplete(input, list, data, key) {
        input.addEventListener('input', () => {
            const val = input.value.trim().toLowerCase(); 
            list.innerHTML = '';
            if(val.length < 1) return;
            
            const filtered = data.filter(i => i.name.toLowerCase().includes(val)).slice(0, 10);
            
            filtered.forEach(item => {
                const li = document.createElement('li');
                if (key === 'kcal_per_unit') li.textContent = `${item.name} (${item[key]} kcal/인분)`;
                else li.textContent = `${item.name}`; 
                
                li.onclick = () => { input.value = item.name; list.innerHTML = ''; };
                list.appendChild(li);
            });
        });
        document.addEventListener('click', (e) => { if(e.target !== input) list.innerHTML = ''; });
    }

    if (typeof FOOD_DATA !== 'undefined') {
        setupAutocomplete(document.getElementById('foodName'), document.getElementById('foodSuggestions'), FOOD_DATA, 'kcal_per_unit');
    }
    if (typeof EXERCISE_DATA !== 'undefined') {
        setupAutocomplete(document.getElementById('exerciseName'), document.getElementById('exerciseSuggestions'), EXERCISE_DATA, 'mets');
    }

    // 스톱워치 
    let stopwatchTimer = null;
    let stopwatchSeconds = 0;
    let stopwatchRunning = false;
    const swDisplay = document.getElementById('stopwatchDisplay');
    const swBtn = document.getElementById('startStopBtn');
    const swReset = document.getElementById('resetBtn');

    if(swBtn && swReset) {
        swBtn.addEventListener('click', () => {
            if(!stopwatchRunning) { // 시작
                stopwatchRunning = true;
                swBtn.textContent = '중지';
                swBtn.className = 'running';
                swReset.textContent = 'RESET';
                stopwatchTimer = setInterval(() => {
                    stopwatchSeconds++;
                    updateStopwatchTime();
                }, 1000);
            } else { // 중지
                stopwatchRunning = false;
                clearInterval(stopwatchTimer);
                swBtn.textContent = '재시작';
                swBtn.className = 'paused';
                swReset.textContent = '종료(입력)';
                swReset.className = 'finish';
            }
        });

        swReset.addEventListener('click', () => {
            if (stopwatchRunning) { // 실행 중 
                stopwatchRunning = false;
                clearInterval(stopwatchTimer);
                stopwatchSeconds = 0;
                swBtn.textContent = '시작';
                swBtn.className = '';
                updateStopwatchTime();
            } else if (stopwatchSeconds > 0) { // 종료 및 입력
                const mins = Math.floor(stopwatchSeconds / 60);
                if(document.getElementById('exerciseMinutes')) {
                    document.getElementById('exerciseMinutes').value = mins;
                }
                // 리셋
                stopwatchSeconds = 0;
                swBtn.textContent = '시작';
                swBtn.className = '';
                swReset.textContent = 'RESET';
                swReset.className = '';
                updateStopwatchTime();
            } else { // 초기화
                stopwatchSeconds = 0;
                updateStopwatchTime();
            }
        });
    }

    function updateStopwatchTime() {
        const h = String(Math.floor(stopwatchSeconds / 3600)).padStart(2, '0');
        const m = String(Math.floor((stopwatchSeconds % 3600) / 60)).padStart(2, '0');
        const s = String(stopwatchSeconds % 60).padStart(2, '0');
        swDisplay.textContent = `${h}:${m}:${s}`;
    }

    // ==========================================
    // 지도 (Kakao Map)
    // ==========================================
    
    let map = null;
    let ps = null;
    let geocoder = null;
    let markers = [];
    let searchCircle = null;
    const RADIUS_METER = 1000;
    let autocomplete = [];
    const MAX_HISTORY_COUNT = 5; 
    let myLocation = null; 
    let centerMarker = null; 

    // 마커 이미지 경로
    const markerImages = { 
        "수영장": "marker_img/blue_marker.png",
        "구기종목": "marker_img/red_marker.png",
        "운동장": "marker_img/green_marker.png", 
        "기타시설": "marker_img/gray_marker.png",
    };

    //거리계산
    function getDistance(lat1, lon1, lat2, lon2) {
        const p1 = new kakao.maps.LatLng(lat1, lon1);
        const p2 = new kakao.maps.LatLng(lat2, lon2);
    
        const polyline = new kakao.maps.Polyline({
            path: [p1, p2],
            strokeOpacity: 0 
        });
        
        return polyline.getLength(); 
    }

    // 지도(마커,인포,반경)초기화
    function clearOverlays() {
        markers.forEach(m => m.setMap(null));
        markers = [];
        if (searchCircle) searchCircle.setMap(null);
        if (centerMarker) centerMarker.setMap(null); 
        centerMarker = null;
    }

    // 지도 중심 마커 
    function setCenterMarker(pos) {
        if(centerMarker) centerMarker.setMap(null);
    
        centerMarker = new kakao.maps.Marker({
            map: map,
            position: pos,
            zIndex: 100
        });
        myLocation = pos; 
        updateCenterInfo(pos);
    }

    // 지도 중심 정보
    function updateCenterInfo(center) {
        document.getElementById('current-center-info').textContent = `현재 지도 중심 (반경 ${RADIUS_METER / 1000}km): ${center.getLat().toFixed(5)}, ${center.getLng().toFixed(5)}`;
    }

    // 시설 마커 추가 및 인포설정 
    function addMarker(place, lat, lng, distance, facilityType) {
        const position = new kakao.maps.LatLng(lat, lng);
    
        const markerImageSrc = markerImages[facilityType] || markerImages['기타시설'];
        const imageSize = new kakao.maps.Size(24, 35);
        const markerImage = new kakao.maps.MarkerImage(markerImageSrc, imageSize,{ offset: new kakao.maps.Point(imageSize.width/2, imageSize.height) });
    
        const marker = new kakao.maps.Marker({
            map: map,
            position: position,
            image: markerImage, 
            zIndex: -100
        });
    
        
        const infowindow = new kakao.maps.InfoWindow({
            content: `<div style="padding:5px;font-size:12px; white-space: nowrap; font-weight: bold; color: #333;">
                        ${place.place_name}<br>
                        <span style="font-weight: normal;">유형: ${facilityType}</span><br>
                        <span style="font-weight: normal;">거리: ${distance.toFixed(0)}m</span>
                      </div>`,
            pixelOffset: new kakao.maps.Point(0, -(imageSize.height + 5)) 
        });
    
        kakao.maps.event.addListener(marker, 'mouseover', () => infowindow.open(map, marker));
        kakao.maps.event.addListener(marker, 'mouseout', () => infowindow.close());
        
        // 클릭 시 길찾기
        kakao.maps.event.addListener(marker, 'click', () => {
            const center = map.getCenter();
            const startLoc = { lat: center.getLat(), lng: center.getLng(), name: "내_검색_기준" };
            const endLoc = { lat: lat, lng: lng, name: place.place_name.replace(/,/g, '_') };
            
            const link = `https://map.kakao.com/link/from/${startLoc.name},${startLoc.lat},${startLoc.lng}/to/${endLoc.name},${endLoc.lat},${endLoc.lng}`;
            window.open(link, '_blank');
        });
    
        markers.push(marker);
    }
    
    //지도 초기화
    window.initMap = function() {
        const container = document.getElementById('kakao_map');
        if (!container || typeof kakao === 'undefined' || !kakao.maps) return;
        
        const options = { center: new kakao.maps.LatLng(37.566826, 126.9786567), level: 5 };
        map = new kakao.maps.Map(container, options);
        ps = new kakao.maps.services.Places();
        geocoder = new kakao.maps.services.Geocoder();
        
        // 초기 중심 마커 설정
        setCenterMarker(options.center);
        const addressInput = document.getElementById('address-input');
        addressInput.addEventListener('keyup', handleAutocomplete);
        
        const addrInput = document.getElementById('address-input');
        if(addrInput) {
            addrInput.addEventListener('keydown', (e) => {
                if(e.key === 'Enter') window.searchAddress();
            });
        }
    };

    // 현재 위치 찾기
    window.getCurrentLocation = function() {
        const status = document.getElementById('location-status');
        const addressInput = document.getElementById('address-input');
        const autocompleteResults = document.getElementById('autocomplete-results');
    
        if (!navigator.geolocation) {
            status.textContent = '현재 브라우저는 위치 정보를 지원하지 않습니다.';
            return;
        }
        status.textContent = '위치 정보를 가져오는 중입니다...';
        
        clearOverlays(); 
    
        navigator.geolocation.getCurrentPosition(pos => {
            const loc = new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            
            map.setCenter(loc);
            map.setLevel(3);
            setCenterMarker(loc); 
            
            
            geocoder.coord2Address(loc.getLng(), loc.getLat(), (result, status) => {
                if (status === kakao.maps.services.Status.OK && result[0]) {
                    const address = result[0].address.address_name;
                    addressInput.value = address; 
                    status.textContent = `현재 위치를 찾았습니다: ${address}`;
                } else {
                    addressInput.value = `${loc.getLat().toFixed(5)}, ${loc.getLng().toFixed(5)}`;
                    status.textContent = "현재 위치를 찾았습니다.";
                }
                autocompleteResults.style.display = 'none';
            });
        }, 
        (error) => {
            status.textContent = '위치 정보를 가져오는데 실패했습니다.';
        });
    };

    // 주소 검색
    window.searchAddress = function() {
        const keyword = document.getElementById('address-input').value.trim();
        const autocompleteResults = document.getElementById('autocomplete-results');
        autocompleteResults.style.display = 'none';
    
        clearOverlays(); 
    
        if (!keyword) {
            return;
        }
    
        ps.keywordSearch(keyword, function(result, status) {
            if (status === kakao.maps.services.Status.OK && result.length > 0) {
                const firstResult = result[0];
                addSearchKeyword(keyword);
                const pos = new kakao.maps.LatLng(firstResult.y, firstResult.x);
                
                map.setCenter(pos);
                map.setLevel(3);
                setCenterMarker(pos);
                autocompleteResults.style.display='none';
    
            } else {
                geocoder.addressSearch(keyword, function(addrResult, addrStatus) {
                    if (addrStatus === kakao.maps.services.Status.OK && addrResult.length > 0) {
                        const pos = new kakao.maps.LatLng(addrResult[0].y, addrResult[0].x);
                        
                        map.setCenter(pos);
                        map.setLevel(3);
                        setCenterMarker(pos);
                        addSearchKeyword(addrResult[0].address_name);
                        autocompleteResults.style.display='none';
                    } else {
                        alert('검색 결과가 없습니다.');
                    }
                });
            }
        }, { size: 1 }); 
    };

    //주변 시설 검색 
    window.searchAroundCenter = function() {
        if(!map || !myLocation) {
            alert("먼저 지도 중심(현재 위치 또는 주소)을 설정해주세요.");
            return;
        }
     
        const center = myLocation; 
        
        markers.forEach(m => m.setMap(null));
        markers = [];
        if(searchCircle) searchCircle.setMap(null);
        if(centerMarker) centerMarker.setMap(map); 
    
        const uniquePlaceIds = new Set();
        const bounds = new kakao.maps.LatLngBounds();
        bounds.extend(center); // 현재 중심 좌표를 바운드에 포함
    
        const types = [];
        document.querySelectorAll('input[name="facility-type"]:checked').forEach(cb => types.push(cb.value));
        
        // 키워드 목록
        const keywords = {
            "운동장": ["운동장", "체육센터", "체육관"], // 사용자 지정 키
            "수영장": ["수영장"],
            "구기종목": ["풋살", "축구", "농구", "야구", "테니스", "배구", "골프"],
            "기타시설": ["헬스장", "휘트니스", "공원", "간이운동", "짐", "복싱", "크로스핏","킥복싱"]
        };
        
        let foundCount = 0;
    
        types.forEach(type => {
            const searchWords = keywords[type] || [];
            searchWords.forEach(word => {
                ps.keywordSearch(word, (data, status) => {
                    if (status === kakao.maps.services.Status.OK) {
                        let searchBatchCount = 0;
                        data.forEach(place => {
                            
                            if (uniquePlaceIds.has(place.id)) return;
                            uniquePlaceIds.add(place.id); 
    
                            const centerLat = center.getLat();
                            const centerLng = center.getLng();
                            const placeLat = parseFloat(place.y);
                            const placeLng = parseFloat(place.x);
                            const placePos = new kakao.maps.LatLng(placeLat, placeLng);
                            
                            
                            const distance = getDistance(centerLat, centerLng, placeLat, placeLng);
                            
                            addMarker(place, placeLat, placeLng, distance, type);
                            
                            bounds.extend(placePos);
                            
                            foundCount++;
                            searchBatchCount++;
                        });
    
                        
                        if (searchBatchCount > 0) {
                            map.setBounds(bounds);
                        }
                        
                        document.getElementById('location-status').textContent = `검색 완료: ${foundCount}개 시설 발견 (반경 ${RADIUS_METER/1000}km)`;
                    }
                }, { location: center, radius: RADIUS_METER });
            });
        });
    
        // 반경 표시
        searchCircle = new kakao.maps.Circle({
            center: center,
            radius: RADIUS_METER,
            strokeWeight: 1,
            strokeColor: '#00a0e9',
            strokeOpacity: 0.1,
            fillColor: '#00a0e9',
            fillOpacity: 0.2
        });
        searchCircle.setMap(map);
    };

    //자동완성
    const addressInput = document.getElementById('address-input');
    const autocompleteResults = document.getElementById('autocomplete-results');
    
    let autoTimer;
    
    function addSearchKeyword(keyword) {
        const normalized = keyword.trim();
        if (!normalized) return;
    
        autocomplete = autocomplete.filter(item => item !== normalized);
        autocomplete.unshift(normalized);
    
        if (autocomplete.length > MAX_HISTORY_COUNT) {
            autocomplete = autocomplete.slice(0, MAX_HISTORY_COUNT);
        }
    }

    function handleAutocomplete() {
        clearTimeout(autoTimer);
        const keyword = addressInput.value.trim();
        const box = autocompleteResults;
    
        if (keyword.length < 2) {
            box.style.display = 'none';
            return;
        }
    
        autoTimer = setTimeout(() => {
            ps.keywordSearch(keyword, (data, status) => {
                if (status !== kakao.maps.services.Status.OK || !data.length) {
                    box.style.display = 'none';
                    return;
                }
    
                box.innerHTML = '';
                data.slice(0, MAX_HISTORY_COUNT).forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = `${item.place_name} (${item.road_address_name || item.address_name})`;
    
                    li.onmousedown = (e) => {
                        e.preventDefault(); 
                        addressInput.value = item.place_name;
                        box.style.display = 'none';
                        addSearchKeyword(item.place_name);
                        setTimeout(searchAddress, 50);
                    };
    
                    box.appendChild(li);
                });
    
                box.style.display = 'block';
            }, { size: MAX_HISTORY_COUNT });
        }, 300);
    }

    
    // ==========================================
    // 유튜브 캐러셀 
    // ==========================================
    window.initYoutube = function() {
        const carousel = document.getElementById('youtube-carousel');
        if(!carousel) return;
        carousel.innerHTML = '';

        // 추천 영상 목록
        const youtubeVideos = [
            { id: 'F-Jd4kI6rdM', title: '전신 다이어트 최고의 운동' },
            { id: 'zruKSHfD7b4', title: '딱 20분 하루 운동 끝장내기' },
            { id: 'toAUho9bEw0', title: 'NO관절부담 뱃살 운동' },
            { id: '73IrtWDDby0', title: '팔뚝살 줄어드는 운동' },
            { id: 'mVsORhCxNL0', title: '누워서 하는 운동' }
        ];

        youtubeVideos.forEach((video) => {
            const slide = document.createElement('a');
            slide.href = `https://www.youtube.com/watch?v=${video.id}`;
            slide.target = '_blank';
            slide.className = 'slide-item';
            slide.innerHTML = `
                <div class="thumbnail-container">
                    <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}" />
                </div>
                <div class="video-title">${video.title}</div>`;
            carousel.appendChild(slide);
        });
    };


    // ==========================================
    // 다이어리, 날씨, 운세
    // ==========================================
    window.initDiary = function() {
        // 날씨 렌더링
        if (document.getElementById('weatherList')) {
            renderWeather();
        }

        // 운세 렌더링
        if (currentUser && currentUser.birthdate && document.getElementById('userBirthDisplay')) {
            renderHoroscope(currentUser.birthdate);
        }

        // 지난 일기 목록 불러오기
        loadDiaries();

        // 날짜 입력칸 오늘 날짜로 자동 설정
        const dateInput = document.getElementById('diaryDate');
        if(dateInput && !dateInput.value) {
            const kstDate = new Date(new Date().getTime() + 9 * 60 * 60 * 1000).toISOString().split('T')[0];
            dateInput.value = kstDate;
        }
    };

    // 날씨 렌더링
    function renderWeather() {
        const weatherContainer = document.getElementById('weatherList');
        if (!weatherContainer) return;

        // 기상청 API 인증키
        const API_KEY = 'dc9Uxusu%2B2K%2BRUMD8ajETvHgqkqasfM1yuFYdTOF34NHRXxZ3lEnRKDVNe5o%2BafcMrx6PQnscY3Qw6mR3q50jw%3D%3D'; 

        // 사용자 위치 기반 조회
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    
                    // 단기예보용 격자좌표(X,Y) 변환
                    const grid = dfs_xy_conv("toXY", lat, lon);
                    
                    // 중기예보용 구역코드(Land, Temp) 찾기
                    const midCodes = getMidTermCodes(lat, lon);
                    
                    // 통합 예보 호출
                    getWeeklyKmaForecast(grid.x, grid.y, midCodes, API_KEY, weatherContainer);
                },
                (error) => {
                    console.warn("위치 접근 차단. 서울 기준 조회");
                    // 서울 기준 기본값 사용
                    const grid = dfs_xy_conv("toXY", 37.5665, 126.9780);
                    const midCodes = { landId: '11B00000', tempId: '108' }; 
                    getWeeklyKmaForecast(grid.x, grid.y, midCodes, API_KEY, weatherContainer);
                }
            );
        } else {
            // GPS 미지원 시 기본값(서울)
            const grid = dfs_xy_conv("toXY", 37.5665, 126.9780);
            const midCodes = { landId: '11B00000', tempId: '108' };
            getWeeklyKmaForecast(grid.x, grid.y, midCodes, API_KEY, weatherContainer);
        }
    }

    // 통합 예보 로직 (비동기 병렬 처리)
    async function getWeeklyKmaForecast(nx, ny, midCodes, apiKey, container) {
        container.innerHTML = '<div style="padding:20px; text-align:center;">날씨 데이터를 통합 분석 중입니다...</div>';

        try {
            // 날짜 계산 (오늘 06:00 기준)
            const today = new Date();
            const dateStr = getFormatDate(today); 
            const timeStr = "0600"; 

            // 단기예보 API
            const shortUrl = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dateStr}&base_time=0500&nx=${nx}&ny=${ny}`;
            // 중기육상예보 API
            const midLandUrl = `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${apiKey}&pageNo=1&numOfRows=10&dataType=JSON&regId=${midCodes.landId}&tmFc=${dateStr}${timeStr}`;
            // 중기기온예보 API
            const midTempUrl = `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=${apiKey}&pageNo=1&numOfRows=10&dataType=JSON&regId=${midCodes.tempId}&tmFc=${dateStr}${timeStr}`;

            // 3개의 API를 동시에 호출
            const [shortRes, midLandRes, midTempRes] = await Promise.all([
                fetch(shortUrl).then(r => r.json()),
                fetch(midLandUrl).then(r => r.json()),
                fetch(midTempUrl).then(r => r.json())
            ]);

            // 7일치 데이터를 담을 배열
            const finalForecast = [];

            // 단기예보 처리
            const shortItems = shortRes.response?.body?.items?.item;
            if(shortItems) {
                const dailyShort = {};
                shortItems.forEach(item => {
                    // 낮 14시 데이터를 대표값으로 사용
                    if(item.fcstTime === '1400') {
                        if(!dailyShort[item.fcstDate]) dailyShort[item.fcstDate] = { temp: '-', sky: '', pty: '' };
                        if(item.category === 'TMP') dailyShort[item.fcstDate].temp = item.fcstValue;
                        if(item.category === 'SKY') dailyShort[item.fcstDate].sky = item.fcstValue;
                        if(item.category === 'PTY') dailyShort[item.fcstDate].pty = item.fcstValue;
                    }
                });
                
                // 날짜순 정렬 후 3일치만 가져오기
                const sortedDates = Object.keys(dailyShort).sort().slice(0, 3);
                sortedDates.forEach(date => {
                    const d = dailyShort[date];
                    let icon = '☀️';
                    let desc = '맑음';
                    if (d.pty > 0) { icon = '🌧️'; desc = '비/눈'; }
                    else if (d.sky >= 3) { icon = '☁️'; desc = '구름/흐림'; }
                    
                    finalForecast.push({
                        date: date,
                        temp: d.temp,
                        icon: icon,
                        desc: desc,
                        isMid: false
                    });
                });
            }

            // 중기예보 처리
            const landItem = midLandRes.response?.body?.items?.item?.[0];
            const tempItem = midTempRes.response?.body?.items?.item?.[0];

            if(landItem && tempItem) {
                const baseDate = new Date(today);
                
                // 3일 후부터 6일 후까지 반복
                for(let i=3; i<=6; i++) {
                    const targetDate = new Date(baseDate);
                    targetDate.setDate(baseDate.getDate() + i);
                    const formattedDate = getFormatDate(targetDate);

                    const skyKey = `wf${i}Pm`; // 오후 날씨
                    const tempMaxKey = `taMax${i}`; // 최고 기온
                    const tempMinKey = `taMin${i}`; // 최저 기온

                    const skyDesc = landItem[skyKey] || '정보없음';
                    const tempMax = tempItem[tempMaxKey];
                    const tempMin = tempItem[tempMinKey];

                    let icon = '☀️';
                    if(skyDesc.includes('비')) icon = '🌧️';
                    else if(skyDesc.includes('눈')) icon = '☃️';
                    else if(skyDesc.includes('흐림')) icon = '☁️';
                    else if(skyDesc.includes('구름')) icon = '⛅';

                    finalForecast.push({
                        date: formattedDate,
                        temp: `${tempMin}/${tempMax}`, // 기온 범위
                        icon: icon,
                        desc: skyDesc,
                        isMid: true
                    });
                }
            }

            // 화면 그리기
            container.innerHTML = '';
            
            finalForecast.forEach((data, index) => {
                const m = data.date.substring(4, 6);
                const d = data.date.substring(6, 8);
                const dayLabel = index === 0 ? '오늘' : (index === 1 ? '내일' : (index === 2 ? '모레' : `${index}일후`));
                const tempDisplay = data.isMid ? `${data.temp}°C` : `${data.temp}°C`;

                const card = document.createElement('div');
                card.className = 'weather-card';
                card.innerHTML = `
                    <span class="today-badge" style="background:${data.isMid ? '#6c757d':'#0066cc'}">${dayLabel}</span>
                    <span class="weather-date">${m}.${d}</span>
                    <span class="weather-icon" style="font-size:1.8rem;">${data.icon}</span>
                    <span class="weather-temp" style="font-size:0.9rem;">${tempDisplay}</span>
                    <span class="weather-desc">${data.desc}</span>
                `;
                container.appendChild(card);
            });

            if(finalForecast.length === 0) throw new Error("데이터 없음");

        } catch (error) {
            console.error(error);
            container.innerHTML = `<div style="padding:15px; color:red;">
                주간 예보 로딩 실패<br>
                <small>1. API키가 올바른지<br>2. 중기예보 활용신청이 되어있는지 확인하세요.</small>
            </div>`;
        }
    }

    // 날짜 포맷 (YYYYMMDD)
    function getFormatDate(date) {
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        return year + month + day;
    }

    // -좌표 -> 중기예보 구역코드 매핑
    function getMidTermCodes(lat, lon) {
        // 주요 권역별 대표 좌표 및 코드 매핑
        const regions = [
            { name: '서울/경기', lat: 37.566, lon: 126.978, land: '11B00000', temp: '109' }, // 서울
            { name: '부산/경남', lat: 35.179, lon: 129.075, land: '11H20000', temp: '159' }, // 부산
            { name: '대구/경북', lat: 35.871, lon: 128.601, land: '11H10000', temp: '143' }, // 대구
            { name: '광주/전남', lat: 35.159, lon: 126.852, land: '11F20000', temp: '156' }, // 광주
            { name: '대전/세종/충남', lat: 36.350, lon: 127.384, land: '11C20000', temp: '133' }, // 대전
            { name: '충북', lat: 36.635, lon: 127.491, land: '11C10000', temp: '131' }, // 청주
            { name: '강원영서', lat: 37.885, lon: 127.729, land: '11D10000', temp: '101' }, // 춘천
            { name: '강원영동', lat: 37.751, lon: 128.876, land: '11D20000', temp: '105' }, // 강릉
            { name: '전북', lat: 35.824, lon: 127.148, land: '11F10000', temp: '146' }, // 전주
            { name: '제주', lat: 33.499, lon: 126.531, land: '11G00000', temp: '184' }  // 제주
        ];

        let closest = regions[0];
        let minDiff = Infinity;

        regions.forEach(reg => {
            const diff = Math.pow(reg.lat - lat, 2) + Math.pow(reg.lon - lon, 2);
            if(diff < minDiff) {
                minDiff = diff;
                closest = reg;
            }
        });

        return { landId: closest.land, tempId: closest.temp };
    }

    // 위경도 -> 기상청 좌표(Grid) 변환 함수 (기상청 공식 알고리즘)
    function dfs_xy_conv(code, v1, v2) {
        const RE = 6371.00877; // 지구 반경(km)
        const GRID = 5.0; // 격자 간격(km)
        const SLAT1 = 30.0; // 투영 위도1(degree)
        const SLAT2 = 60.0; // 투영 위도2(degree)
        const OLON = 126.0; // 기준점 경도(degree)
        const OLAT = 38.0; // 기준점 위도(degree)
        const XO = 43; // 기준점 X좌표(GRID)
        const YO = 136; // 기준점 Y좌표(GRID)

        const DEGRAD = Math.PI / 180.0;
        const RADDEG = 180.0 / Math.PI;

        const re = RE / GRID;
        const slat1 = SLAT1 * DEGRAD;
        const slat2 = SLAT2 * DEGRAD;
        const olon = OLON * DEGRAD;
        const olat = OLAT * DEGRAD;

        let sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
        sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
        let sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
        sf = Math.pow(sf, sn) * Math.cos(slat1) / sn;
        let ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
        ro = re * sf / Math.pow(ro, sn);
        
        const rs = {};
        if (code == "toXY") {
            rs['lat'] = v1;
            rs['lng'] = v2;
            let ra = Math.tan(Math.PI * 0.25 + (v1) * DEGRAD * 0.5);
            ra = re * sf / Math.pow(ra, sn);
            let theta = v2 * DEGRAD - olon;
            if (theta > Math.PI) theta -= 2.0 * Math.PI;
            if (theta < -Math.PI) theta += 2.0 * Math.PI;
            theta *= sn;
            rs['x'] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
            rs['y'] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
        }
        return rs;
    }

    // 운세 렌더링
    function renderHoroscope(birthDateStr) {
        const signEl = document.getElementById('userBirthDisplay');
        const contentBox = document.querySelector('.horoscope-content');

        if (!signEl || !contentBox) return;

        signEl.textContent = birthDateStr;
        document.getElementById('todayDateDisplay').textContent = getTodayStr() + "의 운세";

        const starSigns = [
            { name: "염소자리", start: "01-01", end: "01-19", icon: "♑" },
            { name: "물병자리", start: "01-20", end: "02-18", icon: "♒" },
            { name: "물고기자리", start: "02-19", end: "03-20", icon: "♓" },
            { name: "양자리", start: "03-21", end: "04-19", icon: "♈" },
            { name: "황소자리", start: "04-20", end: "05-20", icon: "♉" },
            { name: "쌍둥이자리", start: "05-21", end: "06-21", icon: "♊" },
            { name: "게자리", start: "06-22", end: "07-22", icon: "♋" },
            { name: "사자자리", start: "07-23", end: "08-22", icon: "♌" },
            { name: "처녀자리", start: "08-23", end: "09-23", icon: "♍" },
            { name: "천칭자리", start: "09-24", end: "10-22", icon: "♎" },
            { name: "전갈자리", start: "10-23", end: "11-22", icon: "♏" },
            { name: "사수자리", start: "11-23", end: "12-24", icon: "♐" },
            { name: "염소자리", start: "12-25", end: "12-31", icon: "♑" }
        ];

        let fortunePool = [
            "운세 데이터를 불러오는 중 오류가 발생했습니다.", 
            "새로운 마음으로 하루를 시작하세요!"
        ];

        if (typeof FORTUNE_DATA !== 'undefined' && Array.isArray(FORTUNE_DATA)) {
            fortunePool = FORTUNE_DATA;
        }

        // 생일로 별자리 찾기
        const cleanDate = birthDateStr.replace(/\./g, '-');
        const bDate = new Date(cleanDate);
        const month = bDate.getMonth() + 1;
        const day = bDate.getDate();
        
        const currentMMDD = (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
        let starIdx = starSigns.findIndex(z => currentMMDD >= z.start && currentMMDD <= z.end);
        if(starIdx === -1) starIdx = 0; // 예외처리 (염소자리)
        const myStar = starSigns[starIdx];

        // 오늘의 시드(Seed) 생성 및 랜덤 선택
        const today = new Date();
        const dateNum = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

        // (날짜 + 별자리인덱스)를 조합하여 매일, 별자리마다 다른 메시지 선택
        const msgIndex = (dateNum + starIdx * 17) % fortunePool.length; 
        const selectedMsg = fortunePool[msgIndex];

        // 행운 점수 (60 ~ 100점 사이)
        const luckScore = (dateNum + starIdx * 13) % 41 + 60; 

        // HTML 렌더링
        contentBox.innerHTML = `
            <div class="horoscope-icon-wrapper">${myStar.icon}</div>
            
            <h4 class="horoscope-title">${myStar.name}</h4>
            <span class="horoscope-period">${myStar.start} ~ ${myStar.end}</span>
            
            <div class="horoscope-message-box">
                <p>"${selectedMsg}"</p>
            </div>

            <div class="lucky-meter-container">
                <div class="lucky-meter-label">
                    <span>오늘의 행운 지수</span>
                    <span style="color:#8e44ad;">${luckScore}점</span>
                </div>
                <div class="lucky-bar-bg">
                    <div class="lucky-bar-fill" style="width: ${luckScore}%"></div>
                </div>
            </div>
        `;
    }

    // 일기 목록 불러오기
    async function loadDiaries() {
        const diaryListEl = document.getElementById('diaryList');
        if (!diaryListEl) return;

        try {
            const res = await fetch('api.php?action=get_all_diaries');
            const diaries = await res.json();
            
            diaryListEl.innerHTML = '';

            if (!diaries || diaries.length === 0) {
                diaryListEl.innerHTML = '<div class="empty-message">작성된 일기가 없습니다.<br>오늘 하루를 기록해보세요!</div>';
                return;
            }

            const moodEmojis = {
                'good': '🥰', 'normal': '🙂', 'tired': '🫠', 'sad': '😢', 'angry': '😡',
                '매우 좋음': '😄', '좋음': '🙂', '적당함': '😐', '불쾌함': '🙁', '매우 불쾌함': '😡'
            };

            diaries.forEach((diary) => {
                const entry = document.createElement('div');
                entry.className = 'diary-entry';
                
                const content = diary.diary ? diary.diary.replace(/\n/g, '<br>') : '';
                const emoji = moodEmojis[diary.mood] || '❓';

                entry.innerHTML = `
                    <div class="entry-mood">${emoji}</div>
                    <div class="entry-content">
                        <div class="entry-date">${diary.date}</div>
                        <div class="entry-text">${content}</div>
                    </div>
                `;
                diaryListEl.appendChild(entry);
            });

        } catch (e) {
            console.error("일기 로드 실패:", e);
        }
    }


    // ==========================================
    // 마이페이지
    // ==========================================
    
    let myPageWeightChart = null;
    let currentCalendarDate = new Date();
    let cachedMyPageData = null; 

    // 기분별 이모지 매핑
    const moodEmojis = {
        'good': '🥰', 'normal': '🙂', 'tired': '🫠', 'sad': '😢', 'angry': '😡',
        '매우 좋음': '😄', '좋음': '🙂', '적당함': '😐', '불쾌함': '🙁', '매우 불쾌함': '😡'
    };

    window.loadMyPageData = async function() {
        console.log("마이페이지 데이터 로드 시작..."); 
        try {
            const res = await fetch('api.php?action=get_mypage_data');
            const data = await res.json();
            cachedMyPageData = data;

            renderProfile(data.userInfo || {});
            renderCalendar();
            loadWeightHistory();
        } catch (err) {
            console.error('마이페이지 로드 오류:', err);
        }
    };

    // 달력 네비게이션
    const prevBtn = document.getElementById('prevMonthBtn');
    const nextBtn = document.getElementById('nextMonthBtn');
    if(prevBtn) prevBtn.addEventListener('click', () => { currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1); renderCalendar(); });
    if(nextBtn) nextBtn.addEventListener('click', () => { currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1); renderCalendar(); });

    // 프로필 렌더링
    function renderProfile(info) {
        if(document.getElementById('userName')) document.getElementById('userName').textContent = info.name || '사용자';
        if(document.getElementById('userBirth')) document.getElementById('userBirth').textContent = info.birthdate || '0000.00.00';
        if(document.getElementById('userHeight')) document.getElementById('userHeight').textContent = (info.height || '--') + ' cm';
        if(document.getElementById('userCurrentWeight')) document.getElementById('userCurrentWeight').textContent = (info.current_weight || '--') + ' kg';
        
        if (info.reg_date && document.getElementById('userDday')) {
            const regDate = new Date(info.reg_date);
            const today = new Date();
            const diffTime = Math.abs(today - regDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            document.getElementById('userDday').textContent = 'D+' + diffDays;
        }
        if(document.getElementById('editName')) document.getElementById('editName').value = info.name || '';
        if(document.getElementById('editBirth')) document.getElementById('editBirth').value = info.birthdate || '';
        if(document.getElementById('editHeight')) document.getElementById('editHeight').value = info.height || '';
        if(document.getElementById('editWeight')) document.getElementById('editWeight').value = info.current_weight || '';
    }

    // 캘린더 렌더링
    function renderCalendar() {
        if (!cachedMyPageData) return;

        const userInfo = cachedMyPageData.userInfo;
        const foodLogs = cachedMyPageData.foodLogs || [];
        const exerciseLogs = cachedMyPageData.exerciseLogs || [];
        const weights = cachedMyPageData.weights || [];
        const diaryLogs = cachedMyPageData.diaryLogs || []; 

        const grid = document.getElementById('calendarGrid');
        const monthDisplay = document.getElementById('currentMonthDisplay');
        if (!grid) return;

        grid.innerHTML = ''; 

        const year = currentCalendarDate.getFullYear();
        const month = currentCalendarDate.getMonth(); 
        if(monthDisplay) monthDisplay.textContent = `${year}년 ${month + 1}월`;

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        const dataMap = {};
        const mergeData = (list, key, valKey) => {
            list.forEach(item => {
                if(!dataMap[item.date]) dataMap[item.date] = {};
                dataMap[item.date][key] = item[valKey];
            });
        };

        mergeData(foodLogs, 'consumed', 'consumed');
        mergeData(exerciseLogs, 'burned', 'burned');
        mergeData(weights, 'weight', 'weight');
        mergeData(diaryLogs, 'mood', 'mood');

        const userHeightM = userInfo.height ? parseFloat(userInfo.height) / 100 : 0;

        // 빈 칸 채우기
        for (let i = 0; i < firstDay.getDay(); i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day empty';
            grid.appendChild(emptyCell);
        }

        // 날짜 셀 생성
        for (let i = 1; i <= lastDay.getDate(); i++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'calendar-day';

            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

            // 날짜 클릭 이벤트
            dayCell.onclick = () => openDateModal(dateStr);
            dayCell.style.cursor = 'pointer';

            const dayNum = document.createElement('div');
            dayNum.className = 'day-number';
            
            // 일기 이모지 표시
            let emojiHtml = '';
            if (dataMap[dateStr] && dataMap[dateStr].mood) {
                const mood = dataMap[dateStr].mood;
                emojiHtml = `<span style="font-size:1rem; margin-left:5px;">${moodEmojis[mood] || '📝'}</span>`;
            }
            dayNum.innerHTML = `${i} ${emojiHtml}`;
            dayCell.appendChild(dayNum);

            const dayData = dataMap[dateStr];

            if (dayData) {
                // 체중 & BMI 표시
                if (dayData.weight) {
                    const wDiv = document.createElement('div');
                    wDiv.className = 'cal-data cal-weight';
                    wDiv.textContent = `${parseFloat(dayData.weight)}kg`;
                    dayCell.appendChild(wDiv);

                    if (userHeightM > 0) {
                        const bmi = (dayData.weight / (userHeightM * userHeightM)).toFixed(1);
                        const bDiv = document.createElement('div');
                        bDiv.className = 'cal-data cal-bmi';
                        bDiv.textContent = `BMI ${bmi}`;
                        if (bmi < 20) { bDiv.style.color = '#007bff'; bDiv.style.fontWeight = 'bold'; }
                        else if (bmi >= 26) { bDiv.style.color = '#dc3545'; bDiv.style.fontWeight = 'bold'; }
                        else { bDiv.style.color = '#28a745'; }
                        dayCell.appendChild(bDiv);
                    }

                    // 칼로리 (+/-)
                    if (dayData.consumed) {
                        const kDiv = document.createElement('div');
                        kDiv.className = 'cal-data';
                        kDiv.style.color = '#0066cc';
                        kDiv.style.fontSize = '10px';
                        kDiv.textContent = `+${parseInt(dayData.consumed)}`;
                        dayCell.appendChild(kDiv);
                    }
                    if (dayData.burned) {
                        const eDiv = document.createElement('div');
                        eDiv.className = 'cal-data';
                        eDiv.style.color = '#ff6b6b';
                        eDiv.style.fontSize = '10px';
                        eDiv.textContent = `-${parseInt(dayData.burned)}`;
                        dayCell.appendChild(eDiv);
                    }
                }
            }
            grid.appendChild(dayCell);
        }
    }

    // 날짜 상세 모달
    window.openDateModal = async function(dateStr) {
        const modal = document.getElementById('dateDetailModal');
        const title = document.getElementById('modalDateTitle');
        const mealList = document.getElementById('modalMealList');
        const exList = document.getElementById('modalExerciseList');
        const diaryArea = document.getElementById('modalDiaryArea');

        if(!modal) return;

        title.textContent = `${dateStr} 기록`;
        mealList.innerHTML = '<li>불러오는 중...</li>';
        exList.innerHTML = '<li>불러오는 중...</li>';
        diaryArea.textContent = '불러오는 중...';
        
        modal.style.display = 'flex';

        try {
            // 상세 데이터 API 호출
            const res = await fetch(`api.php?action=get_daily_logs&date=${dateStr}`);
            const data = await res.json();

            // 식단 렌더링
            mealList.innerHTML = '';
            if (data.meals && data.meals.length > 0) {
                data.meals.forEach(m => {
                    mealList.innerHTML += `<li>${m.name} ${m.amount}인분 (${m.kcal}kcal)</li>`;
                });
            } else {
                mealList.innerHTML = '<li style="color:#aaa;">기록 없음</li>';
            }

            // 운동 렌더링
            exList.innerHTML = '';
            if (data.exercises && data.exercises.length > 0) {
                data.exercises.forEach(e => {
                    exList.innerHTML += `<li>${e.name} ${e.minutes}분 (-${e.kcal}kcal)</li>`;
                });
            } else {
                exList.innerHTML = '<li style="color:#aaa;">기록 없음</li>';
            }

            // 일기 렌더링
            if (data.diary) {
                const emoji = moodEmojis[data.diary.mood] || '';
                diaryArea.innerHTML = `<div style="font-size:1.5rem; margin-bottom:5px;">${emoji} ${data.diary.mood}</div>` + 
                                      (data.diary.diary || '내용 없음').replace(/\n/g, '<br>');
            } else {
                diaryArea.innerHTML = '<span style="color:#aaa;">작성된 일기가 없습니다.</span>';
            }

        } catch (e) {
            console.error(e);
            alert("데이터를 불러오지 못했습니다.");
            modal.style.display = 'none';
        }
    };

    window.closeDateModal = function() {
        const modal = document.getElementById('dateDetailModal');
        if(modal) modal.style.display = 'none';
    };

    // 모달 바깥 클릭 시 닫기
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('dateDetailModal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // 그래프 렌더링 함수
    function renderMyPageWeightChart(weightData) {
        const canvas = document.getElementById('weightGraphCanvas');
        if (!canvas) return;

        // 캔버스가 숨겨져 있거나 크기가 0이면 중단
        if (canvas.clientWidth === 0 && canvas.clientHeight === 0) return;

        if (myPageWeightChart) {
            myPageWeightChart.destroy();
        }

        const labels = weightData.map(d => d.date);
        const dataPoints = weightData.map(d => d.weight);

        const ctx = canvas.getContext('2d');
        myPageWeightChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: '체중 (kg)',
                    data: dataPoints,
                    borderColor: '#ff6b6b',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    tension: 0.1,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, 
                scales: {
                    x: { display: true },
                    y: { beginAtZero: false }
                }
            }
        });
    }

    // ==========================================
    // 프로필 편집 모달 기능
    // ==========================================

    // 전역 함수 할당
    window.openEditProfile = function() {
        const modal = document.getElementById('editProfileModal');
        if(modal) modal.style.display = 'flex';
    };

    window.closeEditProfile = function() {
        const modal = document.getElementById('editProfileModal');
        if(modal) modal.style.display = 'none';
    };

    // 편집 폼 제출 처리
    const editForm = document.getElementById('editProfileForm');
    if (editForm) {
        editForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const payload = {
                name: document.getElementById('editName').value,
                birthdate: document.getElementById('editBirth').value,
                height: document.getElementById('editHeight').value,
                weight: document.getElementById('editWeight').value
            };

            try {
                const res = await fetch('api.php?action=update_profile', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const data = await res.json();

                if (data.status === 'success') {
                    alert('프로필이 수정되었습니다.');
                    closeEditProfile();
                    
                    // 마이페이지 데이터 새로고침
                    if (typeof window.loadMyPageData === 'function') {
                        window.loadMyPageData(); 
                    }
                    
                    // 앱 전역 상태(currentUser) 업데이트
                    if(currentUser) {
                        currentUser.name = payload.name;
                        currentUser.weight = payload.weight;
                        currentUser.height = payload.height;
                        currentUser.birthdate = payload.birthdate;
                    }
                } else {
                    alert('수정 실패: ' + data.message);
                }
            } catch (err) {
                console.error(err);
                alert('서버 오류가 발생했습니다.');
            }
        });
    }

    // 앱 초기화 시 현재 탭이 마이페이지면 데이터 로드
    if (document.getElementById('tab-mypage') && document.getElementById('tab-mypage').classList.contains('active')) {
        setTimeout(() => {
            if (typeof window.loadMyPageData === 'function') {
                window.loadMyPageData();
            }
        }, 100);
    }


});
