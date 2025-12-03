<div id="sub-weather" class="card">
    <h3>🌤 날씨 정보</h3>
    <p style="color:#666; font-size:0.9rem; margin-bottom:15px;">기상청 공공데이터를 기반으로 제공됩니다.</p>
    
    <div class="weather-container" id="weatherList" style="display:flex; justify-content:center; min-height:100px;">
        <div style="padding:20px; text-align:center; color:#888;">
            날씨 정보를 불러오는 중...<br>
            <span style="font-size:0.8rem;">(잠시만 기다려주세요)</span>
        </div>
    </div>
</div>

<div id="sub-fortune" class="card horoscope-card">
    <h3>🍀 오늘의 운세</h3>
    <p class="horoscope-date" id="todayDateDisplay">--.--.--</p>
    
    <div class="horoscope-content">
        <div class="zodiac-icon" id="zodiacIcon">✨</div>
        
        <div class="horoscope-text">
            <h4 id="zodiacName">나의 별자리</h4>
            <p id="horoscopeMessage">운세 데이터를 불러오는 중...</p>
        </div>
    </div>
    <p class="user-birth-info">당신의 생일: <span id="userBirthDisplay">--.--.--</span></p>
</div>

<div id="sub-today" class="card">
    <h3>📝 오늘의 기록</h3>
    <form id="diaryFormNew">
        <div class="form-group">
            <label>오늘 날짜</label>
            <input type="date" id="diaryDate" required>
        </div>

        <div class="form-group">
            <label>오늘의 기분은?</label>
            <div class="mood-selector">
                <input type="radio" name="mood" id="mood-good" value="good" required>
                <label for="mood-good" class="mood-option">
                    <span class="emoji">🥰</span><span class="mood-label">좋음</span>
                </label>

                <input type="radio" name="mood" id="mood-normal" value="normal">
                <label for="mood-normal" class="mood-option">
                    <span class="emoji">🙂</span><span class="mood-label">보통</span>
                </label>

                <input type="radio" name="mood" id="mood-tired" value="tired">
                <label for="mood-tired" class="mood-option">
                    <span class="emoji">🫠</span><span class="mood-label">피곤</span>
                </label>

                <input type="radio" name="mood" id="mood-sad" value="sad">
                <label for="mood-sad" class="mood-option">
                    <span class="emoji">😢</span><span class="mood-label">슬픔</span>
                </label>
                
                <input type="radio" name="mood" id="mood-angry" value="angry">
                <label for="mood-angry" class="mood-option">
                    <span class="emoji">😡</span><span class="mood-label">화남</span>
                </label>
            </div>
        </div>

        <div class="form-group">
            <label for="diaryContent">일기 내용</label>
            <textarea id="diaryContent" placeholder="오늘 하루는 어땠나요?" required></textarea>
        </div>

        <button type="submit" class="save-btn">일기 저장하기</button>
    </form>
</div>

<div id="sub-past" class="card">
    <h2>📂 지난 기록</h2>
    <p>과거에 작성한 다이어리 목록입니다.</p>
    <div class="diary-list" id="diaryList">
        <div class="empty-message">데이터를 불러오는 중...</div>
    </div>
</div>