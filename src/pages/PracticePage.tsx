import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import QuizComponent from '../components/features/QuizComponent';
import { quizQuestions } from '../data/quizzes';

const PracticePage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('practice')}</h1>
        <p className="mt-2 text-lg text-gray-600">
          {t('practice')}
        </p>
      </div>
      
      <QuizComponent questions={quizQuestions} />
    </div>
  );
};

export default PracticePage;