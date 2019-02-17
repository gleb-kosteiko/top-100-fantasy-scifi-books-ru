{"bookNodes":
[{
  "text": "Гайд по топу 100 книг фэнтези и научной фантастики по версии NPR (National Public Radio)",
  "nodeId": "start",
  "answers": [{"nextNodeId":"fantasyOrScifi","answerText":"Начать"}]
},
{
  "text": "Фэнтези или Научная фантастика?",
  "nodeId": "fantasyOrScifi",
  "answers": [{"nextNodeId":"likeHarryPotter","answerText":"Фэнтези"},
			  {"nextNodeId":"cyberpunk","answerText":"Научная фантастика"},
			  {"nextNodeId":"someOther","answerText":"Ещё варианты?.."}]
},
{
  "text": "Скучаете по некогда прочитанному Гарри Поттеру?",
  "nodeId": "likeHarryPotter",
  "answers": [{"nextNodeId":"patrickRothfuss","answerText":"Да"},
			  {"nextNodeId":"areYouNeofit","answerText":"Нет"}]
},
{
  "text": "Патрик Ротфусс \"Хроника Убийцы Короля\"",
  "nodeId": "patrickRothfuss",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Вы новичок в фэнтези?",
  "nodeId": "areYouNeofit",
  "answers": [{"nextNodeId":"atLeastSomeFamiliarity","answerText":"Да"},
			  {"nextNodeId":"likeKingArthur","answerText":"Нет"},
			  {"nextNodeId":"wicked","answerText":"Возможно"}]
},
{
  "text": "Вы хотя бы немного знакомы с фэнтези?",
  "nodeId": "atLeastSomeFamiliarity",
  "answers": [{"nextNodeId":"silmarillion","answerText":"Да"},
			  {"nextNodeId":"lordOfTheRings","answerText":"Нет"}]
},
{
  "text": "Дж. Р. Р. Толкин \"Сильмариллион\"",
  "nodeId": "silmarillion",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Дж. Р. Р. Толкин \"Властелин колец\"",
  "nodeId": "lordOfTheRings",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Грегори Магвайр \"Ведьма: Жизнь и времена Западной колдуньи из страны Оз\"",
  "nodeId": "wicked",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Любите легенды о короле Артуре?",
  "nodeId": "likeKingArthur",
  "answers": [{"nextNodeId":"whichCharacter","answerText":"Да"},
			  {"nextNodeId":"modernSetting","answerText":"Нет"}]
},
{
  "text": "И какой персонаж больше всего нравится?",
  "nodeId": "whichCharacter",
  "answers": [{"nextNodeId":"arthur","answerText":"Артур"},
			  {"nextNodeId":"merlin","answerText":"Мерлин"},
			  {"nextNodeId":"morgana","answerText":"Фея Моргана"}]
},
{
  "text": "Теренс Хэнбери Уайт \"Король Былого и Грядущего\"",
  "nodeId": "arthur",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Мэри Стюарт \"Хрустальный грот\"",
  "nodeId": "merlin",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Мэрион Зиммер Брэдли \"Туманы Авалона\"",
  "nodeId": "morgana",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Значит ищем современный сеттинг?",
  "nodeId": "modernSetting",
  "answers": [{"nextNodeId":"godsOrPeople","answerText":"Да"},
			  {"nextNodeId":"likeWsterns","answerText":"Нет"},
			  {"nextNodeId":"likeWsterns","somethingWickedThisWayComes":"Возможно"}]
},
{
  "text": "Боги или люди под мостовыми?",
  "nodeId": "godsOrPeople",
  "answers": [{"nextNodeId":"modernMythology","answerText":"Современная мифология"},
			  {"nextNodeId":"underCity","answerText":"Мир под городом"}]
},
{
  "text": "Нил Гейман \"Американские боги\"",
  "nodeId": "modernMythology",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Нил Гейман \"Задверье\"",
  "nodeId": "underCity",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Рэй Бредбери \"Надвигается Беда\"",
  "nodeId": "somethingWickedThisWayComes",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Без ума от вестернов?",
  "nodeId": "likeWsterns",
  "answers": [{"nextNodeId":"darkTower","answerText":"Да"},
			  {"nextNodeId":"likeAnimals","answerText":"Нет"}]
},
{
  "text": "Стивен Кинг \"Тёмная башня\"",
  "nodeId": "darkTower",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "А к животным хорошо относитесь?",
  "nodeId": "likeAnimals",
  "answers": [{"nextNodeId":"whichPet","answerText":"Да"},
			  {"nextNodeId":"alternativeStory","answerText":"Нет"}]
},
{
  "text": "И о каком питомце мечтаете?",
  "nodeId": "whichPet",
  "answers": [{"nextNodeId":"lastUnicorn","answerText":"Единорог"},
			  {"nextNodeId":"watershipDown","answerText":"Кролик"},
			  {"nextNodeId":"dragonflight","answerText":"Дракон"}]
},
{
  "text": "Бигл Питер \"Последний единорог\"",
  "nodeId": "lastUnicorn",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Ричард Адамс \"Обитатели холмов\"",
  "nodeId": "watershipDown",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Энн Маккефри \"Полет дракона\"",
  "nodeId": "dragonflight",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Может быть обратимся к альтернативной истории?",
  "nodeId": "alternativeStory",
  "answers": [{"nextNodeId":"romanceOrWizards","answerText":"Да"},
			  {"nextNodeId":"likeSeries","answerText":"Нет"}]
},
{
  "text": "Романтика или сражающиеся волшебники?",
  "nodeId": "romanceOrWizards",
  "answers": [{"nextNodeId":"romance","answerText":"Романтика"},
			  {"nextNodeId":"wizards","answerText":"Волшебники"}]
},
{
  "text": "Жаклин Кэри \"Наследие Кушила\"",
  "nodeId": "romance",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Сюзанна Кларк \"Джонатан Срендж и мистер Норелл\"",
  "nodeId": "wizards",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Готовы взяться за серии книг?",
  "nodeId": "likeSeries",
  "answers": [{"nextNodeId":"completedSeries","answerText":"Да"},
			  {"nextNodeId":"pirates","answerText":"Нет"},
			  {"nextNodeId":"whatYouWant","answerText":"Возможно"}]
},
{
  "text": "С пиратами или без?",
  "nodeId": "pirates",
  "answers": [{"nextNodeId":"stardust","answerText":"К чёрту пиратов"},
			  {"nextNodeId":"princess","answerText":"Йо-хо-хо!"}]
},
{
  "text": "Нил Гейман \"Звёздная пыль\"",
  "nodeId": "stardust",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Уильям Голдман \"Принцесса-невеста\"",
  "nodeId": "princess",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Чего изволите?",
  "nodeId": "whatYouWant",
  "answers": [{"nextNodeId":"goingPostal","answerText":"Сатира над бюрократией"},
			  {"nextNodeId":"smallGods","answerText":"Сатира над религией"},
			  {"nextNodeId":"xanth","answerText":"Игра слов"}]
},
{
  "text": "Терри Пратчетт \"Опочторение\"",
  "nodeId": "goingPostal",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Терри Пратчетт \"Мелкие боги\"",
  "nodeId": "smallGods",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Энтони Пирс \"Ксонф\"",
  "nodeId": "xanth",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Серии должны быть завершены?",
  "nodeId": "completedSeries",
  "answers": [{"nextNodeId":"swordAndSorcery","answerText":"Да"},
			  {"nextNodeId":"sublimeOrLowly","answerText":"Нет"}]
},
{
  "text": "Возвышенное или низменное?",
  "nodeId": "sublimeOrLowly",
  "answers": [{"nextNodeId":"wayOfKings","answerText":"Возвышенное"},
			  {"nextNodeId":"songOfIceAndFire","answerText":"Низменное"}]
},
{
  "text": "Брэндон Сандерсон \"Путь королей\"",
  "nodeId": "wayOfKings",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Джордж Мартин \"Песнь Льда и Пламени\"",
  "nodeId": "songOfIceAndFire",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Фраза \"Sword and Sorcery\" вызывает какие-либо ассоциации?",
  "nodeId": "swordAndSorcery",
  "answers": [{"nextNodeId":"youRolePlayer","answerText":"Да"},
			  {"nextNodeId":"oldFashionTrilogies","answerText":"Нет"}]
},
{
  "text": "Ролевик небось?",
  "nodeId": "youRolePlayer",
  "answers": [{"nextNodeId":"darkElf","answerText":"Да"},
			  {"nextNodeId":"wizardsOrBarbarians","answerText":"Нет"}]
},
{
  "text": "Роберт Сальваторе \"Тёмный эльф\"",
  "nodeId": "darkElf",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Побольше волшебников или варваров?",
  "nodeId": "wizardsOrBarbarians",
  "answers": [{"nextNodeId":"elric","answerText":"Волшебников"},
			  {"nextNodeId":"konan","answerText":"Варваров"}]
},
{
  "text": "Майкл Муркок \"Сага об Элрике\"",
  "nodeId": "elric",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Роберт Ирвин Говард \"Цикл о Конане-варваре\"",
  "nodeId": "konan",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Может быть ищешь старомодные трилогии?",
  "nodeId": "oldFashionTrilogies",
  "answers": [{"nextNodeId":"whichTrilogies","answerText":"Да"},
			  {"nextNodeId":"fiveOrMore","answerText":"Нет"},
			  {"nextNodeId":"covenant","answerText":"Возможно"}]
},
{
  "text": "Итак, про что будем читать?",
  "nodeId": "whichTrilogies",
  "answers": [{"nextNodeId":"mistborn","answerText":"Про воров"},
			  {"nextNodeId":"shannara","answerText":"Про макгаффин"},
			  {"nextNodeId":"farseer","answerText":"Про ассасинов"},
			  {"nextNodeId":"apprentice","answerText":"Про магов"}]
},
{
  "text": "Брэндон Сандерсон \"Рождённый туманом\"",
  "nodeId": "mistborn",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Терри Брукс \"Шаннара\"",
  "nodeId": "shannara",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Робин Хобб \"Сага о Видящих\"",
  "nodeId": "farseer",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Раймонд Фэйст \"Ученик чародея\"",
  "nodeId": "apprentice",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Стивен Дональдсон \"Томас Ковенант\"",
  "nodeId": "covenant",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Полагаю, пять или шесть книг будет достаточно?",
  "nodeId": "fiveOrMore",
  "answers": [{"nextNodeId":"orphans","answerText":"Да"},
			  {"nextNodeId":"greatEvil","answerText":"Нет"}]
},
{
  "text": "Любите истории об осиротевших деревенских мальчиках?",
  "nodeId": "orphans",
  "answers": [{"nextNodeId":"alera","answerText":"Да"},
			  {"nextNodeId":"orphans2","answerText":"Нет"}]
},
{
  "text": "А прийдётся полюбить!",
  "nodeId": "orphans2",
  "answers": [{"nextNodeId":"belgariad","answerText":"Уговорили"}]
},
{
  "text": "Джим Батчер \"Кодекс Алеры\"",
  "nodeId": "alera",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Дэвид Эддингс \"Белгариад\"",
  "nodeId": "belgariad",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Как вам истории о Великом Зле, порабощающем мир, и приключенцах против него?",
  "nodeId": "greatEvil",
  "answers": [{"nextNodeId":"salvation","answerText":"Да"},
			  {"nextNodeId":"withoutGreatEvil","answerText":"Нет"}]
},
{
  "text": "Что же спасёт нас?",
  "nodeId": "salvation",
  "answers": [{"nextNodeId":"swordOfTruth","answerText":"Искатель Истины"},
			  {"nextNodeId":"wheelOfTime","answerText":"Великая Сила"}]
},
{
  "text": "Терри Гудкайн \"Меч Истины\"",
  "nodeId": "swordOfTruth",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Роберт Джордан \"Колесо Времени\"",
  "nodeId": "wheelOfTime",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Выбирай тщательно, раз уж ты добрался до этого момента",
  "nodeId": "withoutGreatEvil",
  "answers": [{"nextNodeId":"amber","answerText":"Земля в Тенях"},
			  {"nextNodeId":"book","answerText":"Запутанное повествование"}]
},
{
  "text": "Роджер Желязны \"Хроники Амбера\"",
  "nodeId": "amber",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Стивен Эриксон \"Малазанская \"Книга Павших\"\"",
  "nodeId": "book",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "И всё же?",
  "nodeId": "someOther",
  "answers": [{"nextNodeId":"both","answerText":"Того и другого"},
			  {"nextNodeId":"withImages","answerText":"Читаю книги только с картинками"},
			  {"nextNodeId":"horror","answerText":"Может хоррор?"},
			  {"nextNodeId":"generallyOther","answerText":"Предпочёл бы что-то совершенное другое"}]
},
{
  "text": "А в прошлом или будущем?",
  "nodeId": "both",
  "answers": [{"nextNodeId":"inFuture","answerText":"В будущем"},
			  {"nextNodeId":"inPast","answerText":"В прошлом"}]
},
{
  "text": "Вы фанат математики?",
  "nodeId": "inFuture",
  "answers": [{"nextNodeId":"anathem","answerText":"Да"},
			  {"nextNodeId":"deadSunOrDaemon","answerText":"Нет"}]
},
{
  "text": "Нил Стивенсон \"Анафем\"",
  "nodeId": "anathem",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Что звучит интереснее - умирающее солнце или демон из шипов и лезвий?",
  "nodeId": "deadSunOrDaemon",
  "answers": [{"nextNodeId":"deadSun","answerText":"Умирающее солнце"},
			  {"nextNodeId":"daemon","answerText":"Демон"}]
},
{
  "text": "Джин Вулф \"Книга Нового Солнца\"",
  "nodeId": "deadSun",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Дэн Симмонс \"Гиперион\"",
  "nodeId": "daemon",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Нравятся монстры?",
  "nodeId": "inPast",
  "answers": [{"nextNodeId":"likeMonsters","answerText":"Да"},
			  {"nextNodeId":"dontLikeMonsters","answerText":"Нет"}]
},
{
  "text": "Чайна Мьевиль \"Вокзал потеряных снов\"",
  "nodeId": "likeMonsters",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Джаспер Ффорде \"Дело Джен или Эйра немилосердия\"",
  "nodeId": "dontLikeMonsters",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Постмодернистские супергерои или мучающийся призрак?",
  "nodeId": "withImages",
  "answers": [{"nextNodeId":"superheroes","answerText":"Супергерои"},
			  {"nextNodeId":"spirit","answerText":"Призрак"}]
},
{
  "text": "Алан Мур \"Хранители\"",
  "nodeId": "superheroes",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Нил Гейнман \"Песочный человек\"",
  "nodeId": "spirit",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Небогатый выбор. Вампиры устроят?",
  "nodeId": "horror",
  "answers": [{"nextNodeId":"vampires","answerText":"Да"},
			  {"nextNodeId":"zombies","answerText":"Нет (Уж лучше зомби)"}]
},
{
  "text": "Роберт Мак-Кинли \"Солнечный свет\"",
  "nodeId": "vampires",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Широкомасштабная мясорубка или война одного против всех?",
  "nodeId": "zombies",
  "answers": [{"nextNodeId":"worldWarZ","answerText":"Да начнётся битва!"},
			  {"nextNodeId":"legend","answerText":"Одиночество и зомби"},
			  {"nextNodeId":"prometheus","answerText":"Предоставим землю зомби, а сами обратимся к классике"}]
},
{
  "text": "Макс Брукс \"Мировая война Z\"",
  "nodeId": "worldWarZ",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Ричард Матесон \"Я - легенда\"",
  "nodeId": "legend",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Мэри Шелли \"Франкенштейн, или Современный Прометей\"",
  "nodeId": "prometheus",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Как скажешь. Ищем трагедию?",
  "nodeId": "generallyOther",
  "answers": [{"nextNodeId":"tragedy","answerText":"Да"},
			  {"nextNodeId":"nonTragedy","answerText":"Нет"}]
},
{
  "text": "Любовь или преодоление несправедливости?",
  "nodeId": "tragedy",
  "answers": [{"nextNodeId":"love","answerText":"Любовь"},
			  {"nextNodeId":"injustice","answerText":"Я на стороне обделённых"}]
},
{
  "text": "Дэниел Киз \"Цветы для Элджернона\"",
  "nodeId": "love",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Смешать любовь с небольшими путешествиями во времени?",
  "nodeId": "injustice",
  "answers": [{"nextNodeId":"wife","answerText":"Да"},
			  {"nextNodeId":"withoutTimeTravels","answerText":"Нет"}]
},
{
  "text": "Одри Ниффенеггер \"Жена путешественника во времени\"",
  "nodeId": "wife",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Таки да!",
  "nodeId": "withoutTimeTravels",
  "answers": [{"nextNodeId":"stranger","answerText":"Ну и?.."}]
},
{
  "text": "Диана Гэблдон \"Чужестранка\"",
  "nodeId": "stranger",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Постмодернистское мозговыносящее творение?",
  "nodeId": "nonTragedy",
  "answers": [{"nextNodeId":"timeTravels","answerText":"Да"},
			  {"nextNodeId":"antiUtopie","answerText":"Нет"}]
},
{
  "text": "Просто скажи - нужны путешествия во времени?",
  "nodeId": "timeTravels",
  "answers": [{"nextNodeId":"slaughterhouseFive","answerText":"Да"},
			  {"nextNodeId":"cradle","answerText":"Нет"}]
},
{
  "text": "Курт Воннегут \"Бойня номер пять, или Крестовый поход детей\"",
  "nodeId": "slaughterhouseFive",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Курт Воннегут \"Колыбель для кошки\"",
  "nodeId": "cradle",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "К месту ли будут антиутопии?",
  "nodeId": "antiUtopie",
  "answers": [{"nextNodeId":"totalitarismOrNot","answerText":"Да"},
			  {"nextNodeId":"nonAntiUtopie","answerText":"Нет"}]
},
{
  "text": "Тоталитаризм или мир, сошедший с ума?",
  "nodeId": "totalitarismOrNot",
  "answers": [{"nextNodeId":"whichTotalitarism","answerText":"Виват, диктатура!"},
			  {"nextNodeId":"madness","answerText":"Внутренее безумие"}]
},
{
  "text": "Какая именно?",
  "nodeId": "whichTotalitarism",
  "answers": [{"nextNodeId":"religious","answerText":"Религиозная"},
			  {"nextNodeId":"military","answerText":"Военная"}]
},
{
  "text": "Маргарет Этвуд \"Рассказ Служанки\"",
  "nodeId": "religious",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Джордж Оруэлл \"1984\"",
  "nodeId": "military",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Интересно куда катится это ваше \"общество потребления\"?",
  "nodeId": "madness",
  "answers": [{"nextNodeId":"newWorld","answerText":"Да"},
			  {"nextNodeId":"whichQuestion","answerText":"Нет"}]
},
{
  "text": "Олдос Хаксли \"О дивный новый мир\"",
  "nodeId": "newWorld",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Тогда какой вопрос больше всего пугает?",
  "nodeId": "whichQuestion",
  "answers": [{"nextNodeId":"orange","answerText":"Кому нужна свобода воли?"},
			  {"nextNodeId":"fahrenheit","answerText":"Кому нужны книги?"},
			  {"nextNodeId":"postapoc","answerText":"Да ничего меня не пугает, давай больше постапокалипсиса"}]
},
{
  "text": "Энтони Бёрджес \"Заводной апельсин\"",
  "nodeId": "orange",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Рэй Бредбери \"451 градус по Фаренгейту\"",
  "nodeId": "fahrenheit",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Нравится пылающий мир?",
  "nodeId": "postapoc",
  "answers": [{"nextNodeId":"road","answerText":"Да"},
			  {"nextNodeId":"opposition","answerText":"Нет"}]
},
{
  "text": "Кормак Маккарти \"Дорога\"",
  "nodeId": "road",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Стивен Кинг \"Противостояние\"",
  "nodeId": "opposition",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Джордж Оруэл \"Скотный двор\"",
  "nodeId": "nonAntiUtopie",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Киберпанк?",
  "nodeId": "cyberpunk",
  "answers": [{"nextNodeId":"whichCyberpunk","answerText":"Да"},
			  {"nextNodeId":"space","answerText":"Нет"},
			  {"nextNodeId":"cryptonomicon","answerText":"Возможно"}]
},
{
  "text": "Нуар, самураи или неовикторианский стиль?",
  "nodeId": "whichCyberpunk",
  "answers": [{"nextNodeId":"noir","answerText":"Нуар"},
			  {"nextNodeId":"samurai","answerText":"Самураи"},
			  {"nextNodeId":"neoVic","answerText":"Смешные шляпы"}]
},
{
  "text": "Уильям Гибсон \"Нейромант\"",
  "nodeId": "noir",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Нил Стивенсон \"Лавина\"",
  "nodeId": "samurai",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Нил Стивенсон \"Алмазный век, или Букварь для благородных девиц\"",
  "nodeId": "neoVic",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Нил Стивенсон \"Криптономикон\"",
  "nodeId": "cryptonomicon",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Готовы бороздить просторы космоса?",
  "nodeId": "space",
  "answers": [{"nextNodeId":"warTime","answerText":"Да"},
			  {"nextNodeId":"underground","answerText":"Нет"},
			  {"nextNodeId":"spaceOdyssey","answerText":"Возможно"}]
},
{
  "text": "Время воевать?",
  "nodeId": "warTime",
  "answers": [{"nextNodeId":"whoEnemy","answerText":"Да"},
			  {"nextNodeId":"whichAliens","answerText":"Нет"},
			  {"nextNodeId":"farGalaxy","answerText":"Возможно"}]
},
{
  "text": "Кого с кем нужно стравить?",
  "nodeId": "whoEnemy",
  "answers": [{"nextNodeId":"humansVsInsects","answerText":"Людей и насекомых"},
			  {"nextNodeId":"humansVsSomething","answerText":"Людей и чёрт знает кого"},
			  {"nextNodeId":"powerStruggle","answerText":"Претендентов на власть"},
			  {"nextNodeId":"humansVsAliens","answerText":"Людей и чужих"},
			  {"nextNodeId":"humansVsHumans","answerText":"Людей между собой"},
			  {"nextNodeId":"allVsAll","answerText":"Вообще всех"}]
},
{
  "text": "Роберт Хайнлайн \"Звёздный десант\"",
  "nodeId": "humansVsInsects",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Орсон Скотт Кард \"Игра Эндера\"",
  "nodeId": "humansVsSomething",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Фрэнк Герберт \"Хроники Дюны\"",
  "nodeId": "powerStruggle",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Джо Холдеман \"Бесконечная война\"",
  "nodeId": "humansVsAliens",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Роберт Хайнлайн \"Луна - суровая хозяйка\"",
  "nodeId": "humansVsHumans",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Джон Скальци \"Война Старика\"",
  "nodeId": "allVsAll",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Но сначала стоит как следует разведать галактику (далёкую-далёкую)?",
  "nodeId": "farGalaxy",
  "answers": [{"nextNodeId":"traun","answerText":"Да (И желательно давным-давно)"},
			  {"nextNodeId":"humor","answerText":"Нет"}]
},
{
  "text": "Тимоти Зан \"Траун\"",
  "nodeId": "traun",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "С твоим чувством юмора всё в порядке?",
  "nodeId": "humor",
  "answers": [{"nextNodeId":"hitchhiker","answerText":"Да"},
			  {"nextNodeId":"activity","answerText":"Нет"},
			  {"nextNodeId":"culture","answerText":"Возможно"}]
},
{
  "text": "Дуглас Адамс \"Автостопом по галактике\"",
  "nodeId": "hitchhiker",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Иэн Бэнкс \"Культура\"",
  "nodeId": "culture",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Это из-за деятельности?",
  "nodeId": "activity",
  "answers": [{"nextNodeId":"whatLearned","answerText":"Да"},
			  {"nextNodeId":"barrayar","answerText":"Нет"}]
},
{
  "text": "И что же ты изучал?",
  "nodeId": "whatLearned",
  "answers": [{"nextNodeId":"historic","answerText":"Я историк"},
			  {"nextNodeId":"engineer","answerText":"Я инженер"},
			  {"nextNodeId":"itguy","answerText":"Я айтишник"}]
},
{
  "text": "Айзек Азимов \"Академия\"",
  "nodeId": "historic",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Ларри Нивен \"Мир-кольцо\"",
  "nodeId": "engineer",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Вернор Виндж \"Пламя над бездной\"",
  "nodeId": "itguy",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Лоис Макмастер Буджолд \"Барраярский цикл\"",
  "nodeId": "barrayar",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"},
			  {"nextNodeId":"shortStories","answerText":"Целый цикл? Ну нет!"}]
},
{
  "text": "Значит остались короткие истории. О роботах или марсианах?",
  "nodeId": "shortStories",
  "answers": [{"nextNodeId":"iRobot","answerText":"О роботах"},
			  {"nextNodeId":"marsianins","answerText":"О марсианах"}]
},
{
  "text": "Айзек Азимов \"Я, робот\"",
  "nodeId": "iRobot",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Рэй Бредбери \"Человек в картинках\"",
  "nodeId": "marsianins",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Каких инопланетян мы встретим?",
  "nodeId": "whichAliens",
  "answers": [{"nextNodeId":"wariors","answerText":"Враждебных"},
			  {"nextNodeId":"unexisting","answerText":"Несуществующих"},
			  {"nextNodeId":"peaceful","answerText":"Мирных"},
			  {"nextNodeId":"prolific","answerText":"Слишком плодовитых"},
			  {"nextNodeId":"thoughtful","answerText":"Заботливых"}]
},
{
  "text": "Герберт Уэлс \"Война миров\"",
  "nodeId": "wariors",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Артур Кларк \"Свидание с Рамой\"",
  "nodeId": "unexisting",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Артур Кларк \"Конец детства\"",
  "nodeId": "peaceful",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Ларри Нивен, Джерри Пурнелл \"Мошка в зенице Господней\"",
  "nodeId": "prolific",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Карл Саган \"Контакт\"",
  "nodeId": "thoughtful",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Может тогда вообще стоит забраться под землю?",
  "nodeId": "underground",
  "answers": [{"nextNodeId":"whatWithOceans","answerText":"Да"},
			  {"nextNodeId":"polRelFil","answerText":"Нет"}]
},
{
  "text": "Как быть с морями и океанами?",
  "nodeId": "whatWithOceans",
  "answers": [{"nextNodeId":"eathCenter","answerText":"Под землю"},
			  {"nextNodeId":"underSea","answerText":"Под воду"}]
},
{
  "text": "Жюль Верн \"Путешествие к центру Земли\"",
  "nodeId": "eathCenter",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Жюль Верн \"Двадь тысяч лье под водой\"",
  "nodeId": "underSea",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Политика, религия или философия?",
  "nodeId": "polRelFil",
  "answers": [{"nextNodeId":"politics","answerText":"Политика"},
			  {"nextNodeId":"relig","answerText":"Религия"},
			  {"nextNodeId":"fil","answerText":"Философия"},
			  {"nextNodeId":"anotherFic","answerText":"Фантастика это же о другом.."}]
},
{
  "text": "Филип Дик \"Мечтают ли андроиды об электроовцах?\"",
  "nodeId": "fil",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "И что же именно из политики?",
  "nodeId": "politics",
  "answers": [{"nextNodeId":"feminism","answerText":"Феминизм"},
			  {"nextNodeId":"communism","answerText":"Коммунизм"}]
},
{
  "text": "Урсула Ле Гуин \"Левая рука Тьмы\"",
  "nodeId": "feminism",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Урсула Ле Гуин \"Обделённые\"",
  "nodeId": "communism",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Аминь",
  "nodeId": "relig",
  "answers": [{"nextNodeId":"leibniz","answerText":"Католицизм"},
			  {"nextNodeId":"humanism","answerText":"Гуманизм"}]
},
{
  "text": "Уолтер Майкл Миллер \"Страсти по Лейбовицу\"",
  "nodeId": "leibniz",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Роберт Хайнлайн \"Чужак в стране чужой\"",
  "nodeId": "humanism",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "..О путешествиях во времени или что-то вроде того. Современная или классическая?",
  "nodeId": "anotherFic",
  "answers": [{"nextNodeId":"doomsday","answerText":"Современная"},
			  {"nextNodeId":"timeMachine","answerText":"Классическая"},
			  {"nextNodeId":"withoutTimeTrips","answerText":"А без путешествий во времени?"}]
},
{
  "text": "Конни Уиллис \"Doomsday book\"",
  "nodeId": "doomsday",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Герберт Уэллс \"Машина времени\"",
  "nodeId": "timeMachine",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Детектив или триллер с флёром фантастики?",
  "nodeId": "withoutTimeTrips",
  "answers": [{"nextNodeId":"detective","answerText":"Детектив"},
			  {"nextNodeId":"triller","answerText":"Триллер"}]
},
{
  "text": "Айзек Азимов \"Стальные пещеры\"",
  "nodeId": "detective",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Ларри Нивен, Джерри Пурнель \"Молот Люцифера\"",
  "nodeId": "triller",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Артур Кларк \"2001: Космическая одисея\"",
  "nodeId": "spaceOdyssey",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"},
			  {"nextNodeId":"mars","answerText":"Всё же далековато, может Марс?"}]
},
{
  "text": "И что ожидает нас на красной планете?",
  "nodeId": "mars",
  "answers": [{"nextNodeId":"marsChronicle","answerText":"Отрывочные сведения"},
			  {"nextNodeId":"marsTrilogy","answerText":"Энвайронмертализм"},
			  {"nextNodeId":"spaceTrilogy","answerText":"Перевернутый мир"}]
},
{
  "text": "Рэй Брэдбери \"Марсианские хроники\"",
  "nodeId": "marsChronicle",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Ким Стэнли Робинсон \"Mars trilogy\"",
  "nodeId": "marsTrilogy",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
},
{
  "text": "Клайв Стейплз Льюис \"Космическая трилогия\"",
  "nodeId": "spaceTrilogy",
  "answers": [{"nextNodeId":"start","answerText":"Начать сначала"}]
}
]}
