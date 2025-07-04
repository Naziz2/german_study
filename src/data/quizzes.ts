import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
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
  }
];