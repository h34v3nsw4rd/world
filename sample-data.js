// =========================================================
// 나의 노트 · 샘플 데이터
//   index.html 이랑 같은 폴더에 두고 같이 배포(업로드)하세요.
//   이 파일이 없으면 사이트에 원래 들어 있는 기본값을 써요.
// =========================================================


// ---------------------------------------------------------
// 1) 펫 대사
//   - 새로 등록하는 펫은 이 대사들을 가지고 시작해요. (Ay, Eve 대사는 맨 아래 3) 에 따로 있어요)
//   - 이미 있는 펫은: 🐾 펫 → 💬 대사 → "샘플 대사 넣기" 버튼으로 한 번에 추가할 수 있어요.
//   - 쓰는 법: 따옴표 '  ' 안에 대사를 쓰고, 끝에 쉼표 , 를 붙여요. 한 줄에 하나씩!
//   - 대사 안에 작은따옴표(')를 쓰고 싶으면 앞에 \ 를 붙여요.  예) '오늘은 \'최고\'의 날!'
// ---------------------------------------------------------
var SAMPLE_PET_LINES = [
  '안녕!',
  '오늘도 화이팅!',
  '심심해~',
  '같이 놀자!',
  '일기 썼어?',
  '물 마셨어? 💧',
  '잠깐 기지개 켜자~ 🙆',
  '오늘 할 일 몇 개 남았어?',
  '천천히 해도 괜찮아',
  '나 여기 있어!',
  '배고프다… 뭐 맛있는 거 없나?',
  '오늘 하늘 봤어?',
  '좋은 노래 틀어줘 🎵',
  '쓰담쓰담 해줘!',
  '오늘 제일 좋았던 일은 뭐야?',
  '조금만 쉬었다 하자',
  '우리 꽤 잘하고 있어!',
  '졸려… 💤',
  '간식 시간이다!',
  '오늘 기분은 어때?',
  '내일도 같이 있자',
  '거기 그 스티커 귀엽다!',
  '디데이 얼마 안 남았네?',
  '힘들면 말해줘',
  '헤헤 😊',
  '오늘도 수고했어',
  '이거 다 하면 산책 가자!',
  '나 방금 레벨업 하는 꿈 꿨어',
  '바닥에 뭐 떨어진 거 없어?',
  '최고야! 👍'
];


// ---------------------------------------------------------
// 2) 바닥에 떨어지는 음식
//   - 펫을 끌어다 음식 위에 놓으면 먹어요.
//   - name: 음식 이름 (펫이 "냠냠! ○○ 맛있다~" 라고 말해요)
//   - fill: 배고픔이 얼마나 차는지 (밥 주기 버튼은 10)
//   - 그림 파일을 쓰려면 file: '폴더/파일이름' 을 쓰고, 이모지를 쓰려면 emoji: '🍙' 을 써요.
//
//   ★ 도트 그림: images/food 폴더에 있는 그림들이에요 (png, 배경 투명)
//     - 새 음식을 넣으려면 images/food 에 그림을 넣고 아래에 한 줄 추가해요. 대소문자·확장자까지 똑같이!
//     - GitHub Pages 에 올릴 땐 images 폴더도 통째로 같이 올려야 해요.
//     - 파일을 못 찾으면 자동으로 🍙 이모지로 나와요.
//     - 이모지 음식도 섞어 쓸 수 있어요.  예) { emoji: '🍙', name: '주먹밥', fill: 25 },
// ---------------------------------------------------------
var SAMPLE_FOODS = [
  { file: 'images/food/05_apple_pie.png',          name: '애플파이',          fill: 25 },
  { file: 'images/food/07_bread.png',              name: '빵',             fill: 20 },
  { file: 'images/food/09_baguette.png',           name: '바게트',           fill: 20 },
  { file: 'images/food/101_waffle.png',            name: '와플',            fill: 20 },
  { file: 'images/food/11_bun.png',                name: '모닝빵',           fill: 15 },
  { file: 'images/food/13_bacon.png',              name: '베이컨',           fill: 20 },
  { file: 'images/food/15_burger.png',             name: '햄버거',           fill: 35 },
  { file: 'images/food/18_burrito.png',            name: '부리토',           fill: 30 },
  { file: 'images/food/20_bagel.png',              name: '베이글',           fill: 20 },
  { file: 'images/food/22_cheesecake.png',         name: '치즈케이크',         fill: 25 },
  { file: 'images/food/24_cheesepuff.png',         name: '치즈볼',           fill: 15 },
  { file: 'images/food/26_chocolate.png',          name: '초콜릿',           fill: 10 },
  { file: 'images/food/28_cookies.png',            name: '쿠키',            fill: 15 },
  { file: 'images/food/30_chocolatecake.png',      name: '초코케이크',         fill: 25 },
  { file: 'images/food/32_curry.png',              name: '카레',            fill: 30 },
  { file: 'images/food/33_curry_dish.png',         name: '카레 한 접시',       fill: 40 },
  { file: 'images/food/34_donut.png',              name: '도넛',            fill: 15 },
  { file: 'images/food/36_dumplings.png',          name: '만두',            fill: 25 },
  { file: 'images/food/37_dumplings_dish.png',     name: '만두 한 접시',       fill: 35 },
  { file: 'images/food/38_friedegg.png',           name: '계란후라이',         fill: 15 },
  { file: 'images/food/39_friedegg_dish.png',      name: '계란후라이 정식',      fill: 25 },
  { file: 'images/food/41_eggsalad_bowl.png',      name: '에그샐러드',         fill: 20 },
  { file: 'images/food/42_eggtart.png',            name: '에그타르트',         fill: 15 },
  { file: 'images/food/43_eggtart_dish.png',       name: '에그타르트 한 접시',    fill: 25 },
  { file: 'images/food/44_frenchfries.png',        name: '감자튀김',          fill: 20 },
  { file: 'images/food/45_frenchfries_dish.png',   name: '감자튀김 한 접시',     fill: 30 },
  { file: 'images/food/46_fruitcake.png',          name: '과일케이크',         fill: 25 },
  { file: 'images/food/48_garlicbread.png',        name: '마늘빵',           fill: 20 },
  { file: 'images/food/50_giantgummybear.png',     name: '왕곰젤리',          fill: 10 },
  { file: 'images/food/52_gingerbreadman.png',     name: '진저브레드맨',        fill: 15 },
  { file: 'images/food/54_hotdog.png',             name: '핫도그',           fill: 25 },
  { file: 'images/food/55_hotdog_sauce.png',       name: '소스 듬뿍 핫도그',     fill: 30 },
  { file: 'images/food/57_icecream.png',           name: '아이스크림',         fill: 15 },
  { file: 'images/food/59_jelly.png',              name: '젤리',            fill: 10 },
  { file: 'images/food/61_jam.png',                name: '잼',             fill: 10 },
  { file: 'images/food/63_lemonpie.png',           name: '레몬파이',          fill: 25 },
  { file: 'images/food/65_loafbread.png',          name: '식빵',            fill: 25 },
  { file: 'images/food/67_macncheese.png',         name: '맥앤치즈',          fill: 30 },
  { file: 'images/food/69_meatball.png',           name: '미트볼',           fill: 20 },
  { file: 'images/food/70_meatball_dish.png',      name: '미트볼 한 접시',      fill: 35 },
  { file: 'images/food/71_nacho.png',              name: '나초',            fill: 15 },
  { file: 'images/food/72_nacho_dish.png',         name: '나초 한 접시',       fill: 25 },
  { file: 'images/food/73_omlet.png',              name: '오믈렛',           fill: 25 },
  { file: 'images/food/74_omlet_dish.png',         name: '오믈렛 정식',        fill: 35 },
  { file: 'images/food/75_pudding.png',            name: '푸딩',            fill: 15 },
  { file: 'images/food/77_potatochips.png',        name: '감자칩',           fill: 15 },
  { file: 'images/food/78_potatochips_bowl.png',   name: '감자칩 한 그릇',      fill: 25 },
  { file: 'images/food/79_pancakes.png',           name: '팬케이크',          fill: 30 },
  { file: 'images/food/81_pizza.png',              name: '피자',            fill: 35 },
  { file: 'images/food/84_popcorn_bowl.png',       name: '팝콘',            fill: 20 },
  { file: 'images/food/85_roastedchicken.png',     name: '통닭',            fill: 40 },
  { file: 'images/food/87_ramen.png',              name: '라멘',            fill: 35 },
  { file: 'images/food/88_salmon.png',             name: '연어',            fill: 25 },
  { file: 'images/food/90_strawberrycake.png',     name: '딸기케이크',         fill: 25 },
  { file: 'images/food/92_sandwich.png',           name: '샌드위치',          fill: 30 },
  { file: 'images/food/94_spaghetti.png',          name: '스파게티',          fill: 35 },
  { file: 'images/food/95_steak.png',              name: '스테이크',          fill: 35 },
  { file: 'images/food/96_steak_dish.png',         name: '스테이크 정식',       fill: 45 },
  { file: 'images/food/97_sushi.png',              name: '초밥',            fill: 25 },
  { file: 'images/food/99_taco.png',               name: '타코',            fill: 25 }
];


// ---------------------------------------------------------
// 3) 기본 펫 (사이트에 처음 들어온 사람에게 한 번만 나와요)
//   - img: 기본 모습 / happy: 기뻐할 때 / hungry: 배고플 때 (없으면 기본 모습)
//   - lines: 이 펫만의 대사 (없으면 위의 SAMPLE_PET_LINES 를 써요)
//   - ★ 추가: eatLine: 밥/음식 먹을 때 대사, dizzyLine: 잡고 흔들 때 대사 (없으면 기본 대사)
//     이름(Ay / Eve)으로 찾아서, 이미 등록된 펫에도 바로 적용돼요.
//   - 처음 한 번만 넣어줘서, 사용자가 펫을 지우면 다시 생기지 않아요.
//   - 이미 등록한 펫도 이름이 같으면(Ay / Eve) 🐾 펫 → 💬 대사 → "샘플 대사 넣기"로 이 대사가 들어가요.
//   - 펫은 최대 4마리까지예요.
// ---------------------------------------------------------
var SAMPLE_PETS = [
  {
    name: 'Ay',
    img: 'images/Ay_1.png',
    happy: 'images/Ay_2.png',
    eatLine: '음, 맛있군!',          // ★ 추가: 먹을 때
    dizzyLine: '윽, 어지러워...',    // ★ 추가: 흔들 때
    lines: [
      '함께 차 한 잔 하겠나?',
      '자작나무 시럽을 넣은 밀크티는 언제나 맛있지.',
      '아, 미안하네... 잠깐 딴생각을 하고 있었어.',
      '보고 싶었어.',
      '나의 봄이 되어 주겠나?',
      '뭘 그렇게 보고 있나? 궁금한걸.',
      '쉬는 것도 일이더군.',
      '불렀어?',
      '응, 나 여기 있어.',
      '하하, 간지러워.',
      '그대가 바쁘면 조용히 기다릴게.',
      '무리하지 마. 그대의 건강이 제일 중요해.',
      '그대 얼굴을 보니까 마음이 놓여.',
      '그대의 이야기라면 언제든 들을게.',
      '그대는 혼자가 아니야.',
      '그대를 믿어. 언제나 그랬듯이.',
      '서두를 필요 없어. 천천히 가도 돼.',
      '언젠가 겨울 바다를 보러 가고 싶어...',
      '내가 지켜 주겠네. 언제나 그랬듯이.',
      '난 언제나 그대를 안아 줄 준비가 되어 있는 걸.',
      '내 어깨에 기대게나.',
      '두려움을 아는 사람만이 진짜 용기를 낼 수 있다는 말, 알아?',
      '서류가 끝이 없군… 아, 방금 건 못 들은 걸로 해 주게나......',
      '회의가 길어질수록 결론은 짧아지는 것 같아.',
      '가끔은 아무 생각 없이 창밖만 보고 싶을 때가 있네.',
      '그대랑 이야기하고 있으면 시간 가는 줄 모르겠군.',
      '같이 산책이라도 할까?',
      '롤란베리를 더 재배해 볼까...',
      '식은 차는 내가 마실게.',
      '내가 너무 짓궂은가? 하하, 잘 알고 있네.',
      '가끔은 기사단 시절이 그리워지기도 해.',
      '그대에게 창천의 하늘을 선물할게.',
      '그대가 웃으면 나도 모르게 따라 웃게 돼.',
      '오늘은 무슨 생각을 하고 있었나?',
      '고민이 있으면 언제든 말해 주게나.',
      '그대의 연인일 수 있어 기뻐.',
      '맛있는 걸 먹으면 기분이 좀 나아지지 않아?',
      '잠깐 쉬어 가지 않겠어?',
      '그대가 지나온 길을 생각하면, 정말 대단하다고 생각해.',
      '그렇게 적게 먹는데... 어디서 이런 힘이......',
      '그대의 작은 총장은 머리가 너무 커...',
      '그대 덕분에 웃을 일이 많아졌어.',
      '무슨 일이 있어도 나는 그대의 편이야.',
      '오랜만에 찾아 온 느긋한 시간이군. 좋다.',
      '저녁에 잠깐 볼까?',
      '그대는 쉬는 날엔 뭐 해? 문득 궁금해졌어.',
      '...유령 탈, 계속 쓰고 있을 건가?',
      '파란 코끼리를 좋아해 주어 정말 고맙네.',
      '언젠가는, 푸른 바다와 뜨거운 태양이 노니는 곳을 걷고 싶어.',
      '언제든 돌아와. 여긴 그대만을 위한 자리니까.'
    ]
  },
  {
    name: 'Eve',
    img: 'images/Eve_1.png',
    happy: 'images/Eve_2.png',
    eatLine: '맛있게 먹을게요!',      // ★ 추가: 먹을 때
    lines: [
      '(옆에 같이 있어 줄 신전기사단 총장직을 맡고 있는 딱뚝콱 엘레젠 남성을 기다리는 중이다...)',
      '총장님이랑 바다에 갈 거예요...',
      '게일리키튼... 저 이렇게 생겼나요?',
      '우파루파... 저 이렇게 맹~ 하게 생겼나요...?',
      '오늘 저녁은 문어빵이에요!',
      '고양이 마을엔 어쩐 일이세요?',
      '오늘은 아침잠이 좀 부족하지 뭐야~',
      '저를 좋아해 주시는 총장님을 좋아해요...',
      '......왠지 부끄러워졌어요...',
      '얼른 가서 안아드리고 싶어요...'
    ]
  }
];


// ---------------------------------------------------------
// 4) 샘플 플레이리스트
//   - 자기 재생목록을 아직 안 넣은 사람에게 기본으로 불러와지는 유튜브 재생목록이에요.
//   - 공개 또는 일부 공개 재생목록이어야 다른 사람도 들을 수 있어요.
//   - 사용자가 🎵 플레이리스트에 다른 주소를 넣고 "불러오기"를 누르면 그걸로 바뀌어요.
//   - 안 쓰려면 '' (빈 따옴표)로 두세요.
// ---------------------------------------------------------
var SAMPLE_PLAYLIST = 'https://www.youtube.com/playlist?list=PLXezxe7nCJVM';
