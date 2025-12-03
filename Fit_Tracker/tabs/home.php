<div class="hero-section">
    <h1>Welcome to Fit-tracker</h1>
    <p>
        당신의 건강한 삶을 위한 스마트 파트너.<br>
        체계적인 관리로 더 나은 내일을 만들어보세요.
    </p>

</div>

<div class="features-container">
    
    <div class="feature-item">
        <div class="icon-wrapper">
            <span class="feature-icon">🥗</span>
        </div>
        <h3>스마트 건강관리</h3>
        <p>식단과 운동량을 기록하고 칼로리를 계산하세요.<br>나만의 데이터를 구축할 수 있습니다.</p>
    </div>

    <div class="feature-item">
        <div class="icon-wrapper">
            <span class="feature-icon">📝</span>
        </div>
        <h3>데일리 다이어리</h3>
        <p>오늘의 날씨와 운세를 확인하고,<br>하루의 기분과 메모를 남겨보세요.</p>
    </div>

    <div class="feature-item">
        <div class="icon-wrapper">
            <span class="feature-icon">📊</span>
        </div>
        <h3>마이페이지</h3>
        <p>체중 변화 그래프와 달력을 통해<br>당신의 노력을 한눈에 확인하세요.</p>
    </div>

</div>

                <section id="map-section-wrap" class="card">
                    <h2>주변 시설 찾기</h2>
                    <p>내 주변에 있는 운동 시설을 찾아보세요.</p>
                    <div id="mapContainer" class="placeholder-box map-box">
                        <div id="controls">
                            <h3>시설 검색 설정</h3>
                            <div class="control-section">
                                <strong>위치 설정:</strong>
                                <button onclick="getCurrentLocation()" id="current-location-btn">현재 위치 찾기</button>
                                <span id="location-status" style="color: #6c757d; font-size: 0.9em;"></span>
                                <div id="address-search-container">
                                    <div id="address-search-area">
                                        <input type="text" id="address-input" placeholder="주소를 입력하세요" spellcheck="false" autocomplete="off">
                                        <button onclick="searchAddress()">주소 검색</button>
                                    </div>
                                    <ul id="autocomplete-results" style="display: none;"></ul>
                                </div>
                                <p id="current-center-info" style="font-size: 0.9em; color: #555; margin-top: 5px;">현재 지도 중심: (초기 위치)</p>
                            </div>
                            <hr>
                            <div class="control-section">
                                <strong>시설 유형</strong>
                                <label><input type="checkbox" name="facility-type" value="운동장" checked> 운동장/체육관</label>
                                <label><input type="checkbox" name="facility-type" value="수영장" checked> 수영장</label>
                                <label><input type="checkbox" name="facility-type" value="구기종목" checked> 구기종목</label>
                                <label><input type="checkbox" name="facility-type" value="기타시설" checked> 기타시설</label>
                                <button onclick="searchAroundCenter()" id="search-facilities-btn">선택 조건으로 시설 검색</button>
                            </div>
                        </div>
                        <div id="kakao_map" style="width:100%; height:400px;"></div>
                    </div>
                </section>

                <section class="card">
                    <h2>오늘의 추천 운동</h2>
                    <div id="player-container">
                        <div id="youtube-carousel"></div>
                    </div>
                </section>
                

                
