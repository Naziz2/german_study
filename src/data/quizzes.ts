import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'Was bedeutet "Hallo" auf Arabisch?',
    questionArabic: 'ماذا تعني "Hallo" بالعربية؟',
    options: ['Auf Wiedersehen', 'Guten Tag', 'Danke', 'Bitte'],
    optionsArabic: ['إلى اللقاء', 'مرحبًا', 'شكرًا', 'من فضلك'],
    correctAnswer: 1,
    explanation: '"Hallo" bedeutet "مرحبًا" auf Arabisch.'
  },
  {
    id: '2',
    question: 'Welcher Artikel ist richtig? ___ Wasser',
    questionArabic: 'ما هي أداة التعريف الصحيحة؟ ___ Wasser',
    options: ['der', 'die', 'das', 'den'],
    optionsArabic: ['der', 'die', 'das', 'den'],
    correctAnswer: 2,
    explanation: 'Das Wasser ist richtig. Wasser ist ein Neutrum.'
  },
  {
    id: '3',
    question: 'Was ist die korrekte Übersetzung für "Ich lerne Deutsch"?',
    questionArabic: 'ما هي الترجمة الصحيحة لـ "Ich lerne Deutsch"؟',
    options: [
      'أنا أحب الألمانية',
      'أنا أتحدث الألمانية',
      'أنا أتعلم الألمانية',
      'أنا أعيش في ألمانيا'
    ],
    optionsArabic: [
      'أنا أحب الألمانية',
      'أنا أتحدث الألمانية',
      'أنا أتعلم الألمانية',
      'أنا أعيش في ألمانيا'
    ],
    correctAnswer: 2,
    explanation: '"Ich lerne Deutsch" bedeutet "أنا أتعلم الألمانية".'
  },
  {
    id: '4',
    question: 'Wie sagt man "Danke" auf Deutsch?',
    questionArabic: 'كيف تقول "شكرًا" بالألمانية؟',
    options: ['Bitte', 'Hallo', 'Danke', 'Tschüss'],
    optionsArabic: ['من فضلك', 'مرحبا', 'شكرًا', 'مع السلامة'],
    correctAnswer: 2,
    explanation: '"Danke" ist das deutsche Wort für "شكرًا".'
  },
  {
    id: '5',
    question: 'Wie konjugiert man "lernen" mit "du"?',
    questionArabic: 'كيف تصرف الفعل "lernen" مع "du"؟',
    options: ['lerne', 'lernst', 'lernt', 'lernen'],
    optionsArabic: ['lerne', 'lernst', 'lernt', 'lernen'],
    correctAnswer: 1,
    explanation: 'Die richtige Form ist "du lernst".'
  }
];