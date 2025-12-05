const FOOD_DATA = [
  {
    "name": "가래떡(떡국용)",
    "kcal_per_unit": 311.0
  },
  {
    "name": "가래떡(떡볶이용)",
    "kcal_per_unit": 96.0
  },
  {
    "name": "가자미",
    "kcal_per_unit": 58.0
  },
  {
    "name": "가자미구이",
    "kcal_per_unit": 76.0
  },
  {
    "name": "가자미조림",
    "kcal_per_unit": 45.4
  },
  {
    "name": "가지",
    "kcal_per_unit": 6.0
  },
  {
    "name": "가지나물",
    "kcal_per_unit": 19.0
  },
  {
    "name": "간장(왜간장)",
    "kcal_per_unit": 8.0
  },
  {
    "name": "갈비구이",
    "kcal_per_unit": 586.0
  },
  {
    "name": "갈비찜",
    "kcal_per_unit": 262.2
  },
  {
    "name": "갈비탕",
    "kcal_per_unit": 362.5
  },
  {
    "name": "갈치",
    "kcal_per_unit": 60.0
  },
  {
    "name": "갈치구이",
    "kcal_per_unit": 110.4
  },
  {
    "name": "갈치조림",
    "kcal_per_unit": 37.0
  },
  {
    "name": "갈치찌개",
    "kcal_per_unit": 48.2
  },
  {
    "name": "감(곶감)",
    "kcal_per_unit": 119.0
  },
  {
    "name": "감(단감)",
    "kcal_per_unit": 37.0
  },
  {
    "name": "감자",
    "kcal_per_unit": 43.0
  },
  {
    "name": "감자국",
    "kcal_per_unit": 55.1
  },
  {
    "name": "감자볶음",
    "kcal_per_unit": 36.2
  },
  {
    "name": "감자샐러드",
    "kcal_per_unit": 64.0
  },
  {
    "name": "감자조림",
    "kcal_per_unit": 39.0
  },
  {
    "name": "감자칩",
    "kcal_per_unit": 239.0
  },
  {
    "name": "강낭콩",
    "kcal_per_unit": 11.0
  },
  {
    "name": "개고기",
    "kcal_per_unit": 144.0
  },
  {
    "name": "건빵",
    "kcal_per_unit": 104.0
  },
  {
    "name": "검정콩",
    "kcal_per_unit": 42.0
  },
  {
    "name": "겨자",
    "kcal_per_unit": 13.0
  },
  {
    "name": "경단",
    "kcal_per_unit": 144.0
  },
  {
    "name": "고구마",
    "kcal_per_unit": 90.0
  },
  {
    "name": "고구마맛탕",
    "kcal_per_unit": 266.0
  },
  {
    "name": "고구마줄기",
    "kcal_per_unit": 2.0
  },
  {
    "name": "고구마튀김",
    "kcal_per_unit": 72.4
  },
  {
    "name": "고기만두",
    "kcal_per_unit": 348.1
  },
  {
    "name": "고들빼기",
    "kcal_per_unit": 14.0
  },
  {
    "name": "고등어",
    "kcal_per_unit": 92.0
  },
  {
    "name": "고등어(자반고등어)",
    "kcal_per_unit": 95.0
  },
  {
    "name": "고등어구이",
    "kcal_per_unit": 110.4
  },
  {
    "name": "고등어조림",
    "kcal_per_unit": 107.0
  },
  {
    "name": "고등어찌개",
    "kcal_per_unit": 66.0
  },
  {
    "name": "고등어튀김",
    "kcal_per_unit": 167.3
  },
  {
    "name": "고사리",
    "kcal_per_unit": 8.0
  },
  {
    "name": "고사리(말린것)",
    "kcal_per_unit": 68.0
  },
  {
    "name": "고사리나물",
    "kcal_per_unit": 25.5
  },
  {
    "name": "고추냉이(와사비)",
    "kcal_per_unit": 6.0
  },
  {
    "name": "고추멸치볶음",
    "kcal_per_unit": 30.3
  },
  {
    "name": "고추볶음",
    "kcal_per_unit": 16.0
  },
  {
    "name": "고추장",
    "kcal_per_unit": 27.0
  },
  {
    "name": "고추장아찌",
    "kcal_per_unit": 6.3
  },
  {
    "name": "고추튀김",
    "kcal_per_unit": 42.0
  },
  {
    "name": "고춧가루",
    "kcal_per_unit": 5.0
  },
  {
    "name": "고춧잎",
    "kcal_per_unit": 2.0
  },
  {
    "name": "골뱅이(통조림)",
    "kcal_per_unit": 34.0
  },
  {
    "name": "골뱅이무침",
    "kcal_per_unit": 82.0
  },
  {
    "name": "곰보빵(소보로빵)",
    "kcal_per_unit": 263.0
  },
  {
    "name": "곰탕(가정식)",
    "kcal_per_unit": 119.0
  },
  {
    "name": "곰탕(외식)",
    "kcal_per_unit": 198.0
  },
  {
    "name": "곱창전골",
    "kcal_per_unit": 127.5
  },
  {
    "name": "과일탄산음료",
    "kcal_per_unit": 123.0
  },
  {
    "name": "광어매운탕",
    "kcal_per_unit": 115.0
  },
  {
    "name": "국밥",
    "kcal_per_unit": 343.9
  },
  {
    "name": "군만두",
    "kcal_per_unit": 429.0
  },
  {
    "name": "굴",
    "kcal_per_unit": 13.0
  },
  {
    "name": "굴무침",
    "kcal_per_unit": 23.3
  },
  {
    "name": "굴비",
    "kcal_per_unit": 266.0
  },
  {
    "name": "귤",
    "kcal_per_unit": 38.0
  },
  {
    "name": "귤쥬스",
    "kcal_per_unit": 78.0
  },
  {
    "name": "근대",
    "kcal_per_unit": 7.0
  },
  {
    "name": "근대된장국",
    "kcal_per_unit": 36.1
  },
  {
    "name": "금귤",
    "kcal_per_unit": 66.0
  },
  {
    "name": "기장",
    "kcal_per_unit": 22.0
  },
  {
    "name": "김",
    "kcal_per_unit": 2.0
  },
  {
    "name": "김구이",
    "kcal_per_unit": 3.0
  },
  {
    "name": "김무침",
    "kcal_per_unit": 74.0
  },
  {
    "name": "김밥",
    "kcal_per_unit": 306.0
  },
  {
    "name": "김치(갓김치)",
    "kcal_per_unit": 14.0
  },
  {
    "name": "김치(고들빼기김치)",
    "kcal_per_unit": 26.0
  },
  {
    "name": "김치(깍두기)",
    "kcal_per_unit": 12.0
  },
  {
    "name": "김치(깻잎김치)",
    "kcal_per_unit": 19.0
  },
  {
    "name": "김치(나박김치)",
    "kcal_per_unit": 9.0
  },
  {
    "name": "김치(동치미)",
    "kcal_per_unit": 11.0
  },
  {
    "name": "김치(무청김치)",
    "kcal_per_unit": 8.0
  },
  {
    "name": "김치(배추김치)",
    "kcal_per_unit": 7.0
  },
  {
    "name": "김치(백김치)",
    "kcal_per_unit": 7.0
  },
  {
    "name": "김치(부추김치)",
    "kcal_per_unit": 21.0
  },
  {
    "name": "김치(열무김치)",
    "kcal_per_unit": 13.0
  },
  {
    "name": "김치(오이김치)",
    "kcal_per_unit": 16.0
  },
  {
    "name": "김치(오이소박이)",
    "kcal_per_unit": 6.0
  },
  {
    "name": "김치(총각김치)",
    "kcal_per_unit": 15.0
  },
  {
    "name": "김치(파김치)",
    "kcal_per_unit": 16.0
  },
  {
    "name": "김치국",
    "kcal_per_unit": 21.3
  },
  {
    "name": "김치볶음",
    "kcal_per_unit": 19.1
  },
  {
    "name": "김치볶음밥",
    "kcal_per_unit": 480.8
  },
  {
    "name": "김치전",
    "kcal_per_unit": 133.3
  },
  {
    "name": "김치찌개",
    "kcal_per_unit": 88.1
  },
  {
    "name": "김튀김",
    "kcal_per_unit": 208.2
  },
  {
    "name": "깨(검정깨)",
    "kcal_per_unit": 11.0
  },
  {
    "name": "깨(흰깨)",
    "kcal_per_unit": 12.0
  },
  {
    "name": "깨소금",
    "kcal_per_unit": 12.0
  },
  {
    "name": "깻잎",
    "kcal_per_unit": 5.0
  },
  {
    "name": "깻잎장아찌",
    "kcal_per_unit": 6.0
  },
  {
    "name": "꼬막",
    "kcal_per_unit": 20.0
  },
  {
    "name": "꼬막찜",
    "kcal_per_unit": 34.0
  },
  {
    "name": "꽁치",
    "kcal_per_unit": 74.0
  },
  {
    "name": "꽁치구이",
    "kcal_per_unit": 98.0
  },
  {
    "name": "꽁치조림",
    "kcal_per_unit": 60.0
  },
  {
    "name": "꽃게",
    "kcal_per_unit": 33.0
  },
  {
    "name": "꽃게장",
    "kcal_per_unit": 32.0
  },
  {
    "name": "꽃게탕",
    "kcal_per_unit": 98.0
  },
  {
    "name": "꿀",
    "kcal_per_unit": 59.0
  },
  {
    "name": "낙지",
    "kcal_per_unit": 33.0
  },
  {
    "name": "낙지볶음",
    "kcal_per_unit": 90.0
  },
  {
    "name": "냉이",
    "kcal_per_unit": 9.0
  },
  {
    "name": "냉이된장국",
    "kcal_per_unit": 43.0
  },
  {
    "name": "넙치(광어)",
    "kcal_per_unit": 52.0
  },
  {
    "name": "녹두",
    "kcal_per_unit": 151.0
  },
  {
    "name": "녹두묵",
    "kcal_per_unit": 11.0
  },
  {
    "name": "녹두빈대떡",
    "kcal_per_unit": 198.4
  },
  {
    "name": "녹차",
    "kcal_per_unit": 2.0
  },
  {
    "name": "녹차음료",
    "kcal_per_unit": 2.0
  },
  {
    "name": "누룽지",
    "kcal_per_unit": 109.7
  },
  {
    "name": "느타리버섯",
    "kcal_per_unit": 6.0
  },
  {
    "name": "느타리버섯볶음",
    "kcal_per_unit": 24.0
  },
  {
    "name": "늙은호박",
    "kcal_per_unit": 16.0
  },
  {
    "name": "다랑어(냉동)",
    "kcal_per_unit": 34.0
  },
  {
    "name": "다랑어(통조림)",
    "kcal_per_unit": 59.0
  },
  {
    "name": "다시마",
    "kcal_per_unit": 3.0
  },
  {
    "name": "다시마(말린것)",
    "kcal_per_unit": 1.0
  },
  {
    "name": "다시마튀각",
    "kcal_per_unit": 68.0
  },
  {
    "name": "단무지",
    "kcal_per_unit": 2.0
  },
  {
    "name": "단팥빵",
    "kcal_per_unit": 249.0
  },
  {
    "name": "달걀",
    "kcal_per_unit": 55.0
  },
  {
    "name": "달걀국",
    "kcal_per_unit": 73.0
  },
  {
    "name": "달걀말이",
    "kcal_per_unit": 74.2
  },
  {
    "name": "달걀부침(달걀후라이)",
    "kcal_per_unit": 73.3
  },
  {
    "name": "달걀찜",
    "kcal_per_unit": 50.3
  },
  {
    "name": "달래",
    "kcal_per_unit": 3.0
  },
  {
    "name": "달래된장찌개",
    "kcal_per_unit": 30.0
  },
  {
    "name": "달래무침",
    "kcal_per_unit": 32.0
  },
  {
    "name": "닭개장",
    "kcal_per_unit": 141.1
  },
  {
    "name": "닭고기",
    "kcal_per_unit": 171.0
  },
  {
    "name": "닭고기(가슴)",
    "kcal_per_unit": 198.0
  },
  {
    "name": "닭고기(가슴,껍질제거)",
    "kcal_per_unit": 97.0
  },
  {
    "name": "닭고기(날개)",
    "kcal_per_unit": 210.0
  },
  {
    "name": "닭고기(다리)",
    "kcal_per_unit": 120.0
  },
  {
    "name": "닭고기(다리,껍질제거)",
    "kcal_per_unit": 114.0
  },
  {
    "name": "닭도리탕",
    "kcal_per_unit": 201.0
  },
  {
    "name": "닭볶음(닭갈비)",
    "kcal_per_unit": 322.7
  },
  {
    "name": "닭양념튀김",
    "kcal_per_unit": 335.2
  },
  {
    "name": "닭죽",
    "kcal_per_unit": 526.3
  },
  {
    "name": "닭찜",
    "kcal_per_unit": 254.3
  },
  {
    "name": "닭튀김",
    "kcal_per_unit": 328.4
  },
  {
    "name": "당근",
    "kcal_per_unit": 3.0
  },
  {
    "name": "당면",
    "kcal_per_unit": 70.0
  },
  {
    "name": "대구",
    "kcal_per_unit": 72.0
  },
  {
    "name": "대구매운탕",
    "kcal_per_unit": 119.0
  },
  {
    "name": "대두",
    "kcal_per_unit": 57.0
  },
  {
    "name": "대추(건과)",
    "kcal_per_unit": 12.0
  },
  {
    "name": "더덕",
    "kcal_per_unit": 11.0
  },
  {
    "name": "더덕무침",
    "kcal_per_unit": 31.0
  },
  {
    "name": "도라지",
    "kcal_per_unit": 29.0
  },
  {
    "name": "도라지나물",
    "kcal_per_unit": 62.0
  },
  {
    "name": "도라지생채",
    "kcal_per_unit": 41.0
  },
  {
    "name": "도우넛(링)",
    "kcal_per_unit": 309.0
  },
  {
    "name": "도우넛(팥)",
    "kcal_per_unit": 439.0
  },
  {
    "name": "도토리묵",
    "kcal_per_unit": 30.0
  },
  {
    "name": "도토리묵무침",
    "kcal_per_unit": 52.0
  },
  {
    "name": "돈까스",
    "kcal_per_unit": 287.5
  },
  {
    "name": "돌나물",
    "kcal_per_unit": 4.0
  },
  {
    "name": "돔(옥돔)",
    "kcal_per_unit": 55.0
  },
  {
    "name": "동부",
    "kcal_per_unit": 9.0
  },
  {
    "name": "동태국",
    "kcal_per_unit": 60.5
  },
  {
    "name": "동태조림",
    "kcal_per_unit": 80.0
  },
  {
    "name": "동태찌개",
    "kcal_per_unit": 71.1
  },
  {
    "name": "돼지갈비구이",
    "kcal_per_unit": 375.0
  },
  {
    "name": "돼지갈비찜",
    "kcal_per_unit": 324.4
  },
  {
    "name": "돼지고기",
    "kcal_per_unit": 157.0
  },
  {
    "name": "돼지고기(갈비)",
    "kcal_per_unit": 270.0
  },
  {
    "name": "돼지고기(삼겹살)",
    "kcal_per_unit": 513.0
  },
  {
    "name": "돼지고기가공품(등심햄)",
    "kcal_per_unit": 20.0
  },
  {
    "name": "돼지고기가공품(런천미트)",
    "kcal_per_unit": 39.0
  },
  {
    "name": "돼지고기가공품(베이컨)",
    "kcal_per_unit": 17.0
  },
  {
    "name": "돼지고기가공품(비엔나소시지)",
    "kcal_per_unit": 105.0
  },
  {
    "name": "돼지고기가공품(프랑크프르트소시지)",
    "kcal_per_unit": 97.0
  },
  {
    "name": "돼지고기구이",
    "kcal_per_unit": 427.3
  },
  {
    "name": "돼지고기덮밥",
    "kcal_per_unit": 660.3
  },
  {
    "name": "돼지고기볶음",
    "kcal_per_unit": 260.0
  },
  {
    "name": "돼지고기장조림",
    "kcal_per_unit": 91.0
  },
  {
    "name": "돼지고기찌개",
    "kcal_per_unit": 136.2
  },
  {
    "name": "돼지불고기",
    "kcal_per_unit": 256.0
  },
  {
    "name": "된장",
    "kcal_per_unit": 24.0
  },
  {
    "name": "된장(가루된장)",
    "kcal_per_unit": 33.0
  },
  {
    "name": "된장국",
    "kcal_per_unit": 60.0
  },
  {
    "name": "된장찌개",
    "kcal_per_unit": 60.2
  },
  {
    "name": "두릅",
    "kcal_per_unit": 13.0
  },
  {
    "name": "두릅무침",
    "kcal_per_unit": 54.0
  },
  {
    "name": "두부",
    "kcal_per_unit": 50.0
  },
  {
    "name": "두부김치",
    "kcal_per_unit": 156.0
  },
  {
    "name": "두부부침",
    "kcal_per_unit": 50.1
  },
  {
    "name": "두부조림",
    "kcal_per_unit": 89.4
  },
  {
    "name": "두부찌개",
    "kcal_per_unit": 88.0
  },
  {
    "name": "두유음료",
    "kcal_per_unit": 144.0
  },
  {
    "name": "들기름",
    "kcal_per_unit": 35.0
  },
  {
    "name": "들깨",
    "kcal_per_unit": 8.0
  },
  {
    "name": "들미나리",
    "kcal_per_unit": 5.0
  },
  {
    "name": "딸기",
    "kcal_per_unit": 26.0
  },
  {
    "name": "딸기잼",
    "kcal_per_unit": 49.0
  },
  {
    "name": "땅콩",
    "kcal_per_unit": 74.0
  },
  {
    "name": "땅콩버터",
    "kcal_per_unit": 30.0
  },
  {
    "name": "떡국",
    "kcal_per_unit": 399.0
  },
  {
    "name": "떡만두국",
    "kcal_per_unit": 470.0
  },
  {
    "name": "떡볶이",
    "kcal_per_unit": 170.0
  },
  {
    "name": "라면",
    "kcal_per_unit": 521.0
  },
  {
    "name": "롤빵",
    "kcal_per_unit": 142.0
  },
  {
    "name": "롤케익",
    "kcal_per_unit": 219.0
  },
  {
    "name": "마가린",
    "kcal_per_unit": 36.0
  },
  {
    "name": "마늘",
    "kcal_per_unit": 13.0
  },
  {
    "name": "마늘장아찌",
    "kcal_per_unit": 5.5
  },
  {
    "name": "마늘쫑무침",
    "kcal_per_unit": 14.0
  },
  {
    "name": "마늘쫑볶음",
    "kcal_per_unit": 31.0
  },
  {
    "name": "마늘쫑장아찌",
    "kcal_per_unit": 5.5
  },
  {
    "name": "마요네즈",
    "kcal_per_unit": 74.0
  },
  {
    "name": "마파두부",
    "kcal_per_unit": 59.0
  },
  {
    "name": "막걸리",
    "kcal_per_unit": 184.0
  },
  {
    "name": "만두국",
    "kcal_per_unit": 473.0
  },
  {
    "name": "맛술(미림)",
    "kcal_per_unit": 7.0
  },
  {
    "name": "맥주",
    "kcal_per_unit": 131.0
  },
  {
    "name": "머위",
    "kcal_per_unit": 9.0
  },
  {
    "name": "머위나물",
    "kcal_per_unit": 29.0
  },
  {
    "name": "멍게",
    "kcal_per_unit": 21.0
  },
  {
    "name": "메기",
    "kcal_per_unit": 86.0
  },
  {
    "name": "메기매운탕",
    "kcal_per_unit": 103.0
  },
  {
    "name": "메밀국수(건면)",
    "kcal_per_unit": 447.0
  },
  {
    "name": "메추라기알",
    "kcal_per_unit": 70.0
  },
  {
    "name": "메추라기알장조림",
    "kcal_per_unit": 88.0
  },
  {
    "name": "멸치(자건품, 중)",
    "kcal_per_unit": 12.0
  },
  {
    "name": "멸치볶음",
    "kcal_per_unit": 47.0
  },
  {
    "name": "명란알",
    "kcal_per_unit": 28.0
  },
  {
    "name": "명란젓",
    "kcal_per_unit": 18.0
  },
  {
    "name": "명태(동태)",
    "kcal_per_unit": 37.0
  },
  {
    "name": "명태(북어)",
    "kcal_per_unit": 58.0
  },
  {
    "name": "모듬회",
    "kcal_per_unit": 185.0
  },
  {
    "name": "모밀국수",
    "kcal_per_unit": 472.0
  },
  {
    "name": "모시조개젓",
    "kcal_per_unit": 5.0
  },
  {
    "name": "목이버섯(말린것)",
    "kcal_per_unit": 5.0
  },
  {
    "name": "무",
    "kcal_per_unit": 28.0
  },
  {
    "name": "무국",
    "kcal_per_unit": 61.4
  },
  {
    "name": "무나물",
    "kcal_per_unit": 53.0
  },
  {
    "name": "무된장국",
    "kcal_per_unit": 56.0
  },
  {
    "name": "무말랭이",
    "kcal_per_unit": 11.0
  },
  {
    "name": "무말랭이무침",
    "kcal_per_unit": 23.3
  },
  {
    "name": "무말랭이장아찌",
    "kcal_per_unit": 19.0
  },
  {
    "name": "무생채",
    "kcal_per_unit": 55.0
  },
  {
    "name": "무장아찌(무초절임)",
    "kcal_per_unit": 13.2
  },
  {
    "name": "무짠지",
    "kcal_per_unit": 3.0
  },
  {
    "name": "무청",
    "kcal_per_unit": 11.0
  },
  {
    "name": "문어",
    "kcal_per_unit": 7.0
  },
  {
    "name": "물냉면",
    "kcal_per_unit": 583.0
  },
  {
    "name": "물엿",
    "kcal_per_unit": 59.0
  },
  {
    "name": "미꾸라지",
    "kcal_per_unit": 58.0
  },
  {
    "name": "미나리나물",
    "kcal_per_unit": 18.5
  },
  {
    "name": "미나리무침",
    "kcal_per_unit": 21.0
  },
  {
    "name": "미더덕",
    "kcal_per_unit": 8.0
  },
  {
    "name": "미숫가루",
    "kcal_per_unit": 85.0
  },
  {
    "name": "미역(말린것)",
    "kcal_per_unit": 6.0
  },
  {
    "name": "미역(생것)",
    "kcal_per_unit": 3.0
  },
  {
    "name": "미역국",
    "kcal_per_unit": 20.4
  },
  {
    "name": "미역줄기볶음",
    "kcal_per_unit": 12.0
  },
  {
    "name": "미역초무침",
    "kcal_per_unit": 23.1
  },
  {
    "name": "밀가루(중력분)",
    "kcal_per_unit": 170.0
  },
  {
    "name": "바나나",
    "kcal_per_unit": 108.0
  },
  {
    "name": "바지락조개(모시조개)",
    "kcal_per_unit": 24.0
  },
  {
    "name": "밤",
    "kcal_per_unit": 16.0
  },
  {
    "name": "배",
    "kcal_per_unit": 59.0
  },
  {
    "name": "배추",
    "kcal_per_unit": 6.0
  },
  {
    "name": "배추겉절이",
    "kcal_per_unit": 33.4
  },
  {
    "name": "배추나물",
    "kcal_per_unit": 13.0
  },
  {
    "name": "백미",
    "kcal_per_unit": 289.0
  },
  {
    "name": "백미죽",
    "kcal_per_unit": 194.6
  },
  {
    "name": "백설기",
    "kcal_per_unit": 222.0
  },
  {
    "name": "백합",
    "kcal_per_unit": 19.0
  },
  {
    "name": "뱅어포",
    "kcal_per_unit": 36.0
  },
  {
    "name": "버섯볶음",
    "kcal_per_unit": 26.1
  },
  {
    "name": "버터",
    "kcal_per_unit": 37.0
  },
  {
    "name": "보리",
    "kcal_per_unit": 34.0
  },
  {
    "name": "보리밥",
    "kcal_per_unit": 380.6
  },
  {
    "name": "보신탕",
    "kcal_per_unit": 154.0
  },
  {
    "name": "보쌈",
    "kcal_per_unit": 202.0
  },
  {
    "name": "복매운탕",
    "kcal_per_unit": 93.0
  },
  {
    "name": "복숭아(통조림)",
    "kcal_per_unit": 88.0
  },
  {
    "name": "복어",
    "kcal_per_unit": 80.0
  },
  {
    "name": "복지리",
    "kcal_per_unit": 123.0
  },
  {
    "name": "볶음밥",
    "kcal_per_unit": 461.5
  },
  {
    "name": "볼락",
    "kcal_per_unit": 46.0
  },
  {
    "name": "부대찌개",
    "kcal_per_unit": 171.3
  },
  {
    "name": "부추",
    "kcal_per_unit": 6.0
  },
  {
    "name": "부추무침",
    "kcal_per_unit": 24.3
  },
  {
    "name": "부추전",
    "kcal_per_unit": 158.0
  },
  {
    "name": "부추전(가정식)",
    "kcal_per_unit": 263.0
  },
  {
    "name": "부추전(외식)",
    "kcal_per_unit": 44.0
  },
  {
    "name": "북어국",
    "kcal_per_unit": 112.4
  },
  {
    "name": "북어조림",
    "kcal_per_unit": 77.0
  },
  {
    "name": "북어찜",
    "kcal_per_unit": 120.0
  },
  {
    "name": "분말조미료(쇠고기)",
    "kcal_per_unit": 2.0
  },
  {
    "name": "불고기",
    "kcal_per_unit": 197.5
  },
  {
    "name": "불고기(가정식)",
    "kcal_per_unit": 132.0
  },
  {
    "name": "불고기(외식)",
    "kcal_per_unit": 230.4
  },
  {
    "name": "붉은고추",
    "kcal_per_unit": 1.0
  },
  {
    "name": "브로콜리",
    "kcal_per_unit": 8.0
  },
  {
    "name": "비름",
    "kcal_per_unit": 12.0
  },
  {
    "name": "비름나물",
    "kcal_per_unit": 29.0
  },
  {
    "name": "비빔국수",
    "kcal_per_unit": 599.0
  },
  {
    "name": "비빔냉면",
    "kcal_per_unit": 552.0
  },
  {
    "name": "비빔밥",
    "kcal_per_unit": 588.9
  },
  {
    "name": "비스킷(소프트)",
    "kcal_per_unit": 131.0
  },
  {
    "name": "비스킷(하드)",
    "kcal_per_unit": 86.0
  },
  {
    "name": "빵가루",
    "kcal_per_unit": 28.0
  },
  {
    "name": "사과",
    "kcal_per_unit": 69.0
  },
  {
    "name": "사우전드아일랜드드레싱",
    "kcal_per_unit": 72.0
  },
  {
    "name": "사이다",
    "kcal_per_unit": 100.0
  },
  {
    "name": "사탕",
    "kcal_per_unit": 24.0
  },
  {
    "name": "삼겹살구이",
    "kcal_per_unit": 610.4
  },
  {
    "name": "삼계탕(닭백숙)",
    "kcal_per_unit": 395.0
  },
  {
    "name": "삼치",
    "kcal_per_unit": 55.0
  },
  {
    "name": "삼치구이",
    "kcal_per_unit": 77.0
  },
  {
    "name": "삼치조림",
    "kcal_per_unit": 72.5
  },
  {
    "name": "상추",
    "kcal_per_unit": 2.0
  },
  {
    "name": "상추겉절이",
    "kcal_per_unit": 34.0
  },
  {
    "name": "새우(중하)",
    "kcal_per_unit": 33.0
  },
  {
    "name": "새우(중하,자건품)",
    "kcal_per_unit": 15.0
  },
  {
    "name": "새우볶음",
    "kcal_per_unit": 9.1
  },
  {
    "name": "새우젓",
    "kcal_per_unit": 2.0
  },
  {
    "name": "새우젓무침",
    "kcal_per_unit": 2.4
  },
  {
    "name": "샌드위치",
    "kcal_per_unit": 358.0
  },
  {
    "name": "생강",
    "kcal_per_unit": 1.0
  },
  {
    "name": "생선가스",
    "kcal_per_unit": 116.0
  },
  {
    "name": "생선전",
    "kcal_per_unit": 66.1
  },
  {
    "name": "생선초밥",
    "kcal_per_unit": 454.2
  },
  {
    "name": "샤베트",
    "kcal_per_unit": 102.0
  },
  {
    "name": "선짓국",
    "kcal_per_unit": 70.0
  },
  {
    "name": "설렁탕",
    "kcal_per_unit": 171.1
  },
  {
    "name": "설탕(백설탕)",
    "kcal_per_unit": 46.0
  },
  {
    "name": "설탕(황설탕)",
    "kcal_per_unit": 46.0
  },
  {
    "name": "셀러리",
    "kcal_per_unit": 2.0
  },
  {
    "name": "소라",
    "kcal_per_unit": 19.0
  },
  {
    "name": "소면(건면)",
    "kcal_per_unit": 490.0
  },
  {
    "name": "소주",
    "kcal_per_unit": 63.0
  },
  {
    "name": "송편(깨)",
    "kcal_per_unit": 95.0
  },
  {
    "name": "쇠고기,수입우(갈비)",
    "kcal_per_unit": 263.0
  },
  {
    "name": "쇠고기,수입우(등심)",
    "kcal_per_unit": 101.0
  },
  {
    "name": "쇠고기,수입우(사태)",
    "kcal_per_unit": 42.0
  },
  {
    "name": "쇠고기,수입우(양지)",
    "kcal_per_unit": 53.0
  },
  {
    "name": "쇠고기,수입우(우둔)",
    "kcal_per_unit": 34.0
  },
  {
    "name": "쇠고기,한우",
    "kcal_per_unit": 48.0
  },
  {
    "name": "쇠고기,한우(등심)",
    "kcal_per_unit": 86.0
  },
  {
    "name": "쇠고기,한우(사태)",
    "kcal_per_unit": 46.0
  },
  {
    "name": "쇠고기,한우(양지)",
    "kcal_per_unit": 58.0
  },
  {
    "name": "쇠고기국",
    "kcal_per_unit": 66.0
  },
  {
    "name": "쇠고기미역국",
    "kcal_per_unit": 63.0
  },
  {
    "name": "쇠고기부산물(간)",
    "kcal_per_unit": 39.0
  },
  {
    "name": "쇠고기부산물(곱창)",
    "kcal_per_unit": 56.0
  },
  {
    "name": "쇠고기부산물(선지)",
    "kcal_per_unit": 20.0
  },
  {
    "name": "쇠고기산적",
    "kcal_per_unit": 104.0
  },
  {
    "name": "쇠고기전골",
    "kcal_per_unit": 104.0
  },
  {
    "name": "수박",
    "kcal_per_unit": 31.0
  },
  {
    "name": "수수",
    "kcal_per_unit": 25.0
  },
  {
    "name": "수수밥",
    "kcal_per_unit": 465.8
  },
  {
    "name": "수육(쇠고기)",
    "kcal_per_unit": 127.1
  },
  {
    "name": "수제비",
    "kcal_per_unit": 453.2
  },
  {
    "name": "숙주나물",
    "kcal_per_unit": 4.0
  },
  {
    "name": "순대",
    "kcal_per_unit": 64.1
  },
  {
    "name": "순대국",
    "kcal_per_unit": 127.0
  },
  {
    "name": "순두부",
    "kcal_per_unit": 40.0
  },
  {
    "name": "순두부찌개",
    "kcal_per_unit": 80.3
  },
  {
    "name": "스낵과자(밀가루)",
    "kcal_per_unit": 145.0
  },
  {
    "name": "스낵과자(옥수수)",
    "kcal_per_unit": 237.0
  },
  {
    "name": "스파게티",
    "kcal_per_unit": 514.4
  },
  {
    "name": "스파게티(건면)",
    "kcal_per_unit": 309.0
  },
  {
    "name": "스프",
    "kcal_per_unit": 152.2
  },
  {
    "name": "시금치",
    "kcal_per_unit": 14.0
  },
  {
    "name": "시금치나물",
    "kcal_per_unit": 26.0
  },
  {
    "name": "시금치된장국",
    "kcal_per_unit": 35.1
  },
  {
    "name": "시래기된장국",
    "kcal_per_unit": 38.0
  },
  {
    "name": "시리얼(콘푸레이크)",
    "kcal_per_unit": 93.0
  },
  {
    "name": "식빵",
    "kcal_per_unit": 156.0
  },
  {
    "name": "식초",
    "kcal_per_unit": 1.0
  },
  {
    "name": "식혜",
    "kcal_per_unit": 89.0
  },
  {
    "name": "쌀과자",
    "kcal_per_unit": 183.0
  },
  {
    "name": "쌀밥",
    "kcal_per_unit": 405.0
  },
  {
    "name": "쌈장",
    "kcal_per_unit": 35.0
  },
  {
    "name": "쌍화차(분말)",
    "kcal_per_unit": 74.0
  },
  {
    "name": "쑥",
    "kcal_per_unit": 31.0
  },
  {
    "name": "쑥갓",
    "kcal_per_unit": 1.0
  },
  {
    "name": "쑥된장국",
    "kcal_per_unit": 52.5
  },
  {
    "name": "씀바귀",
    "kcal_per_unit": 12.0
  },
  {
    "name": "씀바귀나물",
    "kcal_per_unit": 43.0
  },
  {
    "name": "아구찜",
    "kcal_per_unit": 89.0
  },
  {
    "name": "아귀",
    "kcal_per_unit": 48.0
  },
  {
    "name": "아몬드",
    "kcal_per_unit": 48.0
  },
  {
    "name": "아욱",
    "kcal_per_unit": 10.0
  },
  {
    "name": "아욱된장국",
    "kcal_per_unit": 39.2
  },
  {
    "name": "아이스크림",
    "kcal_per_unit": 216.0
  },
  {
    "name": "아이스크림(소프트,바닐라)",
    "kcal_per_unit": 178.0
  },
  {
    "name": "아이스크림바(초콜렛)",
    "kcal_per_unit": 173.0
  },
  {
    "name": "아이스크림콘(바닐라)",
    "kcal_per_unit": 167.0
  },
  {
    "name": "약과",
    "kcal_per_unit": 255.0
  },
  {
    "name": "양념꽃게장",
    "kcal_per_unit": 39.2
  },
  {
    "name": "양배추",
    "kcal_per_unit": 6.0
  },
  {
    "name": "양배추샐러드",
    "kcal_per_unit": 56.0
  },
  {
    "name": "양상추",
    "kcal_per_unit": 3.0
  },
  {
    "name": "양송이버섯",
    "kcal_per_unit": 2.0
  },
  {
    "name": "양주(위스키)",
    "kcal_per_unit": 71.0
  },
  {
    "name": "양파",
    "kcal_per_unit": 3.0
  },
  {
    "name": "어묵",
    "kcal_per_unit": 35.0
  },
  {
    "name": "어묵국",
    "kcal_per_unit": 53.0
  },
  {
    "name": "어묵볶음",
    "kcal_per_unit": 88.7
  },
  {
    "name": "어패류액젓(멸치액젓)",
    "kcal_per_unit": 1.0
  },
  {
    "name": "어패류액젓(어란젓)",
    "kcal_per_unit": 12.0
  },
  {
    "name": "어패류액젓(창란젓)",
    "kcal_per_unit": 12.0
  },
  {
    "name": "연근",
    "kcal_per_unit": 17.0
  },
  {
    "name": "연근조림",
    "kcal_per_unit": 24.0
  },
  {
    "name": "연두부",
    "kcal_per_unit": 45.0
  },
  {
    "name": "연두부찌개",
    "kcal_per_unit": 88.2
  },
  {
    "name": "연어(훈제)",
    "kcal_per_unit": 34.0
  },
  {
    "name": "열무",
    "kcal_per_unit": 6.0
  },
  {
    "name": "엿",
    "kcal_per_unit": 127.0
  },
  {
    "name": "오곡밥",
    "kcal_per_unit": 334.1
  },
  {
    "name": "오렌지",
    "kcal_per_unit": 86.0
  },
  {
    "name": "오렌지주스",
    "kcal_per_unit": 84.0
  },
  {
    "name": "오리고기",
    "kcal_per_unit": 525.0
  },
  {
    "name": "오리고기로스",
    "kcal_per_unit": 508.1
  },
  {
    "name": "오므라이스",
    "kcal_per_unit": 519.4
  },
  {
    "name": "오이",
    "kcal_per_unit": 4.0
  },
  {
    "name": "오이생채",
    "kcal_per_unit": 7.1
  },
  {
    "name": "오이생채(가정식)",
    "kcal_per_unit": 6.5
  },
  {
    "name": "오이생채(단체급식)",
    "kcal_per_unit": 12.0
  },
  {
    "name": "오이지",
    "kcal_per_unit": 1.0
  },
  {
    "name": "오이지무침",
    "kcal_per_unit": 7.1
  },
  {
    "name": "오이피클",
    "kcal_per_unit": 33.7
  },
  {
    "name": "오징어",
    "kcal_per_unit": 33.0
  },
  {
    "name": "오징어(말린것)",
    "kcal_per_unit": 53.0
  },
  {
    "name": "오징어국",
    "kcal_per_unit": 62.0
  },
  {
    "name": "오징어덮밥",
    "kcal_per_unit": 455.6
  },
  {
    "name": "오징어무침",
    "kcal_per_unit": 40.0
  },
  {
    "name": "오징어볶음",
    "kcal_per_unit": 95.0
  },
  {
    "name": "오징어젓무침",
    "kcal_per_unit": 15.4
  },
  {
    "name": "오징어찌개",
    "kcal_per_unit": 38.0
  },
  {
    "name": "오징어채무침",
    "kcal_per_unit": 98.3
  },
  {
    "name": "오징어채볶음",
    "kcal_per_unit": 108.0
  },
  {
    "name": "오징어튀김",
    "kcal_per_unit": 46.0
  },
  {
    "name": "오징어포조림",
    "kcal_per_unit": 31.0
  },
  {
    "name": "옥수수기름",
    "kcal_per_unit": 35.0
  },
  {
    "name": "옥수수통조림",
    "kcal_per_unit": 10.0
  },
  {
    "name": "옥수수튀밥",
    "kcal_per_unit": 90.0
  },
  {
    "name": "올리브",
    "kcal_per_unit": 4.0
  },
  {
    "name": "올리브유",
    "kcal_per_unit": 37.0
  },
  {
    "name": "완두콩",
    "kcal_per_unit": 8.0
  },
  {
    "name": "완자전",
    "kcal_per_unit": 84.0
  },
  {
    "name": "요구르트(액상)",
    "kcal_per_unit": 98.0
  },
  {
    "name": "요구르트(호상, 딸기)",
    "kcal_per_unit": 109.0
  },
  {
    "name": "요구르트음료",
    "kcal_per_unit": 55.0
  },
  {
    "name": "우거지국",
    "kcal_per_unit": 30.0
  },
  {
    "name": "우동",
    "kcal_per_unit": 370.0
  },
  {
    "name": "우동국수(생면)",
    "kcal_per_unit": 177.0
  },
  {
    "name": "우스터소스",
    "kcal_per_unit": 4.0
  },
  {
    "name": "우엉",
    "kcal_per_unit": 10.0
  },
  {
    "name": "우엉조림",
    "kcal_per_unit": 44.0
  },
  {
    "name": "우유",
    "kcal_per_unit": 120.0
  },
  {
    "name": "유부",
    "kcal_per_unit": 48.0
  },
  {
    "name": "유부초밥",
    "kcal_per_unit": 463.4
  },
  {
    "name": "유자차(분말)",
    "kcal_per_unit": 25.0
  },
  {
    "name": "육개장",
    "kcal_per_unit": 86.0
  },
  {
    "name": "율무차(분말)",
    "kcal_per_unit": 60.0
  },
  {
    "name": "은행",
    "kcal_per_unit": 9.0
  },
  {
    "name": "이온스포츠음료",
    "kcal_per_unit": 63.0
  },
  {
    "name": "인삼차(과립)",
    "kcal_per_unit": 28.0
  },
  {
    "name": "인절미",
    "kcal_per_unit": 109.0
  },
  {
    "name": "임연수구이",
    "kcal_per_unit": 102.0
  },
  {
    "name": "임연수어",
    "kcal_per_unit": 83.0
  },
  {
    "name": "자장면",
    "kcal_per_unit": 794.0
  },
  {
    "name": "자장소스",
    "kcal_per_unit": 33.0
  },
  {
    "name": "잔멸치볶음",
    "kcal_per_unit": 16.0
  },
  {
    "name": "잔치국수",
    "kcal_per_unit": 638.0
  },
  {
    "name": "잡채",
    "kcal_per_unit": 189.4
  },
  {
    "name": "잡채밥",
    "kcal_per_unit": 447.4
  },
  {
    "name": "잣",
    "kcal_per_unit": 20.0
  },
  {
    "name": "장어(갯장어)",
    "kcal_per_unit": 156.0
  },
  {
    "name": "장어양념구이",
    "kcal_per_unit": 220.0
  },
  {
    "name": "장조림",
    "kcal_per_unit": 45.0
  },
  {
    "name": "재첩(재치조개,갱조개)",
    "kcal_per_unit": 33.0
  },
  {
    "name": "적포도주",
    "kcal_per_unit": 84.0
  },
  {
    "name": "전복",
    "kcal_per_unit": 9.0
  },
  {
    "name": "전복죽",
    "kcal_per_unit": 184.6
  },
  {
    "name": "전분",
    "kcal_per_unit": 17.0
  },
  {
    "name": "절편",
    "kcal_per_unit": 110.0
  },
  {
    "name": "제육(돼지고기)",
    "kcal_per_unit": 124.0
  },
  {
    "name": "조개국",
    "kcal_per_unit": 28.0
  },
  {
    "name": "조기",
    "kcal_per_unit": 42.0
  },
  {
    "name": "조기구이",
    "kcal_per_unit": 112.0
  },
  {
    "name": "조기매운탕",
    "kcal_per_unit": 80.1
  },
  {
    "name": "조기찜",
    "kcal_per_unit": 73.0
  },
  {
    "name": "조기튀김",
    "kcal_per_unit": 73.4
  },
  {
    "name": "조미분",
    "kcal_per_unit": 2.0
  },
  {
    "name": "조미소",
    "kcal_per_unit": 2.0
  },
  {
    "name": "족발",
    "kcal_per_unit": 165.0
  },
  {
    "name": "주꾸미",
    "kcal_per_unit": 23.0
  },
  {
    "name": "죽순",
    "kcal_per_unit": 3.0
  },
  {
    "name": "중국국수(생면)",
    "kcal_per_unit": 393.0
  },
  {
    "name": "쥐치(말린것)",
    "kcal_per_unit": 50.0
  },
  {
    "name": "짬뽕",
    "kcal_per_unit": 555.0
  },
  {
    "name": "쫄면",
    "kcal_per_unit": 580.3
  },
  {
    "name": "차조",
    "kcal_per_unit": 23.0
  },
  {
    "name": "차조밥",
    "kcal_per_unit": 383.9
  },
  {
    "name": "찰밥",
    "kcal_per_unit": 387.9
  },
  {
    "name": "찰옥수수",
    "kcal_per_unit": 126.0
  },
  {
    "name": "참기름",
    "kcal_per_unit": 35.0
  },
  {
    "name": "참나물",
    "kcal_per_unit": 42.1
  },
  {
    "name": "참외",
    "kcal_per_unit": 25.0
  },
  {
    "name": "참치찌개",
    "kcal_per_unit": 83.0
  },
  {
    "name": "찹쌀",
    "kcal_per_unit": 56.0
  },
  {
    "name": "찹쌀떡",
    "kcal_per_unit": 165.0
  },
  {
    "name": "청국장",
    "kcal_per_unit": 31.0
  },
  {
    "name": "청국장찌개",
    "kcal_per_unit": 79.0
  },
  {
    "name": "청주",
    "kcal_per_unit": 48.0
  },
  {
    "name": "청포묵무침",
    "kcal_per_unit": 33.4
  },
  {
    "name": "초고추장",
    "kcal_per_unit": 30.0
  },
  {
    "name": "초코바",
    "kcal_per_unit": 248.0
  },
  {
    "name": "초코파이",
    "kcal_per_unit": 153.0
  },
  {
    "name": "초콜릿",
    "kcal_per_unit": 98.0
  },
  {
    "name": "추어탕",
    "kcal_per_unit": 94.1
  },
  {
    "name": "취나물",
    "kcal_per_unit": 14.0
  },
  {
    "name": "취나물(말린것)",
    "kcal_per_unit": 23.0
  },
  {
    "name": "치즈",
    "kcal_per_unit": 64.0
  },
  {
    "name": "치즈,가공치즈",
    "kcal_per_unit": 62.0
  },
  {
    "name": "치즈,모짜렐라",
    "kcal_per_unit": 32.0
  },
  {
    "name": "치커리",
    "kcal_per_unit": 1.0
  },
  {
    "name": "카라멜",
    "kcal_per_unit": 41.0
  },
  {
    "name": "카레(분말)",
    "kcal_per_unit": 32.0
  },
  {
    "name": "카레라이스",
    "kcal_per_unit": 433.8
  },
  {
    "name": "카스테라",
    "kcal_per_unit": 162.0
  },
  {
    "name": "칼국수",
    "kcal_per_unit": 425.0
  },
  {
    "name": "칼국수(반건)",
    "kcal_per_unit": 226.0
  },
  {
    "name": "캔커피",
    "kcal_per_unit": 20.0
  },
  {
    "name": "커피(분말크림)",
    "kcal_per_unit": 29.0
  },
  {
    "name": "커피(설탕)",
    "kcal_per_unit": 19.0
  },
  {
    "name": "커피(설탕,분말크림)",
    "kcal_per_unit": 40.0
  },
  {
    "name": "커피(원두,블랙)",
    "kcal_per_unit": 6.0
  },
  {
    "name": "커피믹스",
    "kcal_per_unit": 54.0
  },
  {
    "name": "커피분말",
    "kcal_per_unit": 7.0
  },
  {
    "name": "커피프림",
    "kcal_per_unit": 33.0
  },
  {
    "name": "케이크(생크림)",
    "kcal_per_unit": 317.0
  },
  {
    "name": "케이크(초코릿)",
    "kcal_per_unit": 437.0
  },
  {
    "name": "케이크(파운드)",
    "kcal_per_unit": 343.0
  },
  {
    "name": "콜라",
    "kcal_per_unit": 100.0
  },
  {
    "name": "콩국수",
    "kcal_per_unit": 738.0
  },
  {
    "name": "콩기름",
    "kcal_per_unit": 35.0
  },
  {
    "name": "콩나물",
    "kcal_per_unit": 25.0
  },
  {
    "name": "콩나물국",
    "kcal_per_unit": 18.2
  },
  {
    "name": "콩나물밥",
    "kcal_per_unit": 549.3
  },
  {
    "name": "콩밥",
    "kcal_per_unit": 383.3
  },
  {
    "name": "콩비지",
    "kcal_per_unit": 15.0
  },
  {
    "name": "콩비지찌개",
    "kcal_per_unit": 69.0
  },
  {
    "name": "콩조림(콩자반)",
    "kcal_per_unit": 38.0
  },
  {
    "name": "쿠키",
    "kcal_per_unit": 140.0
  },
  {
    "name": "크래커",
    "kcal_per_unit": 175.0
  },
  {
    "name": "크래커(샌드)",
    "kcal_per_unit": 172.0
  },
  {
    "name": "크로켓",
    "kcal_per_unit": 237.0
  },
  {
    "name": "크림빵",
    "kcal_per_unit": 288.0
  },
  {
    "name": "키위",
    "kcal_per_unit": 24.0
  },
  {
    "name": "탕수육",
    "kcal_per_unit": 230.0
  },
  {
    "name": "토란",
    "kcal_per_unit": 26.0
  },
  {
    "name": "토란대(말린것)",
    "kcal_per_unit": 45.0
  },
  {
    "name": "토마토",
    "kcal_per_unit": 14.0
  },
  {
    "name": "토마토주스",
    "kcal_per_unit": 27.0
  },
  {
    "name": "토마토케첩",
    "kcal_per_unit": 6.0
  },
  {
    "name": "토마토페이스트",
    "kcal_per_unit": 16.0
  },
  {
    "name": "톳",
    "kcal_per_unit": 6.0
  },
  {
    "name": "톳나물",
    "kcal_per_unit": 32.0
  },
  {
    "name": "파",
    "kcal_per_unit": 3.0
  },
  {
    "name": "파래",
    "kcal_per_unit": 3.0
  },
  {
    "name": "파래무침",
    "kcal_per_unit": 43.0
  },
  {
    "name": "파무침",
    "kcal_per_unit": 50.0
  },
  {
    "name": "파인애플",
    "kcal_per_unit": 10.0
  },
  {
    "name": "파전",
    "kcal_per_unit": 109.2
  },
  {
    "name": "팝콘",
    "kcal_per_unit": 50.0
  },
  {
    "name": "팥",
    "kcal_per_unit": 34.0
  },
  {
    "name": "팥밥",
    "kcal_per_unit": 344.9
  },
  {
    "name": "팥시루떡",
    "kcal_per_unit": 195.0
  },
  {
    "name": "팥죽",
    "kcal_per_unit": 247.5
  },
  {
    "name": "팽이버섯",
    "kcal_per_unit": 3.0
  },
  {
    "name": "포도",
    "kcal_per_unit": 39.0
  },
  {
    "name": "포도,건포도",
    "kcal_per_unit": 11.0
  },
  {
    "name": "포도주스",
    "kcal_per_unit": 110.0
  },
  {
    "name": "표고버섯",
    "kcal_per_unit": 3.0
  },
  {
    "name": "표고버섯(말린것)",
    "kcal_per_unit": 8.0
  },
  {
    "name": "풋고추",
    "kcal_per_unit": 2.0
  },
  {
    "name": "풋고추조림",
    "kcal_per_unit": 11.0
  },
  {
    "name": "풋마늘",
    "kcal_per_unit": 4.0
  },
  {
    "name": "피망",
    "kcal_per_unit": 1.0
  },
  {
    "name": "피자",
    "kcal_per_unit": 390.0
  },
  {
    "name": "함박스테이크",
    "kcal_per_unit": 103.3
  },
  {
    "name": "핫도그",
    "kcal_per_unit": 124.0
  },
  {
    "name": "해물탕",
    "kcal_per_unit": 86.3
  },
  {
    "name": "해삼",
    "kcal_per_unit": 5.0
  },
  {
    "name": "해파리",
    "kcal_per_unit": 7.0
  },
  {
    "name": "햄버거",
    "kcal_per_unit": 344.0
  },
  {
    "name": "현미",
    "kcal_per_unit": 42.0
  },
  {
    "name": "현미밥",
    "kcal_per_unit": 389.3
  },
  {
    "name": "호두",
    "kcal_per_unit": 98.0
  },
  {
    "name": "호박(애호박)",
    "kcal_per_unit": 8.0
  },
  {
    "name": "호박나물",
    "kcal_per_unit": 32.0
  },
  {
    "name": "호박전",
    "kcal_per_unit": 76.0
  },
  {
    "name": "호박죽",
    "kcal_per_unit": 243.6
  },
  {
    "name": "호빵",
    "kcal_per_unit": 229.0
  },
  {
    "name": "홍어",
    "kcal_per_unit": 26.0
  },
  {
    "name": "홍어회무침",
    "kcal_per_unit": 44.4
  },
  {
    "name": "홍차",
    "kcal_per_unit": 72.0
  },
  {
    "name": "홍차음료",
    "kcal_per_unit": 64.0
  },
  {
    "name": "홍합",
    "kcal_per_unit": 14.0
  },
  {
    "name": "홍합미역국",
    "kcal_per_unit": 28.0
  },
  {
    "name": "회덮밥",
    "kcal_per_unit": 696.5
  },
  {
    "name": "후렌치후라이",
    "kcal_per_unit": 367.0
  },
  {
    "name": "후르츠샐러드(칵테일)",
    "kcal_per_unit": 29.0
  },
  {
    "name": "후추",
    "kcal_per_unit": 3.0
  },
  {
    "name": "흑미밥",
    "kcal_per_unit": 387.2
  },
  {
    "name": "누룬밥",
    "kcal_per_unit": 174.0
  },
  {
    "name": "강남콩밥",
    "kcal_per_unit": 347.6
  },
  {
    "name": "녹두밥",
    "kcal_per_unit": 346.7
  },
  {
    "name": "밤밥",
    "kcal_per_unit": 327.0
  },
  {
    "name": "밤팥밥",
    "kcal_per_unit": 307.2
  },
  {
    "name": "옥수수밥",
    "kcal_per_unit": 346.9
  },
  {
    "name": "완두콩밥",
    "kcal_per_unit": 337.2
  },
  {
    "name": "율무밥",
    "kcal_per_unit": 351.1
  },
  {
    "name": "잡곡밥",
    "kcal_per_unit": 347.6
  },
  {
    "name": "조밥",
    "kcal_per_unit": 353.8
  },
  {
    "name": "차수수밥",
    "kcal_per_unit": 348.6
  },
  {
    "name": "감자밥",
    "kcal_per_unit": 300.4
  },
  {
    "name": "고구마밥",
    "kcal_per_unit": 329.6
  },
  {
    "name": "야채밥",
    "kcal_per_unit": 314.06
  },
  {
    "name": "영양밥(돌솥밥)",
    "kcal_per_unit": 353.1
  },
  {
    "name": "야채볶음밥",
    "kcal_per_unit": 449.83
  },
  {
    "name": "새우볶음밥",
    "kcal_per_unit": 397.58
  },
  {
    "name": "쇠고기볶음밥",
    "kcal_per_unit": 427.76
  },
  {
    "name": "열무비빔밥",
    "kcal_per_unit": 368.98
  },
  {
    "name": "참치볶음밥",
    "kcal_per_unit": 428.37
  },
  {
    "name": "콩나물비빔밥",
    "kcal_per_unit": 377.55
  },
  {
    "name": "계란덮밥",
    "kcal_per_unit": 466.4
  },
  {
    "name": "닭고기덮밥",
    "kcal_per_unit": 431.8
  },
  {
    "name": "돈육카레라이스",
    "kcal_per_unit": 456.8
  },
  {
    "name": "두부덮밥",
    "kcal_per_unit": 434.8
  },
  {
    "name": "두부카레라이스",
    "kcal_per_unit": 455.55
  },
  {
    "name": "버섯덮밥",
    "kcal_per_unit": 405.1
  },
  {
    "name": "쇠고기덮밥",
    "kcal_per_unit": 447.14
  },
  {
    "name": "순대국밥",
    "kcal_per_unit": 416.62
  },
  {
    "name": "잡탕밥",
    "kcal_per_unit": 521.95
  },
  {
    "name": "짜장밥",
    "kcal_per_unit": 487.1
  },
  {
    "name": "참치회덮밥",
    "kcal_per_unit": 459.54
  },
  {
    "name": "한치회덮밥",
    "kcal_per_unit": 436.44
  },
  {
    "name": "해물덮밥",
    "kcal_per_unit": 379.71
  },
  {
    "name": "김초밥",
    "kcal_per_unit": 451.29
  },
  {
    "name": "고로케",
    "kcal_per_unit": 458.8
  },
  {
    "name": "곰보빵(소보로)",
    "kcal_per_unit": 300.8
  },
  {
    "name": "데니쉬페이스트리,과일(패스트푸드)",
    "kcal_per_unit": 334.64
  },
  {
    "name": "데니쉬페이스트리,시나몬(패스트푸드)",
    "kcal_per_unit": 349.36
  },
  {
    "name": "데니쉬페이스트리,치즈(패스트푸드)",
    "kcal_per_unit": 353.08
  },
  {
    "name": "도우넛,링",
    "kcal_per_unit": 329.6
  },
  {
    "name": "도우넛,팥",
    "kcal_per_unit": 319.2
  },
  {
    "name": "롤빵,소프트롤",
    "kcal_per_unit": 223.2
  },
  {
    "name": "롤빵,하드롤",
    "kcal_per_unit": 240.8
  },
  {
    "name": "머핀",
    "kcal_per_unit": 240.8
  },
  {
    "name": "모카빵",
    "kcal_per_unit": 291.2
  },
  {
    "name": "바게뜨빵,마늘바게뜨",
    "kcal_per_unit": 400.0
  },
  {
    "name": "버리토(패스트푸드)",
    "kcal_per_unit": 391.5
  },
  {
    "name": "베이걸,건포도계피,토스트",
    "kcal_per_unit": 237.6
  },
  {
    "name": "블란서빵",
    "kcal_per_unit": 234.4
  },
  {
    "name": "비스켓(패스트푸드)",
    "kcal_per_unit": 274.54
  },
  {
    "name": "비스켓(KFC)",
    "kcal_per_unit": 221.96
  },
  {
    "name": "비스켓,버터밀크(웬디스)",
    "kcal_per_unit": 318.66
  },
  {
    "name": "샌드위치,계란,치즈",
    "kcal_per_unit": 411.84
  },
  {
    "name": "샌드위치,로스트비프",
    "kcal_per_unit": 436.48
  },
  {
    "name": "샌드위치,생선",
    "kcal_per_unit": 485.76
  },
  {
    "name": "샌드위치,아침용샌드위치(웬디스)",
    "kcal_per_unit": 370.23
  },
  {
    "name": "샌드위치,치킨",
    "kcal_per_unit": 499.84
  },
  {
    "name": "샌드위치,햄,치즈",
    "kcal_per_unit": 361.5
  },
  {
    "name": "슈크림",
    "kcal_per_unit": 195.2
  },
  {
    "name": "엔칠라다(패스트푸드)",
    "kcal_per_unit": 395.6
  },
  {
    "name": "옥수수빵",
    "kcal_per_unit": 311.0
  },
  {
    "name": "와플",
    "kcal_per_unit": 231.3
  },
  {
    "name": "잉글리쉬머핀,버터포함(패스트푸드)",
    "kcal_per_unit": 189.0
  },
  {
    "name": "쨈빵",
    "kcal_per_unit": 224.0
  },
  {
    "name": "찐빵,고기",
    "kcal_per_unit": 203.2
  },
  {
    "name": "찐빵,팥",
    "kcal_per_unit": 197.6
  },
  {
    "name": "쵸코파이(롯데)",
    "kcal_per_unit": 133.8
  },
  {
    "name": "커스터드",
    "kcal_per_unit": 84.8
  },
  {
    "name": "케이크,당근케이크",
    "kcal_per_unit": 314.1
  },
  {
    "name": "케이크,롤케이크",
    "kcal_per_unit": 310.25
  },
  {
    "name": "케이크,바나나케이크",
    "kcal_per_unit": 306.0
  },
  {
    "name": "케이크,생크림,블루베리",
    "kcal_per_unit": 207.4
  },
  {
    "name": "케이크,쇼트케이크",
    "kcal_per_unit": 306.0
  },
  {
    "name": "케이크,스폰지케이크",
    "kcal_per_unit": 294.1
  },
  {
    "name": "케이크,엔젤케이크",
    "kcal_per_unit": 241.2
  },
  {
    "name": "케이크,쵸코케이크",
    "kcal_per_unit": 393.3
  },
  {
    "name": "케이크,치즈케이크",
    "kcal_per_unit": 270.9
  },
  {
    "name": "케이크,컵케이크",
    "kcal_per_unit": 378.9
  },
  {
    "name": "케이크,파운드케이크",
    "kcal_per_unit": 363.6
  },
  {
    "name": "케이크,후르트케이크",
    "kcal_per_unit": 312.3
  },
  {
    "name": "크로쌍",
    "kcal_per_unit": 344.8
  },
  {
    "name": "크로쌍,계란과치즈",
    "kcal_per_unit": 234.4
  },
  {
    "name": "크로쌍,버터",
    "kcal_per_unit": 324.0
  },
  {
    "name": "타코(패스트푸드)",
    "kcal_per_unit": 175.2
  },
  {
    "name": "토스트",
    "kcal_per_unit": 290.0
  },
  {
    "name": "파이,고구마파이",
    "kcal_per_unit": 233.7
  },
  {
    "name": "파이,딸기파이",
    "kcal_per_unit": 184.14
  },
  {
    "name": "파이,블랙베리",
    "kcal_per_unit": 280.84
  },
  {
    "name": "파이,블루베리",
    "kcal_per_unit": 280.84
  },
  {
    "name": "파이,사과파이(맥도날드)",
    "kcal_per_unit": 254.15
  },
  {
    "name": "파이,애플파이",
    "kcal_per_unit": 215.1
  },
  {
    "name": "파이,애플파이(버거킹)",
    "kcal_per_unit": 305.0
  },
  {
    "name": "파이,체리파이",
    "kcal_per_unit": 307.98
  },
  {
    "name": "파이,체리파이(맥도날드)",
    "kcal_per_unit": 260.48
  },
  {
    "name": "파이,체리파이(버거킹)",
    "kcal_per_unit": 357.12
  },
  {
    "name": "파이,파인애플파이",
    "kcal_per_unit": 298.54
  },
  {
    "name": "파이,피칸파이",
    "kcal_per_unit": 389.85
  },
  {
    "name": "파이,피칸파이(버거킹)",
    "kcal_per_unit": 458.78
  },
  {
    "name": "파이,호박파이",
    "kcal_per_unit": 240.54
  },
  {
    "name": "팥빵",
    "kcal_per_unit": 234.4
  },
  {
    "name": "패스트리",
    "kcal_per_unit": 320.8
  },
  {
    "name": "푸딩,커스터드",
    "kcal_per_unit": 116.0
  },
  {
    "name": "피자,디럭스(패스트푸드)",
    "kcal_per_unit": 582.66
  },
  {
    "name": "피자,소시지(패스트푸드)",
    "kcal_per_unit": 341.7
  },
  {
    "name": "피자,쇠고기,(패스트푸드)",
    "kcal_per_unit": 420.8
  },
  {
    "name": "피자,슈프림(패스트푸드)",
    "kcal_per_unit": 678.3
  },
  {
    "name": "피자,씬크리스피,슈퍼슈프림(피자헛)",
    "kcal_per_unit": 462.84
  },
  {
    "name": "피자,씬크리스피,슈프림(피자헛)",
    "kcal_per_unit": 460.0
  },
  {
    "name": "피자,씬크리스피,치즈(피자헛)",
    "kcal_per_unit": 398.12
  },
  {
    "name": "피자,씬크리스피,페퍼로니(피자헛)",
    "kcal_per_unit": 413.18
  },
  {
    "name": "피자,야채(패스트푸드)",
    "kcal_per_unit": 219.24
  },
  {
    "name": "피자,치즈(패스트푸드)",
    "kcal_per_unit": 408.48
  },
  {
    "name": "피자,치즈,쇠고기,야채(패스트푸드)",
    "kcal_per_unit": 184.07
  },
  {
    "name": "피자,콤비네이션피자(패스트푸드)",
    "kcal_per_unit": 673.2
  },
  {
    "name": "피자,크러스트,슈퍼슈프림(피자헛)",
    "kcal_per_unit": 556.47
  },
  {
    "name": "피자,크러스트,슈프림(피자헛)",
    "kcal_per_unit": 540.14
  },
  {
    "name": "피자,크러스트,치즈(피자헛)",
    "kcal_per_unit": 517.0
  },
  {
    "name": "피자,크러스트,페퍼로니(피자헛)",
    "kcal_per_unit": 500.38
  },
  {
    "name": "피자,팬피자,슈프림(피자헛)",
    "kcal_per_unit": 665.3
  },
  {
    "name": "피자,팬피자,치즈(피자헛)",
    "kcal_per_unit": 492.0
  },
  {
    "name": "피자,팬피자,페퍼로니(피자헛)",
    "kcal_per_unit": 636.59
  },
  {
    "name": "피자,팬피자.슈퍼슈프림(피자헛)",
    "kcal_per_unit": 630.59
  },
  {
    "name": "피자,페퍼로니(패스트푸드)",
    "kcal_per_unit": 487.05
  },
  {
    "name": "핫도그(패스트푸드)",
    "kcal_per_unit": 242.06
  },
  {
    "name": "핫도그,칠리(패스트푸드)",
    "kcal_per_unit": 297.54
  },
  {
    "name": "핫케익",
    "kcal_per_unit": 222.3
  },
  {
    "name": "햄버거(로이로저스)",
    "kcal_per_unit": 456.17
  },
  {
    "name": "햄버거(맥도날드)",
    "kcal_per_unit": 260.0
  },
  {
    "name": "햄버거(버거킹)",
    "kcal_per_unit": 291.03
  },
  {
    "name": "햄버거(패스트푸드)",
    "kcal_per_unit": 343.5
  },
  {
    "name": "햄버거,더블버거(웬디스)",
    "kcal_per_unit": 560.28
  },
  {
    "name": "햄버거,더블버거(패스트푸드)",
    "kcal_per_unit": 485.17
  },
  {
    "name": "햄버거,더블와퍼(버거킹)",
    "kcal_per_unit": 925.24
  },
  {
    "name": "햄버거,더블치즈버거(웬디스)",
    "kcal_per_unit": 621.01
  },
  {
    "name": "햄버거,더블치즈와퍼(버거킹)",
    "kcal_per_unit": 1012.5
  },
  {
    "name": "햄버거,로스트비프샌드위치(로이로저스)",
    "kcal_per_unit": 317.24
  },
  {
    "name": "햄버거,맥디엘티(맥도날드)",
    "kcal_per_unit": 629.92
  },
  {
    "name": "햄버거,바버거(로이로저스)",
    "kcal_per_unit": 611.52
  },
  {
    "name": "햄버거,베이컨치즈버거(로이로저스)",
    "kcal_per_unit": 581.4
  },
  {
    "name": "햄버거,베이컨치즈버거(버거킹)",
    "kcal_per_unit": 454.26
  },
  {
    "name": "햄버거,베이컨치즈버거(웬디스)",
    "kcal_per_unit": 454.3
  },
  {
    "name": "햄버거,빅맥(맥도날드)",
    "kcal_per_unit": 520.0
  },
  {
    "name": "햄버거,빅클래식더블햄버거(웬디스)",
    "kcal_per_unit": 681.55
  },
  {
    "name": "햄버거,빅클래식버거(웬디스)",
    "kcal_per_unit": 496.46
  },
  {
    "name": "햄버거,빅클래식치즈버거(웬디스)",
    "kcal_per_unit": 640.15
  },
  {
    "name": "햄버거,싱글버거(웬디스)",
    "kcal_per_unit": 342.9
  },
  {
    "name": "햄버거,싱글치즈버거(웬디스)",
    "kcal_per_unit": 410.35
  },
  {
    "name": "햄버거,어린이용키즈버거(웬디스)",
    "kcal_per_unit": 164.74
  },
  {
    "name": "햄버거,와퍼샌드위치(버거킹)",
    "kcal_per_unit": 647.66
  },
  {
    "name": "햄버거,와퍼쥬니어샌드위치(버거킹)",
    "kcal_per_unit": 344.08
  },
  {
    "name": "햄버거,와퍼쥬니어치즈샌드위치(버거킹)",
    "kcal_per_unit": 386.61
  },
  {
    "name": "햄버거,치즈버거(로이로저스)",
    "kcal_per_unit": 562.25
  },
  {
    "name": "햄버거,치즈버거(맥도날드)",
    "kcal_per_unit": 364.8
  },
  {
    "name": "햄버거,치즈버거(버거킹)",
    "kcal_per_unit": 324.84
  },
  {
    "name": "햄버거,치즈버거(패스트푸드)",
    "kcal_per_unit": 490.5
  },
  {
    "name": "햄버거,치즈와퍼(버거킹)",
    "kcal_per_unit": 757.34
  },
  {
    "name": "햄버거,치킨샌드위치(버거킹)",
    "kcal_per_unit": 684.71
  },
  {
    "name": "햄버거,치킨클럽샌드위치(웬디스)",
    "kcal_per_unit": 471.04
  },
  {
    "name": "햄버거,쿼터파운더(맥도날드)",
    "kcal_per_unit": 427.2
  },
  {
    "name": "햄버거,쿼터파운더와치즈(맥도날드)",
    "kcal_per_unit": 524.52
  },
  {
    "name": "햄버거,크로상샌드위치(버거킹)",
    "kcal_per_unit": 354.62
  },
  {
    "name": "햄버거,햄치즈샌드위치(버거킹)",
    "kcal_per_unit": 471.5
  },
  {
    "name": "햄버거,휘쉬필레버거(웬디스)",
    "kcal_per_unit": 210.68
  },
  {
    "name": "호밀빵",
    "kcal_per_unit": 265.0
  },
  {
    "name": "후렌치토스트(버거킹)",
    "kcal_per_unit": 469.17
  },
  {
    "name": "후렌치토스트(웬디스)",
    "kcal_per_unit": 399.6
  },
  {
    "name": "감자스낵,포테이토칩",
    "kcal_per_unit": 159.6
  },
  {
    "name": "감자스낵,프링글즈(오리지날)",
    "kcal_per_unit": 166.88
  },
  {
    "name": "강정,들깨강정",
    "kcal_per_unit": 153.3
  },
  {
    "name": "강정,땅콩강정",
    "kcal_per_unit": 162.0
  },
  {
    "name": "강정,보리강정",
    "kcal_per_unit": 114.9
  },
  {
    "name": "강정,쌀강정",
    "kcal_per_unit": 114.9
  },
  {
    "name": "강정,엿강정",
    "kcal_per_unit": 114.9
  },
  {
    "name": "강정,콩강정",
    "kcal_per_unit": 132.3
  },
  {
    "name": "과자,꼬깔콘(롯데)",
    "kcal_per_unit": 162.3
  },
  {
    "name": "과자,마가렛트(롯데)",
    "kcal_per_unit": 150.3
  },
  {
    "name": "과자,버터쿠키(나비스코)",
    "kcal_per_unit": 229.0
  },
  {
    "name": "과자,빠다코코넛(롯데)",
    "kcal_per_unit": 152.1
  },
  {
    "name": "과자,애플잼(롯데)",
    "kcal_per_unit": 132.3
  },
  {
    "name": "과자,엄마손파이(롯데)",
    "kcal_per_unit": 157.5
  },
  {
    "name": "과자,젝크(롯데)",
    "kcal_per_unit": 155.7
  },
  {
    "name": "과자,쵸이스(롯데)",
    "kcal_per_unit": 144.9
  },
  {
    "name": "과자,쵸코칩쿠키(롯데)",
    "kcal_per_unit": 159.9
  },
  {
    "name": "과자,커스타드(롯데)",
    "kcal_per_unit": 99.75
  },
  {
    "name": "과자,프레즐",
    "kcal_per_unit": 110.88
  },
  {
    "name": "과자,하비스트(롯데)",
    "kcal_per_unit": 103.74
  },
  {
    "name": "나쵸(패스트푸드)",
    "kcal_per_unit": 223.0
  },
  {
    "name": "모나카",
    "kcal_per_unit": 102.3
  },
  {
    "name": "비스켓",
    "kcal_per_unit": 99.6
  },
  {
    "name": "산자",
    "kcal_per_unit": 125.1
  },
  {
    "name": "센베이",
    "kcal_per_unit": 123.6
  },
  {
    "name": "스낵,나쵸",
    "kcal_per_unit": 119.84
  },
  {
    "name": "스낵,밀가루",
    "kcal_per_unit": 134.96
  },
  {
    "name": "스낵,새우맛",
    "kcal_per_unit": 146.44
  },
  {
    "name": "스낵,콘칩스",
    "kcal_per_unit": 152.88
  },
  {
    "name": "스낵과자",
    "kcal_per_unit": 155.4
  },
  {
    "name": "웨하스,바닐라",
    "kcal_per_unit": 153.3
  },
  {
    "name": "유과,찹쌀유과",
    "kcal_per_unit": 109.5
  },
  {
    "name": "유과,콩유과",
    "kcal_per_unit": 109.5
  },
  {
    "name": "전병,셈베이,김",
    "kcal_per_unit": 126.9
  },
  {
    "name": "전병,찹쌀",
    "kcal_per_unit": 133.8
  },
  {
    "name": "치즈나쵸(패스트푸드)",
    "kcal_per_unit": 344.65
  },
  {
    "name": "쿠키,땅콩버터",
    "kcal_per_unit": 145.8
  },
  {
    "name": "크래커,땅콩샌드",
    "kcal_per_unit": 149.1
  },
  {
    "name": "크래커,치즈샌드",
    "kcal_per_unit": 142.2
  },
  {
    "name": "한과,다식,검정깨,",
    "kcal_per_unit": 137.7
  },
  {
    "name": "한과,다식,송화",
    "kcal_per_unit": 97.8
  },
  {
    "name": "한과,약과",
    "kcal_per_unit": 135.6
  },
  {
    "name": "한과,참깨강정",
    "kcal_per_unit": 150.3
  },
  {
    "name": "한과,찹쌀산자",
    "kcal_per_unit": 125.1
  },
  {
    "name": "국수장국",
    "kcal_per_unit": 419.91
  },
  {
    "name": "닭칼국수",
    "kcal_per_unit": 233.28
  },
  {
    "name": "도토리국수",
    "kcal_per_unit": 428.63
  },
  {
    "name": "메밀국수",
    "kcal_per_unit": 312.06
  },
  {
    "name": "컵라면(큰것)",
    "kcal_per_unit": 327.66
  },
  {
    "name": "스파게티(패스트푸드)",
    "kcal_per_unit": 260.0
  },
  {
    "name": "스파게티와미트볼(패스트푸드)",
    "kcal_per_unit": 332.32
  },
  {
    "name": "야채라면",
    "kcal_per_unit": 495.02
  },
  {
    "name": "열무김치국수",
    "kcal_per_unit": 437.17
  },
  {
    "name": "울면,인스턴트",
    "kcal_per_unit": 431.0
  },
  {
    "name": "유부국수",
    "kcal_per_unit": 509.8
  },
  {
    "name": "짜장면",
    "kcal_per_unit": 607.5
  },
  {
    "name": "짜장면,인스턴트",
    "kcal_per_unit": 458.4
  },
  {
    "name": "칡냉면(비빔면)",
    "kcal_per_unit": 456.42
  },
  {
    "name": "칼국수,인스턴트",
    "kcal_per_unit": 158.4
  },
  {
    "name": "컵라면(작은것)",
    "kcal_per_unit": 274.32
  },
  {
    "name": "하이면,인스턴트",
    "kcal_per_unit": 139.23
  },
  {
    "name": "회냉면",
    "kcal_per_unit": 490.0
  },
  {
    "name": "메밀국수(일식)",
    "kcal_per_unit": 304.61
  },
  {
    "name": "열무김치냉면",
    "kcal_per_unit": 403.07
  },
  {
    "name": "김치만두",
    "kcal_per_unit": 401.24
  },
  {
    "name": "김치만두국",
    "kcal_per_unit": 253.47
  },
  {
    "name": "만두탕수",
    "kcal_per_unit": 421.41
  },
  {
    "name": "물만두",
    "kcal_per_unit": 462.28
  },
  {
    "name": "비빔만두",
    "kcal_per_unit": 340.05
  },
  {
    "name": "찐만두",
    "kcal_per_unit": 495.6
  },
  {
    "name": "튀김만두",
    "kcal_per_unit": 473.75
  },
  {
    "name": "감자죽",
    "kcal_per_unit": 197.0
  },
  {
    "name": "고기죽",
    "kcal_per_unit": 255.53
  },
  {
    "name": "깨죽",
    "kcal_per_unit": 261.3
  },
  {
    "name": "단팥죽",
    "kcal_per_unit": 380.0
  },
  {
    "name": "버섯죽",
    "kcal_per_unit": 223.92
  },
  {
    "name": "새우죽",
    "kcal_per_unit": 229.2
  },
  {
    "name": "수수죽",
    "kcal_per_unit": 211.8
  },
  {
    "name": "야채죽",
    "kcal_per_unit": 200.7
  },
  {
    "name": "잣죽",
    "kcal_per_unit": 269.65
  },
  {
    "name": "죽,율무죽",
    "kcal_per_unit": 138.6
  },
  {
    "name": "죽,흰죽",
    "kcal_per_unit": 216.0
  },
  {
    "name": "죽,흰죽,인스턴트",
    "kcal_per_unit": 235.2
  },
  {
    "name": "스프,쇠고기스프",
    "kcal_per_unit": 24.0
  },
  {
    "name": "스프,콩소메",
    "kcal_per_unit": 21.0
  },
  {
    "name": "스프,크림스프,아스파라거스",
    "kcal_per_unit": 72.0
  },
  {
    "name": "스프,쇠고기야채스프",
    "kcal_per_unit": 63.0
  },
  {
    "name": "스프,양송이스프",
    "kcal_per_unit": 114.0
  },
  {
    "name": "감자당면국",
    "kcal_per_unit": 69.49
  },
  {
    "name": "감자미역국",
    "kcal_per_unit": 56.76
  },
  {
    "name": "감자수제비국",
    "kcal_per_unit": 182.58
  },
  {
    "name": "감자어묵국",
    "kcal_per_unit": 90.61
  },
  {
    "name": "감자호박국",
    "kcal_per_unit": 49.76
  },
  {
    "name": "건새우미역국",
    "kcal_per_unit": 58.24
  },
  {
    "name": "경단미역국",
    "kcal_per_unit": 106.64
  },
  {
    "name": "계란국",
    "kcal_per_unit": 54.63
  },
  {
    "name": "계란파국",
    "kcal_per_unit": 80.05
  },
  {
    "name": "김당면국",
    "kcal_per_unit": 84.27
  },
  {
    "name": "김치무국",
    "kcal_per_unit": 24.52
  },
  {
    "name": "김치수제비국",
    "kcal_per_unit": 89.7
  },
  {
    "name": "김치콩나물국",
    "kcal_per_unit": 34.22
  },
  {
    "name": "다시멸치미역국",
    "kcal_per_unit": 28.48
  },
  {
    "name": "당면국",
    "kcal_per_unit": 140.81
  },
  {
    "name": "대구국",
    "kcal_per_unit": 81.33
  },
  {
    "name": "대합미역국",
    "kcal_per_unit": 40.33
  },
  {
    "name": "대합찜국",
    "kcal_per_unit": 78.15
  },
  {
    "name": "두부계란탕",
    "kcal_per_unit": 135.87
  },
  {
    "name": "두부김치국",
    "kcal_per_unit": 56.6
  },
  {
    "name": "두부어묵새우젓국",
    "kcal_per_unit": 85.9
  },
  {
    "name": "떡어묵국",
    "kcal_per_unit": 130.11
  },
  {
    "name": "모시조개국",
    "kcal_per_unit": 39.99
  },
  {
    "name": "무새우젓국",
    "kcal_per_unit": 54.61
  },
  {
    "name": "무채어묵국",
    "kcal_per_unit": 84.46
  },
  {
    "name": "버섯국",
    "kcal_per_unit": 33.55
  },
  {
    "name": "북어계란국",
    "kcal_per_unit": 153.83
  },
  {
    "name": "북어콩나물국",
    "kcal_per_unit": 128.31
  },
  {
    "name": "새우젓호박국",
    "kcal_per_unit": 48.98
  },
  {
    "name": "쇠고기두부국",
    "kcal_per_unit": 108.3
  },
  {
    "name": "쇠고기무국",
    "kcal_per_unit": 70.56
  },
  {
    "name": "쇠고기콩나물국",
    "kcal_per_unit": 73.19
  },
  {
    "name": "오징어무국",
    "kcal_per_unit": 61.52
  },
  {
    "name": "유부국",
    "kcal_per_unit": 90.6
  },
  {
    "name": "조개살두부국",
    "kcal_per_unit": 71.05
  },
  {
    "name": "조개살배추국",
    "kcal_per_unit": 68.49
  },
  {
    "name": "참치김치국",
    "kcal_per_unit": 33.3
  },
  {
    "name": "참치미역국",
    "kcal_per_unit": 62.94
  },
  {
    "name": "콩나물무채국",
    "kcal_per_unit": 24.55
  },
  {
    "name": "토란국",
    "kcal_per_unit": 67.21
  },
  {
    "name": "표고버섯북어국",
    "kcal_per_unit": 124.77
  },
  {
    "name": "호박새우젓국",
    "kcal_per_unit": 34.55
  },
  {
    "name": "홍합무국",
    "kcal_per_unit": 55.84
  },
  {
    "name": "감자고비된장국",
    "kcal_per_unit": 86.15
  },
  {
    "name": "감자된장국",
    "kcal_per_unit": 72.12
  },
  {
    "name": "감자두부된장국",
    "kcal_per_unit": 99.35
  },
  {
    "name": "건새우아욱국",
    "kcal_per_unit": 77.96
  },
  {
    "name": "근대조개국",
    "kcal_per_unit": 57.6
  },
  {
    "name": "꽃게된장국",
    "kcal_per_unit": 139.6
  },
  {
    "name": "단배추된장국",
    "kcal_per_unit": 83.51
  },
  {
    "name": "달래된장국",
    "kcal_per_unit": 73.21
  },
  {
    "name": "두부된장국",
    "kcal_per_unit": 99.5
  },
  {
    "name": "시금치조개국",
    "kcal_per_unit": 68.39
  },
  {
    "name": "미역된장국",
    "kcal_per_unit": 52.87
  },
  {
    "name": "바지락냉이토장국",
    "kcal_per_unit": 63.11
  },
  {
    "name": "배추된장국",
    "kcal_per_unit": 49.66
  },
  {
    "name": "솎음배추국",
    "kcal_per_unit": 51.81
  },
  {
    "name": "쑥국",
    "kcal_per_unit": 52.8
  },
  {
    "name": "아욱국",
    "kcal_per_unit": 57.28
  },
  {
    "name": "열무감자국",
    "kcal_per_unit": 59.23
  },
  {
    "name": "열무두부국",
    "kcal_per_unit": 71.06
  },
  {
    "name": "왜된장국",
    "kcal_per_unit": 68.95
  },
  {
    "name": "재치조개국",
    "kcal_per_unit": 95.61
  },
  {
    "name": "조개된장국",
    "kcal_per_unit": 73.75
  },
  {
    "name": "콩나물된장국",
    "kcal_per_unit": 49.79
  },
  {
    "name": "해물된장국",
    "kcal_per_unit": 110.55
  },
  {
    "name": "호박달래찌개",
    "kcal_per_unit": 88.43
  },
  {
    "name": "호박된장찌개",
    "kcal_per_unit": 116.56
  },
  {
    "name": "호박잎된장국",
    "kcal_per_unit": 55.62
  },
  {
    "name": "홍합우거지국",
    "kcal_per_unit": 49.94
  },
  {
    "name": "감자탕",
    "kcal_per_unit": 175.98
  },
  {
    "name": "곰갈비탕",
    "kcal_per_unit": 389.93
  },
  {
    "name": "곰탕",
    "kcal_per_unit": 186.5
  },
  {
    "name": "꼬리곰탕",
    "kcal_per_unit": 238.53
  },
  {
    "name": "내장탕",
    "kcal_per_unit": 173.55
  },
  {
    "name": "닭계장",
    "kcal_per_unit": 168.31
  },
  {
    "name": "닭곰탕",
    "kcal_per_unit": 129.11
  },
  {
    "name": "닭무국",
    "kcal_per_unit": 122.01
  },
  {
    "name": "닭백숙",
    "kcal_per_unit": 315.51
  },
  {
    "name": "도가니탕",
    "kcal_per_unit": 317.83
  },
  {
    "name": "돈육개장",
    "kcal_per_unit": 191.25
  },
  {
    "name": "두부탕",
    "kcal_per_unit": 73.91
  },
  {
    "name": "삼계탕",
    "kcal_per_unit": 900.05
  },
  {
    "name": "선지곱창국",
    "kcal_per_unit": 114.01
  },
  {
    "name": "선지국",
    "kcal_per_unit": 88.69
  },
  {
    "name": "쇠고기두부탕",
    "kcal_per_unit": 97.89
  },
  {
    "name": "쇠고기탕국",
    "kcal_per_unit": 95.49
  },
  {
    "name": "오리탕",
    "kcal_per_unit": 227.45
  },
  {
    "name": "조개탕",
    "kcal_per_unit": 59.97
  },
  {
    "name": "짬뽕국",
    "kcal_per_unit": 173.8
  },
  {
    "name": "가지냉국",
    "kcal_per_unit": 27.18
  },
  {
    "name": "미역냉국",
    "kcal_per_unit": 46.82
  },
  {
    "name": "미역오이냉국",
    "kcal_per_unit": 29.07
  },
  {
    "name": "가자미매운탕",
    "kcal_per_unit": 141.64
  },
  {
    "name": "고등어매운탕",
    "kcal_per_unit": 242.89
  },
  {
    "name": "굴두부백탕",
    "kcal_per_unit": 92.29
  },
  {
    "name": "굴두부찌개",
    "kcal_per_unit": 117.92
  },
  {
    "name": "긴따루찌개",
    "kcal_per_unit": 157.32
  },
  {
    "name": "꽁치찌개",
    "kcal_per_unit": 249.72
  },
  {
    "name": "낙지찌개",
    "kcal_per_unit": 133.53
  },
  {
    "name": "대구지리",
    "kcal_per_unit": 98.74
  },
  {
    "name": "대구탕",
    "kcal_per_unit": 89.95
  },
  {
    "name": "도미찌개",
    "kcal_per_unit": 132.22
  },
  {
    "name": "동태매운탕",
    "kcal_per_unit": 106.42
  },
  {
    "name": "망둥어찌개",
    "kcal_per_unit": 117.52
  },
  {
    "name": "명란알찌개",
    "kcal_per_unit": 110.83
  },
  {
    "name": "미꾸라지매운탕",
    "kcal_per_unit": 152.74
  },
  {
    "name": "민어매운탕",
    "kcal_per_unit": 150.36
  },
  {
    "name": "병어찌개",
    "kcal_per_unit": 179.82
  },
  {
    "name": "붕어매운탕",
    "kcal_per_unit": 152.84
  },
  {
    "name": "삼치찌개",
    "kcal_per_unit": 189.62
  },
  {
    "name": "쏘가리매운탕",
    "kcal_per_unit": 156.04
  },
  {
    "name": "아구매운탕",
    "kcal_per_unit": 115.24
  },
  {
    "name": "알탕",
    "kcal_per_unit": 139.15
  },
  {
    "name": "어묵김치찌개",
    "kcal_per_unit": 129.73
  },
  {
    "name": "연어찌개",
    "kcal_per_unit": 180.72
  },
  {
    "name": "옥도미매운탕",
    "kcal_per_unit": 141.02
  },
  {
    "name": "우럭매운탕",
    "kcal_per_unit": 118.22
  },
  {
    "name": "임연수찌개",
    "kcal_per_unit": 180.27
  },
  {
    "name": "잉어매운탕",
    "kcal_per_unit": 133.42
  },
  {
    "name": "적어매운탕",
    "kcal_per_unit": 121.22
  },
  {
    "name": "조기찌개",
    "kcal_per_unit": 165.29
  },
  {
    "name": "참치김치찌개",
    "kcal_per_unit": 67.63
  },
  {
    "name": "참치두부찌개",
    "kcal_per_unit": 114.81
  },
  {
    "name": "참치탕",
    "kcal_per_unit": 106.8
  },
  {
    "name": "청어찌개",
    "kcal_per_unit": 233.9
  },
  {
    "name": "해물잡탕",
    "kcal_per_unit": 101.62
  },
  {
    "name": "닭매운탕",
    "kcal_per_unit": 181.04
  },
  {
    "name": "돈육감자탕",
    "kcal_per_unit": 162.21
  },
  {
    "name": "돈육김치찌개",
    "kcal_per_unit": 112.5
  },
  {
    "name": "부대고기찌개",
    "kcal_per_unit": 353.55
  },
  {
    "name": "쇠고기두부찌개",
    "kcal_per_unit": 127.9
  },
  {
    "name": "쇠고기찌개",
    "kcal_per_unit": 137.54
  },
  {
    "name": "햄김치찌개",
    "kcal_per_unit": 114.52
  },
  {
    "name": "햄섞어찌개",
    "kcal_per_unit": 273.55
  },
  {
    "name": "감자찌개",
    "kcal_per_unit": 150.26
  },
  {
    "name": "냉이된장찌개",
    "kcal_per_unit": 77.09
  },
  {
    "name": "두부된장찌개",
    "kcal_per_unit": 100.7
  },
  {
    "name": "미더덕된장찌개",
    "kcal_per_unit": 73.35
  },
  {
    "name": "쇠고기청국장찌개",
    "kcal_per_unit": 119.05
  },
  {
    "name": "왜된장버섯탕",
    "kcal_per_unit": 157.88
  },
  {
    "name": "우거지찌개",
    "kcal_per_unit": 135.12
  },
  {
    "name": "우렁된장찌개",
    "kcal_per_unit": 96.2
  },
  {
    "name": "국수전골",
    "kcal_per_unit": 174.76
  },
  {
    "name": "김치전골",
    "kcal_per_unit": 172.24
  },
  {
    "name": "불낙전골",
    "kcal_per_unit": 247.98
  },
  {
    "name": "쇠고기전골(스끼야끼)",
    "kcal_per_unit": 146.12
  },
  {
    "name": "양송이버섯전골",
    "kcal_per_unit": 111.51
  },
  {
    "name": "징기스칸",
    "kcal_per_unit": 214.66
  },
  {
    "name": "표고버섯전골",
    "kcal_per_unit": 113.63
  },
  {
    "name": "양송이버섯찌개",
    "kcal_per_unit": 88.74
  },
  {
    "name": "섞어찌개",
    "kcal_per_unit": 119.85
  },
  {
    "name": "가오리찜",
    "kcal_per_unit": 104.21
  },
  {
    "name": "가자미찜",
    "kcal_per_unit": 135.91
  },
  {
    "name": "갈치찜",
    "kcal_per_unit": 147.76
  },
  {
    "name": "고등어찜",
    "kcal_per_unit": 235.31
  },
  {
    "name": "꽃게찜",
    "kcal_per_unit": 188.15
  },
  {
    "name": "대구찜",
    "kcal_per_unit": 108.61
  },
  {
    "name": "대합찜",
    "kcal_per_unit": 243.08
  },
  {
    "name": "도미찜",
    "kcal_per_unit": 112.81
  },
  {
    "name": "동태찜",
    "kcal_per_unit": 113.01
  },
  {
    "name": "망둥어찜",
    "kcal_per_unit": 98.11
  },
  {
    "name": "미더덕찜",
    "kcal_per_unit": 87.67
  },
  {
    "name": "바지락찜",
    "kcal_per_unit": 114.48
  },
  {
    "name": "알찜",
    "kcal_per_unit": 73.62
  },
  {
    "name": "오징어순대",
    "kcal_per_unit": 95.83
  },
  {
    "name": "오징어찜",
    "kcal_per_unit": 81.04
  },
  {
    "name": "우럭찜",
    "kcal_per_unit": 113.71
  },
  {
    "name": "자반고등어찜",
    "kcal_per_unit": 182.27
  },
  {
    "name": "참치계란찜",
    "kcal_per_unit": 87.49
  },
  {
    "name": "홍어찜",
    "kcal_per_unit": 108.88
  },
  {
    "name": "도가니수육",
    "kcal_per_unit": 134.51
  },
  {
    "name": "돼지갈비고구마찜",
    "kcal_per_unit": 333.05
  },
  {
    "name": "돼지족발찜",
    "kcal_per_unit": 308.75
  },
  {
    "name": "쇠갈비떡찜",
    "kcal_per_unit": 279.16
  },
  {
    "name": "쇠갈비찜",
    "kcal_per_unit": 284.07
  },
  {
    "name": "우설찜",
    "kcal_per_unit": 125.76
  },
  {
    "name": "편육",
    "kcal_per_unit": 88.72
  },
  {
    "name": "깻잎찜",
    "kcal_per_unit": 26.83
  },
  {
    "name": "애호박찜",
    "kcal_per_unit": 48.46
  },
  {
    "name": "양배추찜",
    "kcal_per_unit": 35.41
  },
  {
    "name": "호박잎찜",
    "kcal_per_unit": 19.03
  },
  {
    "name": "계란찜",
    "kcal_per_unit": 92.5
  },
  {
    "name": "두부찜",
    "kcal_per_unit": 82.82
  },
  {
    "name": "가리비구이",
    "kcal_per_unit": 91.66
  },
  {
    "name": "가자미구이(fried flounder)",
    "kcal_per_unit": 116.82
  },
  {
    "name": "굴비구이",
    "kcal_per_unit": 124.6
  },
  {
    "name": "긴따루구이",
    "kcal_per_unit": 91.0
  },
  {
    "name": "넙치구이",
    "kcal_per_unit": 72.1
  },
  {
    "name": "도미구이",
    "kcal_per_unit": 67.2
  },
  {
    "name": "명태,노가리구이",
    "kcal_per_unit": 92.83
  },
  {
    "name": "민어구이",
    "kcal_per_unit": 72.8
  },
  {
    "name": "뱅어포구이",
    "kcal_per_unit": 93.59
  },
  {
    "name": "병어고추장구이",
    "kcal_per_unit": 173.27
  },
  {
    "name": "병어구이",
    "kcal_per_unit": 114.8
  },
  {
    "name": "볼락구이",
    "kcal_per_unit": 78.4
  },
  {
    "name": "북어양념구이",
    "kcal_per_unit": 138.6
  },
  {
    "name": "삼치양념구이",
    "kcal_per_unit": 170.56
  },
  {
    "name": "연어구이",
    "kcal_per_unit": 112.7
  },
  {
    "name": "오징어양념구이",
    "kcal_per_unit": 102.83
  },
  {
    "name": "장어구이",
    "kcal_per_unit": 223.62
  },
  {
    "name": "적어구이",
    "kcal_per_unit": 60.9
  },
  {
    "name": "전어구이",
    "kcal_per_unit": 142.8
  },
  {
    "name": "조기양념구이",
    "kcal_per_unit": 109.55
  },
  {
    "name": "쥐포구이",
    "kcal_per_unit": 59.76
  },
  {
    "name": "참치구이",
    "kcal_per_unit": 79.8
  },
  {
    "name": "청어구이",
    "kcal_per_unit": 169.4
  },
  {
    "name": "가자미구이(Grilled Flounder)",
    "kcal_per_unit": 90.3
  },
  {
    "name": "갈치구이(Panfried Flounder)",
    "kcal_per_unit": 128.02
  },
  {
    "name": "고등어구이(Panfried~",
    "kcal_per_unit": 222.82
  },
  {
    "name": "굴비구이(Panfried~",
    "kcal_per_unit": 151.12
  },
  {
    "name": "긴따루구이(Panfried~",
    "kcal_per_unit": 117.52
  },
  {
    "name": "꽁치구이(Panfried~",
    "kcal_per_unit": 209.92
  },
  {
    "name": "넙치구이(Panfried~",
    "kcal_per_unit": 98.62
  },
  {
    "name": "도미구이(Panfried~",
    "kcal_per_unit": 93.72
  },
  {
    "name": "민어구이(Pantried~",
    "kcal_per_unit": 99.32
  },
  {
    "name": "병어구이(Pantried~",
    "kcal_per_unit": 141.32
  },
  {
    "name": "볼락구이(Pantried~",
    "kcal_per_unit": 104.92
  },
  {
    "name": "삼치구이(Pantried~",
    "kcal_per_unit": 151.12
  },
  {
    "name": "임연수구이(Pantried~",
    "kcal_per_unit": 142.72
  },
  {
    "name": "적어구이(Pantried~",
    "kcal_per_unit": 87.42
  },
  {
    "name": "전어구이(Pantried~",
    "kcal_per_unit": 169.32
  },
  {
    "name": "조기구이(Pantried~",
    "kcal_per_unit": 123.12
  },
  {
    "name": "청어구이(Pantried~",
    "kcal_per_unit": 195.92
  },
  {
    "name": "갈매기살구이",
    "kcal_per_unit": 93.28
  },
  {
    "name": "내장구이",
    "kcal_per_unit": 109.66
  },
  {
    "name": "닭갈비",
    "kcal_per_unit": 194.66
  },
  {
    "name": "닭불고기",
    "kcal_per_unit": 172.73
  },
  {
    "name": "멧돼지구이",
    "kcal_per_unit": 155.15
  },
  {
    "name": "쇠등심구이",
    "kcal_per_unit": 143.24
  },
  {
    "name": "칠면조구이",
    "kcal_per_unit": 87.93
  },
  {
    "name": "통닭",
    "kcal_per_unit": 105.33
  },
  {
    "name": "햄구이",
    "kcal_per_unit": 52.4
  },
  {
    "name": "감자구이",
    "kcal_per_unit": 71.5
  },
  {
    "name": "더덕구이",
    "kcal_per_unit": 81.96
  },
  {
    "name": "도라지구이",
    "kcal_per_unit": 95.96
  },
  {
    "name": "두부양념구이",
    "kcal_per_unit": 142.61
  },
  {
    "name": "떡고치구이",
    "kcal_per_unit": 283.5
  },
  {
    "name": "옥수수구이",
    "kcal_per_unit": 140.0
  },
  {
    "name": "우엉구이",
    "kcal_per_unit": 103.19
  },
  {
    "name": "굴전",
    "kcal_per_unit": 187.62
  },
  {
    "name": "맛살전",
    "kcal_per_unit": 110.62
  },
  {
    "name": "새우전",
    "kcal_per_unit": 168.72
  },
  {
    "name": "어묵전",
    "kcal_per_unit": 142.31
  },
  {
    "name": "오징어옥수수전",
    "kcal_per_unit": 215.7
  },
  {
    "name": "전유어(동태전)",
    "kcal_per_unit": 160.21
  },
  {
    "name": "조개파전",
    "kcal_per_unit": 193.23
  },
  {
    "name": "해물채소전",
    "kcal_per_unit": 230.0
  },
  {
    "name": "해물파전",
    "kcal_per_unit": 213.35
  },
  {
    "name": "홍합쑥갓전",
    "kcal_per_unit": 204.0
  },
  {
    "name": "홍합전",
    "kcal_per_unit": 186.3
  },
  {
    "name": "돼지고기완자전",
    "kcal_per_unit": 251.93
  },
  {
    "name": "쇠간전",
    "kcal_per_unit": 171.21
  },
  {
    "name": "쇠고기완자전",
    "kcal_per_unit": 233.58
  },
  {
    "name": "천엽전",
    "kcal_per_unit": 123.21
  },
  {
    "name": "가지전",
    "kcal_per_unit": 104.2
  },
  {
    "name": "감자전",
    "kcal_per_unit": 142.15
  },
  {
    "name": "김치빈대떡",
    "kcal_per_unit": 216.34
  },
  {
    "name": "깻잎전",
    "kcal_per_unit": 171.7
  },
  {
    "name": "녹두전(빈대떡)",
    "kcal_per_unit": 194.64
  },
  {
    "name": "더덕산적",
    "kcal_per_unit": 171.2
  },
  {
    "name": "두릅적",
    "kcal_per_unit": 135.84
  },
  {
    "name": "두부빈대떡",
    "kcal_per_unit": 231.15
  },
  {
    "name": "버섯전",
    "kcal_per_unit": 137.1
  },
  {
    "name": "부추파전",
    "kcal_per_unit": 151.4
  },
  {
    "name": "야채전",
    "kcal_per_unit": 151.45
  },
  {
    "name": "양파전",
    "kcal_per_unit": 120.44
  },
  {
    "name": "연근전",
    "kcal_per_unit": 110.0
  },
  {
    "name": "풋고추표고전",
    "kcal_per_unit": 200.23
  },
  {
    "name": "화양적",
    "kcal_per_unit": 210.96
  },
  {
    "name": "계란,스크램블드에그",
    "kcal_per_unit": 122.35
  },
  {
    "name": "계란,스크램블드에그(패스트푸드)",
    "kcal_per_unit": 106.0
  },
  {
    "name": "계란,오믈렛",
    "kcal_per_unit": 169.61
  },
  {
    "name": "계란,햄오믈렛",
    "kcal_per_unit": 158.96
  },
  {
    "name": "계란말이",
    "kcal_per_unit": 112.1
  },
  {
    "name": "계란채소말이",
    "kcal_per_unit": 113.27
  },
  {
    "name": "계란햄말이",
    "kcal_per_unit": 130.02
  },
  {
    "name": "계란후라이",
    "kcal_per_unit": 96.68
  },
  {
    "name": "햄부침",
    "kcal_per_unit": 178.01
  },
  {
    "name": "두부전",
    "kcal_per_unit": 139.7
  },
  {
    "name": "건꼴뚜기볶음",
    "kcal_per_unit": 119.57
  },
  {
    "name": "건새우볶음",
    "kcal_per_unit": 107.01
  },
  {
    "name": "건새우케찹볶음",
    "kcal_per_unit": 112.86
  },
  {
    "name": "마늘쫑어묵볶음",
    "kcal_per_unit": 126.34
  },
  {
    "name": "멸치야채볶음",
    "kcal_per_unit": 120.89
  },
  {
    "name": "문어볶음",
    "kcal_per_unit": 149.2
  },
  {
    "name": "뱅어포볶음",
    "kcal_per_unit": 85.63
  },
  {
    "name": "북어볶음",
    "kcal_per_unit": 120.03
  },
  {
    "name": "어묵양파볶음",
    "kcal_per_unit": 132.73
  },
  {
    "name": "오징어떡볶음",
    "kcal_per_unit": 146.76
  },
  {
    "name": "오징어버섯볶음",
    "kcal_per_unit": 103.14
  },
  {
    "name": "오징어어묵볶음",
    "kcal_per_unit": 155.2
  },
  {
    "name": "오징어해물볶음",
    "kcal_per_unit": 126.4
  },
  {
    "name": "잔멸치소세지볶음",
    "kcal_per_unit": 146.89
  },
  {
    "name": "쥐포볶음",
    "kcal_per_unit": 115.07
  },
  {
    "name": "참치김치볶음",
    "kcal_per_unit": 101.31
  },
  {
    "name": "참치야채볶음",
    "kcal_per_unit": 111.31
  },
  {
    "name": "호박홍합볶음",
    "kcal_per_unit": 75.76
  },
  {
    "name": "곱창볶음",
    "kcal_per_unit": 166.93
  },
  {
    "name": "김치소세지볶음",
    "kcal_per_unit": 127.5
  },
  {
    "name": "닭고추장볶음",
    "kcal_per_unit": 232.57
  },
  {
    "name": "닭떡볶음",
    "kcal_per_unit": 260.98
  },
  {
    "name": "닭볶음",
    "kcal_per_unit": 174.01
  },
  {
    "name": "닭살야채볶음",
    "kcal_per_unit": 154.6
  },
  {
    "name": "돈육두루치기",
    "kcal_per_unit": 225.08
  },
  {
    "name": "돼지고기고추장볶음",
    "kcal_per_unit": 228.4
  },
  {
    "name": "돼지고기김치볶음",
    "kcal_per_unit": 154.7
  },
  {
    "name": "돼지고기야채볶음",
    "kcal_per_unit": 206.19
  },
  {
    "name": "돼지곱창볶음",
    "kcal_per_unit": 198.44
  },
  {
    "name": "베이컨볶음",
    "kcal_per_unit": 161.07
  },
  {
    "name": "소간야채볶음",
    "kcal_per_unit": 125.86
  },
  {
    "name": "소세지야채볶음",
    "kcal_per_unit": 166.32
  },
  {
    "name": "쇠고기고추장볶음",
    "kcal_per_unit": 139.68
  },
  {
    "name": "쇠고기마늘볶음",
    "kcal_per_unit": 191.91
  },
  {
    "name": "쇠고기버섯볶음",
    "kcal_per_unit": 185.17
  },
  {
    "name": "쇠고기볶음",
    "kcal_per_unit": 166.41
  },
  {
    "name": "쇠고기야채볶음",
    "kcal_per_unit": 175.73
  },
  {
    "name": "쇠고기오이볶음",
    "kcal_per_unit": 104.75
  },
  {
    "name": "쇠고기표고볶음",
    "kcal_per_unit": 186.45
  },
  {
    "name": "철판구이볶음",
    "kcal_per_unit": 151.53
  },
  {
    "name": "칠면조볶음",
    "kcal_per_unit": 143.3
  },
  {
    "name": "햄김치볶음",
    "kcal_per_unit": 199.44
  },
  {
    "name": "햄야채볶음",
    "kcal_per_unit": 243.61
  },
  {
    "name": "가지볶음",
    "kcal_per_unit": 50.35
  },
  {
    "name": "감자야채볶음",
    "kcal_per_unit": 89.96
  },
  {
    "name": "감자어묵볶음",
    "kcal_per_unit": 147.57
  },
  {
    "name": "감자채볶음",
    "kcal_per_unit": 97.75
  },
  {
    "name": "감자풋고추볶음",
    "kcal_per_unit": 103.43
  },
  {
    "name": "감자햄볶음",
    "kcal_per_unit": 152.32
  },
  {
    "name": "고구마줄기볶음",
    "kcal_per_unit": 48.19
  },
  {
    "name": "고비볶음",
    "kcal_per_unit": 55.9
  },
  {
    "name": "고사리볶음",
    "kcal_per_unit": 68.26
  },
  {
    "name": "고춧잎볶음",
    "kcal_per_unit": 83.25
  },
  {
    "name": "근대볶음",
    "kcal_per_unit": 54.22
  },
  {
    "name": "깻잎나물볶음",
    "kcal_per_unit": 66.05
  },
  {
    "name": "도라지볶음",
    "kcal_per_unit": 88.52
  },
  {
    "name": "멸치깻잎볶음",
    "kcal_per_unit": 49.93
  },
  {
    "name": "무청볶음",
    "kcal_per_unit": 80.65
  },
  {
    "name": "미역줄기잡채",
    "kcal_per_unit": 99.54
  },
  {
    "name": "버섯채소볶음",
    "kcal_per_unit": 76.08
  },
  {
    "name": "부추볶음",
    "kcal_per_unit": 83.0
  },
  {
    "name": "야채볶음",
    "kcal_per_unit": 92.96
  },
  {
    "name": "양파볶음",
    "kcal_per_unit": 74.4
  },
  {
    "name": "오이볶음",
    "kcal_per_unit": 72.74
  },
  {
    "name": "우엉볶음",
    "kcal_per_unit": 105.29
  },
  {
    "name": "죽순볶음",
    "kcal_per_unit": 67.47
  },
  {
    "name": "취나물볶음",
    "kcal_per_unit": 73.93
  },
  {
    "name": "호박볶음",
    "kcal_per_unit": 62.56
  },
  {
    "name": "두부고추장볶음",
    "kcal_per_unit": 162.92
  },
  {
    "name": "두부두루치기",
    "kcal_per_unit": 99.38
  },
  {
    "name": "떡볶기",
    "kcal_per_unit": 229.89
  },
  {
    "name": "떡볶기(전통)",
    "kcal_per_unit": 275.31
  },
  {
    "name": "라면볶음",
    "kcal_per_unit": 452.41
  },
  {
    "name": "라볶기",
    "kcal_per_unit": 408.34
  },
  {
    "name": "카레떡볶음",
    "kcal_per_unit": 183.14
  },
  {
    "name": "콩볶음",
    "kcal_per_unit": 122.39
  },
  {
    "name": "구절판",
    "kcal_per_unit": 256.57
  },
  {
    "name": "도토리묵김치잡채",
    "kcal_per_unit": 65.11
  },
  {
    "name": "떡잡채",
    "kcal_per_unit": 234.17
  },
  {
    "name": "목이버섯잡채",
    "kcal_per_unit": 211.04
  },
  {
    "name": "부추잡채",
    "kcal_per_unit": 101.8
  },
  {
    "name": "콩나물잡채",
    "kcal_per_unit": 108.55
  },
  {
    "name": "팔보채",
    "kcal_per_unit": 178.82
  },
  {
    "name": "어묵조림",
    "kcal_per_unit": 132.65
  },
  {
    "name": "병어조림",
    "kcal_per_unit": 151.64
  },
  {
    "name": "빙어조림",
    "kcal_per_unit": 185.5
  },
  {
    "name": "양미리조림",
    "kcal_per_unit": 120.0
  },
  {
    "name": "어묵케찹조림",
    "kcal_per_unit": 111.91
  },
  {
    "name": "어묵햄조림",
    "kcal_per_unit": 157.02
  },
  {
    "name": "오징어조림",
    "kcal_per_unit": 120.99
  },
  {
    "name": "오징어포고추조림",
    "kcal_per_unit": 104.12
  },
  {
    "name": "자반고등어조림",
    "kcal_per_unit": 213.27
  },
  {
    "name": "장어조림",
    "kcal_per_unit": 199.85
  },
  {
    "name": "적어조림",
    "kcal_per_unit": 97.46
  },
  {
    "name": "전어조림",
    "kcal_per_unit": 170.09
  },
  {
    "name": "쥐포조림",
    "kcal_per_unit": 84.79
  },
  {
    "name": "청어조림",
    "kcal_per_unit": 210.67
  },
  {
    "name": "홍합조림",
    "kcal_per_unit": 83.68
  },
  {
    "name": "달걀(계란)조림",
    "kcal_per_unit": 84.3
  },
  {
    "name": "닭다리조림",
    "kcal_per_unit": 212.52
  },
  {
    "name": "닭조림",
    "kcal_per_unit": 193.58
  },
  {
    "name": "돼지고기갈비강정",
    "kcal_per_unit": 282.01
  },
  {
    "name": "돼지고기메추리알조림",
    "kcal_per_unit": 163.9
  },
  {
    "name": "돼지고기완자조림",
    "kcal_per_unit": 251.03
  },
  {
    "name": "메추리알조림",
    "kcal_per_unit": 106.11
  },
  {
    "name": "소세지어묵조림",
    "kcal_per_unit": 163.75
  },
  {
    "name": "소세지조림",
    "kcal_per_unit": 162.47
  },
  {
    "name": "쇠갈비조림",
    "kcal_per_unit": 307.99
  },
  {
    "name": "쇠고기장조림",
    "kcal_per_unit": 105.74
  },
  {
    "name": "우엉쇠고기조림",
    "kcal_per_unit": 95.2
  },
  {
    "name": "풋고추소세지조림",
    "kcal_per_unit": 118.68
  },
  {
    "name": "햄조림",
    "kcal_per_unit": 64.87
  },
  {
    "name": "고구마조림",
    "kcal_per_unit": 135.95
  },
  {
    "name": "깻잎조림",
    "kcal_per_unit": 28.27
  },
  {
    "name": "다시마조림",
    "kcal_per_unit": 12.6
  },
  {
    "name": "당근조림",
    "kcal_per_unit": 64.09
  },
  {
    "name": "마늘쫑조림",
    "kcal_per_unit": 27.44
  },
  {
    "name": "무조림",
    "kcal_per_unit": 18.43
  },
  {
    "name": "양송이버섯조림",
    "kcal_per_unit": 29.06
  },
  {
    "name": "완두콩조림",
    "kcal_per_unit": 110.09
  },
  {
    "name": "우엉어묵조림",
    "kcal_per_unit": 96.4
  },
  {
    "name": "토란조림",
    "kcal_per_unit": 64.35
  },
  {
    "name": "호박조림",
    "kcal_per_unit": 44.24
  },
  {
    "name": "강남콩조림",
    "kcal_per_unit": 100.75
  },
  {
    "name": "검정콩조림",
    "kcal_per_unit": 105.94
  },
  {
    "name": "두부양념조림",
    "kcal_per_unit": 123.02
  },
  {
    "name": "땅콩조림",
    "kcal_per_unit": 145.35
  },
  {
    "name": "유부조림",
    "kcal_per_unit": 200.26
  },
  {
    "name": "가자미튀김",
    "kcal_per_unit": 187.26
  },
  {
    "name": "갈치튀김",
    "kcal_per_unit": 237.22
  },
  {
    "name": "굴비튀김",
    "kcal_per_unit": 260.32
  },
  {
    "name": "꽁치튀김",
    "kcal_per_unit": 319.12
  },
  {
    "name": "대구튀김",
    "kcal_per_unit": 198.72
  },
  {
    "name": "도미튀김",
    "kcal_per_unit": 202.92
  },
  {
    "name": "동태튀김",
    "kcal_per_unit": 186.82
  },
  {
    "name": "멸치튀김",
    "kcal_per_unit": 183.52
  },
  {
    "name": "뱅어포튀김",
    "kcal_per_unit": 73.16
  },
  {
    "name": "병어튀김",
    "kcal_per_unit": 234.32
  },
  {
    "name": "북어강정",
    "kcal_per_unit": 203.25
  },
  {
    "name": "삼치튀김",
    "kcal_per_unit": 227.62
  },
  {
    "name": "새우까스",
    "kcal_per_unit": 188.02
  },
  {
    "name": "생선까스",
    "kcal_per_unit": 149.22
  },
  {
    "name": "생선까스정식",
    "kcal_per_unit": 294.47
  },
  {
    "name": "어묵탕수",
    "kcal_per_unit": 218.69
  },
  {
    "name": "어묵튀김",
    "kcal_per_unit": 180.82
  },
  {
    "name": "연어튀김",
    "kcal_per_unit": 248.42
  },
  {
    "name": "오징어탕수",
    "kcal_per_unit": 213.46
  },
  {
    "name": "우럭튀김",
    "kcal_per_unit": 205.02
  },
  {
    "name": "임연수튀김",
    "kcal_per_unit": 251.92
  },
  {
    "name": "쥐포튀김",
    "kcal_per_unit": 180.15
  },
  {
    "name": "참치강정",
    "kcal_per_unit": 208.9
  },
  {
    "name": "참치튀김",
    "kcal_per_unit": 228.12
  },
  {
    "name": "청어튀김",
    "kcal_per_unit": 305.12
  },
  {
    "name": "탕수어",
    "kcal_per_unit": 232.31
  },
  {
    "name": "황새치튀김",
    "kcal_per_unit": 232.32
  },
  {
    "name": "깐풍기",
    "kcal_per_unit": 294.11
  },
  {
    "name": "닭강정",
    "kcal_per_unit": 274.66
  },
  {
    "name": "닭고기탕수육",
    "kcal_per_unit": 247.01
  },
  {
    "name": "닭다리튀김(패스트푸드)",
    "kcal_per_unit": 174.6
  },
  {
    "name": "닭카레튀김",
    "kcal_per_unit": 185.9
  },
  {
    "name": "닭튀김(패스트푸드)",
    "kcal_per_unit": 181.8
  },
  {
    "name": "닭튀김,맥치킨(맥도날드)",
    "kcal_per_unit": 154.8
  },
  {
    "name": "돈까스양념튀김",
    "kcal_per_unit": 343.75
  },
  {
    "name": "돈까스정식",
    "kcal_per_unit": 537.94
  },
  {
    "name": "돈까스탕수",
    "kcal_per_unit": 260.26
  },
  {
    "name": "돼지고기강정",
    "kcal_per_unit": 312.46
  },
  {
    "name": "돼지고기튀김",
    "kcal_per_unit": 246.25
  },
  {
    "name": "라조기",
    "kcal_per_unit": 293.81
  },
  {
    "name": "비프스튜",
    "kcal_per_unit": 231.68
  },
  {
    "name": "비후까스",
    "kcal_per_unit": 375.59
  },
  {
    "name": "비후까스정식",
    "kcal_per_unit": 506.14
  },
  {
    "name": "소세지튀김",
    "kcal_per_unit": 301.53
  },
  {
    "name": "쇠고기튀김",
    "kcal_per_unit": 263.55
  },
  {
    "name": "양념통닭",
    "kcal_per_unit": 345.97
  },
  {
    "name": "함박스테이크정식",
    "kcal_per_unit": 376.17
  },
  {
    "name": "햄커틀렛",
    "kcal_per_unit": 239.99
  },
  {
    "name": "가지튀김",
    "kcal_per_unit": 152.1
  },
  {
    "name": "감자연근튀김",
    "kcal_per_unit": 242.82
  },
  {
    "name": "감자튀김",
    "kcal_per_unit": 142.22
  },
  {
    "name": "감자튀김,후렌치후라이",
    "kcal_per_unit": 447.12
  },
  {
    "name": "감자튀김,후렌치후라이(롯데리아)",
    "kcal_per_unit": 240.71
  },
  {
    "name": "감자튀김,후렌치후라이(맥도날드)",
    "kcal_per_unit": 289.8
  },
  {
    "name": "감자튀김,후렌치후라이(버거킹)",
    "kcal_per_unit": 422.28
  },
  {
    "name": "감자튀김,후렌치후라이(웬디스)",
    "kcal_per_unit": 409.45
  },
  {
    "name": "감자튀김,후렌치후라이(KFC)",
    "kcal_per_unit": 310.5
  },
  {
    "name": "고구마깻잎튀김",
    "kcal_per_unit": 251.02
  },
  {
    "name": "고구마채튀김",
    "kcal_per_unit": 166.72
  },
  {
    "name": "깻잎튀김",
    "kcal_per_unit": 106.42
  },
  {
    "name": "도라지튀김",
    "kcal_per_unit": 176.62
  },
  {
    "name": "미역야채튀김",
    "kcal_per_unit": 107.9
  },
  {
    "name": "미역튀각",
    "kcal_per_unit": 107.8
  },
  {
    "name": "야채튀김",
    "kcal_per_unit": 225.78
  },
  {
    "name": "양파,어니언링(패스트푸드)",
    "kcal_per_unit": 232.4
  },
  {
    "name": "연근튀김",
    "kcal_per_unit": 168.62
  },
  {
    "name": "파래야채튀김",
    "kcal_per_unit": 113.86
  },
  {
    "name": "풋고추튀김",
    "kcal_per_unit": 157.82
  },
  {
    "name": "홍합튀김",
    "kcal_per_unit": 210.23
  },
  {
    "name": "계란,스카치에그",
    "kcal_per_unit": 258.53
  },
  {
    "name": "두부탕수육",
    "kcal_per_unit": 230.81
  },
  {
    "name": "두부튀김",
    "kcal_per_unit": 179.63
  },
  {
    "name": "맛탕",
    "kcal_per_unit": 191.8
  },
  {
    "name": "식빵튀김",
    "kcal_per_unit": 220.83
  },
  {
    "name": "옥수수튀김",
    "kcal_per_unit": 214.92
  },
  {
    "name": "겨자채",
    "kcal_per_unit": 148.51
  },
  {
    "name": "노각무침",
    "kcal_per_unit": 32.27
  },
  {
    "name": "단무지무침",
    "kcal_per_unit": 24.42
  },
  {
    "name": "달래무무침",
    "kcal_per_unit": 40.7
  },
  {
    "name": "도라지무침",
    "kcal_per_unit": 76.39
  },
  {
    "name": "도라지북어포무침",
    "kcal_per_unit": 115.56
  },
  {
    "name": "두부냉채",
    "kcal_per_unit": 158.83
  },
  {
    "name": "두부톳무침",
    "kcal_per_unit": 53.07
  },
  {
    "name": "무미역생채",
    "kcal_per_unit": 23.83
  },
  {
    "name": "미역오이초무침",
    "kcal_per_unit": 25.93
  },
  {
    "name": "부추겉절이",
    "kcal_per_unit": 40.3
  },
  {
    "name": "부추양배추무침",
    "kcal_per_unit": 54.31
  },
  {
    "name": "삼색냉채",
    "kcal_per_unit": 27.84
  },
  {
    "name": "쑥갓생채",
    "kcal_per_unit": 42.43
  },
  {
    "name": "양배추겉절이",
    "kcal_per_unit": 41.94
  },
  {
    "name": "양파겉절이",
    "kcal_per_unit": 33.82
  },
  {
    "name": "열무무침",
    "kcal_per_unit": 53.16
  },
  {
    "name": "오이부추무침",
    "kcal_per_unit": 25.74
  },
  {
    "name": "오이양배추무침",
    "kcal_per_unit": 44.43
  },
  {
    "name": "오이양파무침",
    "kcal_per_unit": 44.18
  },
  {
    "name": "잔파무침",
    "kcal_per_unit": 38.12
  },
  {
    "name": "콩나물냉채",
    "kcal_per_unit": 29.78
  },
  {
    "name": "파래무생채",
    "kcal_per_unit": 30.35
  },
  {
    "name": "풋마늘초무침",
    "kcal_per_unit": 53.86
  },
  {
    "name": "해파리냉채",
    "kcal_per_unit": 136.67
  },
  {
    "name": "호박오가리무침",
    "kcal_per_unit": 93.67
  },
  {
    "name": "떡맛살샐러드",
    "kcal_per_unit": 204.46
  },
  {
    "name": "야채샐러드",
    "kcal_per_unit": 116.98
  },
  {
    "name": "양상추샐러드",
    "kcal_per_unit": 97.34
  },
  {
    "name": "옥수수샐러드",
    "kcal_per_unit": 158.78
  },
  {
    "name": "참치샐러드",
    "kcal_per_unit": 165.75
  },
  {
    "name": "참치야채샐러드",
    "kcal_per_unit": 141.5
  },
  {
    "name": "코올슬로우",
    "kcal_per_unit": 103.6
  },
  {
    "name": "콩샐러드",
    "kcal_per_unit": 243.7
  },
  {
    "name": "고구마줄기무침",
    "kcal_per_unit": 42.7
  },
  {
    "name": "고비나물",
    "kcal_per_unit": 54.82
  },
  {
    "name": "고추잎나물",
    "kcal_per_unit": 61.93
  },
  {
    "name": "근대나물",
    "kcal_per_unit": 36.05
  },
  {
    "name": "깻잎나물",
    "kcal_per_unit": 46.47
  },
  {
    "name": "냉이나물",
    "kcal_per_unit": 65.49
  },
  {
    "name": "느타리콩나물무침",
    "kcal_per_unit": 44.87
  },
  {
    "name": "다시마채무침",
    "kcal_per_unit": 14.15
  },
  {
    "name": "단배추된장무침",
    "kcal_per_unit": 65.54
  },
  {
    "name": "무말랭이오징어무침",
    "kcal_per_unit": 129.92
  },
  {
    "name": "무숙채",
    "kcal_per_unit": 54.69
  },
  {
    "name": "미역나물",
    "kcal_per_unit": 19.56
  },
  {
    "name": "배추숙주나물",
    "kcal_per_unit": 36.51
  },
  {
    "name": "쇠고기무나물",
    "kcal_per_unit": 88.21
  },
  {
    "name": "숙주맛살무침",
    "kcal_per_unit": 20.17
  },
  {
    "name": "숙주미나리무침",
    "kcal_per_unit": 15.91
  },
  {
    "name": "숙주부추나물",
    "kcal_per_unit": 18.91
  },
  {
    "name": "시래기나물",
    "kcal_per_unit": 37.51
  },
  {
    "name": "쑥갓나물",
    "kcal_per_unit": 40.83
  },
  {
    "name": "어묵콩나물부추무침",
    "kcal_per_unit": 77.4
  },
  {
    "name": "오징어풋마늘무침",
    "kcal_per_unit": 89.93
  },
  {
    "name": "콩나물겨자채",
    "kcal_per_unit": 71.29
  },
  {
    "name": "콩나물미나리무침",
    "kcal_per_unit": 39.23
  },
  {
    "name": "탕평채",
    "kcal_per_unit": 72.44
  },
  {
    "name": "토란대무침",
    "kcal_per_unit": 46.6
  },
  {
    "name": "게맛살무침",
    "kcal_per_unit": 79.66
  },
  {
    "name": "굴무생채",
    "kcal_per_unit": 100.0
  },
  {
    "name": "꼴뚜기무침",
    "kcal_per_unit": 55.69
  },
  {
    "name": "낙지무침",
    "kcal_per_unit": 57.25
  },
  {
    "name": "노가리채무침",
    "kcal_per_unit": 102.46
  },
  {
    "name": "대구포무침",
    "kcal_per_unit": 94.2
  },
  {
    "name": "멸치잔파무침",
    "kcal_per_unit": 70.57
  },
  {
    "name": "문어무침",
    "kcal_per_unit": 84.06
  },
  {
    "name": "북어채무침",
    "kcal_per_unit": 105.15
  },
  {
    "name": "새우무침",
    "kcal_per_unit": 88.51
  },
  {
    "name": "소라무침",
    "kcal_per_unit": 89.17
  },
  {
    "name": "어리굴젓무침",
    "kcal_per_unit": 38.9
  },
  {
    "name": "오징어미역초무침",
    "kcal_per_unit": 69.2
  },
  {
    "name": "오징어어묵무침",
    "kcal_per_unit": 70.8
  },
  {
    "name": "오징어젓무무침",
    "kcal_per_unit": 47.0
  },
  {
    "name": "조개젓무침",
    "kcal_per_unit": 50.15
  },
  {
    "name": "쥐포무침",
    "kcal_per_unit": 95.06
  },
  {
    "name": "창란젓무무침",
    "kcal_per_unit": 54.94
  },
  {
    "name": "피조개무침",
    "kcal_per_unit": 110.56
  },
  {
    "name": "홍합무침",
    "kcal_per_unit": 106.47
  },
  {
    "name": "닭고기냉채",
    "kcal_per_unit": 104.84
  },
  {
    "name": "사태초무침",
    "kcal_per_unit": 112.6
  },
  {
    "name": "쇠고기김무침",
    "kcal_per_unit": 102.89
  },
  {
    "name": "편육겨자채",
    "kcal_per_unit": 111.16
  },
  {
    "name": "편육무침",
    "kcal_per_unit": 131.13
  },
  {
    "name": "갓김치",
    "kcal_per_unit": 24.6
  },
  {
    "name": "고들빼기김치",
    "kcal_per_unit": 39.6
  },
  {
    "name": "깍두기",
    "kcal_per_unit": 16.5
  },
  {
    "name": "나박김치",
    "kcal_per_unit": 9.0
  },
  {
    "name": "동치미",
    "kcal_per_unit": 11.0
  },
  {
    "name": "무청김치",
    "kcal_per_unit": 13.8
  },
  {
    "name": "무초절이",
    "kcal_per_unit": 22.66
  },
  {
    "name": "배추김치",
    "kcal_per_unit": 10.8
  },
  {
    "name": "보쌈김치",
    "kcal_per_unit": 49.66
  },
  {
    "name": "부추김치",
    "kcal_per_unit": 26.64
  },
  {
    "name": "열무김치",
    "kcal_per_unit": 11.5
  },
  {
    "name": "오이소배기",
    "kcal_per_unit": 21.28
  },
  {
    "name": "유채김치",
    "kcal_per_unit": 17.4
  },
  {
    "name": "장김치",
    "kcal_per_unit": 10.06
  },
  {
    "name": "총각김치",
    "kcal_per_unit": 15.5
  },
  {
    "name": "파김치",
    "kcal_per_unit": 31.2
  },
  {
    "name": "가다랭이회",
    "kcal_per_unit": 88.9
  },
  {
    "name": "가리비회",
    "kcal_per_unit": 64.0
  },
  {
    "name": "가자미회",
    "kcal_per_unit": 90.3
  },
  {
    "name": "개불",
    "kcal_per_unit": 53.6
  },
  {
    "name": "굴,석화",
    "kcal_per_unit": 51.2
  },
  {
    "name": "노래미회",
    "kcal_per_unit": 66.5
  },
  {
    "name": "농어회",
    "kcal_per_unit": 93.1
  },
  {
    "name": "다금바리회",
    "kcal_per_unit": 70.0
  },
  {
    "name": "도미회",
    "kcal_per_unit": 73.5
  },
  {
    "name": "멍게,우렁쉥이",
    "kcal_per_unit": 61.6
  },
  {
    "name": "멸치회",
    "kcal_per_unit": 79.8
  },
  {
    "name": "민어회",
    "kcal_per_unit": 72.8
  },
  {
    "name": "방어회",
    "kcal_per_unit": 109.2
  },
  {
    "name": "밴뎅이회",
    "kcal_per_unit": 157.5
  },
  {
    "name": "뱅어회",
    "kcal_per_unit": 43.4
  },
  {
    "name": "병어회",
    "kcal_per_unit": 114.8
  },
  {
    "name": "빙어회",
    "kcal_per_unit": 85.4
  },
  {
    "name": "새우",
    "kcal_per_unit": 74.4
  },
  {
    "name": "소라회",
    "kcal_per_unit": 63.2
  },
  {
    "name": "송어회",
    "kcal_per_unit": 84.7
  },
  {
    "name": "숭어회",
    "kcal_per_unit": 87.5
  },
  {
    "name": "쏘가리회",
    "kcal_per_unit": 77.7
  },
  {
    "name": "아귀회",
    "kcal_per_unit": 42.0
  },
  {
    "name": "오징어회",
    "kcal_per_unit": 60.9
  },
  {
    "name": "우럭회",
    "kcal_per_unit": 70.0
  },
  {
    "name": "은어회",
    "kcal_per_unit": 79.8
  },
  {
    "name": "준치회",
    "kcal_per_unit": 93.1
  },
  {
    "name": "참다랑어회",
    "kcal_per_unit": 92.4
  },
  {
    "name": "소간회",
    "kcal_per_unit": 130.29
  },
  {
    "name": "소양(천엽)회",
    "kcal_per_unit": 58.07
  },
  {
    "name": "육회",
    "kcal_per_unit": 129.07
  },
  {
    "name": "미나리강회",
    "kcal_per_unit": 95.53
  },
  {
    "name": "부추강회",
    "kcal_per_unit": 66.51
  },
  {
    "name": "파강회",
    "kcal_per_unit": 101.83
  },
  {
    "name": "가다랭이내장젓",
    "kcal_per_unit": 11.55
  },
  {
    "name": "갈치젓",
    "kcal_per_unit": 27.6
  },
  {
    "name": "게알젓",
    "kcal_per_unit": 36.15
  },
  {
    "name": "게장",
    "kcal_per_unit": 80.86
  },
  {
    "name": "꼴뚜기젓",
    "kcal_per_unit": 13.2
  },
  {
    "name": "꼴뚜기젓,양념",
    "kcal_per_unit": 16.65
  },
  {
    "name": "대구,아가미젓",
    "kcal_per_unit": 11.4
  },
  {
    "name": "대구젓",
    "kcal_per_unit": 9.9
  },
  {
    "name": "멸치액젓",
    "kcal_per_unit": 4.35
  },
  {
    "name": "멸치젓",
    "kcal_per_unit": 16.95
  },
  {
    "name": "명란젓양념",
    "kcal_per_unit": 18.75
  },
  {
    "name": "민어알젓",
    "kcal_per_unit": 42.6
  },
  {
    "name": "바지락젓",
    "kcal_per_unit": 7.65
  },
  {
    "name": "밴뎅이젓",
    "kcal_per_unit": 27.3
  },
  {
    "name": "성게알젓",
    "kcal_per_unit": 15.75
  },
  {
    "name": "송어젓",
    "kcal_per_unit": 24.6
  },
  {
    "name": "아가미젓",
    "kcal_per_unit": 12.0
  },
  {
    "name": "아미젓",
    "kcal_per_unit": 8.55
  },
  {
    "name": "어란젓",
    "kcal_per_unit": 35.1
  },
  {
    "name": "어리굴젓",
    "kcal_per_unit": 12.9
  },
  {
    "name": "연어알젓",
    "kcal_per_unit": 37.8
  },
  {
    "name": "연어젓",
    "kcal_per_unit": 21.45
  },
  {
    "name": "오징어내장젓",
    "kcal_per_unit": 15.15
  },
  {
    "name": "오징어젓",
    "kcal_per_unit": 11.55
  },
  {
    "name": "은어내장젓",
    "kcal_per_unit": 19.65
  },
  {
    "name": "전복젓",
    "kcal_per_unit": 15.15
  },
  {
    "name": "전어젓",
    "kcal_per_unit": 19.5
  },
  {
    "name": "조개젓",
    "kcal_per_unit": 10.05
  },
  {
    "name": "조기젓",
    "kcal_per_unit": 12.15
  },
  {
    "name": "창란젓",
    "kcal_per_unit": 17.4
  },
  {
    "name": "창란젓양념",
    "kcal_per_unit": 16.65
  },
  {
    "name": "청어알젓",
    "kcal_per_unit": 13.95
  },
  {
    "name": "황새치젓",
    "kcal_per_unit": 18.15
  },
  {
    "name": "나라쓰게",
    "kcal_per_unit": 5.2
  },
  {
    "name": "오이숙장아찌",
    "kcal_per_unit": 45.49
  },
  {
    "name": "간장,양념간장",
    "kcal_per_unit": 33.34
  },
  {
    "name": "간장,양조간장",
    "kcal_per_unit": 10.88
  },
  {
    "name": "간장,왜간장",
    "kcal_per_unit": 9.54
  },
  {
    "name": "간장,죽염간장",
    "kcal_per_unit": 7.14
  },
  {
    "name": "고추장볶음",
    "kcal_per_unit": 61.3
  },
  {
    "name": "돈까스소스",
    "kcal_per_unit": 16.66
  },
  {
    "name": "된장,쌈된장",
    "kcal_per_unit": 25.56
  },
  {
    "name": "된장,양조된장",
    "kcal_per_unit": 28.98
  },
  {
    "name": "된장,왜된장",
    "kcal_per_unit": 39.06
  },
  {
    "name": "된장,한식된장",
    "kcal_per_unit": 28.98
  },
  {
    "name": "청국장,생",
    "kcal_per_unit": 32.04
  },
  {
    "name": "청국장,청국장분말",
    "kcal_per_unit": 40.14
  },
  {
    "name": "초장",
    "kcal_per_unit": 41.61
  },
  {
    "name": "혼합장(쌈장)",
    "kcal_per_unit": 34.92
  },
  {
    "name": "분유,전지분유",
    "kcal_per_unit": 128.7
  },
  {
    "name": "분유,조제분유",
    "kcal_per_unit": 122.46
  },
  {
    "name": "분유,탈지분유",
    "kcal_per_unit": 93.6
  },
  {
    "name": "연유",
    "kcal_per_unit": 64.8
  },
  {
    "name": "우유,저지방가공유,쵸코",
    "kcal_per_unit": 126.0
  },
  {
    "name": "우유,저지방가공유,커피",
    "kcal_per_unit": 126.0
  },
  {
    "name": "우유,저지방우유",
    "kcal_per_unit": 102.0
  },
  {
    "name": "우유,쵸코렛",
    "kcal_per_unit": 166.0
  },
  {
    "name": "쉐이크,딸기",
    "kcal_per_unit": 328.83
  },
  {
    "name": "쉐이크,딸기(맥도날드)",
    "kcal_per_unit": 363.75
  },
  {
    "name": "쉐이크,딸기(패스트푸드)",
    "kcal_per_unit": 328.83
  },
  {
    "name": "쉐이크,바닐라",
    "kcal_per_unit": 323.01
  },
  {
    "name": "쉐이크,바닐라(롯데리아)",
    "kcal_per_unit": 181.88
  },
  {
    "name": "쉐이크,바닐라(맥도날드)",
    "kcal_per_unit": 252.88
  },
  {
    "name": "쉐이크,바닐라(버거킹)",
    "kcal_per_unit": 314.86
  },
  {
    "name": "쉐이크,바닐라(패스트푸드)",
    "kcal_per_unit": 323.01
  },
  {
    "name": "쉐이크,쵸코렛",
    "kcal_per_unit": 369.57
  },
  {
    "name": "쉐이크,쵸코렛(맥도날드)",
    "kcal_per_unit": 252.88
  },
  {
    "name": "쉐이크,쵸코렛(버거킹)",
    "kcal_per_unit": 314.86
  },
  {
    "name": "쉐이크,쵸코렛(패스트푸드)",
    "kcal_per_unit": 369.57
  },
  {
    "name": "아이스밀크",
    "kcal_per_unit": 167.0
  },
  {
    "name": "아이스크림,누크바(롯데)",
    "kcal_per_unit": 274.0
  },
  {
    "name": "아이스크림,더블비안코(롯데)",
    "kcal_per_unit": 149.0
  },
  {
    "name": "아이스크림,딸기썬대",
    "kcal_per_unit": 288.64
  },
  {
    "name": "아이스크림,딸기썬대(맥도날드)",
    "kcal_per_unit": 319.8
  },
  {
    "name": "아이스크림,맥스(롯데)",
    "kcal_per_unit": 118.0
  },
  {
    "name": "아이스크림,바닐라아이스크림(콘)",
    "kcal_per_unit": 159.0
  },
  {
    "name": "아이스크림,셀렉션(롯데)",
    "kcal_per_unit": 210.0
  },
  {
    "name": "아이스크림,소프트(패스트푸드)",
    "kcal_per_unit": 196.0
  },
  {
    "name": "아이스크림,스크류바(롯데)",
    "kcal_per_unit": 95.0
  },
  {
    "name": "아이스크림,월드콘(롯데)",
    "kcal_per_unit": 276.0
  },
  {
    "name": "아이스크림,조안나(롯데)",
    "kcal_per_unit": 154.0
  },
  {
    "name": "아이스크림,캐러멜썬대(맥도날드)",
    "kcal_per_unit": 359.16
  },
  {
    "name": "아이스크림,콘(맥도날드)",
    "kcal_per_unit": 161.0
  },
  {
    "name": "아이스크림,핫퍼지썬대(맥도날드)",
    "kcal_per_unit": 357.52
  },
  {
    "name": "아이스크림,호두,임페리얼골드(롯데)",
    "kcal_per_unit": 257.0
  },
  {
    "name": "요구르트,액상",
    "kcal_per_unit": 97.5
  },
  {
    "name": "요구르트,호상",
    "kcal_per_unit": 113.3
  },
  {
    "name": "요구르트,호상,딸기",
    "kcal_per_unit": 99.0
  },
  {
    "name": "치즈,체다",
    "kcal_per_unit": 84.6
  },
  {
    "name": "크림",
    "kcal_per_unit": 41.6
  },
  {
    "name": "구아바음료",
    "kcal_per_unit": 46.0
  },
  {
    "name": "그레이프 환타",
    "kcal_per_unit": 46.2
  },
  {
    "name": "당근쥬스",
    "kcal_per_unit": 40.0
  },
  {
    "name": "두유,애플두유",
    "kcal_per_unit": 118.0
  },
  {
    "name": "라이트콜라",
    "kcal_per_unit": 1.0
  },
  {
    "name": "레모네이드",
    "kcal_per_unit": 43.0
  },
  {
    "name": "레몬라임소다",
    "kcal_per_unit": 41.0
  },
  {
    "name": "밤넥타",
    "kcal_per_unit": 54.0
  },
  {
    "name": "분말청량음료",
    "kcal_per_unit": 19.25
  },
  {
    "name": "사이다(롯데리아)",
    "kcal_per_unit": 40.0
  },
  {
    "name": "생강넥타",
    "kcal_per_unit": 50.0
  },
  {
    "name": "소다,그레이프소다",
    "kcal_per_unit": 43.0
  },
  {
    "name": "소다수,크림소다",
    "kcal_per_unit": 53.5
  },
  {
    "name": "슬라이스",
    "kcal_per_unit": 151.92
  },
  {
    "name": "식혜,캔",
    "kcal_per_unit": 104.0
  },
  {
    "name": "이온음료",
    "kcal_per_unit": 25.0
  },
  {
    "name": "콜라,다이어트스후라이트",
    "kcal_per_unit": 0.28
  },
  {
    "name": "콜라,다이어트슬라이스",
    "kcal_per_unit": 7.2
  },
  {
    "name": "콜라,다이어트체리콕",
    "kcal_per_unit": 0.28
  },
  {
    "name": "콜라,다이어트콕(코카콜라)",
    "kcal_per_unit": 0.28
  },
  {
    "name": "콜라,다이어트펩시",
    "kcal_per_unit": 0.28
  },
  {
    "name": "콜라,루트비어",
    "kcal_per_unit": 41.1
  },
  {
    "name": "콜라,체리콕",
    "kcal_per_unit": 43.1
  },
  {
    "name": "콜라,코카콜라",
    "kcal_per_unit": 43.4
  },
  {
    "name": "콜라,코카콜라,클래식",
    "kcal_per_unit": 39.0
  },
  {
    "name": "콜라,펩시라이트",
    "kcal_per_unit": 0.28
  },
  {
    "name": "콜라,펩시콜라",
    "kcal_per_unit": 44.4
  },
  {
    "name": "토마토쥬스",
    "kcal_per_unit": 13.0
  },
  {
    "name": "후르츠펀치",
    "kcal_per_unit": 55.5
  },
  {
    "name": "드라이진",
    "kcal_per_unit": 131.5
  },
  {
    "name": "럼",
    "kcal_per_unit": 131.0
  },
  {
    "name": "마운틴듀",
    "kcal_per_unit": 178.92
  },
  {
    "name": "매실주",
    "kcal_per_unit": 63.0
  },
  {
    "name": "맥주,생맥주",
    "kcal_per_unit": 190.0
  },
  {
    "name": "보드카",
    "kcal_per_unit": 115.5
  },
  {
    "name": "브랜디",
    "kcal_per_unit": 175.0
  },
  {
    "name": "샴페인",
    "kcal_per_unit": 17.5
  },
  {
    "name": "위스키",
    "kcal_per_unit": 55.4
  },
  {
    "name": "진",
    "kcal_per_unit": 139.5
  },
  {
    "name": "카테일,톰칼린스",
    "kcal_per_unit": 120.99
  },
  {
    "name": "칵테일,마티니",
    "kcal_per_unit": 156.1
  },
  {
    "name": "칵테일,맨하탄",
    "kcal_per_unit": 127.68
  },
  {
    "name": "칵테일,버번앤소다",
    "kcal_per_unit": 121.8
  },
  {
    "name": "칵테일,블러드메리",
    "kcal_per_unit": 116.03
  },
  {
    "name": "칵테일,스크류드라이버",
    "kcal_per_unit": 174.02
  },
  {
    "name": "칵테일,위스키싸우어",
    "kcal_per_unit": 292.6
  },
  {
    "name": "칵테일,진토닉",
    "kcal_per_unit": 53.2
  },
  {
    "name": "칵테일,피나콜라다",
    "kcal_per_unit": 332.76
  },
  {
    "name": "포도주,백포도주",
    "kcal_per_unit": 37.0
  },
  {
    "name": "포도주,적포도주",
    "kcal_per_unit": 35.0
  },
  {
    "name": "감잎차",
    "kcal_per_unit": 2.93
  },
  {
    "name": "결명자차",
    "kcal_per_unit": 16.5
  },
  {
    "name": "계피차",
    "kcal_per_unit": 57.75
  },
  {
    "name": "구기자차",
    "kcal_per_unit": 3.28
  },
  {
    "name": "두충차",
    "kcal_per_unit": 43.45
  },
  {
    "name": "보리차",
    "kcal_per_unit": 1.0
  },
  {
    "name": "쌍화차",
    "kcal_per_unit": 56.45
  },
  {
    "name": "오미자차",
    "kcal_per_unit": 22.4
  },
  {
    "name": "유자차",
    "kcal_per_unit": 69.45
  },
  {
    "name": "율무차",
    "kcal_per_unit": 99.25
  },
  {
    "name": "인삼차",
    "kcal_per_unit": 31.07
  },
  {
    "name": "치커리차",
    "kcal_per_unit": 49.65
  },
  {
    "name": "커피,설탕",
    "kcal_per_unit": 22.25
  },
  {
    "name": "커피,설탕,프림",
    "kcal_per_unit": 42.55
  },
  {
    "name": "커피,원두,블랙",
    "kcal_per_unit": 3.0
  },
  {
    "name": "커피,프림",
    "kcal_per_unit": 23.3
  },
  {
    "name": "코코아,핫쵸코",
    "kcal_per_unit": 50.0
  },
  {
    "name": "코코아,핫쵸코(버거킹)",
    "kcal_per_unit": 53.7
  },
  {
    "name": "코코아,핫쵸코(웬디스)",
    "kcal_per_unit": 61.0
  },
  {
    "name": "홍삼차",
    "kcal_per_unit": 23.2
  },
  {
    "name": "홍차,캔",
    "kcal_per_unit": 60.0
  },
  {
    "name": "가래떡",
    "kcal_per_unit": 239.0
  },
  {
    "name": "개피떡",
    "kcal_per_unit": 210.0
  },
  {
    "name": "송편,검정콩속",
    "kcal_per_unit": 202.0
  },
  {
    "name": "송편,깨",
    "kcal_per_unit": 212.0
  },
  {
    "name": "송편,팥고물속",
    "kcal_per_unit": 214.0
  },
  {
    "name": "수수경단",
    "kcal_per_unit": 219.0
  },
  {
    "name": "수수부침",
    "kcal_per_unit": 221.2
  },
  {
    "name": "시루떡,붉은팥고물",
    "kcal_per_unit": 205.0
  },
  {
    "name": "쑥개피떡",
    "kcal_per_unit": 208.0
  },
  {
    "name": "쑥설기",
    "kcal_per_unit": 253.0
  },
  {
    "name": "약식",
    "kcal_per_unit": 259.0
  },
  {
    "name": "인절미,콩고물",
    "kcal_per_unit": 217.0
  },
  {
    "name": "인절미,팥고물",
    "kcal_per_unit": 208.0
  },
  {
    "name": "증편",
    "kcal_per_unit": 177.0
  },
  {
    "name": "찰시루떡",
    "kcal_per_unit": 248.0
  },
  {
    "name": "찹쌀경단",
    "kcal_per_unit": 240.0
  },
  {
    "name": "찹쌀전병",
    "kcal_per_unit": 233.2
  }
];