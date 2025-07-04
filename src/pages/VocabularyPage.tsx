import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import VocabularyList from '../components/features/VocabularyList';
import { vocabulary } from '../data/vocabulary';

const VocabularyPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('vocabulary')}</h1>
        <p className="mt-2 text-lg text-gray-600">
          {t('learningVocabulary')}
        </p>
      </div>
      
      <VocabularyList words={vocabulary} />
    </div>
  );
};

export default VocabularyPage;