import { VerbConjugation } from './types';

export const verbConjugations: VerbConjugation[] = [
  {
    id: '1',
    infinitive: 'sein',
    infinitiveArabic: 'يكون',
    type: 'irregular',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'bin',
        du: 'bist',
        er_sie_es: 'ist',
        wir: 'sind',
        ihr: 'seid',
        sie_Sie: 'sind'
      },
      past: {
        ich: 'war',
        du: 'warst',
        er_sie_es: 'war',
        wir: 'waren',
        ihr: 'wart',
        sie_Sie: 'waren'
      },
      perfect: {
        ich: 'bin gewesen',
        du: 'bist gewesen',
        er_sie_es: 'ist gewesen',
        wir: 'sind gewesen',
        ihr: 'seid gewesen',
        sie_Sie: 'sind gewesen'
      },
      future: {
        ich: 'werde sein',
        du: 'wirst sein',
        er_sie_es: 'wird sein',
        wir: 'werden sein',
        ihr: 'werdet sein',
        sie_Sie: 'werden sein'
      }
    },
    examples: [
      { german: 'Ich bin Student.', arabic: 'أنا طالب.', tense: 'present' },
      { german: 'Er war gestern krank.', arabic: 'كان مريضاً أمس.', tense: 'past' },
      { german: 'Wir sind zu Hause gewesen.', arabic: 'كنا في المنزل.', tense: 'perfect' },
      { german: 'Sie wird morgen hier sein.', arabic: 'ستكون هنا غداً.', tense: 'future' }
    ]
  },
  {
    id: '2',
    infinitive: 'haben',
    infinitiveArabic: 'يملك',
    type: 'irregular',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'habe',
        du: 'hast',
        er_sie_es: 'hat',
        wir: 'haben',
        ihr: 'habt',
        sie_Sie: 'haben'
      },
      past: {
        ich: 'hatte',
        du: 'hattest',
        er_sie_es: 'hatte',
        wir: 'hatten',
        ihr: 'hattet',
        sie_Sie: 'hatten'
      },
      perfect: {
        ich: 'habe gehabt',
        du: 'hast gehabt',
        er_sie_es: 'hat gehabt',
        wir: 'haben gehabt',
        ihr: 'habt gehabt',
        sie_Sie: 'haben gehabt'
      },
      future: {
        ich: 'werde haben',
        du: 'wirst haben',
        er_sie_es: 'wird haben',
        wir: 'werden haben',
        ihr: 'werdet haben',
        sie_Sie: 'werden haben'
      }
    },
    examples: [
      { german: 'Ich habe einen Hund.', arabic: 'لدي كلب.', tense: 'present' },
      { german: 'Sie hatte keine Zeit.', arabic: 'لم يكن لديها وقت.', tense: 'past' },
      { german: 'Wir haben Glück gehabt.', arabic: 'كنا محظوظين.', tense: 'perfect' },
      { german: 'Er wird morgen frei haben.', arabic: 'سيكون لديه إجازة غداً.', tense: 'future' }
    ]
  },
  {
    id: '3',
    infinitive: 'werden',
    infinitiveArabic: 'يصبح',
    type: 'irregular',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'werde',
        du: 'wirst',
        er_sie_es: 'wird',
        wir: 'werden',
        ihr: 'werdet',
        sie_Sie: 'werden'
      },
      past: {
        ich: 'wurde',
        du: 'wurdest',
        er_sie_es: 'wurde',
        wir: 'wurden',
        ihr: 'wurdet',
        sie_Sie: 'wurden'
      },
      perfect: {
        ich: 'bin geworden',
        du: 'bist geworden',
        er_sie_es: 'ist geworden',
        wir: 'sind geworden',
        ihr: 'seid geworden',
        sie_Sie: 'sind geworden'
      },
      future: {
        ich: 'werde werden',
        du: 'wirst werden',
        er_sie_es: 'wird werden',
        wir: 'werden werden',
        ihr: 'werdet werden',
        sie_Sie: 'werden werden'
      }
    },
    examples: [
      { german: 'Ich werde Arzt.', arabic: 'سأصبح طبيباً.', tense: 'present' },
      { german: 'Es wurde dunkel.', arabic: 'أصبح الجو مظلماً.', tense: 'past' },
      { german: 'Sie ist Lehrerin geworden.', arabic: 'أصبحت معلمة.', tense: 'perfect' },
      { german: 'Das wird interessant werden.', arabic: 'سيصبح هذا مثيراً للاهتمام.', tense: 'future' }
    ]
  },
  {
    id: '4',
    infinitive: 'können',
    infinitiveArabic: 'يستطيع',
    type: 'modal',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'kann',
        du: 'kannst',
        er_sie_es: 'kann',
        wir: 'können',
        ihr: 'könnt',
        sie_Sie: 'können'
      },
      past: {
        ich: 'konnte',
        du: 'konntest',
        er_sie_es: 'konnte',
        wir: 'konnten',
        ihr: 'konntet',
        sie_Sie: 'konnten'
      },
      perfect: {
        ich: 'habe gekonnt',
        du: 'hast gekonnt',
        er_sie_es: 'hat gekonnt',
        wir: 'haben gekonnt',
        ihr: 'habt gekonnt',
        sie_Sie: 'haben gekonnt'
      },
      future: {
        ich: 'werde können',
        du: 'wirst können',
        er_sie_es: 'wird können',
        wir: 'werden können',
        ihr: 'werdet können',
        sie_Sie: 'werden können'
      }
    },
    examples: [
      { german: 'Ich kann schwimmen.', arabic: 'أستطيع السباحة.', tense: 'present' },
      { german: 'Er konnte nicht kommen.', arabic: 'لم يستطع المجيء.', tense: 'past' },
      { german: 'Wir haben das gekonnt.', arabic: 'استطعنا فعل ذلك.', tense: 'perfect' },
      { german: 'Sie wird das können.', arabic: 'ستستطيع فعل ذلك.', tense: 'future' }
    ]
  },
  {
    id: '5',
    infinitive: 'müssen',
    infinitiveArabic: 'يجب',
    type: 'modal',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'muss',
        du: 'musst',
        er_sie_es: 'muss',
        wir: 'müssen',
        ihr: 'müsst',
        sie_Sie: 'müssen'
      },
      past: {
        ich: 'musste',
        du: 'musstest',
        er_sie_es: 'musste',
        wir: 'mussten',
        ihr: 'musstet',
        sie_Sie: 'mussten'
      },
      perfect: {
        ich: 'habe gemusst',
        du: 'hast gemusst',
        er_sie_es: 'hat gemusst',
        wir: 'haben gemusst',
        ihr: 'habt gemusst',
        sie_Sie: 'haben gemusst'
      },
      future: {
        ich: 'werde müssen',
        du: 'wirst müssen',
        er_sie_es: 'wird müssen',
        wir: 'werden müssen',
        ihr: 'werdet müssen',
        sie_Sie: 'werden müssen'
      }
    },
    examples: [
      { german: 'Ich muss arbeiten.', arabic: 'يجب أن أعمل.', tense: 'present' },
      { german: 'Sie musste früh aufstehen.', arabic: 'كان عليها الاستيقاظ مبكراً.', tense: 'past' },
      { german: 'Wir haben das gemusst.', arabic: 'كان علينا فعل ذلك.', tense: 'perfect' },
      { german: 'Er wird das müssen.', arabic: 'سيتوجب عليه فعل ذلك.', tense: 'future' }
    ]
  },
  {
    id: '6',
    infinitive: 'wollen',
    infinitiveArabic: 'يريد',
    type: 'modal',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'will',
        du: 'willst',
        er_sie_es: 'will',
        wir: 'wollen',
        ihr: 'wollt',
        sie_Sie: 'wollen'
      },
      past: {
        ich: 'wollte',
        du: 'wolltest',
        er_sie_es: 'wollte',
        wir: 'wollten',
        ihr: 'wolltet',
        sie_Sie: 'wollten'
      },
      perfect: {
        ich: 'habe gewollt',
        du: 'hast gewollt',
        er_sie_es: 'hat gewollt',
        wir: 'haben gewollt',
        ihr: 'habt gewollt',
        sie_Sie: 'haben gewollt'
      },
      future: {
        ich: 'werde wollen',
        du: 'wirst wollen',
        er_sie_es: 'wird wollen',
        wir: 'werden wollen',
        ihr: 'werdet wollen',
        sie_Sie: 'werden wollen'
      }
    },
    examples: [
      { german: 'Ich will nach Hause.', arabic: 'أريد الذهاب إلى المنزل.', tense: 'present' },
      { german: 'Er wollte nicht kommen.', arabic: 'لم يرد المجيء.', tense: 'past' },
      { german: 'Sie hat das gewollt.', arabic: 'أرادت ذلك.', tense: 'perfect' },
      { german: 'Wir werden das wollen.', arabic: 'سنريد ذلك.', tense: 'future' }
    ]
  },
  {
    id: '7',
    infinitive: 'sollen',
    infinitiveArabic: 'ينبغي',
    type: 'modal',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'soll',
        du: 'sollst',
        er_sie_es: 'soll',
        wir: 'sollen',
        ihr: 'sollt',
        sie_Sie: 'sollen'
      },
      past: {
        ich: 'sollte',
        du: 'solltest',
        er_sie_es: 'sollte',
        wir: 'sollten',
        ihr: 'solltet',
        sie_Sie: 'sollten'
      },
      perfect: {
        ich: 'habe gesollt',
        du: 'hast gesollt',
        er_sie_es: 'hat gesollt',
        wir: 'haben gesollt',
        ihr: 'habt gesollt',
        sie_Sie: 'haben gesollt'
      },
      future: {
        ich: 'werde sollen',
        du: 'wirst sollen',
        er_sie_es: 'wird sollen',
        wir: 'werden sollen',
        ihr: 'werdet sollen',
        sie_Sie: 'werden sollen'
      }
    },
    examples: [
      { german: 'Du sollst pünktlich sein.', arabic: 'ينبغي أن تكون في الوقت المحدد.', tense: 'present' },
      { german: 'Ich sollte mehr lernen.', arabic: 'كان ينبغي أن أدرس أكثر.', tense: 'past' },
      { german: 'Er hat das gesollt.', arabic: 'كان ينبغي عليه فعل ذلك.', tense: 'perfect' },
      { german: 'Sie wird das sollen.', arabic: 'سيتوجب عليها فعل ذلك.', tense: 'future' }
    ]
  },
  {
    id: '8',
    infinitive: 'dürfen',
    infinitiveArabic: 'يُسمح له',
    type: 'modal',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'darf',
        du: 'darfst',
        er_sie_es: 'darf',
        wir: 'dürfen',
        ihr: 'dürft',
        sie_Sie: 'dürfen'
      },
      past: {
        ich: 'durfte',
        du: 'durftest',
        er_sie_es: 'durfte',
        wir: 'durften',
        ihr: 'durftet',
        sie_Sie: 'durften'
      },
      perfect: {
        ich: 'habe gedurft',
        du: 'hast gedurft',
        er_sie_es: 'hat gedurft',
        wir: 'haben gedurft',
        ihr: 'habt gedurft',
        sie_Sie: 'haben gedurft'
      },
      future: {
        ich: 'werde dürfen',
        du: 'wirst dürfen',
        er_sie_es: 'wird dürfen',
        wir: 'werden dürfen',
        ihr: 'werdet dürfen',
        sie_Sie: 'werden dürfen'
      }
    },
    examples: [
      { german: 'Darf ich reinkommen?', arabic: 'هل يُسمح لي بالدخول؟', tense: 'present' },
      { german: 'Er durfte nicht gehen.', arabic: 'لم يُسمح له بالذهاب.', tense: 'past' },
      { german: 'Wir haben das gedurft.', arabic: 'سُمح لنا بفعل ذلك.', tense: 'perfect' },
      { german: 'Sie wird das dürfen.', arabic: 'سيُسمح لها بفعل ذلك.', tense: 'future' }
    ]
  },
  {
    id: '9',
    infinitive: 'mögen',
    infinitiveArabic: 'يحب',
    type: 'modal',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'mag',
        du: 'magst',
        er_sie_es: 'mag',
        wir: 'mögen',
        ihr: 'mögt',
        sie_Sie: 'mögen'
      },
      past: {
        ich: 'mochte',
        du: 'mochtest',
        er_sie_es: 'mochte',
        wir: 'mochten',
        ihr: 'mochtet',
        sie_Sie: 'mochten'
      },
      perfect: {
        ich: 'habe gemocht',
        du: 'hast gemocht',
        er_sie_es: 'hat gemocht',
        wir: 'haben gemocht',
        ihr: 'habt gemocht',
        sie_Sie: 'haben gemocht'
      },
      future: {
        ich: 'werde mögen',
        du: 'wirst mögen',
        er_sie_es: 'wird mögen',
        wir: 'werden mögen',
        ihr: 'werdet mögen',
        sie_Sie: 'werden mögen'
      }
    },
    examples: [
      { german: 'Ich mag Pizza.', arabic: 'أحب البيتزا.', tense: 'present' },
      { german: 'Sie mochte ihn nicht.', arabic: 'لم تحبه.', tense: 'past' },
      { german: 'Wir haben das gemocht.', arabic: 'أحببنا ذلك.', tense: 'perfect' },
      { german: 'Er wird das mögen.', arabic: 'سيحب ذلك.', tense: 'future' }
    ]
  },
  {
    id: '10',
    infinitive: 'gehen',
    infinitiveArabic: 'يذهب',
    type: 'irregular',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'gehe',
        du: 'gehst',
        er_sie_es: 'geht',
        wir: 'gehen',
        ihr: 'geht',
        sie_Sie: 'gehen'
      },
      past: {
        ich: 'ging',
        du: 'gingst',
        er_sie_es: 'ging',
        wir: 'gingen',
        ihr: 'gingt',
        sie_Sie: 'gingen'
      },
      perfect: {
        ich: 'bin gegangen',
        du: 'bist gegangen',
        er_sie_es: 'ist gegangen',
        wir: 'sind gegangen',
        ihr: 'seid gegangen',
        sie_Sie: 'sind gegangen'
      },
      future: {
        ich: 'werde gehen',
        du: 'wirst gehen',
        er_sie_es: 'wird gehen',
        wir: 'werden gehen',
        ihr: 'werdet gehen',
        sie_Sie: 'werden gehen'
      }
    },
    examples: [
      { german: 'Ich gehe zur Schule.', arabic: 'أذهب إلى المدرسة.', tense: 'present' },
      { german: 'Er ging nach Hause.', arabic: 'ذهب إلى المنزل.', tense: 'past' },
      { german: 'Wir sind ins Kino gegangen.', arabic: 'ذهبنا إلى السينما.', tense: 'perfect' },
      { german: 'Sie wird morgen gehen.', arabic: 'ستذهب غداً.', tense: 'future' }
    ]
  },
  {
    id: '11',
    infinitive: 'kommen',
    infinitiveArabic: 'يأتي',
    type: 'irregular',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'komme',
        du: 'kommst',
        er_sie_es: 'kommt',
        wir: 'kommen',
        ihr: 'kommt',
        sie_Sie: 'kommen'
      },
      past: {
        ich: 'kam',
        du: 'kamst',
        er_sie_es: 'kam',
        wir: 'kamen',
        ihr: 'kamt',
        sie_Sie: 'kamen'
      },
      perfect: {
        ich: 'bin gekommen',
        du: 'bist gekommen',
        er_sie_es: 'ist gekommen',
        wir: 'sind gekommen',
        ihr: 'seid gekommen',
        sie_Sie: 'sind gekommen'
      },
      future: {
        ich: 'werde kommen',
        du: 'wirst kommen',
        er_sie_es: 'wird kommen',
        wir: 'werden kommen',
        ihr: 'werdet kommen',
        sie_Sie: 'werden kommen'
      }
    },
    examples: [
      { german: 'Kommst du mit?', arabic: 'هل ستأتي معي؟', tense: 'present' },
      { german: 'Sie kam zu spät.', arabic: 'جاءت متأخرة.', tense: 'past' },
      { german: 'Er ist endlich gekommen.', arabic: 'جاء أخيراً.', tense: 'perfect' },
      { german: 'Wir werden morgen kommen.', arabic: 'سنأتي غداً.', tense: 'future' }
    ]
  },
  {
    id: '12',
    infinitive: 'machen',
    infinitiveArabic: 'يفعل',
    type: 'regular',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'mache',
        du: 'machst',
        er_sie_es: 'macht',
        wir: 'machen',
        ihr: 'macht',
        sie_Sie: 'machen'
      },
      past: {
        ich: 'machte',
        du: 'machtest',
        er_sie_es: 'machte',
        wir: 'machten',
        ihr: 'machtet',
        sie_Sie: 'machten'
      },
      perfect: {
        ich: 'habe gemacht',
        du: 'hast gemacht',
        er_sie_es: 'hat gemacht',
        wir: 'haben gemacht',
        ihr: 'habt gemacht',
        sie_Sie: 'haben gemacht'
      },
      future: {
        ich: 'werde machen',
        du: 'wirst machen',
        er_sie_es: 'wird machen',
        wir: 'werden machen',
        ihr: 'werdet machen',
        sie_Sie: 'werden machen'
      }
    },
    examples: [
      { german: 'Was machst du?', arabic: 'ماذا تفعل؟', tense: 'present' },
      { german: 'Ich machte meine Hausaufgaben.', arabic: 'عملت واجباتي.', tense: 'past' },
      { german: 'Wir haben das gemacht.', arabic: 'فعلنا ذلك.', tense: 'perfect' },
      { german: 'Sie wird es machen.', arabic: 'ستفعل ذلك.', tense: 'future' }
    ]
  },
  {
    id: '13',
    infinitive: 'sagen',
    infinitiveArabic: 'يقول',
    type: 'regular',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'sage',
        du: 'sagst',
        er_sie_es: 'sagt',
        wir: 'sagen',
        ihr: 'sagt',
        sie_Sie: 'sagen'
      },
      past: {
        ich: 'sagte',
        du: 'sagtest',
        er_sie_es: 'sagte',
        wir: 'sagten',
        ihr: 'sagtet',
        sie_Sie: 'sagten'
      },
      perfect: {
        ich: 'habe gesagt',
        du: 'hast gesagt',
        er_sie_es: 'hat gesagt',
        wir: 'haben gesagt',
        ihr: 'habt gesagt',
        sie_Sie: 'haben gesagt'
      },
      future: {
        ich: 'werde sagen',
        du: 'wirst sagen',
        er_sie_es: 'wird sagen',
        wir: 'werden sagen',
        ihr: 'werdet sagen',
        sie_Sie: 'werden sagen'
      }
    },
    examples: [
      { german: 'Was sagst du?', arabic: 'ماذا تقول؟', tense: 'present' },
      { german: 'Er sagte die Wahrheit.', arabic: 'قال الحقيقة.', tense: 'past' },
      { german: 'Sie hat nichts gesagt.', arabic: 'لم تقل شيئاً.', tense: 'perfect' },
      { german: 'Ich werde es ihm sagen.', arabic: 'سأقول له ذلك.', tense: 'future' }
    ]
  },
  {
    id: '14',
    infinitive: 'sehen',
    infinitiveArabic: 'يرى',
    type: 'irregular',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'sehe',
        du: 'siehst',
        er_sie_es: 'sieht',
        wir: 'sehen',
        ihr: 'seht',
        sie_Sie: 'sehen'
      },
      past: {
        ich: 'sah',
        du: 'sahst',
        er_sie_es: 'sah',
        wir: 'sahen',
        ihr: 'saht',
        sie_Sie: 'sahen'
      },
      perfect: {
        ich: 'habe gesehen',
        du: 'hast gesehen',
        er_sie_es: 'hat gesehen',
        wir: 'haben gesehen',
        ihr: 'habt gesehen',
        sie_Sie: 'haben gesehen'
      },
      future: {
        ich: 'werde sehen',
        du: 'wirst sehen',
        er_sie_es: 'wird sehen',
        wir: 'werden sehen',
        ihr: 'werdet sehen',
        sie_Sie: 'werden sehen'
      }
    },
    examples: [
      { german: 'Ich sehe dich.', arabic: 'أراك.', tense: 'present' },
      { german: 'Sie sah einen Film.', arabic: 'شاهدت فيلماً.', tense: 'past' },
      { german: 'Wir haben ihn gesehen.', arabic: 'رأيناه.', tense: 'perfect' },
      { german: 'Er wird uns sehen.', arabic: 'سيرانا.', tense: 'future' }
    ]
  },
  {
    id: '15',
    infinitive: 'aufstehen',
    infinitiveArabic: 'يستيقظ',
    type: 'separable',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'stehe auf',
        du: 'stehst auf',
        er_sie_es: 'steht auf',
        wir: 'stehen auf',
        ihr: 'steht auf',
        sie_Sie: 'stehen auf'
      },
      past: {
        ich: 'stand auf',
        du: 'standest auf',
        er_sie_es: 'stand auf',
        wir: 'standen auf',
        ihr: 'standet auf',
        sie_Sie: 'standen auf'
      },
      perfect: {
        ich: 'bin aufgestanden',
        du: 'bist aufgestanden',
        er_sie_es: 'ist aufgestanden',
        wir: 'sind aufgestanden',
        ihr: 'seid aufgestanden',
        sie_Sie: 'sind aufgestanden'
      },
      future: {
        ich: 'werde aufstehen',
        du: 'wirst aufstehen',
        er_sie_es: 'wird aufstehen',
        wir: 'werden aufstehen',
        ihr: 'werdet aufstehen',
        sie_Sie: 'werden aufstehen'
      }
    },
    examples: [
      { german: 'Ich stehe um 7 Uhr auf.', arabic: 'أستيقظ في الساعة السابعة.', tense: 'present' },
      { german: 'Er stand früh auf.', arabic: 'استيقظ مبكراً.', tense: 'past' },
      { german: 'Wir sind spät aufgestanden.', arabic: 'استيقظنا متأخرين.', tense: 'perfect' },
      { german: 'Sie wird morgen aufstehen.', arabic: 'ستستيقظ غداً.', tense: 'future' }
    ]
  },
  {
    id: '16',
    infinitive: 'sich waschen',
    infinitiveArabic: 'يغسل نفسه',
    type: 'reflexive',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'wasche mich',
        du: 'wäschst dich',
        er_sie_es: 'wäscht sich',
        wir: 'waschen uns',
        ihr: 'wascht euch',
        sie_Sie: 'waschen sich'
      },
      past: {
        ich: 'wusch mich',
        du: 'wuschest dich',
        er_sie_es: 'wusch sich',
        wir: 'wuschen uns',
        ihr: 'wuschet euch',
        sie_Sie: 'wuschen sich'
      },
      perfect: {
        ich: 'habe mich gewaschen',
        du: 'hast dich gewaschen',
        er_sie_es: 'hat sich gewaschen',
        wir: 'haben uns gewaschen',
        ihr: 'habt euch gewaschen',
        sie_Sie: 'haben sich gewaschen'
      },
      future: {
        ich: 'werde mich waschen',
        du: 'wirst dich waschen',
        er_sie_es: 'wird sich waschen',
        wir: 'werden uns waschen',
        ihr: 'werdet euch waschen',
        sie_Sie: 'werden sich waschen'
      }
    },
    examples: [
      { german: 'Ich wasche mich jeden Tag.', arabic: 'أغسل نفسي كل يوم.', tense: 'present' },
      { german: 'Er wusch sich die Hände.', arabic: 'غسل يديه.', tense: 'past' },
      { german: 'Sie hat sich gewaschen.', arabic: 'اغتسلت.', tense: 'perfect' },
      { german: 'Wir werden uns waschen.', arabic: 'سنغتسل.', tense: 'future' }
    ]
  },
  {
    id: '17',
    infinitive: 'lernen',
    infinitiveArabic: 'يتعلم',
    type: 'regular',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'lerne',
        du: 'lernst',
        er_sie_es: 'lernt',
        wir: 'lernen',
        ihr: 'lernt',
        sie_Sie: 'lernen'
      },
      past: {
        ich: 'lernte',
        du: 'lerntest',
        er_sie_es: 'lernte',
        wir: 'lernten',
        ihr: 'lerntet',
        sie_Sie: 'lernten'
      },
      perfect: {
        ich: 'habe gelernt',
        du: 'hast gelernt',
        er_sie_es: 'hat gelernt',
        wir: 'haben gelernt',
        ihr: 'habt gelernt',
        sie_Sie: 'haben gelernt'
      },
      future: {
        ich: 'werde lernen',
        du: 'wirst lernen',
        er_sie_es: 'wird lernen',
        wir: 'werden lernen',
        ihr: 'werdet lernen',
        sie_Sie: 'werden lernen'
      }
    },
    examples: [
      { german: 'Ich lerne Deutsch.', arabic: 'أتعلم الألمانية.', tense: 'present' },
      { german: 'Sie lernte schnell.', arabic: 'تعلمت بسرعة.', tense: 'past' },
      { german: 'Wir haben viel gelernt.', arabic: 'تعلمنا كثيراً.', tense: 'perfect' },
      { german: 'Er wird Englisch lernen.', arabic: 'سيتعلم الإنجليزية.', tense: 'future' }
    ]
  },
  {
    id: '18',
    infinitive: 'arbeiten',
    infinitiveArabic: 'يعمل',
    type: 'regular',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'arbeite',
        du: 'arbeitest',
        er_sie_es: 'arbeitet',
        wir: 'arbeiten',
        ihr: 'arbeitet',
        sie_Sie: 'arbeiten'
      },
      past: {
        ich: 'arbeitete',
        du: 'arbeitetest',
        er_sie_es: 'arbeitete',
        wir: 'arbeiteten',
        ihr: 'arbeitetet',
        sie_Sie: 'arbeiteten'
      },
      perfect: {
        ich: 'habe gearbeitet',
        du: 'hast gearbeitet',
        er_sie_es: 'hat gearbeitet',
        wir: 'haben gearbeitet',
        ihr: 'habt gearbeitet',
        sie_Sie: 'haben gearbeitet'
      },
      future: {
        ich: 'werde arbeiten',
        du: 'wirst arbeiten',
        er_sie_es: 'wird arbeiten',
        wir: 'werden arbeiten',
        ihr: 'werdet arbeiten',
        sie_Sie: 'werden arbeiten'
      }
    },
    examples: [
      { german: 'Wo arbeitest du?', arabic: 'أين تعمل؟', tense: 'present' },
      { german: 'Er arbeitete hart.', arabic: 'عمل بجد.', tense: 'past' },
      { german: 'Sie hat lange gearbeitet.', arabic: 'عملت طويلاً.', tense: 'perfect' },
      { german: 'Wir werden zusammen arbeiten.', arabic: 'سنعمل معاً.', tense: 'future' }
    ]
  },
  {
    id: '19',
    infinitive: 'essen',
    infinitiveArabic: 'يأكل',
    type: 'irregular',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'esse',
        du: 'isst',
        er_sie_es: 'isst',
        wir: 'essen',
        ihr: 'esst',
        sie_Sie: 'essen'
      },
      past: {
        ich: 'aß',
        du: 'aßest',
        er_sie_es: 'aß',
        wir: 'aßen',
        ihr: 'aßt',
        sie_Sie: 'aßen'
      },
      perfect: {
        ich: 'habe gegessen',
        du: 'hast gegessen',
        er_sie_es: 'hat gegessen',
        wir: 'haben gegessen',
        ihr: 'habt gegessen',
        sie_Sie: 'haben gegessen'
      },
      future: {
        ich: 'werde essen',
        du: 'wirst essen',
        er_sie_es: 'wird essen',
        wir: 'werden essen',
        ihr: 'werdet essen',
        sie_Sie: 'werden essen'
      }
    },
    examples: [
      { german: 'Was isst du gern?', arabic: 'ماذا تحب أن تأكل؟', tense: 'present' },
      { german: 'Sie aß einen Apfel.', arabic: 'أكلت تفاحة.', tense: 'past' },
      
      { german: 'Wir haben Pizza gegessen.', arabic: 'أكلنا بيتزا.', tense: 'perfect' },
      { german: 'Er wird später essen.', arabic: 'سيأكل لاحقاً.', tense: 'future' }
    ]
  },
  {
    id: '20',
    infinitive: 'trinken',
    infinitiveArabic: 'يشرب',
    type: 'irregular',
    level: 'A1',
    conjugations: {
      present: {
        ich: 'trinke',
        du: 'trinkst',
        er_sie_es: 'trinkt',
        wir: 'trinken',
        ihr: 'trinkt',
        sie_Sie: 'trinken'
      },
      past: {
        ich: 'trank',
        du: 'trankst',
        er_sie_es: 'trank',
        wir: 'tranken',
        ihr: 'trankt',
        sie_Sie: 'tranken'
      },
      perfect: {
        ich: 'habe getrunken',
        du: 'hast getrunken',
        er_sie_es: 'hat getrunken',
        wir: 'haben getrunken',
        ihr: 'habt getrunken',
        sie_Sie: 'haben getrunken'
      },
      future: {
        ich: 'werde trinken',
        du: 'wirst trinken',
        er_sie_es: 'wird trinken',
        wir: 'werden trinken',
        ihr: 'werdet trinken',
        sie_Sie: 'werden trinken'
      }
    },
    examples: [
      { german: 'Ich trinke Wasser.', arabic: 'أشرب الماء.', tense: 'present' },
      { german: 'Er trank Kaffee.', arabic: 'شرب قهوة.', tense: 'past' },
      { german: 'Sie hat Tee getrunken.', arabic: 'شربت شاياً.', tense: 'perfect' },
      { german: 'Wir werden Bier trinken.', arabic: 'سنشرب بيرة.', tense: 'future' }
    ]
  }
];

// Function to get verb by infinitive
export const getVerbByInfinitive = (infinitive: string): VerbConjugation | undefined => {
  return verbConjugations.find(verb => verb.infinitive === infinitive);
};

// Function to get verbs by type
export const getVerbsByType = (type: string): VerbConjugation[] => {
  return verbConjugations.filter(verb => verb.type === type);
};

// Function to get verbs by level
export const getVerbsByLevel = (level: string): VerbConjugation[] => {
  return verbConjugations.filter(verb => verb.level === level);
};