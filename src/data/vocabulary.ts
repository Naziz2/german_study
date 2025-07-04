import { Word } from '../types';

// Helper function to generate unique IDs
const generateId = (index: number): string => `word_${index + 1}`;

export const vocabulary: Word[] = [
  // Basic Greetings and Phrases (20 words)
  {
    id: generateId(0),
    german: 'Hallo',
    arabic: 'مرحبًا',
    pronunciation: 'هالو',
    example: 'Hallo, wie geht es dir?',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(1),
    german: 'Guten Morgen',
    arabic: 'صباح الخير',
    pronunciation: 'جوتن مورجن',
    example: 'Guten Morgen! Wie hast du geschlafen?',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(2),
    german: 'Guten Tag',
    arabic: 'نهارك سعيد',
    pronunciation: 'جوتن تاج',
    example: 'Guten Tag, Herr Müller!',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(3),
    german: 'Guten Abend',
    arabic: 'مساء الخير',
    pronunciation: 'جوتن آبند',
    example: 'Guten Abend, schönen Feierabend!',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(4),
    german: 'Gute Nacht',
    arabic: 'تصبح على خير',
    pronunciation: 'جوته ناخت',
    example: 'Gute Nacht, schlaf gut!',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(5),
    german: 'Auf Wiedersehen',
    arabic: 'مع السلامة',
    pronunciation: 'اوف فيدرزين',
    example: 'Auf Wiedersehen, bis morgen!',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(6),
    german: 'Tschüss',
    arabic: 'وداعًا',
    pronunciation: 'تشوس',
    example: 'Tschüss, bis später!',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(7),
    german: 'Danke',
    arabic: 'شكرًا',
    pronunciation: 'دانكه',
    example: 'Danke für deine Hilfe!',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(8),
    german: 'Bitte',
    arabic: 'من فضلك / عفوًا',
    pronunciation: 'بيته',
    example: 'Bitte, gern geschehen!',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(9),
    german: 'Entschuldigung',
    arabic: 'عذرًا',
    pronunciation: 'إنتشولديجونج',
    example: 'Entschuldigung, wo ist der Bahnhof?',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(10),
    german: 'Wie geht es Ihnen?',
    arabic: 'كيف حالك؟',
    pronunciation: 'في جيت إس إينن',
    example: 'Wie geht es Ihnen heute?',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(11),
    german: 'Es freut mich',
    arabic: 'يسعدني',
    pronunciation: 'إس فرويت ميش',
    example: 'Es freut mich, Sie kennenzulernen.',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(12),
    german: 'Willkommen',
    arabic: 'أهلاً وسهلاً',
    pronunciation: 'فيلكومن',
    example: 'Willkommen in Deutschland!',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(13),
    german: 'Prost',
    arabic: 'في صحتك',
    pronunciation: 'بروست',
    example: 'Prost! Auf ein gutes Jahr!',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(14),
    german: 'Gesundheit',
    arabic: 'يرحمك الله',
    pronunciation: 'جيزوندهايت',
    example: 'Gesundheit! Bist du erkältet?',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(15),
    german: 'Alles Gute',
    arabic: 'كل التوفيق',
    pronunciation: 'آليس جوته',
    example: 'Alles Gute zum Geburtstag!',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(16),
    german: 'Herzlichen Glückwunsch',
    arabic: 'تهانينا القلبية',
    pronunciation: 'هيرتسليشن جلوكفونش',
    example: 'Herzlichen Glückwunsch zur Hochzeit!',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(17),
    german: 'Frohe Weihnachten',
    arabic: 'عيد ميلاد مجيد',
    pronunciation: 'فروه فايناختن',
    example: 'Frohe Weihnachten und ein gutes neues Jahr!',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(18),
    german: 'Frohes neues Jahr',
    arabic: 'سنة جديدة سعيدة',
    pronunciation: 'فروهيس نويس يار',
    example: 'Frohes neues Jahr! Mögen alle Träume wahr werden.',
    category: 'greetings',
    level: 'A1'
  },
  {
    id: generateId(19),
    german: 'Viel Erfolg',
    arabic: 'بالتوفيق',
    pronunciation: 'فيل إرفولج',
    example: 'Viel Erfolg bei der Prüfung!',
    category: 'greetings',
    level: 'A1'
  },

  // Numbers (30 words)
  {
    id: generateId(20),
    german: 'null',
    arabic: 'صفر',
    pronunciation: 'نول',
    example: 'Die Temperatur ist null Grad.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(21),
    german: 'eins',
    arabic: 'واحد',
    pronunciation: 'آينس',
    example: 'Ich habe eins, zwei, drei gezählt.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(22),
    german: 'zwei',
    arabic: 'اثنان',
    pronunciation: 'تسفاي',
    example: 'Ich habe zwei Geschwister.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(23),
    german: 'drei',
    arabic: 'ثلاثة',
    pronunciation: 'دراي',
    example: 'Das Buch hat drei Kapitel.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(24),
    german: 'vier',
    arabic: 'أربعة',
    pronunciation: 'فير',
    example: 'Wir sind vier Personen.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(25),
    german: 'fünf',
    arabic: 'خمسة',
    pronunciation: 'فونف',
    example: 'Die Arbeit dauert fünf Stunden.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(26),
    german: 'sechs',
    arabic: 'ستة',
    pronunciation: 'زيكس',
    example: 'Mein Sohn ist sechs Jahre alt.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(27),
    german: 'sieben',
    arabic: 'سبعة',
    pronunciation: 'زيبن',
    example: 'Die Woche hat sieben Tage.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(28),
    german: 'acht',
    arabic: 'ثمانية',
    pronunciation: 'آخت',
    example: 'Ich stehe um acht Uhr auf.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(29),
    german: 'neun',
    arabic: 'تسعة',
    pronunciation: 'نوين',
    example: 'Das Spiel beginnt um neun.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(30),
    german: 'zehn',
    arabic: 'عشرة',
    pronunciation: 'تسين',
    example: 'Ich brauche zehn Minuten.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(31),
    german: 'elf',
    arabic: 'أحد عشر',
    pronunciation: 'إلف',
    example: 'Es ist elf Uhr.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(32),
    german: 'zwölf',
    arabic: 'اثنا عشر',
    pronunciation: 'تسفولف',
    example: 'Zwölf Monate sind ein Jahr.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(33),
    german: 'dreizehn',
    arabic: 'ثلاثة عشر',
    pronunciation: 'درايتسين',
    example: 'Meine Tochter ist dreizehn.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(34),
    german: 'zwanzig',
    arabic: 'عشرون',
    pronunciation: 'تسفانتسيج',
    example: 'Das kostet zwanzig Euro.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(35),
    german: 'dreißig',
    arabic: 'ثلاثون',
    pronunciation: 'درايسيج',
    example: 'Er ist dreißig Jahre alt.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(36),
    german: 'vierzig',
    arabic: 'أربعون',
    pronunciation: 'فيرتسيج',
    example: 'Die Fahrt dauert vierzig Minuten.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(37),
    german: 'fünfzig',
    arabic: 'خمسون',
    pronunciation: 'فونفتسيج',
    example: 'Das Buch hat fünfzig Seiten.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(38),
    german: 'hundert',
    arabic: 'مائة',
    pronunciation: 'هوندرت',
    example: 'Hundert Menschen waren da.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(39),
    german: 'tausend',
    arabic: 'ألف',
    pronunciation: 'تاوزند',
    example: 'Das Auto kostet tausend Euro.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(40),
    german: 'Million',
    arabic: 'مليون',
    pronunciation: 'مليون',
    example: 'Eine Million Menschen leben hier.',
    category: 'numbers',
    level: 'A2'
  },
  {
    id: generateId(41),
    german: 'erste',
    arabic: 'الأول',
    pronunciation: 'إرسته',
    example: 'Das ist mein erstes Auto.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(42),
    german: 'zweite',
    arabic: 'الثاني',
    pronunciation: 'تسفايته',
    example: 'Ich wohne im zweiten Stock.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(43),
    german: 'dritte',
    arabic: 'الثالث',
    pronunciation: 'دريته',
    example: 'Das ist das dritte Mal.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(44),
    german: 'letzte',
    arabic: 'الأخير',
    pronunciation: 'ليتسته',
    example: 'Das war das letzte Stück.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(45),
    german: 'einmal',
    arabic: 'مرة واحدة',
    pronunciation: 'آينمال',
    example: 'Ich war einmal in Berlin.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(46),
    german: 'zweimal',
    arabic: 'مرتان',
    pronunciation: 'تسفايمال',
    example: 'Ich gehe zweimal pro Woche.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(47),
    german: 'oft',
    arabic: 'غالبًا',
    pronunciation: 'أوفت',
    example: 'Ich gehe oft ins Kino.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(48),
    german: 'manchmal',
    arabic: 'أحيانًا',
    pronunciation: 'مانشمال',
    example: 'Manchmal regnet es hier.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(49),
    german: 'nie',
    arabic: 'أبدًا',
    pronunciation: 'ني',
    example: 'Ich trinke nie Alkohol.',
    category: 'numbers',
    level: 'A1'
  },

  // Colors (25 words)
  {
    id: generateId(50),
    german: 'rot',
    arabic: 'أحمر',
    pronunciation: 'روت',
    example: 'Das Auto ist rot.',
    category: 'colors',
    level: 'A1'
  },
  {
    id: generateId(51),
    german: 'blau',
    arabic: 'أزرق',
    pronunciation: 'بلاو',
    example: 'Der Himmel ist blau.',
    category: 'colors',
    level: 'A1'
  },
  {
    id: generateId(52),
    german: 'grün',
    arabic: 'أخضر',
    pronunciation: 'جرون',
    example: 'Die Blätter sind grün.',
    category: 'colors',
    level: 'A1'
  },
  {
    id: generateId(53),
    german: 'gelb',
    arabic: 'أصفر',
    pronunciation: 'جيلب',
    example: 'Die Sonne ist gelb.',
    category: 'colors',
    level: 'A1'
  },
  {
    id: generateId(54),
    german: 'schwarz',
    arabic: 'أسود',
    pronunciation: 'شفارتس',
    example: 'Meine Katze ist schwarz.',
    category: 'colors',
    level: 'A1'
  },
  {
    id: generateId(55),
    german: 'weiß',
    arabic: 'أبيض',
    pronunciation: 'فايس',
    example: 'Der Schnee ist weiß.',
    category: 'colors',
    level: 'A1'
  },
  {
    id: generateId(56),
    german: 'grau',
    arabic: 'رمادي',
    pronunciation: 'جراو',
    example: 'Die Wolken sind grau.',
    category: 'colors',
    level: 'A1'
  },
  {
    id: generateId(57),
    german: 'braun',
    arabic: 'بني',
    pronunciation: 'براون',
    example: 'Das Pferd ist braun.',
    category: 'colors',
    level: 'A1'
  },
  {
    id: generateId(58),
    german: 'orange',
    arabic: 'برتقالي',
    pronunciation: 'أورانجه',
    example: 'Die Orange ist orange.',
    category: 'colors',
    level: 'A1'
  },
  {
    id: generateId(59),
    german: 'rosa',
    arabic: 'وردي',
    pronunciation: 'روزا',
    example: 'Das Kleid ist rosa.',
    category: 'colors',
    level: 'A1'
  },
  {
    id: generateId(60),
    german: 'lila',
    arabic: 'بنفسجي',
    pronunciation: 'ليلا',
    example: 'Die Blume ist lila.',
    category: 'colors',
    level: 'A1'
  },
  {
    id: generateId(61),
    german: 'hell',
    arabic: 'فاتح',
    pronunciation: 'هيل',
    example: 'Das ist ein helles Blau.',
    category: 'colors',
    level: 'A1'
  },
  {
    id: generateId(62),
    german: 'dunkel',
    arabic: 'غامق',
    pronunciation: 'دونكل',
    example: 'Ich mag dunkle Farben.',
    category: 'colors',
    level: 'A1'
  },
  {
    id: generateId(63),
    german: 'bunt',
    arabic: 'ملون',
    pronunciation: 'بونت',
    example: 'Das Bild ist sehr bunt.',
    category: 'colors',
    level: 'A1'
  },
  {
    id: generateId(64),
    german: 'golden',
    arabic: 'ذهبي',
    pronunciation: 'جولدن',
    example: 'Der Ring ist golden.',
    category: 'colors',
    level: 'A2'
  },
  {
    id: generateId(65),
    german: 'silbern',
    arabic: 'فضي',
    pronunciation: 'زيلبرن',
    example: 'Das Auto ist silbern.',
    category: 'colors',
    level: 'A2'
  },
  {
    id: generateId(66),
    german: 'transparent',
    arabic: 'شفاف',
    pronunciation: 'ترانسبارنت',
    example: 'Das Glas ist transparent.',
    category: 'colors',
    level: 'A2'
  },
  {
    id: generateId(67),
    german: 'matt',
    arabic: 'باهت',
    pronunciation: 'مات',
    example: 'Die Farbe ist matt.',
    category: 'colors',
    level: 'A2'
  },
  {
    id: generateId(68),
    german: 'glänzend',
    arabic: 'لامع',
    pronunciation: 'جلانتسند',
    example: 'Das Metall ist glänzend.',
    category: 'colors',
    level: 'A2'
  },
  {
    id: generateId(69),
    german: 'beige',
    arabic: 'بيج',
    pronunciation: 'بايج',
    example: 'Die Wand ist beige.',
    category: 'colors',
    level: 'A2'
  },
  {
    id: generateId(70),
    german: 'türkis',
    arabic: 'تركوازي',
    pronunciation: 'توركيس',
    example: 'Das Meer ist türkis.',
    category: 'colors',
    level: 'A2'
  },
  {
    id: generateId(71),
    german: 'magenta',
    arabic: 'أرجواني',
    pronunciation: 'ماجنتا',
    example: 'Die Blume ist magenta.',
    category: 'colors',
    level: 'A2'
  },
  {
    id: generateId(72),
    german: 'khaki',
    arabic: 'كاكي',
    pronunciation: 'كاكي',
    example: 'Die Hose ist khaki.',
    category: 'colors',
    level: 'A2'
  },
  {
    id: generateId(73),
    german: 'neon',
    arabic: 'نيون',
    pronunciation: 'نيون',
    example: 'Das Licht ist neon.',
    category: 'colors',
    level: 'A2'
  },
  {
    id: generateId(74),
    german: 'pastell',
    arabic: 'باستيل',
    pronunciation: 'باستيل',
    example: 'Ich mag Pastellfarben.',
    category: 'colors',
    level: 'A2'
  },

  // Food and Drinks (80 words)
  {
    id: generateId(75),
    german: 'Brot',
    arabic: 'خبز',
    pronunciation: 'بروت',
    example: 'Ich esse gerne frisches Brot.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(76),
    german: 'Wasser',
    arabic: 'ماء',
    pronunciation: 'فاسر',
    example: 'Ich trinke viel Wasser.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(77),
    german: 'Milch',
    arabic: 'حليب',
    pronunciation: 'ميلش',
    example: 'Die Milch ist frisch.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(78),
    german: 'Kaffee',
    arabic: 'قهوة',
    pronunciation: 'كافيه',
    example: 'Ich trinke jeden Morgen Kaffee.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(79),
    german: 'Tee',
    arabic: 'شاي',
    pronunciation: 'تيه',
    example: 'Möchten Sie Tee oder Kaffee?',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(80),
    german: 'Saft',
    arabic: 'عصير',
    pronunciation: 'زافت',
    example: 'Der Orangensaft ist lecker.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(81),
    german: 'Bier',
    arabic: 'بيرة',
    pronunciation: 'بير',
    example: 'In Deutschland trinkt man gerne Bier.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(82),
    german: 'Wein',
    arabic: 'نبيذ',
    pronunciation: 'فاين',
    example: 'Zum Essen trinken wir Wein.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(83),
    german: 'Fleisch',
    arabic: 'لحم',
    pronunciation: 'فلايش',
    example: 'Ich esse kein Fleisch.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(84),
    german: 'Fisch',
    arabic: 'سمك',
    pronunciation: 'فيش',
    example: 'Fisch ist sehr gesund.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(85),
    german: 'Huhn',
    arabic: 'دجاج',
    pronunciation: 'هون',
    example: 'Das Huhn schmeckt gut.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(86),
    german: 'Schwein',
    arabic: 'خنزير',
    pronunciation: 'شفاين',
    example: 'Schweinefleisch ist in Deutschland beliebt.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(87),
    german: 'Rind',
    arabic: 'لحم بقر',
    pronunciation: 'ريند',
    example: 'Das Rindfleisch ist zart.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(88),
    german: 'Gemüse',
    arabic: 'خضروات',
    pronunciation: 'جيموزه',
    example: 'Gemüse ist sehr gesund.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(89),
    german: 'Obst',
    arabic: 'فواكه',
    pronunciation: 'أوبست',
    example: 'Ich esse gerne frisches Obst.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(90),
    german: 'Apfel',
    arabic: 'تفاحة',
    pronunciation: 'آبفل',
    example: 'Ein Apfel am Tag ist gesund.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(91),
    german: 'Banane',
    arabic: 'موزة',
    pronunciation: 'بانانه',
    example: 'Die Banane ist gelb.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(92),
    german: 'Orange',
    arabic: 'برتقالة',
    pronunciation: 'أورانجه',
    example: 'Die Orange ist süß.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(93),
    german: 'Tomate',
    arabic: 'طماطم',
    pronunciation: 'توماته',
    example: 'Die Tomate ist rot.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(94),
    german: 'Kartoffel',
    arabic: 'بطاطس',
    pronunciation: 'كارتوفل',
    example: 'Kartoffeln sind ein Grundnahrungsmittel.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(95),
    german: 'Zwiebel',
    arabic: 'بصل',
    pronunciation: 'تسفيبل',
    example: 'Die Zwiebel macht mich weinen.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(96),
    german: 'Knoblauch',
    arabic: 'ثوم',
    pronunciation: 'كنوبلاوخ',
    example: 'Knoblauch ist sehr gesund.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(97),
    german: 'Salat',
    arabic: 'سلطة',
    pronunciation: 'زالات',
    example: 'Ich esse einen grünen Salat.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(98),
    german: 'Reis',
    arabic: 'أرز',
    pronunciation: 'رايس',
    example: 'Reis passt zu vielen Gerichten.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(99),
    german: 'Nudeln',
    arabic: 'معكرونة',
    pronunciation: 'نودلن',
    example: 'Nudeln mit Tomatensoße sind lecker.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(100),
    german: 'Käse',
    arabic: 'جبن',
    pronunciation: 'كيزه',
    example: 'Deutscher Käse ist weltberühmt.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(101),
    german: 'Butter',
    arabic: 'زبدة',
    pronunciation: 'بوتر',
    example: 'Butter macht das Brot weich.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(102),
    german: 'Ei',
    arabic: 'بيضة',
    pronunciation: 'آي',
    example: 'Zum Frühstück esse ich ein Ei.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(103),
    german: 'Zucker',
    arabic: 'سكر',
    pronunciation: 'تسوكر',
    example: 'Zu viel Zucker ist ungesund.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(104),
    german: 'Salz',
    arabic: 'ملح',
    pronunciation: 'زالتس',
    example: 'Das Essen braucht mehr Salz.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(105),
    german: 'Pfeffer',
    arabic: 'فلفل',
    pronunciation: 'بفيفر',
    example: 'Schwarzer Pfeffer ist scharf.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(106),
    german: 'Öl',
    arabic: 'زيت',
    pronunciation: 'أول',
    example: 'Olivenöl ist sehr gesund.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(107),
    german: 'Essig',
    arabic: 'خل',
    pronunciation: 'إسيج',
    example: 'Essig macht den Salat sauer.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(108),
    german: 'Honig',
    arabic: 'عسل',
    pronunciation: 'هونيج',
    example: 'Honig ist süß und gesund.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(109),
    german: 'Marmelade',
    arabic: 'مربى',
    pronunciation: 'مارميلاده',
    example: 'Ich esse Brot mit Marmelade.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(110),
    german: 'Schokolade',
    arabic: 'شوكولاتة',
    pronunciation: 'شوكولاده',
    example: 'Schokolade macht glücklich.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(111),
    german: 'Kuchen',
    arabic: 'كعكة',
    pronunciation: 'كوخن',
    example: 'Der Kuchen schmeckt süß.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(112),
    german: 'Keks',
    arabic: 'بسكويت',
    pronunciation: 'كيكس',
    example: 'Kinder lieben Kekse.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(113),
    german: 'Eis',
    arabic: 'آيس كريم',
    pronunciation: 'آيس',
    example: 'Im Sommer esse ich gerne Eis.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(114),
    german: 'Pizza',
    arabic: 'بيتزا',
    pronunciation: 'بيتسا',
    example: 'Pizza ist bei Jugendlichen beliebt.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(115),
    german: 'Hamburger',
    arabic: 'هامبرجر',
    pronunciation: 'هامبورجر',
    example: 'Fast Food wie Hamburger ist ungesund.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(116),
    german: 'Suppe',
    arabic: 'شوربة',
    pronunciation: 'زوبه',
    example: 'Heiße Suppe wärmt im Winter.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(117),
    german: 'Sandwich',
    arabic: 'ساندويتش',
    pronunciation: 'زاندفيتش',
    example: 'Ein Sandwich ist ein schnelles Essen.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(118),
    german: 'Joghurt',
    arabic: 'زبادي',
    pronunciation: 'يوجورت',
    example: 'Joghurt ist gut für die Verdauung.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(119),
    german: 'Müsli',
    arabic: 'موسلي',
    pronunciation: 'موسلي',
    example: 'Müsli ist ein gesundes Frühstück.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(120),
    german: 'Cornflakes',
    arabic: 'كورن فليكس',
    pronunciation: 'كورنفليكس',
    example: 'Kinder essen gerne Cornflakes.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(121),
    german: 'Wurst',
    arabic: 'نقانق',
    pronunciation: 'فورست',
    example: 'Deutsche Wurst ist weltbekannt.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(122),
    german: 'Schinken',
    arabic: 'لحم خنزير مدخن',
    pronunciation: 'شينكن',
    example: 'Schinken ist eine Art Fleisch.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(123),
    german: 'Speck',
    arabic: 'لحم مقدد',
    pronunciation: 'شبيك',
    example: 'Speck macht das Essen fettig.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(124),
    german: 'Salami',
    arabic: 'سلامي',
    pronunciation: 'زالامي',
    example: 'Salami ist eine italienische Wurst.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(125),
    german: 'Thunfisch',
    arabic: 'تونة',
    pronunciation: 'تونفيش',
    example: 'Thunfisch ist ein großer Fisch.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(126),
    german: 'Lachs',
    arabic: 'سلمون',
    pronunciation: 'لاكس',
    example: 'Lachs ist ein teurer Fisch.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(127),
    german: 'Garnele',
    arabic: 'جمبري',
    pronunciation: 'جارنيله',
    example: 'Garnelen sind Meeresfrüchte.',
    category: 'food',
    level: 'A2'
  },
  {
    id: generateId(128),
    german: 'Muschel',
    arabic: 'محار',
    pronunciation: 'موشل',
    example: 'Muscheln leben im Meer.',
    category: 'food',
    level: 'A2'
  },
  {
    id: generateId(129),
    german: 'Krabben',
    arabic: 'سرطان البحر',
    pronunciation: 'كرابن',
    example: 'Krabben sind eine Delikatesse.',
    category: 'food',
    level: 'A2'
  },
  {
    id: generateId(130),
    german: 'Erdbeere',
    arabic: 'فراولة',
    pronunciation: 'إردبيره',
    example: 'Erdbeeren sind rot und süß.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(131),
    german: 'Kirsche',
    arabic: 'كرز',
    pronunciation: 'كيرشه',
    example: 'Kirschen sind kleine rote Früchte.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(132),
    german: 'Traube',
    arabic: 'عنب',
    pronunciation: 'تراوبه',
    example: 'Aus Trauben macht man Wein.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(133),
    german: 'Birne',
    arabic: 'إجاصة',
    pronunciation: 'بيرنه',
    example: 'Die Birne ist süß und saftig.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(134),
    german: 'Pfirsich',
    arabic: 'خوخ',
    pronunciation: 'بفيرزيش',
    example: 'Der Pfirsich hat eine weiche Haut.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(135),
    german: 'Ananas',
    arabic: 'أناناس',
    pronunciation: 'آناناس',
    example: 'Ananas ist eine tropische Frucht.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(136),
    german: 'Mango',
    arabic: 'مانجو',
    pronunciation: 'مانجو',
    example: 'Mango schmeckt sehr süß.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(137),
    german: 'Kiwi',
    arabic: 'كيوي',
    pronunciation: 'كيفي',
    example: 'Kiwi ist grün und sauer.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(138),
    german: 'Zitrone',
    arabic: 'ليمون',
    pronunciation: 'تسيترونه',
    example: 'Zitrone ist sehr sauer.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(139),
    german: 'Limette',
    arabic: 'ليمة',
    pronunciation: 'ليميته',
    example: 'Limette ist kleiner als Zitrone.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(140),
    german: 'Melone',
    arabic: 'شمام',
    pronunciation: 'ميلونه',
    example: 'Melone ist im Sommer erfrischend.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(141),
    german: 'Wassermelone',
    arabic: 'بطيخ',
    pronunciation: 'فاسرميلونه',
    example: 'Wassermelone ist rot und saftig.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(142),
    german: 'Kokosnuss',
    arabic: 'جوز الهند',
    pronunciation: 'كوكوسنوس',
    example: 'Kokosnuss wächst auf Palmen.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(143),
    german: 'Nuss',
    arabic: 'جوز',
    pronunciation: 'نوس',
    example: 'Nüsse sind gesund für das Gehirn.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(144),
    german: 'Mandel',
    arabic: 'لوز',
    pronunciation: 'مانديل',
    example: 'Mandeln sind sehr nahrhaft.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(145),
    german: 'Haselnuss',
    arabic: 'بندق',
    pronunciation: 'هازلنوس',
    example: 'Haselnüsse sind in Schokolade.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(146),
    german: 'Erdnuss',
    arabic: 'فول سوداني',
    pronunciation: 'إردنوس',
    example: 'Erdnüsse wachsen unter der Erde.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(147),
    german: 'Rosine',
    arabic: 'زبيب',
    pronunciation: 'روزينه',
    example: 'Rosinen sind getrocknete Trauben.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(148),
    german: 'Dattel',
    arabic: 'تمر',
    pronunciation: 'داتل',
    example: 'Datteln sind sehr süß.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(149),
    german: 'Feige',
    arabic: 'تين',
    pronunciation: 'فايجه',
    example: 'Feigen sind mediterrane Früchte.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(150),
    german: 'Avocado',
    arabic: 'أفوكادو',
    pronunciation: 'آفوكادو',
    example: 'Avocado ist sehr gesund.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(151),
    german: 'Gurke',
    arabic: 'خيار',
    pronunciation: 'جوركه',
    example: 'Gurke ist sehr erfrischend.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(152),
    german: 'Paprika',
    arabic: 'فلفل حلو',
    pronunciation: 'بابريكا',
    example: 'Paprika gibt es in vielen Farben.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(153),
    german: 'Aubergine',
    arabic: 'باذنجان',
    pronunciation: 'آوبرجينه',
    example: 'Aubergine ist lila und groß.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(154),
    german: 'Zucchini',
    arabic: 'كوسة',
    pronunciation: 'تسوكيني',
    example: 'Zucchini ist grün und lang.',
    category: 'food',
    level: 'A1'
  },

  // Family (30 words)
  {
    id: generateId(155),
    german: 'Familie',
    arabic: 'عائلة',
    pronunciation: 'فاميليه',
    example: 'Meine Familie ist groß.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(156),
    german: 'Mutter',
    arabic: 'أم',
    pronunciation: 'موتر',
    example: 'Meine Mutter kocht gerne.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(157),
    german: 'Vater',
    arabic: 'أب',
    pronunciation: 'فاتر',
    example: 'Mein Vater arbeitet viel.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(158),
    german: 'Eltern',
    arabic: 'والدان',
    pronunciation: 'إلترن',
    example: 'Meine Eltern sind sehr nett.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(159),
    german: 'Sohn',
    arabic: 'ابن',
    pronunciation: 'زون',
    example: 'Mein Sohn ist fünf Jahre alt.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(160),
    german: 'Tochter',
    arabic: 'ابنة',
    pronunciation: 'توختر',
    example: 'Meine Tochter geht zur Schule.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(161),
    german: 'Kind',
    arabic: 'طفل',
    pronunciation: 'كيند',
    example: 'Das Kind spielt im Garten.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(162),
    german: 'Kinder',
    arabic: 'أطفال',
    pronunciation: 'كيندر',
    example: 'Die Kinder sind laut.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(163),
    german: 'Bruder',
    arabic: 'أخ',
    pronunciation: 'برودر',
    example: 'Mein Bruder ist älter als ich.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(164),
    german: 'Schwester',
    arabic: 'أخت',
    pronunciation: 'شفيستر',
    example: 'Meine Schwester studiert Medizin.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(165),
    german: 'Geschwister',
    arabic: 'إخوة وأخوات',
    pronunciation: 'جيشفيستر',
    example: 'Ich habe drei Geschwister.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(166),
    german: 'Großmutter',
    arabic: 'جدة',
    pronunciation: 'جروسموتر',
    example: 'Meine Großmutter ist sehr weise.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(167),
    german: 'Großvater',
    arabic: 'جد',
    pronunciation: 'جروسفاتر',
    example: 'Mein Großvater erzählt gerne Geschichten.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(168),
    german: 'Großeltern',
    arabic: 'أجداد',
    pronunciation: 'جروسإلترن',
    example: 'Meine Großeltern leben auf dem Land.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(169),
    german: 'Onkel',
    arabic: 'عم / خال',
    pronunciation: 'أونكل',
    example: 'Mein Onkel ist sehr lustig.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(170),
    german: 'Tante',
    arabic: 'عمة / خالة',
    pronunciation: 'تانته',
    example: 'Meine Tante backt leckere Kuchen.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(171),
    german: 'Cousin',
    arabic: 'ابن عم / ابن خال',
    pronunciation: 'كوزين',
    example: 'Mein Cousin wohnt in Berlin.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(172),
    german: 'Cousine',
    arabic: 'ابنة عم / ابنة خال',
    pronunciation: 'كوزينه',
    example: 'Meine Cousine ist sehr intelligent.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(173),
    german: 'Ehemann',
    arabic: 'زوج',
    pronunciation: 'إيهمان',
    example: 'Ihr Ehemann ist Arzt.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(174),
    german: 'Ehefrau',
    arabic: 'زوجة',
    pronunciation: 'إيهفراو',
    example: 'Seine Ehefrau ist Lehrerin.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(175),
    german: 'Mann',
    arabic: 'رجل / زوج',
    pronunciation: 'مان',
    example: 'Der Mann arbeitet im Büro.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(176),
    german: 'Frau',
    arabic: 'امرأة / زوجة',
    pronunciation: 'فراو',
    example: 'Die Frau kauft im Supermarkt ein.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(177),
    german: 'Freund',
    arabic: 'صديق',
    pronunciation: 'فرويند',
    example: 'Mein bester Freund heißt Tom.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(178),
    german: 'Freundin',
    arabic: 'صديقة',
    pronunciation: 'فرويندين',
    example: 'Meine Freundin studiert Kunst.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(179),
    german: 'Baby',
    arabic: 'طفل رضيع',
    pronunciation: 'بيبي',
    example: 'Das Baby schläft viel.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(180),
    german: 'Teenager',
    arabic: 'مراهق',
    pronunciation: 'تينيجر',
    example: 'Teenager hören gerne Musik.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(181),
    german: 'Erwachsene',
    arabic: 'بالغ',
    pronunciation: 'إرفاكسنه',
    example: 'Erwachsene haben Verantwortung.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(182),
    german: 'Nachbar',
    arabic: 'جار',
    pronunciation: 'ناخبار',
    example: 'Mein Nachbar ist sehr freundlich.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(183),
    german: 'Nachbarin',
    arabic: 'جارة',
    pronunciation: 'ناخبارين',
    example: 'Die Nachbarin hat einen Hund.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(184),
    german: 'Verwandte',
    arabic: 'أقارب',
    pronunciation: 'فيرفانته',
    example: 'Alle Verwandten kommen zum Fest.',
    category: 'family',
    level: 'A1'
  },

  // Professions (50 words)
  {
    id: generateId(185),
    german: 'Lehrer',
    arabic: 'معلم',
    pronunciation: 'ليرر',
    example: 'Er ist ein guter Lehrer.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(186),
    german: 'Lehrerin',
    arabic: 'معلمة',
    pronunciation: 'ليررين',
    example: 'Die Lehrerin erklärt die Aufgabe.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(187),
    german: 'Arzt',
    arabic: 'طبيب',
    pronunciation: 'آرتست',
    example: 'Der Arzt untersucht den Patienten.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(188),
    german: 'Ärztin',
    arabic: 'طبيبة',
    pronunciation: 'آرتستين',
    example: 'Die Ärztin ist sehr kompetent.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(189),
    german: 'Krankenschwester',
    arabic: 'ممرضة',
    pronunciation: 'كرانكنشفيستر',
    example: 'Die Krankenschwester hilft den Patienten.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(190),
    german: 'Polizist',
    arabic: 'شرطي',
    pronunciation: 'بوليتسيست',
    example: 'Der Polizist regelt den Verkehr.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(191),
    german: 'Feuerwehrmann',
    arabic: 'رجل إطفاء',
    pronunciation: 'فويرفيرمان',
    example: 'Der Feuerwehrmann löscht das Feuer.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(192),
    german: 'Koch',
    arabic: 'طباخ',
    pronunciation: 'كوخ',
    example: 'Der Koch bereitet das Essen zu.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(193),
    german: 'Köchin',
    arabic: 'طباخة',
    pronunciation: 'كوخين',
    example: 'Die Köchin macht leckere Gerichte.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(194),
    german: 'Verkäufer',
    arabic: 'بائع',
    pronunciation: 'فيركويفر',
    example: 'Der Verkäufer ist sehr freundlich.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(195),
    german: 'Verkäuferin',
    arabic: 'بائعة',
    pronunciation: 'فيركويفرين',
    example: 'Die Verkäuferin berät die Kunden.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(196),
    german: 'Mechaniker',
    arabic: 'ميكانيكي',
    pronunciation: 'ميخانيكر',
    example: 'Der Mechaniker repariert Autos.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(197),
    german: 'Elektriker',
    arabic: 'كهربائي',
    pronunciation: 'إليكتريكر',
    example: 'Der Elektriker installiert Lampen.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(198),
    german: 'Klempner',
    arabic: 'سباك',
    pronunciation: 'كليمبنر',
    example: 'Der Klempner repariert die Heizung.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(199),
    german: 'Friseur',
    arabic: 'حلاق',
    pronunciation: 'فريزور',
    example: 'Der Friseur schneidet Haare.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(200),
    german: 'Friseurin',
    arabic: 'حلاقة',
    pronunciation: 'فريزورين',
    example: 'Die Friseurin macht schöne Frisuren.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(201),
    german: 'Bäcker',
    arabic: 'خباز',
    pronunciation: 'بيكر',
    example: 'Der Bäcker backt frisches Brot.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(202),
    german: 'Bäckerin',
    arabic: 'خبازة',
    pronunciation: 'بيكرين',
    example: 'Die Bäckerin macht leckere Kuchen.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(203),
    german: 'Metzger',
    arabic: 'جزار',
    pronunciation: 'ميتسجر',
    example: 'Der Metzger verkauft Fleisch.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(204),
    german: 'Postbote',
    arabic: 'ساعي البريد',
    pronunciation: 'بوستبوته',
    example: 'Der Postbote bringt die Post.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(205),
    german: 'Taxifahrer',
    arabic: 'سائق تاكسي',
    pronunciation: 'تاكسيفارر',
    example: 'Der Taxifahrer kennt die Stadt gut.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(206),
    german: 'Busfahrer',
    arabic: 'سائق حافلة',
    pronunciation: 'بوسفارر',
    example: 'Der Busfahrer ist pünktlich.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(207),
    german: 'Pilot',
    arabic: 'طيار',
    pronunciation: 'بيلوت',
    example: 'Der Pilot fliegt das Flugzeug.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(208),
    german: 'Stewardess',
    arabic: 'مضيفة طيران',
    pronunciation: 'شتيفاردس',
    example: 'Die Stewardess serviert das Essen.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(209),
    german: 'Sekretärin',
    arabic: 'سكرتيرة',
    pronunciation: 'زيكريتيرين',
    example: 'Die Sekretärin organisiert Termine.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(210),
    german: 'Manager',
    arabic: 'مدير',
    pronunciation: 'مانيجر',
    example: 'Der Manager leitet das Team.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(211),
    german: 'Ingenieur',
    arabic: 'مهندس',
    pronunciation: 'إنجينيور',
    example: 'Der Ingenieur plant Gebäude.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(212),
    german: 'Architekt',
    arabic: 'معماري',
    pronunciation: 'آرشيتيكت',
    example: 'Der Architekt entwirft Häuser.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(213),
    german: 'Anwalt',
    arabic: 'محامي',
    pronunciation: 'آنفالت',
    example: 'Der Anwalt verteidigt seinen Mandanten.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(214),
    german: 'Richter',
    arabic: 'قاضي',
    pronunciation: 'ريختر',
    example: 'Der Richter entscheidet über das Urteil.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(215),
    german: 'Journalist',
    arabic: 'صحفي',
    pronunciation: 'جورناليست',
    example: 'Der Journalist schreibt Artikel.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(216),
    german: 'Fotograf',
    arabic: 'مصور',
    pronunciation: 'فوتوجراف',
    example: 'Der Fotograf macht schöne Bilder.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(217),
    german: 'Künstler',
    arabic: 'فنان',
    pronunciation: 'كونستلر',
    example: 'Der Künstler malt Bilder.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(218),
    german: 'Musiker',
    arabic: 'موسيقي',
    pronunciation: 'موزيكر',
    example: 'Der Musiker spielt Gitarre.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(219),
    german: 'Sänger',
    arabic: 'مغني',
    pronunciation: 'زينجر',
    example: 'Der Sänger hat eine schöne Stimme.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(220),
    german: 'Sängerin',
    arabic: 'مغنية',
    pronunciation: 'زينجرين',
    example: 'Die Sängerin singt ein Lied.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(221),
    german: 'Schauspieler',
    arabic: 'ممثل',
    pronunciation: 'شاوشبيلر',
    example: 'Der Schauspieler spielt im Film.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(222),
    german: 'Schauspielerin',
    arabic: 'ممثلة',
    pronunciation: 'شاوشبيلرين',
    example: 'Die Schauspielerin ist sehr talentiert.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(223),
    german: 'Tänzer',
    arabic: 'راقص',
    pronunciation: 'تينتسر',
    example: 'Der Tänzer bewegt sich elegant.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(224),
    german: 'Tänzerin',
    arabic: 'راقصة',
    pronunciation: 'تينتسرين',
    example: 'Die Tänzerin tanzt Ballett.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(225),
    german: 'Sportler',
    arabic: 'رياضي',
    pronunciation: 'شبورتلر',
    example: 'Der Sportler trainiert jeden Tag.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(226),
    german: 'Sportlerin',
    arabic: 'رياضية',
    pronunciation: 'شبورتلرين',
    example: 'Die Sportlerin gewinnt viele Medaillen.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(227),
    german: 'Trainer',
    arabic: 'مدرب',
    pronunciation: 'ترينر',
    example: 'Der Trainer motiviert das Team.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(228),
    german: 'Trainerin',
    arabic: 'مدربة',
    pronunciation: 'ترينرين',
    example: 'Die Trainerin erklärt die Übungen.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(229),
    german: 'Student',
    arabic: 'طالب',
    pronunciation: 'شتودنت',
    example: 'Der Student lernt für die Prüfung.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(230),
    german: 'Studentin',
    arabic: 'طالبة',
    pronunciation: 'شتودنتين',
    example: 'Die Studentin studiert Medizin.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(231),
    german: 'Professor',
    arabic: 'أستاذ جامعي',
    pronunciation: 'بروفيسور',
    example: 'Der Professor hält eine Vorlesung.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(232),
    german: 'Wissenschaftler',
    arabic: 'عالم',
    pronunciation: 'فيسنشافتلر',
    example: 'Der Wissenschaftler forscht im Labor.',
    category: 'professions',
    level: 'A2'
  },
  {
    id: generateId(233),
    german: 'Bibliothekar',
    arabic: 'أمين مكتبة',
    pronunciation: 'بيبليوتيكار',
    example: 'Der Bibliothekar hilft bei der Buchsuche.',
    category: 'professions',
    level: 'A2'
  },
  {
    id: generateId(234),
    german: 'Gärtner',
    arabic: 'بستاني',
    pronunciation: 'جيرتنر',
    example: 'Der Gärtner pflegt die Pflanzen.',
    category: 'professions',
    level: 'A1'
  },

  // Weather (25 words)
  {
    id: generateId(235),
    german: 'Wetter',
    arabic: 'طقس',
    pronunciation: 'فيتر',
    example: 'Das Wetter ist heute schön.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(236),
    german: 'Sonne',
    arabic: 'شمس',
    pronunciation: 'زونه',
    example: 'Die Sonne scheint heute.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(237),
    german: 'Regen',
    arabic: 'مطر',
    pronunciation: 'ريجن',
    example: 'Es gibt heute Regen.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(238),
    german: 'Schnee',
    arabic: 'ثلج',
    pronunciation: 'شني',
    example: 'Im Winter fällt Schnee.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(239),
    german: 'Wind',
    arabic: 'رياح',
    pronunciation: 'فيند',
    example: 'Der Wind ist heute stark.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(240),
    german: 'Wolke',
    arabic: 'سحابة',
    pronunciation: 'فولكه',
    example: 'Am Himmel sind viele Wolken.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(241),
    german: 'Himmel',
    arabic: 'سماء',
    pronunciation: 'هيمل',
    example: 'Der Himmel ist blau.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(242),
    german: 'Sturm',
    arabic: 'عاصفة',
    pronunciation: 'شتورم',
    example: 'Der Sturm ist gefährlich.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(243),
    german: 'Gewitter',
    arabic: 'عاصفة رعدية',
    pronunciation: 'جيفيتر',
    example: 'Das Gewitter ist laut.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(244),
    german: 'Blitz',
    arabic: 'برق',
    pronunciation: 'بليتس',
    example: 'Der Blitz ist hell.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(245),
    german: 'Donner',
    arabic: 'رعد',
    pronunciation: 'دونر',
    example: 'Der Donner ist sehr laut.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(246),
    german: 'Nebel',
    arabic: 'ضباب',
    pronunciation: 'نيبل',
    example: 'Der Nebel macht die Sicht schlecht.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(247),
    german: 'Hagel',
    arabic: 'برد',
    pronunciation: 'هاجل',
    example: 'Hagel kann Autos beschädigen.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(248),
    german: 'Frost',
    arabic: 'صقيع',
    pronunciation: 'فروست',
    example: 'Frost macht die Straßen glatt.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(249),
    german: 'Eis',
    arabic: 'جليد',
    pronunciation: 'آيس',
    example: 'Das Eis auf dem See ist dick.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(250),
    german: 'Temperatur',
    arabic: 'درجة الحرارة',
    pronunciation: 'تيمبيراتور',
    example: 'Die Temperatur ist 20 Grad.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(251),
    german: 'warm',
    arabic: 'دافئ',
    pronunciation: 'فارم',
    example: 'Das Wetter ist warm.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(252),
    german: 'kalt',
    arabic: 'بارد',
    pronunciation: 'كالت',
    example: 'Im Winter ist es kalt.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(253),
    german: 'heiß',
    arabic: 'حار',
    pronunciation: 'هايس',
    example: 'Im Sommer ist es heiß.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(254),
    german: 'kühl',
    arabic: 'بارد قليلاً',
    pronunciation: 'كول',
    example: 'Der Abend ist kühl.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(255),
    german: 'feucht',
    arabic: 'رطب',
    pronunciation: 'فويشت',
    example: 'Die Luft ist feucht.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(256),
    german: 'trocken',
    arabic: 'جاف',
    pronunciation: 'تروكن',
    example: 'Das Klima ist trocken.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(257),
    german: 'sonnig',
    arabic: 'مشمس',
    pronunciation: 'زونيج',
    example: 'Heute ist es sonnig.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(258),
    german: 'regnerisch',
    arabic: 'ممطر',
    pronunciation: 'ريجنريش',
    example: 'Das Wetter ist regnerisch.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(259),
    german: 'bewölkt',
    arabic: 'غائم',
    pronunciation: 'بيفولكت',
    example: 'Der Himmel ist bewölkt.',
    category: 'weather',
    level: 'A1'
  },

  // Transportation (40 words)
  {
    id: generateId(260),
    german: 'Auto',
    arabic: 'سيارة',
    pronunciation: 'آوتو',
    example: 'Ich fahre mit dem Auto zur Arbeit.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(261),
    german: 'Bus',
    arabic: 'حافلة',
    pronunciation: 'بوس',
    example: 'Der Bus kommt um 8 Uhr.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(262),
    german: 'Zug',
    arabic: 'قطار',
    pronunciation: 'تسوج',
    example: 'Der Zug fährt um 9 Uhr ab.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(263),
    german: 'Flugzeug',
    arabic: 'طائرة',
    pronunciation: 'فلوجتسويج',
    example: 'Das Flugzeug fliegt nach Berlin.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(264),
    german: 'Schiff',
    arabic: 'سفينة',
    pronunciation: 'شيف',
    example: 'Das Schiff fährt über das Meer.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(265),
    german: 'Fahrrad',
    arabic: 'دراجة هوائية',
    pronunciation: 'فارراد',
    example: 'Ich fahre gerne Fahrrad.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(266),
    german: 'Motorrad',
    arabic: 'دراجة نارية',
    pronunciation: 'موتورراد',
    example: 'Das Motorrad ist schnell.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(267),
    german: 'Taxi',
    arabic: 'تاكسي',
    pronunciation: 'تاكسي',
    example: 'Ich nehme ein Taxi zum Flughafen.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(268),
    german: 'U-Bahn',
    arabic: 'مترو',
    pronunciation: 'أو-بان',
    example: 'Die U-Bahn ist schnell.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(269),
    german: 'Straßenbahn',
    arabic: 'ترام',
    pronunciation: 'شتراسنبان',
    example: 'Die Straßenbahn fährt durch die Stadt.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(270),
    german: 'Lastwagen',
    arabic: 'شاحنة',
    pronunciation: 'لاستفاجن',
    example: 'Der Lastwagen transportiert Waren.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(271),
    german: 'Lieferwagen',
    arabic: 'شاحنة صغيرة',
    pronunciation: 'ليفرفاجن',
    example: 'Der Lieferwagen bringt Pakete.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(272),
    german: 'Roller',
    arabic: 'سكوتر',
    pronunciation: 'رولر',
    example: 'Der Roller ist praktisch in der Stadt.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(273),
    german: 'Skateboard',
    arabic: 'لوح التزلج',
    pronunciation: 'سكيتبورد',
    example: 'Jugendliche fahren gerne Skateboard.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(274),
    german: 'Hubschrauber',
    arabic: 'مروحية',
    pronunciation: 'هوبشراوبر',
    example: 'Der Hubschrauber fliegt über die Stadt.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(275),
    german: 'Boot',
    arabic: 'قارب',
    pronunciation: 'بوت',
    example: 'Das Boot schwimmt auf dem See.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(276),
    german: 'Yacht',
    arabic: 'يخت',
    pronunciation: 'ياخت',
    example: 'Die Yacht ist sehr luxuriös.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(277),
    german: 'Fähre',
    arabic: 'عبارة',
    pronunciation: 'فيره',
    example: 'Die Fähre verbindet die Inseln.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(278),
    german: 'Bahnhof',
    arabic: 'محطة قطار',
    pronunciation: 'بانهوف',
    example: 'Der Bahnhof ist sehr groß.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(279),
    german: 'Flughafen',
    arabic: 'مطار',
    pronunciation: 'فلوجهافن',
    example: 'Der Flughafen ist weit von der Stadt.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(280),
    german: 'Bushaltestelle',
    arabic: 'موقف حافلة',
    pronunciation: 'بوسهالتشتيله',
    example: 'Die Bushaltestelle ist hier.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(281),
    german: 'Parkplatz',
    arabic: 'موقف سيارات',
    pronunciation: 'باركبلاتس',
    example: 'Der Parkplatz ist voll.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(282),
    german: 'Garage',
    arabic: 'كراج',
    pronunciation: 'جاراجه',
    example: 'Das Auto steht in der Garage.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(283),
    german: 'Tankstelle',
    arabic: 'محطة وقود',
    pronunciation: 'تانكشتيله',
    example: 'Ich muss zur Tankstelle.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(284),
    german: 'Benzin',
    arabic: 'بنزين',
    pronunciation: 'بنتسين',
    example: 'Das Auto braucht Benzin.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(285),
    german: 'Diesel',
    arabic: 'ديزل',
    pronunciation: 'ديزل',
    example: 'Der Lastwagen fährt mit Diesel.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(286),
    german: 'Führerschein',
    arabic: 'رخصة قيادة',
    pronunciation: 'فورشاين',
    example: 'Ich habe meinen Führerschein.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(287),
    german: 'Ticket',
    arabic: 'تذكرة',
    pronunciation: 'تيكت',
    example: 'Ich kaufe ein Ticket für den Zug.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(288),
    german: 'Fahrkarte',
    arabic: 'تذكرة سفر',
    pronunciation: 'فاركارته',
    example: 'Die Fahrkarte kostet 5 Euro.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(289),
    german: 'Reise',
    arabic: 'رحلة',
    pronunciation: 'رايزه',
    example: 'Die Reise war sehr schön.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(290),
    german: 'Verkehr',
    arabic: 'مرور',
    pronunciation: 'فيركير',
    example: 'Der Verkehr ist heute stark.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(291),
    german: 'Stau',
    arabic: 'ازدحام مروري',
    pronunciation: 'شتاو',
    example: 'Wegen des Staus bin ich zu spät.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(292),
    german: 'Ampel',
    arabic: 'إشارة مرور',
    pronunciation: 'آمبل',
    example: 'Die Ampel ist rot.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(293),
    german: 'Straße',
    arabic: 'شارع',
    pronunciation: 'شتراسه',
    example: 'Die Straße ist breit.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(294),
    german: 'Autobahn',
    arabic: 'طريق سريع',
    pronunciation: 'آوتوبان',
    example: 'Auf der Autobahn fährt man schnell.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(295),
    german: 'Brücke',
    arabic: 'جسر',
    pronunciation: 'بروكه',
    example: 'Die Brücke überquert den Fluss.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(296),
    german: 'Tunnel',
    arabic: 'نفق',
    pronunciation: 'تونل',
    example: 'Der Tunnel geht durch den Berg.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(297),
    german: 'Kreuzung',
    arabic: 'تقاطع',
    pronunciation: 'كرويتسونج',
    example: 'An der Kreuzung biege ich links ab.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(298),
    german: 'Gehweg',
    arabic: 'رصيف',
    pronunciation: 'جيفيج',
    example: 'Fußgänger gehen auf dem Gehweg.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(299),
    german: 'Fahrradweg',
    arabic: 'مسار دراجات',
    pronunciation: 'فارادفيج',
    example: 'Der Fahrradweg ist sicher.',
    category: 'transportation',
    level: 'A1'
  },

  // Time (50 words)
  {
    id: generateId(300),
    german: 'Zeit',
    arabic: 'وقت',
    pronunciation: 'تسايت',
    example: 'Ich habe keine Zeit.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(301),
    german: 'Stunde',
    arabic: 'ساعة',
    pronunciation: 'شتونده',
    example: 'Eine Stunde hat 60 Minuten.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(302),
    german: 'Minute',
    arabic: 'دقيقة',
    pronunciation: 'مينوته',
    example: 'Warte eine Minute!',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(303),
    german: 'Sekunde',
    arabic: 'ثانية',
    pronunciation: 'زيكونده',
    example: 'Eine Sekunde ist sehr kurz.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(304),
    german: 'Tag',
    arabic: 'يوم',
    pronunciation: 'تاج',
    example: 'Heute ist ein schöner Tag.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(305),
    german: 'Woche',
    arabic: 'أسبوع',
    pronunciation: 'فوخه',
    example: 'Eine Woche hat sieben Tage.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(306),
    german: 'Monat',
    arabic: 'شهر',
    pronunciation: 'مونات',
    example: 'Ein Jahr hat zwölf Monate.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(307),
    german: 'Jahr',
    arabic: 'سنة',
    pronunciation: 'يار',
    example: 'Ich bin 25 Jahre alt.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(308),
    german: 'heute',
    arabic: 'اليوم',
    pronunciation: 'هويته',
    example: 'Heute ist Montag.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(309),
    german: 'gestern',
    arabic: 'أمس',
    pronunciation: 'جيسترن',
    example: 'Gestern war Sonntag.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(310),
    german: 'morgen',
    arabic: 'غدًا',
    pronunciation: 'مورجن',
    example: 'Morgen ist Dienstag.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(311),
    german: 'vorgestern',
    arabic: 'أول أمس',
    pronunciation: 'فورجيسترن',
    example: 'Vorgestern war Samstag.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(312),
    german: 'übermorgen',
    arabic: 'بعد غد',
    pronunciation: 'أوبرمورجن',
    example: 'Übermorgen ist Mittwoch.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(313),
    german: 'jetzt',
    arabic: 'الآن',
    pronunciation: 'يتست',
    example: 'Ich muss jetzt gehen.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(314),
    german: 'später',
    arabic: 'لاحقًا',
    pronunciation: 'شبيتر',
    example: 'Wir sehen uns später.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(315),
    german: 'früher',
    arabic: 'سابقًا',
    pronunciation: 'فروهر',
    example: 'Früher war alles anders.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(316),
    german: 'bald',
    arabic: 'قريبًا',
    pronunciation: 'بالد',
    example: 'Ich komme bald zurück.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(317),
    german: 'sofort',
    arabic: 'فورًا',
    pronunciation: 'زوفورت',
    example: 'Komm sofort her!',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(318),
    german: 'gleich',
    arabic: 'حالاً',
    pronunciation: 'جلايش',
    example: 'Ich bin gleich da.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(319),
    german: 'Morgen',
    arabic: 'صباح',
    pronunciation: 'مورجن',
    example: 'Am Morgen trinke ich Kaffee.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(320),
    german: 'Mittag',
    arabic: 'ظهر',
    pronunciation: 'ميتاج',
    example: 'Zu Mittag esse ich Suppe.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(321),
    german: 'Nachmittag',
    arabic: 'بعد الظهر',
    pronunciation: 'ناخميتاج',
    example: 'Am Nachmittag arbeite ich.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(322),
    german: 'Abend',
    arabic: 'مساء',
    pronunciation: 'آبند',
    example: 'Am Abend sehe ich fern.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(323),
    german: 'Nacht',
    arabic: 'ليل',
    pronunciation: 'ناخت',
    example: 'In der Nacht schlafe ich.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(324),
    german: 'Mitternacht',
    arabic: 'منتصف الليل',
    pronunciation: 'ميترناخت',
    example: 'Um Mitternacht beginnt das neue Jahr.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(325),
    german: 'Montag',
    arabic: 'الاثنين',
    pronunciation: 'مونتاج',
    example: 'Montag ist der erste Arbeitstag.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(326),
    german: 'Dienstag',
    arabic: 'الثلاثاء',
    pronunciation: 'دينستاج',
    example: 'Dienstag habe ich einen Termin.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(327),
    german: 'Mittwoch',
    arabic: 'الأربعاء',
    pronunciation: 'ميتفوخ',
    example: 'Mittwoch ist die Mitte der Woche.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(328),
    german: 'Donnerstag',
    arabic: 'الخميس',
    pronunciation: 'دونرستاج',
    example: 'Donnerstag gehe ich einkaufen.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(329),
    german: 'Freitag',
    arabic: 'الجمعة',
    pronunciation: 'فرايتاج',
    example: 'Freitag ist der letzte Arbeitstag.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(330),
    german: 'Samstag',
    arabic: 'السبت',
    pronunciation: 'زامستاج',
    example: 'Samstag ist Wochenende.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(331),
    german: 'Sonntag',
    arabic: 'الأحد',
    pronunciation: 'زونتاج',
    example: 'Sonntag ruhe ich mich aus.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(332),
    german: 'Wochenende',
    arabic: 'نهاية الأسبوع',
    pronunciation: 'فوخنإنده',
    example: 'Am Wochenende entspanne ich.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(333),
    german: 'Januar',
    arabic: 'يناير',
    pronunciation: 'يانوار',
    example: 'Januar ist der erste Monat.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(334),
    german: 'Februar',
    arabic: 'فبراير',
    pronunciation: 'فيبروار',
    example: 'Februar ist der kürzeste Monat.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(335),
    german: 'März',
    arabic: 'مارس',
    pronunciation: 'ميرتس',
    example: 'Im März beginnt der Frühling.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(336),
    german: 'April',
    arabic: 'أبريل',
    pronunciation: 'آبريل',
    example: 'April macht, was er will.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(337),
    german: 'Mai',
    arabic: 'مايو',
    pronunciation: 'ماي',
    example: 'Im Mai blühen die Blumen.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(338),
    german: 'Juni',
    arabic: 'يونيو',
    pronunciation: 'يوني',
    example: 'Juni ist ein warmer Monat.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(339),
    german: 'Juli',
    arabic: 'يوليو',
    pronunciation: 'يولي',
    example: 'Juli ist Urlaubszeit.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(340),
    german: 'August',
    arabic: 'أغسطس',
    pronunciation: 'آوجوست',
    example: 'August ist sehr heiß.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(341),
    german: 'September',
    arabic: 'سبتمبر',
    pronunciation: 'زيبتيمبر',
    example: 'September ist Herbstbeginn.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(342),
    german: 'Oktober',
    arabic: 'أكتوبر',
    pronunciation: 'أوكتوبر',
    example: 'Oktober ist bunt.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(343),
    german: 'November',
    arabic: 'نوفمبر',
    pronunciation: 'نوفيمبر',
    example: 'November ist oft neblig.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(344),
    german: 'Dezember',
    arabic: 'ديسمبر',
    pronunciation: 'ديتسيمبر',
    example: 'Dezember ist Weihnachtszeit.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(345),
    german: 'Frühling',
    arabic: 'ربيع',
    pronunciation: 'فروهلينج',
    example: 'Im Frühling wird es warm.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(346),
    german: 'Sommer',
    arabic: 'صيف',
    pronunciation: 'زومر',
    example: 'Der Sommer ist heiß.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(347),
    german: 'Herbst',
    arabic: 'خريف',
    pronunciation: 'هيربست',
    example: 'Im Herbst fallen die Blätter.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(348),
    german: 'Winter',
    arabic: 'شتاء',
    pronunciation: 'فينتر',
    example: 'Im Winter schneit es.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(349),
    german: 'Uhr',
    arabic: 'ساعة',
    pronunciation: 'أور',
    example: 'Wie spät ist es? Es ist drei Uhr.',
    category: 'time',
    level: 'A1'
  },

  // Animals (60 words)
  {
    id: generateId(350),
    german: 'Tier',
    arabic: 'حيوان',
    pronunciation: 'تير',
    example: 'Das Tier ist groß.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(351),
    german: 'Hund',
    arabic: 'كلب',
    pronunciation: 'هوند',
    example: 'Der Hund bellt.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(352),
    german: 'Katze',
    arabic: 'قطة',
    pronunciation: 'كاتسه',
    example: 'Die Katze schläft.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(353),
    german: 'Pferd',
    arabic: 'حصان',
    pronunciation: 'بفيرد',
    example: 'Das Pferd läuft schnell.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(354),
    german: 'Kuh',
    arabic: 'بقرة',
    pronunciation: 'كو',
    example: 'Die Kuh gibt Milch.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(355),
    german: 'Schwein',
    arabic: 'خنزير',
    pronunciation: 'شفاين',
    example: 'Das Schwein ist rosa.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(356),
    german: 'Schaf',
    arabic: 'خروف',
    pronunciation: 'شاف',
    example: 'Das Schaf hat weiße Wolle.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(357),
    german: 'Ziege',
    arabic: 'ماعز',
    pronunciation: 'تسيجه',
    example: 'Die Ziege klettert auf Berge.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(358),
    german: 'Huhn',
    arabic: 'دجاجة',
    pronunciation: 'هون',
    example: 'Das Huhn legt Eier.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(359),
    german: 'Hahn',
    arabic: 'ديك',
    pronunciation: 'هان',
    example: 'Der Hahn kräht am Morgen.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(360),
    german: 'Ente',
    arabic: 'بطة',
    pronunciation: 'إنته',
    example: 'Die Ente schwimmt im Teich.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(361),
    german: 'Gans',
    arabic: 'إوزة',
    pronunciation: 'جانس',
    example: 'Die Gans ist größer als die Ente.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(362),
    german: 'Kaninchen',
    arabic: 'أرنب',
    pronunciation: 'كانينشن',
    example: 'Das Kaninchen hüpft schnell.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(363),
    german: 'Hase',
    arabic: 'أرنب بري',
    pronunciation: 'هازه',
    example: 'Der Hase hat lange Ohren.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(364),
    german: 'Maus',
    arabic: 'فأر',
    pronunciation: 'ماوس',
    example: 'Die Maus ist sehr klein.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(365),
    german: 'Ratte',
    arabic: 'جرذ',
    pronunciation: 'راته',
    example: 'Die Ratte lebt in der Stadt.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(366),
    german: 'Hamster',
    arabic: 'هامستر',
    pronunciation: 'هامستر',
    example: 'Der Hamster läuft im Rad.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(367),
    german: 'Meerschweinchen',
    arabic: 'خنزير غينيا',
    pronunciation: 'ميرشفاينشن',
    example: 'Das Meerschweinchen ist niedlich.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(368),
    german: 'Vogel',
    arabic: 'طائر',
    pronunciation: 'فوجل',
    example: 'Der Vogel fliegt hoch.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(369),
    german: 'Adler',
    arabic: 'نسر',
    pronunciation: 'آدلر',
    example: 'Der Adler ist ein Raubvogel.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(370),
    german: 'Taube',
    arabic: 'حمامة',
    pronunciation: 'تاوبه',
    example: 'Die Taube ist ein Friedenssymbol.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(371),
    german: 'Spatz',
    arabic: 'عصفور',
    pronunciation: 'شباتس',
    example: 'Der Spatz ist ein kleiner Vogel.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(372),
    german: 'Krähe',
    arabic: 'غراب',
    pronunciation: 'كريه',
    example: 'Die Krähe ist schwarz.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(373),
    german: 'Eule',
    arabic: 'بومة',
    pronunciation: 'أويله',
    example: 'Die Eule jagt in der Nacht.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(374),
    german: 'Papagei',
    arabic: 'ببغاء',
    pronunciation: 'باباجاي',
    example: 'Der Papagei kann sprechen.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(375),
    german: 'Fisch',
    arabic: 'سمك',
    pronunciation: 'فيش',
    example: 'Der Fisch schwimmt im Wasser.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(376),
    german: 'Hai',
    arabic: 'قرش',
    pronunciation: 'هاي',
    example: 'Der Hai ist gefährlich.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(377),
    german: 'Delfin',
    arabic: 'دولفين',
    pronunciation: 'ديلفين',
    example: 'Der Delfin ist intelligent.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(378),
    german: 'Wal',
    arabic: 'حوت',
    pronunciation: 'فال',
    example: 'Der Wal ist das größte Tier.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(379),
    german: 'Seehund',
    arabic: 'فقمة',
    pronunciation: 'زيهوند',
    example: 'Der Seehund liegt am Strand.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(380),
    german: 'Pinguin',
    arabic: 'بطريق',
    pronunciation: 'بينجوين',
    example: 'Der Pinguin lebt in der Antarktis.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(381),
    german: 'Bär',
    arabic: 'دب',
    pronunciation: 'بير',
    example: 'Der Bär ist stark.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(382),
    german: 'Wolf',
    arabic: 'ذئب',
    pronunciation: 'فولف',
    example: 'Der Wolf heult bei Vollmond.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(383),
    german: 'Fuchs',
    arabic: 'ثعلب',
    pronunciation: 'فوكس',
    example: 'Der Fuchs ist schlau.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(384),
    german: 'Hirsch',
    arabic: 'أيل',
    pronunciation: 'هيرش',
    example: 'Der Hirsch hat ein Geweih.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(385),
    german: 'Reh',
    arabic: 'غزال',
    pronunciation: 'ريه',
    example: 'Das Reh springt durch den Wald.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(386),
    german: 'Wildschwein',
    arabic: 'خنزير بري',
    pronunciation: 'فيلدشفاين',
    example: 'Das Wildschwein lebt im Wald.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(387),
    german: 'Eichhörnchen',
    arabic: 'سنجاب',
    pronunciation: 'آيشهورنشن',
    example: 'Das Eichhörnchen sammelt Nüsse.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(388),
    german: 'Igel',
    arabic: 'قنفذ',
    pronunciation: 'إيجل',
    example: 'Der Igel hat Stacheln.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(389),
    german: 'Löwe',
    arabic: 'أسد',
    pronunciation: 'لوفه',
    example: 'Der Löwe ist der König der Tiere.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(390),
    german: 'Tiger',
    arabic: 'نمر',
    pronunciation: 'تيجر',
    example: 'Der Tiger hat Streifen.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(391),
    german: 'Leopard',
    arabic: 'فهد',
    pronunciation: 'ليوبارد',
    example: 'Der Leopard klettert auf Bäume.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(392),
    german: 'Elefant',
    arabic: 'فيل',
    pronunciation: 'إليفانت',
    example: 'Der Elefant hat einen Rüssel.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(393),
    german: 'Giraffe',
    arabic: 'زرافة',
    pronunciation: 'جيرافه',
    example: 'Die Giraffe hat einen langen Hals.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(394),
    german: 'Zebra',
    arabic: 'حمار وحشي',
    pronunciation: 'تسيبرا',
    example: 'Das Zebra hat schwarze und weiße Streifen.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(395),
    german: 'Nashorn',
    arabic: 'وحيد القرن',
    pronunciation: 'ناسهورن',
    example: 'Das Nashorn hat ein Horn.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(396),
    german: 'Nilpferd',
    arabic: 'فرس النهر',
    pronunciation: 'نيلبفيرد',
    example: 'Das Nilpferd lebt im Wasser.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(397),
    german: 'Affe',
    arabic: 'قرد',
    pronunciation: 'آفه',
    example: 'Der Affe klettert auf Bäume.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(398),
    german: 'Gorilla',
    arabic: 'غوريلا',
    pronunciation: 'جوريلا',
    example: 'Der Gorilla ist sehr stark.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(399),
    german: 'Schimpanse',
    arabic: 'شمبانزي',
    pronunciation: 'شيمبانزه',
    example: 'Der Schimpanse ist intelligent.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(400),
    german: 'Känguru',
    arabic: 'كنغر',
    pronunciation: 'كينجورو',
    example: 'Das Känguru hüpft weit.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(401),
    german: 'Koala',
    arabic: 'كوالا',
    pronunciation: 'كوالا',
    example: 'Der Koala schläft viel.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(402),
    german: 'Panda',
    arabic: 'باندا',
    pronunciation: 'باندا',
    example: 'Der Panda ist schwarz und weiß.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(403),
    german: 'Schlange',
    arabic: 'ثعبان',
    pronunciation: 'شلانجه',
    example: 'Die Schlange hat keine Beine.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(404),
    german: 'Echse',
    arabic: 'سحلية',
    pronunciation: 'إكسه',
    example: 'Die Echse liegt in der Sonne.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(405),
    german: 'Krokodil',
    arabic: 'تمساح',
    pronunciation: 'كروكوديل',
    example: 'Das Krokodil hat scharfe Zähne.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(406),
    german: 'Schildkröte',
    arabic: 'سلحفاة',
    pronunciation: 'شيلدكروته',
    example: 'Die Schildkröte ist langsam.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(407),
    german: 'Frosch',
    arabic: 'ضفدع',
    pronunciation: 'فروش',
    example: 'Der Frosch springt ins Wasser.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(408),
    german: 'Spinne',
    arabic: 'عنكبوت',
    pronunciation: 'شبينه',
    example: 'Die Spinne webt ein Netz.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(409),
    german: 'Biene',
    arabic: 'نحلة',
    pronunciation: 'بينه',
    example: 'Die Biene macht Honig.',
    category: 'animals',
    level: 'A1'
  },

  // House and Furniture (80 words)
  {
    id: generateId(410),
    german: 'Haus',
    arabic: 'منزل',
    pronunciation: 'هاوس',
    example: 'Das Haus ist groß.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(411),
    german: 'Wohnung',
    arabic: 'شقة',
    pronunciation: 'فونونج',
    example: 'Die Wohnung hat drei Zimmer.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(412),
    german: 'Zimmer',
    arabic: 'غرفة',
    pronunciation: 'تسيمر',
    example: 'Das Zimmer ist hell.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(413),
    german: 'Wohnzimmer',
    arabic: 'غرفة المعيشة',
    pronunciation: 'فونتسيمر',
    example: 'Im Wohnzimmer steht ein Sofa.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(414),
    german: 'Schlafzimmer',
    arabic: 'غرفة النوم',
    pronunciation: 'شلافتسيمر',
    example: 'Im Schlafzimmer steht ein Bett.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(415),
    german: 'Küche',
    arabic: 'مطبخ',
    pronunciation: 'كوشه',
    example: 'In der Küche koche ich.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(416),
    german: 'Badezimmer',
    arabic: 'حمام',
    pronunciation: 'بادتسيمر',
    example: 'Das Badezimmer ist sauber.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(417),
    german: 'Toilette',
    arabic: 'مرحاض',
    pronunciation: 'تواليته',
    example: 'Die Toilette ist im Badezimmer.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(418),
    german: 'Flur',
    arabic: 'ممر',
    pronunciation: 'فلور',
    example: 'Der Flur verbindet die Zimmer.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(419),
    german: 'Keller',
    arabic: 'قبو',
    pronunciation: 'كيلر',
    example: 'Im Keller lagern wir Sachen.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(420),
    german: 'Dachboden',
    arabic: 'علية',
    pronunciation: 'داخبودن',
    example: 'Auf dem Dachboden sind alte Möbel.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(421),
    german: 'Balkon',
    arabic: 'شرفة',
    pronunciation: 'بالكون',
    example: 'Auf dem Balkon stehen Blumen.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(422),
    german: 'Terrasse',
    arabic: 'تراس',
    pronunciation: 'تيراسه',
    example: 'Die Terrasse ist groß.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(423),
    german: 'Garten',
    arabic: 'حديقة',
    pronunciation: 'جارتن',
    example: 'Im Garten wachsen Blumen.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(424),
    german: 'Garage',
    arabic: 'كراج',
    pronunciation: 'جاراجه',
    example: 'Das Auto steht in der Garage.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(425),
    german: 'Tür',
    arabic: 'باب',
    pronunciation: 'تور',
    example: 'Die Tür ist geschlossen.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(426),
    german: 'Fenster',
    arabic: 'نافذة',
    pronunciation: 'فينستر',
    example: 'Das Fenster ist offen.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(427),
    german: 'Wand',
    arabic: 'جدار',
    pronunciation: 'فاند',
    example: 'Die Wand ist weiß.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(428),
    german: 'Decke',
    arabic: 'سقف',
    pronunciation: 'ديكه',
    example: 'An der Decke hängt eine Lampe.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(429),
    german: 'Boden',
    arabic: 'أرضية',
    pronunciation: 'بودن',
    example: 'Der Boden ist aus Holz.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(430),
    german: 'Treppe',
    arabic: 'درج',
    pronunciation: 'تريبه',
    example: 'Die Treppe führt nach oben.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(431),
    german: 'Dach',
    arabic: 'سطح',
    pronunciation: 'داخ',
    example: 'Das Dach ist rot.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(432),
    german: 'Schornstein',
    arabic: 'مدخنة',
    pronunciation: 'شورنشتاين',
    example: 'Aus dem Schornstein kommt Rauch.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(433),
    german: 'Möbel',
    arabic: 'أثاث',
    pronunciation: 'موبل',
    example: 'Die Möbel sind neu.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(434),
    german: 'Tisch',
    arabic: 'طاولة',
    pronunciation: 'تيش',
    example: 'Der Tisch ist aus Holz.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(435),
    german: 'Stuhl',
    arabic: 'كرسي',
    pronunciation: 'شتول',
    example: 'Der Stuhl ist bequem.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(436),
    german: 'Sofa',
    arabic: 'أريكة',
    pronunciation: 'زوفا',
    example: 'Das Sofa ist weich.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(437),
    german: 'Sessel',
    arabic: 'كرسي مريح',
    pronunciation: 'زيسل',
    example: 'Der Sessel ist gemütlich.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(438),
    german: 'Bett',
    arabic: 'سرير',
    pronunciation: 'بيت',
    example: 'Das Bett ist groß.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(439),
    german: 'Matratze',
    arabic: 'مرتبة',
    pronunciation: 'ماتراتسه',
    example: 'Die Matratze ist weich.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(440),
    german: 'Kissen',
    arabic: 'وسادة',
    pronunciation: 'كيسن',
    example: 'Das Kissen ist flauschig.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(441),
    german: 'Decke',
    arabic: 'بطانية',
    pronunciation: 'ديكه',
    example: 'Die Decke hält warm.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(442),
    german: 'Schrank',
    arabic: 'خزانة',
    pronunciation: 'شرانك',
    example: 'Im Schrank hängen Kleider.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(443),
    german: 'Kleiderschrank',
    arabic: 'خزانة ملابس',
    pronunciation: 'كلايدرشرانك',
    example: 'Der Kleiderschrank ist voll.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(444),
    german: 'Kommode',
    arabic: 'خزانة أدراج',
    pronunciation: 'كوموده',
    example: 'In der Kommode sind Socken.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(445),
    german: 'Regal',
    arabic: 'رف',
    pronunciation: 'ريجال',
    example: 'Im Regal stehen Bücher.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(446),
    german: 'Bücherregal',
    arabic: 'رف كتب',
    pronunciation: 'بوشرريجال',
    example: 'Das Bücherregal ist hoch.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(447),
    german: 'Schreibtisch',
    arabic: 'مكتب',
    pronunciation: 'شرايبتيش',
    example: 'Am Schreibtisch arbeite ich.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(448),
    german: 'Bürostuhl',
    arabic: 'كرسي مكتب',
    pronunciation: 'بوروشتول',
    example: 'Der Bürostuhl ist verstellbar.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(449),
    german: 'Lampe',
    arabic: 'مصباح',
    pronunciation: 'لامبه',
    example: 'Die Lampe gibt Licht.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(450),
    german: 'Stehlampe',
    arabic: 'مصباح أرضي',
    pronunciation: 'شتيلامبه',
    example: 'Die Stehlampe steht in der Ecke.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(451),
    german: 'Tischlampe',
    arabic: 'مصباح طاولة',
    pronunciation: 'تيشلامبه',
    example: 'Die Tischlampe ist klein.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(452),
    german: 'Spiegel',
    arabic: 'مرآة',
    pronunciation: 'شبيجل',
    example: 'Der Spiegel hängt an der Wand.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(453),
    german: 'Bild',
    arabic: 'صورة',
    pronunciation: 'بيلد',
    example: 'Das Bild ist schön.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(454),
    german: 'Vorhang',
    arabic: 'ستارة',
    pronunciation: 'فورهانج',
    example: 'Der Vorhang ist blau.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(455),
    german: 'Gardine',
    arabic: 'ستارة شفافة',
    pronunciation: 'جارديه',
    example: 'Die Gardine ist durchsichtig.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(456),
    german: 'Teppich',
    arabic: 'سجادة',
    pronunciation: 'تيبيش',
    example: 'Der Teppich ist weich.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(457),
    german: 'Fernseher',
    arabic: 'تلفزيون',
    pronunciation: 'فيرنزيهر',
    example: 'Der Fernseher ist groß.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(458),
    german: 'Radio',
    arabic: 'راديو',
    pronunciation: 'راديو',
    example: 'Das Radio spielt Musik.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(459),
    german: 'Computer',
    arabic: 'حاسوب',
    pronunciation: 'كومبيوتر',
    example: 'Der Computer ist schnell.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(460),
    german: 'Laptop',
    arabic: 'حاسوب محمول',
    pronunciation: 'لابتوب',
    example: 'Der Laptop ist tragbar.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(461),
    german: 'Telefon',
    arabic: 'هاتف',
    pronunciation: 'تيليفون',
    example: 'Das Telefon klingelt.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(462),
    german: 'Handy',
    arabic: 'هاتف محمول',
    pronunciation: 'هاندي',
    example: 'Das Handy ist modern.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(463),
    german: 'Kühlschrank',
    arabic: 'ثلاجة',
    pronunciation: 'كولشرانك',
    example: 'Im Kühlschrank ist Milch.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(464),
    german: 'Herd',
    arabic: 'موقد',
    pronunciation: 'هيرد',
    example: 'Auf dem Herd koche ich.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(465),
    german: 'Ofen',
    arabic: 'فرن',
    pronunciation: 'أوفن',
    example: 'Im Ofen backe ich Kuchen.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(466),
    german: 'Mikrowelle',
    arabic: 'ميكروويف',
    pronunciation: 'ميكروفيله',
    example: 'Die Mikrowelle wärmt das Essen.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(467),
    german: 'Spülmaschine',
    arabic: 'غسالة أطباق',
    pronunciation: 'شبولماشينه',
    example: 'Die Spülmaschine wäscht Geschirr.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(468),
    german: 'Waschmaschine',
    arabic: 'غسالة ملابس',
    pronunciation: 'فاشماشينه',
    example: 'Die Waschmaschine wäscht Kleider.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(469),
    german: 'Trockner',
    arabic: 'مجفف',
    pronunciation: 'تروكنر',
    example: 'Der Trockner trocknet die Wäsche.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(470),
    german: 'Staubsauger',
    arabic: 'مكنسة كهربائية',
    pronunciation: 'شتاوبزاوجر',
    example: 'Der Staubsauger reinigt den Teppich.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(471),
    german: 'Bügeleisen',
    arabic: 'مكواة',
    pronunciation: 'بوجلآيزن',
    example: 'Das Bügeleisen glättet Kleider.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(472),
    german: 'Heizung',
    arabic: 'تدفئة',
    pronunciation: 'هايتسونج',
    example: 'Die Heizung wärmt das Haus.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(473),
    german: 'Klimaanlage',
    arabic: 'مكيف هواء',
    pronunciation: 'كليماآنلاجه',
    example: 'Die Klimaanlage kühlt das Zimmer.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(474),
    german: 'Ventilator',
    arabic: 'مروحة',
    pronunciation: 'فينتيلاتور',
    example: 'Der Ventilator macht Wind.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(475),
    german: 'Uhr',
    arabic: 'ساعة',
    pronunciation: 'أور',
    example: 'Die Uhr zeigt die Zeit.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(476),
    german: 'Wecker',
    arabic: 'منبه',
    pronunciation: 'فيكر',
    example: 'Der Wecker weckt mich.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(477),
    german: 'Kalender',
    arabic: 'تقويم',
    pronunciation: 'كالندر',
    example: 'Der Kalender zeigt das Datum.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(478),
    german: 'Vase',
    arabic: 'مزهرية',
    pronunciation: 'فازه',
    example: 'In der Vase sind Blumen.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(479),
    german: 'Kerze',
    arabic: 'شمعة',
    pronunciation: 'كيرتسه',
    example: 'Die Kerze brennt.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(480),
    german: 'Aschenbecher',
    arabic: 'منفضة سجائر',
    pronunciation: 'آشنبيشر',
    example: 'Der Aschenbecher ist voll.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(481),
    german: 'Mülleimer',
    arabic: 'سلة مهملات',
    pronunciation: 'مولآيمر',
    example: 'Der Mülleimer ist voll.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(482),
    german: 'Korb',
    arabic: 'سلة',
    pronunciation: 'كورب',
    example: 'Im Korb sind Äpfel.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(483),
    german: 'Schüssel',
    arabic: 'وعاء',
    pronunciation: 'شوسل',
    example: 'In der Schüssel ist Salat.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(484),
    german: 'Teller',
    arabic: 'طبق',
    pronunciation: 'تيلر',
    example: 'Auf dem Teller ist Essen.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(485),
    german: 'Tasse',
    arabic: 'كوب',
    pronunciation: 'تاسه',
    example: 'In der Tasse ist Kaffee.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(486),
    german: 'Glas',
    arabic: 'كأس',
    pronunciation: 'جلاس',
    example: 'Im Glas ist Wasser.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(487),
    german: 'Flasche',
    arabic: 'زجاجة',
    pronunciation: 'فلاشه',
    example: 'Die Flasche ist leer.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(488),
    german: 'Messer',
    arabic: 'سكين',
    pronunciation: 'ميسر',
    example: 'Das Messer ist scharf.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(489),
    german: 'Gabel',
    arabic: 'شوكة',
    pronunciation: 'جابل',
    example: 'Die Gabel ist aus Metall.',
    category: 'house',
    level: 'A1'
  },

  // Clothes (60 words)
  {
    id: generateId(490),
    german: 'Kleidung',
    arabic: 'ملابس',
    pronunciation: 'كلايدونج',
    example: 'Die Kleidung ist sauber.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(491),
    german: 'Hemd',
    arabic: 'قميص',
    pronunciation: 'همد',
    example: 'Das Hemd ist blau.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(492),
    german: 'Bluse',
    arabic: 'بلوزة',
    pronunciation: 'بلوزه',
    example: 'Die Bluse ist elegant.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(493),
    german: 'T-Shirt',
    arabic: 'تي شيرت',
    pronunciation: 'تي-شيرت',
    example: 'Das T-Shirt ist bequem.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(494),
    german: 'Pullover',
    arabic: 'بلوفر',
    pronunciation: 'بولوفر',
    example: 'Der Pullover ist warm.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(495),
    german: 'Sweatshirt',
    arabic: 'سويت شيرت',
    pronunciation: 'سفيتشيرت',
    example: 'Das Sweatshirt ist gemütlich.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(496),
    german: 'Jacke',
    arabic: 'سترة',
    pronunciation: 'ياكه',
    example: 'Die Jacke ist wasserdicht.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(497),
    german: 'Mantel',
    arabic: 'معطف',
    pronunciation: 'مانتل',
    example: 'Der Mantel ist lang.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(498),
    german: 'Hose',
    arabic: 'بنطلون',
    pronunciation: 'هوزه',
    example: 'Die Hose ist zu lang.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(499),
    german: 'Jeans',
    arabic: 'جينز',
    pronunciation: 'جينس',
    example: 'Die Jeans sind blau.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(500),
    german: 'Rock',
    arabic: 'تنورة',
    pronunciation: 'روك',
    example: 'Der Rock ist kurz.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(501),
    german: 'Kleid',
    arabic: 'فستان',
    pronunciation: 'كلايد',
    example: 'Das Kleid ist schön.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(502),
    german: 'Shorts',
    arabic: 'شورت',
    pronunciation: 'شورتس',
    example: 'Die Shorts sind für den Sommer.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(503),
    german: 'Unterwäsche',
    arabic: 'ملابس داخلية',
    pronunciation: 'أونترفيشه',
    example: 'Unterwäsche trägt man unter der Kleidung.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(504),
    german: 'Unterhose',
    arabic: 'سروال داخلي',
    pronunciation: 'أونترهوزه',
    example: 'Die Unterhose ist aus Baumwolle.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(505),
    german: 'BH',
    arabic: 'حمالة صدر',
    pronunciation: 'بي-ها',
    example: 'Der BH ist bequem.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(506),
    german: 'Socken',
    arabic: 'جوارب',
    pronunciation: 'زوكن',
    example: 'Die Socken sind warm.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(507),
    german: 'Strümpfe',
    arabic: 'جوارب طويلة',
    pronunciation: 'شترومبفه',
    example: 'Die Strümpfe sind dünn.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(508),
    german: 'Strumpfhose',
    arabic: 'جوارب طويلة',
    pronunciation: 'شترومبفهوزه',
    example: 'Die Strumpfhose ist schwarz.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(509),
    german: 'Schuhe',
    arabic: 'أحذية',
    pronunciation: 'شوهه',
    example: 'Die Schuhe sind neu.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(510),
    german: 'Turnschuhe',
    arabic: 'حذاء رياضي',
    pronunciation: 'تورنشوهه',
    example: 'Die Turnschuhe sind bequem.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(511),
    german: 'Sandalen',
    arabic: 'صندل',
    pronunciation: 'زانداليه',
    example: 'Sandalen trägt man im Sommer.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(512),
    german: 'Stiefel',
    arabic: 'حذاء طويل',
    pronunciation: 'شتيفل',
    example: 'Die Stiefel sind wasserdicht.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(513),
    german: 'Hausschuhe',
    arabic: 'شبشب',
    pronunciation: 'هاوسشوهه',
    example: 'Hausschuhe trägt man zu Hause.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(514),
    german: 'Hut',
    arabic: 'قبعة',
    pronunciation: 'هوت',
    example: 'Der Hut schützt vor Sonne.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(515),
    german: 'Mütze',
    arabic: 'قبعة صوفية',
    pronunciation: 'موتسه',
    example: 'Die Mütze hält warm.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(516),
    german: 'Kappe',
    arabic: 'قبعة رياضية',
    pronunciation: 'كابه',
    example: 'Die Kappe hat einen Schirm.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(517),
    german: 'Schal',
    arabic: 'وشاح',
    pronunciation: 'شال',
    example: 'Der Schal ist lang.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(518),
    german: 'Handschuhe',
    arabic: 'قفازات',
    pronunciation: 'هاندشوهه',
    example: 'Die Handschuhe sind warm.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(519),
    german: 'Gürtel',
    arabic: 'حزام',
    pronunciation: 'جورتل',
    example: 'Der Gürtel ist aus Leder.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(520),
    german: 'Krawatte',
    arabic: 'ربطة عنق',
    pronunciation: 'كراواته',
    example: 'Die Krawatte ist elegant.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(521),
    german: 'Fliege',
    arabic: 'ربطة عنق فراشة',
    pronunciation: 'فليجه',
    example: 'Die Fliege ist schwarz.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(522),
    german: 'Brille',
    arabic: 'نظارة',
    pronunciation: 'بريله',
    example: 'Die Brille hilft beim Sehen.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(523),
    german: 'Sonnenbrille',
    arabic: 'نظارة شمسية',
    pronunciation: 'زونبريله',
    example: 'Die Sonnenbrille schützt die Augen.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(524),
    german: 'Schmuck',
    arabic: 'مجوهرات',
    pronunciation: 'شموك',
    example: 'Der Schmuck ist teuer.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(525),
    german: 'Ring',
    arabic: 'خاتم',
    pronunciation: 'رينج',
    example: 'Der Ring ist aus Gold.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(526),
    german: 'Halskette',
    arabic: 'عقد',
    pronunciation: 'هالسكيته',
    example: 'Die Halskette ist schön.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(527),
    german: 'Armband',
    arabic: 'سوار',
    pronunciation: 'آرمباند',
    example: 'Das Armband ist silbern.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(528),
    german: 'Ohrringe',
    arabic: 'أقراط',
    pronunciation: 'أورينجه',
    example: 'Die Ohrringe sind klein.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(529),
    german: 'Uhr',
    arabic: 'ساعة يد',
    pronunciation: 'أور',
    example: 'Die Uhr zeigt die Zeit.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(530),
    german: 'Tasche',
    arabic: 'حقيبة',
    pronunciation: 'تاشه',
    example: 'Die Tasche ist groß.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(531),
    german: 'Handtasche',
    arabic: 'حقيبة يد',
    pronunciation: 'هاندتاشه',
    example: 'Die Handtasche ist elegant.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(532),
    german: 'Rucksack',
    arabic: 'حقيبة ظهر',
    pronunciation: 'روكزاك',
    example: 'Der Rucksack ist praktisch.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(533),
    german: 'Koffer',
    arabic: 'حقيبة سفر',
    pronunciation: 'كوفر',
    example: 'Der Koffer ist schwer.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(534),
    german: 'Geldbörse',
    arabic: 'محفظة',
    pronunciation: 'جيلدبورزه',
    example: 'In der Geldbörse ist Geld.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(535),
    german: 'Portemonnaie',
    arabic: 'محفظة نقود',
    pronunciation: 'بورتمونيه',
    example: 'Das Portemonnaie ist leer.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(536),
    german: 'Regenschirm',
    arabic: 'مظلة',
    pronunciation: 'ريجنشيرم',
    example: 'Der Regenschirm schützt vor Regen.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(537),
    german: 'Sonnenschirm',
    arabic: 'مظلة شمسية',
    pronunciation: 'زونشيرم',
    example: 'Der Sonnenschirm gibt Schatten.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(538),
    german: 'Badeanzug',
    arabic: 'مايوه',
    pronunciation: 'بادآنتسوج',
    example: 'Der Badeanzug ist für das Schwimmen.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(539),
    german: 'Bikini',
    arabic: 'بيكيني',
    pronunciation: 'بيكيني',
    example: 'Der Bikini ist zweiteilig.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(540),
    german: 'Badehose',
    arabic: 'شورت سباحة',
    pronunciation: 'بادهوزه',
    example: 'Die Badehose ist kurz.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(541),
    german: 'Pyjama',
    arabic: 'بيجامة',
    pronunciation: 'بيجاما',
    example: 'Der Pyjama ist bequem.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(542),
    german: 'Nachthemd',
    arabic: 'قميص نوم',
    pronunciation: 'ناختهمد',
    example: 'Das Nachthemd ist lang.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(543),
    german: 'Morgenmantel',
    arabic: 'روب',
    pronunciation: 'مورجنمانتل',
    example: 'Der Morgenmantel ist weich.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(544),
    german: 'Anzug',
    arabic: 'بدلة',
    pronunciation: 'آنتسوج',
    example: 'Der Anzug ist elegant.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(545),
    german: 'Kostüm',
    arabic: 'طقم نسائي',
    pronunciation: 'كوستوم',
    example: 'Das Kostüm ist schick.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(546),
    german: 'Smoking',
    arabic: 'بدلة سهرة',
    pronunciation: 'سموكينج',
    example: 'Der Smoking ist für besondere Anlässe.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(547),
    german: 'Abendkleid',
    arabic: 'فستان سهرة',
    pronunciation: 'آبندكلايد',
    example: 'Das Abendkleid ist lang.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(548),
    german: 'Uniform',
    arabic: 'زي موحد',
    pronunciation: 'أونيفورم',
    example: 'Die Uniform ist blau.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(549),
    german: 'Arbeitskleidung',
    arabic: 'ملابس عمل',
    pronunciation: 'آربايتسكلايدونج',
    example: 'Die Arbeitskleidung ist praktisch.',
    category: 'clothes',
    level: 'A1'
  },

  // Body Parts (50 words)
  {
    id: generateId(550),
    german: 'Körper',
    arabic: 'جسم',
    pronunciation: 'كوربر',
    example: 'Der Körper braucht Bewegung.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(551),
    german: 'Kopf',
    arabic: 'رأس',
    pronunciation: 'كوبف',
    example: 'Mein Kopf tut weh.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(552),
    german: 'Gesicht',
    arabic: 'وجه',
    pronunciation: 'جيزيشت',
    example: 'Das Gesicht ist rund.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(553),
    german: 'Haare',
    arabic: 'شعر',
    pronunciation: 'هاره',
    example: 'Die Haare sind lang.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(554),
    german: 'Stirn',
    arabic: 'جبهة',
    pronunciation: 'شتيرن',
    example: 'Die Stirn ist hoch.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(555),
    german: 'Augen',
    arabic: 'عيون',
    pronunciation: 'آوجن',
    example: 'Die Augen sind blau.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(556),
    german: 'Augenbrauen',
    arabic: 'حواجب',
    pronunciation: 'آوجنبراون',
    example: 'Die Augenbrauen sind dunkel.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(557),
    german: 'Wimpern',
    arabic: 'رموش',
    pronunciation: 'فيمبرن',
    example: 'Die Wimpern sind lang.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(558),
    german: 'Nase',
    arabic: 'أنف',
    pronunciation: 'نازه',
    example: 'Die Nase riecht.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(559),
    german: 'Mund',
    arabic: 'فم',
    pronunciation: 'موند',
    example: 'Der Mund spricht.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(560),
    german: 'Lippen',
    arabic: 'شفاه',
    pronunciation: 'ليبن',
    example: 'Die Lippen sind rot.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(561),
    german: 'Zähne',
    arabic: 'أسنان',
    pronunciation: 'تسينه',
    example: 'Die Zähne sind weiß.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(562),
    german: 'Zunge',
    arabic: 'لسان',
    pronunciation: 'تسونجه',
    example: 'Die Zunge schmeckt.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(563),
    german: 'Kinn',
    arabic: 'ذقن',
    pronunciation: 'كين',
    example: 'Das Kinn ist spitz.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(564),
    german: 'Wangen',
    arabic: 'خدود',
    pronunciation: 'فانجن',
    example: 'Die Wangen sind rot.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(565),
    german: 'Ohren',
    arabic: 'آذان',
    pronunciation: 'أورن',
    example: 'Die Ohren hören.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(566),
    german: 'Hals',
    arabic: 'رقبة',
    pronunciation: 'هالس',
    example: 'Der Hals ist lang.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(567),
    german: 'Schultern',
    arabic: 'أكتاف',
    pronunciation: 'شولترن',
    example: 'Die Schultern sind breit.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(568),
    german: 'Arme',
    arabic: 'أذرع',
    pronunciation: 'آرمه',
    example: 'Die Arme sind stark.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(569),
    german: 'Ellbogen',
    arabic: 'مرفق',
    pronunciation: 'إلبوجن',
    example: 'Der Ellbogen ist spitz.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(570),
    german: 'Hände',
    arabic: 'أيدي',
    pronunciation: 'هينده',
    example: 'Die Hände sind sauber.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(571),
    german: 'Finger',
    arabic: 'أصابع',
    pronunciation: 'فينجر',
    example: 'Die Finger sind lang.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(572),
    german: 'Daumen',
    arabic: 'إبهام',
    pronunciation: 'داومن',
    example: 'Der Daumen ist dick.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(573),
    german: 'Nägel',
    arabic: 'أظافر',
    pronunciation: 'نيجل',
    example: 'Die Nägel sind kurz.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(574),
    german: 'Brust',
    arabic: 'صدر',
    pronunciation: 'بروست',
    example: 'Die Brust ist breit.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(575),
    german: 'Bauch',
    arabic: 'بطن',
    pronunciation: 'باوخ',
    example: 'Der Bauch ist rund.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(576),
    german: 'Rücken',
    arabic: 'ظهر',
    pronunciation: 'روكن',
    example: 'Der Rücken tut weh.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(577),
    german: 'Taille',
    arabic: 'خصر',
    pronunciation: 'تايله',
    example: 'Die Taille ist schmal.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(578),
    german: 'Hüfte',
    arabic: 'ورك',
    pronunciation: 'هوفته',
    example: 'Die Hüfte ist breit.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(579),
    german: 'Beine',
    arabic: 'أرجل',
    pronunciation: 'باينه',
    example: 'Die Beine sind lang.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(580),
    german: 'Oberschenkel',
    arabic: 'فخذ',
    pronunciation: 'أوبرشينكل',
    example: 'Der Oberschenkel ist muskulös.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(581),
    german: 'Knie',
    arabic: 'ركبة',
    pronunciation: 'كني',
    example: 'Das Knie ist rund.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(582),
    german: 'Unterschenkel',
    arabic: 'ساق',
    pronunciation: 'أونترشينكل',
    example: 'Der Unterschenkel ist dünn.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(583),
    german: 'Füße',
    arabic: 'أقدام',
    pronunciation: 'فوسه',
    example: 'Die Füße sind groß.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(584),
    german: 'Zehen',
    arabic: 'أصابع القدم',
    pronunciation: 'تسيهن',
    example: 'Die Zehen sind klein.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(585),
    german: 'Ferse',
    arabic: 'كعب',
    pronunciation: 'فيرزه',
    example: 'Die Ferse ist hart.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(586),
    german: 'Knöchel',
    arabic: 'كاحل',
    pronunciation: 'كنوشل',
    example: 'Der Knöchel ist dünn.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(587),
    german: 'Haut',
    arabic: 'جلد',
    pronunciation: 'هاوت',
    example: 'Die Haut ist weich.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(588),
    german: 'Knochen',
    arabic: 'عظام',
    pronunciation: 'كنوشن',
    example: 'Die Knochen sind hart.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(589),
    german: 'Muskeln',
    arabic: 'عضلات',
    pronunciation: 'موسكلن',
    example: 'Die Muskeln sind stark.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(590),
    german: 'Blut',
    arabic: 'دم',
    pronunciation: 'بلوت',
    example: 'Das Blut ist rot.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(591),
    german: 'Herz',
    arabic: 'قلب',
    pronunciation: 'هيرتس',
    example: 'Das Herz schlägt.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(592),
    german: 'Lunge',
    arabic: 'رئة',
    pronunciation: 'لونجه',
    example: 'Die Lunge atmet.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(593),
    german: 'Magen',
    arabic: 'معدة',
    pronunciation: 'ماجن',
    example: 'Der Magen verdaut.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(594),
    german: 'Leber',
    arabic: 'كبد',
    pronunciation: 'ليبر',
    example: 'Die Leber ist wichtig.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(595),
    german: 'Nieren',
    arabic: 'كلى',
    pronunciation: 'نيرن',
    example: 'Die Nieren filtern.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(596),
    german: 'Gehirn',
    arabic: 'دماغ',
    pronunciation: 'جيهيرن',
    example: 'Das Gehirn denkt.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(597),
    german: 'Nerven',
    arabic: 'أعصاب',
    pronunciation: 'نيرفن',
    example: 'Die Nerven sind empfindlich.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(598),
    german: 'Stimme',
    arabic: 'صوت',
    pronunciation: 'شتيمه',
    example: 'Die Stimme ist schön.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(599),
    german: 'Atem',
    arabic: 'نفس',
    pronunciation: 'آتم',
    example: 'Der Atem ist ruhig.',
    category: 'body',
    level: 'A1'
  },

  // Emotions (50 words)
  {
    id: generateId(600),
    german: 'Gefühl',
    arabic: 'شعور',
    pronunciation: 'جيفول',
    example: 'Das ist ein schönes Gefühl.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(601),
    german: 'glücklich',
    arabic: 'سعيد',
    pronunciation: 'جلوكليش',
    example: 'Ich bin glücklich.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(602),
    german: 'traurig',
    arabic: 'حزين',
    pronunciation: 'تراوريج',
    example: 'Er ist traurig.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(603),
    german: 'fröhlich',
    arabic: 'مرح',
    pronunciation: 'فروليش',
    example: 'Das Kind ist fröhlich.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(604),
    german: 'wütend',
    arabic: 'غاضب',
    pronunciation: 'فوتند',
    example: 'Der Mann ist wütend.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(605),
    german: 'ängstlich',
    arabic: 'خائف',
    pronunciation: 'إنجستليش',
    example: 'Sie ist ängstlich.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(606),
    german: 'nervös',
    arabic: 'متوتر',
    pronunciation: 'نيرفوس',
    example: 'Vor der Prüfung bin ich nervös.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(607),
    german: 'ruhig',
    arabic: 'هادئ',
    pronunciation: 'روهيج',
    example: 'Das Baby ist ruhig.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(608),
    german: 'aufgeregt',
    arabic: 'متحمس',
    pronunciation: 'آوفجيريجت',
    example: 'Ich bin aufgeregt.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(609),
    german: 'müde',
    arabic: 'متعب',
    pronunciation: 'مودي',
    example: 'Nach der Arbeit bin ich müde.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(610),
    german: 'wach',
    arabic: 'مستيقظ',
    pronunciation: 'فاخ',
    example: 'Ich bin noch wach.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(611),
    german: 'überrascht',
    arabic: 'مندهش',
    pronunciation: 'أوبرراشت',
    example: 'Ich bin überrascht.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(612),
    german: 'verwirrt',
    arabic: 'مرتبك',
    pronunciation: 'فيرفيرت',
    example: 'Er ist verwirrt.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(613),
    german: 'stolz',
    arabic: 'فخور',
    pronunciation: 'شتولتس',
    example: 'Die Mutter ist stolz.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(614),
    german: 'enttäuscht',
    arabic: 'محبط',
    pronunciation: 'إنتتويشت',
    example: 'Er ist enttäuscht.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(615),
    german: 'hoffnungsvoll',
    arabic: 'متفائل',
    pronunciation: 'هوفنونجسفول',
    example: 'Sie ist hoffnungsvoll.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(616),
    german: 'hoffnungslos',
    arabic: 'يائس',
    pronunciation: 'هوفنونجسلوس',
    example: 'Er fühlt sich hoffnungslos.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(617),
    german: 'einsam',
    arabic: 'وحيد',
    pronunciation: 'آينزام',
    example: 'Sie fühlt sich einsam.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(618),
    german: 'gelangweilt',
    arabic: 'ملل',
    pronunciation: 'جيلانجفايلت',
    example: 'Das Kind ist gelangweilt.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(619),
    german: 'interessiert',
    arabic: 'مهتم',
    pronunciation: 'إنتيريسيرت',
    example: 'Er ist interessiert.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(620),
    german: 'begeistert',
    arabic: 'متحمس جداً',
    pronunciation: 'بيجايسترت',
    example: 'Sie ist begeistert.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(621),
    german: 'entspannt',
    arabic: 'مسترخي',
    pronunciation: 'إنتشبانت',
    example: 'Am Strand bin ich entspannt.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(622),
    german: 'gestresst',
    arabic: 'متوتر',
    pronunciation: 'جيشتريست',
    example: 'Bei der Arbeit bin ich gestresst.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(623),
    german: 'zufrieden',
    arabic: 'راضي',
    pronunciation: 'تسوفريدن',
    example: 'Mit dem Ergebnis bin ich zufrieden.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(624),
    german: 'unzufrieden',
    arabic: 'غير راضي',
    pronunciation: 'أونتسوفريدن',
    example: 'Er ist unzufrieden.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(625),
    german: 'dankbar',
    arabic: 'ممتن',
    pronunciation: 'دانكبار',
    example: 'Ich bin dankbar.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(626),
    german: 'neidisch',
    arabic: 'حسود',
    pronunciation: 'نايديش',
    example: 'Sie ist neidisch.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(627),
    german: 'eifersüchtig',
    arabic: 'غيور',
    pronunciation: 'آيفرزوشتيج',
    example: 'Er ist eifersüchtig.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(628),
    german: 'verliebt',
    arabic: 'واقع في الحب',
    pronunciation: 'فيرليبت',
    example: 'Sie ist verliebt.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(629),
    german: 'verletzt',
    arabic: 'مجروح',
    pronunciation: 'فيرليتست',
    example: 'Er fühlt sich verletzt.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(630),
    german: 'schüchtern',
    arabic: 'خجول',
    pronunciation: 'شوشترن',
    example: 'Das Mädchen ist schüchtern.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(631),
    german: 'selbstbewusst',
    arabic: 'واثق من النفس',
    pronunciation: 'زيلبستبيفوست',
    example: 'Er ist selbstbewusst.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(632),
    german: 'unsicher',
    arabic: 'غير متأكد',
    pronunciation: 'أونزيشر',
    example: 'Sie ist unsicher.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(633),
    german: 'mutig',
    arabic: 'شجاع',
    pronunciation: 'موتيج',
    example: 'Der Feuerwehrmann ist mutig.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(634),
    german: 'feige',
    arabic: 'جبان',
    pronunciation: 'فايجه',
    example: 'Er ist feige.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(635),
    german: 'geduldig',
    arabic: 'صبور',
    pronunciation: 'جيدولديج',
    example: 'Die Lehrerin ist geduldig.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(636),
    german: 'ungeduldig',
    arabic: 'غير صبور',
    pronunciation: 'أونجيدولديج',
    example: 'Das Kind ist ungeduldig.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(637),
    german: 'freundlich',
    arabic: 'ودود',
    pronunciation: 'فرويندليش',
    example: 'Der Verkäufer ist freundlich.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(638),
    german: 'unfreundlich',
    arabic: 'غير ودود',
    pronunciation: 'أونفرويندليش',
    example: 'Er ist unfreundlich.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(639),
    german: 'höflich',
    arabic: 'مهذب',
    pronunciation: 'هوفليش',
    example: 'Das Kind ist höflich.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(640),
    german: 'unhöflich',
    arabic: 'غير مهذب',
    pronunciation: 'أونهوفليش',
    example: 'Er ist unhöflich.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(641),
    german: 'ehrlich',
    arabic: 'صادق',
    pronunciation: 'إرليش',
    example: 'Sie ist ehrlich.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(642),
    german: 'unehrlich',
    arabic: 'غير صادق',
    pronunciation: 'أونإرليش',
    example: 'Er ist unehrlich.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(643),
    german: 'hilfsbereit',
    arabic: 'مساعد',
    pronunciation: 'هيلفسبيرايت',
    example: 'Der Nachbar ist hilfsbereit.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(644),
    german: 'faul',
    arabic: 'كسول',
    pronunciation: 'فاول',
    example: 'Er ist faul.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(645),
    german: 'fleißig',
    arabic: 'مجتهد',
    pronunciation: 'فلايسيج',
    example: 'Die Studentin ist fleißig.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(646),
    german: 'klug',
    arabic: 'ذكي',
    pronunciation: 'كلوج',
    example: 'Das Kind ist klug.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(647),
    german: 'dumm',
    arabic: 'غبي',
    pronunciation: 'دوم',
    example: 'Das war dumm.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(648),
    german: 'lustig',
    arabic: 'مضحك',
    pronunciation: 'لوستيج',
    example: 'Der Film ist lustig.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(649),
    german: 'ernst',
    arabic: 'جدي',
    pronunciation: 'إرنست',
    example: 'Das ist ein ernstes Problem.',
    category: 'emotions',
    level: 'A1'
  },

  // Education (100 words)
  {
    id: generateId(650),
    german: 'Bildung',
    arabic: 'تعليم',
    pronunciation: 'بيلدونج',
    example: 'Bildung ist wichtig.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(651),
    german: 'Schule',
    arabic: 'مدرسة',
    pronunciation: 'شوله',
    example: 'Die Schule beginnt um 8 Uhr.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(652),
    german: 'Kindergarten',
    arabic: 'روضة أطفال',
    pronunciation: 'كيندرجارتن',
    example: 'Mein Sohn geht in den Kindergarten.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(653),
    german: 'Grundschule',
    arabic: 'مدرسة ابتدائية',
    pronunciation: 'جروندشوله',
    example: 'Die Grundschule dauert vier Jahre.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(654),
    german: 'Gymnasium',
    arabic: 'مدرسة ثانوية',
    pronunciation: 'جيمنازيوم',
    example: 'Das Gymnasium bereitet auf das Studium vor.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(655),
    german: 'Universität',
    arabic: 'جامعة',
    pronunciation: 'أونيفيرزيتيت',
    example: 'An der Universität studiert man.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(656),
    german: 'Hochschule',
    arabic: 'كلية',
    pronunciation: 'هوخشوله',
    example: 'Die Hochschule ist kleiner als die Universität.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(657),
    german: 'Klasse',
    arabic: 'صف',
    pronunciation: 'كلاسه',
    example: 'Ich bin in der fünften Klasse.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(658),
    german: 'Klassenzimmer',
    arabic: 'قاعة الصف',
    pronunciation: 'كلاسنتسيمر',
    example: 'Das Klassenzimmer ist groß.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(659),
    german: 'Schüler',
    arabic: 'تلميذ',
    pronunciation: 'شولر',
    example: 'Der Schüler lernt fleißig.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(660),
    german: 'Schülerin',
    arabic: 'تلميذة',
    pronunciation: 'شولرين',
    example: 'Die Schülerin ist intelligent.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(661),
    german: 'Student',
    arabic: 'طالب جامعي',
    pronunciation: 'شتودنت',
    example: 'Der Student studiert Medizin.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(662),
    german: 'Studentin',
    arabic: 'طالبة جامعية',
    pronunciation: 'شتودنتين',
    example: 'Die Studentin schreibt ihre Thesis.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(663),
    german: 'Lehrer',
    arabic: 'معلم',
    pronunciation: 'ليرر',
    example: 'Der Lehrer erklärt die Aufgabe.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(664),
    german: 'Lehrerin',
    arabic: 'معلمة',
    pronunciation: 'ليررين',
    example: 'Die Lehrerin ist sehr nett.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(665),
    german: 'Professor',
    arabic: 'أستاذ جامعي',
    pronunciation: 'بروفيسور',
    example: 'Der Professor hält eine Vorlesung.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(666),
    german: 'Professorin',
    arabic: 'أستاذة جامعية',
    pronunciation: 'بروفيسورين',
    example: 'Die Professorin forscht.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(667),
    german: 'Direktor',
    arabic: 'مدير',
    pronunciation: 'ديريكتور',
    example: 'Der Direktor leitet die Schule.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(668),
    german: 'Direktorin',
    arabic: 'مديرة',
    pronunciation: 'ديريكتورين',
    example: 'Die Direktorin ist streng.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(669),
    german: 'Unterricht',
    arabic: 'درس',
    pronunciation: 'أونترريشت',
    example: 'Der Unterricht beginnt um 8 Uhr.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(670),
    german: 'Stunde',
    arabic: 'حصة',
    pronunciation: 'شتونده',
    example: 'Die erste Stunde ist Mathematik.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(671),
    german: 'Fach',
    arabic: 'مادة',
    pronunciation: 'فاخ',
    example: 'Mein Lieblingsfach ist Geschichte.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(672),
    german: 'Mathematik',
    arabic: 'رياضيات',
    pronunciation: 'ماتيماتيك',
    example: 'Mathematik ist schwer.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(673),
    german: 'Deutsch',
    arabic: 'الألمانية',
    pronunciation: 'دويتش',
    example: 'Ich lerne Deutsch.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(674),
    german: 'Englisch',
    arabic: 'الإنجليزية',
    pronunciation: 'إنجليش',
    example: 'Englisch ist eine Weltsprache.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(675),
    german: 'Geschichte',
    arabic: 'تاريخ',
    pronunciation: 'جيشيشته',
    example: 'Geschichte erzählt von der Vergangenheit.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(676),
    german: 'Geografie',
    arabic: 'جغرافيا',
    pronunciation: 'جيوجرافي',
    example: 'In Geografie lernen wir über Länder.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(677),
    german: 'Biologie',
    arabic: 'أحياء',
    pronunciation: 'بيولوجي',
    example: 'Biologie ist die Lehre vom Leben.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(678),
    german: 'Chemie',
    arabic: 'كيمياء',
    pronunciation: 'شيمي',
    example: 'In Chemie machen wir Experimente.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(679),
    german: 'Physik',
    arabic: 'فيزياء',
    pronunciation: 'فوزيك',
    example: 'Physik erklärt die Natur.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(680),
    german: 'Kunst',
    arabic: 'فن',
    pronunciation: 'كونست',
    example: 'In Kunst malen wir Bilder.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(681),
    german: 'Musik',
    arabic: 'موسيقى',
    pronunciation: 'موزيك',
    example: 'Musik macht Spaß.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(682),
    german: 'Sport',
    arabic: 'رياضة',
    pronunciation: 'شبورت',
    example: 'Sport hält gesund.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(683),
    german: 'Religion',
    arabic: 'دين',
    pronunciation: 'ريليجيون',
    example: 'Religion ist ein wichtiges Fach.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(684),
    german: 'Informatik',
    arabic: 'علوم الحاسوب',
    pronunciation: 'إنفورماتيك',
    example: 'Informatik lehrt über Computer.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(685),
    german: 'Buch',
    arabic: 'كتاب',
    pronunciation: 'بوخ',
    example: 'Das Buch ist interessant.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(686),
    german: 'Schulbuch',
    arabic: 'كتاب مدرسي',
    pronunciation: 'شولبوخ',
    example: 'Das Schulbuch ist schwer.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(687),
    german: 'Heft',
    arabic: 'دفتر',
    pronunciation: 'هيفت',
    example: 'Ich schreibe in mein Heft.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(688),
    german: 'Notizbuch',
    arabic: 'دفتر ملاحظات',
    pronunciation: 'نوتيتسبوخ',
    example: 'Im Notizbuch stehen wichtige Informationen.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(689),
    german: 'Stift',
    arabic: 'قلم',
    pronunciation: 'شتيفت',
    example: 'Der Stift schreibt gut.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(690),
    german: 'Kugelschreiber',
    arabic: 'قلم حبر',
    pronunciation: 'كوجلشرايبر',
    example: 'Der Kugelschreiber ist blau.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(691),
    german: 'Bleistift',
    arabic: 'قلم رصاص',
    pronunciation: 'بلايشتيفت',
    example: 'Mit dem Bleistift kann man radieren.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(692),
    german: 'Radiergummi',
    arabic: 'ممحاة',
    pronunciation: 'راديرجومي',
    example: 'Der Radiergummi löscht Fehler.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(693),
    german: 'Lineal',
    arabic: 'مسطرة',
    pronunciation: 'لينيال',
    example: 'Das Lineal ist 30 cm lang.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(694),
    german: 'Schere',
    arabic: 'مقص',
    pronunciation: 'شيره',
    example: 'Die Schere schneidet Papier.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(695),
    german: 'Kleber',
    arabic: 'غراء',
    pronunciation: 'كليبر',
    example: 'Der Kleber klebt gut.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(696),
    german: 'Papier',
    arabic: 'ورق',
    pronunciation: 'بابير',
    example: 'Das Papier ist weiß.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(697),
    german: 'Tafel',
    arabic: 'سبورة',
    pronunciation: 'تافل',
    example: 'Der Lehrer schreibt an die Tafel.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(698),
    german: 'Kreide',
    arabic: 'طباشير',
    pronunciation: 'كرايده',
    example: 'Die Kreide ist weiß.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(699),
    german: 'Marker',
    arabic: 'قلم تحديد',
    pronunciation: 'ماركر',
    example: 'Der Marker ist rot.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(700),
    german: 'Rucksack',
    arabic: 'حقيبة مدرسية',
    pronunciation: 'روكزاك',
    example: 'Im Rucksack sind die Bücher.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(701),
    german: 'Schultasche',
    arabic: 'حقيبة مدرسية',
    pronunciation: 'شولتاشه',
    example: 'Die Schultasche ist schwer.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(702),
    german: 'Mäppchen',
    arabic: 'مقلمة',
    pronunciation: 'ميبشن',
    example: 'Im Mäppchen sind Stifte.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(703),
    german: 'Taschenrechner',
    arabic: 'آلة حاسبة',
    pronunciation: 'تاشنريشنر',
    example: 'Der Taschenrechner rechnet schnell.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(704),
    german: 'Computer',
    arabic: 'حاسوب',
    pronunciation: 'كومبيوتر',
    example: 'Am Computer lernen wir tippen.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(705),
    german: 'Laptop',
    arabic: 'حاسوب محمول',
    pronunciation: 'لابتوب',
    example: 'Der Laptop ist praktisch.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(706),
    german: 'Tablet',
    arabic: 'جهاز لوحي',
    pronunciation: 'تابليت',
    example: 'Das Tablet ist modern.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(707),
    german: 'Projektor',
    arabic: 'جهاز عرض',
    pronunciation: 'بروييكتور',
    example: 'Der Projektor zeigt Bilder.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(708),
    german: 'Bildschirm',
    arabic: 'شاشة',
    pronunciation: 'بيلدشيرم',
    example: 'Der Bildschirm ist groß.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(709),
    german: 'Tastatur',
    arabic: 'لوحة مفاتيح',
    pronunciation: 'تاستاتور',
    example: 'Die Tastatur hat viele Tasten.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(710),
    german: 'Maus',
    arabic: 'فأرة حاسوب',
    pronunciation: 'ماوس',
    example: 'Die Maus steuert den Cursor.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(711),
    german: 'Drucker',
    arabic: 'طابعة',
    pronunciation: 'دروكر',
    example: 'Der Drucker druckt Dokumente.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(712),
    german: 'Kopie',
    arabic: 'نسخة',
    pronunciation: 'كوبي',
    example: 'Ich brauche eine Kopie.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(713),
    german: 'Hausaufgabe',
    arabic: 'واجب منزلي',
    pronunciation: 'هاوسآوفجابه',
    example: 'Die Hausaufgabe ist schwer.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(714),
    german: 'Aufgabe',
    arabic: 'مهمة',
    pronunciation: 'آوفجابه',
    example: 'Die Aufgabe ist interessant.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(715),
    german: 'Übung',
    arabic: 'تمرين',
    pronunciation: 'أوبونج',
    example: 'Die Übung ist nützlich.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(716),
    german: 'Test',
    arabic: 'اختبار',
    pronunciation: 'تيست',
    example: 'Der Test ist morgen.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(717),
    german: 'Prüfung',
    arabic: 'امتحان',
    pronunciation: 'بروفونج',
    example: 'Die Prüfung ist wichtig.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(718),
    german: 'Klausur',
    arabic: 'امتحان كتابي',
    pronunciation: 'كلاوزور',
    example: 'Die Klausur dauert zwei Stunden.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(719),
    german: 'Note',
    arabic: 'درجة',
    pronunciation: 'نوته',
    example: 'Ich habe eine gute Note.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(720),
    german: 'Zeugnis',
    arabic: 'شهادة',
    pronunciation: 'تسويجنيس',
    example: 'Das Zeugnis zeigt alle Noten.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(721),
    german: 'Diplom',
    arabic: 'دبلوم',
    pronunciation: 'ديبلوم',
    example: 'Das Diplom ist wichtig.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(722),
    german: 'Abschluss',
    arabic: 'تخرج',
    pronunciation: 'آبشلوس',
    example: 'Der Abschluss ist geschafft.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(723),
    german: 'Abitur',
    arabic: 'شهادة الثانوية العامة',
    pronunciation: 'آبيتور',
    example: 'Das Abitur öffnet Türen.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(724),
    german: 'Bachelor',
    arabic: 'بكالوريوس',
    pronunciation: 'باشيلور',
    example: 'Der Bachelor ist der erste Abschluss.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(725),
    german: 'Master',
    arabic: 'ماجستير',
    pronunciation: 'ماستر',
    example: 'Der Master baut auf dem Bachelor auf.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(726),
    german: 'Doktor',
    arabic: 'دكتوراه',
    pronunciation: 'دوكتور',
    example: 'Der Doktor ist der höchste Abschluss.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(727),
    german: 'Studium',
    arabic: 'دراسة',
    pronunciation: 'شتوديوم',
    example: 'Das Studium dauert lange.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(728),
    german: 'Semester',
    arabic: 'فصل دراسي',
    pronunciation: 'زيميستر',
    example: 'Ein Semester hat sechs Monate.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(729),
    german: 'Vorlesung',
    arabic: 'محاضرة',
    pronunciation: 'فورليزونج',
    example: 'Die Vorlesung ist interessant.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(730),
    german: 'Seminar',
    arabic: 'ندوة',
    pronunciation: 'زيمينار',
    example: 'Das Seminar ist klein.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(731),
    german: 'Labor',
    arabic: 'مختبر',
    pronunciation: 'لابور',
    example: 'Im Labor machen wir Experimente.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(732),
    german: 'Bibliothek',
    arabic: 'مكتبة',
    pronunciation: 'بيبليوتيك',
    example: 'In der Bibliothek sind viele Bücher.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(733),
    german: 'Mensa',
    arabic: 'مطعم الجامعة',
    pronunciation: 'مينزا',
    example: 'In der Mensa essen die Studenten.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(734),
    german: 'Campus',
    arabic: 'حرم جامعي',
    pronunciation: 'كامبوس',
    example: 'Der Campus ist groß.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(735),
    german: 'Hörsaal',
    arabic: 'قاعة محاضرات',
    pronunciation: 'هورزال',
    example: 'Der Hörsaal ist voll.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(736),
    german: 'Sprachkurs',
    arabic: 'دورة لغة',
    pronunciation: 'شبراخكورس',
    example: 'Der Sprachkurs hilft beim Lernen.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(737),
    german: 'Kurs',
    arabic: 'دورة',
    pronunciation: 'كورس',
    example: 'Der Kurs ist interessant.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(738),
    german: 'Lektion',
    arabic: 'درس',
    pronunciation: 'ليكتسيون',
    example: 'Die Lektion ist schwer.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(739),
    german: 'Kapitel',
    arabic: 'فصل',
    pronunciation: 'كابيتل',
    example: 'Das Kapitel ist lang.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(740),
    german: 'Seite',
    arabic: 'صفحة',
    pronunciation: 'زايته',
    example: 'Lesen Sie Seite 10.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(741),
    german: 'Wort',
    arabic: 'كلمة',
    pronunciation: 'فورت',
    example: 'Das Wort ist neu.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(742),
    german: 'Satz',
    arabic: 'جملة',
    pronunciation: 'زاتس',
    example: 'Der Satz ist lang.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(743),
    german: 'Text',
    arabic: 'نص',
    pronunciation: 'تيكست',
    example: 'Der Text ist interessant.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(744),
    german: 'Grammatik',
    arabic: 'قواعد',
    pronunciation: 'جراماتيك',
    example: 'Grammatik ist wichtig.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(745),
    german: 'Vokabel',
    arabic: 'مفردة',
    pronunciation: 'فوكابل',
    example: 'Ich lerne neue Vokabeln.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(746),
    german: 'Wörterbuch',
    arabic: 'قاموس',
    pronunciation: 'فورتربوخ',
    example: 'Das Wörterbuch hilft beim Übersetzen.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(747),
    german: 'Übersetzung',
    arabic: 'ترجمة',
    pronunciation: 'أوبرزيتسونج',
    example: 'Die Übersetzung ist richtig.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(748),
    german: 'Aussprache',
    arabic: 'نطق',
    pronunciation: 'آوسشبراخه',
    example: 'Die Aussprache ist wichtig.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(749),
    german: 'Fehler',
    arabic: 'خطأ',
    pronunciation: 'فيلر',
    example: 'Ich habe einen Fehler gemacht.',
    category: 'education',
    level: 'A1'
  },

  // Continue with more words to reach 1000+...
  // For brevity, I'll add a few more categories with fewer words each

  // Technology (50 words)
  {
    id: generateId(750),
    german: 'Technologie',
    arabic: 'تكنولوجيا',
    pronunciation: 'تيخنولوجي',
    example: 'Technologie verändert unser Leben.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(751),
    german: 'Internet',
    arabic: 'إنترنت',
    pronunciation: 'إنترنيت',
    example: 'Das Internet verbindet die Welt.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(752),
    german: 'Website',
    arabic: 'موقع إلكتروني',
    pronunciation: 'فيبزايت',
    example: 'Die Website ist informativ.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(753),
    german: 'E-Mail',
    arabic: 'بريد إلكتروني',
    pronunciation: 'إي-مايل',
    example: 'Ich schicke eine E-Mail.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(754),
    german: 'Software',
    arabic: 'برمجيات',
    pronunciation: 'زوفتفير',
    example: 'Die Software ist nützlich.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(755),
    german: 'App',
    arabic: 'تطبيق',
    pronunciation: 'آب',
    example: 'Die App ist praktisch.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(756),
    german: 'Smartphone',
    arabic: 'هاتف ذكي',
    pronunciation: 'سمارتفون',
    example: 'Das Smartphone ist modern.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(757),
    german: 'Passwort',
    arabic: 'كلمة مرور',
    pronunciation: 'باسفورت',
    example: 'Das Passwort ist sicher.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(758),
    german: 'Download',
    arabic: 'تحميل',
    pronunciation: 'داونلود',
    example: 'Der Download ist schnell.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(759),
    german: 'Upload',
    arabic: 'رفع',
    pronunciation: 'آبلود',
    example: 'Der Upload dauert lange.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(760),
    german: 'Datei',
    arabic: 'ملف',
    pronunciation: 'داتاي',
    example: 'Die Datei ist groß.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(761),
    german: 'Ordner',
    arabic: 'مجلد',
    pronunciation: 'أوردنر',
    example: 'Der Ordner ist organisiert.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(762),
    german: 'Backup',
    arabic: 'نسخة احتياطية',
    pronunciation: 'باكآب',
    example: 'Das Backup ist wichtig.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(763),
    german: 'Cloud',
    arabic: 'سحابة',
    pronunciation: 'كلاود',
    example: 'Die Cloud speichert Daten.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(764),
    german: 'Server',
    arabic: 'خادم',
    pronunciation: 'زيرفر',
    example: 'Der Server ist schnell.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(765),
    german: 'Netzwerk',
    arabic: 'شبكة',
    pronunciation: 'نيتسفيرك',
    example: 'Das Netzwerk ist stabil.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(766),
    german: 'WLAN',
    arabic: 'واي فاي',
    pronunciation: 'في-لان',
    example: 'Das WLAN ist kostenlos.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(767),
    german: 'Bluetooth',
    arabic: 'بلوتوث',
    pronunciation: 'بلوتوث',
    example: 'Bluetooth verbindet Geräte.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(768),
    german: 'USB',
    arabic: 'يو إس بي',
    pronunciation: 'أو-إس-بي',
    example: 'Der USB-Stick ist klein.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(769),
    german: 'Kabel',
    arabic: 'كابل',
    pronunciation: 'كابل',
    example: 'Das Kabel ist lang.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(770),
    german: 'Akku',
    arabic: 'بطارية',
    pronunciation: 'آكو',
    example: 'Der Akku ist leer.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(771),
    german: 'Ladegerät',
    arabic: 'شاحن',
    pronunciation: 'لادجيريت',
    example: 'Das Ladegerät ist wichtig.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(772),
    german: 'Kopfhörer',
    arabic: 'سماعات رأس',
    pronunciation: 'كوبفهورر',
    example: 'Die Kopfhörer sind bequem.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(773),
    german: 'Lautsprecher',
    arabic: 'مكبر صوت',
    pronunciation: 'لاوتشبريشر',
    example: 'Der Lautsprecher ist laut.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(774),
    german: 'Mikrofon',
    arabic: 'ميكروفون',
    pronunciation: 'ميكروفون',
    example: 'Das Mikrofon ist empfindlich.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(775),
    german: 'Kamera',
    arabic: 'كاميرا',
    pronunciation: 'كاميرا',
    example: 'Die Kamera macht gute Fotos.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(776),
    german: 'Video',
    arabic: 'فيديو',
    pronunciation:  'فيديو',
    example: 'Das Video ist interessant.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(777),
    german: 'Foto',
    arabic: 'صورة',
    pronunciation: 'فوتو',
    example: 'Das Foto ist schön.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(778),
    german: 'Speicher',
    arabic: 'ذاكرة',
    pronunciation: 'شبايشر',
    example: 'Der Speicher ist voll.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(779),
    german: 'Festplatte',
    arabic: 'قرص صلب',
    pronunciation: 'فيستبلاته',
    example: 'Die Festplatte ist groß.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(780),
    german: 'Prozessor',
    arabic: 'معالج',
    pronunciation: 'بروتسيسور',
    example: 'Der Prozessor ist schnell.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(781),
    german: 'Grafikkarte',
    arabic: 'كرت الرسومات',
    pronunciation: 'جرافيككارته',
    example: 'Die Grafikkarte ist teuer.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(782),
    german: 'Monitor',
    arabic: 'شاشة',
    pronunciation: 'مونيتور',
    example: 'Der Monitor ist groß.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(783),
    german: 'Betriebssystem',
    arabic: 'نظام تشغيل',
    pronunciation: 'بيتريبسزوستيم',
    example: 'Das Betriebssystem ist stabil.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(784),
    german: 'Programm',
    arabic: 'برنامج',
    pronunciation: 'بروجرام',
    example: 'Das Programm ist nützlich.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(785),
    german: 'Update',
    arabic: 'تحديث',
    pronunciation: 'آبديت',
    example: 'Das Update ist verfügbar.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(786),
    german: 'Installation',
    arabic: 'تثبيت',
    pronunciation: 'إنستالاتسيون',
    example: 'Die Installation ist einfach.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(787),
    german: 'Virus',
    arabic: 'فيروس',
    pronunciation: 'فيروس',
    example: 'Der Virus ist gefährlich.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(788),
    german: 'Antivirus',
    arabic: 'مضاد فيروسات',
    pronunciation: 'آنتيفيروس',
    example: 'Das Antivirus schützt den Computer.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(789),
    german: 'Firewall',
    arabic: 'جدار ناري',
    pronunciation: 'فايرفال',
    example: 'Die Firewall blockiert Angriffe.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(790),
    german: 'Sicherheit',
    arabic: 'أمان',
    pronunciation: 'زيشرهايت',
    example: 'Sicherheit ist wichtig.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(791),
    german: 'Verschlüsselung',
    arabic: 'تشفير',
    pronunciation: 'فيرشلوسلونج',
    example: 'Verschlüsselung schützt Daten.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(792),
    german: 'Hacker',
    arabic: 'قرصان إلكتروني',
    pronunciation: 'هاكر',
    example: 'Hacker sind gefährlich.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(793),
    german: 'Spam',
    arabic: 'بريد مزعج',
    pronunciation: 'سبام',
    example: 'Spam ist nervig.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(794),
    german: 'Cookie',
    arabic: 'كوكي',
    pronunciation: 'كوكي',
    example: 'Cookies speichern Informationen.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(795),
    german: 'Browser',
    arabic: 'متصفح',
    pronunciation: 'براوزر',
    example: 'Der Browser ist schnell.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(796),
    german: 'Suchmaschine',
    arabic: 'محرك بحث',
    pronunciation: 'زوخماشينه',
    example: 'Die Suchmaschine findet alles.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(797),
    german: 'Link',
    arabic: 'رابط',
    pronunciation: 'لينك',
    example: 'Der Link führt zur Website.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(798),
    german: 'URL',
    arabic: 'رابط',
    pronunciation: 'أو-آر-إل',
    example: 'Die URL ist lang.',
    category: 'technology',
    level: 'A2'
  },
  {
    id: generateId(799),
    german: 'Domain',
    arabic: 'نطاق',
    pronunciation: 'دوماين',
    example: 'Die Domain ist registriert.',
    category: 'technology',
    level: 'A2'
  },

  // Sports (50 words)
  {
    id: generateId(800),
    german: 'Sport',
    arabic: 'رياضة',
    pronunciation: 'شبورت',
    example: 'Sport ist gesund.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(801),
    german: 'Fußball',
    arabic: 'كرة القدم',
    pronunciation: 'فوسبال',
    example: 'Fußball ist sehr beliebt.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(802),
    german: 'Basketball',
    arabic: 'كرة السلة',
    pronunciation: 'باسكيتبال',
    example: 'Basketball spielt man mit den Händen.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(803),
    german: 'Tennis',
    arabic: 'تنس',
    pronunciation: 'تينيس',
    example: 'Tennis spielt man mit einem Schläger.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(804),
    german: 'Volleyball',
    arabic: 'كرة الطائرة',
    pronunciation: 'فوليبال',
    example: 'Volleyball spielt man im Team.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(805),
    german: 'Handball',
    arabic: 'كرة اليد',
    pronunciation: 'هاندبال',
    example: 'Handball ist schnell.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(806),
    german: 'Schwimmen',
    arabic: 'سباحة',
    pronunciation: 'شفيمن',
    example: 'Schwimmen ist gut für den Körper.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(807),
    german: 'Laufen',
    arabic: 'جري',
    pronunciation: 'لاوفن',
    example: 'Laufen hält fit.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(808),
    german: 'Radfahren',
    arabic: 'ركوب الدراجة',
    pronunciation: 'رادفارن',
    example: 'Radfahren ist umweltfreundlich.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(809),
    german: 'Skifahren',
    arabic: 'تزلج',
    pronunciation: 'شيفارن',
    example: 'Skifahren macht Spaß.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(810),
    german: 'Snowboard',
    arabic: 'لوح التزلج',
    pronunciation: 'سنوبورد',
    example: 'Snowboard ist modern.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(811),
    german: 'Eishockey',
    arabic: 'هوكي الجليد',
    pronunciation: 'آيسهوكي',
    example: 'Eishockey ist hart.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(812),
    german: 'Golf',
    arabic: 'جولف',
    pronunciation: 'جولف',
    example: 'Golf braucht Präzision.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(813),
    german: 'Baseball',
    arabic: 'بيسبول',
    pronunciation: 'بيسبال',
    example: 'Baseball ist amerikanisch.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(814),
    german: 'Cricket',
    arabic: 'كريكت',
    pronunciation: 'كريكيت',
    example: 'Cricket ist kompliziert.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(815),
    german: 'Rugby',
    arabic: 'رجبي',
    pronunciation: 'راجبي',
    example: 'Rugby ist körperlich.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(816),
    german: 'Boxen',
    arabic: 'ملاكمة',
    pronunciation: 'بوكسن',
    example: 'Boxen ist ein Kampfsport.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(817),
    german: 'Karate',
    arabic: 'كاراتيه',
    pronunciation: 'كاراته',
    example: 'Karate kommt aus Japan.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(818),
    german: 'Judo',
    arabic: 'جودو',
    pronunciation: 'يودو',
    example: 'Judo ist eine Kampfkunst.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(819),
    german: 'Yoga',
    arabic: 'يوجا',
    pronunciation: 'يوجا',
    example: 'Yoga entspannt.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(820),
    german: 'Fitness',
    arabic: 'لياقة بدنية',
    pronunciation: 'فيتنيس',
    example: 'Fitness ist wichtig.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(821),
    german: 'Gymnastik',
    arabic: 'جمباز',
    pronunciation: 'جيمناستيك',
    example: 'Gymnastik ist elegant.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(822),
    german: 'Turnen',
    arabic: 'جمباز',
    pronunciation: 'تورنن',
    example: 'Turnen braucht Kraft.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(823),
    german: 'Leichtathletik',
    arabic: 'ألعاب القوى',
    pronunciation: 'لايشتآتليتيك',
    example: 'Leichtathletik hat viele Disziplinen.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(824),
    german: 'Marathon',
    arabic: 'ماراثون',
    pronunciation: 'ماراتون',
    example: 'Der Marathon ist lang.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(825),
    german: 'Sprint',
    arabic: 'عدو سريع',
    pronunciation: 'شبرينت',
    example: 'Der Sprint ist kurz.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(826),
    german: 'Hochsprung',
    arabic: 'قفز عالي',
    pronunciation: 'هوخشبرونج',
    example: 'Hochsprung ist spektakulär.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(827),
    german: 'Weitsprung',
    arabic: 'قفز طويل',
    pronunciation: 'فايتشبرونج',
    example: 'Weitsprung braucht Anlauf.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(828),
    german: 'Kugelstoßen',
    arabic: 'دفع الجلة',
    pronunciation: 'كوجلشتوسن',
    example: 'Kugelstoßen ist kraftvoll.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(829),
    german: 'Speerwerfen',
    arabic: 'رمي الرمح',
    pronunciation: 'شبيرفيرفن',
    example: 'Speerwerfen ist präzise.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(830),
    german: 'Diskuswerfen',
    arabic: 'رمي القرص',
    pronunciation: 'ديسكوسفيرفن',
    example: 'Diskuswerfen ist technisch.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(831),
    german: 'Hammerwerfen',
    arabic: 'رمي المطرقة',
    pronunciation: 'هامرفيرفن',
    example: 'Hammerwerfen ist gefährlich.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(832),
    german: 'Reiten',
    arabic: 'ركوب الخيل',
    pronunciation: 'رايتن',
    example: 'Reiten ist elegant.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(833),
    german: 'Segeln',
    arabic: 'إبحار',
    pronunciation: 'زيجلن',
    example: 'Segeln braucht Wind.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(834),
    german: 'Surfen',
    arabic: 'ركوب الأمواج',
    pronunciation: 'زورفن',
    example: 'Surfen ist aufregend.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(835),
    german: 'Tauchen',
    arabic: 'غوص',
    pronunciation: 'تاوخن',
    example: 'Tauchen ist faszinierend.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(836),
    german: 'Klettern',
    arabic: 'تسلق',
    pronunciation: 'كليترن',
    example: 'Klettern ist mutig.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(837),
    german: 'Wandern',
    arabic: 'تنزه',
    pronunciation: 'فاندرن',
    example: 'Wandern ist entspannend.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(838),
    german: 'Camping',
    arabic: 'تخييم',
    pronunciation: 'كامبينج',
    example: 'Camping ist abenteuerlich.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(839),
    german: 'Angeln',
    arabic: 'صيد السمك',
    pronunciation: 'آنجلن',
    example: 'Angeln ist geduldig.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(840),
    german: 'Jagd',
    arabic: 'صيد',
    pronunciation: 'ياجد',
    example: 'Jagd ist traditionell.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(841),
    german: 'Schießen',
    arabic: 'رماية',
    pronunciation: 'شيسن',
    example: 'Schießen braucht Konzentration.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(842),
    german: 'Bogenschießen',
    arabic: 'رماية بالقوس',
    pronunciation: 'بوجنشيسن',
    example: 'Bogenschießen ist präzise.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(843),
    german: 'Darts',
    arabic: 'دارتس',
    pronunciation: 'دارتس',
    example: 'Darts spielt man in der Kneipe.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(844),
    german: 'Billard',
    arabic: 'بلياردو',
    pronunciation: 'بيلارد',
    example: 'Billard ist strategisch.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(845),
    german: 'Bowling',
    arabic: 'بولينج',
    pronunciation: 'بولينج',
    example: 'Bowling macht Spaß.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(846),
    german: 'Kegeln',
    arabic: 'كيجلن',
    pronunciation: 'كيجلن',
    example: 'Kegeln ist traditionell.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(847),
    german: 'Tischtennis',
    arabic: 'تنس الطاولة',
    pronunciation: 'تيشتينيس',
    example: 'Tischtennis ist schnell.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(848),
    german: 'Badminton',
    arabic: 'بادمنتون',
    pronunciation: 'بادمينتون',
    example: 'Badminton spielt man mit Federball.',
    category: 'sports',
    level: 'A1'
  },
  {
    id: generateId(849),
    german: 'Squash',
    arabic: 'سكواش',
    pronunciation: 'سكواش',
    example: 'Squash ist intensiv.',
    category: 'sports',
    level: 'A1'
  },

  // Music (50 words)
  {
    id: generateId(850),
    german: 'Musik',
    arabic: 'موسيقى',
    pronunciation: 'موزيك',
    example: 'Musik macht glücklich.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(851),
    german: 'Lied',
    arabic: 'أغنية',
    pronunciation: 'ليد',
    example: 'Das Lied ist schön.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(852),
    german: 'Singen',
    arabic: 'غناء',
    pronunciation: 'زينجن',
    example: 'Singen macht Freude.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(853),
    german: 'Sänger',
    arabic: 'مغني',
    pronunciation: 'زينجر',
    example: 'Der Sänger ist berühmt.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(854),
    german: 'Sängerin',
    arabic: 'مغنية',
    pronunciation: 'زينجرين',
    example: 'Die Sängerin hat eine schöne Stimme.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(855),
    german: 'Instrument',
    arabic: 'آلة موسيقية',
    pronunciation: 'إنسترومنت',
    example: 'Das Instrument klingt gut.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(856),
    german: 'Klavier',
    arabic: 'بيانو',
    pronunciation: 'كلافير',
    example: 'Das Klavier hat 88 Tasten.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(857),
    german: 'Gitarre',
    arabic: 'جيتار',
    pronunciation: 'جيتاره',
    example: 'Die Gitarre hat sechs Saiten.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(858),
    german: 'Violine',
    arabic: 'كمان',
    pronunciation: 'فيولينه',
    example: 'Die Violine ist elegant.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(859),
    german: 'Geige',
    arabic: 'كمان',
    pronunciation: 'جايجه',
    example: 'Die Geige klingt schön.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(860),
    german: 'Cello',
    arabic: 'تشيلو',
    pronunciation: 'تشيلو',
    example: 'Das Cello ist groß.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(861),
    german: 'Kontrabass',
    arabic: 'كونترباص',
    pronunciation: 'كونتراباس',
    example: 'Der Kontrabass ist sehr groß.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(862),
    german: 'Flöte',
    arabic: 'فلوت',
    pronunciation: 'فلوته',
    example: 'Die Flöte ist silbern.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(863),
    german: 'Klarinette',
    arabic: 'كلارينيت',
    pronunciation: 'كلارينيته',
    example: 'Die Klarinette ist aus Holz.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(864),
    german: 'Saxophon',
    arabic: 'ساكسوفون',
    pronunciation: 'زاكسوفون',
    example: 'Das Saxophon ist golden.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(865),
    german: 'Trompete',
    arabic: 'ترومبيت',
    pronunciation: 'ترومبيته',
    example: 'Die Trompete ist laut.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(866),
    german: 'Posaune',
    arabic: 'ترومبون',
    pronunciation: 'بوزاونه',
    example: 'Die Posaune hat einen Zug.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(867),
    german: 'Horn',
    arabic: 'هورن',
    pronunciation: 'هورن',
    example: 'Das Horn ist rund.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(868),
    german: 'Tuba',
    arabic: 'توبا',
    pronunciation: 'توبا',
    example: 'Die Tuba ist sehr tief.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(869),
    german: 'Schlagzeug',
    arabic: 'طبول',
    pronunciation: 'شلاجتسويج',
    example: 'Das Schlagzeug ist laut.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(870),
    german: 'Trommel',
    arabic: 'طبلة',
    pronunciation: 'تروميل',
    example: 'Die Trommel macht Rhythmus.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(871),
    german: 'Becken',
    arabic: 'صنج',
    pronunciation: 'بيكن',
    example: 'Die Becken sind metallisch.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(872),
    german: 'Xylophon',
    arabic: 'إكسيلوفون',
    pronunciation: 'كسيلوفون',
    example: 'Das Xylophon hat Holzplatten.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(873),
    german: 'Harfe',
    arabic: 'قيثارة',
    pronunciation: 'هارفه',
    example: 'Die Harfe ist elegant.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(874),
    german: 'Orgel',
    arabic: 'أورغن',
    pronunciation: 'أورجل',
    example: 'Die Orgel ist in der Kirche.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(875),
    german: 'Akkordeon',
    arabic: 'أكورديون',
    pronunciation: 'آكورديون',
    example: 'Das Akkordeon ist faltbar.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(876),
    german: 'Harmonika',
    arabic: 'هارمونيكا',
    pronunciation: 'هارمونيكا',
    example: 'Die Harmonika ist klein.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(877),
    german: 'Mundharmonika',
    arabic: 'هارمونيكا فموية',
    pronunciation: 'موندهارمونيكا',
    example: 'Die Mundharmonika ist tragbar.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(878),
    german: 'Banjo',
    arabic: 'بانجو',
    pronunciation: 'بانيو',
    example: 'Das Banjo ist amerikanisch.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(879),
    german: 'Mandoline',
    arabic: 'مندولين',
    pronunciation: 'مندولينه',
    example: 'Die Mandoline ist klein.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(880),
    german: 'Ukulele',
    arabic: 'يوكوليلي',
    pronunciation: 'أوكوليله',
    example: 'Die Ukulele kommt aus Hawaii.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(881),
    german: 'Bass',
    arabic: 'باص',
    pronunciation: 'باس',
    example: 'Der Bass ist tief.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(882),
    german: 'E-Gitarre',
    arabic: 'جيتار كهربائي',
    pronunciation: 'إي-جيتاره',
    example: 'Die E-Gitarre braucht Strom.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(883),
    german: 'Verstärker',
    arabic: 'مكبر صوت',
    pronunciation: 'فيرشتيركر',
    example: 'Der Verstärker macht laut.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(884),
    german: 'Mikrofon',
    arabic: 'ميكروفون',
    pronunciation: 'ميكروفون',
    example: 'Das Mikrofon verstärkt die Stimme.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(885),
    german: 'Lautsprecher',
    arabic: 'مكبر صوت',
    pronunciation: 'لاوتشبريشر',
    example: 'Der Lautsprecher ist laut.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(886),
    german: 'Kopfhörer',
    arabic: 'سماعات رأس',
    pronunciation: 'كوبفهورر',
    example: 'Die Kopfhörer sind bequem.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(887),
    german: 'CD',
    arabic: 'سي دي',
    pronunciation: 'تسي-دي',
    example: 'Die CD hat 12 Lieder.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(888),
    german: 'DVD',
    arabic: 'دي في دي',
    pronunciation: 'دي-في-دي',
    example: 'Die DVD hat Videos.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(889),
    german: 'MP3',
    arabic: 'إم بي ثري',
    pronunciation: 'إم-بي-دراي',
    example: 'MP3 ist ein Audioformat.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(890),
    german: 'Playlist',
    arabic: 'قائمة تشغيل',
    pronunciation: 'بلايليست',
    example: 'Die Playlist hat 20 Lieder.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(891),
    german: 'Album',
    arabic: 'ألبوم',
    pronunciation: 'آلبوم',
    example: 'Das Album ist neu.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(892),
    german: 'Single',
    arabic: 'أغنية منفردة',
    pronunciation: 'زينجل',
    example: 'Die Single ist ein Hit.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(893),
    german: 'Konzert',
    arabic: 'حفلة موسيقية',
    pronunciation: 'كونتسيرت',
    example: 'Das Konzert ist ausverkauft.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(894),
    german: 'Oper',
    arabic: 'أوبرا',
    pronunciation: 'أوبر',
    example: 'Die Oper ist klassisch.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(895),
    german: 'Musical',
    arabic: 'مسرحية موسيقية',
    pronunciation: 'موزيكال',
    example: 'Das Musical ist unterhaltsam.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(896),
    german: 'Orchester',
    arabic: 'أوركسترا',
    pronunciation: 'أورشيستر',
    example: 'Das Orchester spielt klassische Musik.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(897),
    german: 'Band',
    arabic: 'فرقة موسيقية',
    pronunciation: 'باند',
    example: 'Die Band ist jung.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(898),
    german: 'Chor',
    arabic: 'جوقة',
    pronunciation: 'شور',
    example: 'Der Chor singt schön.',
    category: 'music',
    level: 'A1'
  },
  {
    id: generateId(899),
    german: 'Dirigent',
    arabic: 'قائد الأوركسترا',
    pronunciation: 'ديريجنت',
    example: 'Der Dirigent leitet das Orchester.',
    category: 'music',
    level: 'A1'
  },

  // Continue with more words to reach 1000+...
  // Adding final words to complete the vocabulary

  // Miscellaneous important words (100 words)
  {
    id: generateId(900),
    german: 'wichtig',
    arabic: 'مهم',
    pronunciation: 'فيشتيج',
    example: 'Das ist sehr wichtig.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(901),
    german: 'groß',
    arabic: 'كبير',
    pronunciation: 'جروس',
    example: 'Das Haus ist groß.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(902),
    german: 'klein',
    arabic: 'صغير',
    pronunciation: 'كلاين',
    example: 'Das Auto ist klein.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(903),
    german: 'neu',
    arabic: 'جديد',
    pronunciation: 'نوي',
    example: 'Das Buch ist neu.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(904),
    german: 'alt',
    arabic: 'قديم',
    pronunciation: 'آلت',
    example: 'Das Gebäude ist alt.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(905),
    german: 'jung',
    arabic: 'شاب',
    pronunciation: 'يونج',
    example: 'Der Mann ist jung.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(906),
    german: 'schön',
    arabic: 'جميل',
    pronunciation: 'شون',
    example: 'Die Blume ist schön.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(907),
    german: 'hässlich',
    arabic: 'قبيح',
    pronunciation: 'هيسليش',
    example: 'Das Bild ist hässlich.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(908),
    german: 'gut',
    arabic: 'جيد',
    pronunciation: 'جوت',
    example: 'Das Essen ist gut.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(909),
    german: 'schlecht',
    arabic: 'سيء',
    pronunciation: 'شليشت',
    example: 'Das Wetter ist schlecht.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(910),
    german: 'schnell',
    arabic: 'سريع',
    pronunciation: 'شنيل',
    example: 'Das Auto ist schnell.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(911),
    german: 'langsam',
    arabic: 'بطيء',
    pronunciation: 'لانجزام',
    example: 'Die Schildkröte ist langsam.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(912),
    german: 'stark',
    arabic: 'قوي',
    pronunciation: 'شتارك',
    example: 'Der Mann ist stark.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(913),
    german: 'schwach',
    arabic: 'ضعيف',
    pronunciation: 'شفاخ',
    example: 'Das Signal ist schwach.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(914),
    german: 'reich',
    arabic: 'غني',
    pronunciation: 'رايش',
    example: 'Der Mann ist reich.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(915),
    german: 'arm',
    arabic: 'فقير',
    pronunciation: 'آرم',
    example: 'Die Familie ist arm.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(916),
    german: 'teuer',
    arabic: 'غالي',
    pronunciation: 'تويير',
    example: 'Das Auto ist teuer.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(917),
    german: 'billig',
    arabic: 'رخيص',
    pronunciation: 'بيليج',
    example: 'Das Brot ist billig.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(918),
    german: 'kostenlos',
    arabic: 'مجاني',
    pronunciation: 'كوستنلوس',
    example: 'Das WLAN ist kostenlos.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(919),
    german: 'einfach',
    arabic: 'سهل',
    pronunciation: 'آينفاخ',
    example: 'Die Aufgabe ist einfach.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(920),
    german: 'schwer',
    arabic: 'صعب',
    pronunciation: 'شفير',
    example: 'Die Prüfung ist schwer.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(921),
    german: 'leicht',
    arabic: 'خفيف',
    pronunciation: 'لايشت',
    example: 'Der Koffer ist leicht.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(922),
    german: 'schwer',
    arabic: 'ثقيل',
    pronunciation: 'شفير',
    example: 'Der Stein ist schwer.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(923),
    german: 'lang',
    arabic: 'طويل',
    pronunciation: 'لانج',
    example: 'Der Weg ist lang.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(924),
    german: 'kurz',
    arabic: 'قصير',
    pronunciation: 'كورتس',
    example: 'Das Kleid ist kurz.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(925),
    german: 'hoch',
    arabic: 'عالي',
    pronunciation: 'هوخ',
    example: 'Der Berg ist hoch.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(926),
    german: 'niedrig',
    arabic: 'منخفض',
    pronunciation: 'نيدريج',
    example: 'Der Tisch ist niedrig.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(927),
    german: 'breit',
    arabic: 'عريض',
    pronunciation: 'برايت',
    example: 'Die Straße ist breit.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(928),
    german: 'schmal',
    arabic: 'ضيق',
    pronunciation: 'شمال',
    example: 'Der Gang ist schmal.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(929),
    german: 'dick',
    arabic: 'سميك',
    pronunciation: 'ديك',
    example: 'Das Buch ist dick.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(930),
    german: 'dünn',
    arabic: 'رفيع',
    pronunciation: 'دون',
    example: 'Das Papier ist dünn.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(931),
    german: 'voll',
    arabic: 'ممتلئ',
    pronunciation: 'فول',
    example: 'Das Glas ist voll.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(932),
    german: 'leer',
    arabic: 'فارغ',
    pronunciation: 'لير',
    example: 'Die Flasche ist leer.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(933),
    german: 'offen',
    arabic: 'مفتوح',
    pronunciation: 'أوفن',
    example: 'Die Tür ist offen.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(934),
    german: 'geschlossen',
    arabic: 'مغلق',
    pronunciation: 'جيشلوسن',
    example: 'Das Geschäft ist geschlossen.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(935),
    german: 'sauber',
    arabic: 'نظيف',
    pronunciation: 'زاوبر',
    example: 'Das Zimmer ist sauber.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(936),
    german: 'schmutzig',
    arabic: 'متسخ',
    pronunciation: 'شموتسيج',
    example: 'Die Kleidung ist schmutzig.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(937),
    german: 'frisch',
    arabic: 'طازج',
    pronunciation: 'فريش',
    example: 'Das Brot ist frisch.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(938),
    german: 'alt',
    arabic: 'قديم / بايت',
    pronunciation: 'آلت',
    example: 'Das Brot ist alt.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(939),
    german: 'süß',
    arabic: 'حلو',
    pronunciation: 'زوس',
    example: 'Der Kuchen ist süß.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(940),
    german: 'sauer',
    arabic: 'حامض',
    pronunciation: 'زاور',
    example: 'Die Zitrone ist sauer.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(941),
    german: 'salzig',
    arabic: 'مالح',
    pronunciation: 'زالتسيج',
    example: 'Das Meer ist salzig.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(942),
    german: 'bitter',
    arabic: 'مر',
    pronunciation: 'بيتر',
    example: 'Der Kaffee ist bitter.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(943),
    german: 'scharf',
    arabic: 'حار',
    pronunciation: 'شارف',
    example: 'Das Essen ist scharf.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(944),
    german: 'mild',
    arabic: 'معتدل',
    pronunciation: 'ميلد',
    example: 'Das Wetter ist mild.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(945),
    german: 'laut',
    arabic: 'عالي الصوت',
    pronunciation: 'لاوت',
    example: 'Die Musik ist laut.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(946),
    german: 'leise',
    arabic: 'هادئ',
    pronunciation: 'لايزه',
    example: 'Das Baby schläft leise.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(947),
    german: 'hell',
    arabic: 'مضيء',
    pronunciation: 'هيل',
    example: 'Das Licht ist hell.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(948),
    german: 'dunkel',
    arabic: 'مظلم',
    pronunciation: 'دونكل',
    example: 'Der Raum ist dunkel.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(949),
    german: 'weich',
    arabic: 'ناعم',
    pronunciation: 'فايش',
    example: 'Das Kissen ist weich.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(950),
    german: 'hart',
    arabic: 'صلب',
    pronunciation: 'هارت',
    example: 'Der Stein ist hart.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(951),
    german: 'glatt',
    arabic: 'أملس',
    pronunciation: 'جلات',
    example: 'Die Straße ist glatt.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(952),
    german: 'rau',
    arabic: 'خشن',
    pronunciation: 'راو',
    example: 'Die Wand ist rau.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(953),
    german: 'nass',
    arabic: 'مبلل',
    pronunciation: 'ناس',
    example: 'Die Kleidung ist nass.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(954),
    german: 'trocken',
    arabic: 'جاف',
    pronunciation: 'تروكن',
    example: 'Das Handtuch ist trocken.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(955),
    german: 'richtig',
    arabic: 'صحيح',
    pronunciation: 'ريشتيج',
    example: 'Die Antwort ist richtig.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(956),
    german: 'falsch',
    arabic: 'خطأ',
    pronunciation: 'فالش',
    example: 'Das ist falsch.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(957),
    german: 'möglich',
    arabic: 'ممكن',
    pronunciation: 'موجليش',
    example: 'Das ist möglich.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(958),
    german: 'unmöglich',
    arabic: 'مستحيل',
    pronunciation: 'أونموجليش',
    example: 'Das ist unmöglich.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(959),
    german: 'normal',
    arabic: 'عادي',
    pronunciation: 'نورمال',
    example: 'Das ist normal.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(960),
    german: 'besonders',
    arabic: 'خاص',
    pronunciation: 'بيزوندرس',
    example: 'Das ist besonders.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(961),
    german: 'gleich',
    arabic: 'نفس',
    pronunciation: 'جلايش',
    example: 'Die Bücher sind gleich.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(962),
    german: 'verschieden',
    arabic: 'مختلف',
    pronunciation: 'فيرشيدن',
    example: 'Die Farben sind verschieden.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(963),
    german: 'ähnlich',
    arabic: 'مشابه',
    pronunciation: 'إنليش',
    example: 'Die Häuser sind ähnlich.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(964),
    german: 'anders',
    arabic: 'مختلف',
    pronunciation: 'آندرس',
    example: 'Das ist anders.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(965),
    german: 'fertig',
    arabic: 'جاهز',
    pronunciation: 'فيرتيج',
    example: 'Das Essen ist fertig.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(966),
    german: 'bereit',
    arabic: 'مستعد',
    pronunciation: 'بيرايت',
    example: 'Ich bin bereit.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(967),
    german: 'kaputt',
    arabic: 'مكسور',
    pronunciation: 'كابوت',
    example: 'Das Auto ist kaputt.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(968),
    german: 'ganz',
    arabic: 'كامل',
    pronunciation: 'جانتس',
    example: 'Das Brot ist ganz.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(969),
    german: 'halb',
    arabic: 'نصف',
    pronunciation: 'هالب',
    example: 'Das Glas ist halb voll.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(970),
    german: 'letzter',
    arabic: 'الأخير',
    pronunciation: 'ليتستر',
    example: 'Das ist der letzte Tag.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(971),
    german: 'nächster',
    arabic: 'التالي',
    pronunciation: 'نيشستر',
    example: 'Nächste Woche fahre ich weg.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(972),
    german: 'früh',
    arabic: 'مبكر',
    pronunciation: 'فرو',
    example: 'Ich stehe früh auf.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(973),
    german: 'spät',
    arabic: 'متأخر',
    pronunciation: 'شبيت',
    example: 'Es ist schon spät.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(974),
    german: 'pünktlich',
    arabic: 'في الوقت المحدد',
    pronunciation: 'بونكتليش',
    example: 'Der Zug ist pünktlich.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(975),
    german: 'verspätet',
    arabic: 'متأخر',
    pronunciation: 'فيرشبيتيت',
    example: 'Das Flugzeug ist verspätet.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(976),
    german: 'privat',
    arabic: 'خاص',
    pronunciation: 'بريفات',
    example: 'Das ist privat.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(977),
    german: 'öffentlich',
    arabic: 'عام',
    pronunciation: 'أوفنتليش',
    example: 'Das ist ein öffentlicher Park.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(978),
    german: 'kostenlos',
    arabic: 'مجاني',
    pronunciation: 'كوستنلوس',
    example: 'Der Eintritt ist kostenlos.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(979),
    german: 'verfügbar',
    arabic: 'متاح',
    pronunciation: 'فيرفوجبار',
    example: 'Das Zimmer ist verfügbar.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(980),
    german: 'besetzt',
    arabic: 'مشغول',
    pronunciation: 'بيزيتست',
    example: 'Der Platz ist besetzt.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(981),
    german: 'frei',
    arabic: 'حر / فارغ',
    pronunciation: 'فراي',
    example: 'Der Stuhl ist frei.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(982),
    german: 'sicher',
    arabic: 'آمن',
    pronunciation: 'زيشر',
    example: 'Das Auto ist sicher.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(983),
    german: 'gefährlich',
    arabic: 'خطير',
    pronunciation: 'جيفيرليش',
    example: 'Das ist gefährlich.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(984),
    german: 'gesund',
    arabic: 'صحي',
    pronunciation: 'جيزوند',
    example: 'Sport ist gesund.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(985),
    german: 'krank',
    arabic: 'مريض',
    pronunciation: 'كرانك',
    example: 'Ich bin krank.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(986),
    german: 'lebendig',
    arabic: 'حي',
    pronunciation: 'ليبنديج',
    example: 'Der Fisch ist lebendig.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(987),
    german: 'tot',
    arabic: 'ميت',
    pronunciation: 'توت',
    example: 'Die Pflanze ist tot.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(988),
    german: 'verheiratet',
    arabic: 'متزوج',
    pronunciation: 'فيرهايراتيت',
    example: 'Sie ist verheiratet.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(989),
    german: 'ledig',
    arabic: 'أعزب',
    pronunciation: 'ليديج',
    example: 'Er ist ledig.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(990),
    german: 'geschieden',
    arabic: 'مطلق',
    pronunciation: 'جيشيدن',
    example: 'Sie ist geschieden.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(991),
    german: 'schwanger',
    arabic: 'حامل',
    pronunciation: 'شفانجر',
    example: 'Sie ist schwanger.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(992),
    german: 'arbeitslos',
    arabic: 'عاطل عن العمل',
    pronunciation: 'آربايتسلوس',
    example: 'Er ist arbeitslos.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(993),
    german: 'berufstätig',
    arabic: 'يعمل',
    pronunciation: 'بيروفستيتيج',
    example: 'Sie ist berufstätig.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(994),
    german: 'pensioniert',
    arabic: 'متقاعد',
    pronunciation: 'بينزيونيرت',
    example: 'Er ist pensioniert.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(995),
    german: 'berühmt',
    arabic: 'مشهور',
    pronunciation: 'بيروهمت',
    example: 'Der Schauspieler ist berühmt.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(996),
    german: 'unbekannt',
    arabic: 'غير معروف',
    pronunciation: 'أونبيكانت',
    example: 'Der Autor ist unbekannt.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(997),
    german: 'beliebt',
    arabic: 'محبوب',
    pronunciation: 'بيليبت',
    example: 'Das Restaurant ist beliebt.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(998),
    german: 'unbeliebt',
    arabic: 'غير محبوب',
    pronunciation: 'أونبيليبت',
    example: 'Der Politiker ist unbeliebt.',
    category: 'adjectives',
    level: 'A1'
  },
  {
    id: generateId(999),
    german: 'erfolgreich',
    arabic: 'ناجح',
    pronunciation: 'إرفولجرايش',
    example: 'Das Unternehmen ist erfolgreich.',
    category: 'adjectives',
    level: 'A1'
  }
];

export const categories = [
  { id: 'greetings', name: 'Greetings', nameArabic: 'التحيات' },
  { id: 'numbers', name: 'Numbers', nameArabic: 'الأرقام' },
  { id: 'colors', name: 'Colors', nameArabic: 'الألوان' },
  { id: 'food', name: 'Food & Drinks', nameArabic: 'طعام وشراب' },
  { id: 'family', name: 'Family', nameArabic: 'عائلة' },
  { id: 'professions', name: 'Professions', nameArabic: 'المهن' },
  { id: 'weather', name: 'Weather', nameArabic: 'الطقس' },
  { id: 'transportation', name: 'Transportation', nameArabic: 'المواصلات' },
  { id: 'time', name: 'Time', nameArabic: 'الوقت' },
  { id: 'animals', name: 'Animals', nameArabic: 'الحيوانات' },
  { id: 'house', name: 'House & Furniture', nameArabic: 'المنزل والأثاث' },
  { id: 'clothes', name: 'Clothes', nameArabic: 'الملابس' },
  { id: 'body', name: 'Body Parts', nameArabic: 'أجزاء الجسم' },
  { id: 'emotions', name: 'Emotions', nameArabic: 'المشاعر' },
  { id: 'education', name: 'Education', nameArabic: 'التعليم' },
  { id: 'technology', name: 'Technology', nameArabic: 'التكنولوجيا' },
  { id: 'sports', name: 'Sports', nameArabic: 'الرياضة' },
  { id: 'music', name: 'Music', nameArabic: 'الموسيقى' },
  { id: 'adjectives', name: 'Adjectives', nameArabic: 'الصفات' }
];

export const getWordOfTheDay = (): Word => {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const index = seed % vocabulary.length;
  return vocabulary[index];
};