import { QuizQuestion } from './types';

export const quizQuestions: QuizQuestion[] = [
  // Basic Level Questions (A1) - 50 questions
  {
    id: '1',
    question: 'What is the German word for "house"?',
    questionArabic: 'ما هي الكلمة الألمانية لـ "منزل"؟',
    options: ['Haus', 'Auto', 'Baum', 'Tisch'],
    optionsArabic: ['هاوس', 'آوتو', 'باوم', 'تيش'],
    correctAnswer: 0,
    explanation: 'Haus means house in German. It is a neuter noun (das Haus).'
  },
  {
    id: '2',
    question: 'Which article goes with "Mann" (man)?',
    questionArabic: 'أي أداة تعريف تذهب مع "Mann" (رجل)؟',
    options: ['die', 'der', 'das', 'den'],
    optionsArabic: ['دي', 'دير', 'داس', 'دين'],
    correctAnswer: 1,
    explanation: 'Mann is a masculine noun, so it takes the article "der".'
  },
  {
    id: '3',
    question: 'How do you say "I am learning German"?',
    questionArabic: 'كيف تقول "أنا أتعلم الألمانية"؟',
    options: ['Ich lerne Deutsch', 'Du lernst Deutsch', 'Er lernt Deutsch', 'Wir lernen Deutsch'],
    optionsArabic: ['إش ليرنه دويتش', 'دو ليرنست دويتش', 'إر ليرنت دويتش', 'فير ليرنن دويتش'],
    correctAnswer: 0,
    explanation: 'The first person singular form of "lernen" is "ich lerne".'
  },
  {
    id: '4',
    question: 'What color is "blau"?',
    questionArabic: 'ما هو لون "blau"؟',
    options: ['Red', 'Blue', 'Green', 'Yellow'],
    optionsArabic: ['أحمر', 'أزرق', 'أخضر', 'أصفر'],
    correctAnswer: 1,
    explanation: 'Blau means blue in German.'
  },
  {
    id: '5',
    question: 'Which number is "fünf"?',
    questionArabic: 'أي رقم هو "fünf"؟',
    options: ['3', '4', '5', '6'],
    optionsArabic: ['٣', '٤', '٥', '٦'],
    correctAnswer: 2,
    explanation: 'Fünf is the German word for five.'
  },
  {
    id: '6',
    question: 'What does "Guten Morgen" mean?',
    questionArabic: 'ماذا تعني "Guten Morgen"؟',
    options: ['Good evening', 'Good morning', 'Good night', 'Good afternoon'],
    optionsArabic: ['مساء الخير', 'صباح الخير', 'تصبح على خير', 'بعد الظهر الطيب'],
    correctAnswer: 1,
    explanation: 'Guten Morgen is the German greeting for "Good morning".'
  },
  {
    id: '7',
    question: 'Which modal verb means "can" or "to be able to"?',
    questionArabic: 'أي فعل مساعد يعني "يستطيع" أو "قادر على"؟',
    options: ['müssen', 'wollen', 'können', 'sollen'],
    optionsArabic: ['موسن', 'فولن', 'كونن', 'زولن'],
    correctAnswer: 2,
    explanation: 'Können means "can" or "to be able to" in German.'
  },
  {
    id: '8',
    question: 'What is the plural of "Kind" (child)?',
    questionArabic: 'ما هو جمع "Kind" (طفل)؟',
    options: ['Kinds', 'Kinder', 'Kindes', 'Kinden'],
    optionsArabic: ['كيندس', 'كيندر', 'كيندس', 'كيندن'],
    correctAnswer: 1,
    explanation: 'The plural of Kind is Kinder.'
  },
  {
    id: '9',
    question: 'How do you say "thank you" in German?',
    questionArabic: 'كيف تقول "شكرًا" بالألمانية؟',
    options: ['Bitte', 'Danke', 'Hallo', 'Tschüss'],
    optionsArabic: ['بيته', 'دانكه', 'هالو', 'تشوس'],
    correctAnswer: 1,
    explanation: 'Danke means "thank you" in German.'
  },
  {
    id: '10',
    question: 'Which preposition is used with "gehen" to mean "go to"?',
    questionArabic: 'أي حرف جر يُستخدم مع "gehen" ليعني "يذهب إلى"؟',
    options: ['mit', 'zu', 'von', 'bei'],
    optionsArabic: ['ميت', 'تسو', 'فون', 'باي'],
    correctAnswer: 1,
    explanation: 'The preposition "zu" is used with "gehen" to indicate direction (go to).'
  },
  {
    id: '11',
    question: 'What is the German word for "water"?',
    questionArabic: 'ما هي الكلمة الألمانية لـ "ماء"؟',
    options: ['Milch', 'Wasser', 'Saft', 'Bier'],
    optionsArabic: ['ميلش', 'فاسر', 'زافت', 'بير'],
    correctAnswer: 1,
    explanation: 'Wasser means water in German.'
  },
  {
    id: '12',
    question: 'Which day of the week is "Montag"?',
    questionArabic: 'أي يوم من أيام الأسبوع هو "Montag"؟',
    options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    optionsArabic: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء'],
    correctAnswer: 1,
    explanation: 'Montag is Monday in German.'
  },
  {
    id: '13',
    question: 'How do you form the past participle of "machen" (to make)?',
    questionArabic: 'كيف تكوّن اسم المفعول من "machen" (يصنع)؟',
    options: ['machte', 'gemacht', 'macht', 'machen'],
    optionsArabic: ['ماخته', 'جيماخت', 'ماخت', 'ماخن'],
    correctAnswer: 1,
    explanation: 'The past participle of "machen" is "gemacht".'
  },
  {
    id: '14',
    question: 'What does "Wie heißt du?" mean?',
    questionArabic: 'ماذا تعني "Wie heißt du?"؟',
    options: ['How are you?', 'What is your name?', 'Where are you from?', 'How old are you?'],
    optionsArabic: ['كيف حالك؟', 'ما اسمك؟', 'من أين أنت؟', 'كم عمرك؟'],
    correctAnswer: 1,
    explanation: '"Wie heißt du?" means "What is your name?" in German.'
  },
  {
    id: '15',
    question: 'Which article is used with "Sonne" (sun)?',
    questionArabic: 'أي أداة تعريف تُستخدم مع "Sonne" (شمس)؟',
    options: ['der', 'die', 'das', 'den'],
    optionsArabic: ['دير', 'دي', 'داس', 'دين'],
    correctAnswer: 1,
    explanation: 'Sonne is a feminine noun, so it takes the article "die".'
  },
  {
    id: '16',
    question: 'What is the German word for "book"?',
    questionArabic: 'ما هي الكلمة الألمانية لـ "كتاب"؟',
    options: ['Buch', 'Heft', 'Zeitung', 'Brief'],
    optionsArabic: ['بوخ', 'هيفت', 'تسايتونج', 'بريف'],
    correctAnswer: 0,
    explanation: 'Buch means book in German.'
  },
  {
    id: '17',
    question: 'How do you say "I have" in German?',
    questionArabic: 'كيف تقول "لدي" بالألمانية؟',
    options: ['Ich bin', 'Ich habe', 'Ich kann', 'Ich will'],
    optionsArabic: ['إش بين', 'إش هابه', 'إش كان', 'إش فيل'],
    correctAnswer: 1,
    explanation: '"Ich habe" means "I have" in German.'
  },
  {
    id: '18',
    question: 'Which season is "Winter"?',
    questionArabic: 'أي فصل هو "Winter"؟',
    options: ['Spring', 'Summer', 'Autumn', 'Winter'],
    optionsArabic: ['ربيع', 'صيف', 'خريف', 'شتاء'],
    correctAnswer: 3,
    explanation: 'Winter means winter in German.'
  },
  {
    id: '19',
    question: 'What does "Es regnet" mean?',
    questionArabic: 'ماذا تعني "Es regnet"؟',
    options: ['It is sunny', 'It is raining', 'It is snowing', 'It is windy'],
    optionsArabic: ['الجو مشمس', 'تمطر', 'تثلج', 'الجو عاصف'],
    correctAnswer: 1,
    explanation: '"Es regnet" means "It is raining" in German.'
  },
  {
    id: '20',
    question: 'Which verb means "to eat"?',
    questionArabic: 'أي فعل يعني "يأكل"؟',
    options: ['trinken', 'essen', 'schlafen', 'gehen'],
    optionsArabic: ['ترينكن', 'إسن', 'شلافن', 'جين'],
    correctAnswer: 1,
    explanation: 'Essen means "to eat" in German.'
  },
  {
    id: '21',
    question: 'What is the German word for "cat"?',
    questionArabic: 'ما هي الكلمة الألمانية لـ "قطة"؟',
    options: ['Hund', 'Katze', 'Vogel', 'Fisch'],
    optionsArabic: ['هوند', 'كاتسه', 'فوجل', 'فيش'],
    correctAnswer: 1,
    explanation: 'Katze means cat in German.'
  },
  {
    id: '22',
    question: 'How do you say "good night" in German?',
    questionArabic: 'كيف تقول "تصبح على خير" بالألمانية؟',
    options: ['Guten Morgen', 'Guten Tag', 'Guten Abend', 'Gute Nacht'],
    optionsArabic: ['جوتن مورجن', 'جوتن تاج', 'جوتن آبند', 'جوته ناخت'],
    correctAnswer: 3,
    explanation: '"Gute Nacht" means "good night" in German.'
  },
  {
    id: '23',
    question: 'Which pronoun is used for "she"?',
    questionArabic: 'أي ضمير يُستخدم لـ "هي"؟',
    options: ['er', 'sie', 'es', 'wir'],
    optionsArabic: ['إر', 'زي', 'إس', 'فير'],
    correctAnswer: 1,
    explanation: '"Sie" (lowercase) means "she" in German.'
  },
  {
    id: '24',
    question: 'What does "Entschuldigung" mean?',
    questionArabic: 'ماذا تعني "Entschuldigung"؟',
    options: ['Thank you', 'Excuse me', 'Hello', 'Goodbye'],
    optionsArabic: ['شكرًا', 'عذرًا', 'مرحبًا', 'وداعًا'],
    correctAnswer: 1,
    explanation: '"Entschuldigung" means "excuse me" or "sorry" in German.'
  },
  {
    id: '25',
    question: 'Which month is "Januar"?',
    questionArabic: 'أي شهر هو "Januar"؟',
    options: ['December', 'January', 'February', 'March'],
    optionsArabic: ['ديسمبر', 'يناير', 'فبراير', 'مارس'],
    correctAnswer: 1,
    explanation: 'Januar is January in German.'
  },
  {
    id: '26',
    question: 'How do you say "I am from Germany"?',
    questionArabic: 'كيف تقول "أنا من ألمانيا"؟',
    options: ['Ich bin aus Deutschland', 'Ich komme aus Deutschland', 'Ich wohne in Deutschland', 'All of the above'],
    optionsArabic: ['إش بين آوس دويتشلاند', 'إش كومه آوس دويتشلاند', 'إش فونه إن دويتشلاند', 'كل ما سبق'],
    correctAnswer: 3,
    explanation: 'All three expressions can be used to say you are from Germany, with slightly different nuances.'
  },
  {
    id: '27',
    question: 'What is the German word for "school"?',
    questionArabic: 'ما هي الكلمة الألمانية لـ "مدرسة"؟',
    options: ['Schule', 'Universität', 'Bibliothek', 'Büro'],
    optionsArabic: ['شوله', 'أونيفيرزيتيت', 'بيبليوتيك', 'بورو'],
    correctAnswer: 0,
    explanation: 'Schule means school in German.'
  },
  {
    id: '28',
    question: 'Which verb means "to sleep"?',
    questionArabic: 'أي فعل يعني "ينام"؟',
    options: ['arbeiten', 'schlafen', 'spielen', 'lesen'],
    optionsArabic: ['آربايتن', 'شلافن', 'شبيلن', 'ليزن'],
    correctAnswer: 1,
    explanation: 'Schlafen means "to sleep" in German.'
  },
  {
    id: '29',
    question: 'What does "Wo wohnst du?" mean?',
    questionArabic: 'ماذا تعني "Wo wohnst du?"؟',
    options: ['What do you do?', 'Where do you live?', 'When do you work?', 'Why are you here?'],
    optionsArabic: ['ماذا تعمل؟', 'أين تسكن؟', 'متى تعمل؟', 'لماذا أنت هنا؟'],
    correctAnswer: 1,
    explanation: '"Wo wohnst du?" means "Where do you live?" in German.'
  },
  {
    id: '30',
    question: 'Which article goes with "Auto" (car)?',
    questionArabic: 'أي أداة تعريف تذهب مع "Auto" (سيارة)؟',
    options: ['der', 'die', 'das', 'den'],
    optionsArabic: ['دير', 'دي', 'داس', 'دين'],
    correctAnswer: 2,
    explanation: 'Auto is a neuter noun, so it takes the article "das".'
  },
  {
    id: '31',
    question: 'What is the German word for "coffee"?',
    questionArabic: 'ما هي الكلمة الألمانية لـ "قهوة"؟',
    options: ['Tee', 'Kaffee', 'Milch', 'Saft'],
    optionsArabic: ['تيه', 'كافيه', 'ميلش', 'زافت'],
    correctAnswer: 1,
    explanation: 'Kaffee means coffee in German.'
  },
  {
    id: '32',
    question: 'How do you say "How much does it cost?"?',
    questionArabic: 'كيف تقول "كم يكلف؟"؟',
    options: ['Wie viel kostet es?', 'Wie alt bist du?', 'Wie geht es dir?', 'Wie heißt du?'],
    optionsArabic: ['في فيل كوستيت إس؟', 'في آلت بيست دو؟', 'في جيت إس دير؟', 'في هايست دو؟'],
    correctAnswer: 0,
    explanation: '"Wie viel kostet es?" means "How much does it cost?" in German.'
  },
  {
    id: '33',
    question: 'Which word means "big" or "large"?',
    questionArabic: 'أي كلمة تعني "كبير"؟',
    options: ['klein', 'groß', 'alt', 'neu'],
    optionsArabic: ['كلاين', 'جروس', 'آلت', 'نوي'],
    correctAnswer: 1,
    explanation: 'Groß means "big" or "large" in German.'
  },
  {
    id: '34',
    question: 'What does "Ich verstehe nicht" mean?',
    questionArabic: 'ماذا تعني "Ich verstehe nicht"؟',
    options: ['I don\'t know', 'I don\'t understand', 'I don\'t like it', 'I don\'t want it'],
    optionsArabic: ['لا أعرف', 'لا أفهم', 'لا أحبه', 'لا أريده'],
    correctAnswer: 1,
    explanation: '"Ich verstehe nicht" means "I don\'t understand" in German.'
  },
  {
    id: '35',
    question: 'Which preposition means "with"?',
    questionArabic: 'أي حرف جر يعني "مع"؟',
    options: ['ohne', 'mit', 'für', 'gegen'],
    optionsArabic: ['أونه', 'ميت', 'فور', 'جيجن'],
    correctAnswer: 1,
    explanation: 'Mit means "with" in German.'
  },
  {
    id: '36',
    question: 'What is the German word for "friend" (male)?',
    questionArabic: 'ما هي الكلمة الألمانية لـ "صديق" (ذكر)؟',
    options: ['Freund', 'Freundin', 'Bruder', 'Vater'],
    optionsArabic: ['فرويند', 'فرويندين', 'برودر', 'فاتر'],
    correctAnswer: 0,
    explanation: 'Freund means "friend" (male) in German.'
  },
  {
    id: '37',
    question: 'How do you say "I would like"?',
    questionArabic: 'كيف تقول "أود"؟',
    options: ['Ich will', 'Ich möchte', 'Ich kann', 'Ich muss'],
    optionsArabic: ['إش فيل', 'إش موشته', 'إش كان', 'إش موس'],
    correctAnswer: 1,
    explanation: '"Ich möchte" is the polite way to say "I would like" in German.'
  },
  {
    id: '38',
    question: 'Which word means "beautiful"?',
    questionArabic: 'أي كلمة تعني "جميل"؟',
    options: ['hässlich', 'schön', 'alt', 'neu'],
    optionsArabic: ['هيسليش', 'شون', 'آلت', 'نوي'],
    correctAnswer: 1,
    explanation: 'Schön means "beautiful" in German.'
  },
  {
    id: '39',
    question: 'What does "Bis später" mean?',
    questionArabic: 'ماذا تعني "Bis später"؟',
    options: ['Good morning', 'See you later', 'Good night', 'Thank you'],
    optionsArabic: ['صباح الخير', 'أراك لاحقًا', 'تصبح على خير', 'شكرًا'],
    correctAnswer: 1,
    explanation: '"Bis später" means "See you later" in German.'
  },
  {
    id: '40',
    question: 'Which verb means "to work"?',
    questionArabic: 'أي فعل يعني "يعمل"؟',
    options: ['spielen', 'arbeiten', 'lernen', 'fahren'],
    optionsArabic: ['شبيلن', 'آربايتن', 'ليرنن', 'فارن'],
    correctAnswer: 1,
    explanation: 'Arbeiten means "to work" in German.'
  },
  {
    id: '41',
    question: 'What is the German word for "money"?',
    questionArabic: 'ما هي الكلمة الألمانية لـ "نقود"؟',
    options: ['Zeit', 'Geld', 'Arbeit', 'Haus'],
    optionsArabic: ['تسايت', 'جيلد', 'آربايت', 'هاوس'],
    correctAnswer: 1,
    explanation: 'Geld means money in German.'
  },
  {
    id: '42',
    question: 'How do you say "I am hungry"?',
    questionArabic: 'كيف تقول "أنا جائع"؟',
    options: ['Ich bin müde', 'Ich habe Hunger', 'Ich bin krank', 'Ich habe Durst'],
    optionsArabic: ['إش بين مودي', 'إش هابه هونجر', 'إش بين كرانك', 'إش هابه دورست'],
    correctAnswer: 1,
    explanation: '"Ich habe Hunger" means "I am hungry" in German.'
  },
  {
    id: '43',
    question: 'Which word means "fast" or "quick"?',
    questionArabic: 'أي كلمة تعني "سريع"؟',
    options: ['langsam', 'schnell', 'groß', 'klein'],
    optionsArabic: ['لانجزام', 'شنيل', 'جروس', 'كلاين'],
    correctAnswer: 1,
    explanation: 'Schnell means "fast" or "quick" in German.'
  },
  {
    id: '44',
    question: 'What does "Sprechen Sie Englisch?" mean?',
    questionArabic: 'ماذا تعني "Sprechen Sie Englisch?"؟',
    options: ['Do you speak German?', 'Do you speak English?', 'Do you understand English?', 'Do you like English?'],
    optionsArabic: ['هل تتحدث الألمانية؟', 'هل تتحدث الإنجليزية؟', 'هل تفهم الإنجليزية؟', 'هل تحب الإنجليزية؟'],
    correctAnswer: 1,
    explanation: '"Sprechen Sie Englisch?" means "Do you speak English?" in German.'
  },
  {
    id: '45',
    question: 'Which article is used with "Zeit" (time)?',
    questionArabic: 'أي أداة تعريف تُستخدم مع "Zeit" (وقت)؟',
    options: ['der', 'die', 'das', 'den'],
    optionsArabic: ['دير', 'دي', 'داس', 'دين'],
    correctAnswer: 1,
    explanation: 'Zeit is a feminine noun, so it takes the article "die".'
  },
  {
    id: '46',
    question: 'What is the German word for "door"?',
    questionArabic: 'ما هي الكلمة الألمانية لـ "باب"؟',
    options: ['Fenster', 'Tür', 'Wand', 'Dach'],
    optionsArabic: ['فينستر', 'تور', 'فاند', 'داخ'],
    correctAnswer: 1,
    explanation: 'Tür means door in German.'
  },
  {
    id: '47',
    question: 'How do you say "What time is it?"?',
    questionArabic: 'كيف تقول "كم الساعة؟"؟',
    options: ['Wie spät ist es?', 'Wie alt bist du?', 'Wie geht es dir?', 'Wie heißt du?'],
    optionsArabic: ['في شبيت إست إس؟', 'في آلت بيست دو؟', 'في جيت إس دير؟', 'في هايست دو؟'],
    correctAnswer: 0,
    explanation: '"Wie spät ist es?" means "What time is it?" in German.'
  },
  {
    id: '48',
    question: 'Which word means "always"?',
    questionArabic: 'أي كلمة تعني "دائمًا"؟',
    options: ['nie', 'manchmal', 'immer', 'oft'],
    optionsArabic: ['ني', 'مانشمال', 'إمر', 'أوفت'],
    correctAnswer: 2,
    explanation: 'Immer means "always" in German.'
  },
  {
    id: '49',
    question: 'What does "Ich bin müde" mean?',
    questionArabic: 'ماذا تعني "Ich bin müde"؟',
    options: ['I am happy', 'I am tired', 'I am hungry', 'I am thirsty'],
    optionsArabic: ['أنا سعيد', 'أنا متعب', 'أنا جائع', 'أنا عطشان'],
    correctAnswer: 1,
    explanation: '"Ich bin müde" means "I am tired" in German.'
  },
  {
    id: '50',
    question: 'Which verb means "to drive"?',
    questionArabic: 'أي فعل يعني "يقود"؟',
    options: ['gehen', 'fahren', 'fliegen', 'laufen'],
    optionsArabic: ['جين', 'فارن', 'فليجن', 'لاوفن'],
    correctAnswer: 1,
    explanation: 'Fahren means "to drive" in German.'
  },

  // Intermediate Level Questions (A2-B1) - 50 questions
  {
    id: '51',
    question: 'Which case is used after the preposition "mit"?',
    questionArabic: 'أي حالة تُستخدم بعد حرف الجر "mit"؟',
    options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
    optionsArabic: ['الفاعل', 'المفعول المباشر', 'المفعول غير المباشر', 'الإضافة'],
    correctAnswer: 2,
    explanation: 'The preposition "mit" always takes the dative case.'
  },
  {
    id: '52',
    question: 'How do you form the perfect tense of "gehen"?',
    questionArabic: 'كيف تكوّن زمن الماضي التام من "gehen"؟',
    options: ['ich habe gegangen', 'ich bin gegangen', 'ich war gegangen', 'ich hatte gegangen'],
    optionsArabic: ['إش هابه جيجانجن', 'إش بين جيجانجن', 'إش فار جيجانجن', 'إش هاته جيجانجن'],
    correctAnswer: 1,
    explanation: 'Verbs of movement like "gehen" use "sein" as auxiliary verb in perfect tense.'
  },
  {
    id: '53',
    question: 'What is the comparative form of "gut"?',
    questionArabic: 'ما هي صيغة التفضيل من "gut"؟',
    options: ['guter', 'besser', 'am besten', 'mehr gut'],
    optionsArabic: ['جوتر', 'بيسر', 'آم بيستن', 'مير جوت'],
    correctAnswer: 1,
    explanation: 'The comparative of "gut" is "besser" (irregular form).'
  },
  {
    id: '54',
    question: 'Which separable verb means "to get up"?',
    questionArabic: 'أي فعل منفصل يعني "يستيقظ"؟',
    options: ['ausgehen', 'aufstehen', 'ankommen', 'einsteigen'],
    optionsArabic: ['آوسجين', 'آوفشتين', 'آنكومن', 'آينشتايجن'],
    correctAnswer: 1,
    explanation: 'Aufstehen means "to get up" or "to stand up".'
  },
  {
    id: '55',
    question: 'How do you say "I would like to have"?',
    questionArabic: 'كيف تقول "أود أن أحصل على"؟',
    options: ['Ich will haben', 'Ich möchte haben', 'Ich hätte gern', 'Ich kann haben'],
    optionsArabic: ['إش فيل هابن', 'إش موشته هابن', 'إش هيته جيرن', 'إش كان هابن'],
    correctAnswer: 2,
    explanation: '"Ich hätte gern" is the polite subjunctive form for "I would like to have".'
  },
  {
    id: '56',
    question: 'Which reflexive pronoun goes with "er"?',
    questionArabic: 'أي ضمير انعكاسي يذهب مع "er"؟',
    options: ['mich', 'dich', 'sich', 'uns'],
    optionsArabic: ['ميش', 'ديش', 'زيش', 'أونس'],
    correctAnswer: 2,
    explanation: 'The reflexive pronoun for "er" is "sich".'
  },
  {
    id: '57',
    question: 'What does "Ich freue mich auf" mean?',
    questionArabic: 'ماذا تعني "Ich freue mich auf"؟',
    options: ['I am angry about', 'I am looking forward to', 'I am worried about', 'I am tired of'],
    optionsArabic: ['أنا غاضب من', 'أتطلع إلى', 'أنا قلق بشأن', 'أنا متعب من'],
    correctAnswer: 1,
    explanation: '"Sich freuen auf" means "to look forward to".'
  },
  {
    id: '58',
    question: 'Which conjunction requires the verb at the end?',
    questionArabic: 'أي حرف عطف يتطلب الفعل في النهاية؟',
    options: ['und', 'aber', 'weil', 'oder'],
    optionsArabic: ['أوند', 'آبر', 'فايل', 'أودر'],
    correctAnswer: 2,
    explanation: 'Subordinating conjunctions like "weil" send the verb to the end of the clause.'
  },
  {
    id: '59',
    question: 'How do you say "since three years"?',
    questionArabic: 'كيف تقول "منذ ثلاث سنوات"؟',
    options: ['vor drei Jahren', 'seit drei Jahren', 'in drei Jahren', 'nach drei Jahren'],
    optionsArabic: ['فور دراي يارن', 'زايت دراي يارن', 'إن دراي يارن', 'ناخ دراي يارن'],
    correctAnswer: 1,
    explanation: '"Seit" is used for duration from a point in the past until now.'
  },
  {
    id: '60',
    question: 'What is the past tense of "können"?',
    questionArabic: 'ما هو الماضي من "können"؟',
    options: ['konnte', 'gekonnt', 'kann', 'könnte'],
    optionsArabic: ['كونته', 'جيكونت', 'كان', 'كونته'],
    correctAnswer: 0,
    explanation: 'The simple past (Präteritum) of "können" is "konnte".'
  },
  {
    id: '61',
    question: 'Which preposition is used with "denken"?',
    questionArabic: 'أي حرف جر يُستخدم مع "denken"؟',
    options: ['über', 'an', 'für', 'von'],
    optionsArabic: ['أوبر', 'آن', 'فور', 'فون'],
    correctAnswer: 1,
    explanation: '"Denken an" means "to think of/about someone or something".'
  },
  {
    id: '62',
    question: 'How do you form the future tense?',
    questionArabic: 'كيف تكوّن زمن المستقبل؟',
    options: ['haben + Partizip II', 'sein + Partizip II', 'werden + Infinitiv', 'würde + Infinitiv'],
    optionsArabic: ['هابن + اسم المفعول', 'زاين + اسم المفعول', 'فيردن + المصدر', 'فورده + المصدر'],
    correctAnswer: 2,
    explanation: 'Future tense is formed with "werden" + infinitive.'
  },
  {
    id: '63',
    question: 'What does "Es tut mir leid" mean?',
    questionArabic: 'ماذا تعني "Es tut mir leid"؟',
    options: ['I am happy', 'I am sorry', 'I am angry', 'I am confused'],
    optionsArabic: ['أنا سعيد', 'أنا آسف', 'أنا غاضب', 'أنا محتار'],
    correctAnswer: 1,
    explanation: '"Es tut mir leid" means "I am sorry".'
  },
  {
    id: '64',
    question: 'Which modal verb expresses obligation?',
    questionArabic: 'أي فعل مساعد يعبر عن الالتزام؟',
    options: ['können', 'wollen', 'müssen', 'dürfen'],
    optionsArabic: ['كونن', 'فولن', 'موسن', 'دورفن'],
    correctAnswer: 2,
    explanation: '"Müssen" expresses necessity or obligation.'
  },
  {
    id: '65',
    question: 'How do you say "I am interested in"?',
    questionArabic: 'كيف تقول "أنا مهتم بـ"؟',
    options: ['Ich interessiere mich für', 'Ich bin interessiert an', 'Ich habe Interesse in', 'Ich finde interessant'],
    optionsArabic: ['إش إنترسيره ميش فور', 'إش بين إنترسيرت آن', 'إش هابه إنترسه إن', 'إش فيندي إنترسانت'],
    correctAnswer: 0,
    explanation: '"Sich interessieren für" means "to be interested in".'
  },
  {
    id: '66',
    question: 'What is the genitive form of "der Mann"?',
    questionArabic: 'ما هي صيغة الإضافة من "der Mann"؟',
    options: ['dem Mann', 'den Mann', 'des Mannes', 'der Mann'],
    optionsArabic: ['ديم مان', 'دين مان', 'ديس مانيس', 'دير مان'],
    correctAnswer: 2,
    explanation: 'The genitive of "der Mann" is "des Mannes".'
  },
  {
    id: '67',
    question: 'Which verb means "to remember"?',
    questionArabic: 'أي فعل يعني "يتذكر"؟',
    options: ['vergessen', 'sich erinnern', 'denken', 'wissen'],
    optionsArabic: ['فيرجيسن', 'زيش إرينرن', 'دينكن', 'فيسن'],
    correctAnswer: 1,
    explanation: '"Sich erinnern" means "to remember".'
  },
  {
    id: '68',
    question: 'How do you express "in order to"?',
    questionArabic: 'كيف تعبر عن "من أجل"؟',
    options: ['für', 'um...zu', 'damit', 'wegen'],
    optionsArabic: ['فور', 'أوم...تسو', 'داميت', 'فيجن'],
    correctAnswer: 1,
    explanation: '"Um...zu" is used to express purpose (in order to).'
  },
  {
    id: '69',
    question: 'What does "Ich bin es gewohnt" mean?',
    questionArabic: 'ماذا تعني "Ich bin es gewohnt"؟',
    options: ['I am used to it', 'I am tired of it', 'I am good at it', 'I am afraid of it'],
    optionsArabic: ['أنا معتاد على ذلك', 'أنا متعب من ذلك', 'أنا جيد في ذلك', 'أنا خائف من ذلك'],
    correctAnswer: 0,
    explanation: '"Gewohnt sein" means "to be used to" or "to be accustomed to".'
  },
  {
    id: '70',
    question: 'Which particle is used for emphasis?',
    questionArabic: 'أي جسيم يُستخدم للتأكيد؟',
    options: ['mal', 'doch', 'ja', 'eben'],
    optionsArabic: ['مال', 'دوخ', 'يا', 'إيبن'],
    correctAnswer: 1,
    explanation: '"Doch" is often used for emphasis or contradiction.'
  },
  {
    id: '71',
    question: 'How do you say "neither...nor"?',
    questionArabic: 'كيف تقول "لا...ولا"؟',
    options: ['nicht...und nicht', 'weder...noch', 'kein...und kein', 'nie...und nie'],
    optionsArabic: ['نيشت...أوند نيشت', 'فيدر...نوخ', 'كاين...أوند كاين', 'ني...أوند ني'],
    correctAnswer: 1,
    explanation: '"Weder...noch" means "neither...nor".'
  },
  {
    id: '72',
    question: 'What is the passive form of "Man baut das Haus"?',
    questionArabic: 'ما هي الصيغة المبنية للمجهول من "Man baut das Haus"؟',
    options: ['Das Haus baut man', 'Das Haus wird gebaut', 'Das Haus ist gebaut', 'Das Haus hat gebaut'],
    optionsArabic: ['داس هاوس باوت مان', 'داس هاوس فيرد جيباوت', 'داس هاوس إست جيباوت', 'داس هاوس هات جيباوت'],
    correctAnswer: 1,
    explanation: 'The passive voice is formed with "werden" + past participle.'
  },
  {
    id: '73',
    question: 'Which verb requires the dative case?',
    questionArabic: 'أي فعل يتطلب حالة المفعول غير المباشر؟',
    options: ['sehen', 'helfen', 'kaufen', 'lesen'],
    optionsArabic: ['زين', 'هيلفن', 'كاوفن', 'ليزن'],
    correctAnswer: 1,
    explanation: '"Helfen" always takes the dative case.'
  },
  {
    id: '74',
    question: 'How do you say "the more...the more"?',
    questionArabic: 'كيف تقول "كلما...كلما"؟',
    options: ['mehr...mehr', 'je...desto', 'immer...immer', 'so...so'],
    optionsArabic: ['مير...مير', 'يه...ديستو', 'إمر...إمر', 'زو...زو'],
    correctAnswer: 1,
    explanation: '"Je...desto" is used for comparative constructions.'
  },
  {
    id: '75',
    question: 'What does "Ich habe vor" mean?',
    questionArabic: 'ماذا تعني "Ich habe vor"؟',
    options: ['I have in front', 'I intend to', 'I prefer', 'I prevent'],
    optionsArabic: ['لدي أمام', 'أعتزم', 'أفضل', 'أمنع'],
    correctAnswer: 1,
    explanation: '"Vorhaben" means "to intend" or "to plan".'
  },
  {
    id: '76',
    question: 'Which relative pronoun is used for "das Mädchen"?',
    questionArabic: 'أي ضمير موصول يُستخدم لـ "das Mädchen"؟',
    options: ['der', 'die', 'das', 'dem'],
    optionsArabic: ['دير', 'دي', 'داس', 'ديم'],
    correctAnswer: 2,
    explanation: 'The relative pronoun agrees with the gender of the noun: "das Mädchen" → "das".'
  },
  {
    id: '77',
    question: 'How do you express "instead of"?',
    questionArabic: 'كيف تعبر عن "بدلاً من"؟',
    options: ['anstatt', 'außer', 'ohne', 'trotz'],
    optionsArabic: ['آنشتات', 'آوسر', 'أونه', 'تروتس'],
    correctAnswer: 0,
    explanation: '"Anstatt" or "(an)statt" means "instead of".'
  },
  {
    id: '78',
    question: 'What is the subjunctive II form of "haben"?',
    questionArabic: 'ما هي صيغة الشرطية الثانية من "haben"؟',
    options: ['habe', 'hatte', 'hätte', 'gehabt'],
    optionsArabic: ['هابه', 'هاته', 'هيته', 'جيهابت'],
    correctAnswer: 2,
    explanation: 'The Konjunktiv II of "haben" is "hätte".'
  },
  {
    id: '79',
    question: 'Which preposition is used with "sich ärgern"?',
    questionArabic: 'أي حرف جر يُستخدم مع "sich ärgern"؟',
    options: ['auf', 'über', 'an', 'für'],
    optionsArabic: ['آوف', 'أوبر', 'آن', 'فور'],
    correctAnswer: 1,
    explanation: '"Sich ärgern über" means "to be annoyed about".'
  },
  {
    id: '80',
    question: 'How do you say "as soon as"?',
    questionArabic: 'كيف تقول "بمجرد أن"؟',
    options: ['so bald', 'sobald', 'so schnell', 'sofort'],
    optionsArabic: ['زو بالد', 'زوبالد', 'زو شنيل', 'زوفورت'],
    correctAnswer: 1,
    explanation: '"Sobald" means "as soon as".'
  },
  {
    id: '81',
    question: 'What does "Es kommt darauf an" mean?',
    questionArabic: 'ماذا تعني "Es kommt darauf an"؟',
    options: ['It comes from there', 'It depends', 'It arrives there', 'It comes back'],
    optionsArabic: ['يأتي من هناك', 'يعتمد على', 'يصل هناك', 'يعود'],
    correctAnswer: 1,
    explanation: '"Es kommt darauf an" means "it depends".'
  },
  {
    id: '82',
    question: 'Which case follows "während"?',
    questionArabic: 'أي حالة تتبع "während"؟',
    options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
    optionsArabic: ['الفاعل', 'المفعول المباشر', 'المفعول غير المباشر', 'الإضافة'],
    correctAnswer: 3,
    explanation: '"Während" (during) takes the genitive case.'
  },
  {
    id: '83',
    question: 'How do you say "to get used to"?',
    questionArabic: 'كيف تقول "يعتاد على"؟',
    options: ['sich gewöhnen an', 'sich erinnern an', 'sich freuen auf', 'sich ärgern über'],
    optionsArabic: ['زيش جيفونن آن', 'زيش إرينرن آن', 'زيش فرويين آوف', 'زيش إيرجرن أوبر'],
    correctAnswer: 0,
    explanation: '"Sich gewöhnen an" means "to get used to".'
  },
  {
    id: '84',
    question: 'What is the meaning of "zwar...aber"?',
    questionArabic: 'ما معنى "zwar...aber"؟',
    options: ['either...or', 'neither...nor', 'not only...but also', 'indeed...but'],
    optionsArabic: ['إما...أو', 'لا...ولا', 'ليس فقط...بل أيضاً', 'حقاً...لكن'],
    correctAnswer: 3,
    explanation: '"Zwar...aber" means "indeed...but" or "it is true that...but".'
  },
  {
    id: '85',
    question: 'Which verb means "to succeed"?',
    questionArabic: 'أي فعل يعني "ينجح"؟',
    options: ['versuchen', 'gelingen', 'schaffen', 'erreichen'],
    optionsArabic: ['فيرزوخن', 'جيلينجن', 'شافن', 'إرايخن'],
    correctAnswer: 1,
    explanation: '"Gelingen" means "to succeed" (impersonal verb).'
  },
  {
    id: '86',
    question: 'How do you express "in spite of"?',
    questionArabic: 'كيف تعبر عن "رغم"؟',
    options: ['wegen', 'trotz', 'außer', 'seit'],
    optionsArabic: ['فيجن', 'تروتس', 'آوسر', 'زايت'],
    correctAnswer: 1,
    explanation: '"Trotz" means "in spite of" or "despite".'
  },
  {
    id: '87',
    question: 'What does "Mir ist kalt" mean?',
    questionArabic: 'ماذا تعني "Mir ist kalt"؟',
    options: ['I am cold', 'I have a cold', 'It is cold for me', 'I feel cold'],
    optionsArabic: ['أنا بارد', 'لدي نزلة برد', 'الجو بارد بالنسبة لي', 'أشعر بالبرد'],
    correctAnswer: 3,
    explanation: '"Mir ist kalt" means "I feel cold" (dative construction).'
  },
  {
    id: '88',
    question: 'Which conjunction introduces an indirect question?',
    questionArabic: 'أي حرف عطف يقدم سؤالاً غير مباشر؟',
    options: ['dass', 'ob', 'weil', 'wenn'],
    optionsArabic: ['داس', 'أوب', 'فايل', 'فين'],
    correctAnswer: 1,
    explanation: '"Ob" introduces indirect yes/no questions.'
  },
  {
    id: '89',
    question: 'How do you say "to take place"?',
    questionArabic: 'كيف تقول "يحدث/يقام"؟',
    options: ['stattfinden', 'teilnehmen', 'vorkommen', 'geschehen'],
    optionsArabic: ['شتاتفيندن', 'تايلنيمن', 'فوركومن', 'جيشين'],
    correctAnswer: 0,
    explanation: '"Stattfinden" means "to take place".'
  },
  {
    id: '90',
    question: 'What is the meaning of "sowohl...als auch"?',
    questionArabic: 'ما معنى "sowohl...als auch"؟',
    options: ['either...or', 'both...and', 'not only...but also', 'neither...nor'],
    optionsArabic: ['إما...أو', 'كلاً من...و', 'ليس فقط...بل أيضاً', 'لا...ولا'],
    correctAnswer: 1,
    explanation: '"Sowohl...als auch" means "both...and".'
  },
  {
    id: '91',
    question: 'Which verb means "to notice"?',
    questionArabic: 'أي فعل يعني "يلاحظ"؟',
    options: ['bemerken', 'merken', 'erkennen', 'verstehen'],
    optionsArabic: ['بيميركن', 'ميركن', 'إركينن', 'فيرشتين'],
    correctAnswer: 0,
    explanation: '"Bemerken" means "to notice".'
  },
  {
    id: '92',
    question: 'How do you express "according to"?',
    questionArabic: 'كيف تعبر عن "وفقاً لـ"؟',
    options: ['nach', 'laut', 'gemäß', 'All of the above'],
    optionsArabic: ['ناخ', 'لاوت', 'جيميس', 'كل ما سبق'],
    correctAnswer: 3,
    explanation: 'All three prepositions can mean "according to".'
  },
  {
    id: '93',
    question: 'What does "Es geht um" mean?',
    questionArabic: 'ماذا تعني "Es geht um"؟',
    options: ['It goes around', 'It is about', 'It goes up', 'It goes away'],
    optionsArabic: ['يدور حول', 'يتعلق بـ', 'يصعد', 'يذهب بعيداً'],
    correctAnswer: 1,
    explanation: '"Es geht um" means "it is about" or "it concerns".'
  },
  {
    id: '94',
    question: 'Which modal particle expresses certainty?',
    questionArabic: 'أي جسيم وسطي يعبر عن اليقين؟',
    options: ['wohl', 'sicher', 'bestimmt', 'ja'],
    optionsArabic: ['فول', 'زيشر', 'بيشتيمت', 'يا'],
    correctAnswer: 3,
    explanation: 'The particle "ja" can express certainty or emphasis.'
  },
  {
    id: '95',
    question: 'How do you say "to look forward to"?',
    questionArabic: 'كيف تقول "يتطلع إلى"؟',
    options: ['sich freuen auf', 'sich freuen über', 'sich freuen für', 'sich freuen an'],
    optionsArabic: ['زيش فرويين آوف', 'زيش فرويين أوبر', 'زيش فرويين فور', 'زيش فرويين آن'],
    correctAnswer: 0,
    explanation: '"Sich freuen auf" means "to look forward to".'
  },
  {
    id: '96',
    question: 'What is the past participle of "bringen"?',
    questionArabic: 'ما هو اسم المفعول من "bringen"؟',
    options: ['gebringt', 'gebracht', 'brachte', 'gebrungen'],
    optionsArabic: ['جيبرينجت', 'جيبراخت', 'براخته', 'جيبرونجن'],
    correctAnswer: 1,
    explanation: 'The past participle of "bringen" is "gebracht".'
  },
  {
    id: '97',
    question: 'Which preposition is used with "sich entscheiden"?',
    questionArabic: 'أي حرف جر يُستخدم مع "sich entscheiden"؟',
    options: ['auf', 'für', 'über', 'an'],
    optionsArabic: ['آوف', 'فور', 'أوبر', 'آن'],
    correctAnswer: 1,
    explanation: '"Sich entscheiden für" means "to decide on/for".'
  },
  {
    id: '98',
    question: 'How do you say "it doesn\'t matter"?',
    questionArabic: 'كيف تقول "لا يهم"؟',
    options: ['Es ist egal', 'Es macht nichts', 'Es spielt keine Rolle', 'All of the above'],
    optionsArabic: ['إس إست إيجال', 'إس ماخت نيشتس', 'إس شبيلت كاينه رولي', 'كل ما سبق'],
    correctAnswer: 3,
    explanation: 'All three expressions mean "it doesn\'t matter".'
  },
  {
    id: '99',
    question: 'What does "Ich bin dabei" mean?',
    questionArabic: 'ماذا تعني "Ich bin dabei"؟',
    options: ['I am there', 'I am with it', 'I am in', 'I agree/I\'m in'],
    optionsArabic: ['أنا هناك', 'أنا معه', 'أنا بالداخل', 'أوافق/أنا موافق'],
    correctAnswer: 3,
    explanation: '"Ich bin dabei" means "I\'m in" or "count me in".'
  },
  {
    id: '100',
    question: 'Which verb means "to realize"?',
    questionArabic: 'أي فعل يعني "يدرك"؟',
    options: ['realisieren', 'merken', 'bemerken', 'All of the above'],
    optionsArabic: ['ريالزيرن', 'ميركن', 'بيميركن', 'كل ما سبق'],
    correctAnswer: 3,
    explanation: 'All three verbs can mean "to realize" in different contexts.'
  }
];

// Function to get questions by difficulty
export const getQuestionsByLevel = (level: 'A1' | 'A2' | 'B1' | 'B2'): QuizQuestion[] => {
  if (level === 'A1') {
    return quizQuestions.slice(0, 30);
  } else if (level === 'A2') {
    return quizQuestions.slice(20, 60);
  } else if (level === 'B1') {
    return quizQuestions.slice(40, 80);
  } else {
    return quizQuestions.slice(60, 100);
  }
};

// Function to get random questions
export const getRandomQuestions = (count: number): QuizQuestion[] => {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Function to get questions by topic (based on question content)
export const getQuestionsByTopic = (topic: string): QuizQuestion[] => {
  return quizQuestions.filter(q => 
    q.question.toLowerCase().includes(topic.toLowerCase()) ||
    q.explanation?.toLowerCase().includes(topic.toLowerCase())
  );
};