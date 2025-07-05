import { QuizQuestion } from '../types';

export const extendedQuizQuestions: QuizQuestion[] = [
  // Basic Level Questions (A1)
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

  // Intermediate Level Questions (A2-B1)
  {
    id: '11',
    question: 'What is the past participle of "sprechen" (to speak)?',
    questionArabic: 'ما هو اسم المفعول من "sprechen" (يتحدث)؟',
    options: ['gesprochen', 'gespricht', 'gesprachen', 'sprechte'],
    optionsArabic: ['جيشبروخن', 'جيشبريشت', 'جيشبراخن', 'شبريشته'],
    correctAnswer: 0,
    explanation: 'The past participle of "sprechen" is "gesprochen".'
  },
  {
    id: '12',
    question: 'Which case does the preposition "mit" require?',
    questionArabic: 'أي حالة يتطلبها حرف الجر "mit"؟',
    options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
    optionsArabic: ['الفاعل', 'المفعول المباشر', 'المفعول غير المباشر', 'الإضافة'],
    correctAnswer: 2,
    explanation: 'The preposition "mit" always requires the dative case.'
  },
  {
    id: '13',
    question: 'How do you form the comparative of "gut" (good)?',
    questionArabic: 'كيف تكوّن صيغة التفضيل من "gut" (جيد)؟',
    options: ['guter', 'besser', 'am besten', 'mehr gut'],
    optionsArabic: ['جوتر', 'بيسر', 'آم بيستن', 'مير جوت'],
    correctAnswer: 1,
    explanation: 'The comparative of "gut" is "besser" (better).'
  },
  {
    id: '14',
    question: 'What does "Ich hätte gerne..." mean?',
    questionArabic: 'ماذا تعني "Ich hätte gerne..."؟',
    options: ['I have...', 'I would like...', 'I had...', 'I will have...'],
    optionsArabic: ['لدي...', 'أود...', 'كان لدي...', 'سيكون لدي...'],
    correctAnswer: 1,
    explanation: '"Ich hätte gerne..." is a polite way to say "I would like..."'
  },
  {
    id: '15',
    question: 'Which auxiliary verb is used with "fahren" in perfect tense?',
    questionArabic: 'أي فعل مساعد يُستخدم مع "fahren" في زمن الماضي التام؟',
    options: ['haben', 'sein', 'werden', 'können'],
    optionsArabic: ['هابن', 'زاين', 'فيردن', 'كونن'],
    correctAnswer: 1,
    explanation: '"Fahren" uses "sein" as auxiliary verb: "Ich bin gefahren".'
  },
  {
    id: '16',
    question: 'What is the correct word order in: "Yesterday I went to the cinema"?',
    questionArabic: 'ما هو ترتيب الكلمات الصحيح في: "أمس ذهبت إلى السينما"؟',
    options: ['Gestern ich ging ins Kino', 'Gestern ging ich ins Kino', 'Ich ging gestern ins Kino', 'Ins Kino ging ich gestern'],
    optionsArabic: ['جيسترن إش جينج إنس كينو', 'جيسترن جينج إش إنس كينو', 'إش جينج جيسترن إنس كينو', 'إنس كينو جينج إش جيسترن'],
    correctAnswer: 1,
    explanation: 'When starting with a time expression, the verb comes second: "Gestern ging ich ins Kino".'
  },
  {
    id: '17',
    question: 'Which reflexive pronoun goes with "sich freuen" for "wir"?',
    questionArabic: 'أي ضمير انعكاسي يذهب مع "sich freuen" للضمير "wir"؟',
    options: ['sich', 'uns', 'euch', 'ihnen'],
    optionsArabic: ['زيش', 'أونس', 'أويش', 'إينن'],
    correctAnswer: 1,
    explanation: 'With "wir" the reflexive pronoun is "uns": "Wir freuen uns".'
  },
  {
    id: '18',
    question: 'What does "obwohl" mean?',
    questionArabic: 'ماذا تعني "obwohl"؟',
    options: ['because', 'although', 'when', 'if'],
    optionsArabic: ['لأن', 'رغم أن', 'عندما', 'إذا'],
    correctAnswer: 1,
    explanation: '"Obwohl" means "although" and sends the verb to the end of the clause.'
  },
  {
    id: '19',
    question: 'How do you say "I have been living here for 5 years"?',
    questionArabic: 'كيف تقول "أعيش هنا منذ 5 سنوات"؟',
    options: ['Ich wohne hier für 5 Jahre', 'Ich wohne hier seit 5 Jahren', 'Ich habe hier 5 Jahre gewohnt', 'Ich bin hier 5 Jahre'],
    optionsArabic: ['إش فونه هير فور 5 يارِه', 'إش فونه هير زايت 5 يارن', 'إش هابه هير 5 يارِه جيفونت', 'إش بين هير 5 يارِه'],
    correctAnswer: 1,
    explanation: 'For ongoing actions, use present tense with "seit": "Ich wohne hier seit 5 Jahren".'
  },
  {
    id: '20',
    question: 'What is the genitive form of "der Mann"?',
    questionArabic: 'ما هي صيغة الإضافة من "der Mann"؟',
    options: ['dem Mann', 'den Mann', 'des Mannes', 'der Mann'],
    optionsArabic: ['ديم مان', 'دين مان', 'ديس مانيس', 'دير مان'],
    correctAnswer: 2,
    explanation: 'The genitive of "der Mann" is "des Mannes".'
  },

  // Advanced Level Questions (B2-C1)
  {
    id: '21',
    question: 'Which subjunctive II form is correct for "haben" with "ich"?',
    questionArabic: 'أي صيغة شرطية ثانية صحيحة لـ "haben" مع "ich"؟',
    options: ['ich habe', 'ich hätte', 'ich hatte', 'ich werde haben'],
    optionsArabic: ['إش هابه', 'إش هيته', 'إش هاته', 'إش فيردِه هابن'],
    correctAnswer: 1,
    explanation: 'The subjunctive II form of "haben" with "ich" is "ich hätte".'
  },
  {
    id: '22',
    question: 'What does "Je mehr..., desto besser" mean?',
    questionArabic: 'ماذا تعني "Je mehr..., desto besser"؟',
    options: ['The more..., the better', 'More or less better', 'Better than more', 'Much more better'],
    optionsArabic: ['كلما أكثر... كلما أفضل', 'أكثر أو أقل أفضل', 'أفضل من أكثر', 'أفضل بكثير'],
    correctAnswer: 0,
    explanation: '"Je mehr..., desto besser" means "The more..., the better".'
  },
  {
    id: '23',
    question: 'Which particle is used in reported speech with subjunctive I?',
    questionArabic: 'أي أداة تُستخدم في الكلام المنقول مع الشرطية الأولى؟',
    options: ['dass', 'ob', 'wenn', 'als'],
    optionsArabic: ['داس', 'أوب', 'فين', 'آلس'],
    correctAnswer: 0,
    explanation: '"Dass" is commonly used in reported speech: "Er sagt, dass er krank sei".'
  },
  {
    id: '24',
    question: 'What is the passive form of "Man baut das Haus"?',
    questionArabic: 'ما هي الصيغة المبنية للمجهول من "Man baut das Haus"؟',
    options: ['Das Haus baut man', 'Das Haus wird gebaut', 'Das Haus ist gebaut', 'Man wird das Haus bauen'],
    optionsArabic: ['داس هاوس باوت مان', 'داس هاوس فيرد جيباوت', 'داس هاوس إست جيباوت', 'مان فيرد داس هاوس باون'],
    correctAnswer: 1,
    explanation: 'The passive form is "Das Haus wird gebaut" (The house is being built).'
  },
  {
    id: '25',
    question: 'Which conjunction requires the subjunctive mood?',
    questionArabic: 'أي أداة ربط تتطلب صيغة الشرطية؟',
    options: ['weil', 'damit', 'dass', 'als ob'],
    optionsArabic: ['فايل', 'داميت', 'داس', 'آلس أوب'],
    correctAnswer: 3,
    explanation: '"Als ob" (as if) requires the subjunctive mood: "Er tut, als ob er krank wäre".'
  },
  {
    id: '26',
    question: 'What does "anstatt zu + infinitive" express?',
    questionArabic: 'ماذا تعبر "anstatt zu + infinitive"؟',
    options: ['Purpose', 'Alternative action', 'Time', 'Cause'],
    optionsArabic: ['الغرض', 'فعل بديل', 'الوقت', 'السبب'],
    correctAnswer: 1,
    explanation: '"Anstatt zu" expresses an alternative action: "instead of doing".'
  },
  {
    id: '27',
    question: 'Which relative pronoun is correct: "Der Mann, ___ ich gesehen habe"?',
    questionArabic: 'أي ضمير موصول صحيح: "Der Mann, ___ ich gesehen habe"؟',
    options: ['der', 'den', 'dem', 'dessen'],
    optionsArabic: ['دير', 'دين', 'ديم', 'ديسن'],
    correctAnswer: 1,
    explanation: '"Den" is correct because "Mann" is the direct object (accusative) in the relative clause.'
  },
  {
    id: '28',
    question: 'What is the meaning of the prefix "zer-" in verbs?',
    questionArabic: 'ما معنى البادئة "zer-" في الأفعال؟',
    options: ['Together', 'Apart/destruction', 'Again', 'Before'],
    optionsArabic: ['معًا', 'منفصل/تدمير', 'مرة أخرى', 'قبل'],
    correctAnswer: 1,
    explanation: 'The prefix "zer-" indicates destruction or breaking apart, like "zerbrechen" (to break).'
  },
  {
    id: '29',
    question: 'Which form is used for polite requests with "können"?',
    questionArabic: 'أي صيغة تُستخدم للطلبات المهذبة مع "können"؟',
    options: ['Können Sie...?', 'Könnten Sie...?', 'Konnten Sie...?', 'Gekonnt Sie...?'],
    optionsArabic: ['كونن زي...؟', 'كونتن زي...؟', 'كونتن زي...؟', 'جيكونت زي...؟'],
    correctAnswer: 1,
    explanation: '"Könnten Sie...?" (subjunctive II) is more polite than "Können Sie...?"'
  },
  {
    id: '30',
    question: 'What does "Es sei denn, dass..." mean?',
    questionArabic: 'ماذا تعني "Es sei denn, dass..."؟',
    options: ['It is said that...', 'Unless...', 'It seems that...', 'Provided that...'],
    optionsArabic: ['يُقال أن...', 'إلا إذا...', 'يبدو أن...', 'بشرط أن...'],
    correctAnswer: 1,
    explanation: '"Es sei denn, dass..." means "unless" and introduces an exception.'
  },

  // Grammar-focused Questions
  {
    id: '31',
    question: 'Which ending does the adjective take: "Ein klein___ Kind"?',
    questionArabic: 'أي نهاية تأخذها الصفة: "Ein klein___ Kind"؟',
    options: ['-e', '-es', '-en', '-er'],
    optionsArabic: ['-ه', '-إس', '-إن', '-إر'],
    correctAnswer: 1,
    explanation: 'With indefinite article + neuter noun, the adjective takes "-es": "Ein kleines Kind".'
  },
  {
    id: '32',
    question: 'What is the correct form: "Ich interessiere mich ___ Sport"?',
    questionArabic: 'ما هي الصيغة الصحيحة: "Ich interessiere mich ___ Sport"؟',
    options: ['für', 'an', 'über', 'mit'],
    optionsArabic: ['فور', 'آن', 'أوبر', 'ميت'],
    correctAnswer: 0,
    explanation: '"Sich interessieren für" means "to be interested in".'
  },
  {
    id: '33',
    question: 'Which separable verb means "to pick up"?',
    questionArabic: 'أي فعل منفصل يعني "يلتقط"؟',
    options: ['aufheben', 'abheben', 'erheben', 'beheben'],
    optionsArabic: ['آوفهيبن', 'آبهيبن', 'إرهيبن', 'بيهيبن'],
    correctAnswer: 0,
    explanation: '"Aufheben" means "to pick up": "Ich hebe das Buch auf".'
  },
  {
    id: '34',
    question: 'What is the correct word order: "I think that he is coming tomorrow"?',
    questionArabic: 'ما هو ترتيب الكلمات الصحيح: "أعتقد أنه قادم غدًا"؟',
    options: ['Ich denke, dass er kommt morgen', 'Ich denke, dass er morgen kommt', 'Ich denke, er kommt morgen', 'Ich denke, morgen er kommt'],
    optionsArabic: ['إش دينكه، داس إر كومت مورجن', 'إش دينكه، داس إر مورجن كومت', 'إش دينكه، إر كومت مورجن', 'إش دينكه، مورجن إر كومت'],
    correctAnswer: 1,
    explanation: 'In subordinate clauses with "dass", the verb goes to the end: "dass er morgen kommt".'
  },
  {
    id: '35',
    question: 'Which preposition requires genitive case?',
    questionArabic: 'أي حرف جر يتطلب حالة الإضافة؟',
    options: ['mit', 'für', 'während', 'durch'],
    optionsArabic: ['ميت', 'فور', 'فيرند', 'دورش'],
    correctAnswer: 2,
    explanation: '"Während" (during) requires the genitive case: "während des Winters".'
  },

  // Vocabulary and Usage Questions
  {
    id: '36',
    question: 'What is the difference between "kennen" and "wissen"?',
    questionArabic: 'ما الفرق بين "kennen" و "wissen"؟',
    options: ['No difference', 'kennen = to know facts, wissen = to be familiar with', 'kennen = to be familiar with, wissen = to know facts', 'kennen is formal, wissen is informal'],
    optionsArabic: ['لا فرق', 'kennen = معرفة الحقائق، wissen = الإلمام بـ', 'kennen = الإلمام بـ، wissen = معرفة الحقائق', 'kennen رسمي، wissen غير رسمي'],
    correctAnswer: 2,
    explanation: '"Kennen" means to be familiar with (people, places), "wissen" means to know facts.'
  },
  {
    id: '37',
    question: 'Which word means "to rent" (as a tenant)?',
    questionArabic: 'أي كلمة تعني "يستأجر" (كمستأجر)؟',
    options: ['vermieten', 'mieten', 'leihen', 'borgen'],
    optionsArabic: ['فيرميتن', 'ميتن', 'لايهن', 'بورجن'],
    correctAnswer: 1,
    explanation: '"Mieten" means to rent as a tenant, "vermieten" means to rent out as a landlord.'
  },
  {
    id: '38',
    question: 'What does "verschlafen" mean?',
    questionArabic: 'ماذا تعني "verschlafen"؟',
    options: ['to sleep well', 'to oversleep', 'to fall asleep', 'to sleep badly'],
    optionsArabic: ['ينام جيدًا', 'ينام أكثر من اللازم', 'يغفو', 'ينام سيئًا'],
    correctAnswer: 1,
    explanation: '"Verschlafen" means to oversleep or to miss something by sleeping.'
  },
  {
    id: '39',
    question: 'Which word is used for "to study" at university?',
    questionArabic: 'أي كلمة تُستخدم لـ "يدرس" في الجامعة؟',
    options: ['lernen', 'studieren', 'unterrichten', 'lehren'],
    optionsArabic: ['ليرنن', 'شتوديرن', 'أونترريشتن', 'ليرن'],
    correctAnswer: 1,
    explanation: '"Studieren" is used for university studies, "lernen" for general learning.'
  },
  {
    id: '40',
    question: 'What does "umziehen" mean?',
    questionArabic: 'ماذا تعني "umziehen"؟',
    options: ['to change clothes', 'to move house', 'both meanings are correct', 'to turn around'],
    optionsArabic: ['يغير الملابس', 'ينتقل للسكن', 'كلا المعنيين صحيح', 'يستدير'],
    correctAnswer: 2,
    explanation: '"Umziehen" can mean both "to change clothes" and "to move house" depending on context.'
  },

  // Cultural and Practical Questions
  {
    id: '41',
    question: 'What is "Kehrwoche" in Germany?',
    questionArabic: 'ما هي "Kehrwoche" في ألمانيا؟',
    options: ['A type of cake', 'Cleaning duty in apartment buildings', 'A work week', 'A holiday'],
    optionsArabic: ['نوع من الكعك', 'واجب التنظيف في المباني السكنية', 'أسبوع عمل', 'عطلة'],
    correctAnswer: 1,
    explanation: '"Kehrwoche" is the weekly cleaning duty rotation in German apartment buildings.'
  },
  {
    id: '42',
    question: 'When do Germans typically say "Mahlzeit"?',
    questionArabic: 'متى يقول الألمان عادة "Mahlzeit"؟',
    options: ['Before eating', 'Around lunch time', 'After eating', 'When cooking'],
    optionsArabic: ['قبل الأكل', 'حول وقت الغداء', 'بعد الأكل', 'عند الطبخ'],
    correctAnswer: 1,
    explanation: '"Mahlzeit" is said around lunch time as a greeting, meaning "enjoy your meal".'
  },
  {
    id: '43',
    question: 'What is "Pfand" in Germany?',
    questionArabic: 'ما هو "Pfand" في ألمانيا؟',
    options: ['A type of bread', 'Deposit on bottles', 'A parking fee', 'A tax'],
    optionsArabic: ['نوع من الخبز', 'وديعة على الزجاجات', 'رسوم موقف', 'ضريبة'],
    correctAnswer: 1,
    explanation: '"Pfand" is the deposit paid on bottles and cans that you get back when returning them.'
  },
  {
    id: '44',
    question: 'What does "Feierabend" mean?',
    questionArabic: 'ماذا تعني "Feierabend"؟',
    options: ['Holiday evening', 'End of work day', 'Party night', 'Weekend'],
    optionsArabic: ['مساء العطلة', 'نهاية يوم العمل', 'ليلة حفلة', 'عطلة نهاية الأسبوع'],
    correctAnswer: 1,
    explanation: '"Feierabend" means the end of the work day, time to relax.'
  },
  {
    id: '45',
    question: 'What is "Schwarzfahren"?',
    questionArabic: 'ما هو "Schwarzfahren"؟',
    options: ['Driving at night', 'Riding public transport without a ticket', 'Driving a black car', 'Illegal racing'],
    optionsArabic: ['القيادة ليلاً', 'ركوب المواصلات العامة بدون تذكرة', 'قيادة سيارة سوداء', 'سباق غير قانوني'],
    correctAnswer: 1,
    explanation: '"Schwarzfahren" means riding public transport without paying for a ticket.'
  },

  // Advanced Grammar and Style
  {
    id: '46',
    question: 'Which style is more formal: "Ich würde gerne..." or "Ich möchte..."?',
    questionArabic: 'أي أسلوب أكثر رسمية: "Ich würde gerne..." أم "Ich möchte..."؟',
    options: ['Ich würde gerne...', 'Ich möchte...', 'Both are equally formal', 'Neither is formal'],
    optionsArabic: ['Ich würde gerne...', 'Ich möchte...', 'كلاهما رسمي بنفس الدرجة', 'لا أحدهما رسمي'],
    correctAnswer: 0,
    explanation: '"Ich würde gerne..." is more formal and polite than "Ich möchte..."'
  },
  {
    id: '47',
    question: 'What is the function of "doch" in: "Das ist doch klar!"?',
    questionArabic: 'ما وظيفة "doch" في: "Das ist doch klar!"؟',
    options: ['Emphasis', 'Negation', 'Question', 'Politeness'],
    optionsArabic: ['تأكيد', 'نفي', 'سؤال', 'أدب'],
    correctAnswer: 0,
    explanation: '"Doch" here adds emphasis, expressing that something is obvious.'
  },
  {
    id: '48',
    question: 'Which particle expresses assumption: "Er ist wohl zu Hause"?',
    questionArabic: 'أي أداة تعبر عن الافتراض: "Er ist wohl zu Hause"؟',
    options: ['wohl', 'doch', 'mal', 'eben'],
    optionsArabic: ['فول', 'دوخ', 'مال', 'إيبن'],
    correctAnswer: 0,
    explanation: '"Wohl" expresses assumption or probability: "He is probably at home".'
  },
  {
    id: '49',
    question: 'What does "eben" express in: "Das ist eben so"?',
    questionArabic: 'ماذا تعبر "eben" في: "Das ist eben so"؟',
    options: ['Surprise', 'Acceptance of facts', 'Disagreement', 'Question'],
    optionsArabic: ['مفاجأة', 'قبول الحقائق', 'عدم موافقة', 'سؤال'],
    correctAnswer: 1,
    explanation: '"Eben" expresses acceptance of facts: "That\'s just how it is".'
  },
  {
    id: '50',
    question: 'Which construction expresses regret about the past?',
    questionArabic: 'أي تركيب يعبر عن الندم على الماضي؟',
    options: ['Ich hätte... sollen', 'Ich werde... haben', 'Ich bin... gewesen', 'Ich war...'],
    optionsArabic: ['Ich hätte... sollen', 'Ich werde... haben', 'Ich bin... gewesen', 'Ich war...'],
    correctAnswer: 0,
    explanation: '"Ich hätte... sollen" expresses regret: "I should have..."'
  },

  // Idiomatic Expressions
  {
    id: '51',
    question: 'What does "Das ist mir Wurst" mean?',
    questionArabic: 'ماذا تعني "Das ist mir Wurst"؟',
    options: ['I like sausage', 'I don\'t care', 'That\'s delicious', 'I\'m hungry'],
    optionsArabic: ['أحب النقانق', 'لا يهمني', 'هذا لذيذ', 'أنا جائع'],
    correctAnswer: 1,
    explanation: '"Das ist mir Wurst" is an idiom meaning "I don\'t care" or "It doesn\'t matter to me".'
  },
  {
    id: '52',
    question: 'What does "Ich verstehe nur Bahnhof" mean?',
    questionArabic: 'ماذا تعني "Ich verstehe nur Bahnhof"؟',
    options: ['I only understand train stations', 'I don\'t understand anything', 'I like traveling', 'I work at a station'],
    optionsArabic: ['أفهم محطات القطار فقط', 'لا أفهم شيئًا', 'أحب السفر', 'أعمل في محطة'],
    correctAnswer: 1,
    explanation: '"Ich verstehe nur Bahnhof" means "I don\'t understand anything at all".'
  },
  {
    id: '53',
    question: 'What does "Da steppt der Bär" mean?',
    questionArabic: 'ماذا تعني "Da steppt der Bär"؟',
    options: ['There\'s a bear dancing', 'It\'s very lively/fun there', 'It\'s dangerous', 'It\'s in the forest'],
    optionsArabic: ['هناك دب يرقص', 'المكان مليء بالحيوية/المرح', 'إنه خطير', 'إنه في الغابة'],
    correctAnswer: 1,
    explanation: '"Da steppt der Bär" means "it\'s very lively/fun there" - there\'s a lot of action.'
  },
  {
    id: '54',
    question: 'What does "Ich habe die Nase voll" mean?',
    questionArabic: 'ماذا تعني "Ich habe die Nase voll"؟',
    options: ['My nose is full', 'I\'m fed up', 'I have a cold', 'I smell something'],
    optionsArabic: ['أنفي ممتلئ', 'لقد سئمت', 'لدي نزلة برد', 'أشم شيئًا'],
    correctAnswer: 1,
    explanation: '"Ich habe die Nase voll" means "I\'m fed up" or "I\'ve had enough".'
  },
  {
    id: '55',
    question: 'What does "Das geht auf keine Kuhhaut" mean?',
    questionArabic: 'ماذا تعني "Das geht auf keine Kuhhaut"؟',
    options: ['It doesn\'t fit on cow skin', 'That\'s outrageous/unbelievable', 'It\'s about farming', 'It\'s too expensive'],
    optionsArabic: ['لا يناسب جلد البقرة', 'هذا فاضح/لا يُصدق', 'يتعلق بالزراعة', 'إنه غالي جدًا'],
    correctAnswer: 1,
    explanation: '"Das geht auf keine Kuhhaut" means "that\'s outrageous" or "unbelievable".'
  },

  // Regional and Dialectal
  {
    id: '56',
    question: 'What is "Moin" in Northern Germany?',
    questionArabic: 'ما هي "Moin" في شمال ألمانيا؟',
    options: ['Goodbye', 'Hello (any time)', 'Good morning only', 'Thank you'],
    optionsArabic: ['وداعًا', 'مرحبًا (في أي وقت)', 'صباح الخير فقط', 'شكرًا'],
    correctAnswer: 1,
    explanation: '"Moin" is a Northern German greeting used at any time of day, not just morning.'
  },
  {
    id: '57',
    question: 'What does "Servus" mean in Bavaria/Austria?',
    questionArabic: 'ماذا تعني "Servus" في بافاريا/النمسا؟',
    options: ['Service', 'Hello/Goodbye', 'Please', 'Excuse me'],
    optionsArabic: ['خدمة', 'مرحبًا/وداعًا', 'من فضلك', 'عذرًا'],
    correctAnswer: 1,
    explanation: '"Servus" is used as both hello and goodbye in Bavaria and Austria.'
  },
  {
    id: '58',
    question: 'What is a "Brezel" called in Northern Germany?',
    questionArabic: 'ماذا تُسمى "Brezel" في شمال ألمانيا؟',
    options: ['Bretzel', 'Laugenstange', 'Salzbrezel', 'Same name'],
    optionsArabic: ['بريتسل', 'لاوجنشتانجه', 'زالتسبريتسل', 'نفس الاسم'],
    correctAnswer: 0,
    explanation: 'In Northern Germany, "Brezel" is often called "Bretzel".'
  },
  {
    id: '59',
    question: 'What does "Grüß Gott" mean in Southern Germany?',
    questionArabic: 'ماذا تعني "Grüß Gott" في جنوب ألمانيا؟',
    options: ['God bless', 'Hello', 'Goodbye', 'Thank God'],
    optionsArabic: ['بارك الله', 'مرحبًا', 'وداعًا', 'الحمد لله'],
    correctAnswer: 1,
    explanation: '"Grüß Gott" is a common greeting in Southern Germany and Austria, meaning "hello".'
  },
  {
    id: '60',
    question: 'What is "Tschö" or "Tschöö"?',
    questionArabic: 'ما هي "Tschö" أو "Tschöö"؟',
    options: ['A type of food', 'Informal goodbye', 'A question word', 'An exclamation'],
    optionsArabic: ['نوع من الطعام', 'وداع غير رسمي', 'كلمة استفهام', 'تعجب'],
    correctAnswer: 1,
    explanation: '"Tschö" or "Tschöö" is an informal way to say goodbye, similar to "ciao".'
  },

  // Business and Formal German
  {
    id: '61',
    question: 'How do you formally address someone in a business letter?',
    questionArabic: 'كيف تخاطب شخصًا رسميًا في رسالة عمل؟',
    options: ['Lieber Herr...', 'Sehr geehrter Herr...', 'Hallo Herr...', 'Guten Tag Herr...'],
    optionsArabic: ['ليبر هير...', 'زير جيإيرتر هير...', 'هالو هير...', 'جوتن تاج هير...'],
    correctAnswer: 1,
    explanation: '"Sehr geehrter Herr..." is the formal way to address someone in business correspondence.'
  },
  {
    id: '62',
    question: 'What does "Mit freundlichen Grüßen" mean?',
    questionArabic: 'ماذا تعني "Mit freundlichen Grüßen"؟',
    options: ['With friendly greetings', 'Best regards', 'Kind regards', 'All of the above'],
    optionsArabic: ['مع التحيات الودية', 'أطيب التحيات', 'تحيات طيبة', 'كل ما سبق'],
    correctAnswer: 3,
    explanation: '"Mit freundlichen Grüßen" is the standard formal closing, meaning all these variations.'
  },
  {
    id: '63',
    question: 'What does "Rücksprache halten" mean in business context?',
    questionArabic: 'ماذا تعني "Rücksprache halten" في السياق التجاري؟',
    options: ['To hold back', 'To consult/check with someone', 'To speak backwards', 'To return a call'],
    optionsArabic: ['يحتجز', 'يستشير/يراجع مع شخص', 'يتحدث بالعكس', 'يرد على مكالمة'],
    correctAnswer: 1,
    explanation: '"Rücksprache halten" means to consult or check with someone before making a decision.'
  },
  {
    id: '64',
    question: 'What is "Homeoffice" in German business context?',
    questionArabic: 'ما هو "Homeoffice" في السياق التجاري الألماني؟',
    options: ['Home decoration office', 'Working from home', 'Main office', 'Office at home'],
    optionsArabic: ['مكتب ديكور المنزل', 'العمل من المنزل', 'المكتب الرئيسي', 'مكتب في المنزل'],
    correctAnswer: 1,
    explanation: '"Homeoffice" means working from home, remote work.'
  },
  {
    id: '65',
    question: 'What does "Termin" mean in business German?',
    questionArabic: 'ماذا تعني "Termin" في الألمانية التجارية؟',
    options: ['Terminal', 'Appointment/deadline', 'Term', 'Termination'],
    optionsArabic: ['محطة', 'موعد/موعد نهائي', 'مصطلح', 'إنهاء'],
    correctAnswer: 1,
    explanation: '"Termin" means appointment or deadline in business context.'
  },

  // Technology and Modern German
  {
    id: '66',
    question: 'What is "googeln" in German?',
    questionArabic: 'ما هو "googeln" في الألمانية؟',
    options: ['To google/search online', 'To look with big eyes', 'To play games', 'To type'],
    optionsArabic: ['البحث في جوجل/البحث عبر الإنترنت', 'النظر بعيون كبيرة', 'لعب الألعاب', 'الكتابة'],
    correctAnswer: 0,
    explanation: '"Googeln" means to google or search for something online.'
  },
  {
    id: '67',
    question: 'What does "simsen" mean?',
    questionArabic: 'ماذا تعني "simsen"؟',
    options: ['To simulate', 'To send text messages', 'To sing', 'To swim'],
    optionsArabic: ['يحاكي', 'يرسل رسائل نصية', 'يغني', 'يسبح'],
    correctAnswer: 1,
    explanation: '"Simsen" means to send text messages (SMS).'
  },
  {
    id: '68',
    question: 'What is "WLAN" in German?',
    questionArabic: 'ما هو "WLAN" في الألمانية؟',
    options: ['Wide Local Area Network', 'Wireless LAN/WiFi', 'World Language Network', 'Work Load Analysis'],
    optionsArabic: ['شبكة محلية واسعة', 'شبكة لاسلكية/واي فاي', 'شبكة اللغة العالمية', 'تحليل عبء العمل'],
    correctAnswer: 1,
    explanation: '"WLAN" stands for "Wireless Local Area Network" - WiFi in German.'
  },
  {
    id: '69',
    question: 'What does "downloaden" mean?',
    questionArabic: 'ماذا تعني "downloaden"؟',
    options: ['To download', 'To load down', 'To unload', 'To reload'],
    optionsArabic: ['يحمّل', 'يحمل إلى أسفل', 'يفرغ', 'يعيد التحميل'],
    correctAnswer: 0,
    explanation: '"Downloaden" is the German verb for downloading files from the internet.'
  },
  {
    id: '70',
    question: 'What is "das Handy" in German?',
    questionArabic: 'ما هو "das Handy" في الألمانية؟',
    options: ['Something handy', 'Mobile phone', 'Hand tool', 'Handbook'],
    optionsArabic: ['شيء مفيد', 'هاتف محمول', 'أداة يدوية', 'دليل'],
    correctAnswer: 1,
    explanation: '"Das Handy" is the German word for mobile phone/cell phone.'
  },

  // Food and Dining
  {
    id: '71',
    question: 'What is "Abendbrot" in German culture?',
    questionArabic: 'ما هو "Abendbrot" في الثقافة الألمانية؟',
    options: ['Evening bread', 'Light dinner/supper', 'Breakfast', 'Midnight snack'],
    optionsArabic: ['خبز المساء', 'عشاء خفيف', 'إفطار', 'وجبة خفيفة منتصف الليل'],
    correctAnswer: 1,
    explanation: '"Abendbrot" is a light evening meal, typically bread with cold cuts and cheese.'
  },
  {
    id: '72',
    question: 'What does "Ich bin satt" mean?',
    questionArabic: 'ماذا تعني "Ich bin satt"؟',
    options: ['I am sad', 'I am full/satisfied', 'I am sitting', 'I am tired'],
    optionsArabic: ['أنا حزين', 'أنا شبعان/راضٍ', 'أنا جالس', 'أنا متعب'],
    correctAnswer: 1,
    explanation: '"Ich bin satt" means "I am full" (after eating) or satisfied.'
  },
  {
    id: '73',
    question: 'What is "Stammtisch" in German culture?',
    questionArabic: 'ما هو "Stammtisch" في الثقافة الألمانية؟',
    options: ['Family tree table', 'Regular table for regulars at a pub', 'Dining room table', 'Office desk'],
    optionsArabic: ['طاولة شجرة العائلة', 'طاولة منتظمة للزبائن المنتظمين في الحانة', 'طاولة غرفة الطعام', 'مكتب المكتب'],
    correctAnswer: 1,
    explanation: '"Stammtisch" is a regular table reserved for regular customers at a restaurant or pub.'
  },
  {
    id: '74',
    question: 'What does "Prost!" mean?',
    questionArabic: 'ماذا تعني "Prost!"؟',
    options: ['Cheers!', 'Please!', 'Protest!', 'Professional!'],
    optionsArabic: ['في صحتك!', 'من فضلك!', 'احتجاج!', 'مهني!'],
    correctAnswer: 0,
    explanation: '"Prost!" means "Cheers!" when toasting with drinks.'
  },
  {
    id: '75',
    question: 'What is "Kaffee und Kuchen" time in Germany?',
    questionArabic: 'ما هو وقت "Kaffee und Kuchen" في ألمانيا؟',
    options: ['Morning coffee', 'Afternoon coffee and cake', 'Evening dessert', 'Business meeting'],
    optionsArabic: ['قهوة الصباح', 'قهوة وكعك بعد الظهر', 'حلوى المساء', 'اجتماع عمل'],
    correctAnswer: 1,
    explanation: '"Kaffee und Kuchen" is the German tradition of afternoon coffee and cake, usually around 3-4 PM.'
  },

  // Weather and Seasons
  {
    id: '76',
    question: 'What does "Es schüttet wie aus Eimern" mean?',
    questionArabic: 'ماذا تعني "Es schüttet wie aus Eimern"؟',
    options: ['It\'s pouring buckets', 'It\'s raining heavily', 'It\'s very windy', 'It\'s snowing hard'],
    optionsArabic: ['تمطر دلاء', 'تمطر بغزارة', 'الرياح قوية جداً', 'تثلج بقوة'],
    correctAnswer: 1,
    explanation: '"Es schüttet wie aus Eimern" means "it\'s raining heavily" - literally "pouring like from buckets".'
  },
  {
    id: '77',
    question: 'What is "Schmuddelwetter"?',
    questionArabic: 'ما هو "Schmuddelwetter"؟',
    options: ['Beautiful weather', 'Nasty, wet, unpleasant weather', 'Snow weather', 'Hot weather'],
    optionsArabic: ['طقس جميل', 'طقس سيء ومبلل وغير سار', 'طقس ثلجي', 'طقس حار'],
    correctAnswer: 1,
    explanation: '"Schmuddelwetter" describes nasty, wet, unpleasant weather - typically cold, rainy, and gray.'
  },
  {
    id: '78',
    question: 'What does "Es ist saukalt" mean?',
    questionArabic: 'ماذا تعني "Es ist saukalt"؟',
    options: ['It\'s pig cold', 'It\'s extremely cold', 'It\'s moderately cold', 'It\'s not cold'],
    optionsArabic: ['برد الخنزير', 'برد شديد جداً', 'برد معتدل', 'ليس بارداً'],
    correctAnswer: 1,
    explanation: '"Es ist saukalt" is a colloquial way to say "it\'s extremely cold" - "sau-" intensifies the meaning.'
  },
  {
    id: '79',
    question: 'What is "Hundewetter"?',
    questionArabic: 'ما هو "Hundewetter"؟',
    options: ['Weather for dogs', 'Terrible weather', 'Rainy weather', 'Cold weather'],
    optionsArabic: ['طقس للكلاب', 'طقس فظيع', 'طقس ممطر', 'طقس بارد'],
    correctAnswer: 1,
    explanation: '"Hundewetter" means terrible weather - weather so bad you wouldn\'t send a dog out in it.'
  },
  {
    id: '80',
    question: 'What does "Die Sonne lacht" mean?',
    questionArabic: 'ماذا تعني "Die Sonne lacht"؟',
    options: ['The sun is laughing', 'It\'s sunny and beautiful', 'The sun is setting', 'It\'s partly cloudy'],
    optionsArabic: ['الشمس تضحك', 'الجو مشمس وجميل', 'الشمس تغرب', 'الجو غائم جزئياً'],
    correctAnswer: 1,
    explanation: '"Die Sonne lacht" is a poetic way to say the sun is shining brightly and it\'s beautiful weather.'
  },

  // Transportation and Travel
  {
    id: '81',
    question: 'What does "schwarzfahren" mean?',
    questionArabic: 'ماذا تعني "schwarzfahren"؟',
    options: ['To drive at night', 'To ride without a ticket', 'To drive illegally', 'To drive a black car'],
    optionsArabic: ['القيادة ليلاً', 'الركوب بدون تذكرة', 'القيادة بشكل غير قانوني', 'قيادة سيارة سوداء'],
    correctAnswer: 1,
    explanation: '"Schwarzfahren" means to ride public transport without paying for a ticket.'
  },
  {
    id: '82',
    question: 'What is "Stau" in German?',
    questionArabic: 'ما هو "Stau" في الألمانية؟',
    options: ['Traffic jam', 'Bus stop', 'Parking lot', 'Highway'],
    optionsArabic: ['ازدحام مروري', 'محطة حافلات', 'موقف سيارات', 'طريق سريع'],
    correctAnswer: 0,
    explanation: '"Stau" means traffic jam or traffic congestion.'
  },
  {
    id: '83',
    question: 'What does "umsteigen" mean in public transport?',
    questionArabic: 'ماذا تعني "umsteigen" في المواصلات العامة؟',
    options: ['To get on', 'To get off', 'To transfer/change trains', 'To buy a ticket'],
    optionsArabic: ['الصعود', 'النزول', 'التحويل/تغيير القطارات', 'شراء تذكرة'],
    correctAnswer: 2,
    explanation: '"Umsteigen" means to transfer or change from one train/bus to another.'
  },
  {
    id: '84',
    question: 'What is "Fernverkehr" in German transportation?',
    questionArabic: 'ما هو "Fernverkehr" في المواصلات الألمانية؟',
    options: ['Local transport', 'Long-distance transport', 'Air transport', 'Emergency transport'],
    optionsArabic: ['النقل المحلي', 'النقل لمسافات طويلة', 'النقل الجوي', 'النقل الطارئ'],
    correctAnswer: 1,
    explanation: '"Fernverkehr" refers to long-distance transportation, like intercity trains.'
  },
  {
    id: '85',
    question: 'What does "Verspätung" mean?',
    questionArabic: 'ماذا تعني "Verspätung"؟',
    options: ['On time', 'Early', 'Delay', 'Cancellation'],
    optionsArabic: ['في الوقت المحدد', 'مبكر', 'تأخير', 'إلغاء'],
    correctAnswer: 2,
    explanation: '"Verspätung" means delay - when transport arrives later than scheduled.'
  },

  // Shopping and Money
  {
    id: '86',
    question: 'What does "Das ist mir zu teuer" mean?',
    questionArabic: 'ماذا تعني "Das ist mir zu teuer"؟',
    options: ['That is too expensive for me', 'That is cheap', 'That is the right price', 'That is on sale'],
    optionsArabic: ['هذا غالي جداً بالنسبة لي', 'هذا رخيص', 'هذا السعر المناسب', 'هذا في تخفيض'],
    correctAnswer: 0,
    explanation: '"Das ist mir zu teuer" means "That is too expensive for me".'
  },
  {
    id: '87',
    question: 'What is "Rabatt" in German?',
    questionArabic: 'ما هو "Rabatt" في الألمانية؟',
    options: ['Receipt', 'Discount', 'Tax', 'Change (money)'],
    optionsArabic: ['إيصال', 'خصم', 'ضريبة', 'فكة'],
    correctAnswer: 1,
    explanation: '"Rabatt" means discount or reduction in price.'
  },
  {
    id: '88',
    question: 'What does "Kleingeld" mean?',
    questionArabic: 'ماذا تعني "Kleingeld"؟',
    options: ['Small money', 'Coins/change', 'Pocket money', 'Savings'],
    optionsArabic: ['نقود صغيرة', 'عملات معدنية/فكة', 'مصروف الجيب', 'مدخرات'],
    correctAnswer: 1,
    explanation: '"Kleingeld" means small change or coins.'
  },
  {
    id: '89',
    question: 'What is "Mehrwertsteuer" (MwSt.)?',
    questionArabic: 'ما هي "Mehrwertsteuer" (MwSt.)؟',
    options: ['Income tax', 'Value-added tax (VAT)', 'Property tax', 'Sales tax'],
    optionsArabic: ['ضريبة الدخل', 'ضريبة القيمة المضافة', 'ضريبة الممتلكات', 'ضريبة المبيعات'],
    correctAnswer: 1,
    explanation: '"Mehrwertsteuer" (MwSt.) is the German value-added tax (VAT).'
  },
  {
    id: '90',
    question: 'What does "Ich zahle bar" mean?',
    questionArabic: 'ماذا تعني "Ich zahle bar"؟',
    options: ['I pay by card', 'I pay cash', 'I pay later', 'I don\'t pay'],
    optionsArabic: ['أدفع بالبطاقة', 'أدفع نقداً', 'أدفع لاحقاً', 'لا أدفع'],
    correctAnswer: 1,
    explanation: '"Ich zahle bar" means "I pay cash" (with physical money).'
  },

  // Health and Body
  {
    id: '91',
    question: 'What does "Mir ist schlecht" mean?',
    questionArabic: 'ماذا تعني "Mir ist schlecht"؟',
    options: ['I am bad', 'I feel nauseous', 'I am sad', 'I am tired'],
    optionsArabic: ['أنا سيء', 'أشعر بالغثيان', 'أنا حزين', 'أنا متعب'],
    correctAnswer: 1,
    explanation: '"Mir ist schlecht" means "I feel nauseous" or "I feel sick to my stomach".'
  },
  {
    id: '92',
    question: 'What is "Hausarzt" in German healthcare?',
    questionArabic: 'ما هو "Hausarzt" في الرعاية الصحية الألمانية؟',
    options: ['House doctor', 'Family doctor/GP', 'Home nurse', 'Emergency doctor'],
    optionsArabic: ['طبيب المنزل', 'طبيب العائلة/طبيب عام', 'ممرضة منزلية', 'طبيب طوارئ'],
    correctAnswer: 1,
    explanation: '"Hausarzt" is your family doctor or general practitioner (GP).'
  },
  {
    id: '93',
    question: 'What does "Ich habe Kopfschmerzen" mean?',
    questionArabic: 'ماذا تعني "Ich habe Kopfschmerzen"؟',
    options: ['I have a headache', 'I have a head injury', 'I have head problems', 'I have a head cold'],
    optionsArabic: ['لدي صداع', 'لدي إصابة في الرأس', 'لدي مشاكل في الرأس', 'لدي نزلة برد في الرأس'],
    correctAnswer: 0,
    explanation: '"Ich habe Kopfschmerzen" means "I have a headache".'
  },
  {
    id: '94',
    question: 'What is "Notfall" in German?',
    questionArabic: 'ما هو "Notfall" في الألمانية؟',
    options: ['Not falling', 'Emergency', 'Accident', 'Hospital'],
    optionsArabic: ['عدم السقوط', 'طوارئ', 'حادث', 'مستشفى'],
    correctAnswer: 1,
    explanation: '"Notfall" means emergency - an urgent situation requiring immediate attention.'
  },
  {
    id: '95',
    question: 'What does "Gute Besserung" mean?',
    questionArabic: 'ماذا تعني "Gute Besserung"؟',
    options: ['Good improvement', 'Get well soon', 'Good luck', 'Good health'],
    optionsArabic: ['تحسن جيد', 'اشف عاجلاً', 'حظ سعيد', 'صحة جيدة'],
    correctAnswer: 1,
    explanation: '"Gute Besserung" means "Get well soon" - said to someone who is sick.'
  },

  // Time and Scheduling
  {
    id: '96',
    question: 'What does "übermorgen" mean?',
    questionArabic: 'ماذا تعني "übermorgen"؟',
    options: ['Over morning', 'The day after tomorrow', 'Early morning', 'Late morning'],
    optionsArabic: ['فوق الصباح', 'بعد غد', 'الصباح الباكر', 'الصباح المتأخر'],
    correctAnswer: 1,
    explanation: '"Übermorgen" means "the day after tomorrow".'
  },
  {
    id: '97',
    question: 'What is "vorgestern"?',
    questionArabic: 'ما هو "vorgestern"؟',
    options: ['Before yesterday', 'The day before yesterday', 'Early yesterday', 'Yesterday morning'],
    optionsArabic: ['قبل أمس', 'أول أمس', 'أمس مبكراً', 'صباح أمس'],
    correctAnswer: 1,
    explanation: '"Vorgestern" means "the day before yesterday".'
  },
  {
    id: '98',
    question: 'What does "Es ist höchste Zeit" mean?',
    questionArabic: 'ماذا تعني "Es ist höchste Zeit"؟',
    options: ['It\'s the highest time', 'It\'s about time/high time', 'It\'s time to climb', 'It\'s expensive time'],
    optionsArabic: ['إنه أعلى وقت', 'حان الوقت/الوقت المناسب', 'وقت التسلق', 'وقت غالي'],
    correctAnswer: 1,
    explanation: '"Es ist höchste Zeit" means "It\'s about time" or "It\'s high time" - something should have been done already.'
  },
  {
    id: '99',
    question: 'What does "rund um die Uhr" mean?',
    questionArabic: 'ماذا تعني "rund um die Uhr"؟',
    options: ['Around the clock', '24/7', 'All day and night', 'All of the above'],
    optionsArabic: ['حول الساعة', '24/7', 'طوال النهار والليل', 'كل ما سبق'],
    correctAnswer: 3,
    explanation: '"Rund um die Uhr" means "around the clock" - 24 hours a day, 7 days a week.'
  },
  {
    id: '100',
    question: 'What is "Spätschicht" in work context?',
    questionArabic: 'ما هو "Spätschicht" في سياق العمل؟',
    options: ['Late shift', 'Night shift', 'Evening shift', 'Overtime'],
    optionsArabic: ['نوبة متأخرة', 'نوبة ليلية', 'نوبة مسائية', 'وقت إضافي'],
    correctAnswer: 0,
    explanation: '"Spätschicht" means late shift - typically the afternoon/evening work shift.'
  }
];