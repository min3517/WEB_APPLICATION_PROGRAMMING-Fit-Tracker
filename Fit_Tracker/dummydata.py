import json
import re
import random
import math
import sqlite3
from datetime import datetime, timedelta

def load_js_data(filename):
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
            match = re.search(r'\[.*\]', content, re.DOTALL)
            if match:
                return json.loads(match.group(0))
    except Exception as e:
        print(f"Error loading {filename}: {e}")
        return []

def classify_food(food):
    name = food['name']
    kcal = food['kcal_per_unit']
    
    # 조미료나 칼로리 낮은 경우
    ingredients = ['소금', '간장', '식초', '기름', '가루', '소스', '장', '잼', '버터', '마요네즈', '케첩', '페이스트']
    if any(k in name for k in ingredients) or (kcal < 5 and '티' not in name and '차' not in name):
        return 'ingredient'

    junk_keywords = ['피자','햄버거','치킨','라면','튀김','도넛','케이크','과자','스낵','아이스크림','소세지','초콜릿','사탕','콜라','사이다','짜장','짬뽕']
    diet_keywords = ['닭가슴','샐러드','고구마','토마토','오이','두부','곤약','채소','나물','죽','묵','현미']
    bulk_keywords = ['쇠고기','돼지고기','스테이크','장어','보쌈','족발','삼계탕','밥','덮밥','국밥','참치','갈비']

    if any(k in name for k in junk_keywords): return 'junk'
    if any(k in name for k in diet_keywords) or (kcal < 100 and '볶음' not in name): return 'diet'
    if any(k in name for k in bulk_keywords) and kcal > 150: return 'bulk'
    return 'normal'

def classify_exercise(ex):
    name = ex['name']
    mets = ex.get('mets', 3.0)
    muscle_keywords = ['웨이트','스쿼트','데드리프트','프레스','보디빌딩','헬스','근력','푸쉬업','윗몸','크런치','플랭크','아령']
    cardio_keywords = ['달리기','수영','자전거','줄넘기','에어로빅','댄스','축구','농구','테니스','등산','배드민턴']
    
    if any(k in name for k in muscle_keywords): return 'muscle'
    if any(k in name for k in cardio_keywords) or mets >= 6.0: return 'cardio'
    if mets < 3.5 or any(k in name for k in ['걷기','산책','요가','스트레칭']): return 'light'
    return 'cardio'


raw_foods = load_js_data('food_data.js')
raw_exercises = load_js_data('exercise_data.js')

FOOD_DATA = []
for f in raw_foods:
    tag = classify_food(f)
    if tag != 'ingredient': 
        f['tag'] = tag
        FOOD_DATA.append(f)

EXERCISE_DATA = []
for e in raw_exercises:
    e['type'] = classify_exercise(e)
    EXERCISE_DATA.append(e)


# 2. BMR / 식단 / 운동 / 체중 계산 

def calculate_bmr(gender, weight, height, age):
    if gender == 'M':
        return 88.362 + 13.397*weight + 4.799*height - 5.677*age
    else:
        return 447.593 + 9.247*weight + 3.098*height - 4.330*age

def get_age(birth_str):
    birth = datetime.strptime(birth_str, "%Y-%m-%d")
    today = datetime.now()
    age = today.year - birth.year
    if (today.month, today.day) < (birth.month, birth.day):
        age -= 1
    return age

def get_daily_food_plan(user_type, current_weight, user_info, date_obj):
    age = get_age(user_info['birth'])
    bmr = calculate_bmr(user_info['gender'], current_weight, user_info['height'], age)
    maintenance_kcal = bmr * 1.375

    meal_count = 3
    target_kcal = maintenance_kcal

    if user_type == "diet":
        target_kcal = maintenance_kcal * random.uniform(0.7, 0.9)
        meal_count = random.choices([1,2,3], weights=[10,40,50])[0]
        preferred = ['diet','normal']
    elif user_type == "bulk":
        target_kcal = maintenance_kcal * random.uniform(1.2, 1.5)
        meal_count = random.choices([3,4,5], weights=[10,60,30])[0]
        preferred = ['bulk','normal']
    else:
        if date_obj.month == 9:
            target_kcal = maintenance_kcal * random.uniform(0.9,1.1)
            meal_count = random.choice([2,3])
        elif date_obj.month == 10:
            target_kcal = maintenance_kcal * random.uniform(1.1,1.3)
            meal_count = random.choice([2,3,4])
        else: 
            target_kcal = maintenance_kcal * random.uniform(1.5, 2.2) 
            meal_count = random.choices([1,2,3,4,5], weights=[5,5,20,30,40])[0] 
        preferred = ['junk','normal','bulk']

    menu = []
    candidates = [f for f in FOOD_DATA if f['tag'] in preferred]
    if not candidates: candidates = FOOD_DATA

    kcal_per_meal = target_kcal / meal_count

    for _ in range(meal_count):
        valid_candidates = [f for f in candidates if f['kcal_per_unit'] > 50]
        if not valid_candidates: valid_candidates = candidates
        
        food = random.choice(valid_candidates)
        unit = food['kcal_per_unit']
        if unit <= 0: unit = 100

        calculated_amount = kcal_per_meal / unit
        
        # 노이즈 추가
        amount = calculated_amount * random.uniform(0.8, 1.2)
        
        # 최대 3인분
        if amount > 3.0: 
            amount = 3.0 
        

        amount = max(0.5, round(amount, 1))
        total = round(unit * amount, 1)

        menu.append((food['name'], amount, total))
    return menu

def get_daily_exercise(user_type, current_weight):
    if user_type == "diet":
        candidates = [e for e in EXERCISE_DATA if e['type']=='cardio']
        duration = random.randint(30,90)
    elif user_type == "bulk":
        candidates = [e for e in EXERCISE_DATA if e['type']=='muscle']
        duration = random.randint(40,100)
    else:
        candidates = [e for e in EXERCISE_DATA if e['type']=='light']
        duration = random.randint(10,40)

    if not candidates: candidates = EXERCISE_DATA
    ex = random.choice(candidates)
    mets = ex.get('mets', 3.0)
    kcal = round(mets * current_weight * (duration/60), 1)
    return (ex['name'], duration, kcal)

def calculate_weight(user_type, start_w, end_w, idx, total_days, date_obj):
    progress = idx / total_days

    noise = random.uniform(-0.6, 0.6) 

    if user_type == "diet":
        base = start_w - (start_w-end_w)*(progress**0.6)
        fluct = 1.5*math.sin(idx*0.2) if 20<=idx<=60 else 0
        return round(base+fluct+noise, 1)
    elif user_type == "bulk":
        base = start_w + (end_w-start_w)*(progress**1.8)
        fluct = math.sin(date_obj.day*0.5)*1.2 if date_obj.month==10 else 0
        return round(base+fluct+noise, 1)
    elif user_type == "lazy":
        base = start_w + (end_w - start_w) * (progress ** 1.3)
        return round(base + noise, 1)
    else:
        if date_obj.month==9: base=start_w
        elif date_obj.month==10: base=start_w + (2*(date_obj.day/31))
        else: base=start_w + 2 + ((end_w-start_w-2)*(date_obj.day/30))
        return round(base + noise, 1)


# 3. 유저 설정

users_config = [
    {"id":"beslim","pw":"1111","name":"김다은","gender":"F","birth":"2004-09-01","start_w":76,"end_w":55,"height":163,"reg_date":"2025-09-01","end_date":"2025-12-03","type":"diet","miss_w":5,"miss_f":5,"miss_e":25},
    {"id":"behealthy","pw":"1111","name":"이준호","gender":"M","birth":"1999-05-05","start_w":59,"end_w":68,"height":177,"reg_date":"2025-09-17","end_date":"2025-12-03","type":"bulk","miss_w":15,"miss_f":10,"miss_e":15},
    {"id":"belazy","pw":"1111","name":"박민진","gender":"F","birth":"1980-07-13","start_w":56,"end_w":67,"height":158,"reg_date":"2025-09-11","end_date":"2025-12-03","type":"lazy","miss_w":30,"miss_f":3,"miss_e":40},
]


# 4. 날짜 범위

def date_range(start_str, end_str):
    start = datetime.strptime(start_str,"%Y-%m-%d")
    end = datetime.strptime(end_str,"%Y-%m-%d")
    return [start + timedelta(days=i) for i in range((end-start).days+1)]


# 5. 가상데이터 삽입

try:
    with sqlite3.connect("fit_tracker.db") as conn:
        cur = conn.cursor()

        for user in users_config:
            uid = user['id']

            cur.execute("DELETE FROM exercise_logs WHERE user_id=?", (uid,))
            cur.execute("DELETE FROM food_logs WHERE user_id=?", (uid,))
            cur.execute("DELETE FROM weight_logs WHERE user_id=?", (uid,))
            cur.execute("DELETE FROM daily_logs WHERE user_id=?", (uid,))
            cur.execute("DELETE FROM users WHERE user_id=?", (uid,))

            # 유저 생성
            cur.execute("""
                INSERT INTO users (user_id, password, name, gender, birthdate, weight, height, activity_level, reg_date)
                VALUES (?, ?, ?, ?, ?, ?, ?, NULL, ?)
            """, (uid, user['pw'], user['name'], user['gender'], user['birth'], user['end_w'], user['height'], user['reg_date']))

            dates = date_range(user['reg_date'], user['end_date'])
            total = len(dates)

            skip_w = set(random.sample(range(total), user['miss_w']))
            skip_f = set(random.sample(range(total), user['miss_f']))
            skip_e = set(random.sample(range(total), user['miss_e']))

            weight_data = []
            food_data = []
            exercise_data = []
            daily_logs_data = []

            for idx, date_obj in enumerate(dates):
                date_str = date_obj.strftime("%Y-%m-%d")
                w = calculate_weight(user['type'], user['start_w'], user['end_w'], idx, total, date_obj)

                # 1. 체중
                if idx not in skip_w:
                    weight_data.append((uid, date_str, w))

                # 2. 식단
                if idx not in skip_f:
                    meals = get_daily_food_plan(user['type'], w, user, date_obj)
                    for food_name, amount, kcal in meals:
                        food_data.append((uid, date_str, food_name, amount, kcal))

                # 3. 운동
                if idx not in skip_e:
                    ex_name, mins, ex_kcal = get_daily_exercise(user['type'], w)
                    exercise_data.append((uid, date_str, ex_name, mins, ex_kcal))

                # 4. 일기
                if random.random() > 0.8:
                    mood = random.choice(['good','normal','tired','sad','angry'])
                    diary_text = random.choice([f"오늘의 기분은 {mood}했다.", "침대에서 늦게 일어났다.", "배가 고팠다.", f"{mood}한 날이었다.", f"{mood}하다."])
                    daily_logs_data.append((uid, date_str, mood, diary_text))

            cur.executemany("INSERT INTO weight_logs (user_id, date, weight) VALUES (?, ?, ?)", weight_data)
            cur.executemany("INSERT INTO food_logs (user_id, date, name, amount, kcal) VALUES (?, ?, ?, ?, ?)", food_data)
            cur.executemany("INSERT INTO exercise_logs (user_id, date, name, minutes, kcal) VALUES (?, ?, ?, ?, ?)", exercise_data)
            cur.executemany("INSERT OR REPLACE INTO daily_logs (user_id, date, mood, diary) VALUES (?, ?, ?, ?)", daily_logs_data)

            conn.commit() 
            print(f"{uid} 완료")

    print("\n전체 데이터 생성 완료")

except Exception as e:
    print("오류 발생:", e)