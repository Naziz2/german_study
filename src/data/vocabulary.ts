import { Word } from '../types';

// Helper function to generate unique IDs
const generateId = (index: number): string => `word_${index + 1}`;

export const vocabulary: Word[] = [
  // Basic Greetings and Phrases
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
    german: 'Auf Wiedersehen',
    arabic: 'مع السلامة',
    pronunciation: 'اوف فيدرزين',
    example: 'Auf Wiedersehen, bis morgen!',
    category: 'greetings',
    level: 'A1'
  },
  
  // Numbers
  {
    id: generateId(3),
    german: 'eins',
    arabic: 'واحد',
    pronunciation: 'آينس',
    example: 'Ich habe eins, zwei, drei gezählt.',
    category: 'numbers',
    level: 'A1'
  },
  {
    id: generateId(4),
    german: 'zehn',
    arabic: 'عشرة',
    pronunciation: 'تسين',
    example: 'Ich brauche zehn Minuten.',
    category: 'numbers',
    level: 'A1'
  },

  // Colors
  {
    id: generateId(5),
    german: 'rot',
    arabic: 'أحمر',
    pronunciation: 'روت',
    example: 'Das Auto ist rot.',
    category: 'colors',
    level: 'A1'
  },
  {
    id: generateId(6),
    german: 'blau',
    arabic: 'أزرق',
    pronunciation: 'بلاو',
    example: 'Der Himmel ist blau.',
    category: 'colors',
    level: 'A1'
  },

  // Food and Drinks
  {
    id: generateId(7),
    german: 'Brot',
    arabic: 'خبز',
    pronunciation: 'بروت',
    example: 'Ich esse gerne frisches Brot.',
    category: 'food',
    level: 'A1'
  },
  {
    id: generateId(8),
    german: 'Wasser',
    arabic: 'ماء',
    pronunciation: 'فاسر',
    example: 'Ich trinke viel Wasser.',
    category: 'food',
    level: 'A1'
  },

  // Family
  {
    id: generateId(9),
    german: 'Familie',
    arabic: 'عائلة',
    pronunciation: 'فاميليه',
    example: 'Meine Familie ist groß.',
    category: 'family',
    level: 'A1'
  },
  {
    id: generateId(10),
    german: 'Mutter',
    arabic: 'أم',
    pronunciation: 'موتر',
    example: 'Meine Mutter kocht gerne.',
    category: 'family',
    level: 'A1'
  },

  // Professions
  {
    id: generateId(11),
    german: 'Lehrer',
    arabic: 'معلم',
    pronunciation: 'ليرر',
    example: 'Er ist ein guter Lehrer.',
    category: 'professions',
    level: 'A1'
  },
  {
    id: generateId(12),
    german: 'Arzt',
    arabic: 'طبيب',
    pronunciation: 'آرتست',
    example: 'Der Arzt untersucht den Patienten.',
    category: 'professions',
    level: 'A1'
  },

  // Weather
  {
    id: generateId(13),
    german: 'Sonne',
    arabic: 'شمس',
    pronunciation: 'زونه',
    example: 'Die Sonne scheint heute.',
    category: 'weather',
    level: 'A1'
  },
  {
    id: generateId(14),
    german: 'Regen',
    arabic: 'مطر',
    pronunciation: 'ريجن',
    example: 'Es gibt heute Regen.',
    category: 'weather',
    level: 'A1'
  },

  // Transportation
  {
    id: generateId(15),
    german: 'Auto',
    arabic: 'سيارة',
    pronunciation: 'آوتو',
    example: 'Ich fahre mit dem Auto zur Arbeit.',
    category: 'transportation',
    level: 'A1'
  },
  {
    id: generateId(16),
    german: 'Zug',
    arabic: 'قطار',
    pronunciation: 'تسوج',
    example: 'Der Zug fährt um 9 Uhr ab.',
    category: 'transportation',
    level: 'A1'
  },

  // Time
  {
    id: generateId(17),
    german: 'Stunde',
    arabic: 'ساعة',
    pronunciation: 'شتونده',
    example: 'Eine Stunde hat 60 Minuten.',
    category: 'time',
    level: 'A1'
  },
  {
    id: generateId(18),
    german: 'Tag',
    arabic: 'يوم',
    pronunciation: 'تاج',
    example: 'Heute ist ein schöner Tag.',
    category: 'time',
    level: 'A1'
  },

  // Animals
  {
    id: generateId(19),
    german: 'Hund',
    arabic: 'كلب',
    pronunciation: 'هوند',
    example: 'Der Hund bellt.',
    category: 'animals',
    level: 'A1'
  },
  {
    id: generateId(20),
    german: 'Katze',
    arabic: 'قطة',
    pronunciation: 'كاتسه',
    example: 'Die Katze schläft.',
    category: 'animals',
    level: 'A1'
  },

  // House and Furniture
  {
    id: generateId(21),
    german: 'Haus',
    arabic: 'منزل',
    pronunciation: 'هاوس',
    example: 'Das Haus ist groß.',
    category: 'house',
    level: 'A1'
  },
  {
    id: generateId(22),
    german: 'Tisch',
    arabic: 'طاولة',
    pronunciation: 'تيش',
    example: 'Der Tisch ist aus Holz.',
    category: 'house',
    level: 'A1'
  },

  // Clothes
  {
    id: generateId(23),
    german: 'Hemd',
    arabic: 'قميص',
    pronunciation: 'همد',
    example: 'Das Hemd ist blau.',
    category: 'clothes',
    level: 'A1'
  },
  {
    id: generateId(24),
    german: 'Hose',
    arabic: 'بنطلون',
    pronunciation: 'هوزه',
    example: 'Die Hose ist zu lang.',
    category: 'clothes',
    level: 'A1'
  },

  // Body Parts
  {
    id: generateId(25),
    german: 'Kopf',
    arabic: 'رأس',
    pronunciation: 'كوبف',
    example: 'Mein Kopf tut weh.',
    category: 'body',
    level: 'A1'
  },
  {
    id: generateId(26),
    german: 'Hand',
    arabic: 'يد',
    pronunciation: 'هاند',
    example: 'Gib mir deine Hand.',
    category: 'body',
    level: 'A1'
  },

  // Emotions
  {
    id: generateId(27),
    german: 'glücklich',
    arabic: 'سعيد',
    pronunciation: 'جلوكليش',
    example: 'Ich bin glücklich.',
    category: 'emotions',
    level: 'A1'
  },
  {
    id: generateId(28),
    german: 'traurig',
    arabic: 'حزين',
    pronunciation: 'تراوريج',
    example: 'Er ist traurig.',
    category: 'emotions',
    level: 'A1'
  },

  // School and Education
  {
    id: generateId(29),
    german: 'Schule',
    arabic: 'مدرسة',
    pronunciation: 'شوله',
    example: 'Die Schule beginnt um 8 Uhr.',
    category: 'education',
    level: 'A1'
  },
  {
    id: generateId(30),
    german: 'Buch',
    arabic: 'كتاب',
    pronunciation: 'بوخ',
    example: 'Das Buch ist interessant.',
    category: 'education',
    level: 'A1'
  }

  // Note: This is a sample of 30 words. In a real implementation,
  // we would continue with thousands more words following the same pattern
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
  { id: 'education', name: 'Education', nameArabic: 'التعليم' }
];

export const getWordOfTheDay = (): Word => {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const index = seed % vocabulary.length;
  return vocabulary[index];
};