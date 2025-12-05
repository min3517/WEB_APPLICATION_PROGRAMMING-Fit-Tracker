<div class="card">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                        <h2>오늘의 칼로리</h2>
                        <button id="btn-open-detail" class="detail-toggle-btn">+ 상세설정</button>
                    </div>
                    
                    <div id="detail-info-alert" class="info-alert">
                        ⚠️ 현재 일반 권장 열량(나이 기준)을 사용 중입니다.<br>
                        위의 [+ 상세 설정] 버튼을 눌러 키와 활동량을 입력하면 더 정확한 목표가 계산됩니다.
                    </div>
                    <div id="detail-calc-section">
                        <form id="detailForm" style="display:flex; gap:10px; align-items:flex-end;">
                            <div style="flex:1;">
                                <label>평소 활동 레벨</label>
                                <label style="font-size:0.9rem;">평소 활동 레벨</label>
                                <select id="detailActivity" style="width:100%; padding:8px; border:1px solid #ddd; border-radius:4px;">
                                    <option value="1.2">좌식 생활 (운동 안 함)</option>
                                    <option value="1.375">가벼운 활동 (주 1-3회 운동)</option>
                                    <option value="1.55">보통 활동 (주 3-5회 운동)</option>
                                    <option value="1.725">많은 활동 (주 6-7회 운동)</option>
                                    <option value="1.9">매우 많은 활동 (육체노동/선수)</option>
                                </select>
                            </div>
                            <button type="submit" style="height:35px;">저장</button>
                        </form>
                    </div>

                    <div class="chart-container" style="margin: 0 auto 20px auto;">
                        <canvas id="calorieChart"></canvas>
                        <p class="calorie-summary-text">
                            <span style="color:#0066cc;">섭취 <span id="netConsumeKcal">0</span></span> / 
                            <span style="font-weight:bold;">권장 <span id="targetKcal">2000</span></span>
                        </p>
                         <div class="calorie-legend-horizontal" style="display:flex; justify-content:center; gap:15px; font-size:12px;">
                            <div><span class="legend-color-box" style="background-color: #0066cc;"></span> 섭취</div>
                            <div><span class="legend-color-box" style="background-color: #28a745;"></span> 소모</div>
                            <div><span class="legend-color-box" style="background-color: #dc3545;"></span> 초과</div>
                        </div>
                    </div>

                    <div id="sub-exercise" class="health-section">
                        <div class="calorie-column" style="width:100%; box-sizing:border-box;">
                            <h3>🏋️ 운동 & 기록</h3>
                            <div class="exercise-top-container">
                                <div class="total-time-display">
                                    <p>오늘 운동 시간</p>
                                    <span><span id="totalExerciseMinutes">0</span>분</span>
                                </div>
                                <div class="stopwatch-container">
                                    <div id="stopwatchDisplay">00:00:00</div>
                                    <div class="stopwatch-controls">
                                        <button id="startStopBtn">시작</button>
                                        <button id="resetBtn">RESET</button>
                                    </div>
                                </div>
                            </div>

                            <div class="form-section">
                                <form id="exerciseForm" autocomplete="off">
                                    <div class="autocomplete-wrapper">
                                        <input type="text" id="exerciseName" placeholder="운동 검색" required>
                                        <ul id="exerciseSuggestions" class="suggestion-list"></ul>
                                    </div>
                                    <div class="form-row">
                                        <input type="number" id="exerciseMinutes" placeholder="시간(분)" required>
                                        <button type="submit">추가</button>
                                    </div>
                                </form>
                            </div>
                            
                            <div class="manual-input-box">
                                <h4>직접 입력</h4>
                                <form id="manualExerciseForm" class="manual-form">
                                    <input type="text" id="manualExName" placeholder="운동명" required>
                                    <input type="number" id="manualExKcal" placeholder="kcal" required>
                                    <input type="number" id="manualExMin" placeholder="분" required>
                                    <button type="submit">입력</button>
                                </form>
                            </div>

                            <div class="list-section">
                                <ul id="exerciseList"></ul>
                                <p class="total-kcal-display">소모한 칼로리: <span id="burnKcal">0</span> kcal</p>
                            </div>
                        </div>
                    </div>

                    <div id="sub-diet" class="health-section">
                        <div class="calorie-column" style="width:100%; box-sizing:border-box;">
                            <h3>🍎 오늘의 식단</h3>
                            <div class="form-section">
                                <form id="mealForm" autocomplete="off">
                                    <div class="autocomplete-wrapper">
                                        <input type="text" id="foodName" placeholder="음식 검색" required>
                                        <ul id="foodSuggestions" class="suggestion-list"></ul>
                                    </div>
                                    <div class="form-row">
                                        <input type="number" id="foodAmount" placeholder="수량(인분)" required>
                                        <button type="submit">추가</button>
                                    </div>
                                </form>
                            </div>

                            <div class="manual-input-box">
                                <h4>직접 입력</h4>
                                <form id="manualMealForm" class="manual-form">
                                    <input type="text" id="manualFoodName" placeholder="음식명" required>
                                    <input type="number" id="manualFoodKcal" placeholder="총 칼로리" required>
                                    <button type="submit">입력</button>
                                </form>
                            </div>

                            <div class="list-section">
                                <ul id="mealList"></ul>
                                <p class="total-kcal-display">섭취한 칼로리: <span id="consumeKcal">0</span> kcal</p>
                            </div>
                        </div>
                    </div>

                </div>