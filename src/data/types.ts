export interface Word {
  id: string;
  german: string;
  arabic: string;
  pronunciation: string;
  example: string;
  category: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
}

export interface GrammarLesson {
  id: string;
  title: string;
  titleArabic: string;
  description: string;
  descriptionArabic: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  examples: Array<{
    german: string;
    arabic: string;
  }>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionArabic: string;
  options: string[];
  optionsArabic: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface LearningProgress {
  wordsLearned: number;
  lessonsCompleted: number;
  quizzesTaken: number;
  correctAnswers: number;
  streak: number;
}

export interface VerbConjugation {
  id: string;
  infinitive: string;
  infinitiveArabic: string;
  type: 'regular' | 'irregular' | 'modal' | 'separable' | 'reflexive';
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  conjugations: {
    present: {
      ich: string;
      du: string;
      er_sie_es: string;
      wir: string;
      ihr: string;
      sie_Sie: string;
    };
    past: {
      ich: string;
      du: string;
      er_sie_es: string;
      wir: string;
      ihr: string;
      sie_Sie: string;
    };
    perfect: {
      ich: string;
      du: string;
      er_sie_es: string;
      wir: string;
      ihr: string;
      sie_Sie: string;
    };
    future: {
      ich: string;
      du: string;
      er_sie_es: string;
      wir: string;
      ihr: string;
      sie_Sie: string;
    };
  };
  examples: Array<{
    german: string;
    arabic: string;
    tense: 'present' | 'past' | 'perfect' | 'future';
  }>;
}

export interface Category {
  id: string;
  name: string;
  nameArabic: string;
}