import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import VerbConjugationTable from '../components/features/VerbConjugationTable';

const VerbConjugationPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {t('verbConjugation') || 'Verb Conjugation'}
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          {t('verbConjugationDescription') || 'Learn German verb conjugations across different tenses and moods'}
        </p>
      </div>
      
      <VerbConjugationTable />
    </div>
  );
};

export default VerbConjugationPage;