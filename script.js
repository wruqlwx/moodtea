const TEAS = [
    {
        id: 'classic',
        name: 'Green Tea Classic',
        type: 'Классический зелёный',
        collection: 'Классика вкуса',
        icon: '🍃',
        tags: { classic: 3, morning: 2, focus: 1, energy: 1 }
    },
    {
        id: 'gunpowder',
        name: 'Green Tea Gunpowder',
        type: 'Крепкий зелёный',
        collection: 'Классика вкуса',
        icon: '🌾',
        tags: { classic: 2, energy: 3, morning: 2, focus: 2 }
    },
    {
        id: 'matcha',
        name: 'Matcha',
        type: 'Матча',
        collection: 'Классика вкуса',
        icon: '🍵',
        tags: { energy: 3, morning: 2, focus: 3, fresh: 1 }
    },
    {
        id: 'turmeric-ginger',
        name: 'Turmeric & Ginger',
        type: 'Зелёный с куркумой и имбирём',
        collection: 'Классика вкуса',
        icon: '🫚',
        tags: { fresh: 2, energy: 2, cleansing: 2, citrus: 1, focus: 1 }
    },
    {
        id: 'golden-grass',
        name: 'Golden Grass',
        type: 'Зелёный с лемонграссом и мятой',
        collection: 'Классика вкуса',
        icon: '🌿',
        tags: { fresh: 3, herbal: 2, citrus: 1, focus: 2, cleansing: 1 }
    },
    {
        id: 'green-spring',
        name: 'Green Spring',
        type: 'Зелёный с лимонником и лемонграссом',
        collection: 'Классика вкуса',
        icon: '🌱',
        tags: { floral: 1, fresh: 2, citrus: 2, cleansing: 2 }
    },
    {
        id: 'energy',
        name: 'Energy',
        type: 'Зелёный с женьшенем',
        collection: 'Классика вкуса',
        icon: '💪',
        tags: { energy: 3, morning: 3, focus: 1, herbal: 1 }
    },
    {
        id: 'detox',
        name: 'Detox',
        type: 'Зелёный с ананасом и лемонграссом',
        collection: 'Классика вкуса',
        icon: '🍍',
        tags: { cleansing: 3, citrus: 2, fresh: 2, sweet: 1 }
    },
    {
        id: 'fire-ice',
        name: 'Fire & Ice',
        type: 'Зелёный с имбирём и мятой',
        collection: 'Классика вкуса',
        icon: '🔥',
        tags: { fresh: 2, energy: 2, herbal: 2, citrus: 1 }
    },
    {
        id: 'ling-zhi',
        name: 'Ling Zhi',
        type: 'Лёгкий травяной сбор',
        collection: 'Классика вкуса',
        icon: '🍂',
        tags: { relax: 3, calm: 3, evening: 2, herbal: 2, sleep: 1 }
    },
    {
        id: 'feng-shui',
        name: 'Feng Shui',
        type: 'Зелёный с хризантемой',
        collection: 'Классика вкуса',
        icon: '🏮',
        tags: { floral: 2, calm: 3, relax: 2, evening: 2 }
    },
    {
        id: 'blueberry',
        name: 'Blueberry',
        type: 'Зелёный с черникой',
        collection: 'Классика вкуса',
        icon: '🫐',
        tags: { fruity: 3, sweet: 3, calm: 1, evening: 1, relax: 1 }
    },
    {
        id: 'daisy',
        name: 'Daisy',
        type: 'Травяной с ромашкой',
        collection: 'Классика вкуса',
        icon: '🌼',
        tags: { herbal: 3, sleep: 3, calm: 2, evening: 2, relax: 1 }
    },
    {
        id: 'silver-green',
        name: 'Silver Green',
        type: 'Зелёный с цитрусом и мятой',
        collection: 'Классика вкуса',
        icon: '🔆',
        tags: { fresh: 2, citrus: 2, focus: 2, morning: 1 }
    },
    {
        id: 'golden-ceylon',
        name: 'Golden Ceylon',
        type: 'Чёрный цейлонский',
        collection: 'Классическая',
        icon: '🌅',
        tags: { classic: 3, energy: 2, morning: 2, focus: 1 }
    },
    {
        id: 'kenyan-sunrise',
        name: 'Kenyan Sunrise',
        type: 'Чёрный кенийский',
        collection: 'Классическая',
        icon: '🌞',
        tags: { classic: 2, energy: 3, morning: 2, focus: 1 }
    },
    {
        id: 'english-edition',
        name: 'English Edition',
        type: 'Чёрный купаж',
        collection: 'Классическая',
        icon: '🇬🇧',
        tags: { classic: 2, sweet: 1, calm: 1, evening: 2, relax: 1 }
    },
    {
        id: 'classic-breakfast',
        name: 'Classic Breakfast',
        type: 'Чёрный для завтрака',
        collection: 'Классическая',
        icon: '🥐',
        tags: { morning: 3, classic: 2, energy: 2 }
    },
    {
        id: 'earl-grey-fantasy',
        name: 'Earl Grey Fantasy',
        type: 'Чёрный с бергамотом',
        collection: 'Классическая',
        icon: '🍋',
        tags: { citrus: 3, classic: 2, energy: 2, morning: 2, focus: 1 }
    },
    {
        id: 'magic-yunnan',
        name: 'Magic Yunnan',
        type: 'Чёрный копчёный',
        collection: 'Классическая',
        icon: '🐉',
        tags: { classic: 2, sweet: 2, calm: 1, evening: 2, relax: 1 }
    },
    {
        id: 'premium-assam',
        name: 'Premium Assam',
        type: 'Чёрный ассамский',
        collection: 'Классическая',
        icon: '🌄',
        tags: { classic: 2, energy: 3, morning: 2, focus: 1 }
    },
    {
        id: 'flying-dragon',
        name: 'Flying Dragon',
        type: 'Зелёный классический',
        collection: 'Классическая',
        icon: '🐲',
        tags: { classic: 3, fresh: 1, focus: 2, morning: 1 }
    },
    {
        id: 'jasmine-dream',
        name: 'Jasmine Dream',
        type: 'Зелёный с жасмином',
        collection: 'Классическая',
        icon: '🌸',
        tags: { floral: 3, calm: 2, relax: 1, evening: 2 }
    },
    {
        id: 'milky-oolong',
        name: 'Milky Oolong',
        type: 'Оолонг сливочный',
        collection: 'Классическая',
        icon: '🥛',
        tags: { sweet: 3, calm: 2, relax: 2, evening: 1 }
    },
    {
        id: 'fine-ceylon',
        name: 'Fine Ceylon',
        type: 'Крупнолистовой цейлонский',
        collection: 'Gourmet',
        icon: '🏔️',
        tags: { classic: 3, calm: 1, focus: 2, energy: 1 }
    },
    {
        id: 'rich-earl-grey',
        name: 'Rich Earl Grey',
        type: 'Крупнолистовой с бергамотом',
        collection: 'Gourmet',
        icon: '💛',
        tags: { citrus: 3, classic: 2, energy: 2, focus: 1 }
    },
    {
        id: 'rich-ceylon',
        name: 'Rich Ceylon',
        type: 'Чёрный цейлонский, пирамидки',
        collection: 'Fine Dining',
        icon: '🕌',
        tags: { classic: 3, calm: 1, evening: 1, focus: 1 }
    },
    {
        id: 'cherry-amour',
        name: 'Cherry Amour',
        type: 'Чёрный с вишней и мятой',
        collection: 'Fine Dining',
        icon: '🍒',
        tags: { fruity: 3, fresh: 2, sweet: 2, evening: 1 }
    },
    {
        id: 'raspberry-romance',
        name: 'Raspberry Romance',
        type: 'Чёрный с малиной, личи и персиком',
        collection: 'Fine Dining',
        icon: '🍓',
        tags: { fruity: 3, sweet: 2, floral: 1, evening: 1 }
    },
    {
        id: 'citrus-exotique',
        name: 'Citrus Exotique',
        type: 'Чёрный с ананасом, юдзу и лемонграссом',
        collection: 'Fine Dining',
        icon: '🍊',
        tags: { citrus: 3, fresh: 2, fruity: 2, energy: 1 }
    },
    {
        id: 'summer-passion',
        name: 'Summer Passion',
        type: 'Зелёный с манго, личи и клубникой',
        collection: 'Fine Dining',
        icon: '🥭',
        tags: { fruity: 3, sweet: 2, fresh: 2, energy: 1 }
    },
    {
        id: 'oriental-lime',
        name: 'Oriental Lime',
        type: 'Чёрный с лаймом и лемонграссом',
        collection: 'Гербальная',
        icon: '🍈',
        tags: { citrus: 3, fresh: 2, energy: 2, focus: 1 }
    },
    {
        id: 'gourmand-pear',
        name: 'Gourmand Pear',
        type: 'Чёрный с грушей',
        collection: 'Гербальная',
        icon: '🍐',
        tags: { sweet: 3, fruity: 2, calm: 1, evening: 1 }
    },
    {
        id: 'strawberry-bloom',
        name: 'Strawberry Bloom',
        type: 'Чёрный с ароматом розы',
        collection: 'Гербальная',
        icon: '🌹',
        tags: { floral: 3, sweet: 2, calm: 1, evening: 1 }
    },
    {
        id: 'spring-melody',
        name: 'Spring Melody',
        type: 'Чёрный с чабрецом и мятой',
        collection: 'Гербальная',
        icon: '🌷',
        tags: { fresh: 2, herbal: 2, relax: 1, evening: 1 }
    },
    {
        id: 'barberry-garden',
        name: 'Barberry Garden',
        type: 'Чёрный с барбарисом и гибискусом',
        collection: 'Гербальная',
        icon: '🌺',
        tags: { fruity: 2, citrus: 2, sweet: 1, evening: 1 }
    },
    {
        id: 'lemon-spark',
        name: 'Lemon Spark',
        type: 'Чёрный с лимоном и розмарином',
        collection: 'Гербальная',
        icon: '🍋‍🟩',
        tags: { citrus: 3, fresh: 2, focus: 2, morning: 1 }
    },
    {
        id: 'christmas-mystery',
        name: 'Christmas Mystery',
        type: 'Чёрный со специями и цитрусом',
        collection: 'Гербальная',
        icon: '🎄',
        tags: { citrus: 2, sweet: 3, relax: 1, evening: 2, calm: 1 }
    },
    {
        id: 'blueberry-nights',
        name: 'Blueberry Nights',
        type: 'Чёрный с черникой',
        collection: 'Гербальная',
        icon: '🌙',
        tags: { fruity: 3, sweet: 3, calm: 2, sleep: 3, evening: 2 }
    },
    {
        id: 'currant-mint',
        name: 'Currant & Mint',
        type: 'Чёрный со смородиной и мятой',
        collection: 'Гербальная',
        icon: '🫐',
        tags: { fresh: 2, fruity: 2, sweet: 1, evening: 1 }
    },
    {
        id: 'lemon-ginger',
        name: 'Lemon Ginger',
        type: 'Травяной с имбирём и лимоном',
        collection: 'Tastes of the World',
        icon: '🍋',
        tags: { citrus: 2, fresh: 2, energy: 2, focus: 1 }
    },
    {
        id: 'pure-black',
        name: 'Pure Black',
        type: 'Чёрный цейлонский',
        collection: 'Tastes of the World',
        icon: '⚫',
        tags: { classic: 3, focus: 1, evening: 1, calm: 1 }
    },
    {
        id: 'rich-lemon',
        name: 'Rich Lemon',
        type: 'Зелёный с лимоном и яблоком',
        collection: 'Tastes of the World',
        icon: '🍋‍🟩',
        tags: { citrus: 3, fresh: 2, focus: 2, morning: 1 }
    },
    {
        id: 'juicy-mango',
        name: 'Juicy Mango',
        type: 'Зелёный с манго и личи',
        collection: 'Tastes of the World',
        icon: '🥭',
        tags: { fruity: 3, sweet: 2, fresh: 2, energy: 1 }
    },
    {
        id: 'sweet-mint',
        name: 'Sweet Mint',
        type: 'Зелёный с мятой',
        collection: 'Tastes of the World',
        icon: '🌿',
        tags: { fresh: 3, herbal: 2, calm: 1, focus: 2, evening: 1 }
    },
    {
        id: 'mint-camomile',
        name: 'Mint Camomile',
        type: 'Травяной с ромашкой и мятой',
        collection: 'Tastes of the World',
        icon: '🌼',
        tags: { herbal: 3, calm: 2, sleep: 2, fresh: 1, relax: 1 }
    },
    {
        id: 'ripe-raspberry',
        name: 'Ripe Raspberry',
        type: 'Травяной с малиной и ежевикой',
        collection: 'Tastes of the World',
        icon: '🍇',
        tags: { fruity: 3, sweet: 2, fresh: 1, relax: 1 }
    },
    {
        id: 'strawberry-garden',
        name: 'Strawberry Garden',
        type: 'Травяной с клубникой и гибискусом',
        collection: 'Гербальная',
        icon: '🍓',
        tags: { fruity: 3, sweet: 2, fresh: 2 }
    },
    {
        id: 'summer-bouquet',
        name: 'Summer Bouquet',
        type: 'Травяной с малиной и шиповником',
        collection: 'Гербальная',
        icon: '💐',
        tags: { fruity: 3, sweet: 2, fresh: 1, evening: 1 }
    },
    {
        id: 'cherry-blossom',
        name: 'Cherry Blossom',
        type: 'Травяной с вишней, яблоком и малиной',
        collection: 'Гербальная',
        icon: '🌸',
        tags: { fruity: 3, sweet: 2, floral: 2, calm: 1, evening: 1 }
    },
    {
        id: 'berry-sunset',
        name: 'Berry Sunset',
        type: 'Травяной с лесными ягодами',
        collection: 'Гербальная',
        icon: '🫖',
        tags: { fruity: 3, sweet: 2, relax: 1, evening: 1 }
    },
    {
        id: 'camomile-meadow',
        name: 'Camomile Meadow',
        type: 'Травяной с ромашкой и мелиссой',
        collection: 'Гербальная',
        icon: '🏵️',
        tags: { herbal: 3, calm: 2, sleep: 2, relax: 1 }
    },
    {
        id: 'rich-camomile',
        name: 'Rich Camomile',
        type: 'Травяной с ромашкой и корицей',
        collection: 'Гербальная',
        icon: '🍂',
        tags: { herbal: 3, sweet: 1, calm: 2, sleep: 2 }
    },
    {
        id: 'festive-grape',
        name: 'Festive Grape',
        type: 'Травяной с яблоком и виноградом',
        collection: 'Гербальная',
        icon: '🍇',
        tags: { fruity: 3, sweet: 2, relax: 1, evening: 1 }
    },
    {
        id: 'wildberry-rooibos',
        name: 'Wildberry Rooibos',
        type: 'Ройбуш с земляникой',
        collection: 'Гербальная',
        icon: '🟤',
        tags: { sweet: 2, fruity: 2, calm: 2, relax: 2, evening: 1 }
    },
    {
        id: 'spirit-mate',
        name: 'Spirit Mate',
        type: 'Матé с лаймом',
        collection: 'Гербальная',
        icon: '🧉',
        tags: { energy: 3, focus: 2, fresh: 2, morning: 2 }
    },
    {
        id: 'berry-sonata',
        name: 'Berry Sonata',
        type: 'Зелёный с клубникой, вишней и черникой',
        collection: 'Гербальная',
        icon: '🍒',
        tags: { fruity: 3, sweet: 2, fresh: 1, energy: 1 }
    },
    {
        id: 'citrus-breeze',
        name: 'Citrus Breeze',
        type: 'Зелёный с цитрусом и мятой',
        collection: 'Гербальная',
        icon: '🍊',
        tags: { citrus: 3, fresh: 2, focus: 2, morning: 1 }
    },
    {
        id: 'green-melissa',
        name: 'Green Melissa',
        type: 'Зелёный с мятой и мелиссой',
        collection: 'Гербальная',
        icon: '🌱',
        tags: { fresh: 3, herbal: 2, calm: 1, evening: 1, focus: 1 }
    },
    {
        id: 'spicy-mango',
        name: 'Spicy Mango',
        type: 'Оолонг с манго и имбирём',
        collection: 'Гербальная',
        icon: '🍑',
        tags: { fruity: 2, sweet: 2, fresh: 2, energy: 2 }
    },
    {
        id: 'ginger-lemon',
        name: 'Ginger & Lemon',
        type: 'Тисейн с имбирём и лимоном',
        collection: 'Natural Tisane',
        icon: '🫚',
        tags: { citrus: 2, fresh: 2, energy: 2, cleansing: 2, focus: 1 }
    },
    {
        id: 'apple-cinnamon',
        name: 'Apple & Cinnamon',
        type: 'Тисейн с яблоком и корицей',
        collection: 'Natural Tisane',
        icon: '🍎',
        tags: { sweet: 2, fruity: 2, relax: 2, evening: 2, sleep: 1 }
    },
    {
        id: 'lavender-verbena',
        name: 'Lavender & Verbena',
        type: 'Тисейн с лавандой и вербеной',
        collection: 'Natural Tisane',
        icon: '💜',
        tags: { floral: 3, calm: 2, sleep: 2, relax: 2, herbal: 1 }
    },
    {
        id: 'lemongrass-schisandra',
        name: 'Lemongrass & Schisandra',
        type: 'Тисейн с лемонграссом и лимонником',
        collection: 'Natural Tisane',
        icon: '🌾',
        tags: { fresh: 3, citrus: 2, focus: 2, energy: 2 }
    },
    {
        id: 'double-mint',
        name: 'Double Mint',
        type: 'Тисейн из двух видов мяты',
        collection: 'Natural Tisane',
        icon: '🌿',
        tags: { fresh: 3, herbal: 3, calm: 1, focus: 1 }
    },
    {
        id: 'matcha-orange-leaf',
        name: 'Matcha & Orange Leaf',
        type: 'Тисейн с матча, сенчей и анисом',
        collection: 'Natural Tisane',
        icon: '🟢',
        tags: { fresh: 2, calm: 1, focus: 2, sweet: 1, energy: 1 }
    }
];

const QUESTIONS = [
    {
        text: 'Какое у тебя сейчас настроение?',
        answers: [
            { emoji: '😊', text: 'Спокойствие и гармония', tags: { relax: 2, calm: 2 } },
            { emoji: '⚡', text: 'Хочу бодрости и энергии', tags: { energy: 2 } },
            { emoji: '😌', text: 'Лёгкая тревога, хочу расслабиться', tags: { calm: 2, herbal: 1 } },
            { emoji: '🥱', text: 'Усталость, нет сил', tags: { energy: 2, focus: 1 } },
            { emoji: '🤔', text: 'Нужна ясность и концентрация', tags: { focus: 2, classic: 1 } }
        ]
    },
    {
        text: 'Что тебе сейчас нужно больше всего?',
        answers: [
            { emoji: '🌿', text: 'Снять стресс и расслабиться', tags: { relax: 2, calm: 1 } },
            { emoji: '💪', text: 'Взбодриться и проснуться', tags: { energy: 3, morning: 1 } },
            { emoji: '🍃', text: 'Очиститься и почувствовать лёгкость', tags: { cleansing: 3, fresh: 1 } },
            { emoji: '❤️', text: 'Позаботиться о себе', tags: { calm: 2, sweet: 1, floral: 1 } },
            { emoji: '🧠', text: 'Собраться и сфокусироваться', tags: { focus: 3 } }
        ]
    },
    {
        text: 'Какой вкус тебе сейчас ближе?',
        answers: [
            { emoji: '🌸', text: 'Цветочный и нежный', tags: { floral: 3 } },
            { emoji: '🍃', text: 'Чистый классический зелёный', tags: { classic: 3 } },
            { emoji: '🌿', text: 'Освежающий, мятный', tags: { fresh: 3, herbal: 1 } },
            { emoji: '🍋', text: 'С кислинкой, цитрусовый', tags: { citrus: 3, fresh: 1 } },
            { emoji: '🍯', text: 'Сладковатый, ягодный', tags: { sweet: 3, fruity: 2 } }
        ]
    },
    {
        text: 'Что для тебя сейчас важнее?',
        answers: [
            { emoji: '🌿', text: 'Натуральность и польза', tags: { herbal: 2, cleansing: 1 } },
            { emoji: '🧘', text: 'Атмосфера и ритуал', tags: { calm: 2, floral: 1 } },
            { emoji: '🎉', text: 'Вкус и удовольствие', tags: { sweet: 2, fruity: 2 } },
            { emoji: '⏱️', text: 'Быстро и практично', tags: { classic: 2, energy: 1 } }
        ]
    },
    {
        text: 'Когда ты обычно пьёшь чай?',
        answers: [
            { emoji: '🌅', text: 'Утром, чтобы начать день', tags: { morning: 3, energy: 1 } },
            { emoji: '☀️', text: 'Днём, в перерыве', tags: { focus: 1, fresh: 1 } },
            { emoji: '🌆', text: 'Вечером, расслабиться после дня', tags: { relax: 2, calm: 1 } },
            { emoji: '🌙', text: 'Поздним вечером, перед сном', tags: { sleep: 3, calm: 1 } }
        ]
    }
];

const RESULT_MESSAGES = {
    energy: 'Тебе сейчас нужен заряд бодрости. Выбирай этот чай утром или перед делом — он поможет проснуться и собраться.',
    calm: 'Похоже, тебе нужно успокоиться и отдохнуть. Завари чашку и сделай несколько глубоких вдохов.',
    focus: 'Нужно собраться? Этот чай поможет настроиться на работу и сосредоточиться.',
    fresh: 'Лёгкость и свежесть — именно то, что нужно. Освежающий вкус поднимет настроение.',
    sweet: 'Побаловать себя — отличная идея. Наслаждайся вкусом и удели время только себе.',
    sleep: 'Время завершать день. Этот чай мягко настроит на спокойный вечер и хороший сон.',
    classic: 'Классика для чистого удовольствия — просто, честно и всегда к месту.'
};

const CATEGORIES = [
    { key: 'Классическая', label: 'Классическая коллекция', icon: '🏛️', desc: 'Благородные чёрные и зелёные чаи с лучших плантаций мира' },
    { key: 'Классика вкуса', label: 'Классика вкуса', icon: '☕', desc: 'Культовые вкусы Greenfield, которые знают все' },
    { key: 'Гербальная', label: 'Гербальная коллекция', icon: '🌿', desc: 'Авторские чайные и фруктово-травяные композиции' },
    { key: 'Gourmet', label: 'Gourmet Tea Collection', icon: '🍃', desc: 'Крупнолистовые благородные сорта' },
    { key: 'Fine Dining', label: 'Fine Dining Collection', icon: '🍽️', desc: 'Изысканные композиции в пирамидках' },
    { key: 'Tastes of the World', label: 'Tastes of the World', icon: '🌍', desc: 'Виртуозные купажи из разных стран и континентов' },
    { key: 'Natural Tisane', label: 'Natural Tisane', icon: '🌾', desc: 'Натуральные напитки из трав, фруктов и специй' }
];

let selectedTeas = new Set();
const collapsedCategories = new Set();

const btnStartQuiz = document.getElementById('btn-start-quiz');
const categoriesRoot = document.getElementById('tea-categories');
let currentQuestion = 0;
let answers = [];

function renderTeaGrid() {
    categoriesRoot.innerHTML = '';

    CATEGORIES.forEach(cat => {
        const teas = TEAS.filter(t => t.collection === cat.key);
        if (!teas.length) return;

        const block = document.createElement('div');
        block.className = 'category' + (collapsedCategories.has(cat.key) ? ' collapsed' : '');
        block.dataset.cat = cat.key;

        block.innerHTML = `
            <button class="category-head">
                <span class="category-icon">${cat.icon}</span>
                <span class="category-titles">
                    <span class="category-title">${cat.label}</span>
                    <span class="category-meta">${cat.desc}</span>
                </span>
                <span class="category-actions">
                    <span class="category-count" data-role="count"></span>
                    <span class="select-cat" data-role="select">Выбрать все</span>
                    <span class="category-arrow">▼</span>
                </span>
            </button>
            <div class="category-grid"></div>
        `;

        block.querySelector('.category-head').addEventListener('click', () => {
            if (collapsedCategories.has(cat.key)) {
                collapsedCategories.delete(cat.key);
            } else {
                collapsedCategories.add(cat.key);
            }
            block.classList.toggle('collapsed');
        });

        block.querySelector('[data-role="select"]').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCategory(cat.key);
        });

        const grid = block.querySelector('.category-grid');
        teas.forEach(tea => {
            const card = document.createElement('div');
            card.className = 'tea-card' + (selectedTeas.has(tea.id) ? ' selected' : '');
            card.innerHTML = `
                <span class="tea-icon">${tea.icon}</span>
                <div class="tea-name">${tea.name}</div>
                <div class="tea-type">${tea.type}</div>
            `;
            card.addEventListener('click', () => toggleTea(tea.id, card));
            grid.appendChild(card);
        });

        categoriesRoot.appendChild(block);
    });

    updateCounter();
}

function updateCounter() {
    const total = TEAS.length;
    document.getElementById('select-counter').textContent = `Выбрано: ${selectedTeas.size} из ${total}`;
    btnStartQuiz.disabled = selectedTeas.size === 0;

    document.querySelectorAll('.category').forEach(block => {
        const catKey = block.dataset.cat;
        const teas = TEAS.filter(t => t.collection === catKey);
        const selected = teas.filter(t => selectedTeas.has(t.id)).length;
        const chip = block.querySelector('[data-role="count"]');
        chip.textContent = selected === teas.length
            ? `Все ${teas.length}`
            : `${selected}/${teas.length}`;
        chip.style.opacity = selected === 0 ? '0.6' : '1';
    });
}

function toggleTea(id, card) {
    if (selectedTeas.has(id)) {
        selectedTeas.delete(id);
    } else {
        selectedTeas.add(id);
    }
    card.classList.toggle('selected');
    updateCounter();
}

function toggleCategory(key) {
    const teas = TEAS.filter(t => t.collection === key);
    const allSelected = teas.every(t => selectedTeas.has(t.id));
    teas.forEach(t => {
        if (allSelected) {
            selectedTeas.delete(t.id);
        } else {
            selectedTeas.add(t.id);
        }
    });
    renderTeaGrid();
}

function selectAllTeas() {
    selectedTeas = new Set(TEAS.map(t => t.id));
    renderTeaGrid();
}

function resetTeas() {
    selectedTeas = new Set();
    renderTeaGrid();
}

function setStep(step) {
    document.querySelectorAll('.step').forEach((el, i) => {
        el.classList.toggle('active', String(i + 1) === String(step));
    });
}

function showSection(name) {
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    document.getElementById('section-' + name).classList.remove('hidden');

    const stepMap = { collection: 1, quiz: 2, result: 3 };
    setStep(stepMap[name] || 1);

    if (name === 'collection') {
        renderTeaGrid();
    }
    window.scrollTo(0, 0);
}

function startQuiz() {
    currentQuestion = 0;
    answers = [];
    showSection('quiz');
    renderQuestion();
}

function renderQuestion() {
    const q = QUESTIONS[currentQuestion];
    document.getElementById('question-text').textContent = q.text;
    document.getElementById('progress-text').textContent =
        `Вопрос ${currentQuestion + 1} из ${QUESTIONS.length}`;
    document.getElementById('progress-fill').style.width =
        `${((currentQuestion + 1) / QUESTIONS.length) * 100}%`;

    const answersEl = document.getElementById('answers');
    answersEl.innerHTML = '';
    q.answers.forEach(a => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerHTML = `<span class="answer-emoji">${a.emoji}</span><span>${a.text}</span>`;
        btn.onclick = () => {
            answers.push(a.tags);
            if (currentQuestion < QUESTIONS.length - 1) {
                currentQuestion++;
                renderQuestion();
            } else {
                showResult();
            }
        };
        answersEl.appendChild(btn);
    });
}

function computeScores() {
    const scores = {};
    TEAS.forEach(t => scores[t.id] = 0);

    answers.forEach(answerTags => {
        TEAS.forEach(tea => {
            for (const tag in answerTags) {
                scores[tea.id] += (tea.tags[tag] || 0) * answerTags[tag];
            }
        });
    });

    return scores;
}

function showResult() {
    showSection('result');

    const scores = computeScores();
    const available = TEAS.filter(t => selectedTeas.has(t.id));
    const sorted = [...available].sort((a, b) => scores[b.id] - scores[a.id]);

    const top3 = sorted.slice(0, 3);

    const resultEl = document.getElementById('result-teas');
    resultEl.innerHTML = '';
    top3.forEach((tea, idx) => {
        const el = document.createElement('div');
        el.className = 'result-tea';
        el.innerHTML = `
            <span class="result-rank">${idx + 1}</span>
            <span class="result-tea-icon">${tea.icon}</span>
            <div class="result-tea-info">
                <h4>${tea.name}</h4>
                <p>${tea.type}</p>
                <span class="result-tea-tag">${tea.collection}</span>
            </div>
        `;
        resultEl.appendChild(el);
    });

    const tagTotals = {};
    answers.forEach(tags => {
        for (const tag in tags) {
            tagTotals[tag] = (tagTotals[tag] || 0) + tags[tag];
        }
    });
    const topTag = Object.keys(tagTotals).sort((a, b) => tagTotals[b] - tagTotals[a])[0];
    const messageKey = RESULT_MESSAGES[topTag] ? topTag : 'classic';

    document.getElementById('result-message').innerHTML =
        `<strong>${top3[0] ? top3[0].name : ''}</strong> — идеальный выбор для тебя прямо сейчас. ` +
        RESULT_MESSAGES[messageKey];
}

function restartQuiz() {
    showSection('collection');
}

renderTeaGrid();