// Import JSON data
import vocabularyData from './vocabulary.json';
import grammarLessonsData from './grammar_lessons.json';
import verbConjugationsData from './verb_conjugations.json';
import quizQuestionsData from './quiz_questions.json';
import categoriesData from './categories.json';

// Export the data with proper typing
export const vocabulary = vocabularyData;
export const grammarLessons = grammarLessonsData;
export const verbConjugations = verbConjugationsData;
export const quizQuestions = quizQuestionsData;
export const categories = categoriesData;

// Helper function to get word of the day
export const getWordOfTheDay = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const wordIndex = dayOfYear % vocabulary.length;
  return vocabulary[wordIndex];
};

// Helper functions for filtering data
export const getVocabularyByCategory = (categoryId: string) => {
  return vocabulary.filter(word => word.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '') === categoryId);
};

export const getVocabularyByLevel = (level: string) => {
  return vocabulary.filter(word => word.level === level);
};

export const getGrammarLessonsByLevel = (level: string) => {
  return grammarLessons.filter(lesson => lesson.level === level);
};

export const getVerbConjugationsByLevel = (level: string) => {
  return verbConjugations.filter(verb => verb.level === level);
};

export const getVerbConjugationsByType = (type: string) => {
  return verbConjugations.filter(verb => verb.type === type);
};