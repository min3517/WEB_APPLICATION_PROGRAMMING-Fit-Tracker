<div id="sub-profile" class="card profile-card">
    <div style="width:100%; display:flex; justify-content:flex-end;">
        <button onclick="openEditProfile()" class="btn-edit-profile">⚙️ 프로필 편집</button>
    </div>

    <div class="profile-image-container" style="display:flex; justify-content:center; align-items:center; margin-bottom:15px;">
        <img id="userProfileImg" src="" alt="프로필 이미지" style="display:none; width:100px; height:100px; border-radius:50%;">
        <span id="defaultProfileIcon" style="font-size: 4rem;">👤</span>
    </div>
    
    <div class="profile-info" style="text-align: center;">
        <h3 id="userName">사용자 이름</h3>
        <p class="user-meta">
            <span id="userBirth">0000.00.00</span> | 
            <span id="userDday" class="d-day-badge">D+0</span>
        </p>
        
        <div class="user-stats" style="display:flex; justify-content:center; gap:20px; margin-top:15px;">
            <div class="stat-box">
                <span class="stat-label">키</span>
                <span class="stat-value" id="userHeight">-- cm</span>
            </div>
            <div class="stat-box">
                <span class="stat-label">몸무게</span>
                <span class="stat-value" id="userCurrentWeight">-- kg</span>
            </div>
        </div>
    </div>
</div>

<div id="editProfileModal" class="modal-overlay" style="display:none;">
    <div class="modal-content">
        <h3>프로필 정보 수정</h3>
        <form id="editProfileForm">
            <div class="form-group">
                <label>이름</label>
                <input type="text" id="editName" required>
            </div>
            <div class="form-group">
                <label>생년월일</label>
                <input type="date" id="editBirth" required>
            </div>
            <div class="form-group">
                <label>키 (cm)</label>
                <input type="number" id="editHeight" step="0.1" required>
            </div>
            <div class="form-group">
                <label>몸무게 (kg)</label>
                <input type="number" id="editWeight" step="0.1" required>
            </div>
            <div class="btn-group" style="display:flex; gap:10px; margin-top:20px;">
                <button type="button" onclick="closeEditProfile()" class="btn-cancel">취소</button>
                <button type="submit" class="btn-save">저장하기</button>
            </div>
        </form>
    </div>
</div>

<div id="sub-calendar" class="card">
    <div class="section-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
        <h3>📅 건강 기록 캘린더</h3>
        
        <div class="calendar-nav" style="display:flex; align-items:center; gap:10px;">
            <button id="prevMonthBtn">◀</button>
            <span id="currentMonthDisplay" style="font-weight:bold; font-size:1.1rem; color:#333; min-width:80px; text-align:center;"></span>
            <button id="nextMonthBtn">▶</button>
        </div>
    </div>

    <div class="bmi-legend" style="display:flex; justify-content:flex-end; gap:15px; margin-bottom:10px; font-size:0.8rem;">
        <div style="display:flex; align-items:center; gap:5px;">
            <span style="width:12px; height:12px; background-color:#007bff; display:inline-block; border-radius:50%;"></span> 저체중 (&lt;20)
        </div>
        <div style="display:flex; align-items:center; gap:5px;">
            <span style="width:12px; height:12px; background-color:#28a745; display:inline-block; border-radius:50%;"></span> 정상 (20~25)
        </div>
        <div style="display:flex; align-items:center; gap:5px;">
            <span style="width:12px; height:12px; background-color:#dc3545; display:inline-block; border-radius:50%;"></span> 비만 (&ge;26)
        </div>
    </div>

    <div class="calendar-grid" id="calendarGrid"></div>
</div>

<div id="dateDetailModal" class="modal-overlay" style="display:none; z-index: 1000;">
    <div class="modal-content" style="max-width:400px; width:90%; max-height:80vh; overflow-y:auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:15px;">
            <h3 id="modalDateTitle" style="margin:0;">YYYY-MM-DD</h3>
            <button onclick="closeDateModal()" style="background:none; border:none; font-size:1.5rem; cursor:pointer;">&times;</button>
        </div>

        <div id="modalContentBody">
            <div class="modal-section">
                <h4>🥗 식단 기록</h4>
                <ul id="modalMealList" style="padding-left:20px; color:#555;"></ul>
            </div>
            <div class="modal-section">
                <h4>🏋️ 운동 기록</h4>
                <ul id="modalExerciseList" style="padding-left:20px; color:#555;"></ul>
            </div>
            <div class="modal-section">
                <h4>📝 일기</h4>
                <div id="modalDiaryArea" style="background:#f9f9f9; padding:10px; border-radius:5px; white-space: pre-wrap;"></div>
            </div>
        </div>
    </div>
</div>

<div id="sub-weight" class="card">
    <h3>📉 체중 변화 그래프</h3>
    
    <div id="chartFilters" style="display:flex; justify-content:center; gap:5px; margin-bottom:10px;">
        <button class="filter-btn active-filter" data-days="30">1개월</button>
        <button class="filter-btn" data-days="90">3개월</button>
        <button class="filter-btn" data-days="180">6개월</button>
        <button class="filter-btn" data-days="365">1년</button>
    </div>

    <form id="weightForm" style="display:flex; gap:10px; justify-content:center; margin-bottom:20px;">
        <input type="date" id="weightDate" required style="padding:5px; border:1px solid #ddd; border-radius:5px;">
        <input type="number" id="weightValue" placeholder="체중(kg)" step="0.1" required style="width:80px; padding:5px; border:1px solid #ddd; border-radius:5px;">
        <button type="submit" class="btn-primary" style="padding:5px 15px; margin:0;">기록</button>
    </form>
    <div class="graph-container">
        <canvas id="weightGraphCanvas"></canvas>
    </div>
</div>