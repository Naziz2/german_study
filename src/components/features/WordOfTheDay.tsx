import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { getWordOfTheDay } from '../../data/vocabulary';
import WordCard from '../ui/WordCard';
import { useLanguage } from '../../contexts/LanguageContext';

const WordOfTheDay: React.FC = () => {
  const [wordOfDay, setWordOfDay] = useState(getWordOfTheDay());
  const { t } = useLanguage();
  
  useEffect(() => {
    // In a real app, this might fetch from an API
    setWordOfDay(getWordOfTheDay());
  }, []);
  
  return (
    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-lg shadow-sm">
      <div className="mb-4 flex items-center">
        <Sparkles className="h-5 w-5 text-secondary-500 mr-2" />
        <h3 className="text-lg font-medium text-gray-900">{t('wordOfTheDay')}</h3>
      </div>
      <WordCard word={wordOfDay} showExample={true} />
    </div>
  );
};

export default WordOfTheDay;