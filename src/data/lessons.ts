import { GrammarLesson } from './types';

export const grammarLessons: GrammarLesson[] = [
  {
    id: '1',
    title: 'Personal Pronouns',
    titleArabic: 'الضمائر الشخصية',
    description: 'Learn the personal pronouns in German: ich, du, er, sie, es, wir, ihr, sie, Sie.',
    descriptionArabic: 'تعلم الضمائر الشخصية في الألمانية: ich, du, er, sie, es, wir, ihr, sie, Sie.',
    level: 'A1',
    examples: [
      { german: 'Ich komme aus Deutschland.', arabic: 'أنا من ألمانيا.' },
      { german: 'Du sprichst sehr gut Deutsch.', arabic: 'أنت تتحدث الألمانية جيدًا جدًا.' },
      { german: 'Er arbeitet in Berlin.', arabic: 'هو يعمل في برلين.' },
      { german: 'Sie ist Lehrerin.', arabic: 'هي معلمة.' },
      { german: 'Es regnet heute.', arabic: 'تمطر اليوم.' },
      { german: 'Wir gehen ins Kino.', arabic: 'نحن نذهب إلى السينما.' },
      { german: 'Ihr seid meine Freunde.', arabic: 'أنتم أصدقائي.' },
      { german: 'Sie kommen aus Österreich.', arabic: 'هم يأتون من النمسا.' }
    ]
  },
  {
    id: '2',
    title: 'Definite Articles',
    titleArabic: 'أدوات التعريف',
    description: 'Learn about the definite articles in German: der (masculine), die (feminine), das (neuter).',
    descriptionArabic: 'تعلم عن أدوات التعريف في الألمانية: der (مذكر), die (مؤنث), das (محايد).',
    level: 'A1',
    examples: [
      { german: 'Der Mann liest ein Buch.', arabic: 'الرجل يقرأ كتابًا.' },
      { german: 'Die Frau trinkt Wasser.', arabic: 'المرأة تشرب الماء.' },
      { german: 'Das Kind spielt im Garten.', arabic: 'الطفل يلعب في الحديقة.' },
      { german: 'Der Hund bellt laut.', arabic: 'الكلب ينبح بصوت عالٍ.' },
      { german: 'Die Katze schläft.', arabic: 'القطة تنام.' },
      { german: 'Das Auto ist rot.', arabic: 'السيارة حمراء.' }
    ]
  },
  {
    id: '3',
    title: 'Present Tense',
    titleArabic: 'زمن المضارع',
    description: 'Learn how to conjugate regular verbs in the present tense.',
    descriptionArabic: 'تعلم كيفية تصريف الأفعال العادية في زمن المضارع.',
    level: 'A1',
    examples: [
      { german: 'Ich lerne Deutsch.', arabic: 'أنا أتعلم الألمانية.' },
      { german: 'Du lernst Arabisch.', arabic: 'أنت تتعلم العربية.' },
      { german: 'Er lernt Englisch.', arabic: 'هو يتعلم الإنجليزية.' },
      { german: 'Wir lernen zusammen.', arabic: 'نحن نتعلم معًا.' },
      { german: 'Ihr lernt schnell.', arabic: 'أنتم تتعلمون بسرعة.' },
      { german: 'Sie lernen gern.', arabic: 'هم يحبون التعلم.' }
    ]
  },
  {
    id: '4',
    title: 'Modal Verbs',
    titleArabic: 'الأفعال المساعدة',
    description: 'Learn the most important modal verbs in German: können, müssen, wollen, etc.',
    descriptionArabic: 'تعلم أهم الأفعال المساعدة في الألمانية: können, müssen, wollen, إلخ.',
    level: 'A1',
    examples: [
      { german: 'Ich kann Deutsch sprechen.', arabic: 'أستطيع التحدث بالألمانية.' },
      { german: 'Du musst jetzt gehen.', arabic: 'يجب أن تذهب الآن.' },
      { german: 'Er will nach Hause.', arabic: 'هو يريد الذهاب إلى المنزل.' },
      { german: 'Wir sollen pünktlich sein.', arabic: 'ينبغي أن نكون في الوقت المحدد.' },
      { german: 'Ihr dürft hier spielen.', arabic: 'يُسمح لكم باللعب هنا.' },
      { german: 'Sie mögen Pizza.', arabic: 'هم يحبون البيتزا.' }
    ]
  },
  {
    id: '5',
    title: 'Indefinite Articles',
    titleArabic: 'أدوات التنكير',
    description: 'Learn about indefinite articles: ein (masculine/neuter), eine (feminine).',
    descriptionArabic: 'تعلم عن أدوات التنكير: ein (مذكر/محايد), eine (مؤنث).',
    level: 'A1',
    examples: [
      { german: 'Ein Mann geht spazieren.', arabic: 'رجل يتمشى.' },
      { german: 'Eine Frau kauft Brot.', arabic: 'امرأة تشتري خبزًا.' },
      { german: 'Ein Kind weint.', arabic: 'طفل يبكي.' },
      { german: 'Ein Hund läuft schnell.', arabic: 'كلب يجري بسرعة.' },
      { german: 'Eine Katze sitzt auf dem Dach.', arabic: 'قطة تجلس على السطح.' },
      { german: 'Ein Auto fährt vorbei.', arabic: 'سيارة تمر.' }
    ]
  },
  {
    id: '6',
    title: 'Negation with "nicht" and "kein"',
    titleArabic: 'النفي بـ "nicht" و "kein"',
    description: 'Learn how to negate sentences using "nicht" and "kein".',
    descriptionArabic: 'تعلم كيفية نفي الجمل باستخدام "nicht" و "kein".',
    level: 'A1',
    examples: [
      { german: 'Ich spreche nicht Französisch.', arabic: 'لا أتحدث الفرنسية.' },
      { german: 'Das ist kein Problem.', arabic: 'هذه ليست مشكلة.' },
      { german: 'Ich habe keine Zeit.', arabic: 'ليس لدي وقت.' },
      { german: 'Er kommt nicht heute.', arabic: 'هو لا يأتي اليوم.' },
      { german: 'Sie hat kein Auto.', arabic: 'ليس لديها سيارة.' },
      { german: 'Wir gehen nicht ins Kino.', arabic: 'نحن لا نذهب إلى السينما.' }
    ]
  },
  {
    id: '7',
    title: 'Question Formation',
    titleArabic: 'تكوين الأسئلة',
    description: 'Learn how to form different types of questions in German.',
    descriptionArabic: 'تعلم كيفية تكوين أنواع مختلفة من الأسئلة في الألمانية.',
    level: 'A1',
    examples: [
      { german: 'Wie heißt du?', arabic: 'ما اسمك؟' },
      { german: 'Wo wohnst du?', arabic: 'أين تسكن؟' },
      { german: 'Was machst du?', arabic: 'ماذا تفعل؟' },
      { german: 'Wann kommst du?', arabic: 'متى تأتي؟' },
      { german: 'Warum lernst du Deutsch?', arabic: 'لماذا تتعلم الألمانية؟' },
      { german: 'Wie alt bist du?', arabic: 'كم عمرك؟' }
    ]
  },
  {
    id: '8',
    title: 'Accusative Case',
    titleArabic: 'حالة المفعول المباشر',
    description: 'Learn when and how to use the accusative case in German.',
    descriptionArabic: 'تعلم متى وكيف تستخدم حالة المفعول المباشر في الألمانية.',
    level: 'A1',
    examples: [
      { german: 'Ich sehe den Mann.', arabic: 'أرى الرجل.' },
      { german: 'Sie kauft eine Blume.', arabic: 'تشتري زهرة.' },
      { german: 'Wir haben das Buch gelesen.', arabic: 'قرأنا الكتاب.' },
      { german: 'Er trinkt einen Kaffee.', arabic: 'يشرب قهوة.' },
      { german: 'Sie isst eine Banane.', arabic: 'تأكل موزة.' },
      { german: 'Ich kaufe das Auto.', arabic: 'أشتري السيارة.' }
    ]
  },
  {
    id: '9',
    title: 'Dative Case',
    titleArabic: 'حالة المفعول غير المباشر',
    description: 'Learn when and how to use the dative case in German.',
    descriptionArabic: 'تعلم متى وكيف تستخدم حالة المفعول غير المباشر في الألمانية.',
    level: 'A2',
    examples: [
      { german: 'Ich gebe dem Mann das Buch.', arabic: 'أعطي الكتاب للرجل.' },
      { german: 'Das gehört meiner Schwester.', arabic: 'هذا يخص أختي.' },
      { german: 'Mit dem Auto fahren.', arabic: 'القيادة بالسيارة.' },
      { german: 'Ich helfe der Frau.', arabic: 'أساعد المرأة.' },
      { german: 'Das Buch gefällt dem Kind.', arabic: 'الكتاب يعجب الطفل.' },
      { german: 'Wir danken den Lehrern.', arabic: 'نشكر المعلمين.' }
    ]
  },
  {
    id: '10',
    title: 'Prepositions with Accusative',
    titleArabic: 'حروف الجر مع المفعول المباشر',
    description: 'Learn prepositions that always take the accusative case.',
    descriptionArabic: 'تعلم حروف الجر التي تأخذ دائماً حالة المفعول المباشر.',
    level: 'A2',
    examples: [
      { german: 'Ich gehe durch den Park.', arabic: 'أمشي عبر الحديقة.' },
      { german: 'Wir fahren um die Stadt.', arabic: 'نقود حول المدينة.' },
      { german: 'Das Geschenk ist für dich.', arabic: 'الهدية لك.' },
      { german: 'Ohne den Schlüssel kann ich nicht rein.', arabic: 'بدون المفتاح لا أستطيع الدخول.' },
      { german: 'Gegen den Wind laufen.', arabic: 'الجري ضد الرياح.' },
      { german: 'Bis nächste Woche!', arabic: 'حتى الأسبوع القادم!' }
    ]
  },
  {
    id: '11',
    title: 'Prepositions with Dative',
    titleArabic: 'حروف الجر مع المفعول غير المباشر',
    description: 'Learn prepositions that always take the dative case.',
    descriptionArabic: 'تعلم حروف الجر التي تأخذ دائماً حالة المفعول غير المباشر.',
    level: 'A2',
    examples: [
      { german: 'Ich komme aus der Schule.', arabic: 'آتي من المدرسة.' },
      { german: 'Bei meiner Oma essen.', arabic: 'الأكل عند جدتي.' },
      { german: 'Mit dem Bus fahren.', arabic: 'السفر بالحافلة.' },
      { german: 'Nach dem Essen gehen wir.', arabic: 'بعد الأكل نذهب.' },
      { german: 'Seit einem Jahr lerne ich Deutsch.', arabic: 'أتعلم الألمانية منذ سنة.' },
      { german: 'Von meinem Vater bekomme ich Geld.', arabic: 'أحصل على المال من والدي.' }
    ]
  },
  {
    id: '12',
    title: 'Two-Way Prepositions',
    titleArabic: 'حروف الجر ذات الاتجاهين',
    description: 'Learn prepositions that can take either accusative or dative.',
    descriptionArabic: 'تعلم حروف الجر التي يمكن أن تأخذ المفعول المباشر أو غير المباشر.',
    level: 'A2',
    examples: [
      { german: 'Ich gehe in die Schule. (Akkusativ)', arabic: 'أذهب إلى المدرسة. (حركة)' },
      { german: 'Ich bin in der Schule. (Dativ)', arabic: 'أنا في المدرسة. (موقع)' },
      { german: 'Das Buch liegt auf dem Tisch.', arabic: 'الكتاب على الطاولة.' },
      { german: 'Ich lege das Buch auf den Tisch.', arabic: 'أضع الكتاب على الطاولة.' },
      { german: 'Die Katze sitzt unter dem Baum.', arabic: 'القطة تجلس تحت الشجرة.' },
      { german: 'Die Katze läuft unter den Baum.', arabic: 'القطة تجري تحت الشجرة.' }
    ]
  },
  {
    id: '13',
    title: 'Past Tense (Perfekt)',
    titleArabic: 'الماضي التام',
    description: 'Learn how to form and use the perfect tense in German.',
    descriptionArabic: 'تعلم كيفية تكوين واستخدام زمن الماضي التام في الألمانية.',
    level: 'A2',
    examples: [
      { german: 'Ich habe gegessen.', arabic: 'لقد أكلت.' },
      { german: 'Er ist gekommen.', arabic: 'لقد جاء.' },
      { german: 'Wir haben gelernt.', arabic: 'لقد تعلمنا.' },
      { german: 'Sie ist nach Hause gegangen.', arabic: 'ذهبت إلى المنزل.' },
      { german: 'Ihr habt gut gearbeitet.', arabic: 'لقد عملتم جيداً.' },
      { german: 'Sie haben das Buch gelesen.', arabic: 'لقد قرأوا الكتاب.' }
    ]
  },
  {
    id: '14',
    title: 'Separable Verbs',
    titleArabic: 'الأفعال المنفصلة',
    description: 'Learn about separable verbs and how to use them correctly.',
    descriptionArabic: 'تعلم عن الأفعال المنفصلة وكيفية استخدامها بشكل صحيح.',
    level: 'A2',
    examples: [
      { german: 'Ich stehe um 7 Uhr auf.', arabic: 'أستيقظ في الساعة السابعة.' },
      { german: 'Der Zug kommt um 9 Uhr an.', arabic: 'يصل القطار في الساعة التاسعة.' },
      { german: 'Wir gehen heute aus.', arabic: 'نخرج اليوم.' },
      { german: 'Sie macht das Licht an.', arabic: 'تشغل الضوء.' },
      { german: 'Er ruft seine Mutter an.', arabic: 'يتصل بوالدته.' },
      { german: 'Ich ziehe mich warm an.', arabic: 'ألبس ملابس دافئة.' }
    ]
  },
  {
    id: '15',
    title: 'Reflexive Verbs',
    titleArabic: 'الأفعال الانعكاسية',
    description: 'Learn about reflexive verbs and reflexive pronouns.',
    descriptionArabic: 'تعلم عن الأفعال الانعكاسية والضمائر الانعكاسية.',
    level: 'A2',
    examples: [
      { german: 'Ich wasche mich.', arabic: 'أغسل نفسي.' },
      { german: 'Sie freut sich über das Geschenk.', arabic: 'تفرح بالهدية.' },
      { german: 'Wir treffen uns um 8 Uhr.', arabic: 'نلتقي في الساعة الثامنة.' },
      { german: 'Er rasiert sich jeden Morgen.', arabic: 'يحلق كل صباح.' },
      { german: 'Sie kämmt sich die Haare.', arabic: 'تمشط شعرها.' },
      { german: 'Ihr zieht euch schnell an.', arabic: 'تلبسون بسرعة.' }
    ]
  },
  {
    id: '16',
    title: 'Imperative',
    titleArabic: 'صيغة الأمر',
    description: 'Learn how to form and use the imperative mood in German.',
    descriptionArabic: 'تعلم كيفية تكوين واستخدام صيغة الأمر في الألمانية.',
    level: 'A1',
    examples: [
      { german: 'Komm her!', arabic: 'تعال هنا!' },
      { german: 'Hören Sie zu!', arabic: 'استمعوا!' },
      { german: 'Geht nach Hause!', arabic: 'اذهبوا إلى المنزل!' },
      { german: 'Sei ruhig!', arabic: 'كن هادئاً!' },
      { german: 'Haben Sie Geduld!', arabic: 'تحلوا بالصبر!' },
      { german: 'Macht eure Hausaufgaben!', arabic: 'اعملوا واجباتكم!' }
    ]
  },
  {
    id: '17',
    title: 'Adjective Endings',
    titleArabic: 'نهايات الصفات',
    description: 'Learn how adjective endings change based on gender, case, and article.',
    descriptionArabic: 'تعلم كيف تتغير نهايات الصفات بناءً على الجنس والحالة وأداة التعريف.',
    level: 'A2',
    examples: [
      { german: 'Der große Mann', arabic: 'الرجل الكبير' },
      { german: 'Eine schöne Frau', arabic: 'امرأة جميلة' },
      { german: 'Das kleine Kind', arabic: 'الطفل الصغير' },
      { german: 'Ein alter Baum', arabic: 'شجرة قديمة' },
      { german: 'Die neue Lehrerin', arabic: 'المعلمة الجديدة' },
      { german: 'Ein interessantes Buch', arabic: 'كتاب مثير للاهتمام' }
    ]
  },
  {
    id: '18',
    title: 'Comparison of Adjectives',
    titleArabic: 'مقارنة الصفات',
    description: 'Learn how to compare adjectives in German (comparative and superlative).',
    descriptionArabic: 'تعلم كيفية مقارنة الصفات في الألمانية (التفضيل والتفضيل المطلق).',
    level: 'A2',
    examples: [
      { german: 'Mein Auto ist schneller als deins.', arabic: 'سيارتي أسرع من سيارتك.' },
      { german: 'Das ist das schönste Haus.', arabic: 'هذا أجمل منزل.' },
      { german: 'Sie ist älter als ich.', arabic: 'هي أكبر مني سناً.' },
      { german: 'Das war der beste Film.', arabic: 'كان أفضل فيلم.' },
      { german: 'Heute ist es wärmer als gestern.', arabic: 'اليوم أدفأ من أمس.' },
      { german: 'Er ist der größte Spieler.', arabic: 'هو أطول لاعب.' }
    ]
  },
  {
    id: '19',
    title: 'Future Tense',
    titleArabic: 'زمن المستقبل',
    description: 'Learn how to express future actions in German.',
    descriptionArabic: 'تعلم كيفية التعبير عن الأفعال المستقبلية في الألمانية.',
    level: 'A2',
    examples: [
      { german: 'Ich werde morgen kommen.', arabic: 'سآتي غداً.' },
      { german: 'Es wird regnen.', arabic: 'ستمطر.' },
      { german: 'Wir werden das schaffen.', arabic: 'سننجح في ذلك.' },
      { german: 'Sie wird Ärztin werden.', arabic: 'ستصبح طبيبة.' },
      { german: 'Ihr werdet Spaß haben.', arabic: 'ستستمتعون.' },
      { german: 'Sie werden uns besuchen.', arabic: 'سيزوروننا.' }
    ]
  },
  {
    id: '20',
    title: 'Conjunctions',
    titleArabic: 'حروف العطف',
    description: 'Learn how to connect sentences using German conjunctions.',
    descriptionArabic: 'تعلم كيفية ربط الجمل باستخدام حروف العطف الألمانية.',
    level: 'A2',
    examples: [
      { german: 'Ich lerne Deutsch, weil es wichtig ist.', arabic: 'أتعلم الألمانية لأنها مهمة.' },
      { german: 'Wenn es regnet, bleibe ich zu Hause.', arabic: 'عندما تمطر، أبقى في المنزل.' },
      { german: 'Ich esse und trinke.', arabic: 'آكل وأشرب.' },
      { german: 'Er kommt, aber er ist spät.', arabic: 'يأتي، لكنه متأخر.' },
      { german: 'Obwohl es kalt ist, gehe ich spazieren.', arabic: 'رغم أنه بارد، أتمشى.' },
      { german: 'Ich weiß nicht, ob er kommt.', arabic: 'لا أعرف إن كان سيأتي.' }
    ]
  },
  {
    id: '21',
    title: 'Relative Clauses',
    titleArabic: 'الجمل الموصولة',
    description: 'Learn how to form and use relative clauses in German.',
    descriptionArabic: 'تعلم كيفية تكوين واستخدام الجمل الموصولة في الألمانية.',
    level: 'B1',
    examples: [
      { german: 'Der Mann, der dort steht, ist mein Vater.', arabic: 'الرجل الذي يقف هناك هو والدي.' },
      { german: 'Das Buch, das ich lese, ist interessant.', arabic: 'الكتاب الذي أقرأه ممتع.' },
      { german: 'Die Frau, die ich kenne, kommt aus Berlin.', arabic: 'المرأة التي أعرفها تأتي من برلين.' },
      { german: 'Das Auto, das er fährt, ist neu.', arabic: 'السيارة التي يقودها جديدة.' },
      { german: 'Die Kinder, die spielen, sind laut.', arabic: 'الأطفال الذين يلعبون صاخبون.' },
      { german: 'Der Film, den wir gesehen haben, war gut.', arabic: 'الفيلم الذي شاهدناه كان جيداً.' }
    ]
  },
  {
    id: '22',
    title: 'Genitive Case',
    titleArabic: 'حالة الإضافة',
    description: 'Learn when and how to use the genitive case in German.',
    descriptionArabic: 'تعلم متى وكيف تستخدم حالة الإضافة في الألمانية.',
    level: 'B1',
    examples: [
      { german: 'Das Auto meines Vaters ist neu.', arabic: 'سيارة والدي جديدة.' },
      { german: 'Die Farbe des Hauses ist schön.', arabic: 'لون المنزل جميل.' },
      { german: 'Während des Winters ist es kalt.', arabic: 'خلال الشتاء يكون الجو بارداً.' },
      { german: 'Trotz des Regens gehen wir spazieren.', arabic: 'رغم المطر نتمشى.' },
      { german: 'Wegen der Krankheit kann er nicht kommen.', arabic: 'بسبب المرض لا يستطيع المجيء.' },
      { german: 'Das Ende des Films war überraschend.', arabic: 'نهاية الفيلم كانت مفاجئة.' }
    ]
  },
  {
    id: '23',
    title: 'Passive Voice',
    titleArabic: 'المبني للمجهول',
    description: 'Learn how to form and use the passive voice in German.',
    descriptionArabic: 'تعلم كيفية تكوين واستخدام المبني للمجهول في الألمانية.',
    level: 'B1',
    examples: [
      { german: 'Das Haus wird gebaut.', arabic: 'يتم بناء المنزل.' },
      { german: 'Der Brief wurde geschrieben.', arabic: 'تمت كتابة الرسالة.' },
      { german: 'Das Problem kann gelöst werden.', arabic: 'يمكن حل المشكلة.' },
      { german: 'Das Auto wird repariert.', arabic: 'يتم إصلاح السيارة.' },
      { german: 'Die Tür wurde geöffnet.', arabic: 'تم فتح الباب.' },
      { german: 'Das Buch wird gelesen.', arabic: 'يتم قراءة الكتاب.' }
    ]
  },
  {
    id: '24',
    title: 'Subjunctive II (Konjunktiv II)',
    titleArabic: 'الشرطية الثانية',
    description: 'Learn about Subjunctive II for hypothetical situations and polite requests.',
    descriptionArabic: 'تعلم عن الشرطية الثانية للمواقف الافتراضية والطلبات المهذبة.',
    level: 'B1',
    examples: [
      { german: 'Wenn ich reich wäre, würde ich reisen.', arabic: 'لو كنت غنياً، لسافرت.' },
      { german: 'Ich hätte gerne einen Kaffee.', arabic: 'أود أن أشرب قهوة.' },
      { german: 'Könnten Sie mir helfen?', arabic: 'هل يمكنكم مساعدتي؟' },
      { german: 'Wenn ich Zeit hätte, würde ich kommen.', arabic: 'لو كان لدي وقت، لأتيت.' },
      { german: 'Das wäre schön.', arabic: 'سيكون ذلك جميلاً.' },
      { german: 'Ich würde gern nach Deutschland fahren.', arabic: 'أود الذهاب إلى ألمانيا.' }
    ]
  },
  {
    id: '25',
    title: 'Infinitive Constructions',
    titleArabic: 'تراكيب المصدر',
    description: 'Learn about infinitive constructions with "zu" and without "zu".',
    descriptionArabic: 'تعلم عن تراكيب المصدر مع "zu" وبدون "zu".',
    level: 'A2',
    examples: [
      { german: 'Ich vergesse oft, die Tür zu schließen.', arabic: 'أنسى غالباً أن أغلق الباب.' },
      { german: 'Es ist wichtig, pünktlich zu sein.', arabic: 'من المهم أن تكون في الوقت المحدد.' },
      { german: 'Ich kann schwimmen.', arabic: 'أستطيع السباحة.' },
      { german: 'Er versucht, Deutsch zu lernen.', arabic: 'يحاول تعلم الألمانية.' },
      { german: 'Wir haben vor, ins Kino zu gehen.', arabic: 'نعتزم الذهاب إلى السينما.' },
      { german: 'Sie hört auf zu arbeiten.', arabic: 'تتوقف عن العمل.' }
    ]
  },
  {
    id: '26',
    title: 'Word Order in German',
    titleArabic: 'ترتيب الكلمات في الألمانية',
    description: 'Learn about German word order in different sentence types.',
    descriptionArabic: 'تعلم عن ترتيب الكلمات الألمانية في أنواع الجمل المختلفة.',
    level: 'A1',
    examples: [
      { german: 'Ich gehe heute ins Kino.', arabic: 'أذهب اليوم إلى السينما.' },
      { german: 'Heute gehe ich ins Kino.', arabic: 'اليوم أذهب إلى السينما.' },
      { german: 'Gehst du heute ins Kino?', arabic: 'هل تذهب اليوم إلى السينما؟' },
      { german: 'Ich weiß, dass er heute kommt.', arabic: 'أعرف أنه يأتي اليوم.' },
      { german: 'Weil ich müde bin, gehe ich nach Hause.', arabic: 'لأنني متعب، أذهب إلى المنزل.' },
      { german: 'Am Wochenende fahre ich nach Berlin.', arabic: 'في نهاية الأسبوع أذهب إلى برلين.' }
    ]
  },
  {
    id: '27',
    title: 'Temporal Expressions',
    titleArabic: 'التعبيرات الزمنية',
    description: 'Learn how to express time relationships in German.',
    descriptionArabic: 'تعلم كيفية التعبير عن العلاقات الزمنية في الألمانية.',
    level: 'A2',
    examples: [
      { german: 'Bevor ich gehe, rufe ich dich an.', arabic: 'قبل أن أذهب، سأتصل بك.' },
      { german: 'Nachdem er gegessen hatte, ging er spazieren.', arabic: 'بعد أن أكل، ذهب للتنزه.' },
      { german: 'Während des Essens sprechen wir nicht.', arabic: 'أثناء الأكل لا نتحدث.' },
      { german: 'Seit ich hier wohne, bin ich glücklich.', arabic: 'منذ أن أسكن هنا، أنا سعيد.' },
      { german: 'Bis du kommst, warte ich hier.', arabic: 'حتى تأتي، سأنتظر هنا.' },
      { german: 'Als ich jung war, spielte ich Fußball.', arabic: 'عندما كنت صغيراً، كنت ألعب كرة القدم.' }
    ]
  },
  {
    id: '28',
    title: 'Indirect Speech',
    titleArabic: 'الكلام غير المباشر',
    description: 'Learn how to report what someone else has said.',
    descriptionArabic: 'تعلم كيفية نقل ما قاله شخص آخر.',
    level: 'B1',
    examples: [
      { german: 'Er sagt, dass er müde ist.', arabic: 'يقول إنه متعب.' },
      { german: 'Sie fragte, ob ich Zeit habe.', arabic: 'سألت إن كان لدي وقت.' },
      { german: 'Er meinte, er komme später.', arabic: 'قال إنه سيأتي لاحقاً.' },
      { german: 'Sie behauptete, sie habe das nicht gewusst.', arabic: 'ادعت أنها لم تكن تعلم ذلك.' },
      { german: 'Er erzählte, er sei krank gewesen.', arabic: 'حكى أنه كان مريضاً.' },
      { german: 'Sie sagte, sie werde morgen kommen.', arabic: 'قالت إنها ستأتي غداً.' }
    ]
  },
  {
    id: '29',
    title: 'Conditional Sentences',
    titleArabic: 'الجمل الشرطية',
    description: 'Learn about different types of conditional sentences in German.',
    descriptionArabic: 'تعلم عن أنواع مختلفة من الجمل الشرطية في الألمانية.',
    level: 'B1',
    examples: [
      { german: 'Wenn es regnet, bleibe ich zu Hause.', arabic: 'إذا أمطرت، سأبقى في المنزل.' },
      { german: 'Falls du kommst, rufe mich an.', arabic: 'في حالة مجيئك، اتصل بي.' },
      { german: 'Wenn ich Zeit hätte, würde ich dir helfen.', arabic: 'لو كان لدي وقت، لساعدتك.' },
      { german: 'Hätte ich gewusst, dass du kommst, hätte ich gekocht.', arabic: 'لو كنت أعلم أنك ستأتي، لطبخت.' },
      { german: 'Sollte er anrufen, sag ihm Bescheid.', arabic: 'إذا اتصل، أخبره.' },
      { german: 'Wenn ich reich wäre, kaufte ich ein Haus.', arabic: 'لو كنت غنياً، لاشتريت منزلاً.' }
    ]
  },
  {
    id: '30',
    title: 'Participles',
    titleArabic: 'اسم المفعول واسم الفاعل',
    description: 'Learn about present and past participles in German.',
    descriptionArabic: 'تعلم عن اسم المفعول واسم الفاعل في الألمانية.',
    level: 'B1',
    examples: [
      { german: 'Das laufende Kind ist müde.', arabic: 'الطفل الجاري متعب.' },
      { german: 'Das gebrochene Fenster muss repariert werden.', arabic: 'النافذة المكسورة يجب إصلاحها.' },
      { german: 'Die schlafende Katze ist süß.', arabic: 'القطة النائمة لطيفة.' },
      { german: 'Der geschriebene Brief liegt auf dem Tisch.', arabic: 'الرسالة المكتوبة على الطاولة.' },
      { german: 'Die spielenden Kinder sind glücklich.', arabic: 'الأطفال اللاعبون سعداء.' },
      { german: 'Das gekochte Essen schmeckt gut.', arabic: 'الطعام المطبوخ لذيذ.' }
    ]
  },
  {
    id: '31',
    title: 'Advanced Sentence Structures',
    titleArabic: 'تراكيب الجمل المتقدمة',
    description: 'Learn complex sentence structures and advanced grammar patterns.',
    descriptionArabic: 'تعلم تراكيب الجمل المعقدة وأنماط القواعد المتقدمة.',
    level: 'B2',
    examples: [
      { german: 'Je mehr ich lerne, desto besser wird mein Deutsch.', arabic: 'كلما تعلمت أكثر، كلما تحسنت ألمانيتي.' },
      { german: 'Anstatt zu arbeiten, sieht er fern.', arabic: 'بدلاً من العمل، يشاهد التلفزيون.' },
      { german: 'Trotz des Regens gingen wir spazieren.', arabic: 'رغم المطر، ذهبنا للتنزه.' },
      { german: 'Ohne zu zögern half er mir.', arabic: 'بدون تردد ساعدني.' },
      { german: 'Um erfolgreich zu sein, muss man hart arbeiten.', arabic: 'لتكون ناجحاً، يجب أن تعمل بجد.' },
      { german: 'Statt dass er kommt, schickt er eine Nachricht.', arabic: 'بدلاً من أن يأتي، يرسل رسالة.' }
    ]
  },
  {
    id: '32',
    title: 'Subjunctive I (Konjunktiv I)',
    titleArabic: 'الشرطية الأولى',
    description: 'Learn about Subjunctive I for reported speech and formal contexts.',
    descriptionArabic: 'تعلم عن الشرطية الأولى للكلام المنقول والسياقات الرسمية.',
    level: 'B2',
    examples: [
      { german: 'Er sagt, er sei müde.', arabic: 'يقول إنه متعب.' },
      { german: 'Sie behauptet, sie habe das nicht gewusst.', arabic: 'تدعي أنها لم تكن تعلم ذلك.' },
      { german: 'Der Minister erklärt, die Situation werde sich verbessern.', arabic: 'يوضح الوزير أن الوضع سيتحسن.' },
      { german: 'Man sagt, er komme aus Italien.', arabic: 'يُقال إنه من إيطاليا.' },
      { german: 'Sie meinte, sie habe keine Zeit.', arabic: 'قالت إنه ليس لديها وقت.' },
      { german: 'Er berichtete, er sei krank gewesen.', arabic: 'أفاد أنه كان مريضاً.' }
    ]
  },
  {
    id: '33',
    title: 'Extended Adjective Constructions',
    titleArabic: 'تراكيب الصفات الموسعة',
    description: 'Learn about complex adjective constructions in German.',
    descriptionArabic: 'تعلم عن تراكيب الصفات المعقدة في الألمانية.',
    level: 'B2',
    examples: [
      { german: 'Der von allen geliebte Lehrer geht in Rente.', arabic: 'المعلم المحبوب من الجميع يتقاعد.' },
      { german: 'Das gestern gekaufte Auto ist schon kaputt.', arabic: 'السيارة المشتراة أمس معطلة بالفعل.' },
      { german: 'Die in Berlin lebende Künstlerin ist berühmt.', arabic: 'الفنانة التي تعيش في برلين مشهورة.' },
      { german: 'Der seit Jahren geplante Umbau beginnt endlich.', arabic: 'التجديد المخطط له منذ سنوات يبدأ أخيراً.' },
      { german: 'Das von Experten empfohlene Buch ist sehr interessant.', arabic: 'الكتاب الموصى به من الخبراء مثير جداً للاهتمام.' },
      { german: 'Die durch den Sturm beschädigten Häuser werden repariert.', arabic: 'المنازل المتضررة من العاصفة يتم إصلاحها.' }
    ]
  },
  {
    id: '34',
    title: 'Nominalization',
    titleArabic: 'التحويل إلى اسم',
    description: 'Learn how to turn verbs and adjectives into nouns.',
    descriptionArabic: 'تعلم كيفية تحويل الأفعال والصفات إلى أسماء.',
    level: 'B2',
    examples: [
      { german: 'Das Lesen macht mir Spaß.', arabic: 'القراءة تمتعني.' },
      { german: 'Das Rauchen ist ungesund.', arabic: 'التدخين غير صحي.' },
      { german: 'Die Schönheit der Natur beeindruckt mich.', arabic: 'جمال الطبيعة يعجبني.' },
      { german: 'Die Freundlichkeit der Menschen hier ist bemerkenswert.', arabic: 'لطف الناس هنا ملحوظ.' },
      { german: 'Das Verstehen der Grammatik ist wichtig.', arabic: 'فهم القواعد مهم.' },
      { german: 'Die Dunkelheit der Nacht macht mir Angst.', arabic: 'ظلام الليل يخيفني.' }
    ]
  },
  {
    id: '35',
    title: 'Modal Particles',
    titleArabic: 'الجسيمات الوسطية',
    description: 'Learn about modal particles that express attitude and emotion.',
    descriptionArabic: 'تعلم عن الجسيمات الوسطية التي تعبر عن الموقف والعاطفة.',
    level: 'B2',
    examples: [
      { german: 'Das ist ja interessant!', arabic: 'هذا مثير للاهتمام حقاً!' },
      { german: 'Komm doch mit!', arabic: 'تعال معنا!' },
      { german: 'Das ist aber schön!', arabic: 'هذا جميل جداً!' },
      { german: 'Du bist wohl müde.', arabic: 'أنت متعب على ما يبدو.' },
      { german: 'Das kann mal passieren.', arabic: 'هذا يمكن أن يحدث أحياناً.' },
      { german: 'Er ist eben so.', arabic: 'هو هكذا ببساطة.' }
    ]
  }
];